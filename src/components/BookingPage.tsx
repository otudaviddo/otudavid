import { site } from "@/config/site";
import SoinSections from "@/components/SoinSections";
import { content, type Lang } from "@/i18n";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import Approach from "@/components/Approach";
import { UrgentSection } from "@/components/Urgent";
import Hours from "@/components/Hours";

export default function BookingPage({ kind, lang = "fr" }: { kind: "osteo" | "kine"; lang?: Lang }) {
  const C = content(lang);
  const t = C.ui.booking;
  const d = C.disciplines[kind];
  const osteo = kind === "osteo";
  const c = osteo ? C.osteoContent : C.kineContent;
  const faq = osteo ? C.faqOsteo : C.faqKine;
  const mine = osteo ? C.soinsOsteo : C.soinsKine;
  const allFaq = [...faq, ...mine.flatMap((s) => s.faq)];

  return (
    <>
      <FaqSchema items={allFaq} />

      {/* En-tête */}
      <section data-tone="dark" className="relative w-full overflow-hidden">
        {/* Gravure anatomique en fond, à droite du titre */}
        <span aria-hidden className="hero-wash absolute inset-0" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={osteo ? "/images/ecorche-baton.webp" : "/images/ecorche-marche.webp"} alt="" aria-hidden width={osteo ? 546 : 524} height={950}
          className={`pointer-events-none absolute bottom-0 -right-[20%] h-[62%] w-auto max-w-none select-none mix-blend-multiply opacity-20 sm:-right-[8%] lg:-right-[4%] lg:h-[104%] lg:opacity-40 xl:right-[4%] ${osteo ? "xl:opacity-75" : "xl:opacity-50"}`}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-24 md:pt-24">
          <p className="rise text-base text-steel">David Otu</p>
          <h1 className="rise d1 mt-4 max-w-4xl font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl">{d.h1}</h1>
          <p className="rise d1 mt-8 max-w-xl text-lg leading-relaxed text-ivory/75">{d.intro}</p>

          <div className="rise d2 mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a href={d.url} className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-steel px-10 text-xs font-medium uppercase tracking-[0.25em] text-night transition-colors duration-300 hover:bg-steelDeep sm:w-auto">
              {C.ui.book}
            </a>
            <a href={site.phoneHref} className="inline-flex min-h-[56px] w-full items-center justify-center rounded-full border border-ivory/20 px-8 text-xs uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:border-steel hover:text-steel sm:w-auto">
              {C.ui.urgent.short} : {site.phone}
            </a>
          </div>
          <p className="rise d2 mt-6 text-sm text-ivory/70">
            {C.reviewsLabel.split(" · ")[0]} · {t.sessionOf(osteo ? C.duration.osteo : C.duration.kine)}
          </p>
        </div>
      </section>

      <UrgentSection lang={lang} title={osteo ? C.ui.urgent.h2Osteo : C.ui.urgent.h2Kine} text={osteo ? C.ui.urgent.textOsteo : C.ui.urgent.textKine} />

      {/* Présentation + motifs (fond blanc) */}
      <section data-tone="light" className="w-full bg-white text-night">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[5fr_7fr] md:px-10 md:py-28">
          <div>
            <h2 className="font-serif text-3xl">{osteo ? t.about.osteo : t.about.kine}</h2>
            {c.lead.map((p, i) => <p key={i} className="mt-5 text-base leading-relaxed text-night/80">{p}</p>)}
            {osteo && (
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block py-1.5 -my-1.5 text-sm text-night underline decoration-1 underline-offset-4 decoration-night/35 hover:text-steelDeep hover:decoration-steelDeep">
                {C.upobShort}
              </a>
            )}
            <p className="mt-6 text-sm text-night/70">{C.languages}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl">{t.motifs}</h2>
            <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {c.groups.map((g) => (
                <div key={g.title}>
                  <h3 className="text-sm font-semibold text-night">{g.title}</h3>
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
          <div className="grid gap-px overflow-hidden rounded-2xl border border-night/15 bg-night/15 md:grid-cols-3">
            <div className="bg-white p-7">
              <h3 className="font-serif text-2xl">{t.deroulement} <span className="font-sans text-sm text-night/70">{osteo ? C.duration.osteo : C.duration.kine}</span></h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-night/80">
                {c.deroule.map((s, i) => <li key={i}><span className="mr-2 font-serif text-lg text-night">{i + 1}.</span>{s}</li>)}
              </ol>
            </div>
            <div className="bg-white p-7">
              <h3 className="font-serif text-2xl">{t.remboursement}</h3>
              <p className="mt-4 text-sm leading-relaxed text-night/80">{osteo ? C.reimbursement.osteo : C.reimbursement.kine}</p>
              {!osteo && <p className="mt-3 text-sm leading-relaxed text-night/70">{t.bringPrescription}</p>}
              {osteo && <p className="mt-3 text-sm leading-relaxed text-night/70">{t.noPrescription}</p>}
            </div>
            <div className="bg-white p-7">
              <h3 className="font-serif text-2xl">{t.cabinets}</h3>
              {C.addresses.slice().reverse().map((a) => (
                <a key={a.slug} href={a.path} className="mt-4 block hover:text-steelDeep">
                  <span className="block font-serif text-xl">{a.city}</span>
                  <span className="block text-sm text-night/70">{a.street}</span>
                  <Hours hours={a.hours} lang={lang} className="mt-1 max-w-[14rem] text-sm text-night/70" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SoinSections items={mine} lang={lang} />
      <Approach lang={lang} />
      <FaqCarousel items={faq} tone="light" id="faq" lang={lang} />
    </>
  );
}
