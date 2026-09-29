import { site } from "@/config/site";
import { testimonials } from "@/config/testimonials";

export default function Testimonials() {
  return (
    <section aria-labelledby="avis-title" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="border-t border-ivory/15 pt-16 text-center">
        <h2 id="avis-title" className="font-serif text-2xl tracking-[0.25em] sm:text-3xl">
          AVIS VÉRIFIÉS
        </h2>
        <p className="mx-auto mt-3 max-w-md text-xs uppercase tracking-[0.2em] text-steel">
          {site.reviews.label}
        </p>

        <div className="mt-14 grid gap-8 text-left sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <figure key={i} className="border border-ivory/15 px-6 py-8">
              <blockquote className="font-serif text-base italic leading-relaxed text-ivory/85">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.2em] text-ivory/50">
                {t.author} · Doctoranytime
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
