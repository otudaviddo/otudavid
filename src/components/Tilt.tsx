"use client";
import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Relief 3D : le bloc s'incline légèrement vers la souris, comme une carte
 * que l'on tient en main. Ses enfants marqués `tilt-pop` ou `tilt-back`
 * flottent devant ou derrière, ce qui donne de la profondeur.
 * Sur écran tactile, ou si les animations sont désactivées, rien ne bouge.
 */
export default function Tilt({ as, className = "", max = 7, children }: {
  as?: ElementType; className?: string; max?: number; children: ReactNode;
}) {
  const Tag: ElementType = as ?? "div";
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const move = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const b = el.getBoundingClientRect();
        const x = (e.clientX - b.left) / b.width - 0.5;   // -0,5 (gauche) à 0,5 (droite)
        const y = (e.clientY - b.top) / b.height - 0.5;   // -0,5 (haut) à 0,5 (bas)
        el.style.setProperty("--tilt-y", `${(x * 2 * max).toFixed(2)}deg`);
        el.style.setProperty("--tilt-x", `${(-y * 2 * max).toFixed(2)}deg`);
      });
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); };
  }, [max]);

  return <Tag ref={ref} className={`tilt ${className}`}>{children}</Tag>;
}
