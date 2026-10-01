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
  approcheIntro: string;
  phases: { title: string; text: string }[];
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
    approcheIntro:
      `Une douleur de dos n'est presque jamais « juste » un problème de vertèbre : la façon de bouger, la charge du quotidien, le sommeil ou le stress l'entretiennent souvent. La prise en charge vise donc à soulager, puis à rendre le dos à nouveau capable d'encaisser les contraintes de votre vie.`,
    phases: [
      { title: `Comprendre`, text: `Bilan complet : circonstances d'apparition, gestes qui soulagent ou aggravent, mobilité du dos, du bassin et des hanches, et recherche des signes qui nécessitent un avis médical.` },
      { title: `Soulager`, text: `En phase aiguë (lumbago, dos bloqué), thérapie manuelle douce et conseils pour rester en mouvement sans aggraver : le repos complet ralentit souvent la récupération.` },
      { title: `Renforcer`, text: `Reprise progressive du mouvement puis exercices de renforcement du tronc et des hanches, dosés selon la tolérance du jour, pour que le dos retrouve de la capacité.` },
      { title: `Prévenir`, text: `Un programme simple à poursuivre chez vous, des repères pour le travail de bureau, le sport et le port de charges, afin de limiter les récidives.` },
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
    approcheIntro:
      `La nuque est rarement seule en cause : la posture devant l'écran, la mobilité du haut du dos et des épaules, la mâchoire ou les tensions liées au stress jouent souvent un rôle. L'objectif est de soulager rapidement, puis d'agir sur ce qui entretient la douleur.`,
    phases: [
      { title: `Comprendre`, text: `Bilan de la mobilité cervicale, du haut du dos, des épaules et de la mâchoire, et de vos habitudes (écran, sommeil, sport).` },
      { title: `Soulager`, text: `Techniques manuelles douces adaptées à une zone sensible, sans manipulation forcée, toujours expliquées et ajustées à votre confort.` },
      { title: `Remobiliser`, text: `Exercices de mobilité et de contrôle de la nuque et des épaules, pour retrouver un mouvement libre et sans appréhension.` },
      { title: `Prévenir`, text: `Conseils d'ergonomie concrets (écran, oreiller, pauses) et quelques exercices courts à intégrer dans la journée.` },
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
    approcheIntro:
      `Une sciatique traduit une irritation du nerf, le plus souvent au niveau du bas du dos. La prise en charge cherche à calmer cette irritation sans immobiliser, puis à redonner progressivement de la tolérance au dos et à la jambe — en lien avec votre médecin quand c'est nécessaire.`,
    phases: [
      { title: `Comprendre`, text: `Bilan pour situer l'origine probable de la douleur, évaluer la force et la sensibilité de la jambe, et repérer les signes d'alerte.` },
      { title: `Calmer`, text: `Positions et mouvements qui soulagent, thérapie manuelle et gestion de l'activité pour faire diminuer l'irritation du nerf.` },
      { title: `Rééduquer`, text: `Exercices progressifs de mobilité, de mobilisation du nerf et de renforcement du tronc et des hanches.` },
      { title: `Prévenir`, text: `Reprise encadrée des activités et programme d'entretien pour limiter les récidives.` },
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
    cardText: "Ménisque, ligaments croisés, tendinopathie, entorse",
    discipline: "kine",
    metaTitle: "Douleur au genou, ménisque, croisés | Kiné Ixelles & Woluwe",
    metaDescription:
      "Douleur au genou, entorse, ménisque, ligaments croisés, tendinopathie rotulienne, prothèse : kinésithérapeute et ostéopathe à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Douleur au genou : kinésithérapie et ostéopathie à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Le genou est très sollicité au quotidien comme au sport. Une entorse, une lésion du ménisque ou des ligaments croisés, une tendinopathie ou de l'arthrose peuvent rendre la marche, les escaliers ou la course douloureux.",
      "Kinésithérapeute et ostéopathe D.O., David Otu prend en charge les douleurs de genou et leur rééducation à Ixelles et à Woluwe-Saint-Pierre, avec ou sans opération.",
    ],
    motifsTitle: "Douleurs et situations prises en charge",
    motifs: [
      "Entorse du genou",
      "Lésion du ménisque (opérée ou non)",
      "Ligaments croisés : rééducation avant et après opération",
      "Tendinopathie rotulienne (souvent appelée tendinite), syndrome fémoro-patellaire, douleur à l'avant du genou",
      "Syndrome de la bandelette ilio-tibiale (genou du coureur)",
      "Arthrose du genou, rééducation après prothèse de genou",
    ],
    approcheIntro:
      `Un genou douloureux se rééduque rarement en ne regardant que le genou : la hanche, la cheville, la façon de marcher, de courir ou de sauter, et surtout la charge imposée au tissu comptent autant. La rééducation progresse par étapes, avec des critères objectifs pour passer de l'une à l'autre.`,
    phases: [
      { title: `Évaluer`, text: `Bilan de la mobilité, de la stabilité et de la force du genou, de la hanche et de la cheville, et analyse des gestes qui déclenchent la douleur.` },
      { title: `Calmer & protéger`, text: `Gestion de la douleur et du gonflement, adaptation temporaire de la charge (sans arrêt complet quand ce n'est pas nécessaire).` },
      { title: `Renforcer`, text: `Renforcement progressif des quadriceps, des ischio-jambiers et des hanches, travail d'équilibre et de contrôle du genou.` },
      { title: `Reprendre`, text: `Retour à la course, aux sauts et aux changements de direction lorsque des tests simples de force et de contrôle le permettent — pas seulement quand la douleur a disparu.` },
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
    cardText: "Entorse, instabilité, tendinopathie d'Achille, fasciopathie plantaire",
    discipline: "kine",
    metaTitle: "Entorse de la cheville, tendinopathie d'Achille | Kiné Ixelles",
    metaDescription:
      "Entorse de la cheville, instabilité, tendinopathie d'Achille, fasciopathie plantaire : rééducation en kinésithérapie à Ixelles et Woluwe-Saint-Pierre.",
    h1: "Entorse de la cheville et douleurs du pied à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "L'entorse de la cheville est l'une des blessures les plus fréquentes, au sport comme dans la vie de tous les jours. Mal rééduquée, elle peut laisser une cheville instable et favoriser les récidives.",
      "À Ixelles et à Woluwe-Saint-Pierre, David Otu, kinésithérapeute et ostéopathe D.O., accompagne la rééducation de la cheville et les douleurs du pied jusqu'au retour à vos activités.",
    ],
    motifsTitle: "Situations prises en charge",
    motifs: [
      "Entorse de la cheville, récente ou à répétition",
      "Instabilité de la cheville",
      "Tendinopathie d'Achille (souvent appelée tendinite)",
      "Fasciopathie plantaire (fasciite), douleur sous le talon",
      "Rééducation après fracture ou opération de la cheville",
    ],
    approcheIntro:
      `Une entorse « banale » mal rééduquée est la première cause de récidive. La rééducation ne s'arrête donc pas quand la douleur disparaît : elle vise à rendre à la cheville sa stabilité, sa force et ses réflexes avant le retour à vos activités.`,
    phases: [
      { title: `Évaluer`, text: `Bilan de la stabilité, de la mobilité et de la force, et vérification des signes qui doivent faire écarter une fracture.` },
      { title: `Protéger & mobiliser`, text: `Gestion du gonflement, reprise précoce et dosée de la marche et de la mobilité.` },
      { title: `Renforcer`, text: `Renforcement de la cheville et du mollet, travail d'équilibre et de proprioception de plus en plus exigeant.` },
      { title: `Reprendre`, text: `Sauts, appuis et changements de direction progressifs, puis retour au sport lorsque les tests de stabilité et de force sont satisfaisants.` },
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
    approcheIntro:
      `Après une opération, la rééducation suit le protocole du chirurgien et le rythme de la cicatrisation. Chaque étape a un objectif clair et mesurable, pour avancer ni trop vite ni trop lentement, jusqu'au retour à l'autonomie, au travail ou au sport.`,
    phases: [
      { title: `Bilan initial`, text: `Prise en compte du compte rendu opératoire et du protocole du chirurgien, évaluation de la douleur, de l'amplitude et de la force.` },
      { title: `Récupérer`, text: `Gestion de la douleur et du gonflement, récupération progressive de l'amplitude articulaire et de la marche.` },
      { title: `Renforcer`, text: `Renforcement progressif et travail fonctionnel : escaliers, gestes du quotidien, appuis, équilibre.` },
      { title: `Retourner à l'activité`, text: `Reprise du travail ou du sport selon des critères définis avec vous et en accord avec le chirurgien.` },
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
    cardText: "Blessure, claquage, pubalgie, tendinopathie, reprise du sport",
    discipline: "both",
    metaTitle: "Kiné du sport, blessure, reprise | Ixelles & Woluwe",
    metaDescription:
      "Kinésithérapeute du sport et ostéopathe à Ixelles et Woluwe-Saint-Pierre : claquage, pubalgie, adducteurs, tendinopathies, entorse, reprise du sport après blessure.",
    h1: "Kiné du sport à Ixelles et Woluwe-Saint-Pierre",
    intro: [
      "Une blessure sportive demande une prise en charge précise : soulager, rééduquer, puis préparer un retour au sport sans récidive. Football, course à pied, sports de raquette, salle de sport — chaque discipline a ses contraintes.",
      "Kinésithérapeute et ostéopathe D.O., David Otu a fait partie du staff médical de clubs sportifs (RSD Jette et Royal Racing Club de Waterloo). Il accompagne les sportifs amateurs et confirmés à Ixelles et à Woluwe-Saint-Pierre.",
    ],
    motifsTitle: "Blessures et situations prises en charge",
    motifs: [
      "Claquage, élongation, déchirure musculaire",
      "Pubalgie, douleur des adducteurs",
      "Tendinopathies (souvent appelées tendinites) : épaule, genou, tendon d'Achille, coude (tennis elbow)",
      "Entorse de la cheville ou du genou",
      "Épaule douloureuse du sportif",
      "Reprise du sport après blessure ou opération, prévention des blessures",
    ],
    approcheIntro:
      `En rééducation sportive, disparition de la douleur ne veut pas dire guérison. L'approche s'inspire des méthodes de la rééducation du sport : comprendre la blessure et ses causes, gérer la charge, renforcer de façon progressive et valider le retour au terrain par des tests, pas au calendrier.`,
    phases: [
      { title: `Tester`, text: `Bilan de la blessure, de la mobilité, de la force et des gestes de votre sport, et des facteurs qui ont pu favoriser la blessure (charge d'entraînement, récupération).` },
      { title: `Traiter`, text: `Thérapie manuelle et gestion de la charge pour calmer la zone sans perdre la condition physique.` },
      { title: `Entraîner`, text: `Renforcement progressif puis exercices de plus en plus spécifiques : course, accélérations, changements de direction, sauts, gestes techniques.` },
      { title: `Reprendre & prévenir`, text: `Retour au sport par étapes, validé par des tests de force et de contrôle, et programme de prévention pour limiter le risque de rechute.` },
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
