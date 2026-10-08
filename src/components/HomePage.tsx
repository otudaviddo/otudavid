import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import Choice from "@/components/Choice";
import HeroBlock from "@/components/HeroBlock";
import { HERO_VARIANT } from "@/config/variant";
import Parcours from "@/components/Parcours";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import MobileBooking from "@/components/MobileBooking";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import TrustBand from "@/components/TrustBand";
import Approach from "@/components/Approach";
import { UrgentBand } from "@/components/Urgent";
import Reasons from "@/components/Reasons";

export default function HomePage({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui;
  return (
    <>
      {HERO_VARIANT === "bloc" ? <HeroBlock lang={lang} /> : (
      <section aria-labelledby="accueil-title" data-tone="dark" className="relative -mt-[72px]">
        <h1 id="accueil-title" className="sr-only">
          {site.name} — {t.heroH1}
        </h1>
        <div className="flex flex-col md:h-[calc(100svh-76px)] md:min-h-[600px] md:flex-row">
          <Choice d={c.disciplines.osteo} kind="osteo" pro={t.osteoPro} cta={t.book} more={t.more} moreHref={c.routes.osteo} label={c.disciplines.osteo.label} dark
            engraving={{ src: "/images/ecorche-baton.webp", width: 546, height: 950, className: "-right-[14%] bottom-0 h-[104%] opacity-45 md:-right-[5%] md:h-[112%] md:opacity-70" }} />
          <span aria-hidden className="h-px w-full bg-[#0B1F3A] md:h-auto md:w-px"><span className="block h-full w-full bg-white/15" /></span>
          <Choice d={c.disciplines.kine} kind="kine" pro={t.kinePro} cta={t.book} more={t.more} moreHref={c.routes.kine} label={c.disciplines.kine.label} dark
            engraving={{ src: "/images/ecorche-marche.webp", width: 524, height: 950, className: "-right-[10%] -bottom-[3%] h-[104%] opacity-40 md:-right-[2%] md:h-[110%] md:opacity-55" }} />
        </div>
      </section>
      )}

      <UrgentBand lang={lang} />
      <TrustBand lang={lang} />
      <Testimonials lang={lang} />

      {/* Présentation : portrait et texte */}
      <section aria-labelledby="apropos-title" data-tone="dark" className="w-full bg-night">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[5fr_7fr] md:gap-20 md:px-10 md:py-28">
          <div className="mx-auto w-full max-w-sm md:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/portrait-david-otu.webp"
              srcSet="/images/portrait-david-otu.webp 1025w, /images/portrait-david-otu-2050.webp 2050w"
              sizes="(min-width: 768px) 40vw, 90vw"
              alt={t.altPortrait}
              width={1025} height={1281} loading="lazy"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_-32px_rgba(11,31,58,.5)]"
            />
          </div>
          <div>
            <h2 id="apropos-title" className="font-serif text-5xl leading-none sm:text-6xl">David Otu</h2>
            <p className="mt-4 text-base text-steel">{c.title}</p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80">{c.about}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
              {t.practicesSentence.a} <a href={c.routes.ixelles} className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Ixelles</a> {t.practicesSentence.ixDays}{" "}
              {t.practicesSentence.and} <a href={c.routes["woluwe-saint-pierre"]} className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Woluwe-Saint-Pierre</a> {t.practicesSentence.wsDays}{t.practicesSentence.end}
            </p>
            <p className="mt-5 max-w-xl text-sm text-ivory/75">
              {c.languages} <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="text-ivory/80 underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">{c.upobShort}</a>.
            </p>
            <div className="mt-8 border-t border-ivory/15 pt-6">
              <p className="text-sm font-medium text-steel">{t.principles.title}</p>
              <p className="mt-2 font-serif text-2xl leading-snug">{t.principles.items.join(" · ")}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <a href={c.routes.osteo} className="text-base text-ivory underline decoration-1 underline-offset-4 decoration-ivory/40 transition-colors hover:text-steel hover:decoration-steel">{c.disciplines.osteo.label}</a>
              <a href={c.routes.kine} className="text-base text-ivory underline decoration-1 underline-offset-4 decoration-ivory/40 transition-colors hover:text-steel hover:decoration-steel">{c.disciplines.kine.label}</a>
            </div>
          </div>
        </div>
      </section>

      <Reasons lang={lang} />
      <Approach lang={lang} />
      <Parcours lang={lang} />
      <FaqSchema items={c.faqHome} />
      <FaqCarousel items={c.faqHome} tone="dark" id="faq" lang={lang} />
      <Contact lang={lang} />
      <MobileBooking lang={lang} />
    </>
  );
}
