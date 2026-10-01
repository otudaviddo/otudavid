import { site, disciplines, SITE_URL } from "@/config/site";
import type { Soin } from "@/content/soins";
import { soins } from "@/content/soins";
import FaqCarousel from "@/components/FaqCarousel";
import FaqSchema from "@/components/FaqSchema";
import Reveal from "@/components/Reveal";

const btn = "flex min-h-[56px] items-center justify-center whitespace-nowrap border px-6 text-xs uppercase tracking-[0.25em] transition-colors duration-500";

export default function SoinPage({ s }: { s: Soin }) {
  const books = s.discipline === "osteo" ? [disciplines.osteo] : s.discipline === "kine" ? [disciplines.kine] : [disciplines.osteo, disciplines.kine];
  const others = soins.filter((x) => x.slug !== s.slug);
  const crumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: s.card, item: `${SITE_URL}/soins/${s.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <FaqSchema items={s.faq} />

      {/* En-tête */}
      <section data-tone="dark" className="w-full bg-night">
        <div className="mx-auto max-w-4xl px-6 pb-20 pt-16 md:px-10 md:pt-24">
          <nav aria-label="Fil d'Ariane" className="rise text-[11px] uppercase tracking-[0.25em] text-ivory/50">
            <a href="/" className="hover:text-steel">Accueil</a> <span className="mx-2">/</span> <span className="text-steel">{s.card}</span>
          </nav>
          <h1 className="rise d1 mt-6 font-serif text-4xl leading-tight tracking-[0.02em] sm:text-5xl">{s.h1}</h1>
          {s.intro.map((p, i) => (
            <p key={i} className="rise d2 mt-6 text-base leading-relaxed text-ivory/75 sm:text-lg">{p}</p>
          ))}
          <div className="rise d3 mt-10 flex flex-col gap-4 sm:flex-row">
            {books.map((d) => (
              <a key={d.slug} href={d.url} className={`${btn} border-ivory/40 hover:border-ivory hover:bg-ivory hover:text-night`}>
                Rendez-vous · {d.label}
              </a>
            ))}
            <a href={site.phoneHref} className={`${btn} border-ivory/20 text-ivory/80 hover:border-steel hover:text-steel`}>
              Appeler · {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contenu (fond blanc, rendu médical) */}
      <section data-tone="light" className="w-full bg-white text-night">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div data-reveal>
            <h2 className="font-serif text-3xl">{s.motifsTitle}</h2>
            <ul className="mt-6 border-t border-night/15">
              {s.motifs.map((m) => (
                <li key={m} className="border-b border-night/15 py-4 text-base text-night/85">{m}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="font-serif text-3xl">La prise en charge</h2>
            <p className="mt-5 text-base leading-relaxed text-night/80">{s.approcheIntro}</p>
            <ol className="mt-8 border-l border-night/15">
              {s.phases.map((ph, i) => (
                <li key={ph.title} className="relative pb-6 pl-7 last:pb-0">
                  <span aria-hidden className="absolute -left-[4px] top-[9px] h-[7px] w-[7px] rounded-full bg-steelDeep" />
                  <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Étape {i + 1}</p>
                  <h3 className="mt-1 font-serif text-xl">{ph.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-night/75">{ph.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 border border-night/15 bg-ivory/60 p-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Consultez d&apos;abord un médecin en cas de</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-night/80">
                {s.alerte.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Infos pratiques */}
        <div className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
          <div data-reveal className="grid gap-px border border-night/15 bg-night/15 md:grid-cols-3">
            {site.addresses.slice().reverse().map((a) => (
              <a key={a.slug} href={`/${a.slug}`} className="block bg-white p-7 transition-colors hover:bg-ivory/40">
                <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Cabinet</p>
                <p className="mt-3 font-serif text-2xl">{a.city}</p>
                <p className="mt-2 text-sm text-night/70">{a.street}, {a.postalCode}</p>
                <p className="mt-1 text-sm italic text-night/70">{a.days}</p>
              </a>
            ))}
            <div className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Remboursement</p>
              <p className="mt-3 text-sm leading-relaxed text-night/80"><strong className="font-medium">Ostéopathie :</strong> {site.reimbursement.osteo}</p>
              <p className="mt-2 text-sm leading-relaxed text-night/80"><strong className="font-medium">Kinésithérapie :</strong> {site.reimbursement.kine}</p>
            </div>
          </div>
        </div>
      </section>

      <FaqCarousel items={s.faq} tone="dark" id="faq" />

      {/* Autres motifs (maillage interne) */}
      <section data-tone="light" className="w-full bg-ivoryDeep text-night">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">Autres motifs de consultation</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <li key={o.slug}>
                <a href={`/soins/${o.slug}`} className="inline-block border border-night/20 px-4 py-2 text-sm transition-colors hover:border-night hover:bg-night hover:text-ivory">{o.card}</a>
              </li>
            ))}
            <li><a href="/osteo" className="inline-block border border-night/20 px-4 py-2 text-sm transition-colors hover:border-night hover:bg-night hover:text-ivory">Ostéopathie</a></li>
            <li><a href="/kine" className="inline-block border border-night/20 px-4 py-2 text-sm transition-colors hover:border-night hover:bg-night hover:text-ivory">Kinésithérapie</a></li>
          </ul>
        </div>
      </section>
      <Reveal />
    </>
  );
}
