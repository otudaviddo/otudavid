import { site, SITE_URL } from "@/config/site";
import { content, type Lang } from "@/i18n";
import { UrgentSection } from "@/components/Urgent";
import Hours from "@/components/Hours";


/* Page dédiée à un cabinet : pensée pour les recherches « ostéopathe + commune »
   et pour être le lien « site web » de la fiche Google du cabinet. */
/** « A, B et C » en français, « A, B and C » en anglais. */
const joinList = (l: readonly string[], lang: Lang) => l.length < 2 ? l.join("") : `${l.slice(0, -1).join(", ")} ${lang === "fr" ? "et" : "and"} ${l[l.length - 1]}`;

export default function CabinetPage({ slug, lang = "fr" }: { slug: string; lang?: Lang }) {
  const C = content(lang);
  const t = C.ui.cabinet;
  const a = C.addresses.find((x) => x.slug === slug)!;
  const other = C.addresses.find((x) => x.slug !== slug)!;
  const ld = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Physiotherapy"],
    name: `David Otu — ${t.h1(a.city)}`,
    url: `${SITE_URL}${a.path}`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: `${SITE_URL}/images/portrait-david-otu.webp`,
    sameAs: [site.instagram],
    medicalSpecialty: ["Physiotherapy", "Osteopathic"],
    address: { "@type": "PostalAddress", streetAddress: a.street, addressLocality: a.city, postalCode: a.postalCode, addressCountry: "BE" },
    areaServed: [{ "@type": "City", name: a.city }, { "@type": "City", name: "Bruxelles" }, ...a.nearby.map((n) => ({ "@type": "City", name: n }))],
    employee: { "@type": "Person", name: "David Otu", jobTitle: ["Ostéopathe D.O.", "Kinésithérapeute"] },
    openingHoursSpecification: a.hours.map((s) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${s.day}`, opens: s.opens, closes: s.closes })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="w-full bg-night">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pt-28">
          <p className="rise text-base text-steel">{t.kicker(a.city)}</p>
          <h1 className="rise d1 mt-4 max-w-4xl font-serif text-[2.6rem] leading-[1.08] sm:text-6xl md:text-7xl">
            {t.h1(a.city)}
          </h1>
          <p className="rise d2 mt-8 max-w-2xl text-lg leading-relaxed text-ivory/75">
            {t.lead(a.city, a.street, a.daysSentence)}
          </p>

          <div className="rise d3 mt-10 flex flex-col gap-4 sm:flex-row">
            {[C.disciplines.osteo, C.disciplines.kine].map((d) => (
              <a
                key={d.slug}
                href={d.url}
                className="flex min-h-[56px] items-center justify-center rounded-full border border-ivory/40 px-8 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-night"
              >
                {C.ui.bookShort} · {d.label}
              </a>
            ))}
            <a href={site.phoneHref} className="flex min-h-[56px] items-center justify-center rounded-full border border-ivory/20 px-8 text-xs uppercase tracking-[0.25em] text-ivory/80 transition-colors hover:border-steel hover:text-steel">
              {C.ui.urgent.short} : {site.phone}
            </a>
          </div>
        </div>
      </section>

      <UrgentSection lang={lang} title={C.ui.urgent.h2City(a.city)} text={C.ui.urgent.textCity(a.city, a.daysSentence)} />

      <section className="w-full bg-ivory text-night">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[5fr_7fr] md:px-10 md:py-28">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold text-steelDeep">{t.address}</p>
              <address className="mt-3 not-italic">
                <p className="font-serif text-2xl">{a.street}</p>
                <p className="mt-1 text-base text-night/70">{a.postalCode} {a.city}</p>
              </address>
              <a href={a.mapsUrl} className="mt-3 inline-block text-sm underline decoration-1 underline-offset-4 decoration-night/35 hover:text-steelDeep hover:decoration-steelDeep">
                {C.ui.contact.route}
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-steelDeep">{t.days}</p>
              <Hours hours={a.hours} lang={lang} className="mt-3 max-w-xs space-y-1 font-serif text-2xl" />
              <p className="mt-2 text-sm text-night/70">{t.byAppointment}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-steelDeep">{t.care}</p>
              <ul className="mt-3 space-y-1 font-serif text-2xl">
                <li><a href={C.routes.osteo} className="hover:text-steelDeep">{C.disciplines.osteo.label}</a></li>
                <li><a href={C.routes.kine} className="hover:text-steelDeep">{C.disciplines.kine.label}</a></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-steelDeep">{t.nearbyLabel}</p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-night/80">{t.nearby(joinList(a.nearby, lang))}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-steelDeep">{t.contact}</p>
              <p className="mt-3 space-x-6 text-sm">
                <a href={site.phoneHref} className="border-b border-night/30 pb-0.5">{site.phone}</a>
                <a href={`mailto:${site.email}`} className="border-b border-night/30 pb-0.5">{site.email}</a>
              </p>
            </div>
          </div>

          <iframe
            title={t.mapTitle(a.city)}
            src={a.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full rounded-2xl border border-night/15 md:h-full md:min-h-[460px]"
          />
        </div>
      </section>

      <section data-tone="dark" className="w-full bg-nightSoft">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <h2 className="font-serif text-3xl">{t.motifsTitle(a.city)}</h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/75">
              {t.motifsText(a.city)}
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {C.allSoins.map((s) => (
                <li key={s.slug}>
                  <a href={`${C.soinsOsteo.some((x) => x.slug === s.slug) ? C.routes.osteo : C.routes.kine}#${s.slug}`} className="inline-block rounded-full border border-ivory/20 px-5 py-2 text-sm text-ivory/85 transition-colors hover:border-ivory hover:bg-ivory hover:text-night">{s.card}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl">{t.reimb}</h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/75"><strong className="font-normal text-ivory">{C.disciplines.osteo.label}</strong> ({C.duration.osteo}) : {C.reimbursement.osteo}</p>
            <p className="mt-4 text-base leading-relaxed text-ivory/75"><strong className="font-normal text-ivory">{C.disciplines.kine.label}</strong> ({C.duration.kine}) : {C.reimbursement.kine}</p>
            <p className="mt-6 text-sm text-ivory/75">
              {C.languages}{" "}
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="text-ivory/85 underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">{C.upobShort}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-ivoryDeep text-night">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <p className="text-base text-night/75">
            {t.also} <a href={other.path} className="border-b border-night/30 pb-0.5 text-night hover:text-steelDeep">{other.city}</a> ({other.days.toLowerCase()}).
          </p>
          <a href={C.routes.home} className="mt-5 inline-block text-sm text-night/75 underline decoration-1 underline-offset-4 decoration-night/35 hover:text-steelDeep">{t.back}</a>
        </div>
      </section>
    </>
  );
}
