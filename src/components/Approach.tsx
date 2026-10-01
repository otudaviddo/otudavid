/* « Mon approche » : inspirée des centres de rééducation de référence
   (comprendre la cause, soulager, renforcer, prévenir), sur fond blanc. */
const pillars = [
  { n: "01", t: "Comprendre", d: "Un bilan complet pour identifier la cause de la douleur, pas seulement l'endroit où elle se manifeste : mobilité, force, gestes du quotidien et du sport." },
  { n: "02", t: "Soulager", d: "Thérapie manuelle et techniques ostéopathiques pour diminuer la douleur et retrouver de la mobilité, dès les premières séances." },
  { n: "03", t: "Renforcer", d: "Une rééducation active, fonctionnelle et adaptée à votre sport : exercices ciblés et progressifs, dosés selon votre tolérance, avec des progrès mesurés." },
  { n: "04", t: "Prévenir", d: "Un retour à vos activités guidé étape par étape, validé par des tests simples, et un programme à poursuivre chez vous pour limiter les récidives." },
];

export default function Approach({ title = "Mon approche" }: { title?: string }) {
  return (
    <section id="approche" data-tone="light" aria-labelledby="approche-title" className="w-full bg-white text-night">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <div data-reveal className="grid gap-6 md:grid-cols-[5fr_7fr] md:items-end">
          <h2 id="approche-title" className="font-serif text-3xl tracking-[0.2em] sm:text-4xl">{title.toUpperCase()}</h2>
          <p className="text-base leading-relaxed text-night/70">
            Ostéopathie et kinésithérapie réunies dans une même logique : comprendre, soulager, puis rendre le corps plus résistant,
            fondée sur les données scientifiques les plus récentes.
          </p>
        </div>
        <ol data-reveal className="mt-14 grid gap-px border border-night/10 bg-night/10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <li key={p.n} className="bg-white p-7">
              <p className="text-[11px] uppercase tracking-[0.25em] text-steelDeep">{p.n}</p>
              <h3 className="mt-4 font-serif text-2xl">{p.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-night/70">{p.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
