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
  // Bio courte, affichée sur la page d'accueil.
  about:
    "Chaque prise en charge débute par un bilan complet, pour identifier la cause de vos symptômes plutôt que le seul symptôme. Thérapie manuelle, exercices ciblés et conseils, fondés sur les données scientifiques les plus récentes.",
  reviews: {
    averageLabel: "Note moyenne proche de 10/10",
    countLabel: "40+ avis vérifiés sur Doctoranytime",
  },
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
      "Séance d'ostéopathie à Ixelles ou Woluwe-Saint-Pierre avec David Otu, ostéopathe D.O. Douleurs cervicales, dorsales, lombaires, troubles digestifs. Rendez-vous en ligne.",
    intro:
      "Ostéopathe D.O. diplômé, à Ixelles et à Woluwe-Saint-Pierre. Écoute attentive, évaluation précise de votre posture, techniques manuelles douces et ciblées — pour adultes, enfants, sportifs et seniors.",
    specialties: [
      "Douleurs cervicales, dorsales, lombaires",
      "Tensions liées au stress ou à la posture",
      "Accompagnement du sportif",
      "Troubles digestifs ou fonctionnels",
      "Prévention et suivi chronique",
    ],
  },
  kine: {
    slug: "kine",
    label: "Kinésithérapie",
    upper: "KINÉSITHÉRAPIE",
    url: KINE_DOCTORANYTIME_URL,
    metaTitle: "Kinésithérapeute à Ixelles et Woluwe-Saint-Pierre — OTU DAVID",
    metaDescription:
      "Séance de kinésithérapie à Ixelles ou Woluwe-Saint-Pierre avec David Otu, kinésithérapeute. Rééducation fonctionnelle, sport, post-opératoire. Rendez-vous en ligne.",
    intro:
      "Kinésithérapeute, à Ixelles et à Woluwe-Saint-Pierre. Bilan complet, thérapie manuelle et exercices ciblés — pour retrouver vos activités, reprendre le sport ou accompagner un suivi post-opératoire.",
    specialties: [
      "Rééducation post-traumatique et post-opératoire",
      "Douleurs cervicales, dorsales, lombaires",
      "Préparation et reprise sportive",
      "Rééducation fonctionnelle",
      "Prévention et suivi chronique",
    ],
  },
} as const;
