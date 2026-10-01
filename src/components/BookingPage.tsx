import { site } from "@/config/site";
import SoinSections from "@/components/SoinSections";
import { content, type Lang } from "@/i18n";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import Reveal from "@/components/Reveal";
import Approach from "@/components/Approach";

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
      <section data-tone="dark" className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-20 text-center md:pt-28">
        <p className="rise text-xs uppercase tracking-[0.3em] text-steel">David Otu · {d.label}</p>
        <h1 className="rise d1 mt-6 font-serif text-4xl leading-tight tracking-[0.04em] sm:text-5xl">{d.h1}</h1>
        <span className="rise d1 my-8 h-px w-12 bg-ivory/30" />
        <p className="rise d1 max-w-xl text-base leading-relaxed text-ivory/75">{d.intro}</p>

        <div className="rise d2 mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <a href={d.url} className="inline-flex min-h-[56px] w-full items-center justify-center border border-ivory/40 px-10 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-night sm:w-auto">
            {C.ui.book} →
          </a>
          <a href={site.phoneHref} className="inline-flex min-h-[56px] w-full items-center justify-center border border-ivory/20 px-8 text-xs uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:border-steel hover:text-steel sm:w-auto">
            {site.phone}
          </a>
        </div>
        <p className="rise d2 mt-6 text-xs uppercase tracking-[0.2em] text-ivory/50">
          {C.reviewsLabel.split(" · ")[0]} · {t.sessionOf(osteo ? C.duration.osteo : C.duration.kine)}
        </p>
      </section>

      {/* Présentation + motifs (fond blanc) */}
      <section data-tone="light" className="w-full bg-white text-night">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[5fr_7fr] md:px-10 md:py-28">
          <div data-reveal>
            <h2 className="font-serif text-3xl">{osteo ? t.about.osteo : t.about.kine}</h2>
            {c.lead.map((p, i) => <p key={i} className="mt-5 text-base leading-relaxed text-night/80">{p}</p>)}
            {osteo && (
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-night/30 pb-0.5 text-[11px] uppercase tracking-[0.22em] text-steelDeep hover:border-steelDeep">
                {C.upobShort} →
              </a>
            )}
            <p className="mt-6 text-sm text-night/60">{C.languages}</p>
          </div>
          <div data-reveal>
            <h2 className="font-serif text-3xl">{t.motifs}</h2>
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
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">{t.deroulement} · {osteo ? C.duration.osteo : C.duration.kine}</p>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-night/80">
                {c.deroule.map((s, i) => <li key={i}><span className="mr-2 font-serif text-lg text-night">{i + 1}.</span>{s}</li>)}
              </ol>
            </div>
            <div className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">{t.remboursement}</p>
              <p className="mt-4 text-sm leading-relaxed text-night/80">{osteo ? C.reimbursement.osteo : C.reimbursement.kine}</p>
              {!osteo && <p className="mt-3 text-sm leading-relaxed text-night/70">{t.bringPrescription}</p>}
              {osteo && <p className="mt-3 text-sm leading-relaxed text-night/70">{t.noPrescription}</p>}
            </div>
            <div className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">{t.cabinets}</p>
              {C.addresses.slice().reverse().map((a) => (
                <a key={a.slug} href={a.path} className="mt-4 block hover:text-steelDeep">
                  <span className="block font-serif text-xl">{a.city}</span>
                  <span className="block text-sm text-night/70">{a.street} · <em>{a.days}</em></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SoinSections items={mine} lang={lang} />
      <Approach lang={lang} />
      <FaqCarousel items={faq} tone="light" id="faq" lang={lang} />
      <Reveal />
    </>
  );
}
