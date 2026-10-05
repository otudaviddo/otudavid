import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import { PhoneIcon, MailIcon, InstagramIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import Hours from "@/components/Hours";

const label = "text-sm font-semibold text-night";
const link = "text-sm text-night underline decoration-1 underline-offset-4 decoration-night/35 transition-colors duration-300 hover:text-steelDeep hover:decoration-steelDeep";

export default function Contact({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.contact;
  return (
    <section id="contact" data-tone="light" aria-labelledby="contact-title" className="relative w-full overflow-hidden border-t border-night/10 bg-ivoryDeep text-night">
      {/* Gravure au bâton en filigrane (clin d'œil au verso de la carte de visite) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ecorche-baton.webp" alt="" aria-hidden width={546} height={950} loading="lazy"
        className="pointer-events-none absolute -right-40 -top-[14%] h-[150%] w-auto max-w-none select-none opacity-[0.09] mix-blend-multiply md:-right-24"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-36 pt-24 md:px-10 md:py-32">
        <div>
          <h2 id="contact-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{t.title}</h2>
          <p className="mt-4 text-base text-night/65">David Otu, {c.title}</p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          <div>
            <a href={site.phoneHref} className="block font-serif text-4xl transition-colors duration-300 hover:text-steelDeep">
              {site.phone}
            </a>
            <p className="mt-2 text-sm font-semibold text-night">{c.ui.urgent.contact}</p>
            <a href={`mailto:${site.email}`} className={`mt-3 inline-block break-all ${link}`}>
              {site.email}
            </a>
            <div className="mt-6 flex gap-4">
              {[
                { href: site.phoneHref, label: c.ui.callAria(site.phone), Icon: PhoneIcon },
                { href: `mailto:${site.email}`, label: c.ui.mailAria(site.email), Icon: MailIcon },
                { href: site.instagram, label: `Instagram ${site.instagramHandle}`, Icon: InstagramIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-night/25 text-night/80 transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {c.addresses.map((a) => (
            <address key={a.label} className="not-italic md:border-l md:border-night/15 md:pl-10">
              <p className="font-serif text-3xl leading-tight">{a.label}</p>
              <p className="mt-3 text-base text-night/75">{a.street}</p>
              <p className="text-base text-night/75">{a.postalCode} {a.city}</p>
              <Hours hours={a.hours} lang={lang} className="mt-4 max-w-[15rem] space-y-0.5 font-serif text-lg text-night/85" dayClass="italic" />
              <div className="mt-4 flex gap-6">
                <a
                  href={a.path}
                  className={link}
                >
                  {t.cabinetLink}
                </a>
                <a
                  href={a.mapsUrl}
                  className={link}
                >
                  {t.route}
                </a>
              </div>
            </address>
          ))}
        </div>

        <div className="mt-16 flex max-w-2xl flex-col gap-4 sm:flex-row">
          {[c.disciplines.osteo, c.disciplines.kine].map((d) => (
            <a
              key={d.slug}
              href={d.url}
              className="flex min-h-[56px] flex-1 items-center justify-center rounded-full bg-steel px-6 text-xs font-medium uppercase tracking-[0.25em] text-night transition-colors duration-300 hover:bg-steelDeep"
            >
              {c.ui.bookShort} · {d.label}
            </a>
          ))}
        </div>

        {/* Pied de page : liens utiles (aussi pour le référencement) */}
        <nav aria-label={t.navAria} className="mt-20 grid gap-10 border-t border-night/10 pt-10 text-sm sm:grid-cols-2">
          <div>
            <p className={label}>{t.footSoins}</p>
            <ul className="mt-3 space-y-1.5 text-night/70">
              <li><a href={c.routes.osteo} className="hover:text-steelDeep">{c.disciplines.osteo.label}</a></li>
              <li><a href={c.routes.kine} className="hover:text-steelDeep">{c.disciplines.kine.label}</a></li>
            </ul>
          </div>
          <div>
            <p className={label}>{t.footCabinets}</p>
            <ul className="mt-3 space-y-1.5 text-night/70">
              <li><a href={c.routes.ixelles} className="hover:text-steelDeep">{t.cabIx}</a></li>
              <li><a href={c.routes["woluwe-saint-pierre"]} className="hover:text-steelDeep">{t.cabWs}</a></li>
            </ul>
            <p className="mt-6 text-night/70">
              <a href={site.upob.url} target="_blank" rel="noopener noreferrer" className="hover:text-steelDeep">{c.upobShort}</a>
              <br />{t.conventionne}
            </p>
          </div>
        </nav>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-night/10 pt-10 text-night">
          <Logo className="h-9 w-auto" accent="fill-steelDeep" />
          <p className="text-xs leading-relaxed text-night/70 sm:text-right">
            © {new Date().getFullYear()} David Otu, {c.title}
            <br />{t.inami} {site.legal.inami} · {t.bce} {site.legal.bce}
            <br /><a href={c.routes.legal} className="underline decoration-night/35 decoration-1 underline-offset-4 hover:text-steelDeep">{t.legal}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
