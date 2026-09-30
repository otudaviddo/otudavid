import { site, disciplines } from "@/config/site";
import { PhoneIcon, MailIcon, InstagramIcon } from "@/components/Icons";

const label = "text-[11px] uppercase tracking-[0.28em] text-steelDeep";

export default function Contact() {
  return (
    <section id="contact" data-tone="light" aria-labelledby="contact-title" className="relative w-full overflow-hidden border-t border-night/10 bg-ivoryDeep text-night">
      {/* Gravure au bâton en filigrane (clin d'œil au verso de la carte de visite) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ecorche-baton.webp" alt="" aria-hidden width={862} height={1500} loading="lazy"
        className="pointer-events-none absolute -right-20 bottom-0 h-[92%] w-auto select-none opacity-[0.16] mix-blend-multiply md:-right-6"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-36 pt-24 md:px-10 md:py-32">
        <div className="text-center" data-reveal>
          <h2 id="contact-title" className="font-serif text-3xl tracking-[0.25em] sm:text-4xl">CONTACT</h2>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-night/60">{site.title}</p>
        </div>

        <div data-reveal className="mt-16 grid gap-14 text-center md:grid-cols-3 md:gap-10">
          <div>
            <p className={label}>Téléphone &amp; e-mail</p>
            <a href={site.phoneHref} className="mt-4 block font-serif text-3xl tracking-[0.08em] transition-colors duration-300 hover:text-steelDeep">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="mt-4 inline-block break-all border-b border-night/30 pb-0.5 text-[13px] tracking-[0.08em] text-night/80 transition-colors duration-300 hover:border-steelDeep hover:text-steelDeep">
              {site.email}
            </a>
            <div className="mt-6 flex justify-center gap-4">
              {[
                { href: site.phoneHref, label: `Appeler le ${site.phone}`, Icon: PhoneIcon },
                { href: `mailto:${site.email}`, label: `Écrire à ${site.email}`, Icon: MailIcon },
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

          {site.addresses.map((a) => (
            <address key={a.label} className="not-italic md:border-l md:border-night/10">
              <p className={label}>Cabinet</p>
              <p className="mt-4 font-serif text-3xl tracking-[0.08em]">{a.label}</p>
              <p className="mt-3 text-[12px] uppercase tracking-[0.2em] text-night/70">{a.street}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.2em] text-night/70">{a.postalCode} {a.city}</p>
              <a
                href={a.mapsUrl}
                className="mt-5 inline-block border-b border-night/25 pb-0.5 text-[11px] uppercase tracking-[0.25em] text-night/80 transition-colors duration-300 hover:border-steelDeep hover:text-steelDeep"
              >
                Itinéraire →
              </a>
            </address>
          ))}
        </div>

        <div data-reveal className="mx-auto mt-20 flex max-w-2xl flex-col gap-4 sm:flex-row">
          {[disciplines.osteo, disciplines.kine].map((d) => (
            <a
              key={d.slug}
              href={d.url}
              className="flex min-h-[56px] flex-1 items-center justify-center border border-night/35 px-6 text-xs uppercase tracking-[0.25em] transition-colors duration-500 hover:border-night hover:bg-night hover:text-ivory"
            >
              Rendez-vous · {d.slug === "osteo" ? "Ostéo" : "Kiné"}
            </a>
          ))}
        </div>

        <p className="mt-20 border-t border-night/10 pt-8 text-center text-[11px] uppercase tracking-[0.22em] text-night/45">
          © {new Date().getFullYear()} {site.name} · {site.title}
        </p>
      </div>
    </section>
  );
}
