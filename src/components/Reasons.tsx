import { content, type Lang } from "@/i18n";

/* « Pourquoi me consulter ? » : les motifs les plus fréquents, toutes disciplines confondues.
   Quand un motif a une explication détaillée sur le site, il y mène. */
export default function Reasons({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.reasons;
  const pill = "inline-flex min-h-[52px] items-center rounded-full border border-night/35 px-7 text-xs uppercase tracking-[0.22em] transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory";
  return (
    <section id="motifs" data-tone="light" aria-labelledby="motifs-accueil-title" className="bg-grid w-full bg-ivory text-night">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[4fr_8fr] md:gap-20 md:px-10 md:py-32">
        <div>
          <h2 id="motifs-accueil-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{t.title}</h2>
          <p className="mt-6 text-base leading-relaxed text-night/75">{t.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={c.routes.kine} className={pill}>{c.disciplines.kine.label}</a>
            <a href={c.routes.osteo} className={pill}>{c.disciplines.osteo.label}</a>
          </div>
        </div>
        <ul className="grid content-start border-t border-night/15 sm:grid-cols-2 sm:gap-x-10">
          {t.items.map((it, i) => (
            <li key={it.label} className={`border-b border-night/15 py-4 font-serif text-2xl leading-snug ${i === t.items.length - 1 && t.items.length % 2 ? "sm:col-span-2" : ""}`}>
              {it.soin ? (
                <a href={c.soinHref(it.soin)} className="underline decoration-night/25 decoration-1 underline-offset-[6px] transition-colors hover:text-steelDeep hover:decoration-steelDeep">{it.label}</a>
              ) : it.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
