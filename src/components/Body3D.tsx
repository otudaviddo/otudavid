"use client";
import { useEffect, useRef, useState } from "react";
import type * as T from "three";

/* Corps humain en 3D, translucide, qui tourne lentement sur lui-même.
   Chaque motif de « Pourquoi me consulter ? » a son point sur le corps :
   toucher un point choisit la zone ; choisir une zone fait pivoter le corps vers elle et l'éclaire.
   Le modèle (silhouette sculptée, lissée puis compressée, /models/body.bin) et la bibliothèque 3D
   ne sont chargés qu'à l'approche de la section ; l'animation s'arrête hors écran. */

type V3 = [number, number, number];
export type Hotspot = { p: V3; n: V3 } | null;

type Props = {
  hotspots: Hotspot[];
  labels: string[];
  active: number | null;
  onActive: (i: number | null) => void;
  fallback: React.ReactNode;
};

/** Lit le modèle : [nb de coordonnées, nb d'indices] puis positions (float32) et triangles (uint16). */
async function loadBody(THREE: typeof T) {
  const res = await fetch("/models/body.bin");
  if (!res.ok) throw new Error("model");
  const buf = await res.arrayBuffer();
  const [np, ni] = new Uint32Array(buf, 0, 2);
  const pos = new Float32Array(buf, 8, np);
  const idx = new Uint16Array(buf, 8 + np * 4, ni);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  g.setIndex(new THREE.BufferAttribute(idx, 1));
  g.computeVertexNormals();
  // quelques points lumineux répartis sur la peau
  const dots: number[] = [];
  for (let i = 0; i < np / 3; i += 23) dots.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
  const points = new THREE.BufferGeometry();
  points.setAttribute("position", new THREE.Float32BufferAttribute(dots, 3));
  return { surface: g, points };
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

    const start = (THREE: typeof T, surface: T.BufferGeometry, points: T.BufferGeometry) => {
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
      camera.position.set(0, 0.92, 3.7);
      camera.lookAt(0, 0.9, 0);
      const group = new THREE.Group();
      scene.add(group);

      // 1. Masque de profondeur invisible : seule la face visible du corps est dessinée.
      const depth = new THREE.Mesh(surface, new THREE.MeshBasicMaterial({ colorWrite: false }));
      depth.renderOrder = 0;
      // 2. Peau translucide : contours lumineux, fines lignes de coupe horizontales (comme un scanner),
      //    et la zone choisie qui s'éclaire doucement.
      const uniforms = {
        uColor: { value: new THREE.Color(0x8cbcf5) },
        uGlow: { value: new THREE.Color(0xd6e8ff) },
        uSpot: { value: new THREE.Vector3(0, -10, 0) },
        uSpotK: { value: 0 },
      };
      const shell = new THREE.Mesh(surface, new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, depthFunc: THREE.LessEqualDepth, blending: THREE.AdditiveBlending, uniforms,
        vertexShader: `varying vec3 vN; varying vec3 vV; varying vec3 vP;
          void main(){ vP = position; vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
        fragmentShader: `uniform vec3 uColor; uniform vec3 uGlow; uniform vec3 uSpot; uniform float uSpotK;
          varying vec3 vN; varying vec3 vV; varying vec3 vP;
          void main(){
            float f = pow(1.0 - abs(dot(vN, vV)), 2.0);
            float y = vP.y * 55.0; float w = fwidth(y);
            float line = 1.0 - smoothstep(0.0, w * 1.4, abs(fract(y) - 0.5) - 0.5 + w);
            float spot = uSpotK * (1.0 - smoothstep(0.0, 0.16, distance(vP, uSpot)));
            vec3 col = mix(uColor, uGlow, spot);
            gl_FragColor = vec4(col, 0.06 + f * 0.62 + line * 0.11 + spot * 0.4);
          }`,
      }));
      shell.renderOrder = 2;
      // 3. Petits points lumineux.
      const sparkle = new THREE.Points(points, new THREE.PointsMaterial({ color: 0xdff0ff, size: 1.5, sizeAttenuation: false, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
      sparkle.renderOrder = 3;
      group.add(depth, shell, sparkle);

      // Les points des motifs sont posés exactement sur la peau du modèle.
      group.updateMatrixWorld(true);
      const ray = new THREE.Raycaster();
      const pts = hotspots.map((hs) => {
        if (!hs) return null;
        const n = new THREE.Vector3(...hs.n).normalize();
        const from = new THREE.Vector3(...hs.p).addScaledVector(n, 0.6);
        ray.set(from, n.clone().negate());
        const hit = ray.intersectObject(depth, false)[0];
        return { p: hit ? hit.point.clone().addScaledVector(n, 0.004) : new THREE.Vector3(...hs.p), n };
      });

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
        camera.position.z = w / h < 0.62 ? 3.7 * (0.62 / (w / h)) : 3.7;
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
        // la zone choisie s'éclaire, en fondu
        const want = a !== null && pts[a] ? 1 : 0;
        if (a !== null && pts[a]) uniforms.uSpot.value.copy(pts[a]!.p);
        uniforms.uSpotK.value += (want - uniforms.uSpotK.value) * Math.min(1, dt * 4);
        renderer.render(scene, camera);

        // place les points (calques HTML) sur le corps, et les estompe quand ils passent derrière
        const w = host.clientWidth, h = host.clientHeight;
        hotspots.forEach((hs, i) => {
          const d = dotRefs.current[i];
          if (!hs || !d) return;
          const q = pts[i]!;
          v.copy(q.p).applyMatrix4(group.matrixWorld);
          n.copy(q.n).applyQuaternion(group.quaternion);
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
        surface.dispose(); points.dispose(); renderer.dispose();
        c.remove();
      };
    };

    // charge la 3D seulement à l'approche de la section
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      try {
        const THREE = await import("three");
        const { surface, points } = await loadBody(THREE);
        if (disposed) return;
        stop = start(THREE, surface, points);
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
            onClick={() => onActive(i)}
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
