"use client";
import { useEffect } from "react";

/** Apparition douce au défilement : titres de section et éléments marqués data-reveal.
 *  Rien n'est caché sans JavaScript, ni pour ceux qui ont demandé moins d'animations,
 *  ni pour ce qui est déjà visible à l'arrivée. Chaque élément n'apparaît qu'une fois. */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("rv-in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px" });
    const scan = () => {
      document.querySelectorAll<HTMLElement>("main section h2, main [data-reveal]").forEach((el) => {
        if (el.classList.contains("rv")) return;
        if (el.getBoundingClientRect().top < window.innerHeight) return; // déjà à l'écran
        el.classList.add("rv"); io.observe(el);
      });
    };
    scan();
    // Les avis affichés en plus arrivent après coup
    const mo = new MutationObserver(scan);
    mo.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);
  return null;
}
