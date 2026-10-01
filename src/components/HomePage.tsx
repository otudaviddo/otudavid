import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import Choice from "@/components/Choice";
import Parcours from "@/components/Parcours";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MobileBooking from "@/components/MobileBooking";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import TrustBand from "@/components/TrustBand";
import Approach from "@/components/Approach";

export default function HomePage({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui;
  return (
    <>
      {/* Accueil : deux grands choix */}
      <section aria-labelledby="accueil-title" data-tone="dark" className="relative -mt-[72px]">
        <h1 id="accueil-title" className="sr-only">
          {site.name} — {t.heroH1}
        </h1>
        <div className="flex flex-col md:h-[100svh] md:min-h-[640px] md:flex-row">
          <Choice d={c.disciplines.osteo} kind="osteo" image="/images/osteopathie-mains.webp" position="50% 55%" alt={t.altOsteo} pro={t.osteoPro} cta={t.book} more={t.more} moreHref={c.routes.osteo} label={c.disciplines.osteo.label} />
          <span aria-hidden className="h-px w-full bg-ivory/15 md:h-auto md:w-px" />
          <Choice d={c.disciplines.kine} kind="kine" image="/images/kinesitherapie-genou.webp" position="50% 50%" alt={t.altKine} pro={t.kinePro} cta={t.book} more={t.more} moreHref={c.routes.kine} label={c.disciplines.kine.label} />
        </div>
      </section>

      <TrustBand lang={lang} />

      {/* Présentation */}
      <section aria-labelledby="apropos-title" data-tone="dark" className="w-full bg-night">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[5fr_7fr] md:gap-20 md:px-10 md:py-32">
          {/* Portrait en relief : un cadre fin en retrait, la photo devant */}
          <div className="mx-auto w-full max-w-sm pb-4 pr-4 md:max-w-none">
            <div className="relative">
              <span aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-steel/45" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-david-otu.webp"
                alt={t.altPortrait}
                width={1025} height={1281} loading="lazy"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_-28px_rgba(0,0,0,.65)]"
              />
            </div>
          </div>
          <div>
            <h2 id="apropos-title" className="font-serif text-5xl leading-none sm:text-6xl">David Otu</h2>
            <p className="mt-4 text-base text-steel">{c.title}</p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80">{c.about}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65">
              {t.practicesSentence.a} <a href={c.routes.ixelles} className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Ixelles</a> {t.practicesSentence.ixDays}{" "}
              {t.practicesSentence.and} <a href={c.routes["woluwe-saint-pierre"]} className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Woluwe-Saint-Pierre</a> {t.practicesSentence.wsDays}{t.practicesSentence.end}
            </p>
            <p className="mt-5 max-w-xl text-sm text-ivory/75">
              {c.languages} <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="text-ivory/80 underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">{c.upobShort}</a>.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <a href={c.routes.osteo} className="text-base text-ivory underline decoration-1 underline-offset-4 decoration-ivory/40 transition-colors hover:text-steel hover:decoration-steel">{c.disciplines.osteo.label}</a>
              <a href={c.routes.kine} className="text-base text-ivory underline decoration-1 underline-offset-4 decoration-ivory/40 transition-colors hover:text-steel hover:decoration-steel">{c.disciplines.kine.label}</a>
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
      <MobileBooking lang={lang} />
    </>
  );
}
