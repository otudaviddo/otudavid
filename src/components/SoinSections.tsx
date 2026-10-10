"use client";
import { useEffect } from "react";
import type { Soin } from "@/content/soins";
import { ui, type Lang } from "@/i18n";

/** Motifs de consultation en sections dépliables, dans la page Ostéo ou Kiné.
 *  Tout le texte est présent dans la page (lisible par Google) ; on l'ouvre au clic.
 *  Un lien du type /osteo#mal-de-dos-lumbago ouvre directement la bonne section. */
export default function SoinSections({ items, lang = "fr" }: { items: Soin[]; lang?: Lang }) {
  const t = ui[lang].sections;
  useEffect(() => {
    const open = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const el = id ? document.getElementById(id) : null;
      if (el instanceof HTMLDetailsElement) { el.open = true; el.scrollIntoView({ block: "start" }); }
    };
    open();
    window.addEventListener("hashchange", open);
    return () => window.removeEventListener("hashchange", open);
  }, []);

  return (
    <section id="motifs" data-tone="light" aria-labelledby="motifs-title" className="w-full bg-white text-night">
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-28">
        <h2 id="motifs-title" className="h-display font-serif">{t.title}</h2>
        <div className="mt-14 border-t border-night/15">
          {items.map((s) => (
            <details key={s.slug} id={s.slug} className="group scroll-mt-24 border-b border-night/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block font-serif text-2xl leading-snug sm:text-3xl">{s.card}</span>
                  <span className="mt-1.5 block text-sm text-night/70">{s.cardText}</span>
                </span>
                <span aria-hidden className="relative block h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-night/70" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-night/70 transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>

              <div className="grid gap-12 pb-12 md:grid-cols-2">
                <div>
                  {s.intro.map((p, i) => <p key={i} className="mb-4 text-[15px] leading-relaxed text-night/80">{p}</p>)}
                  <h3 className="mt-8 text-sm font-semibold text-night">{s.motifsTitle}</h3>
                  <ul className="mt-3 border-t border-night/10">
                    {s.motifs.map((m) => <li key={m} className="border-b border-night/10 py-2.5 text-[15px] text-night/85">{m}</li>)}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-night">{t.care}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-night/80">{s.approcheIntro}</p>
                  <ol className="mt-6 border-l border-night/15">
                    {s.phases.map((ph, i) => (
                      <li key={ph.title} className="relative pb-5 pl-6 last:pb-0">
                        <span aria-hidden className="absolute -left-[4px] top-[8px] h-[7px] w-[7px] rounded-full bg-steelDeep" />
                        <p className="font-serif text-lg"><span className="mr-2 text-steelDeep">{i + 1}.</span>{ph.title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-night/75">{ph.text}</p>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-8 rounded-2xl border border-night/15 bg-ivory/60 p-5">
                    <p className="text-sm font-semibold text-night">{t.alert}</p>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-night/80">
                      {s.alerte.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </div>
                  <dl className="mt-8 space-y-4">
                    {s.faq.map((f) => (
                      <div key={f.q}>
                        <dt className="font-serif text-lg">{f.q}</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-night/75">{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
