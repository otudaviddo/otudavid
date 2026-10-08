"use client";
import { useEffect, useRef, useState } from "react";
import type * as T from "three";

/* Corps humain en 3D, en fils lumineux, qui tourne lentement sur lui-même.
   Chaque motif de « Pourquoi me consulter ? » a son point sur le corps :
   - survoler (ou toucher) un point met le motif en avant dans la liste ;
   - survoler un motif fait pivoter le corps pour montrer le point (le dos pour les lombaires, la face pour le genou).
   La bibliothèque 3D n'est chargée qu'à l'approche de la section, et l'animation s'arrête hors écran.
   Le modèle est entièrement construit ici (formes simples lissées) : aucune image ni modèle externe. */

type V3 = [number, number, number];
export type Hotspot = { p: V3; n: V3 } | null;

type Props = {
  hotspots: Hotspot[];
  labels: string[];
  active: number | null;
  onActive: (i: number | null) => void;
  fallback: React.ReactNode;
};

/* ---------- Construction du corps : des « tubes » à section elliptique, le long d'un chemin ---------- */

type Ring = { c: V3; rx: number; rz: number };
type Part = { rings: Ring[]; capStart?: boolean; capEnd?: boolean };

const SEG = 20; // points par anneau

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

// Lisse une suite d'anneaux (Catmull-Rom sur le centre, interpolation des rayons).
function smooth(rings: Ring[], steps: number): Ring[] {
  const out: Ring[] = [];
  for (let i = 0; i < rings.length - 1; i++) {
    const p0 = rings[Math.max(0, i - 1)], p1 = rings[i], p2 = rings[i + 1], p3 = rings[Math.min(rings.length - 1, i + 2)];
    for (let s = 0; s < steps; s++) {
      const t = s / steps, t2 = t * t, t3 = t2 * t;
      const cr = (a: number, b: number, c: number, d: number) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      out.push({
        c: [cr(p0.c[0], p1.c[0], p2.c[0], p3.c[0]), cr(p0.c[1], p1.c[1], p2.c[1], p3.c[1]), cr(p0.c[2], p1.c[2], p2.c[2], p3.c[2])],
        rx: lerp(p1.rx, p2.rx, t * t * (3 - 2 * t)),
        rz: lerp(p1.rz, p2.rz, t * t * (3 - 2 * t)),
      });
    }
  }
  out.push(rings[rings.length - 1]);
  return out;
}

function mirror(rings: Ring[]): Ring[] { return rings.map((r) => ({ ...r, c: [-r.c[0], r.c[1], r.c[2]] as V3 })); }

function ellipsoid(c: V3, rx: number, ry: number, rz: number, n = 14): Ring[] {
  const out: Ring[] = [];
  for (let i = 0; i <= n; i++) {
    const a = -Math.PI / 2 + (Math.PI * i) / n;
    const k = Math.max(Math.cos(a), 0.02);
    out.push({ c: [c[0], c[1] + Math.sin(a) * ry, c[2]], rx: rx * k, rz: rz * k });
  }
  return out;
}

function bodyParts(): Part[] {
  const torso: Ring[] = smooth([
    { c: [0, 0.86, 0.0], rx: 0.06, rz: 0.05 },
    { c: [0, 0.91, 0.0], rx: 0.168, rz: 0.115 },
    { c: [0, 0.99, -0.005], rx: 0.172, rz: 0.112 },
    { c: [0, 1.08, 0.0], rx: 0.146, rz: 0.1 },
    { c: [0, 1.18, 0.012], rx: 0.158, rz: 0.11 },
    { c: [0, 1.28, 0.02], rx: 0.186, rz: 0.125 },
    { c: [0, 1.37, 0.015], rx: 0.205, rz: 0.12 },
    { c: [0, 1.43, 0.0], rx: 0.205, rz: 0.1 },
    { c: [0, 1.475, 0.0], rx: 0.15, rz: 0.085 },
    { c: [0, 1.515, 0.0], rx: 0.075, rz: 0.068 },
    { c: [0, 1.56, 0.006], rx: 0.056, rz: 0.058 },
    { c: [0, 1.62, 0.012], rx: 0.05, rz: 0.055 },
  ], 3);
  const head = ellipsoid([0, 1.73, 0.014], 0.086, 0.118, 0.1, 14);
  const arm = smooth([
    { c: [0.185, 1.45, 0.0], rx: 0.05, rz: 0.055 },
    { c: [0.228, 1.415, -0.005], rx: 0.066, rz: 0.064 },
    { c: [0.262, 1.3, -0.012], rx: 0.052, rz: 0.055 },
    { c: [0.3, 1.16, -0.02], rx: 0.038, rz: 0.04 },
    { c: [0.335, 1.04, -0.005], rx: 0.038, rz: 0.042 },
    { c: [0.368, 0.92, 0.015], rx: 0.026, rz: 0.031 },
    { c: [0.384, 0.85, 0.025], rx: 0.016, rz: 0.044 },
    { c: [0.395, 0.77, 0.03], rx: 0.012, rz: 0.031 },
    { c: [0.398, 0.74, 0.03], rx: 0.004, rz: 0.008 },
  ], 4);
  const leg = smooth([
    { c: [0.092, 0.97, 0.0], rx: 0.09, rz: 0.105 },
    { c: [0.1, 0.8, 0.012], rx: 0.088, rz: 0.092 },
    { c: [0.106, 0.63, 0.016], rx: 0.066, rz: 0.07 },
    { c: [0.11, 0.5, 0.02], rx: 0.05, rz: 0.052 },
    { c: [0.112, 0.38, -0.002], rx: 0.054, rz: 0.064 },
    { c: [0.115, 0.24, -0.012], rx: 0.042, rz: 0.046 },
    { c: [0.118, 0.1, -0.014], rx: 0.031, rz: 0.033 },
    { c: [0.118, 0.07, -0.014], rx: 0.031, rz: 0.031 },
  ], 4);
  // Pied : le chemin avance vers l'avant ; la largeur reste sur x, la hauteur passe sur y.
  const foot = smooth([
    { c: [0.118, 0.045, -0.05], rx: 0.028, rz: 0.03 },
    { c: [0.121, 0.04, 0.0], rx: 0.036, rz: 0.04 },
    { c: [0.126, 0.03, 0.07], rx: 0.044, rz: 0.026 },
    { c: [0.13, 0.022, 0.14], rx: 0.036, rz: 0.014 },
    { c: [0.131, 0.02, 0.16], rx: 0.01, rz: 0.005 },
  ], 3);
  return [
    { rings: torso, capStart: true, capEnd: true },
    { rings: head, capStart: true, capEnd: true },
    { rings: arm, capStart: true, capEnd: true },
    { rings: mirror(arm), capStart: true, capEnd: true },
    { rings: leg, capStart: true, capEnd: true },
    { rings: mirror(leg), capStart: true, capEnd: true },
    { rings: foot, capStart: true, capEnd: true },
    { rings: mirror(foot), capStart: true, capEnd: true },
  ];
}

// Transforme un tube en sommets (pour la surface), en lignes (anneaux + méridiens) et en points.
function build(THREE: typeof T) {
  const pos: number[] = [], idx: number[] = [], lines: number[] = [], dots: number[] = [];
  for (const part of bodyParts()) {
    const R = part.rings;
    const base = pos.length / 3;
    for (let i = 0; i < R.length; i++) {
      const a = R[Math.max(0, i - 1)].c, b = R[Math.min(R.length - 1, i + 1)].c;
      const t = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]).normalize();
      const ref = Math.abs(t.z) > 0.8 ? new THREE.Vector3(0, 1, 0) : new THREE.Vector3(0, 0, 1);
      const u = new THREE.Vector3().crossVectors(t, ref).normalize();
      const v = new THREE.Vector3().crossVectors(u, t).normalize();
      if (Math.abs(t.z) > 0.8) { u.set(1, 0, 0); v.set(0, 1, 0); }
      else if (u.x < 0) u.negate();
      if (Math.abs(t.z) <= 0.8 && v.z < 0) v.negate();
      for (let s = 0; s < SEG; s++) {
        const ang = (s / SEG) * Math.PI * 2;
        const x = R[i].c[0] + Math.cos(ang) * R[i].rx * u.x + Math.sin(ang) * R[i].rz * v.x;
        const y = R[i].c[1] + Math.cos(ang) * R[i].rx * u.y + Math.sin(ang) * R[i].rz * v.y;
        const z = R[i].c[2] + Math.cos(ang) * R[i].rx * u.z + Math.sin(ang) * R[i].rz * v.z;
        pos.push(x, y, z);
        if ((i * 7 + s * 3) % 11 === 0) dots.push(x, y, z);
      }
    }
    for (let i = 0; i < R.length - 1; i++) {
      for (let s = 0; s < SEG; s++) {
        const a = base + i * SEG + s, b = base + i * SEG + ((s + 1) % SEG);
        const c = base + (i + 1) * SEG + s, d = base + (i + 1) * SEG + ((s + 1) % SEG);
        idx.push(a, c, b, b, c, d);
        // maillage visible : un anneau sur deux, un méridien sur deux
        const p = (k: number) => [pos[k * 3], pos[k * 3 + 1], pos[k * 3 + 2]];
        if (i % 2 === 0) lines.push(...p(a), ...p(b));
        if (s % 2 === 0) lines.push(...p(a), ...p(c));
      }
    }
    const cap = (ring: number) => {
      const center = new THREE.Vector3();
      for (let s = 0; s < SEG; s++) center.add(new THREE.Vector3(pos[(base + ring * SEG + s) * 3], pos[(base + ring * SEG + s) * 3 + 1], pos[(base + ring * SEG + s) * 3 + 2]));
      center.divideScalar(SEG);
      const ci = pos.length / 3; pos.push(center.x, center.y, center.z);
      for (let s = 0; s < SEG; s++) idx.push(ci, base + ring * SEG + s, base + ring * SEG + ((s + 1) % SEG));
    };
    if (part.capStart) cap(0);
    if (part.capEnd) cap(R.length - 1);
  }
  const surface = new THREE.BufferGeometry();
  surface.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  surface.setIndex(idx);
  surface.computeVertexNormals();
  const wire = new THREE.BufferGeometry();
  wire.setAttribute("position", new THREE.Float32BufferAttribute(lines, 3));
  const points = new THREE.BufferGeometry();
  points.setAttribute("position", new THREE.Float32BufferAttribute(dots, 3));
  return { surface, wire, points };
}

/* ---------- Composant ---------- */

export default function Body3D({ hotspots, labels, active, onActive, fallback }: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const canvasHost = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeRef = useRef<number | null>(active);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => { activeRef.current = active; }, [active]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let disposed = false;
    let stop: () => void = () => {};

    const start = (THREE: typeof T) => {
      const host = canvasHost.current!;
      let renderer: T.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch { setFailed(true); return () => {}; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.style.display = "block";

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 20);
      camera.position.set(0, 0.98, 4.3);
      camera.lookAt(0, 0.9, 0);
      const group = new THREE.Group();
      scene.add(group);

      const { surface, wire, points } = build(THREE);
      // 1. Masque de profondeur invisible : cache les fils situés derrière le corps.
      const depth = new THREE.Mesh(surface, new THREE.MeshBasicMaterial({ colorWrite: false }));
      depth.renderOrder = 0;
      // 2. Enveloppe lumineuse, plus claire sur les contours (effet « hologramme »).
      const shell = new THREE.Mesh(surface, new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
        uniforms: { uColor: { value: new THREE.Color(0x7fb2ee) } },
        vertexShader: `varying vec3 vN; varying vec3 vV;
          void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
        fragmentShader: `uniform vec3 uColor; varying vec3 vN; varying vec3 vV;
          void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.2); gl_FragColor = vec4(uColor, 0.03 + f*0.32); }`,
      }));
      shell.renderOrder = 2;
      // 3. Maillage en fils.
      const lines = new THREE.LineSegments(wire, new THREE.LineBasicMaterial({ color: 0xb9d5f5, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false }));
      lines.renderOrder = 1;
      // 4. Petits points lumineux.
      const sparkle = new THREE.Points(points, new THREE.PointsMaterial({ color: 0xdff0ff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0.45, blending: THREE.AdditiveBlending, depthWrite: false }));
      sparkle.renderOrder = 3;
      group.add(depth, lines, shell, sparkle);

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let angle = 0.35, velocity = 0, dragging = false, lastX = 0, idle = 0;
      let raf = 0, visible = true, last = performance.now();

      const resize = () => {
        const w = host.clientWidth, h = host.clientHeight;
        renderer.setSize(w, h, false);
        renderer.domElement.style.width = w + "px";
        renderer.domElement.style.height = h + "px";
        camera.aspect = w / h;
        // le corps entier reste visible quelle que soit la forme du cadre
        camera.position.z = w / h < 0.55 ? 4.3 * (0.55 / (w / h)) : 4.3;
        camera.updateProjectionMatrix();
      };
      resize();
      const ro = new ResizeObserver(resize); ro.observe(host);

      const v = new THREE.Vector3(), n = new THREE.Vector3(), toCam = new THREE.Vector3();
      const tick = (now: number) => {
        const dt = Math.min((now - last) / 1000, 0.05); last = now;
        const a = activeRef.current;
        const target = a !== null && hotspots[a] ? -Math.atan2(hotspots[a]!.n[0], hotspots[a]!.n[2]) : null;
        if (dragging) {
          // la main du visiteur commande
        } else if (target !== null) {
          // pivote par le chemin le plus court vers le point du motif survolé
          let diff = target - angle;
          diff = Math.atan2(Math.sin(diff), Math.cos(diff));
          angle += reduce ? diff : diff * Math.min(1, dt * 5);
          idle = 0;
        } else {
          angle += velocity * dt;
          velocity *= Math.pow(0.04, dt);
          idle += dt;
          if (!reduce && idle > 1.2) angle += 0.28 * dt; // rotation lente au repos
        }
        group.rotation.y = angle;
        group.updateMatrixWorld();
        renderer.render(scene, camera);

        // place les points (calques HTML) sur le corps, et les estompe quand ils passent derrière
        const w = host.clientWidth, h = host.clientHeight;
        hotspots.forEach((hs, i) => {
          const d = dotRefs.current[i];
          if (!hs || !d) return;
          v.set(...hs.p).applyMatrix4(group.matrixWorld);
          n.set(...hs.n).normalize().applyQuaternion(group.quaternion);
          toCam.copy(camera.position).sub(v).normalize();
          const facing = n.dot(toCam);
          const p = v.clone().project(camera);
          d.style.transform = `translate(${((p.x + 1) / 2) * w}px, ${((1 - p.y) / 2) * h}px)`;
          const o = Math.max(0, Math.min(1, (facing + 0.15) * 2.2));
          d.style.opacity = String(i === a ? 1 : o);
          d.style.pointerEvents = o > 0.4 || i === a ? "auto" : "none";
        });
        if (visible) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);

      // ne calcule rien quand la section n'est pas à l'écran
      const vis = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible) { last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(tick); }
      });
      vis.observe(host);

      // faire tourner le corps à la souris ou au doigt (glisser horizontalement)
      const down = (e: PointerEvent) => { dragging = true; lastX = e.clientX; velocity = 0; };
      const move = (e: PointerEvent) => {
        if (!dragging) return;
        const dx = e.clientX - lastX; lastX = e.clientX;
        angle += dx * 0.01; velocity = dx * 0.6; idle = 0;
      };
      const up = () => { dragging = false; };
      const c = renderer.domElement;
      c.style.touchAction = "pan-y";
      c.addEventListener("pointerdown", down);
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);

      return () => {
        cancelAnimationFrame(raf); ro.disconnect(); vis.disconnect();
        c.removeEventListener("pointerdown", down);
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        surface.dispose(); wire.dispose(); points.dispose(); renderer.dispose();
        c.remove();
      };
    };

    // charge la 3D seulement à l'approche de la section
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      try {
        const THREE = await import("three");
        if (disposed) return;
        stop = start(THREE);
        setReady(true);
      } catch { setFailed(true); }
    }, { rootMargin: "500px" });
    io.observe(el);
    return () => { disposed = true; io.disconnect(); stop(); };
  }, [hotspots]);

  if (failed) return <>{fallback}</>;

  return (
    <div ref={wrap} className="relative h-full w-full select-none">
      {/* halo au sol et lueur derrière le corps */}
      <span aria-hidden className="pointer-events-none absolute inset-x-[22%] bottom-[9%] h-[5%] rounded-[50%] bg-steel/25 blur-xl" />
      <span aria-hidden className="pointer-events-none absolute inset-[12%] rounded-full bg-steel/[0.06] blur-3xl" />
      <div ref={canvasHost} className={`absolute inset-0 cursor-grab transition-opacity duration-700 active:cursor-grabbing ${ready ? "opacity-100" : "opacity-0"}`} />
      {/* points des motifs : calques HTML, décoratifs (la liste reste l'information principale) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {hotspots.map((hs, i) => hs && (
          <div
            key={i}
            ref={(d) => { dotRefs.current[i] = d; }}
            className="absolute left-0 top-0 opacity-0"
            onPointerEnter={(e) => { if (e.pointerType === "mouse") onActive(i); }}
            onPointerLeave={(e) => { if (e.pointerType === "mouse") onActive(null); }}
            onPointerDown={(e) => { if (e.pointerType !== "mouse") onActive(active === i ? null : i); }}
          >
            <span className="absolute -left-4 -top-4 block h-8 w-8 cursor-pointer" />
            <span className={`body3d-ring pointer-events-none absolute -left-3 -top-3 block h-6 w-6 rounded-full bg-steel/40 ${active === i ? "is-active" : ""}`} style={{ animationDelay: `${(i % 4) * 0.7}s` }} />
            <span className={`pointer-events-none absolute -left-[6px] -top-[6px] block h-3 w-3 rounded-full border-2 border-white transition-transform duration-300 ${active === i ? "scale-150 bg-white" : "bg-steel"}`} />
            {active === i && (
              <span className="pointer-events-none absolute left-4 top-0 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-1 text-xs font-medium text-[#0B1F3A] shadow-lg">
                {labels[i]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
