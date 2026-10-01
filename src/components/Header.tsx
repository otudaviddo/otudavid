"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { ui, routes, alternate, type Lang } from "@/i18n";
import { PhoneIcon, MailIcon, InstagramIcon } from "@/components/Icons";
import Logo from "@/components/Logo";

export default function Header({ lang = "fr" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const t = ui[lang];
  const r = routes[lang];
  const home = r.home === "/" ? "" : r.home;
  const links = [
    { href: r.osteo, label: t.nav.osteo },
    { href: r.kine, label: t.nav.kine },
    { href: `${home}/#parcours`, label: t.nav.parcours },
    { href: `${home}/#avis`, label: t.nav.avis },
    { href: `${home}/#contact`, label: t.nav.contact },
  ];
  const pathname = usePathname() || "/";
  const alt = alternate(pathname);
  const langLink = (cls: string) => (
    <a href={alt.href} hrefLang={alt.lang} lang={alt.lang} aria-label={t.lang.aria} className={cls}>
      <span className="text-ivory">{lang.toUpperCase()}</span><span className="mx-1.5 text-ivory/30">|</span><span>{t.lang.switch}</span>
    </a>
  );

  // Empêche la page de défiler derrière le menu mobile ouvert.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    // Barre flottante arrondie, en verre : le contenu de la page défile dessous.
    <header className="pointer-events-none sticky top-0 z-40 h-[72px] w-full px-3 pt-3 md:px-6">
      <div className="glass glass-strong pointer-events-auto relative z-10 mx-auto flex h-[60px] max-w-6xl items-center justify-between rounded-full pl-6 pr-5 md:pl-8 md:pr-8">
        <Link href={r.home} aria-label={lang === "fr" ? "otucare · David Otu, retour à l'accueil" : "otucare · David Otu, back to home"} className="text-ivory transition-opacity duration-300 hover:opacity-80" onClick={() => setOpen(false)}>
          <Logo className="h-7 w-auto md:h-8" />
        </Link>

        <nav aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"} className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[12px] uppercase tracking-[0.2em] text-ivory/80 transition-colors duration-300 hover:text-steel">
              {l.label}
            </Link>
          ))}
          {langLink("ml-2 border-l border-ivory/15 pl-6 text-[12px] tracking-[0.2em] text-ivory/65 transition-colors hover:text-steel")}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
        {langLink("p-2 text-[11px] tracking-[0.2em] text-ivory/65")}
        <button
          className="-mr-3 flex items-center gap-3 p-3 text-xs uppercase tracking-[0.25em]"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? t.close : t.menu}</span>
          <span aria-hidden className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-ivory transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-ivory transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <nav
        id="menu-mobile"
        aria-label={lang === "fr" ? "Menu mobile" : "Mobile menu"}
        className={`fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-night px-8 pt-[72px] transition-opacity duration-500 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="border-b border-ivory/10 py-5 font-serif text-4xl text-ivory transition-colors duration-300 hover:text-steel"
          >
            {l.label}
          </Link>
        ))}
        <div className="mt-10 flex gap-4">
          {[
            { href: site.phoneHref, label: t.callAria(site.phone), Icon: PhoneIcon },
            { href: `mailto:${site.email}`, label: t.mailAria(site.email), Icon: MailIcon },
            { href: site.instagram, label: `Instagram ${site.instagramHandle}`, Icon: InstagramIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              tabIndex={open ? 0 : -1}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/25 text-ivory/85 transition-colors hover:border-steel hover:text-steel"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
