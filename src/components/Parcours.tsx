import { site } from "@/config/site";

export default function Parcours() {
  return (
    <section aria-labelledby="parcours-title" className="w-full bg-nightSoft">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <div className="border-t border-ivory/15 pt-16 text-center">
          <h2 id="parcours-title" className="font-serif text-2xl tracking-[0.25em] sm:text-3xl">
            PARCOURS
          </h2>

          <div className="mx-auto mt-14 grid max-w-4xl gap-10 text-left sm:grid-cols-2">
            {site.parcours.map((p) => (
              <div key={p.title}>
                <p className="text-xs uppercase tracking-[0.2em] text-steel">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
