"use client";
import { useState } from "react";
import { content, type Lang } from "@/i18n";

/* « Pourquoi me consulter ? » : les motifs les plus fréquents, toutes disciplines confondues.
   À côté, la gravure de l'homme au bâton sert de carte du corps : chaque motif a son point,
   qui ressort quand on survole le motif (ou qu'on l'atteint au clavier).
   La carte est décorative : la liste reste la seule information pour les lecteurs d'écran. */

// Position des points sur la gravure (en pixels de l'image d'origine, 546 × 950), dans l'ordre des motifs.
const POINTS: ([number, number] | null)[] = [
  [312, 345], // douleurs lombaires
  [318, 142], // cervicales, torticolis
  [345, 458], // sciatique
  [420, 215], // épaule
  [336, 690], // genou
  [342, 898], // cheville
  [524, 352], // tendinopathies (coude)
  [338, 585], // blessures musculaires (ischio-jambiers)
  null, null, null, // douleurs persistantes, chirurgie, reprise : pas de point précis
];

export default function Reasons({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.reasons;
  const [active, setActive] = useState<number | null>(null);
  const pill = "inline-flex min-h-[52px] items-center rounded-full border border-night/35 px-7 text-xs uppercase tracking-[0.22em] transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory";
  return (
    <section id="motifs" data-tone="light" aria-labelledby="motifs-accueil-title" className="w-full bg-ivory text-night">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[minmax(0,3.6fr)_minmax(0,4fr)_minmax(0,5fr)] lg:gap-10">
        <div>
          <h2 id="motifs-accueil-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{t.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-night/75">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={c.routes.kine} className={pill}>{c.disciplines.kine.label}</a>
            <a href={c.routes.osteo} className={pill}>{c.disciplines.osteo.label}</a>
          </div>
        </div>

        {/* Carte du corps */}
        <div aria-hidden className="relative mx-auto aspect-[546/950] h-80 sm:h-96 lg:sticky lg:top-28 lg:h-[560px] lg:self-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/ecorche-baton.webp" alt="" width={546} height={950} loading="lazy"
            className="absolute inset-0 h-full w-full select-none object-contain opacity-60 mix-blend-multiply" />
          <svg viewBox="0 0 546 950" className="absolute inset-0 h-full w-full overflow-visible">
            {POINTS.map((p, i) => p && (
              <g key={i}>
                <circle cx={p[0]} cy={p[1]} r="22" className="bodymap-ring fill-steel/25" style={{ animationDelay: `${(i % 4) * 0.8}s` }} />
                <circle cx={p[0]} cy={p[1]} r="10" className={`bodymap-dot stroke-ivory ${active === i ? "is-active fill-night" : "fill-steel"}`} strokeWidth="3" />
              </g>
            ))}
          </svg>
        </div>

        <ul className="grid content-start border-t border-night/15 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-1">
          {t.items.map((it, i) => (
            <li
              key={it.label}
              onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)} onBlur={() => setActive(null)}
              className={`flex items-center gap-3 border-b border-night/15 py-4 font-serif text-2xl leading-snug transition-colors ${i === t.items.length - 1 && t.items.length % 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full transition-colors ${POINTS[i] ? (active === i ? "bg-night" : "bg-steel") : "bg-night/20"}`} />
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
