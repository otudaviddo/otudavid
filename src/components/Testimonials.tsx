import { site, OSTEO_DOCTORANYTIME_URL } from "@/config/site";
import { testimonials } from "@/config/testimonials";

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-[280px] shrink-0 flex-col justify-between border border-night/15 bg-ivory px-6 py-7 sm:w-[380px] sm:px-7 sm:py-8">
      <blockquote className="font-serif text-base italic leading-relaxed text-night/85 sm:text-lg">
        &laquo;&nbsp;{t.quote}&nbsp;&raquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-night/55">
        <span>{t.author}</span>
        <span>{t.date}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" aria-labelledby="avis-title" className="w-full bg-ivory text-night">
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-24 text-center md:px-10 md:pt-32">
        <h2 id="avis-title" className="font-serif text-3xl tracking-[0.25em] sm:text-4xl">AVIS</h2>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-steelDeep">{site.reviews.label}</p>
      </div>

      {/* Bandeau qui défile ; s'arrête au survol */}
      <div className="marquee overflow-hidden pb-6">
        <div className="marquee-track flex w-max">
          <div className="flex items-start gap-6 pr-6">
            {testimonials.map((t, i) => <Card key={`a${i}`} t={t} />)}
          </div>
          {/* copie identique pour une boucle continue */}
          <div aria-hidden className="flex items-start gap-6 pr-6">
            {testimonials.map((t, i) => <Card key={`b${i}`} t={t} />)}
          </div>
        </div>
      </div>

      <div className="px-6 pb-20 pt-6 text-center md:pb-28">
        <a
          href={OSTEO_DOCTORANYTIME_URL}
          className="inline-block border-b border-night/30 pb-1 text-[11px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.25em] text-night/80 transition-colors duration-300 hover:border-steelDeep hover:text-steelDeep"
        >
          Voir tous les avis sur Doctoranytime →
        </a>
      </div>
    </section>
  );
}
