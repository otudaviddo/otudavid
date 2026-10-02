/* Deux langues : français (par défaut, à la racine) et anglais (/en). */
import { site, disciplines as discFr } from "@/config/site";
import { osteoContent, kineContent } from "@/content/disciplines";
import { faqHome, faqOsteo, faqKine } from "@/content/faq";
import { soins as soinsFr, OSTEO_SOINS, KINE_SOINS, type Soin } from "@/content/soins";
import {
  siteEn, disciplinesEn, osteoContentEn, kineContentEn, approachEn,
  faqHomeEn, faqOsteoEn, faqKineEn, soinsEn, parcoursEn,
} from "@/content/en";

export type Lang = "fr" | "en";

export const routes = {
  fr: { home: "/", osteo: "/osteo", kine: "/kine", ixelles: "/ixelles", "woluwe-saint-pierre": "/woluwe-saint-pierre", legal: "/mentions-legales" },
  en: { home: "/en", osteo: "/en/osteopathy", kine: "/en/physiotherapy", ixelles: "/en/ixelles", "woluwe-saint-pierre": "/en/woluwe-saint-pierre", legal: "/en/legal" },
} as const;
export type RouteKey = keyof (typeof routes)["fr"];

/** Lien vers la même page dans l'autre langue (sélecteur FR | EN). */
export function alternate(path: string): { lang: Lang; href: string } {
  const clean = path.replace(/\/$/, "") || "/";
  const isEn = clean === "/en" || clean.startsWith("/en/");
  const from = isEn ? routes.en : routes.fr;
  const to = isEn ? routes.fr : routes.en;
  const key = (Object.keys(from) as RouteKey[]).find((k) => from[k] === clean) ?? "home";
  return { lang: isEn ? "fr" : "en", href: to[key] };
}

const uiFr = {
  nav: { osteo: "Ostéopathie", kine: "Kinésithérapie", parcours: "Parcours", avis: "Avis", contact: "Contact" },
  menu: "Menu", close: "Fermer",
  book: "Prendre rendez-vous", bookShort: "Rendez-vous", call: "Appeler", more: "En savoir plus",
  callAria: (p: string) => `Appeler le ${p}`, mailAria: (m: string) => `Écrire à ${m}`,
  osteoPro: "Ostéopathe D.O.", kinePro: "Kinésithérapeute",
  heroH1: "Kinésithérapeute et ostéopathe D.O. à Ixelles et Woluwe-Saint-Pierre",
  altOsteo: "Séance d'ostéopathie : les mains de l'ostéopathe sur le thorax d'un patient",
  altKine: "Séance de kinésithérapie : travail manuel sur le genou d'un sportif",
  altPortrait: "David Otu, kinésithérapeute et ostéopathe D.O.",
  about: "À propos", tags: ["Rééducation", "Thérapie manuelle"],
  practicesSentence: { a: "Cabinets à", ixDays: "(lundi, mercredi, vendredi)", and: "et à", wsDays: "(mardi, jeudi)", end: ", à Bruxelles." },
  trust: [
    { t: "Ostéopathe D.O.", d: "Diplômé de l'ULB" },
    { t: "Kinésithérapeute", d: "Conventionné INAMI" },
    { t: "", d: "Union professionnelle" },
    { t: "2 cabinets", d: "Ixelles · Woluwe-Saint-Pierre" },
  ],
  trustAria: "En bref",
  parcours: { title: "Parcours", formation: "Formation", experience: "Expérience", languages: "Langues" },
  avis: { title: "Ce que disent les patients", prev: "Avis précédents", next: "Avis suivants", all: "Voir tous les avis sur Doctoranytime", aria: "Avis de patients, faites défiler horizontalement" },
  faq: { title: "Questions fréquentes", prev: "Question précédente", next: "Question suivante" },
  contact: {
    title: "Contact", phoneMail: "Téléphone & e-mail", cabinet: "Cabinet", cabinetLink: "Le cabinet", route: "Itinéraire",
    footSoins: "Soins", footCabinets: "Cabinets", cabIx: "Ostéopathe & kiné à Ixelles", cabWs: "Ostéopathe & kiné à Woluwe-Saint-Pierre",
    conventionne: "Kinésithérapeute conventionné INAMI", navAria: "Pages du site",
    legal: "Mentions légales et confidentialité", inami: "N° INAMI", bce: "N° d'entreprise",
  },
  mobile: { dialog: "Choisir le type de rendez-vous", via: "Réservation en ligne via Doctoranytime" },
  booking: {
    sessionOf: (d: string) => `Séance de ${d}`, about: { osteo: "L'ostéopathie", kine: "La kinésithérapie" },
    motifs: "Motifs de consultation", deroulement: "Déroulement", remboursement: "Remboursement", cabinets: "Cabinets",
    noPrescription: "Aucune prescription n'est nécessaire pour consulter en ostéopathie.",
    bringPrescription: "Pensez à apporter la prescription de votre médecin et votre carte d'identité.",
  },
  sections: { title: "Les motifs en détail", care: "La prise en charge", alert: "Consultez d'abord un médecin en cas de" },
  cabinet: {
    kicker: (c: string) => `Cabinet de ${c}`, h1: (c: string) => `Ostéopathe & kinésithérapeute à ${c}`,
    lead: (c: string, st: string, days: string) => `David Otu, ostéopathe D.O. et kinésithérapeute diplômé de l'ULB, consulte à ${c}, ${st}, ${days}. Séances d'ostéopathie et de kinésithérapie, sur rendez-vous.`,
    address: "Adresse", days: "Jours de consultation", care: "Soins proposés", contact: "Contact",
    mapTitle: (c: string) => `Plan d'accès au cabinet de ${c}`,
    motifsTitle: (c: string) => `Motifs de consultation à ${c}`,
    motifsText: (c: string) => `Au cabinet de ${c}, David Otu prend en charge les douleurs aiguës (lumbago, dos bloqué, torticolis, sciatique), les douleurs chroniques du dos et de la nuque, les blessures sportives et la rééducation après une entorse, une fracture ou une opération (prothèse de genou ou de hanche, ligaments croisés).`,
    reimb: "Remboursement", also: "David Otu consulte aussi à", back: "Retour à l'accueil",
  },
  urgent: {
    band: "Rendez-vous en urgence", bandText: "Lumbago, torticolis, dos bloqué : appelez directement.", short: "Urgence", aria: "Rendez-vous en urgence",
    h2Osteo: "Ostéopathe en urgence à Ixelles et Woluwe-Saint-Pierre",
    h2Kine: "Kinésithérapie : rendez-vous en urgence",
    h2City: (c: string) => `Rendez-vous en urgence à ${c}`,
    textOsteo: "Lumbago, dos bloqué, torticolis, sciatique : pour une douleur aiguë, n'attendez pas un créneau en ligne. Appelez directement, un rendez-vous rapproché vous est proposé selon les disponibilités, à Ixelles (lundi, mercredi, vendredi) ou à Woluwe-Saint-Pierre (mardi, jeudi).",
    textKine: "Entorse, blessure sportive récente, rééducation à démarrer rapidement après une opération : appelez directement, un rendez-vous rapproché vous est proposé selon les disponibilités, à Ixelles ou à Woluwe-Saint-Pierre.",
    textCity: (c: string, days: string) => `Lumbago, dos bloqué, torticolis, entorse : pour un rendez-vous en urgence au cabinet de ${c}, ${days}, appelez directement. Un créneau rapproché vous est proposé selon les disponibilités.`,
    safety: "En cas de traumatisme important, de fièvre ou de perte de force, consultez d'abord un médecin ou appelez le 112.",
    sheet: "Urgence ? Appelez directement", contact: "Rendez-vous en urgence : appelez directement ce numéro.",
  },
  lang: { switch: "EN", aria: "English version" },
};

const uiEn: typeof uiFr = {
  nav: { osteo: "Osteopathy", kine: "Physiotherapy", parcours: "Background", avis: "Reviews", contact: "Contact" },
  menu: "Menu", close: "Close",
  book: "Book an appointment", bookShort: "Book", call: "Call", more: "Learn more",
  callAria: (p) => `Call ${p}`, mailAria: (m) => `Email ${m}`,
  osteoPro: "Osteopath D.O.", kinePro: "Physiotherapist",
  heroH1: "English-speaking physiotherapist and osteopath D.O. in Ixelles and Woluwe-Saint-Pierre, Brussels",
  altOsteo: "Osteopathy session: the osteopath's hands on a patient's chest",
  altKine: "Physiotherapy session: manual work on an athlete's knee",
  altPortrait: "David Otu, physiotherapist and osteopath D.O.",
  about: "About", tags: ["Rehabilitation", "Manual therapy"],
  practicesSentence: { a: "Practices in", ixDays: "(Monday, Wednesday, Friday)", and: "and", wsDays: "(Tuesday, Thursday)", end: ", Brussels." },
  trust: [
    { t: "Osteopath D.O.", d: "Graduated from ULB" },
    { t: "Physiotherapist", d: "Contracted with INAMI" },
    { t: "", d: "Professional union" },
    { t: "2 practices", d: "Ixelles · Woluwe-Saint-Pierre" },
  ],
  trustAria: "At a glance",
  parcours: { title: "Background", formation: "Education", experience: "Experience", languages: "Languages" },
  avis: { title: "What patients say", prev: "Previous reviews", next: "Next reviews", all: "See all reviews on Doctoranytime", aria: "Patient reviews, scroll horizontally" },
  faq: { title: "Frequently asked questions", prev: "Previous question", next: "Next question" },
  contact: {
    title: "Contact", phoneMail: "Phone & email", cabinet: "Practice", cabinetLink: "The practice", route: "Directions",
    footSoins: "Care", footCabinets: "Practices", cabIx: "Osteopath & physio in Ixelles", cabWs: "Osteopath & physio in Woluwe-Saint-Pierre",
    conventionne: "Physiotherapist contracted with INAMI", navAria: "Site pages",
    legal: "Legal notice and privacy", inami: "INAMI no.", bce: "Company no.",
  },
  mobile: { dialog: "Choose your type of appointment", via: "Online booking via Doctoranytime" },
  booking: {
    sessionOf: (d) => `${d} session`, about: { osteo: "Osteopathy", kine: "Physiotherapy" },
    motifs: "What I treat", deroulement: "How a session works", remboursement: "Reimbursement", cabinets: "Practices",
    noPrescription: "No prescription is needed to see an osteopath.",
    bringPrescription: "Please bring your doctor's prescription and your ID card.",
  },
  sections: { title: "Conditions in detail", care: "Treatment", alert: "See a doctor first if you have" },
  cabinet: {
    kicker: (c) => `${c} practice`, h1: (c) => `Osteopath & physiotherapist in ${c}`,
    lead: (c, st, days) => `David Otu, osteopath D.O. and physiotherapist graduated from ULB, practises in ${c}, ${st}, ${days}. Osteopathy and physiotherapy sessions, by appointment, in English or French.`,
    address: "Address", days: "Consultation days", care: "Services", contact: "Contact",
    mapTitle: (c) => `Map of the ${c} practice`,
    motifsTitle: (c) => `What I treat in ${c}`,
    motifsText: (c) => `At the ${c} practice, David Otu treats acute pain (acute low back pain, locked back, stiff neck, sciatica), chronic back and neck pain, sports injuries, and rehabilitation after a sprain, a fracture or surgery (knee or hip replacement, cruciate ligaments).`,
    reimb: "Reimbursement", also: "David Otu also practises in", back: "Back to home",
  },
  urgent: {
    band: "Urgent appointment", bandText: "Acute low back pain, stiff neck, locked back: call directly.", short: "Urgent", aria: "Urgent appointment",
    h2Osteo: "Urgent osteopath appointment in Ixelles and Woluwe-Saint-Pierre",
    h2Kine: "Physiotherapy: urgent appointments",
    h2City: (c) => `Urgent appointment in ${c}`,
    textOsteo: "Acute low back pain, locked back, stiff neck, sciatica: for acute pain, don't wait for an online slot. Call directly and you will be offered the earliest possible appointment, subject to availability, in Ixelles (Monday, Wednesday, Friday) or Woluwe-Saint-Pierre (Tuesday, Thursday).",
    textKine: "Sprain, recent sports injury, rehabilitation to start quickly after surgery: call directly and you will be offered the earliest possible appointment, subject to availability, in Ixelles or Woluwe-Saint-Pierre.",
    textCity: (c, days) => `Acute low back pain, locked back, stiff neck, sprain: for an urgent appointment at the ${c} practice, ${days}, call directly. You will be offered the earliest possible slot, subject to availability.`,
    safety: "After a major injury, or with fever or loss of strength, see a doctor first or call 112.",
    sheet: "Urgent? Call directly", contact: "Urgent appointment: call this number directly.",
  },
  lang: { switch: "FR", aria: "Version française" },
};

export const ui = { fr: uiFr, en: uiEn };

const MONTHS_EN: Record<string, string> = {
  Janvier: "January", Février: "February", Mars: "March", Avril: "April", Mai: "May", Juin: "June",
  Juillet: "July", Août: "August", Septembre: "September", Octobre: "October", Novembre: "November", Décembre: "December",
};
export const reviewDate = (lang: Lang, d: string) => (lang === "fr" ? d : d.replace(/^(\S+)/, (m) => MONTHS_EN[m] ?? m));

/** Contenu complet d'une langue. */
export function content(lang: Lang) {
  const en = lang === "en";
  const disc = (k: "osteo" | "kine") => ({
    ...discFr[k],
    ...(en ? disciplinesEn[k] : {}),
    path: routes[lang][k],
  });
  const soinFor = (s: Soin) => (en ? { ...s, ...soinsEn[s.slug], slug: soinsEn[s.slug].anchor } : s);
  const pick = (list: string[]) => soinsFr.filter((s) => list.includes(s.slug)).map(soinFor);
  const addresses = site.addresses.map((a) => ({
    ...a,
    ...(en ? siteEn.addresses[a.slug] : {}),
    path: routes[lang][a.slug as RouteKey],
  }));
  return {
    lang,
    ui: ui[lang],
    routes: routes[lang],
    title: en ? siteEn.title : site.title,
    about: en ? siteEn.about : site.about,
    reviewsLabel: en ? siteEn.reviewsLabel : site.reviews.label,
    languages: en ? siteEn.languages : site.languages,
    upobShort: en ? siteEn.upobShort : site.upob.short,
    reimbursement: en ? siteEn.reimbursement : site.reimbursement,
    duration: en ? siteEn.duration : site.duration,
    seo: en ? siteEn.seo : site.seo,
    addresses,
    disciplines: { osteo: disc("osteo"), kine: disc("kine") },
    osteoContent: en ? osteoContentEn : osteoContent,
    kineContent: en ? kineContentEn : kineContent,
    faqHome: en ? faqHomeEn : faqHome,
    faqOsteo: en ? faqOsteoEn : faqOsteo,
    faqKine: en ? faqKineEn : faqKine,
    soinsOsteo: pick(OSTEO_SOINS),
    soinsKine: pick(KINE_SOINS),
    allSoins: [...pick(OSTEO_SOINS), ...pick(KINE_SOINS)],
    soinHref: (frSlug: string) => {
      const s = soinFor(soinsFr.find((x) => x.slug === frSlug)!);
      return `${routes[lang][OSTEO_SOINS.includes(frSlug) ? "osteo" : "kine"]}#${s.slug}`;
    },
    parcours: en ? parcoursEn : site.parcours,
    approach: en ? approachEn : null,
  };
}
export type Content = ReturnType<typeof content>;
