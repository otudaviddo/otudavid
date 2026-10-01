/* Contenu détaillé des pages /osteo et /kine (mots-clés des recherches patients). */

export type Group = { title: string; items: string[] };

export const osteoContent = {
  lead: [
    "L'ostéopathie s'intéresse à la mobilité du corps dans son ensemble : une douleur au dos, à la nuque ou à l'épaule peut être entretenue par une tension située ailleurs. La séance vise à soulager la douleur, à redonner de la mobilité et à comprendre ce qui l'a provoquée.",
    "David Otu est ostéopathe D.O., diplômé de l'ULB (master de spécialisation en ostéopathie) et membre d'osteopathie.be, l'Union professionnelle des ostéopathes de Belgique. Il consulte à Ixelles et à Woluwe-Saint-Pierre, pour les adultes, les sportifs, les seniors et les enfants.",
  ],
  groups: [
    { title: "Douleurs aiguës", items: ["Lumbago, dos bloqué, crochetage", "Torticolis, nuque bloquée", "Sciatique, cruralgie", "Douleur entre les omoplates, douleur aux côtes"] },
    { title: "Dos et colonne", items: ["Mal de dos, lombalgie, douleur lombaire", "Cervicalgie, douleur cervicale", "Dorsalgie", "Douleur au bassin ou au coccyx"] },
    { title: "Tête et mâchoire", items: ["Maux de tête d'origine cervicale", "Tensions de la mâchoire (ATM)"] },
    { title: "Articulations", items: ["Épaule douloureuse", "Douleur au genou, à la hanche, à la cheville"] },
    { title: "Tensions et fonctionnel", items: ["Tensions liées au stress ou à la posture", "Douleurs de bureau et d'écran", "Troubles digestifs fonctionnels"] },
    { title: "Sport", items: ["Accompagnement du sportif", "Récupération et prévention"] },
  ] as Group[],
  deroule: [
    "Bilan complet : antécédents, symptômes, examen de la mobilité et des zones en lien avec la douleur.",
    "Traitement manuel : techniques douces et ciblées, toujours expliquées et adaptées à votre confort.",
    "Conseils : postures, mouvements et exercices simples pour prolonger les effets de la séance.",
  ],
};

export const kineContent = {
  lead: [
    "La kinésithérapie accompagne la récupération après une blessure, une opération ou une période de douleur, avec un objectif concret : retrouver vos mouvements, vos activités et votre sport. Elle associe thérapie manuelle et exercices progressifs, ajustés séance après séance.",
    "David Otu est kinésithérapeute conventionné, diplômé de l'ULB (master en kinésithérapie et réadaptation). Il a été staff médical en club sportif et a effectué ses stages en hôpital et en cabinets orientés rééducation et performance. Il consulte à Ixelles et à Woluwe-Saint-Pierre.",
  ],
  groups: [
    { title: "Rééducation post-opératoire", items: ["Prothèse de genou ou de hanche", "Ligaments croisés, ménisque", "Chirurgie de l'épaule", "Fracture après immobilisation"] },
    { title: "Traumatologie", items: ["Entorse de la cheville ou du genou", "Tendinopathies : épaule, genou, tendon d'Achille", "Tendinopathie du coude (tennis elbow)", "Fasciopathie plantaire"] },
    { title: "Kiné du sport", items: ["Claquage, élongation", "Pubalgie, adducteurs", "Reprise du sport après blessure", "Prévention des blessures"] },
    { title: "Dos et nuque", items: ["Lombalgie, hernie discale", "Cervicalgie", "Scoliose, posture"] },
    { title: "Rééducation fonctionnelle", items: ["Marche, équilibre, escaliers", "Retour aux gestes du quotidien et au travail"] },
  ] as Group[],
  deroule: [
    "Bilan : douleur, mobilité, force, et vos objectifs (quotidien, travail, sport).",
    "Rééducation : thérapie manuelle et exercices ciblés, avec une progression mesurée.",
    "Autonomie : un programme d'exercices à poursuivre chez vous entre les séances.",
  ],
};
