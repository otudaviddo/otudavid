"use client";
import { useEffect, useState } from "react";
import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import { PhoneIcon } from "@/components/Icons";

/**
 * Bouton « Prendre rendez-vous » fixé en bas de l'écran, sur mobile uniquement.
 * Il apparaît une fois l'accueil dépassé, et ouvre le choix Ostéo / Kiné.
 */
export default function MobileBooking({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui;
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(false); // fond clair sous le bouton ?

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.8;
      // On le masque en arrivant au Contact, qui a déjà ses propres boutons.
      const contact = document.getElementById("contact");
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShow(past && !atContact);
      // Le bouton s'adapte à la section qui passe dessous (comme le verre d'Apple).
      const y = window.innerHeight - 60;
      const under = document.elementsFromPoint(window.innerWidth / 2, y).find((el) => el.closest("[data-tone]"));
      setOnLight(under?.closest("[data-tone]")?.getAttribute("data-tone") === "light");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      {/* Voile derrière le choix */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-30 bg-night/40 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Choix Ostéo / Kiné qui monte du bas, effet verre */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={t.mobile.dialog}
        className={`glass glass-strong fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 rounded-[28px] px-5 pb-5 pt-3 transition-all duration-500 ease-out ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[110%] opacity-0"}`}
      >
        <span aria-hidden className="mx-auto block h-1 w-10 rounded-full bg-ivory/30" />
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.28em] text-ivory/70">{t.book}</p>
          <button type="button" onClick={() => setOpen(false)} className="-mr-2 p-2 text-xs uppercase tracking-[0.2em] text-ivory/70" tabIndex={open ? 0 : -1}>
            {t.close}
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {[c.disciplines.osteo, c.disciplines.kine].map((d) => (
            <a
              key={d.slug}
              href={d.url}
              tabIndex={open ? 0 : -1}
              className="flex min-h-[64px] items-center justify-between rounded-2xl border border-ivory/15 bg-ivory/[0.06] px-5 font-serif text-2xl tracking-[0.12em] text-ivory transition-colors active:bg-ivory/15"
            >
              {d.upper}
              <span className="font-sans text-sm text-steel">→</span>
            </a>
          ))}
          <a
            href={site.phoneHref}
            tabIndex={open ? 0 : -1}
            className="flex min-h-[64px] items-center justify-between gap-3 rounded-2xl bg-steel px-5 text-night transition-colors active:bg-ivory"
          >
            <span className="text-sm font-semibold leading-tight">{t.urgent.sheet}</span>
            <span className="flex items-center gap-2 font-serif text-2xl"><PhoneIcon className="h-5 w-5" />{site.phone}</span>
          </a>
        </div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-ivory/65">{t.mobile.via}</p>
      </div>

      {/* Bouton flottant, effet verre, à hauteur du pouce */}
      <div
        className={`pointer-events-none fixed inset-x-0 bottom-[calc(env(safe-area-inset-bottom)+1.75rem)] z-20 flex justify-center gap-3 px-6 transition-all duration-500 ease-out ${show && !open ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"}`}
      >
        <a
          href={site.phoneHref}
          aria-label={t.callAria(site.phone)}
          tabIndex={show ? 0 : -1}
          className={`glass ${onLight ? "glass-on-light" : "glass-on-dark"} flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-ivory transition-[transform,background-color,border-color] duration-300 active:scale-[0.94] ${show && !open ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          tabIndex={show ? 0 : -1}
          className={`glass ${onLight ? "glass-on-light" : "glass-on-dark"} flex h-14 min-w-0 flex-1 max-w-[17rem] items-center justify-center gap-2 rounded-full text-[11px] uppercase tracking-[0.22em] text-ivory transition-[transform,background-color,border-color] duration-300 active:scale-[0.97] ${show && !open ? "pointer-events-auto" : "pointer-events-none"}`}
        >
          {t.book} <span aria-hidden className="text-steel">→</span>
        </button>
      </div>
    </div>
  );
}
