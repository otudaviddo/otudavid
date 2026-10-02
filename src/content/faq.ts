import { site } from "@/config/site";

export type QA = { q: string; a: string };

/* Questions fréquentes. Les réponses reprennent uniquement des informations
   validées par David Otu (remboursement, durées, jours, langues). */

const remboursementOsteo: QA = {
  q: "L'ostéopathie est-elle remboursée par la mutuelle ?",
  a: `Oui, partiellement. ${site.reimbursement.osteo} Le montant et le nombre de séances remboursées dépendent de votre mutuelle. David Otu est membre d'osteopathie.be, l'Union professionnelle des ostéopathes de Belgique.`,
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
  a: "Elle commence par un bilan complet : vos antécédents, vos symptômes et un examen pour identifier les facteurs qui contribuent à la douleur, pas seulement l'endroit où elle se manifeste. Viennent ensuite le traitement (thérapie manuelle, exercices ciblés) et des conseils concrets pour le quotidien.",
};
const choisir: QA = {
  q: "Ostéopathe ou kiné : lequel choisir ?",
  a: "Les deux approches sont complémentaires. L'ostéopathie met davantage l'accent sur l'évaluation et le traitement manuel. La kinésithérapie permet notamment de travailler la force, la mobilité, la fonction et la reprise progressive des activités ; elle est remboursée par l'INAMI sur prescription. Formé dans les deux disciplines, David Otu vous oriente vers l'approche la plus adaptée à votre situation.",
};
const urgence: QA = {
  q: "Comment obtenir un rendez-vous en urgence (lumbago, torticolis, dos bloqué) ?",
  a: `Pour un rendez-vous en urgence, appelez directement le ${site.phone} : un créneau rapproché vous est proposé selon les disponibilités, à Ixelles ou à Woluwe-Saint-Pierre. Pour un rendez-vous classique, la réservation en ligne reste possible.`,
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

export const faqHome: QA[] = [urgence, choisir, remboursementKine, remboursementOsteo, prescription, duree, premiereSeance, ouQuand, apporter, anglais];
export const faqOsteo: QA[] = [urgence, remboursementOsteo, duree, premiereSeance, prescription, choisir, ouQuand, anglais];
export const faqKine: QA[] = [remboursementKine, prescription, duree, premiereSeance, urgence, apporter, choisir, ouQuand, anglais];
