"use client";
import { useEffect, useState } from "react";
import { disciplines } from "@/config/site";

/**
 * Bouton « Prendre rendez-vous » fixé en bas de l'écran, sur mobile uniquement.
 * Il apparaît une fois l'accueil dépassé, et ouvre le choix Ostéo / Kiné.
 */
export default function MobileBooking() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.8;
      // On le masque en arrivant au Contact, qui a déjà ses propres boutons.
      const contact = document.getElementById("contact");
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false;
      setShow(past && !atContact);
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
        className={`fixed inset-0 z-30 bg-night/60 transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      {/* Choix Ostéo / Kiné qui monte du bas */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Choisir le type de rendez-vous"
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-ivory/15 bg-night px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 transition-transform duration-500 ease-out ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.28em] text-steel">Prendre rendez-vous</p>
          <button type="button" onClick={() => setOpen(false)} className="-mr-2 p-2 text-xs uppercase tracking-[0.2em] text-ivory/70" tabIndex={open ? 0 : -1}>
            Fermer
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {[disciplines.osteo, disciplines.kine].map((d) => (
            <a
              key={d.slug}
              href={d.url}
              tabIndex={open ? 0 : -1}
              className="flex min-h-[64px] items-center justify-between border border-ivory/25 px-5 font-serif text-2xl tracking-[0.12em] text-ivory active:bg-ivory/5"
            >
              {d.upper}
              <span className="font-sans text-sm text-steel">→</span>
            </a>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-ivory/45">Réservation en ligne via Doctoranytime</p>
      </div>

      {/* Bouton fixe */}
      <div
        className={`fixed inset-x-0 bottom-0 z-20 border-t border-ivory/10 bg-night/95 px-5 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-500 ease-out ${show && !open ? "translate-y-0" : "translate-y-full"}`}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          tabIndex={show ? 0 : -1}
          className="flex min-h-[52px] w-full items-center justify-center gap-3 bg-ivory text-xs uppercase tracking-[0.25em] text-night"
        >
          Prendre rendez-vous <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
