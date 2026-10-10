import type { QA } from "@/content/faq";
import { site } from "@/config/site";
import { ui, type Lang } from "@/i18n";

/** Questions fréquentes : titre fixe à gauche, questions à déplier à droite.
 *  Éléments <details> natifs : accessibles au clavier et lisibles par Google sans script. */
export default function FaqList({ items, title, id = "faq", lang = "fr", tint = false }: {
  items: QA[]; title?: string; id?: string; lang?: Lang; tint?: boolean;
}) {
  const t = ui[lang].faq;
  title = title ?? t.title;
  return (
    <section id={id} data-tone="light" aria-labelledby={`${id}-title`} className={`w-full text-night ${tint ? "bg-[#F2F5F9]" : "bg-[#FBFCFD]"}`}>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <h2 id={`${id}-title`} className="h-display font-serif">{title}</h2>
            <p className="mt-8 font-serif text-2xl">{t.other}</p>
            <p className="mt-2 max-w-xs text-base leading-relaxed text-night/70">{t.call}</p>
            <a href={site.phoneHref} className="mt-4 inline-flex min-h-[48px] items-center rounded-full bg-night px-6 text-[15px] font-medium text-ivory transition-colors duration-300 hover:bg-steelDeep">
              {site.phone}
            </a>
          </div>
        </div>
        <div className="md:col-span-8">
          {items.map((it, i) => (
            <details key={i} data-reveal className="faq-item group border-b border-night/10 first:border-t">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-6 py-6 font-serif text-[clamp(1.3rem,2vw,1.6rem)] leading-snug transition-colors duration-300 hover:text-steelDeep [&::-webkit-details-marker]:hidden">
                {it.q}
                <span aria-hidden className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-px w-4 bg-current" />
                  <span className="absolute left-1/2 top-0 h-4 w-px bg-current transition-transform duration-300 ease-[cubic-bezier(.16,1,.3,1)] group-open:rotate-90 group-open:opacity-0" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-base leading-relaxed text-night/75">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
