"use client";
import { useEffect } from "react";

/**
 * Apparition douce au défilement : chaque élément marqué `data-reveal`
 * monte légèrement en fondu quand il arrive à l'écran.
 * Sans JavaScript (ou si l'animation est désactivée), tout reste simplement visible.
 */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => {
      // Ce qui est déjà à l'écran au chargement ne bouge pas.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      el.classList.add("reveal");
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return null;
}
