import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import Choice from "@/components/Choice";
import Parcours from "@/components/Parcours";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import MobileBooking from "@/components/MobileBooking";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import TrustBand from "@/components/TrustBand";
import Approach from "@/components/Approach";
import Tilt from "@/components/Tilt";

export default function HomePage({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui;
  return (
    <>
      {/* Accueil : deux grands choix */}
      <section aria-labelledby="accueil-title" data-tone="dark" className="relative">
        <h1 id="accueil-title" className="sr-only">
          {site.name} — {t.heroH1}
        </h1>
        <div className="flex flex-col md:h-[calc(100svh-72px)] md:min-h-[600px] md:flex-row">
          <Choice d={c.disciplines.osteo} kind="osteo" image="/images/osteopathie-mains.webp" position="50% 55%" alt={t.altOsteo} pro={t.osteoPro} cta={t.book} />
          <span aria-hidden className="h-px w-full bg-ivory/15 md:h-auto md:w-px" />
          <Choice d={c.disciplines.kine} kind="kine" image="/images/kinesitherapie-genou.webp" position="50% 50%" alt={t.altKine} pro={t.kinePro} cta={t.book} />
        </div>
      </section>

      <TrustBand lang={lang} />

      {/* Présentation */}
      <section aria-labelledby="apropos-title" data-tone="dark" className="w-full bg-night">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[5fr_7fr] md:gap-20 md:px-10 md:py-32">
          {/* Portrait en relief : un cadre fin en retrait, la photo devant */}
          <div data-reveal className="mx-auto w-full max-w-sm pb-4 pr-4 md:max-w-none">
            <Tilt max={4} className="relative">
              <span aria-hidden className="tilt-back absolute inset-0 border border-steel/45" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-david-otu.webp"
                alt={t.altPortrait}
                width={1025} height={1281} loading="lazy"
                className="tilt-front relative aspect-[4/5] w-full object-cover"
              />
            </Tilt>
          </div>
          <div data-reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-steel">{t.about}</p>
            <h2 id="apropos-title" className="mt-5 font-serif text-4xl tracking-[0.12em] sm:text-5xl">David Otu</h2>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ivory/70">{c.title}</p>
            <p className="mt-6 inline-flex gap-6 border border-steel/40 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-steel">
              <span>{t.tags[0]}</span><span>{t.tags[1]}</span>
            </p>
            <span className="mt-8 block h-px w-12 bg-steel/60" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80">{c.about}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65">
              {t.practicesSentence.a} <a href={c.routes.ixelles} className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Ixelles</a> {t.practicesSentence.ixDays}{" "}
              {t.practicesSentence.and} <a href={c.routes["woluwe-saint-pierre"]} className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Woluwe-Saint-Pierre</a> {t.practicesSentence.wsDays}{t.practicesSentence.end}
            </p>
            <p className="mt-5 max-w-xl text-sm text-ivory/60">
              {c.languages} <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="text-ivory/80 underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">{c.upobShort}</a>.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <a href={c.routes.osteo} className="border-b border-ivory/30 pb-1 text-xs uppercase tracking-[0.25em] transition-colors hover:border-steel hover:text-steel">{c.disciplines.osteo.label} →</a>
              <a href={c.routes.kine} className="border-b border-ivory/30 pb-1 text-xs uppercase tracking-[0.25em] transition-colors hover:border-steel hover:text-steel">{c.disciplines.kine.label} →</a>
            </div>
          </div>
        </div>
      </section>

      <Approach lang={lang} />
      <Parcours lang={lang} />
      <Testimonials lang={lang} />
      <FaqSchema items={c.faqHome} />
      <FaqCarousel items={c.faqHome} tone="dark" id="faq" lang={lang} />
      <Contact lang={lang} />
      <Reveal />
      <MobileBooking lang={lang} />
    </>
  );
}
