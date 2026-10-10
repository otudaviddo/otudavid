"use client";
import { useState } from "react";
import { OSTEO_DOCTORANYTIME_URL } from "@/config/site";
import { testimonials } from "@/config/testimonials";
import { content, reviewDate, type Lang } from "@/i18n";

type T = (typeof testimonials)[number];

function Card({ t, lang }: { t: T; lang: Lang }) {
  return (
    <figure data-tone="light" data-reveal className="card-lift mb-5 break-inside-avoid rounded-2xl px-6 py-6 sm:px-7 sm:py-7">
      <blockquote className="font-serif text-lg leading-snug text-night/90 sm:text-xl">&laquo;&nbsp;{t.quote}&nbsp;&raquo;</blockquote>
      <figcaption className="mt-5 flex items-center justify-between text-sm text-night/65">
        <span>{t.author}</span>
        <span>{reviewDate(lang, t.date)}</span>
      </figcaption>
    </figure>
  );
}

/** Avis : une mosaïque sobre, sans mise en avant.
 *  Rien ne défile tout seul ; le visiteur affiche la suite s'il le souhaite. */
export default function Testimonials({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.avis;
  // En anglais, les avis rédigés en anglais passent en premier.
  const isEn = (q: string) => /\b(the|and|very|recommend|helpful|guy)\b/i.test(q);
  const list = lang === "en" ? [...testimonials].sort((a, b) => Number(isEn(b.quote)) - Number(isEn(a.quote))) : testimonials;
  const rest = list;
  const FIRST = 6;
  const [open, setOpen] = useState(false);
  const shown = open ? rest : rest.slice(0, FIRST);

  return (
    <section id="avis" data-tone="light" aria-labelledby="avis-title" className="relative w-full bg-[#F2F5F9] text-night">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 id="avis-title" className="h-display font-serif">{t.title}</h2>
          <p className="text-sm text-night/65">{c.reviewsLabel}</p>
        </div>

        <div id="avis-liste" className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 md:mt-16">
          {shown.map((r, i) => <Card key={i} t={r} lang={lang} />)}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          {rest.length > FIRST && (
            <button type="button" aria-expanded={open} aria-controls="avis-liste" onClick={() => setOpen(!open)}
              className="inline-flex min-h-[48px] items-center rounded-full border border-night/20 px-6 text-[15px] font-medium text-night transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory">
              {open ? t.less : t.more}
            </button>
          )}
          <a href={OSTEO_DOCTORANYTIME_URL}
            className="inline-block py-1 text-base text-night underline decoration-1 underline-offset-4 decoration-night/40 transition-colors duration-300 hover:text-steelDeep hover:decoration-steelDeep">
            {t.all}
          </a>
        </div>
      </div>
    </section>
  );
}
