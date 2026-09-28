/**
 * CONFIGURATION CENTRALE — seul fichier à modifier pour changer
 * les liens de réservation ou les coordonnées.
 */

// ⬇️ REMPLACEZ CES DEUX URLS par vos profils Doctoranytime ⬇️
export const OSTEO_DOCTORANYTIME_URL = "https://www.doctoranytime.be/d/osteopathe/david-otu"; // TODO: URL profil ostéopathie
export const KINE_DOCTORANYTIME_URL = "https://www.doctoranytime.be/d/kinesitherapeute/david-otu-2"; // TODO: URL profil kinésithérapie

export const site = {
  name: "OTU DAVID",
  title: "Kinésithérapeute · Ostéopathe D.O.",
  tagline: "Prenez rendez-vous en ligne",
  phone: "0492.95.30.43",
  phoneHref: "tel:0492953043",
  email: "otudavid.do@gmail.com",
  addresses: [
    { label: "Woluwe-Saint-Pierre", street: "Rue de la station 113", city: "1150 Woluwe-Saint-Pierre" },
    { label: "Ixelles", street: "Rue de Hennin 99", city: "1050 Ixelles" },
  ],
  seo: {
    title: "OTU DAVID — Kinésithérapeute & Ostéopathe D.O.",
    description:
      "Cabinet de kinésithérapie et d'ostéopathie à Woluwe-Saint-Pierre et Ixelles. Prenez rendez-vous en ligne.",
  },
} as const;

export const disciplines = {
  osteo: { slug: "osteo", label: "Ostéopathie", upper: "OSTÉOPATHIE", url: OSTEO_DOCTORANYTIME_URL },
  kine: { slug: "kine", label: "Kinésithérapie", upper: "KINÉSITHÉRAPIE", url: KINE_DOCTORANYTIME_URL },
} as const;
