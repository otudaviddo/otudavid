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

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
