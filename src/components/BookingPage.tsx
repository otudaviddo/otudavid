import { disciplines } from "@/config/site";

type D = (typeof disciplines)[keyof typeof disciplines];

export default function BookingPage({ d }: { d: D }) {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="rise text-xs uppercase tracking-[0.3em] text-ivory/60">OTU DAVID</p>
      <h1 className="rise d1 mt-6 font-serif text-4xl tracking-[0.2em] sm:text-5xl">{d.upper}</h1>
      <span className="rise d1 my-8 h-px w-12 bg-ivory/30" />
      <a
        href={d.url}
        className="rise d2 inline-flex min-h-[56px] items-center border border-ivory/40 px-10 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-steel hover:text-steel"
      >
        Accéder au profil Doctoranytime →
      </a>
    </section>
  );
}
