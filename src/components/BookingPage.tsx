import { site, disciplines } from "@/config/site";

type D = (typeof disciplines)[keyof typeof disciplines];

export default function BookingPage({ d }: { d: D }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-24 text-center">
      <p className="rise text-xs uppercase tracking-[0.3em] text-ivory/60">{site.name}</p>
      <h1 className="rise d1 mt-6 font-serif text-4xl tracking-[0.2em] sm:text-5xl">{d.upper}</h1>
      <span className="rise d1 my-8 h-px w-12 bg-ivory/30" />

      <p className="rise d1 max-w-md text-sm leading-relaxed text-ivory/70">{d.intro}</p>

      <a
        href={d.url}
        className="rise d2 mt-10 inline-flex min-h-[56px] items-center border border-ivory/40 px-10 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-steel hover:text-steel"
      >
        Accéder au profil Doctoranytime →
      </a>

      <div className="rise d2 mt-16 grid gap-8 text-left text-sm text-ivory/70 sm:grid-cols-2">
        {site.addresses.map((a) => (
          <address key={a.label} className="not-italic">
            <p className="mb-1 font-serif text-lg tracking-[0.05em] text-ivory">Cabinet {a.label}</p>
            <p>{a.lines}</p>
          </address>
        ))}
      </div>
    </section>
  );
}
