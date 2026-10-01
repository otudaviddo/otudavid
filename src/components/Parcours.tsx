"use client";
import { useState } from "react";
import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";

type Group = { group: string; summary: string; items: readonly { years: string; title: string; detail: string }[] };

/* Une rubrique dépliable : titre + résumé visibles, détails au clic. */
function Row({ g, id }: { g: Group; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-ivory/15">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="group flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span>
          <span className="block font-serif text-2xl leading-tight text-ivory transition-colors duration-300 group-hover:text-steel">
            {g.group}
          </span>
          <span className="mt-1.5 block text-sm text-ivory/55">{g.summary}</span>
        </span>
        {/* + qui devient × */}
        <span aria-hidden className="relative block h-4 w-4 shrink-0">
          <span className="absolute left-0 top-1/2 h-px w-4 bg-ivory/70" />
          <span className={`absolute left-1/2 top-0 h-4 w-px bg-ivory/70 transition-transform duration-300 ${open ? "rotate-90 opacity-0" : ""}`} />
        </span>
      </button>

      <div
        id={id}
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <ol className="mb-8 ml-1 border-l border-ivory/15">
            {g.items.map((it, i) => (
              <li key={i} className="relative pb-6 pl-6 last:pb-0">
                <span aria-hidden className="absolute -left-[3px] top-[7px] h-[5px] w-[5px] rounded-full bg-steel/70" />
                {it.years && (
                  <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-ivory/45 tabular-nums">{it.years}</p>
                )}
                <p className="font-serif text-lg leading-snug text-ivory/90">{it.title}</p>
                <p className="mt-0.5 text-sm text-ivory/55">{it.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Column({ heading, groups, prefix }: { heading: string; groups: readonly Group[]; prefix: string }) {
  return (
    <div>
      <h3 className="text-[11px] uppercase tracking-[0.3em] text-steel">{heading}</h3>
      <div className="mt-4 border-t border-ivory/15">
        {groups.map((g, i) => <Row key={g.group} g={g} id={`${prefix}-${i}`} />)}
      </div>
    </div>
  );
}

export default function Parcours({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const p = c.parcours;
  const t = c.ui.parcours;
  return (
    <section id="parcours" data-tone="dark" aria-labelledby="parcours-title" className="relative w-full overflow-hidden bg-nightSoft">
      {/* Gravure anatomique en filigrane (clin d'œil à la carte de visite) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ecorche-marche.webp" alt="" aria-hidden width={828} height={1500} loading="lazy"
        className="pointer-events-none absolute -left-24 top-10 h-[70%] w-auto select-none opacity-[0.07] md:-left-10 md:h-[85%] md:opacity-[0.09]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="text-center" data-reveal>
          <h2 id="parcours-title" className="font-serif text-3xl tracking-[0.25em] sm:text-4xl">{t.title}</h2>
          <p className="mt-5 font-serif text-lg italic text-ivory/70 sm:text-xl">{p.intro}</p>
        </div>

        {/* Trois repères clés */}
        <dl data-reveal className="mx-auto mt-16 grid max-w-5xl border-y border-ivory/15 sm:grid-cols-3">
          {p.highlights.map((h, i) => (
            <div
              key={h.label}
              className={`px-4 py-10 text-center ${i > 0 ? "border-t border-ivory/15 sm:border-l sm:border-t-0" : ""}`}
            >
              <dt className="font-serif text-3xl tracking-[0.04em] text-ivory md:text-[2.1rem]">{h.value}</dt>
              <dd className="mt-3 text-[11px] uppercase tracking-[0.25em] text-steel">{h.label}</dd>
              <dd className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-ivory/55">{h.detail}</dd>
            </div>
          ))}
        </dl>

        {/* Formation et expérience : rubriques dépliables */}
        <div data-reveal className="mx-auto mt-20 grid max-w-5xl gap-14 md:grid-cols-2 md:gap-16">
          <Column heading={t.formation} groups={p.formation} prefix="formation" />
          <Column heading={t.experience} groups={p.experience} prefix="experience" />
        </div>

        <p className="mt-16 text-center text-[11px] uppercase tracking-[0.25em] text-ivory/50">
          {t.languages} <span className="mx-3 text-ivory/25">—</span>
          <span className="text-ivory/80">{p.languages.join(" · ")}</span>
        </p>
      </div>
    </section>
  );
}
