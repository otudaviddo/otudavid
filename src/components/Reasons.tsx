"use client";
import { useState } from "react";
import { content, type Lang } from "@/i18n";
import Body3D, { type Hotspot } from "@/components/Body3D";

/* « Pourquoi me consulter ? » : les motifs les plus fréquents, toutes disciplines confondues,
   sur fond bleu nuit, avec un corps en 3D qui tourne sur lui-même. Chaque motif a son point :
   survoler l'un met l'autre en avant. Le corps est décoratif : la liste reste la seule
   information pour les lecteurs d'écran, et elle fonctionne seule si la 3D n'est pas disponible. */

// Points sur le modèle 3D (en mètres, y vers le haut, z vers l'avant du corps) et direction de la peau.
const HOTSPOTS: Hotspot[] = [
  { p: [0, 1.06, -0.102], n: [0, 0, -1] },        // douleurs lombaires
  { p: [0, 1.56, -0.052], n: [0, 0.2, -1] },      // cervicales, torticolis
  { p: [0.085, 0.93, -0.11], n: [0.35, 0, -1] },  // sciatique
  { p: [0.262, 1.462, -0.005], n: [0.7, 0.7, 0] },  // épaule
  { p: [0.11, 0.5, 0.072], n: [0, 0, 1] },        // genou
  { p: [0.149, 0.085, -0.014], n: [1, 0, 0] },     // cheville
  { p: [-0.338, 1.16, -0.02], n: [-1, 0, 0] },      // tendinopathies (coude)
  { p: [-0.103, 0.72, -0.078], n: [0, 0, -1] },    // blessures musculaires (ischio-jambiers)
  null, null, null,                                // douleurs persistantes, chirurgie, reprise
];

// Si la 3D ne peut pas s'afficher : la gravure de l'homme au bâton, avec les mêmes zones.
const FLAT: ([number, number] | null)[] = [[312, 345], [318, 142], [345, 458], [420, 215], [336, 690], [342, 898], [524, 352], [338, 585], null, null, null];
function FlatMap({ active }: { active: number | null }) {
  return (
    <div aria-hidden className="relative mx-auto aspect-[546/950] h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ecorche-baton.webp" alt="" width={546} height={950} loading="lazy" className="absolute inset-0 h-full w-full object-contain opacity-60 mix-blend-screen" />
      <svg viewBox="0 0 546 950" className="absolute inset-0 h-full w-full overflow-visible">
        {FLAT.map((p, i) => p && <circle key={i} cx={p[0]} cy={p[1]} r={active === i ? 16 : 10} className={active === i ? "fill-night" : "fill-steel"} />)}
      </svg>
    </div>
  );
}

export default function Reasons({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.reasons;
  const [active, setActive] = useState<number | null>(null);
  const pill = "inline-flex min-h-[52px] items-center rounded-full border border-night/35 px-7 text-xs uppercase tracking-[0.22em] transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory";
  return (
    <section id="motifs" data-tone="navy" aria-labelledby="motifs-accueil-title" className="relative w-full overflow-hidden bg-ivory text-night">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:px-10 md:py-28 lg:grid-cols-[minmax(0,3.6fr)_minmax(0,4fr)_minmax(0,5fr)] lg:gap-8">
        <div>
          <h2 id="motifs-accueil-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{t.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-night/80">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={c.routes.kine} className={pill}>{c.disciplines.kine.label}</a>
            <a href={c.routes.osteo} className={pill}>{c.disciplines.osteo.label}</a>
          </div>
        </div>

        <div className="h-[460px] sm:h-[540px] lg:sticky lg:top-24 lg:h-[640px] lg:self-start">
          <Body3D hotspots={HOTSPOTS} labels={t.items.map((it) => it.label)} active={active} onActive={setActive} fallback={<FlatMap active={active} />} />
        </div>

        <ul className="grid content-start border-t border-night/15 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-1">
          {t.items.map((it, i) => (
            <li
              key={it.label}
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)} onBlur={() => setActive(null)}
              className={`flex items-center gap-3 border-b border-night/15 py-4 font-serif text-2xl leading-snug transition-colors duration-300 ${active === i ? "text-steelDeep" : ""} ${i === t.items.length - 1 && t.items.length % 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${HOTSPOTS[i] ? (active === i ? "scale-150 bg-white" : "bg-steel") : "bg-night/25"}`} />
              {it.soin ? (
                <a href={c.soinHref(it.soin)} className="underline decoration-night/25 decoration-1 underline-offset-[6px] transition-colors hover:text-steelDeep hover:decoration-steelDeep">{it.label}</a>
              ) : <span>{it.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
