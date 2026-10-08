/* « Mon approche » : inspirée des centres de rééducation de référence
   (comprendre, soulager, renforcer, prévenir), sur fond blanc. */
const pillars = [
  { n: "01", t: "Comprendre", d: "Un bilan complet pour identifier les facteurs qui contribuent à votre douleur, pas seulement l'endroit où elle se manifeste : mobilité, force, gestes du quotidien et du sport." },
  { n: "02", t: "Soulager", d: "Thérapie manuelle et techniques ostéopathiques, complétées si besoin par le cupping (ventouses) ou le dry needling, pour aider à diminuer la douleur et à retrouver de la mobilité." },
  { n: "03", t: "Renforcer", d: "Une rééducation active, fonctionnelle et adaptée à votre quotidien, à votre activité physique et à vos objectifs : exercices ciblés et progressifs, dosés selon votre tolérance, avec des progrès mesurés." },
  { n: "04", t: "Prévenir", d: "Un retour à vos activités guidé étape par étape, validé par des tests simples, et un programme à poursuivre chez vous pour limiter les récidives." },
];

import { approachEn } from "@/content/en";
import DrawOnView from "@/components/DrawOnView";
import { approachDrawings } from "@/components/ApproachDrawings";
import type { Lang } from "@/i18n";

export default function Approach({ lang = "fr" }: { lang?: Lang }) {
  const en = lang === "en";
  const title = en ? approachEn.title : "Mon approche";
  const list = en ? approachEn.pillars : pillars;
  return (
    <section id="approche" data-tone="navy" aria-labelledby="approche-title" className="bg-grid w-full bg-ivory text-night">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[4fr_8fr] md:gap-20 md:px-10 md:py-32">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 id="approche-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
          <p className="mt-6 text-base leading-relaxed text-night/80">
            {en ? approachEn.intro : "Ostéopathie et kinésithérapie réunies dans une même logique : comprendre, soulager, puis rendre le corps plus résistant, fondée sur les données scientifiques les plus récentes."}
          </p>
        </div>
        <ol className="border-t border-night/15">
          {list.map((p, i) => {
            const Drawing = approachDrawings[i];
            return (
              <li key={p.n} className="grid grid-cols-[4.5rem_1fr] gap-x-5 gap-y-3 border-b border-night/15 py-8 sm:grid-cols-[5.5rem_10rem_1fr] sm:gap-x-8 md:py-10">
                <DrawOnView className="row-span-2 h-[4.5rem] w-[4.5rem] text-steel sm:row-span-1 sm:h-[5.5rem] sm:w-[5.5rem]">
                  <Drawing />
                </DrawOnView>
                <h3 className="self-center font-serif text-3xl leading-none">{p.t}</h3>
                <p className="col-start-2 text-base leading-relaxed text-night/80 sm:col-start-3">{p.d}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
