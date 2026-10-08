import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";

/* Mentions légales et confidentialité. Les numéros viennent de src/config/site.ts. */
export default function LegalPage({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const fr = lang === "fr";
  const h2 = "mt-14 font-serif text-3xl";
  const p = "mt-4 text-base leading-relaxed text-night/80";
  const a = "underline decoration-night/35 decoration-1 underline-offset-4 hover:text-steelDeep";
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24">
        <h1 className="rise font-serif text-[2.6rem] leading-[1.08] sm:text-6xl">
          {fr ? "Mentions légales et confidentialité" : "Legal notice and privacy"}
        </h1>
      </section>

      <section data-tone="light" className="w-full bg-white text-night">
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-4 md:px-10 md:pb-28">
          <div className="max-w-2xl">
            <h2 className={h2}>{fr ? "Qui édite ce site" : "Who publishes this site"}</h2>
            <p className={p}>
              David Otu, {fr ? "kinésithérapeute et ostéopathe D.O., indépendant." : "self-employed physiotherapist and osteopath D.O."}
            </p>
            <dl className="mt-6 grid gap-x-8 gap-y-3 text-base sm:grid-cols-[14rem_1fr]">
              <dt className="text-night/65">{fr ? "Numéro d'entreprise (BCE)" : "Company number (BCE/KBO)"}</dt>
              <dd>{site.legal.bce}</dd>
              <dt className="text-night/65">{fr ? "Numéro INAMI" : "INAMI number"}</dt>
              <dd>{site.legal.inami}</dd>
              <dt className="text-night/65">{fr ? "Téléphone" : "Phone"}</dt>
              <dd><a href={site.phoneHref} className={`inline-block py-1 ${a}`}>{site.phone}</a></dd>
              <dt className="text-night/65">E-mail</dt>
              <dd><a href={`mailto:${site.email}`} className={`inline-block py-1 ${a}`}>{site.email}</a></dd>
              <dt className="text-night/65">{fr ? "Lieux de consultation" : "Practices"}</dt>
              <dd>
                {c.addresses.map((ad) => (
                  <span key={ad.slug} className="block">{ad.street}, {ad.postalCode} {ad.city}</span>
                ))}
              </dd>
            </dl>

            <h2 className={h2}>{fr ? "Titres professionnels" : "Professional titles"}</h2>
            <p className={p}>
              {fr
                ? "Kinésithérapeute et ostéopathe D.O., diplômé de l'Université libre de Bruxelles (Belgique). Kinésithérapeute conventionné auprès de l'INAMI. "
                : "Physiotherapist and osteopath D.O., graduated from the Université libre de Bruxelles (Belgium). Physiotherapist contracted with INAMI, the Belgian health insurance institute. "}
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className={a}>{c.upobShort}</a>
              {fr ? ", l'Union professionnelle des ostéopathes de Belgique." : ", the Belgian professional union of osteopaths."}
            </p>

            <h2 className={h2}>{fr ? "Vos données" : "Your data"}</h2>
            <p className={p}>
              {fr
                ? "Ce site ne contient aucun formulaire et ne dépose lui-même aucun cookie. Il ne vous demande aucune donnée personnelle."
                : "This site has no forms and sets no cookies of its own. It does not ask you for any personal data."}
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-base leading-relaxed text-night/80">
              <li>
                {fr
                  ? "Rendez-vous : la réservation se fait sur Doctoranytime, un service distinct qui applique sa propre politique de confidentialité."
                  : "Appointments: booking takes place on Doctoranytime, a separate service with its own privacy policy."}
              </li>
              <li>
                {fr
                  ? "Carte : les pages des cabinets affichent une carte fournie par Google, qui peut déposer ses propres cookies sur ces pages."
                  : "Map: the practice pages show a map provided by Google, which may set its own cookies on those pages."}
              </li>
              <li>
                {fr
                  ? "Hébergement : comme tout hébergeur, Cloudflare traite des données techniques (adresse IP, type de navigateur) pour afficher et protéger les pages. La fréquentation peut être mesurée de façon anonyme, sans cookie."
                  : "Hosting: like any host, Cloudflare processes technical data (IP address, browser type) to deliver and protect the pages. Visits may be measured anonymously, without cookies."}
              </li>
              <li>
                {fr
                  ? "Si vous m'écrivez ou m'appelez, vos coordonnées servent uniquement à vous répondre."
                  : "If you write or call, your contact details are used only to reply to you."}
              </li>
            </ul>
            <p className={p}>
              {fr ? "Pour toute question sur vos données : " : "For any question about your data: "}
              <a href={`mailto:${site.email}`} className={a}>{site.email}</a>.{" "}
              {fr ? "Vous pouvez aussi vous adresser à l'" : "You can also contact the "}
              <a href="https://www.autoriteprotectiondonnees.be" target="_blank" rel="noopener noreferrer" className={a}>
                {fr ? "Autorité de protection des données" : "Belgian Data Protection Authority"}
              </a>.
            </p>

            <h2 className={h2}>{fr ? "Hébergement" : "Hosting"}</h2>
            <p className={p}>Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, {fr ? "États-Unis" : "USA"}.</p>

            <h2 className={h2}>{fr ? "Informations de santé" : "Health information"}</h2>
            <p className={p}>
              {fr
                ? "Les informations de ce site sont générales et ne remplacent pas une consultation. En cas d'urgence, appelez le 112."
                : "The information on this site is general and does not replace a consultation. In an emergency, call 112."}
            </p>

            <p className="mt-14">
              <a href={c.routes.home} className={`inline-block py-1 text-sm ${a}`}>{c.ui.cabinet.back}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
