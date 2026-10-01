import { site, disciplines, SITE_URL } from "@/config/site";
import { soins } from "@/content/soins";

type A = (typeof site.addresses)[number];

/* Page dédiée à un cabinet : pensée pour les recherches « ostéopathe + commune »
   et pour être le lien « site web » de la fiche Google du cabinet. */
export default function CabinetPage({ a }: { a: A }) {
  const other = site.addresses.find((x) => x.slug !== a.slug)!;
  const ld = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Physiotherapy"],
    name: `David Otu — Ostéopathe D.O. & kinésithérapeute à ${a.city}`,
    url: `${SITE_URL}/${a.slug}`,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    image: `${SITE_URL}/images/portrait-david-otu.webp`,
    sameAs: [site.instagram],
    medicalSpecialty: ["Physiotherapy", "Osteopathic"],
    address: { "@type": "PostalAddress", streetAddress: a.street, addressLocality: a.city, postalCode: a.postalCode, addressCountry: "BE" },
    areaServed: [{ "@type": "City", name: a.city }, { "@type": "City", name: "Bruxelles" }],
    employee: { "@type": "Person", name: "David Otu", jobTitle: ["Ostéopathe D.O.", "Kinésithérapeute"] },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />

      <section className="w-full bg-night">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pt-28">
          <p className="rise text-[11px] uppercase tracking-[0.3em] text-steel">Cabinet de {a.city}</p>
          <h1 className="rise d1 mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[0.04em] sm:text-5xl">
            Ostéopathe &amp; kinésithérapeute à {a.city}
          </h1>
          <p className="rise d2 mt-6 max-w-2xl text-base leading-relaxed text-ivory/75">
            David Otu, ostéopathe D.O. et kinésithérapeute diplômé de l&apos;ULB, consulte à {a.city}, {a.street}, {a.daysSentence}. Séances d&apos;ostéopathie et de kinésithérapie, sur rendez-vous.
          </p>

          <div className="rise d3 mt-10 flex flex-col gap-4 sm:flex-row">
            {[disciplines.osteo, disciplines.kine].map((d) => (
              <a
                key={d.slug}
                href={d.url}
                className="flex min-h-[56px] items-center justify-center border border-ivory/40 px-8 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-ivory hover:bg-ivory hover:text-night"
              >
                Rendez-vous · {d.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-ivory text-night">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[5fr_7fr] md:px-10 md:py-28">
          <div className="space-y-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-steelDeep">Adresse</p>
              <address className="mt-3 not-italic">
                <p className="font-serif text-2xl">{a.street}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-night/70">{a.postalCode} {a.city}</p>
              </address>
              <a href={a.mapsUrl} className="mt-4 inline-block border-b border-night/30 pb-0.5 text-[11px] uppercase tracking-[0.25em] hover:border-steelDeep hover:text-steelDeep">
                Itinéraire →
              </a>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-steelDeep">Jours de consultation</p>
              <p className="mt-3 font-serif text-2xl">{a.days}</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-steelDeep">Soins proposés</p>
              <ul className="mt-3 space-y-1 font-serif text-2xl">
                <li><a href="/osteo" className="hover:text-steelDeep">Ostéopathie</a></li>
                <li><a href="/kine" className="hover:text-steelDeep">Kinésithérapie</a></li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-steelDeep">Contact</p>
              <p className="mt-3 space-x-6 text-sm">
                <a href={site.phoneHref} className="border-b border-night/30 pb-0.5">{site.phone}</a>
                <a href={`mailto:${site.email}`} className="border-b border-night/30 pb-0.5">{site.email}</a>
              </p>
            </div>
          </div>

          <iframe
            title={`Plan d'accès au cabinet de ${a.city}`}
            src={a.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[360px] w-full border border-night/15 md:h-full md:min-h-[460px]"
          />
        </div>
      </section>

      <section data-tone="dark" className="w-full bg-nightSoft">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <h2 className="font-serif text-3xl">Motifs de consultation à {a.city}</h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/75">
              Au cabinet de {a.city}, David Otu prend en charge les douleurs aiguës (lumbago, dos bloqué, torticolis, sciatique),
              les douleurs chroniques du dos et de la nuque, les blessures sportives et la rééducation après une entorse,
              une fracture ou une opération (prothèse de genou ou de hanche, ligaments croisés).
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {soins.map((s) => (
                <li key={s.slug}>
                  <a href={`/soins/${s.slug}`} className="inline-block border border-ivory/20 px-4 py-2 text-sm text-ivory/85 transition-colors hover:border-ivory hover:bg-ivory hover:text-night">{s.card}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-3xl">Remboursement</h2>
            <p className="mt-5 text-base leading-relaxed text-ivory/75"><strong className="font-normal text-ivory">Ostéopathie</strong> ({site.duration.osteo}) : {site.reimbursement.osteo}</p>
            <p className="mt-4 text-base leading-relaxed text-ivory/75"><strong className="font-normal text-ivory">Kinésithérapie</strong> ({site.duration.kine}) : {site.reimbursement.kine}</p>
            <p className="mt-6 text-sm text-ivory/60">
              {site.languages}{" "}
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="text-ivory/85 underline decoration-ivory/30 underline-offset-4 hover:decoration-steel">{site.upob.short}</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-ivoryDeep text-night">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center md:px-10">
          <p className="text-sm text-night/70">
            David Otu consulte aussi à <a href={`/${other.slug}`} className="border-b border-night/30 pb-0.5 text-night hover:text-steelDeep">{other.city}</a> ({other.days.toLowerCase()}).
          </p>
          <a href="/" className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-night/70 hover:text-steelDeep">← Retour à l&apos;accueil</a>
        </div>
      </section>
    </>
  );
}
