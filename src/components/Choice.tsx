"use client";
import { useEffect, useRef, useState } from "react";
type D = { url: string; upper: string };

/* ---------- Dessins techniques (tracés au trait fin) ---------- */

// Ostéopathie : équilibre et posture — fil à plomb, repères posturaux,
// colonne vertébrale et niveaux des épaules et du bassin.
function PostureDrawing() {
  const markers = [
    { y: 44, label: "" },   // tête
    { y: 104, label: "" },  // épaules
    { y: 206, label: "" },  // bassin
    { y: 292, label: "" },  // genoux
    { y: 368, label: "" },  // chevilles
  ];
  const vert = Array.from({ length: 16 }, (_, i) => {
    const t = i / 15;
    const y = 66 + t * 132;
    const x = 80 + 7 * Math.sin(t * Math.PI * 2.1 + 0.9); // courbures lordose / cyphose
    return { x, y, w: 9 + t * 5, i };
  });
  const spine = vert.map((v, i) => `${i ? "L" : "M"}${v.x.toFixed(1)} ${v.y.toFixed(1)}`).join(" ");
  const level = (y: number, d: number) => (
    <g>
      <path d={`M34 ${y} H126`} pathLength={1} stroke="currentColor" strokeWidth="0.8" style={{ transitionDelay: `${d}ms` }} />
      <path d={`M34 ${y - 5} V${y + 5} M126 ${y - 5} V${y + 5}`} pathLength={1} stroke="currentColor" strokeWidth="0.8" style={{ transitionDelay: `${d + 200}ms` }} />
      <circle cx={80} cy={y} r={4.5} pathLength={1} stroke="currentColor" strokeWidth="0.9" style={{ transitionDelay: `${d + 350}ms` }} />
    </g>
  );
  return (
    <svg viewBox="0 0 160 400" className="draw h-full w-auto" fill="none" aria-hidden>
      {/* fil à plomb */}
      <path d="M80 6 V388" pathLength={1} stroke="currentColor" strokeWidth="0.6" style={{ transitionDelay: "0ms", opacity: 0.55 }} />
      <circle cx={80} cy={30} r={13} pathLength={1} stroke="currentColor" strokeWidth="1" style={{ transitionDelay: "150ms" }} />
      {/* colonne vertébrale */}
      <path d={spine} pathLength={1} stroke="currentColor" strokeWidth="0.6" style={{ transitionDelay: "300ms", opacity: 0.6 }} />
      {vert.map((v) => (
        <rect key={v.i} x={v.x - v.w / 2} y={v.y - 3} width={v.w} height={6} rx={2}
          pathLength={1} stroke="currentColor" strokeWidth="0.9" style={{ transitionDelay: `${350 + v.i * 45}ms` }} />
      ))}
      {/* niveaux épaules et bassin */}
      {level(104, 900)}
      {level(206, 1050)}
      {/* repères posturaux sur l'axe */}
      {markers.slice(3).map((m, i) => (
        <g key={m.y}>
          <circle cx={80} cy={m.y} r={3.5} pathLength={1} stroke="currentColor" strokeWidth="1" style={{ transitionDelay: `${1200 + i * 120}ms` }} />
          <path d={`M68 ${m.y} H92`} pathLength={1} stroke="currentColor" strokeWidth="0.7" style={{ transitionDelay: `${1250 + i * 120}ms` }} />
        </g>
      ))}
      <path d="M44 388 H116" pathLength={1} stroke="currentColor" strokeWidth="0.8" style={{ transitionDelay: "1450ms" }} />
      <text x={132} y={108} className="draw-label" fill="currentColor" fontSize="9" letterSpacing="1.5">0°</text>
      <text x={132} y={210} className="draw-label" fill="currentColor" fontSize="9" letterSpacing="1.5">0°</text>
    </svg>
  );
}

// Kinésithérapie : performance et retour au sport — athlète en course
// avec capteurs de mouvement, lignes de vitesse et courbe de progression.
function PerformanceDrawing() {
  const J = {
    head: [150, 34], neck: [143, 52], sh: [140, 60], hip: [118, 138],
    elbF: [166, 88], wrF: [184, 64], elbB: [112, 90], wrB: [100, 120],
    kneeF: [158, 166], ankF: [146, 210], toeF: [162, 216],
    kneeB: [102, 192], ankB: [74, 240], toeB: [88, 250],
  } as const;
  const seg = (a: readonly number[], b: readonly number[]) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]}`;
  const bones: [keyof typeof J, keyof typeof J][] = [
    ["neck", "hip"], ["sh", "elbF"], ["elbF", "wrF"], ["sh", "elbB"], ["elbB", "wrB"],
    ["hip", "kneeF"], ["kneeF", "ankF"], ["ankF", "toeF"], ["hip", "kneeB"], ["kneeB", "ankB"], ["ankB", "toeB"],
  ];
  const dots: (keyof typeof J)[] = ["sh", "elbF", "wrF", "elbB", "wrB", "hip", "kneeF", "ankF", "kneeB", "ankB"];
  const curve = [[30, 330], [85, 322], [140, 306], [205, 284]];
  return (
    <svg viewBox="0 0 240 345" className="draw h-full w-auto" fill="none" aria-hidden>
      {/* lignes de vitesse */}
      {[70, 110, 150].map((y, i) => (
        <path key={y} d={`M${18 + i * 6} ${y} H${60 + i * 8}`} pathLength={1} stroke="currentColor" strokeWidth="0.7"
          style={{ transitionDelay: `${i * 90}ms`, opacity: 0.6 }} />
      ))}
      {/* athlète (squelette de capture de mouvement) */}
      <circle cx={J.head[0]} cy={J.head[1]} r={11} pathLength={1} stroke="currentColor" strokeWidth="1" style={{ transitionDelay: "150ms" }} />
      {bones.map(([a, b], i) => (
        <path key={i} d={seg(J[a], J[b])} pathLength={1} stroke="currentColor" strokeWidth="1.1" style={{ transitionDelay: `${250 + i * 60}ms` }} />
      ))}
      {dots.map((k, i) => (
        <circle key={k} cx={J[k][0]} cy={J[k][1]} r={3.2} pathLength={1} stroke="currentColor" strokeWidth="1" style={{ transitionDelay: `${900 + i * 40}ms` }} />
      ))}
      <path d="M40 262 H220" pathLength={1} stroke="currentColor" strokeWidth="0.6" style={{ transitionDelay: "600ms", opacity: 0.5 }} />
      {/* courbe de progression : rééducation → retour au sport */}
      <path d="M30 336 H215 M30 336 V290" pathLength={1} stroke="currentColor" strokeWidth="0.6" style={{ transitionDelay: "1100ms", opacity: 0.5 }} />
      <path d={`M${curve.map((p) => p.join(" ")).join(" L")}`} pathLength={1} stroke="currentColor" strokeWidth="1.1" style={{ transitionDelay: "1250ms" }} />
      {curve.slice(1).map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={3} pathLength={1} stroke="currentColor" strokeWidth="1" style={{ transitionDelay: `${1500 + i * 150}ms` }} />
      ))}
    </svg>
  );
}

/* ---------- Panneau cliquable ---------- */

export default function Choice({ d, image, position = "center", kind, alt = "", pro, cta, more, moreHref, label }: {
  d: D; image: string; position?: string; kind: "osteo" | "kine"; alt?: string; pro: string; cta: string;
  /** Lien secondaire vers la page du site */ more: string; moreHref: string; label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Sur écran tactile (pas de survol), l'animation se joue quand le panneau apparaît.
  useEffect(() => {
    if (!window.matchMedia("(hover: none)").matches || !ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // Profondeur 3D : à la souris, la photo, le dessin et le texte bougent
  // à des vitesses différentes, comme trois plans l'un derrière l'autre.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const b = el.getBoundingClientRect();
        el.style.setProperty("--px", (((e.clientX - b.left) / b.width - 0.5) * 2).toFixed(3));
        el.style.setProperty("--py", (((e.clientY - b.top) / b.height - 0.5) * 2).toFixed(3));
      });
    };
    const leave = () => { cancelAnimationFrame(raf); el.style.setProperty("--px", "0"); el.style.setProperty("--py", "0"); };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, []);

  return (
    <div
      ref={ref}
      className={`panel group relative flex min-h-[50svh] flex-1 overflow-hidden md:min-h-0 md:transition-[flex-grow] md:duration-700 md:ease-out md:hover:flex-[1.3] ${visible ? "is-visible" : ""}`}
    >
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        className="panel-img absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
      <span aria-hidden className="absolute inset-0 bg-night/10 transition-colors duration-700 group-hover:bg-transparent" />
      <span aria-hidden className="absolute inset-x-0 top-0 h-[26%] bg-gradient-to-b from-night/60 to-transparent" />
      {/* voile bas pour la lisibilité du texte */}
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-night/80 via-night/30 to-transparent" />

      {/* Lueur au survol */}
      <span aria-hidden className="panel-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-within:opacity-100" />

      {/* Dessin technique */}
      <span aria-hidden className="pointer-events-none absolute right-[6%] top-[22%] h-[38%] text-ivory/90 md:top-1/2 md:h-[50%] md:-translate-y-1/2">
        <span className="panel-float block h-full">
          {kind === "osteo" ? <PostureDrawing /> : <PerformanceDrawing />}
        </span>
      </span>

      {/* Tout le panneau mène à la prise de rendez-vous */}
      <a href={d.url} aria-label={`${cta} : ${label}`} className="absolute inset-0 z-[5]" />

      {/* Texte */}
      <span className="panel-text pointer-events-none relative z-10 mt-auto flex flex-col gap-4 p-7 md:p-12">
        <span className="text-[11px] uppercase tracking-[0.3em] text-ivory/75">
          {pro}
        </span>
        <span className="font-serif text-[clamp(1.9rem,8.2vw,2.6rem)] leading-none tracking-[0.12em] text-ivory md:text-[clamp(2rem,3.3vw,3.6rem)]">{d.upper}</span>
        <span className="h-px w-12 bg-ivory/40 transition-all duration-700 group-hover:w-24 group-hover:bg-steel" />
        <span className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-ivory/90 transition-transform duration-500 group-hover:translate-x-1">
            {cta}
          </span>
          {/* Lien secondaire : la page du site, pour ceux qui veulent d'abord se renseigner */}
          <a href={moreHref} aria-label={`${more} : ${label}`} className="pointer-events-auto text-xs uppercase tracking-[0.25em] text-ivory/80 underline decoration-ivory/40 decoration-1 underline-offset-[6px] transition-colors hover:text-steel hover:decoration-steel">
            {more}
          </a>
        </span>
      </span>
    </div>
  );
}
