"use client";
import { useEffect, useRef } from "react";
import { site, OSTEO_DOCTORANYTIME_URL } from "@/config/site";
import { testimonials } from "@/config/testimonials";

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex w-[280px] shrink-0 flex-col justify-between border border-night/15 bg-ivory px-6 py-7 sm:w-[360px] sm:px-7 sm:py-8">
      <blockquote className="font-serif text-base italic leading-relaxed text-night/85 sm:text-lg">
        &laquo;&nbsp;{t.quote}&nbsp;&raquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-[0.22em] text-night/50">
        <span>{t.author}</span>
        <span>{t.date}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const box = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  // Défilement automatique lent, en boucle. Il s'arrête dès que le visiteur
  // survole, touche ou fait défiler lui-même, et reprend quelques secondes après.
  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, last = performance.now(), pos = el.scrollLeft, resume: ReturnType<typeof setTimeout> | undefined;
    const tick = (now: number) => {
      const dt = Math.min(now - last, 50); last = now;
      if (paused.current) {
        pos = el.scrollLeft; // on repart de là où le visiteur s'est arrêté
      } else {
        pos += dt * 0.03; // ≈ 30 px par seconde
        const half = el.scrollWidth / 2;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const pause = () => { paused.current = true; clearTimeout(resume); };
    const later = () => { clearTimeout(resume); resume = setTimeout(() => { paused.current = false; }, 2500); };
    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", later);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", later);
    el.addEventListener("wheel", () => { pause(); later(); }, { passive: true });
    return () => { cancelAnimationFrame(raf); clearTimeout(resume); };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = box.current; if (!el) return;
    paused.current = true;
    const card = el.querySelector("figure")?.getBoundingClientRect().width ?? 360;
    if (dir < 0 && el.scrollLeft < card) el.scrollLeft += el.scrollWidth / 2; // boucle vers l'arrière
    el.scrollBy({ left: dir * (card + 24), behavior: "smooth" });
    setTimeout(() => { paused.current = false; }, 4000);
  };

  const arrow = "flex h-12 w-12 items-center justify-center border border-night/20 text-night/70 transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory";

  return (
    <section id="avis" data-tone="light" aria-labelledby="avis-title" className="relative w-full bg-ivory text-night">
      <div data-reveal className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-12 pt-24 text-center md:flex-row md:items-end md:justify-between md:px-10 md:pt-32 md:text-left">
        <div>
          <h2 id="avis-title" className="font-serif text-3xl tracking-[0.25em] sm:text-4xl">AVIS</h2>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-steelDeep">{site.reviews.label}</p>
        </div>
        <div className="flex gap-3">
          <button type="button" aria-label="Avis précédents" onClick={() => step(-1)} className={arrow}>←</button>
          <button type="button" aria-label="Avis suivants" onClick={() => step(1)} className={arrow}>→</button>
        </div>
      </div>

      {/* Bandeau : défile seul, et se fait glisser au doigt, au trackpad ou avec les flèches */}
      <div
        ref={box}
        className="no-scrollbar flex overflow-x-auto overscroll-x-contain pb-6"
        tabIndex={0}
        aria-label="Avis de patients, faites défiler horizontalement"
      >
        <div className="flex shrink-0 items-start gap-6 pl-6 md:pl-10">
          {testimonials.map((t, i) => <Card key={`a${i}`} t={t} />)}
        </div>
        {/* copie identique pour une boucle continue */}
        <div aria-hidden className="flex shrink-0 items-start gap-6 pl-6 md:pl-10">
          {testimonials.map((t, i) => <Card key={`b${i}`} t={t} />)}
        </div>
      </div>

      <div className="px-6 pb-20 pt-6 text-center md:pb-28">
        <a
          href={OSTEO_DOCTORANYTIME_URL}
          className="inline-block border-b border-night/30 pb-1 text-[11px] uppercase tracking-[0.18em] text-night/80 transition-colors duration-300 hover:border-steelDeep hover:text-steelDeep sm:text-xs sm:tracking-[0.25em]"
        >
          Voir tous les avis sur Doctoranytime →
        </a>
      </div>
    </section>
  );
}
