import { site } from "@/config/site";
import { testimonials } from "@/config/testimonials";

export default function Testimonials() {
  return (
    <section aria-labelledby="avis-title" className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
      <div className="border-t border-ivory/15 pt-16">
        <h2 id="avis-title" className="text-xs uppercase tracking-[0.3em] text-ivory/50">
          Avis vérifiés
        </h2>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-steel">
          {site.reviews.averageLabel} · {site.reviews.countLabel}
        </p>

        <ul className="mt-16 flex flex-col gap-12">
          {testimonials.map((t, i) => (
            <li key={i}>
              <blockquote className="font-serif text-2xl italic leading-snug text-ivory/85 sm:text-3xl">
                &laquo;&nbsp;{t.quote}&nbsp;&raquo;
              </blockquote>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ivory/40">
                {t.author} — Doctoranytime
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
