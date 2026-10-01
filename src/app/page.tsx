import { site, disciplines } from "@/config/site";
import Choice from "@/components/Choice";
import Parcours from "@/components/Parcours";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Reveal from "@/components/Reveal";
import MobileBooking from "@/components/MobileBooking";
import SoinsGrid from "@/components/SoinsGrid";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import { faqHome } from "@/content/faq";
import TrustBand from "@/components/TrustBand";
import Approach from "@/components/Approach";

export default function Home() {
  return (
    <>
      {/* Accueil : deux grands choix */}
      <section aria-labelledby="accueil-title" data-tone="dark" className="relative">
        <h1 id="accueil-title" className="sr-only">
          {site.name} — Kinésithérapeute et ostéopathe D.O. à Ixelles et Woluwe-Saint-Pierre
        </h1>
        <div className="flex flex-col md:h-[calc(100svh-72px)] md:min-h-[600px] md:flex-row">
          <Choice d={disciplines.osteo} kind="osteo" image="/images/osteopathie-mains.webp" position="50% 55%" alt="Séance d'ostéopathie : les mains de l'ostéopathe sur le thorax d'un patient" />
          <span aria-hidden className="h-px w-full bg-ivory/15 md:h-auto md:w-px" />
          <Choice d={disciplines.kine} kind="kine" image="/images/kinesitherapie-genou.webp" position="50% 50%" alt="Séance de kinésithérapie : travail manuel sur le genou d'un sportif" />
        </div>
      </section>

      <TrustBand />

      {/* Présentation */}
      <section aria-labelledby="apropos-title" data-tone="dark" className="w-full bg-night">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-[5fr_7fr] md:gap-20 md:px-10 md:py-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait-david-otu.webp"
            alt="David Otu, kinésithérapeute et ostéopathe D.O."
            width={1025} height={1281} loading="lazy"
            className="mx-auto aspect-[4/5] w-full max-w-sm object-cover md:max-w-none"
            data-reveal
          />
          <div data-reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-steel">À propos</p>
            <h2 id="apropos-title" className="mt-5 font-serif text-4xl tracking-[0.12em] sm:text-5xl">David Otu</h2>
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-ivory/70">{site.title}</p>
            <p className="mt-6 inline-flex gap-6 border border-steel/40 px-5 py-2 text-[11px] uppercase tracking-[0.25em] text-steel">
              <span>Rééducation</span><span>Thérapie manuelle</span>
            </p>
            <span className="mt-8 block h-px w-12 bg-steel/60" />
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80">{site.about}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/65">
              Cabinets à <a href="/ixelles" className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Ixelles</a> (lundi, mercredi, vendredi)
              et à <a href="/woluwe-saint-pierre" className="text-ivory underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">Woluwe-Saint-Pierre</a> (mardi, jeudi), à Bruxelles.
            </p>
            <p className="mt-5 max-w-xl text-sm text-ivory/60">
              {site.languages} <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="text-ivory/80 underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">{site.upob.short}</a>.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <a href="/osteo" className="border-b border-ivory/30 pb-1 text-xs uppercase tracking-[0.25em] transition-colors hover:border-steel hover:text-steel">Ostéopathie →</a>
              <a href="/kine" className="border-b border-ivory/30 pb-1 text-xs uppercase tracking-[0.25em] transition-colors hover:border-steel hover:text-steel">Kinésithérapie →</a>
            </div>
          </div>
        </div>
      </section>

      <Approach />
      <SoinsGrid
        tone="light"
        intro="Douleurs aiguës, rééducation, sport : les situations les plus fréquentes, avec une page détaillée pour chacune."
      />
      <Parcours />
      <Testimonials />
      <FaqSchema items={faqHome} />
      <FaqCarousel items={faqHome} tone="dark" id="faq" />
      <Contact />
      <Reveal />
      <MobileBooking />
    </>
  );
}
