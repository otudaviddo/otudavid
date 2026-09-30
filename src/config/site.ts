/**
 * CONFIGURATION CENTRALE — seul fichier à modifier pour changer
 * les liens de réservation ou les coordonnées.
 */

// ⬇️ REMPLACEZ CES DEUX URLS par vos profils Doctoranytime ⬇️
export const OSTEO_DOCTORANYTIME_URL = "https://www.doctoranytime.be/d/osteopathe/david-otu"; // TODO: URL profil ostéopathie
export const KINE_DOCTORANYTIME_URL = "https://www.doctoranytime.be/d/kinesitherapeute/david-otu-2"; // TODO: URL profil kinésithérapie

// URL définitive du site (utilisée pour le SEO : sitemap, données structurées, Open Graph).
export const SITE_URL = "https://otudavid.be";

export const site = {
  name: "OTU DAVID",
  title: "Kinésithérapeute · Ostéopathe D.O.",
  tagline: "Prenez rendez-vous en ligne",
  phone: "0492.95.30.43",
  phoneHref: "tel:0492953043",
  email: "otudavid.do@gmail.com",
  instagram: "https://www.instagram.com/otu.care/",
  instagramHandle: "@otu.care",
  addresses: [
    {
      label: "Woluwe-Saint-Pierre",
      street: "Rue de la Station 113",
      postalCode: "1150",
      city: "Woluwe-Saint-Pierre",
      lines: "Rue de la Station 113, 1150 Woluwe-Saint-Pierre",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rue+de+la+Station+113,+1150+Woluwe-Saint-Pierre",
      mapsEmbed: "https://maps.google.com/maps?q=Rue+de+la+Station+113,+1150+Woluwe-Saint-Pierre&z=16&output=embed",
      slug: "woluwe-saint-pierre",
      days: "Mardi · Jeudi",
      daysSentence: "le mardi et le jeudi",
      dayCodes: ["Tuesday", "Thursday"],
      metaTitle: "Ostéopathe & kinésithérapeute à Woluwe-Saint-Pierre — David Otu",
      metaDescription:
        "David Otu, ostéopathe D.O. et kinésithérapeute à Woluwe-Saint-Pierre, rue de la Station 113. Consultations le mardi et le jeudi. Rendez-vous en ligne.",
    },
    {
      label: "Ixelles",
      street: "Rue de Hennin 99",
      postalCode: "1050",
      city: "Ixelles",
      lines: "Rue de Hennin 99, 1050 Ixelles",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rue+de+Hennin+99,+1050+Ixelles",
      mapsEmbed: "https://maps.google.com/maps?q=Rue+de+Hennin+99,+1050+Ixelles&z=16&output=embed",
      slug: "ixelles",
      days: "Lundi · Mercredi · Vendredi",
      daysSentence: "le lundi, le mercredi et le vendredi",
      dayCodes: ["Monday", "Wednesday", "Friday"],
      metaTitle: "Ostéopathe & kinésithérapeute à Ixelles — David Otu",
      metaDescription:
        "David Otu, ostéopathe D.O. et kinésithérapeute à Ixelles, rue de Hennin 99. Consultations le lundi, le mercredi et le vendredi. Rendez-vous en ligne.",
    },
  ],
  // Bio courte, affichée sur la page d'accueil.
  about:
    "Chaque prise en charge débute par un bilan complet, pour identifier la cause de vos symptômes plutôt que le seul symptôme. Thérapie manuelle, exercices ciblés et conseils, fondés sur les données scientifiques les plus récentes.",
  reviews: {
    label: "Avis vérifiés sur Doctoranytime",
  },
  // Parcours : repris fidèlement du CV (rien d'ajouté). Pour modifier une ligne,
  // changez simplement le texte ci-dessous ; l'ordre affiché = l'ordre ici.
  parcours: {
    intro: "Formé à l'ULB en ostéopathie, puis en kinésithérapie.",
    highlights: [
      { value: "Approche globale", label: "Ostéopathie & kinésithérapie", detail: "Deux formations complètes réunies dans une même prise en charge" },
      { value: "8 années", label: "De formation universitaire", detail: "Université libre de Bruxelles" },
      { value: "Hôpital & sport", label: "Expérience de terrain", detail: "Stages hospitaliers et suivi d'équipes sportives" },
    ],
    formation: [
      {
        group: "Kinésithérapie",
        summary: "Bachelier passerelle et Master · ULB",
        items: [
          { years: "2025 – 2026", title: "Master en kinésithérapie et réadaptation", detail: "ULB" },
          { years: "2024 – 2025", title: "Bachelier en sciences de la motricité, kinésithérapie", detail: "ULB · passerelle" },
        ],
      },
      {
        group: "Ostéopathie",
        summary: "Bachelier, Master et Master de spécialisation · ULB",
        items: [
          { years: "2022 – 2023", title: "Master de spécialisation en ostéopathie", detail: "ULB" },
          { years: "2020 – 2022", title: "Master en sciences de la motricité", detail: "ULB · finalité spécialisée ostéopathie" },
          { years: "2017 – 2020", title: "Bachelier en sciences de la motricité", detail: "ULB · orientation générale" },
        ],
      },
    ],
    experience: [
      {
        group: "Cabinet",
        summary: "Ostéopathe · Station Woluwe, depuis 2023",
        items: [
          { years: "2023 – aujourd'hui", title: "Ostéopathe", detail: "Centre Médical & Dentaire Station Woluwe" },
        ],
      },
      {
        group: "Sport",
        summary: "Staff médical · RRC Waterloo et RSD Jette",
        items: [
          { years: "2023 – 2024", title: "Staff médical", detail: "Royal Racing Club de Waterloo" },
          { years: "2023 – 2024", title: "Staff médical", detail: "RSD Jette" },
        ],
      },
      {
        group: "Stages cliniques · kinésithérapie",
        summary: "5 stages : hôpital, revalidation et performance",
        items: [
          { years: "2026", title: "Pneumologie — prise en charge respiratoire et réhabilitation", detail: "Hôpital Iris Sud" },
          { years: "2025", title: "Revalidation neuro-orthopédique", detail: "Hôpital Saint-Jean, site Méridien" },
          { years: "2025", title: "Revalidation cardio-respiratoire", detail: "Clinique Sainte-Elisabeth" },
          { years: "2025", title: "Rééducation fonctionnelle orthopédique", detail: "Point of Motion, cabinet privé" },
          { years: "2025", title: "Performance et rééducation fonctionnelle", detail: "LAB Physio × Animo Studio Cinquantenaire, cabinet privé" },
        ],
      },
      {
        group: "Stages d'observation · ostéopathie",
        summary: "3 stages : chirurgie orthopédique et cabinets privés",
        items: [
          { years: "2022 – 2023", title: "Cabinet privé", detail: "Cassiel Van Slijpe" },
          { years: "2022 – 2023", title: "Cabinet privé", detail: "Sergio Giunta" },
          { years: "2021 – 2022", title: "Chirurgie orthopédique", detail: "Hôpital Iris Sud" },
        ],
      },
    ],
    languages: ["Français", "Anglais"],
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
