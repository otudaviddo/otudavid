import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";

/* Bandeau blanc de réassurance, sous l'accueil. */
export default function TrustBand({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const items: { t: string; d: string; href?: string }[] = c.ui.trust.map((it, i) =>
    i === 2 ? { t: c.upobShort, d: it.d, href: site.upob.url } : it,
  );
  return (
    <section data-tone="light" aria-label={c.ui.trustAria} className="w-full border-b border-night/10 bg-white text-night">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
        {items.map((it, i) => {
          const inner = (
            <>
              <span className="block font-serif text-xl leading-tight sm:text-2xl">{it.t}</span>
              <span className="mt-1 block text-[11px] uppercase tracking-[0.2em] text-night/55">{it.d}</span>
            </>
          );
          return (
            <li key={it.t} className={`px-5 py-7 text-center md:py-9 ${i % 2 ? "border-l border-night/10" : ""} ${i > 1 ? "border-t border-night/10 md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}>
              {it.href ? <a href={it.href} target="_blank" rel="noopener noreferrer" className="hover:text-steelDeep">{inner}</a> : inner}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
