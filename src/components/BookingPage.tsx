import { site, disciplines } from "@/config/site";
import { osteoContent, kineContent } from "@/content/disciplines";
import { faqOsteo, faqKine } from "@/content/faq";
import SoinsGrid from "@/components/SoinsGrid";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import Reveal from "@/components/Reveal";
import Approach from "@/components/Approach";

type D = (typeof disciplines)[keyof typeof disciplines];

export default function BookingPage({ d }: { d: D }) {
  const osteo = d.slug === "osteo";
  const c = osteo ? osteoContent : kineContent;
  const faq = osteo ? faqOsteo : faqKine;

  return (
    <>
      <FaqSchema items={faq} />

      {/* En-tête */}
      <section data-tone="dark" className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-20 text-center md:pt-28">
        <p className="rise text-xs uppercase tracking-[0.3em] text-steel">David Otu · {d.label}</p>
        <h1 className="rise d1 mt-6 font-serif text-4xl leading-tight tracking-[0.04em] sm:text-5xl">{d.h1}</h1>
        <span className="rise d1 my-8 h-px w-12 bg-ivory/30" />
        <p className="rise d1 max-w-xl text-base leading-relaxed text-ivory/75">{d.intro}</p>

        <div className="rise d2 mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a href={d.url} className="inline-flex min-h-[56px] w-full items-center justify-center border border-ivory/40 px-10 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-night sm:w-auto">
            Prendre rendez-vous →
          </a>
          <a href={site.phoneHref} className="inline-flex min-h-[56px] w-full items-center justify-center border border-ivory/20 px-8 text-xs uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:border-steel hover:text-steel sm:w-auto">
            {site.phone}
          </a>
        </div>
        <p className="rise d2 mt-6 text-xs uppercase tracking-[0.2em] text-ivory/50">
          {site.reviews.label} · {osteo ? `Séance de ${site.duration.osteo}` : `Séance de ${site.duration.kine}`}
        </p>
      </section>

      {/* Présentation + motifs (fond blanc) */}
      <section data-tone="light" className="w-full bg-white text-night">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[5fr_7fr] md:px-10 md:py-28">
          <div data-reveal>
            <h2 className="font-serif text-3xl">{osteo ? "L'ostéopathie" : "La kinésithérapie"}</h2>
            {c.lead.map((p, i) => <p key={i} className="mt-5 text-base leading-relaxed text-night/80">{p}</p>)}
            {osteo && (
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-night/30 pb-0.5 text-[11px] uppercase tracking-[0.22em] text-steelDeep hover:border-steelDeep">
                {site.upob.short} →
              </a>
            )}
            <p className="mt-6 text-sm text-night/60">{site.languages}</p>
          </div>
          <div data-reveal>
            <h2 className="font-serif text-3xl">Motifs de consultation</h2>
            <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {c.groups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">{g.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-[15px] text-night/80">
                    {g.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Déroulé + remboursement + cabinets */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <div data-reveal className="grid gap-px border border-night/15 bg-night/15 md:grid-cols-3">
            <div className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Déroulement · {osteo ? site.duration.osteo : site.duration.kine}</p>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-night/80">
                {c.deroule.map((s, i) => <li key={i}><span className="mr-2 font-serif text-lg text-night">{i + 1}.</span>{s}</li>)}
              </ol>
            </div>
            <div className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Remboursement</p>
              <p className="mt-4 text-sm leading-relaxed text-night/80">{osteo ? site.reimbursement.osteo : site.reimbursement.kine}</p>
              {!osteo && <p className="mt-3 text-sm leading-relaxed text-night/70">Pensez à apporter la prescription de votre médecin et votre carte d&apos;identité.</p>}
              {osteo && <p className="mt-3 text-sm leading-relaxed text-night/70">Aucune prescription n&apos;est nécessaire pour consulter en ostéopathie.</p>}
            </div>
            <div className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Cabinets</p>
              {site.addresses.slice().reverse().map((a) => (
                <a key={a.slug} href={`/${a.slug}`} className="mt-4 block hover:text-steelDeep">
                  <span className="block font-serif text-xl">{a.city}</span>
                  <span className="block text-sm text-night/70">{a.street} · <em>{a.days}</em></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Approach />
      <SoinsGrid tone="dark" only={osteo ? "osteo" : "kine"} title="Pages détaillées" />
      <FaqCarousel items={faq} tone="light" id="faq" />
      <Reveal />
    </>
  );
}
