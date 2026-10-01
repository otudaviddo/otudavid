import { soins } from "@/content/soins";

/** Grille des motifs de consultation, avec liens vers les pages dédiées. */
export default function SoinsGrid({ tone = "light", only, title = "Motifs de consultation", intro }: {
  tone?: "light" | "dark"; only?: "osteo" | "kine"; title?: string; intro?: string;
}) {
  const list = only ? soins.filter((s) => s.discipline === only || s.discipline === "both") : soins;
  const dark = tone === "dark";
  return (
    <section id="soins" data-tone={tone} aria-labelledby="soins-title" className={`w-full ${dark ? "bg-nightSoft text-ivory" : "bg-white text-night"}`}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <div data-reveal className="text-center">
          <h2 id="soins-title" className="font-serif text-3xl tracking-[0.2em] sm:text-4xl">{title.toUpperCase()}</h2>
          {intro && <p className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed ${dark ? "text-ivory/70" : "text-night/70"}`}>{intro}</p>}
        </div>
        <ul data-reveal className={`mt-14 grid border-l border-t sm:grid-cols-2 lg:grid-cols-3 ${dark ? "border-ivory/15" : "border-night/15"}`}>
          {list.map((s) => (
            <li key={s.slug} className={`border-b border-r ${dark ? "border-ivory/15" : "border-night/15"}`}>
              <a href={`/soins/${s.slug}`} className={`group flex h-full flex-col justify-between gap-6 p-7 transition-colors duration-300 ${dark ? "hover:bg-ivory/[0.04]" : "hover:bg-ivory/40"}`}>
                <span>
                  <span className="block font-serif text-2xl leading-snug">{s.card}</span>
                  <span className={`mt-2 block text-sm ${dark ? "text-ivory/60" : "text-night/60"}`}>{s.cardText}</span>
                </span>
                <span className={`text-[11px] uppercase tracking-[0.25em] transition-transform duration-300 group-hover:translate-x-1 ${dark ? "text-steel" : "text-steelDeep"}`}>En savoir plus →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
