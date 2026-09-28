/**
 * CONFIGURATION CENTRALE — seul fichier à modifier pour changer
 * les liens de réservation ou les coordonnées.
 */

// ⬇️ REMPLACEZ CES DEUX URLS par vos profils Doctoranytime ⬇️
export const OSTEO_DOCTORANYTIME_URL = "https://www.doctoranytime.be"; // TODO: URL profil ostéopathie
export const KINE_DOCTORANYTIME_URL = "https://www.doctoranytime.be"; // TODO: URL profil kinésithérapie

// URL définitive du site (utilisée pour le SEO : sitemap, données structurées, Open Graph).
export const SITE_URL = "https://otudavid.be";

export const site = {
  name: "OTU DAVID",
  title: "Kinésithérapeute · Ostéopathe D.O.",
  tagline: "Prenez rendez-vous en ligne",
  phone: "0492.95.30.43",
  phoneHref: "tel:0492953043",
  email: "otudavid.do@gmail.com",
  addresses: [
    {
      label: "Woluwe-Saint-Pierre",
      street: "Rue de la station 113",
      postalCode: "1150",
      city: "Woluwe-Saint-Pierre",
      lines: "Rue de la station 113, 1150 Woluwe-Saint-Pierre",
    },
    {
      label: "Ixelles",
      street: "Rue de Hennin 99",
      postalCode: "1050",
      city: "Ixelles",
      lines: "Rue de Hennin 99, 1050 Ixelles",
    },
  ],
  seo: {
    title: "OTU DAVID — Kinésithérapeute & Ostéopathe D.O. à Ixelles et Woluwe-Saint-Pierre",
    description:
      "David Otu, kinésithérapeute et ostéopathe D.O. à Ixelles et Woluwe-Saint-Pierre. Cabinet de kinésithérapie et d'ostéopathie à Bruxelles. Prenez rendez-vous en ligne.",
  },
} as const;

export const disciplines = {
  osteo: {
    slug: "osteo",
    label: "Ostéopathie",
    upper: "OSTÉOPATHIE",
    url: OSTEO_DOCTORANYTIME_URL,
    metaTitle: "Ostéopathe D.O. à Ixelles et Woluwe-Saint-Pierre — OTU DAVID",
    metaDescription:
      "Séance d'ostéopathie à Ixelles ou Woluwe-Saint-Pierre avec David Otu, ostéopathe D.O. Prenez rendez-vous en ligne dès aujourd'hui.",
    intro:
      "David Otu, ostéopathe D.O., reçoit à Ixelles (rue de Hennin) et à Woluwe-Saint-Pierre (rue de la Station). L'ostéopathie s'adresse aux douleurs articulaires, musculaires et digestives, ainsi qu'au suivi postural, pour les adultes comme pour les enfants.",
  },
  kine: {
    slug: "kine",
    label: "Kinésithérapie",
    upper: "KINÉSITHÉRAPIE",
    url: KINE_DOCTORANYTIME_URL,
    metaTitle: "Kinésithérapeute à Ixelles et Woluwe-Saint-Pierre — OTU DAVID",
    metaDescription:
      "Séance de kinésithérapie à Ixelles ou Woluwe-Saint-Pierre avec David Otu, kinésithérapeute. Rééducation, sport, post-opératoire. Rendez-vous en ligne.",
    intro:
      "David Otu, kinésithérapeute, reçoit à Ixelles (rue de Hennin) et à Woluwe-Saint-Pierre (rue de la Station). La kinésithérapie accompagne la rééducation après blessure ou opération, les douleurs chroniques et la préparation sportive.",
  },
} as const;
