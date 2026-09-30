import { site } from "@/config/site";

type Group = (typeof site.parcours.formation)[number] | (typeof site.parcours.experience)[number];

function Timeline({ heading, groups }: { heading: string; groups: readonly Group[] }) {
  return (
    <div>
      <h3 className="font-serif text-2xl tracking-[0.2em] text-ivory">{heading}</h3>
      <span className="mt-4 block h-px w-10 bg-steel/60" />

      <div className="mt-10 space-y-12">
        {groups.map((g) => (
          <div key={g.group}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-steel">{g.group}</p>
            <ol className="mt-6 border-l border-ivory/15">
              {g.items.map((it, i) => (
                <li key={i} className="relative pb-7 pl-6 last:pb-0">
                  {/* repère sur la ligne */}
                  <span
                    aria-hidden
                    className="absolute -left-[3px] top-[7px] h-[5px] w-[5px] rounded-full bg-ivory/40"
                  />
                  {it.years && (
                    <p className="mb-1.5 text-[11px] uppercase tracking-[0.2em] text-ivory/45 tabular-nums">{it.years}</p>
                  )}
                  <p className="font-serif text-lg leading-snug text-ivory/90 sm:text-xl">{it.title}</p>
                  <p className="mt-1 text-sm text-ivory/55">{it.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Parcours() {
  const p = site.parcours;
  return (
    <section id="parcours" aria-labelledby="parcours-title" className="w-full bg-nightSoft">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
        <div className="border-t border-ivory/15 pt-16 text-center">
          <h2 id="parcours-title" className="font-serif text-2xl tracking-[0.25em] sm:text-3xl">
            PARCOURS
          </h2>
          <p className="mt-5 font-serif text-lg italic text-ivory/70 sm:text-xl">{p.intro}</p>
        </div>

        {/* Trois repères clés */}
        <dl className="mx-auto mt-16 grid max-w-5xl border-y border-ivory/15 sm:grid-cols-3">
          {p.highlights.map((h, i) => (
            <div
              key={h.label}
              className={`px-4 py-10 text-center ${i > 0 ? "border-t border-ivory/15 sm:border-l sm:border-t-0" : ""}`}
            >
              <dt className="text-[11px] uppercase tracking-[0.25em] text-steel">{h.label}</dt>
              <dd className="mt-4 font-serif text-4xl tracking-[0.05em] text-ivory md:text-5xl">{h.value}</dd>
              <dd className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-ivory/55">{h.detail}</dd>
            </div>
          ))}
        </dl>

        {/* Formation et expérience */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-16 md:grid-cols-2 md:gap-20">
          <Timeline heading="FORMATION" groups={p.formation} />
          <Timeline heading="EXPÉRIENCE" groups={p.experience} />
        </div>

        <p className="mt-20 text-center text-[11px] uppercase tracking-[0.25em] text-ivory/50">
          Langues <span className="mx-3 text-ivory/25">—</span>
          <span className="text-ivory/80">{p.languages.join(" · ")}</span>
        </p>
      </div>
    </section>
  );
}
