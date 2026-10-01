/* « Mon approche » : inspirée des centres de rééducation de référence
   (comprendre la cause, soulager, renforcer, prévenir), sur fond blanc. */
const pillars = [
  { n: "01", t: "Comprendre", d: "Un bilan complet pour identifier la cause de la douleur, pas seulement l'endroit où elle se manifeste : mobilité, force, gestes du quotidien et du sport." },
  { n: "02", t: "Soulager", d: "Thérapie manuelle et techniques ostéopathiques pour diminuer la douleur et retrouver de la mobilité, dès les premières séances." },
  { n: "03", t: "Renforcer", d: "Une rééducation active, fonctionnelle et adaptée à votre sport : exercices ciblés et progressifs, dosés selon votre tolérance, avec des progrès mesurés." },
  { n: "04", t: "Prévenir", d: "Un retour à vos activités guidé étape par étape, validé par des tests simples, et un programme à poursuivre chez vous pour limiter les récidives." },
];

import { approachEn } from "@/content/en";
import type { Lang } from "@/i18n";

export default function Approach({ lang = "fr" }: { lang?: Lang }) {
  const en = lang === "en";
  const title = en ? approachEn.title : "Mon approche";
  const list = en ? approachEn.pillars : pillars;
  return (
    <section id="approche" data-tone="light" aria-labelledby="approche-title" className="w-full bg-white text-night">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[4fr_8fr] md:gap-20 md:px-10 md:py-32">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 id="approche-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
          <p className="mt-6 text-base leading-relaxed text-night/70">
            {en ? approachEn.intro : "Ostéopathie et kinésithérapie réunies dans une même logique : comprendre, soulager, puis rendre le corps plus résistant, fondée sur les données scientifiques les plus récentes."}
          </p>
        </div>
        <ol className="border-t border-night/15">
          {list.map((p) => (
            <li key={p.n} className="grid gap-3 border-b border-night/15 py-8 sm:grid-cols-[12rem_1fr] sm:gap-8 md:py-10">
              <h3 className="font-serif text-3xl leading-none">{p.t}</h3>
              <p className="text-base leading-relaxed text-night/75">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
