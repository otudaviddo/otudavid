/* English version of the site content (mirrors the French files). */
import type { QA } from "@/content/faq";
import type { Soin } from "@/content/soins";
import type { Group } from "@/content/disciplines";
import { site } from "@/config/site";

export const siteEn = {
  title: "Physiotherapist · Osteopath D.O.",
  about:
    "Every treatment starts with a thorough assessment, to identify the factors contributing to your symptoms, not only where they show. Manual therapy, targeted exercise and practical advice, grounded in the latest scientific evidence.",
  reviewsLabel: "Verified reviews on Doctoranytime · original language",
  languages: "Consultations in French and English.",
  upobShort: "Member of osteopathie.be",
  upobLabel: "Member of osteopathie.be — Professional Union of Osteopaths of Belgium",
  reimbursement: {
    osteo: "A care certificate is provided after each session, for partial reimbursement by your health insurance fund (mutuelle).",
    kine: "Contracted physiotherapist (conventionné): sessions reimbursed by INAMI/RIZIV with a medical prescription.",
  },
  duration: { osteo: "45 minutes", kine: "30 minutes" },
  addresses: {
    "woluwe-saint-pierre": {
      days: "Tuesday · Thursday",
      daysSentence: "on Tuesdays and Thursdays",
      metaTitle: "Osteopath & physiotherapist in Woluwe-Saint-Pierre | David Otu",
      metaDescription:
        "David Otu, English-speaking contracted physiotherapist and osteopath D.O. in Woluwe-Saint-Pierre (Brussels), Rue de la Station 113. Tuesdays and Thursdays, 8:00 to 20:00. Book online, or call for an urgent appointment.",
    },
    ixelles: {
      days: "Monday · Wednesday · Friday",
      daysSentence: "on Mondays, Wednesdays and Fridays",
      metaTitle: "Osteopath & physiotherapist in Ixelles, Brussels | David Otu",
      metaDescription:
        "David Otu, English-speaking contracted physiotherapist and osteopath D.O. in Ixelles (Brussels), Rue de Hennin 99. Mon 7:45-13:00, Wed 8:00-19:00, Fri 13:00-19:00. Book online, or call for an urgent appointment.",
    },
  } as Record<string, { days: string; daysSentence: string; metaTitle: string; metaDescription: string }>,
  seo: {
    title: "English-speaking osteopath & physio in Brussels | David Otu",
    description:
      "Contracted physiotherapist and osteopath D.O. in Ixelles and Woluwe-Saint-Pierre (Brussels): back pain, neck pain, knee, sprains, rehabilitation and sports injuries. Book online, or call for an urgent appointment.",
  },
};

export const disciplinesEn = {
  osteo: {
    label: "Osteopathy",
    upper: "OSTEOPATHY",
    h1: "Osteopath D.O. in Ixelles & Woluwe-Saint-Pierre",
    metaTitle: "English-speaking osteopath in Brussels (Ixelles, Woluwe) | David Otu",
    metaDescription:
      "Osteopath D.O. in Ixelles and Woluwe-Saint-Pierre, Brussels: acute low back pain, stiff neck, sciatica, neck pain, tension. 45-minute sessions, certificate for your health insurance. Urgent appointments by phone.",
    intro:
      "Qualified osteopath D.O., in Ixelles and Woluwe-Saint-Pierre. Careful listening, precise assessment of your posture and movement, gentle and targeted manual techniques — for adults, children, athletes and seniors.",
  },
  kine: {
    label: "Physiotherapy",
    upper: "PHYSIOTHERAPY",
    h1: "Physiotherapist in Ixelles & Woluwe-Saint-Pierre",
    metaTitle: "Physiotherapist in Brussels (Ixelles, Woluwe) | David Otu",
    metaDescription:
      "Contracted physiotherapist in Ixelles and Woluwe-Saint-Pierre, Brussels: post-surgery rehabilitation, knee, ankle sprain, sports physio, back pain. Reimbursed with a prescription. Book online.",
    intro:
      "Physiotherapist in Ixelles and Woluwe-Saint-Pierre. Thorough assessment, manual therapy and targeted exercise — to get back to your daily life, return to sport or recover after surgery.",
  },
};

export const osteoContentEn = {
  lead: [
    "Osteopathy looks at how the whole body moves: pain in the back, neck or shoulder can be maintained by tension elsewhere. Each session aims to relieve pain, restore mobility and understand what keeps the problem going.",
    "David Otu is an osteopath D.O., graduated from ULB (Université libre de Bruxelles, specialised master's in osteopathy) and a member of osteopathie.be, the Professional Union of Osteopaths of Belgium. He practises in Ixelles and Woluwe-Saint-Pierre, for adults, athletes, seniors and children.",
  ],
  groups: [
    { title: "Acute pain", items: ["Acute low back pain, locked back", "Stiff neck (torticollis)", "Sciatica, femoral nerve pain", "Pain between the shoulder blades, rib pain"] },
    { title: "Back and spine", items: ["Back pain, low back pain", "Neck pain", "Mid-back pain", "Pelvic or tailbone pain"] },
    { title: "Head and jaw", items: ["Headaches of cervical origin", "Jaw tension (TMJ)"] },
    { title: "Joints", items: ["Shoulder pain", "Knee, hip or ankle pain"] },
    { title: "Tension and function", items: ["Stress- or posture-related tension", "Desk and screen-related pain", "Functional digestive complaints"] },
    { title: "Sport", items: ["Support for athletes", "Recovery and prevention"] },
  ] as Group[],
  deroule: [
    "Assessment: history, symptoms, examination of mobility and of the areas linked to your pain.",
    "Manual treatment: gentle, targeted techniques, always explained and adapted to your comfort.",
    "Advice: postures, movements and simple exercises to make the benefits last.",
  ],
};

export const kineContentEn = {
  lead: [
    "Physiotherapy supports your recovery after an injury, surgery or a painful period, with a clear goal: getting back your movement, your activities and your sport. It combines manual therapy with progressive exercise, adjusted session after session.",
    "David Otu is a contracted physiotherapist, graduated from ULB (master's in physiotherapy and rehabilitation). He has worked in the medical staff of sports clubs and trained in hospitals and in clinics specialised in rehabilitation and performance. He practises in Ixelles and Woluwe-Saint-Pierre.",
  ],
  groups: [
    { title: "Post-surgery rehabilitation", items: ["Knee or hip replacement", "ACL reconstruction, meniscus", "Shoulder surgery", "Fracture after immobilisation"] },
    { title: "Injuries", items: ["Ankle or knee sprain", "Tendinopathies: shoulder, knee, Achilles tendon", "Elbow tendinopathy (tennis elbow)", "Plantar fasciopathy"] },
    { title: "Sports physio", items: ["Muscle strain or tear", "Groin pain, adductors", "Return to sport after injury", "Injury prevention"] },
    { title: "Back and neck", items: ["Low back pain, disc herniation", "Neck pain", "Scoliosis, posture"] },
    { title: "Functional rehabilitation", items: ["Walking, balance, stairs", "Back to daily tasks and work"] },
  ] as Group[],
  deroule: [
    "Assessment: pain, mobility, strength, and your goals (daily life, work, sport).",
    "Rehabilitation: manual therapy and targeted exercise, with measured progression.",
    "Autonomy: an exercise programme to continue at home between sessions.",
  ],
};

export const approachEn = {
  title: "My approach",
  intro: "Osteopathy and physiotherapy combined in one logic: understand, relieve, then make the body more resilient — grounded in the latest scientific evidence.",
  pillars: [
    { n: "01", t: "Understand", d: "A thorough assessment to identify the factors contributing to your pain, not only where it hurts: mobility, strength, daily movements and sport." },
    { n: "02", t: "Relieve", d: "Manual therapy and osteopathic techniques to help reduce pain and restore mobility." },
    { n: "03", t: "Strengthen", d: "Active, functional rehabilitation adapted to your daily life, your physical activity and your goals: targeted, progressive exercise dosed to your tolerance, with measured progress." },
    { n: "04", t: "Prevent", d: "A step-by-step return to your activities, validated by simple tests, and a home programme to limit recurrences." },
  ],
};

const remboursementOsteo: QA = { q: "Is osteopathy reimbursed by health insurance?", a: `Partly, yes. ${siteEn.reimbursement.osteo} The amount and number of sessions covered depend on your insurance fund. David Otu is a member of osteopathie.be, the Professional Union of Osteopaths of Belgium.` };
const remboursementKine: QA = { q: "Is physiotherapy reimbursed?", a: "Yes. David Otu is a contracted (conventionné) physiotherapist: sessions are reimbursed by INAMI/RIZIV with a medical prescription, according to the official fee schedule and your insurance fund." };
const prescription: QA = { q: "Do I need a medical prescription?", a: "Not for osteopathy: you can book directly. For physiotherapy, a prescription from your doctor is required to be reimbursed by INAMI/RIZIV." };
const duree: QA = { q: "How long is a session?", a: `An osteopathy session lasts ${siteEn.duration.osteo}, a physiotherapy session ${siteEn.duration.kine}.` };
const premiere: QA = { q: "What happens during the first session?", a: "It starts with a thorough assessment: your history, your symptoms and an examination to identify the factors contributing to the pain, not only where it shows. Then comes treatment (manual therapy, targeted exercise) and practical advice for daily life." };
const choisir: QA = { q: "Osteopath or physiotherapist: which one should I see?", a: "The two approaches are complementary. Osteopathy focuses more on assessment and manual treatment. Physiotherapy works in particular on strength, mobility, function and a gradual return to your activities; it is reimbursed by INAMI with a prescription. Trained in both, David Otu will guide you to the approach best suited to your situation." };
const urgence: QA = { q: "How do I get an urgent appointment (acute back pain, stiff neck, locked back)?", a: `For an urgent appointment, call ${site.phone} directly: you will be offered the earliest possible slot, subject to availability, in Ixelles or Woluwe-Saint-Pierre. For a regular appointment, online booking remains available.` };
const ouQuand: QA = { q: "Where and when?", a: `In Ixelles (${site.addresses[1].street}) on Mondays from 7:45 to 13:00, Wednesdays from 8:00 to 19:00 and Fridays from 13:00 to 19:00. In Woluwe-Saint-Pierre (${site.addresses[0].street}) on Tuesdays and Thursdays from 8:00 to 20:00. Osteopathy and physiotherapy are offered at both practices, by appointment.` };
const apporter: QA = { q: "What should I bring?", a: "Your ID card, the medical prescription for physiotherapy, and any scans or reports you have (X-ray, MRI, surgical report). Wear comfortable clothing." };
const langue: QA = { q: "Are consultations in English?", a: "Yes. David Otu consults in English and in French, at both practices in Brussels." };

export const faqHomeEn: QA[] = [urgence, choisir, langue, remboursementKine, remboursementOsteo, prescription, duree, premiere, ouQuand, apporter];
export const faqOsteoEn: QA[] = [urgence, langue, remboursementOsteo, duree, premiere, prescription, choisir, ouQuand];
export const faqKineEn: QA[] = [langue, remboursementKine, prescription, duree, premiere, apporter, choisir, ouQuand];

type SoinEn = Pick<Soin, "card" | "cardText" | "intro" | "motifsTitle" | "motifs" | "approcheIntro" | "phases" | "alerte" | "faq">;

/** English texts for each condition, keyed by the French slug. */
export const soinsEn: Record<string, SoinEn & { anchor: string }> = {
  "mal-de-dos-lumbago": {
    anchor: "back-pain",
    card: "Back pain & acute low back pain",
    cardText: "Locked back, low back pain, disc herniation",
    intro: [
      "Back pain is one of the most common reasons to see an osteopath or a physiotherapist. It can start suddenly — acute low back pain, or a “locked back” — or build up gradually with posture, desk work, sport or stress.",
      "Osteopath D.O. and physiotherapist, David Otu treats low back and mid-back pain in Ixelles and Woluwe-Saint-Pierre with a simple goal: relieve the pain, understand where it comes from, and keep it from coming back.",
    ],
    motifsTitle: "Conditions treated",
    motifs: ["Acute low back pain, locked back", "Acute or chronic low back pain", "Mid-back pain, pain between the shoulder blades, rib pain", "Pain related to a disc herniation or bulge", "Pelvic, tailbone or sacroiliac pain", "Posture and desk-related pain, scoliosis (physiotherapy)"],
    approcheIntro: "Back pain is rarely “just” a vertebra problem: how you move, your daily load, sleep or stress often keep it going. The aim is to relieve first, then make your back able to handle the demands of your life again.",
    phases: [
      { title: "Understand", text: "Thorough assessment: how it started, what helps or aggravates it, mobility of the back, pelvis and hips, and screening for signs that need a medical opinion." },
      { title: "Relieve", text: "In the acute phase, gentle manual therapy and advice to keep moving without making things worse: complete rest often slows recovery." },
      { title: "Strengthen", text: "Progressive return to movement, then strengthening of the trunk and hips, dosed to how you feel that day, so your back regains capacity." },
      { title: "Prevent", text: "A simple home programme and practical guidance for desk work, sport and lifting, to limit recurrences." },
    ],
    alerte: ["Pain after a fall or significant impact", "Leg weakness, loss of sensation in the groin area or urinary problems", "Fever, unexplained weight loss, pain that never changes even at rest"],
    faq: [
      { q: "Should I wait for the pain to pass before booking?", a: "No. With acute low back pain, early care often helps you regain mobility faster. Call for a short-notice appointment depending on availability." },
      { q: "Can osteopathy help with a disc herniation?", a: "It can help with pain and mobility, alongside your medical follow-up. Bring your scans (MRI, X-ray): treatment is adapted to your situation." },
      { q: "How many sessions will I need?", a: "It depends on how long you have had the pain and its cause. Recent acute pain often needs few sessions; chronic low back pain requires a more structured follow-up, especially in physiotherapy." },
    ],
  },
  "torticolis-cervicalgie": {
    anchor: "neck-pain",
    card: "Stiff neck & neck pain",
    cardText: "Locked neck, neck pain, headaches, jaw",
    intro: [
      "Waking up with a locked neck, neck pain that builds up after hours at the screen, headaches starting from the neck: neck pain is common and often linked to posture, stress or an awkward movement.",
      "In Ixelles and Woluwe-Saint-Pierre, David Otu, osteopath D.O. and physiotherapist, treats stiff necks and neck pain to relieve the pain and restore a mobile neck.",
    ],
    motifsTitle: "Conditions treated",
    motifs: ["Stiff neck (torticollis) on waking", "Acute or chronic neck pain", "Pain between the shoulder blades, upper trapezius tension", "Headaches of cervical origin", "Jaw tension (temporomandibular joint, TMJ)", "Desk and screen-related pain"],
    approcheIntro: "The neck is rarely the only culprit: screen posture, mobility of the upper back and shoulders, the jaw or stress-related tension often play a role. The aim is fast relief, then working on what keeps the pain going.",
    phases: [
      { title: "Understand", text: "Assessment of neck, upper back, shoulder and jaw mobility, and of your habits (screen, sleep, sport)." },
      { title: "Relieve", text: "Gentle manual techniques suited to a sensitive area, with no forced manipulation, always explained and adjusted to your comfort." },
      { title: "Remobilise", text: "Mobility and control exercises for the neck and shoulders, to move freely and confidently again." },
      { title: "Prevent", text: "Practical ergonomic advice (screen, pillow, breaks) and a few short exercises to fit into your day." },
    ],
    alerte: ["Pain after an accident or a blow to the head", "Sudden, unusual headaches, fever with a stiff neck", "Severe dizziness, vision or speech problems, loss of strength in an arm"],
    faq: [
      { q: "Are neck manipulations mandatory?", a: "No. There are many gentle techniques without manipulation. Treatment is always explained and adapted to your comfort." },
      { q: "Can a stiff neck be seen quickly?", a: "Yes, it is a common reason for an urgent appointment. Call for a short-notice slot depending on availability." },
    ],
  },
  sciatique: {
    anchor: "sciatica",
    card: "Sciatica",
    cardText: "Pain from the buttock down the leg",
    intro: [
      "Sciatica is pain running from the lower back or buttock down the leg, sometimes to the foot, with tingling or electric sensations. It is often linked to irritation of the sciatic nerve, for example at a lumbar disc.",
      "David Otu, osteopath D.O. and physiotherapist, supports sciatic pain in Ixelles and Woluwe-Saint-Pierre, in coordination with your doctor when needed.",
    ],
    motifsTitle: "Common situations",
    motifs: ["Sciatica, pain in the buttock and back of the leg", "Femoral nerve pain (front of the thigh)", "Sciatica related to a disc herniation", "Piriformis or buttock pain", "Recurrent or chronic sciatica"],
    approcheIntro: "Sciatica reflects nerve irritation, usually from the lower back. Care aims to calm this irritation without immobilising you, then gradually restore tolerance in the back and leg — together with your doctor when necessary.",
    phases: [
      { title: "Understand", text: "Assessment to locate the likely source of pain, check leg strength and sensation, and spot warning signs." },
      { title: "Calm", text: "Relieving positions and movements, manual therapy and activity management to reduce nerve irritation." },
      { title: "Rehabilitate", text: "Progressive mobility, nerve mobilisation and trunk and hip strengthening exercises." },
      { title: "Prevent", text: "Guided return to activities and a maintenance programme to limit recurrences." },
    ],
    alerte: ["Loss of strength in the leg or foot", "Loss of sensation in the groin area, urinary or bowel problems", "Pain getting rapidly worse despite rest"],
    faq: [
      { q: "Do I need an MRI before my appointment?", a: "Not necessarily. The clinical assessment guides care; if you already have scans, bring them along." },
      { q: "Osteopathy or physiotherapy for sciatica?", a: "They complement each other: osteopathy to ease the painful phase, physiotherapy for rehabilitation and preventing recurrences." },
    ],
  },
  "douleur-genou": {
    anchor: "knee-pain",
    card: "Knee pain",
    cardText: "Meniscus, ACL, tendinopathy, sprain",
    intro: [
      "The knee is heavily loaded in daily life and in sport. A sprain, a meniscus or cruciate ligament injury, a tendinopathy or osteoarthritis can make walking, stairs or running painful.",
      "Physiotherapist and osteopath D.O., David Otu treats knee pain and knee rehabilitation in Ixelles and Woluwe-Saint-Pierre, with or without surgery.",
    ],
    motifsTitle: "Conditions treated",
    motifs: ["Knee sprain", "Meniscus injury (operated or not)", "Cruciate ligaments (ACL): rehabilitation before and after surgery", "Patellar tendinopathy (often called tendinitis), patellofemoral pain", "Iliotibial band syndrome (runner's knee)", "Knee osteoarthritis, rehabilitation after knee replacement"],
    approcheIntro: "A painful knee is rarely rehabilitated by looking at the knee alone: the hip, the ankle, how you walk, run or jump — and above all the load placed on the tissue — matter just as much. Rehabilitation progresses in stages, with objective criteria to move from one to the next.",
    phases: [
      { title: "Assess", text: "Assessment of knee, hip and ankle mobility, stability and strength, and analysis of the movements that trigger pain." },
      { title: "Calm & protect", text: "Managing pain and swelling, temporarily adapting load (without complete rest when it isn't needed)." },
      { title: "Strengthen", text: "Progressive strengthening of the quadriceps, hamstrings and hips, balance and knee-control work." },
      { title: "Return", text: "Back to running, jumping and changes of direction when simple strength and control tests allow it — not just when the pain is gone." },
    ],
    alerte: ["Knee swelling a lot after an injury", "Unable to bear weight, or the knee giving way", "Hot, red, painful knee with fever"],
    faq: [
      { q: "Is knee rehabilitation reimbursed?", a: "Yes, in physiotherapy with a medical prescription: David Otu is a contracted physiotherapist, sessions are reimbursed by INAMI/RIZIV according to the fee schedule." },
      { q: "Should I start physio before ACL surgery?", a: "Pre-operative preparation is often recommended by surgeons. Discuss it with your doctor and bring your prescription." },
    ],
  },
  "entorse-cheville": {
    anchor: "ankle-sprain",
    card: "Ankle sprain",
    cardText: "Sprain, instability, Achilles tendinopathy, plantar fasciopathy",
    intro: [
      "Ankle sprains are among the most common injuries, in sport and in daily life. Poorly rehabilitated, they can leave the ankle unstable and lead to repeated sprains.",
      "In Ixelles and Woluwe-Saint-Pierre, David Otu, physiotherapist and osteopath D.O., supports ankle rehabilitation and foot pain all the way back to your activities.",
    ],
    motifsTitle: "Conditions treated",
    motifs: ["Ankle sprain, recent or recurring", "Ankle instability", "Achilles tendinopathy (often called tendinitis)", "Plantar fasciopathy (fasciitis), heel pain", "Rehabilitation after ankle fracture or surgery"],
    approcheIntro: "A “simple” sprain that is poorly rehabilitated is the leading cause of re-injury. Rehabilitation therefore doesn't stop when the pain fades: it aims to restore the ankle's stability, strength and reflexes before you return to your activities.",
    phases: [
      { title: "Assess", text: "Assessment of stability, mobility and strength, and checking the signs that should rule out a fracture." },
      { title: "Protect & mobilise", text: "Managing swelling, early and dosed return to walking and mobility." },
      { title: "Strengthen", text: "Ankle and calf strengthening, increasingly demanding balance and proprioception work." },
      { title: "Return", text: "Progressive hops, landings and changes of direction, then return to sport once stability and strength tests are satisfactory." },
    ],
    alerte: ["Unable to take a few steps after the sprain", "Sharp pain when pressing on the ankle or foot bones", "Visible deformity"],
    faq: [
      { q: "When should rehabilitation start after a sprain?", a: "Usually quite early, once a fracture has been ruled out if needed. Early, progressive rehabilitation reduces the risk of recurrence." },
      { q: "Is sprain rehabilitation reimbursed?", a: "Yes, with a medical prescription: physiotherapy sessions are reimbursed by INAMI/RIZIV." },
    ],
  },
  "reeducation-post-operatoire": {
    anchor: "post-surgery-rehab",
    card: "Post-surgery rehabilitation",
    cardText: "Hip or knee replacement, ligaments, shoulder, fracture",
    intro: [
      "After surgery, rehabilitation is a decisive step to regain mobility, strength and independence. It follows the surgeon's instructions and progresses at the pace of healing.",
      "As a contracted physiotherapist, David Otu provides post-operative rehabilitation in Ixelles and Woluwe-Saint-Pierre, with a medical prescription and INAMI/RIZIV reimbursement.",
    ],
    motifsTitle: "Rehabilitation offered",
    motifs: ["Total knee or hip replacement", "ACL reconstruction, meniscus", "Shoulder surgery (rotator cuff, instability)", "Fracture (wrist, ankle, shoulder…) after immobilisation", "Spine surgery, following the surgeon's advice"],
    approcheIntro: "After surgery, rehabilitation follows the surgeon's protocol and the pace of healing. Each stage has a clear, measurable goal, so you progress neither too fast nor too slowly, until you are back to independence, work or sport.",
    phases: [
      { title: "Initial assessment", text: "Review of the surgical report and the surgeon's protocol, assessment of pain, range of motion and strength." },
      { title: "Recover", text: "Managing pain and swelling, gradually recovering range of motion and walking." },
      { title: "Strengthen", text: "Progressive strengthening and functional work: stairs, daily tasks, weight-bearing, balance." },
      { title: "Return to activity", text: "Back to work or sport according to criteria agreed with you and with the surgeon." },
    ],
    alerte: ["Fever, red, hot or leaking scar", "Painful, swollen calf", "Pain increasing sharply from one day to the next"],
    faq: [
      { q: "What should I bring to the first session?", a: "The medical prescription, your ID card, the surgical report and, if you have it, the surgeon's rehabilitation protocol." },
      { q: "Is post-surgery rehabilitation reimbursed?", a: "Yes. David Otu is a contracted physiotherapist: sessions are reimbursed by INAMI/RIZIV with a medical prescription." },
    ],
  },
  "kine-du-sport": {
    anchor: "sports-physio",
    card: "Sports physiotherapy",
    cardText: "Injury, strain, groin pain, tendinopathy, return to sport",
    intro: [
      "A sports injury needs precise care: relieve, rehabilitate, then prepare a return to sport without re-injury. Football, running, racket sports, the gym — every discipline has its own demands.",
      "Physiotherapist and osteopath D.O., David Otu has worked in the medical staff of sports clubs (RSD Jette and Royal Racing Club de Waterloo). He supports recreational and competitive athletes in Ixelles and Woluwe-Saint-Pierre.",
    ],
    motifsTitle: "Injuries and situations treated",
    motifs: ["Muscle strain, pull or tear", "Groin pain, adductor pain", "Tendinopathies (often called tendinitis): shoulder, knee, Achilles tendon, elbow (tennis elbow)", "Ankle or knee sprain", "Painful shoulder in athletes", "Return to sport after injury or surgery, injury prevention"],
    approcheIntro: "In sports rehabilitation, being pain-free does not mean being recovered. The approach draws on modern sports rehab: understand the injury and its causes, manage load, strengthen progressively and clear the return to play with tests, not with the calendar.",
    phases: [
      { title: "Test", text: "Assessment of the injury, mobility, strength and the movements of your sport, and of what may have contributed to the injury (training load, recovery)." },
      { title: "Treat", text: "Manual therapy and load management to settle the area without losing fitness." },
      { title: "Train", text: "Progressive strengthening, then increasingly specific work: running, accelerations, changes of direction, jumps, technical skills." },
      { title: "Return & prevent", text: "Step-by-step return to sport, cleared by strength and control tests, and a prevention programme to limit the risk of re-injury." },
    ],
    alerte: ["Sharp pain with a snap, or unable to continue", "Major swelling or extensive bruising", "Blow to the head during sport"],
    faq: [
      { q: "When can I return to sport after an injury?", a: "When strength, mobility and movement-control tests allow it, not just when the pain is gone. The return is planned step by step." },
      { q: "Osteopathy or physiotherapy for a sports injury?", a: "Physiotherapy is central to rehabilitation; osteopathy can complement it for associated tension and pain. Training in both makes it possible to choose what suits you best." },
    ],
  },
};

/** Parcours (CV) in English, same structure as the French version. */
export const parcoursEn = {
  intro: "Trained at ULB in osteopathy, then in physiotherapy.",
  highlights: [
    { value: "Comprehensive approach", label: "Osteopathy & physiotherapy", detail: "Two complete degrees combined in one course of care" },
    { value: "8 years", label: "Of university training", detail: "Université libre de Bruxelles" },
    { value: "Hospital & sport", label: "Hands-on experience", detail: "Hospital placements and sports team medical staff" },
  ],
  formation: [
    { group: "Physiotherapy", summary: "Bridging bachelor's and master's · ULB", items: [
      { years: "2025 – 2026", title: "Master's in physiotherapy and rehabilitation", detail: "ULB" },
      { years: "2024 – 2025", title: "Bachelor's in motor sciences, physiotherapy", detail: "ULB · bridging programme" },
    ] },
    { group: "Osteopathy", summary: "Bachelor's, master's and specialised master's · ULB", items: [
      { years: "2022 – 2023", title: "Specialised master's in osteopathy", detail: "ULB" },
      { years: "2020 – 2022", title: "Master's in motor sciences", detail: "ULB · osteopathy track" },
      { years: "2017 – 2020", title: "Bachelor's in motor sciences", detail: "ULB · general track" },
    ] },
  ],
  experience: [
    { group: "Practice", summary: "Osteopath · Station Woluwe, since 2023", items: [
      { years: "2023 – present", title: "Osteopath", detail: "Centre Médical & Dentaire Station Woluwe" },
    ] },
    { group: "Sport", summary: "Medical staff · RRC Waterloo and RSD Jette", items: [
      { years: "2023 – 2024", title: "Medical staff", detail: "Royal Racing Club de Waterloo" },
      { years: "2023 – 2024", title: "Medical staff", detail: "RSD Jette" },
    ] },
    { group: "Clinical placements · physiotherapy", summary: "5 placements: hospital, rehabilitation and performance", items: [
      { years: "2026", title: "Pulmonology — respiratory care and rehabilitation", detail: "Hôpital Iris Sud" },
      { years: "2025", title: "Neuro-orthopaedic rehabilitation", detail: "Hôpital Saint-Jean, Méridien site" },
      { years: "2025", title: "Cardio-respiratory rehabilitation", detail: "Clinique Sainte-Elisabeth" },
      { years: "2025", title: "Orthopaedic functional rehabilitation", detail: "Point of Motion, private practice" },
      { years: "2025", title: "Performance and functional rehabilitation", detail: "LAB Physio × Animo Studio Cinquantenaire, private practice" },
    ] },
    { group: "Observation placements · osteopathy", summary: "3 placements: orthopaedic surgery and private practices", items: [
      { years: "2022 – 2023", title: "Private practice", detail: "Cassiel Van Slijpe" },
      { years: "2022 – 2023", title: "Private practice", detail: "Sergio Giunta" },
      { years: "2021 – 2022", title: "Orthopaedic surgery", detail: "Hôpital Iris Sud" },
    ] },
  ],
  languages: ["French", "English"],
};
