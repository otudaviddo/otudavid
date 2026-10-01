import { site } from "@/config/site";

export type QA = { q: string; a: string };

/* Questions fréquentes. Les réponses reprennent uniquement des informations
   validées par David Otu (remboursement, durées, jours, langues). */

const remboursementOsteo: QA = {
  q: "L'ostéopathie est-elle remboursée par la mutuelle ?",
  a: `Oui, partiellement. ${site.reimbursement.osteo} Le montant et le nombre de séances remboursées dépendent de votre mutuelle. David Otu est membre de l'UPOB, l'Union professionnelle des ostéopathes de Belgique.`,
};
const remboursementKine: QA = {
  q: "La kinésithérapie est-elle remboursée ?",
  a: `Oui. David Otu est kinésithérapeute conventionné : les séances sont remboursées par l'INAMI sur prescription médicale, selon la nomenclature en vigueur et votre mutuelle.`,
};
const prescription: QA = {
  q: "Faut-il une prescription médicale ?",
  a: "Pas pour l'ostéopathie : vous pouvez prendre rendez-vous directement. Pour la kinésithérapie, une prescription de votre médecin est nécessaire pour être remboursé par l'INAMI.",
};
const duree: QA = {
  q: "Combien de temps dure une séance ?",
  a: `Une séance d'ostéopathie dure ${site.duration.osteo}, une séance de kinésithérapie ${site.duration.kine}.`,
};
const premiereSeance: QA = {
  q: "Comment se déroule la première séance ?",
  a: "Elle commence par un bilan complet : vos antécédents, vos symptômes et un examen pour identifier la cause de la douleur, pas seulement l'endroit où elle se manifeste. Viennent ensuite le traitement (thérapie manuelle, exercices ciblés) et des conseils concrets pour le quotidien.",
};
const choisir: QA = {
  q: "Ostéopathe ou kiné : lequel choisir ?",
  a: "L'ostéopathie convient bien aux douleurs et blocages récents ou récurrents : lumbago, dos bloqué, torticolis, tensions. La kinésithérapie est indiquée pour la rééducation après une blessure ou une opération et pour la reprise du sport, généralement sur prescription. Formé dans les deux disciplines, David Otu vous oriente vers la prise en charge la plus adaptée.",
};
const urgence: QA = {
  q: "Puis-je être reçu rapidement en cas de lumbago ou de torticolis ?",
  a: `Appelez le ${site.phone} : un créneau rapproché vous sera proposé selon les disponibilités, à Ixelles ou à Woluwe-Saint-Pierre. Vous pouvez aussi réserver en ligne via Doctoranytime.`,
};
const ouQuand: QA = {
  q: "Où et quand consulter ?",
  a: `À Ixelles (${site.addresses[1].street}) le lundi, le mercredi et le vendredi, et à Woluwe-Saint-Pierre (${site.addresses[0].street}) le mardi et le jeudi. L'ostéopathie et la kinésithérapie sont proposées dans les deux cabinets.`,
};
const apporter: QA = {
  q: "Que faut-il apporter ?",
  a: "Votre carte d'identité, la prescription médicale pour la kinésithérapie, et si vous en avez, vos examens (radiographie, IRM, compte rendu opératoire). Prévoyez une tenue dans laquelle vous êtes à l'aise.",
};
const anglais: QA = {
  q: "Do you offer consultations in English?",
  a: "Yes. David Otu is an English-speaking osteopath and physiotherapist, with practices in Ixelles and Woluwe-Saint-Pierre (Brussels). You can book online or call directly.",
};

export const faqHome: QA[] = [choisir, remboursementOsteo, remboursementKine, prescription, duree, premiereSeance, urgence, ouQuand, apporter, anglais];
export const faqOsteo: QA[] = [remboursementOsteo, duree, premiereSeance, urgence, prescription, choisir, ouQuand, anglais];
export const faqKine: QA[] = [remboursementKine, prescription, duree, premiereSeance, apporter, choisir, ouQuand, anglais];
