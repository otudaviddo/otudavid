import { site, disciplines, SITE_URL } from "@/config/site";

// Données structurées Schema.org : elles n'affichent rien à l'écran,
// mais aident Google à comprendre qui vous êtes, où, et pour quoi,
// ce qui améliore le référencement local (recherches "kiné Ixelles", etc.).
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    image: `${SITE_URL}/icon.svg`,
    url: SITE_URL,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    sameAs: [site.instagram],
    priceRange: "€€",
    knowsLanguage: ["fr", "en"],
    founder: {
      "@type": "Person",
      name: "David Otu",
      jobTitle: ["Kinésithérapeute", "Ostéopathe D.O."],
      alumniOf: { "@type": "CollegeOrUniversity", name: "Université libre de Bruxelles (ULB)" },
      knowsLanguage: ["fr", "en"],
      memberOf: { "@type": "Organization", name: "UPOB — Union professionnelle des ostéopathes de Belgique", url: site.upob.url },
    },
    medicalSpecialty: ["Physiotherapy", "Osteopathic"],
    areaServed: [
      { "@type": "City", name: "Ixelles" },
      { "@type": "City", name: "Woluwe-Saint-Pierre" },
      { "@type": "City", name: "Bruxelles" },
    ],
    location: site.addresses.map((a) => ({
      "@type": "Place",
      name: `Cabinet ${a.label}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: a.street,
        addressLocality: a.city,
        postalCode: a.postalCode,
        addressCountry: "BE",
      },
    })),
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalTherapy", name: "Ostéopathie" },
        url: disciplines.osteo.url,
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "MedicalTherapy", name: "Kinésithérapie" },
        url: disciplines.kine.url,
      },
    ],
  };

  // Identité du site : aide Google à reconnaître « David Otu » / « OTU DAVID »
  // et à proposer les pages principales sous le résultat (liens de site).
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "David Otu",
    alternateName: ["OTU DAVID", "David Otu ostéopathe kinésithérapeute", "otudavid.be"],
    url: SITE_URL,
    inLanguage: "fr-BE",
  };
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Otu",
    url: SITE_URL,
    image: `${SITE_URL}/images/portrait-david-otu.webp`,
    jobTitle: ["Ostéopathe D.O.", "Kinésithérapeute"],
    sameAs: [site.instagram, disciplines.osteo.url, disciplines.kine.url],
    memberOf: { "@type": "Organization", name: "UPOB — Union professionnelle des ostéopathes de Belgique", url: site.upob.url },
    alumniOf: { "@type": "CollegeOrUniversity", name: "Université libre de Bruxelles (ULB)" },
    workLocation: site.addresses.map((a) => ({ "@type": "Place", name: `Cabinet ${a.city}`, url: `${SITE_URL}/${a.slug}`, address: { "@type": "PostalAddress", streetAddress: a.street, addressLocality: a.city, postalCode: a.postalCode, addressCountry: "BE" } })),
  };

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
    </>
  );
}
