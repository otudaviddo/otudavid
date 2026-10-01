"use client";
import { useEffect, useRef, useState } from "react";
import { site, OSTEO_DOCTORANYTIME_URL } from "@/config/site";
import { testimonials } from "@/config/testimonials";
import { content, reviewDate, type Lang } from "@/i18n";

function Card({ t, lang }: { t: (typeof testimonials)[number]; lang: Lang }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col justify-between rounded-2xl border border-night/15 bg-white/50 px-6 py-7 sm:w-[400px] sm:px-8 sm:py-8">
      <blockquote className="font-serif text-lg leading-relaxed text-night/90 sm:text-xl">
        &laquo;&nbsp;{t.quote}&nbsp;&raquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between text-xs text-night/70">
        <span>{t.author}</span>
        <span>{reviewDate(lang, t.date)}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.avis;
  // En anglais, les avis rédigés en anglais passent en premier.
  const isEn = (q: string) => /\b(the|and|very|recommend|helpful|guy)\b/i.test(q);
  const list = lang === "en" ? [...testimonials].sort((a, b) => Number(isEn(b.quote)) - Number(isEn(a.quote))) : testimonials;
  const box = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);

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

  const arrow = "flex h-12 w-12 items-center justify-center rounded-full border border-night/20 text-night/70 transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory";

  return (
    <section id="avis" data-tone="light" aria-labelledby="avis-title" className="relative w-full bg-ivory text-night">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-12 pt-24 md:flex-row md:items-end md:justify-between md:px-10 md:pt-32">
        <div>
          <h2 id="avis-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{t.title}</h2>
          <p className="mt-4 text-sm text-night/70">{c.reviewsLabel}</p>
        </div>
        <div className="flex gap-3">
          <button type="button" aria-label={t.prev} onClick={() => step(-1)} className={arrow}>←</button>
          <button type="button" aria-label={t.next} onClick={() => step(1)} className={arrow}>→</button>
        </div>
      </div>

      {/* Bandeau : défile seul, et se fait glisser au doigt, au trackpad ou avec les flèches */}
      <div
        ref={box}
        className="no-scrollbar flex overflow-x-auto overscroll-x-contain pb-6"
        tabIndex={0}
        aria-label={t.aria}
      >
        <div className="flex shrink-0 items-start gap-6 pl-6 md:pl-10">
          {list.map((r, i) => <Card key={`a${i}`} t={r} lang={lang} />)}
        </div>
        {/* copie identique pour une boucle continue (ajoutée côté navigateur) */}
        {loop && (<div aria-hidden className="flex shrink-0 items-start gap-6 pl-6 md:pl-10">
          {list.map((r, i) => <Card key={`b${i}`} t={r} lang={lang} />)}
        </div>)}
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-6 md:px-10 md:pb-28">
        <a
          href={OSTEO_DOCTORANYTIME_URL}
          className="text-base text-night underline decoration-1 underline-offset-4 decoration-night/40 transition-colors duration-300 hover:text-steelDeep hover:decoration-steelDeep"
        >
          {t.all}
        </a>
      </div>
    </section>
  );
}
