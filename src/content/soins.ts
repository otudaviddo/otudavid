import type { QA } from "@/content/faq";

/* Pages « motif de consultation » : une page par recherche fréquente des patients.
   Vocabulaire choisi pour correspondre aux mots tapés sur Google, formulation prudente
   (on soulage, on accompagne, on oriente — on ne promet pas de guérir). */

export type Soin = {
  slug: string;
  card: string;          // titre court (cartes, liens)
  cardText: string;      // une ligne de description
  discipline: "osteo" | "kine" | "both";
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  motifsTitle: string;
  motifs: string[];
  approche: string[];
  alerte: string[];
  faq: QA[];
};

export const soins: Soin[] = [
  {
    slug: "mal-de-dos-lumbago",
    card: "Mal de dos & lumbago",
    cardText: "Dos bloqué, crochetage, lombalgie, hernie discale",
    discipline: "both",
    metaTitle: "Mal de dos, lumbago, dos bloqué | Ostéopathe Ixelles & Woluwe",
    metaDescription:
      "Lumbago, dos bloqué, crochetage, lombalgie ou hernie discale : ostéopathe D.O. et kinésithérapeute à Ixelles et Woluwe-Saint-Pierre. Rendez-vous rapide possible.",
    h1: "Mal de dos, lumbago et lombalgie à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Le mal de dos est l'un des premiers motifs de consultation en ostéopathie et en kinésithérapie. Il peut apparaître brutalement — le fameux lumbago, ou « dos bloqué », que l'on appelle aussi crochetage en Belgique — ou s'installer progressivement avec la posture, le travail de bureau, le sport ou le stress.",
      "Ostéopathe D.O. et kinésithérapeute, David Otu prend en charge les douleurs lombaires et dorsales à Ixelles et à Woluwe-Saint-Pierre, avec un objectif simple : soulager la douleur, comprendre son origine et éviter qu'elle ne revienne.",
    ],
    motifsTitle: "Douleurs prises en charge",
    motifs: [
      "Lumbago, dos bloqué, crochetage",
      "Lombalgie aiguë ou chronique, douleur lombaire",
      "Dorsalgie, douleur entre les omoplates, douleur aux côtes",
      "Douleur liée à une hernie discale ou à une protrusion",
      "Douleur au bassin, au coccyx ou à la région sacro-iliaque",
      "Douleurs de posture et de bureau, scoliose (accompagnement en kiné)",
    ],
    approche: [
      "La séance commence par un bilan : circonstances d'apparition, gestes qui soulagent ou aggravent, mobilité, et recherche des zones en lien avec la douleur (bassin, hanches, thorax).",
      "En ostéopathie, des techniques manuelles douces et ciblées visent à relâcher les tensions et à redonner de la mobilité. En kinésithérapie, la prise en charge associe thérapie manuelle et exercices progressifs pour renforcer et stabiliser le dos sur la durée.",
      "Vous repartez avec des conseils concrets : positions, mouvements à reprendre, exercices simples à faire chez vous.",
    ],
    alerte: [
      "Douleur après une chute ou un choc important",
      "Faiblesse d'une jambe, perte de sensibilité de l'entrejambe ou troubles urinaires",
      "Fièvre, amaigrissement inexpliqué, douleur qui ne varie jamais même au repos",
    ],
    faq: [
      { q: "Faut-il attendre que la douleur passe avant de consulter ?", a: "Non. En cas de lumbago, une prise en charge précoce aide souvent à retrouver plus vite de la mobilité. Appelez pour obtenir un créneau rapproché selon les disponibilités." },
      { q: "L'ostéopathie peut-elle aider en cas de hernie discale ?", a: "Elle peut accompagner la douleur et la mobilité, en complément du suivi médical. Apportez vos examens (IRM, radiographie) : le traitement est adapté à votre situation." },
      { q: "Combien de séances faut-il ?", a: "Cela dépend de l'ancienneté et de la cause de la douleur. Un lumbago récent nécessite souvent peu de séances ; une lombalgie chronique demande un travail plus suivi, notamment en kinésithérapie." },
    ],
  },
  {
    slug: "torticolis-cervicalgie",
    card: "Torticolis & cervicalgie",
    cardText: "Nuque bloquée, douleur cervicale, maux de tête, mâchoire",
    discipline: "osteo",
    metaTitle: "Torticolis, cervicalgie | Ostéopathe Ixelles & Woluwe",
    metaDescription:
      "Torticolis, cervicalgie, nuque bloquée, maux de tête d'origine cervicale, tensions de la mâchoire : ostéopathe D.O. à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Torticolis, cervicalgie et douleurs de nuque à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Un réveil avec la nuque bloquée, une douleur cervicale qui s'installe après des heures devant l'écran, des maux de tête qui partent de la nuque : les douleurs cervicales sont fréquentes et souvent liées à la posture, au stress ou à un faux mouvement.",
      "À Ixelles et à Woluwe-Saint-Pierre, David Otu, ostéopathe D.O. et kinésithérapeute, prend en charge le torticolis et la cervicalgie pour soulager la douleur et retrouver une nuque mobile.",
    ],
    motifsTitle: "Douleurs prises en charge",
    motifs: [
      "Torticolis, nuque bloquée au réveil",
      "Cervicalgie aiguë ou chronique, douleur cervicale",
      "Douleur entre les omoplates, tensions des trapèzes",
      "Maux de tête d'origine cervicale",
      "Tensions de la mâchoire (articulation temporo-mandibulaire, ATM)",
      "Douleurs liées au travail de bureau et à l'écran",
    ],
    approche: [
      "Le bilan recherche ce qui entretient la douleur : position de travail, sommeil, stress, mobilité du dos et des épaules, mâchoire.",
      "Le traitement ostéopathique repose sur des techniques manuelles douces adaptées à la zone cervicale, sensible par nature. Il est complété, si besoin, par des exercices de mobilité et de posture issus de la kinésithérapie.",
      "Des conseils d'ergonomie (écran, oreiller, pauses) aident à limiter les récidives.",
    ],
    alerte: [
      "Douleur après un accident ou un choc à la tête",
      "Maux de tête brutaux et inhabituels, fièvre avec raideur de la nuque",
      "Vertiges importants, troubles de la vision ou de la parole, perte de force dans un bras",
    ],
    faq: [
      { q: "Les manipulations de la nuque sont-elles obligatoires ?", a: "Non. Il existe de nombreuses techniques douces sans manipulation. Le traitement est toujours expliqué et adapté à votre confort." },
      { q: "Un torticolis peut-il être pris en charge rapidement ?", a: "Oui, c'est un motif fréquent de consultation en urgence. Appelez pour obtenir un créneau rapproché selon les disponibilités." },
      { q: "Mes maux de tête peuvent-ils venir de la nuque ?", a: "Certains maux de tête sont liés aux tensions cervicales. Le bilan permet de le vérifier ; en cas de doute, un avis médical est recommandé." },
    ],
  },
  {
    slug: "sciatique",
    card: "Sciatique",
    cardText: "Douleur de la fesse à la jambe, cruralgie",
    discipline: "both",
    metaTitle: "Sciatique, douleur à la jambe | Ostéopathe & kiné Ixelles",
    metaDescription:
      "Sciatique, cruralgie, douleur qui descend dans la fesse et la jambe : prise en charge en ostéopathie et kinésithérapie à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Sciatique : ostéopathe et kinésithérapeute à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "La sciatique se manifeste par une douleur qui part du bas du dos ou de la fesse et descend dans la jambe, parfois jusqu'au pied, avec des fourmillements ou une sensation de décharge. Elle est souvent liée à une irritation du nerf sciatique, par exemple au niveau d'un disque lombaire.",
      "David Otu, ostéopathe D.O. et kinésithérapeute, accompagne les douleurs sciatiques à Ixelles et à Woluwe-Saint-Pierre, en lien avec votre médecin si nécessaire.",
    ],
    motifsTitle: "Situations fréquentes",
    motifs: [
      "Sciatique, douleur dans la fesse et l'arrière de la jambe",
      "Cruralgie (douleur sur l'avant de la cuisse)",
      "Sciatique liée à une hernie discale",
      "Douleur du piriforme ou de la fesse",
      "Récidives de sciatique, douleur chronique",
    ],
    approche: [
      "Le bilan évalue l'origine probable de la douleur, la mobilité du dos et du bassin, et les signes qui nécessitent un avis médical.",
      "L'ostéopathie vise à diminuer les tensions autour de la zone irritée ; la kinésithérapie propose des exercices progressifs (mobilité nerveuse, renforcement, posture) pour soulager et éviter les récidives.",
    ],
    alerte: [
      "Perte de force dans la jambe ou le pied",
      "Perte de sensibilité de l'entrejambe, troubles urinaires ou intestinaux",
      "Douleur qui s'aggrave rapidement malgré le repos",
    ],
    faq: [
      { q: "Faut-il une IRM avant de consulter ?", a: "Pas forcément. Le bilan clinique permet d'orienter la prise en charge ; si vous avez déjà des examens, apportez-les." },
      { q: "Ostéopathie ou kiné pour une sciatique ?", a: "Les deux peuvent se compléter : l'ostéopathie pour soulager la phase douloureuse, la kinésithérapie pour la rééducation et la prévention des récidives." },
    ],
  },
  {
    slug: "douleur-genou",
    card: "Douleur au genou",
    cardText: "Ménisque, ligaments croisés, tendinite, entorse",
    discipline: "kine",
    metaTitle: "Douleur au genou, ménisque, croisés | Kiné Ixelles & Woluwe",
    metaDescription:
      "Douleur au genou, entorse, ménisque, ligaments croisés, tendinite rotulienne, prothèse : kinésithérapeute et ostéopathe à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Douleur au genou : kinésithérapie et ostéopathie à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Le genou est très sollicité au quotidien comme au sport. Une entorse, une lésion du ménisque ou des ligaments croisés, une tendinite ou de l'arthrose peuvent rendre la marche, les escaliers ou la course douloureux.",
      "Kinésithérapeute et ostéopathe D.O., David Otu prend en charge les douleurs de genou et leur rééducation à Ixelles et à Woluwe-Saint-Pierre, avec ou sans opération.",
    ],
    motifsTitle: "Douleurs et situations prises en charge",
    motifs: [
      "Entorse du genou",
      "Lésion du ménisque (opérée ou non)",
      "Ligaments croisés : rééducation avant et après opération",
      "Tendinite rotulienne, syndrome rotulien, douleur à l'avant du genou",
      "Syndrome de la bandelette ilio-tibiale (genou du coureur)",
      "Arthrose du genou, rééducation après prothèse de genou",
    ],
    approche: [
      "Le bilan évalue la mobilité, la stabilité et la force du genou, mais aussi la hanche, la cheville et la façon de marcher ou de courir.",
      "La rééducation associe thérapie manuelle, renforcement progressif, travail d'équilibre et exercices adaptés à vos objectifs — retrouver une marche confortable ou reprendre le sport. Le suivi est ajusté séance après séance.",
    ],
    alerte: [
      "Genou qui gonfle fortement après un traumatisme",
      "Impossibilité de poser le pied ou genou qui se dérobe",
      "Genou chaud, rouge et douloureux avec de la fièvre",
    ],
    faq: [
      { q: "La rééducation du genou est-elle remboursée ?", a: "Oui, en kinésithérapie sur prescription médicale : David Otu est kinésithérapeute conventionné, les séances sont remboursées par l'INAMI selon la nomenclature." },
      { q: "Faut-il commencer la kiné avant une opération des ligaments croisés ?", a: "Une préparation avant l'opération est souvent recommandée par les chirurgiens. Parlez-en avec votre médecin et apportez votre prescription." },
    ],
  },
  {
    slug: "entorse-cheville",
    card: "Entorse de la cheville",
    cardText: "Entorse, instabilité, tendinite d'Achille, fasciite plantaire",
    discipline: "kine",
    metaTitle: "Entorse de la cheville | Kiné Ixelles & Woluwe-Saint-Pierre",
    metaDescription:
      "Entorse de la cheville, instabilité, tendinite d'Achille, fasciite plantaire : rééducation en kinésithérapie à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Entorse de la cheville et douleurs du pied à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "L'entorse de la cheville est l'une des blessures les plus fréquentes, au sport comme dans la vie de tous les jours. Mal rééduquée, elle peut laisser une cheville instable et favoriser les récidives.",
      "À Ixelles et à Woluwe-Saint-Pierre, David Otu, kinésithérapeute et ostéopathe D.O., accompagne la rééducation de la cheville et les douleurs du pied jusqu'au retour à vos activités.",
    ],
    motifsTitle: "Situations prises en charge",
    motifs: [
      "Entorse de la cheville, récente ou à répétition",
      "Instabilité de la cheville",
      "Tendinite d'Achille",
      "Fasciite plantaire, douleur sous le talon",
      "Rééducation après fracture ou opération de la cheville",
    ],
    approche: [
      "Le bilan évalue la stabilité, la mobilité et la force de la cheville, ainsi que l'appui et la marche.",
      "La rééducation progresse étape par étape : gestion de la douleur et du gonflement, récupération de la mobilité, renforcement, travail d'équilibre (proprioception) puis gestes spécifiques à votre sport.",
    ],
    alerte: [
      "Impossibilité de faire quelques pas après l'entorse",
      "Douleur vive en appuyant sur l'os de la cheville ou du pied",
      "Déformation visible",
    ],
    faq: [
      { q: "Quand commencer la rééducation après une entorse ?", a: "Le plus souvent assez tôt, une fois une fracture écartée si nécessaire. Une rééducation précoce et progressive limite le risque de récidive." },
      { q: "La rééducation d'une entorse est-elle remboursée ?", a: "Oui, sur prescription médicale : les séances de kinésithérapie sont remboursées par l'INAMI." },
    ],
  },
  {
    slug: "reeducation-post-operatoire",
    card: "Rééducation post-opératoire",
    cardText: "Prothèse de hanche ou de genou, ligaments, épaule, fracture",
    discipline: "kine",
    metaTitle: "Rééducation post-opératoire | Kiné Ixelles & Woluwe",
    metaDescription:
      "Rééducation après opération : prothèse de genou ou de hanche, ligaments croisés, épaule, fracture. Kinésithérapeute conventionné à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Rééducation post-opératoire à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Après une opération, la rééducation est une étape décisive pour retrouver mobilité, force et autonomie. Elle suit les consignes du chirurgien et avance au rythme de la cicatrisation.",
      "Kinésithérapeute conventionné, David Otu assure la rééducation post-opératoire à Ixelles et à Woluwe-Saint-Pierre, sur prescription médicale, avec un remboursement par l'INAMI.",
    ],
    motifsTitle: "Rééducations proposées",
    motifs: [
      "Prothèse totale de genou ou de hanche",
      "Reconstruction des ligaments croisés, ménisque",
      "Chirurgie de l'épaule (coiffe des rotateurs, instabilité)",
      "Fracture (poignet, cheville, épaule…) après immobilisation",
      "Chirurgie du rachis, sur avis du chirurgien",
    ],
    approche: [
      "Le bilan initial tient compte du compte rendu opératoire et du protocole du chirurgien.",
      "La rééducation associe gestion de la douleur, récupération de l'amplitude, renforcement progressif et travail fonctionnel (marche, escaliers, gestes du quotidien, retour au travail ou au sport). Les objectifs sont réévalués régulièrement.",
    ],
    alerte: [
      "Fièvre, cicatrice rouge, chaude ou qui coule",
      "Mollet douloureux et gonflé",
      "Douleur qui augmente fortement d'un jour à l'autre",
    ],
    faq: [
      { q: "Que faut-il apporter à la première séance ?", a: "La prescription médicale, votre carte d'identité, le compte rendu opératoire et, si vous l'avez, le protocole de rééducation du chirurgien." },
      { q: "La rééducation post-opératoire est-elle remboursée ?", a: "Oui. David Otu est kinésithérapeute conventionné : les séances sont remboursées par l'INAMI sur prescription médicale, selon la nomenclature." },
    ],
  },
  {
    slug: "kine-du-sport",
    card: "Kiné du sport",
    cardText: "Blessure, claquage, pubalgie, tendinite, reprise du sport",
    discipline: "both",
    metaTitle: "Kiné du sport, blessure, reprise | Ixelles & Woluwe",
    metaDescription:
      "Kinésithérapeute du sport et ostéopathe à Ixelles et Woluwe-Saint-Pierre : claquage, pubalgie, adducteurs, tendinite, entorse, reprise du sport après blessure.",
    h1: "Kiné du sport à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Une blessure sportive demande une prise en charge précise : soulager, rééduquer, puis préparer un retour au sport sans récidive. Football, course à pied, sports de raquette, salle de sport — chaque discipline a ses contraintes.",
      "Kinésithérapeute et ostéopathe D.O., David Otu a fait partie du staff médical de clubs sportifs (RSD Jette et Royal Racing Club de Waterloo). Il accompagne les sportifs amateurs et confirmés à Ixelles et à Woluwe-Saint-Pierre.",
    ],
    motifsTitle: "Blessures et situations prises en charge",
    motifs: [
      "Claquage, élongation, déchirure musculaire",
      "Pubalgie, douleur des adducteurs",
      "Tendinites : épaule, genou, tendon d'Achille, épicondylite (tennis elbow)",
      "Entorse de la cheville ou du genou",
      "Épaule douloureuse du sportif",
      "Reprise du sport après blessure ou opération, prévention des blessures",
    ],
    approche: [
      "Le bilan analyse la blessure, mais aussi les gestes de votre sport, la charge d'entraînement et les facteurs de risque.",
      "La rééducation progresse vers des exercices de plus en plus spécifiques : renforcement, course, changements de direction, sauts, gestes techniques. L'objectif est un retour au sport progressif, en limitant le risque de rechute.",
    ],
    alerte: [
      "Douleur vive avec craquement ou impossibilité de continuer l'effort",
      "Gonflement important ou hématome étendu",
      "Choc à la tête pendant le sport",
    ],
    faq: [
      { q: "Quand reprendre le sport après une blessure ?", a: "Quand les tests de force, de mobilité et de contrôle du mouvement le permettent, pas seulement quand la douleur a disparu. La reprise est planifiée étape par étape." },
      { q: "Ostéopathie ou kiné pour une blessure sportive ?", a: "La kinésithérapie est centrale pour la rééducation ; l'ostéopathie peut compléter la prise en charge des tensions et douleurs associées. Les deux formations permettent de choisir ce qui convient le mieux." },
    ],
  },
];

export const soinBySlug = (slug: string) => soins.find((s) => s.slug === slug);
