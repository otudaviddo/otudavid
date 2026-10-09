/* Tous les motifs de consultation, rangés par zone du corps (ou par situation).
   d : discipline — "K" kinésithérapie, "O" ostéopathie, "B" les deux.
   soin : page détaillée du site, quand elle existe.
   p / n : point sur le corps 3D (en mètres, y vers le haut, z vers l'avant) et direction de la peau ;
   absent pour les situations qui ne se montrent pas sur un corps (sport, après opération…). */

export type Motif = { fr: string; en: string; d: "K" | "O" | "B"; soin?: string };
export type Zone = { id: string; fr: string; en: string; p?: [number, number, number]; n?: [number, number, number]; items: Motif[] };

export const zones: Zone[] = [
  { id: "tete", fr: "Tête & mâchoire", en: "Head & jaw", p: [0.055, 1.68, 0.075], n: [0.45, 0, 1], items: [
    { fr: "Maux de tête d'origine cervicale", en: "Headaches of cervical origin", d: "O" },
    { fr: "Tensions de la mâchoire (ATM)", en: "Jaw tension (TMJ)", d: "O" },
  ] },
  { id: "nuque", fr: "Nuque", en: "Neck", p: [0, 1.56, -0.052], n: [0, 0.2, -1], items: [
    { fr: "Torticolis, nuque bloquée", en: "Stiff neck (torticollis)", d: "B", soin: "torticolis-cervicalgie" },
    { fr: "Cervicalgie, douleur cervicale", en: "Neck pain", d: "B", soin: "torticolis-cervicalgie" },
  ] },
  { id: "epaule", fr: "Épaule & bras", en: "Shoulder & arm", p: [0.262, 1.462, -0.005], n: [0.7, 0.7, 0], items: [
    { fr: "Épaule douloureuse", en: "Shoulder pain", d: "B" },
    { fr: "Tendinopathie de l'épaule", en: "Shoulder tendinopathy", d: "K" },
    { fr: "Tendinopathie du coude (tennis elbow)", en: "Elbow tendinopathy (tennis elbow)", d: "K" },
  ] },
  { id: "dos", fr: "Dos", en: "Back", p: [0, 1.06, -0.102], n: [0, 0, -1], items: [
    { fr: "Lumbago, dos bloqué", en: "Acute low back pain, locked back", d: "B", soin: "mal-de-dos-lumbago" },
    { fr: "Lombalgie, hernie discale", en: "Low back pain, disc herniation", d: "B", soin: "mal-de-dos-lumbago" },
    { fr: "Douleur entre les omoplates, aux côtes", en: "Pain between the shoulder blades, rib pain", d: "O" },
    { fr: "Dorsalgie", en: "Mid-back pain", d: "O" },
    { fr: "Sciatique, cruralgie", en: "Sciatica, femoral nerve pain", d: "B", soin: "sciatique" },
    { fr: "Scoliose, posture", en: "Scoliosis, posture", d: "K" },
  ] },
  { id: "ventre", fr: "Ventre & digestion", en: "Abdomen & digestion", p: [0, 1.05, 0.105], n: [0, 0, 1], items: [
    { fr: "Troubles digestifs fonctionnels", en: "Functional digestive complaints", d: "O" },
  ] },
  { id: "bassin", fr: "Hanche & bassin", en: "Hip & pelvis", p: [0.172, 0.95, 0], n: [1, 0, 0], items: [
    { fr: "Douleur à la hanche", en: "Hip pain", d: "B" },
    { fr: "Douleur au bassin ou au coccyx", en: "Pelvic or tailbone pain", d: "O" },
    { fr: "Pubalgie, adducteurs", en: "Groin pain, adductors", d: "K", soin: "kine-du-sport" },
  ] },
  { id: "genou", fr: "Genou", en: "Knee", p: [0.11, 0.5, 0.072], n: [0, 0, 1], items: [
    { fr: "Douleur au genou", en: "Knee pain", d: "B", soin: "douleur-genou" },
    { fr: "Entorse du genou", en: "Knee sprain", d: "K", soin: "douleur-genou" },
    { fr: "Ligaments croisés, ménisque", en: "ACL, meniscus", d: "K", soin: "douleur-genou" },
    { fr: "Tendinopathie du genou", en: "Knee tendinopathy", d: "K", soin: "douleur-genou" },
  ] },
  { id: "pied", fr: "Pied & cheville", en: "Foot & ankle", p: [0.149, 0.085, -0.014], n: [1, 0, 0], items: [
    { fr: "Entorse de la cheville", en: "Ankle sprain", d: "K", soin: "entorse-cheville" },
    { fr: "Douleur à la cheville", en: "Ankle pain", d: "B", soin: "entorse-cheville" },
    { fr: "Tendinopathie d'Achille", en: "Achilles tendinopathy", d: "K" },
    { fr: "Fasciopathie plantaire", en: "Plantar fasciopathy", d: "K" },
  ] },
  { id: "global", fr: "Tout le corps", en: "Whole body", items: [
    { fr: "Tensions liées au stress ou à la posture", en: "Stress- or posture-related tension", d: "O" },
    { fr: "Douleurs de bureau et d'écran", en: "Desk and screen-related pain", d: "O" },
    { fr: "Douleurs persistantes", en: "Persistent pain", d: "B" },
    { fr: "Marche, équilibre, escaliers", en: "Walking, balance, stairs", d: "K" },
    { fr: "Retour aux gestes du quotidien et au travail", en: "Back to daily tasks and work", d: "K" },
  ] },
  { id: "sport", fr: "Sport", en: "Sport", items: [
    { fr: "Claquage, élongation", en: "Muscle strain or tear", d: "K", soin: "kine-du-sport" },
    { fr: "Reprise du sport après blessure", en: "Return to sport after injury", d: "K", soin: "kine-du-sport" },
    { fr: "Prévention des blessures", en: "Injury prevention", d: "K", soin: "kine-du-sport" },
    { fr: "Accompagnement et récupération du sportif", en: "Support and recovery for athletes", d: "O" },
  ] },
  { id: "chirurgie", fr: "Après une opération", en: "After surgery", items: [
    { fr: "Prothèse de genou ou de hanche", en: "Knee or hip replacement", d: "K", soin: "reeducation-post-operatoire" },
    { fr: "Ligaments croisés (après chirurgie)", en: "ACL reconstruction", d: "K", soin: "reeducation-post-operatoire" },
    { fr: "Chirurgie de l'épaule", en: "Shoulder surgery", d: "K", soin: "reeducation-post-operatoire" },
    { fr: "Fracture après immobilisation", en: "Fracture after immobilisation", d: "K", soin: "reeducation-post-operatoire" },
  ] },
];
