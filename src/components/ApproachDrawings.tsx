/* Petits dessins au trait, dans l'esprit des planches d'anatomie annotées de l'accueil.
   Un dessin par étape de « Mon approche ». */
const s = { stroke: "currentColor", fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const d = (ms: number) => ({ transitionDelay: `${ms}ms` });

// Comprendre : mesure de l'angle du genou au goniomètre.
export function Goniometre() {
  return (
    <svg viewBox="0 0 96 96" className="draw h-full w-full" aria-hidden>
      <path d="M22 12 L50 46" pathLength={1} {...s} strokeWidth="1.4" style={d(0)} />
      <path d="M50 46 L36 86" pathLength={1} {...s} strokeWidth="1.4" style={d(150)} />
      <circle cx="50" cy="46" r="4.5" pathLength={1} {...s} strokeWidth="1.2" style={d(300)} />
      <path d="M50 46 L84 46" pathLength={1} {...s} strokeWidth="0.8" strokeDasharray="1" style={{ ...d(450), opacity: 0.6 }} />
      <path d="M40.4 34.5 A15 15 0 0 1 64.9 47.6" pathLength={1} {...s} strokeWidth="1" style={d(600)} />
      <path d="M45.1 60.1 A15 15 0 0 1 35 45.5" pathLength={1} {...s} strokeWidth="1" style={d(750)} />
      <text x="66" y="34" fontSize="8" fill="currentColor" className="draw-label">110°</text>
    </svg>
  );
}

// Soulager : segment de colonne, vertèbres et disques.
export function Colonne() {
  const v = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 96 96" className="draw h-full w-full" aria-hidden>
      <path d="M48 6 C 56 30, 40 62, 50 90" pathLength={1} {...s} strokeWidth="0.7" style={{ ...d(0), opacity: 0.55 }} />
      {v.map((i) => {
        const y = 12 + i * 16; const x = 48 + Math.sin(i * 0.9) * 4;
        return (
          <g key={i}>
            <rect x={x - 13} y={y} width="26" height="10" rx="3" pathLength={1} {...s} strokeWidth="1.2" style={d(150 + i * 120)} />
            <path d={`M${x + 13} ${y + 5} H${x + 22}`} pathLength={1} {...s} strokeWidth="1" style={d(250 + i * 120)} />
          </g>
        );
      })}
    </svg>
  );
}

// Renforcer : charge progressive, séance après séance.
export function Progression() {
  const bars = [16, 24, 32, 42, 54];
  return (
    <svg viewBox="0 0 96 96" className="draw h-full w-full" aria-hidden>
      <path d="M10 84 H88 M10 84 V14" pathLength={1} {...s} strokeWidth="0.8" style={{ ...d(0), opacity: 0.6 }} />
      {bars.map((h, i) => (
        <rect key={i} x={18 + i * 14} y={84 - h} width="8" height={h} rx="1.5" pathLength={1} {...s} strokeWidth="1.2" style={d(150 + i * 110)} />
      ))}
      <path d="M20 62 C 40 58, 60 44, 84 22" pathLength={1} {...s} strokeWidth="1" style={d(800)} />
      <path d="M78 21 L84 22 L82 28" pathLength={1} {...s} strokeWidth="1" style={d(1000)} />
    </svg>
  );
}

// Prévenir : retour progressif à l'activité, étapes validées.
export function Retour() {
  const pts = [[14, 74], [36, 58], [58, 44], [80, 22]];
  return (
    <svg viewBox="0 0 96 96" className="draw h-full w-full" aria-hidden>
      <path d={`M${pts.map((p) => p.join(" ")).join(" L")}`} pathLength={1} {...s} strokeWidth="1.2" style={d(0)} />
      {pts.slice(0, 3).map((p, i) => (
        <g key={i}>
          <circle cx={p[0]} cy={p[1]} r="4" pathLength={1} {...s} strokeWidth="1.1" style={d(300 + i * 150)} />
          <path d={`M${p[0] - 2} ${p[1]} l1.5 1.6 l3 -3.2`} pathLength={1} {...s} strokeWidth="1" style={d(400 + i * 150)} />
        </g>
      ))}
      <path d="M80 22 V6 M80 7 H92 L88 11 L92 15 H80" pathLength={1} {...s} strokeWidth="1.1" style={d(900)} />
      <path d="M8 86 H90" pathLength={1} {...s} strokeWidth="0.7" style={{ ...d(0), opacity: 0.5 }} />
    </svg>
  );
}

export const approachDrawings = [Goniometre, Colonne, Progression, Retour];
