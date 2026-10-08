"use client";
import { useRef, useState } from "react";
import type { QA } from "@/content/faq";
import { ui, type Lang } from "@/i18n";

/** FAQ en carrousel : cartes qui défilent au doigt, au trackpad ou avec les flèches.
 *  Tout le texte reste dans la page (lisible par Google). */
export default function FaqCarousel({ items, tone = "dark", title, id, lang = "fr" }: {
  items: QA[]; tone?: "dark" | "light"; title?: string; id?: string; lang?: Lang;
}) {
  const t = ui[lang].faq;
  title = title ?? t.title;
  const box = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const dark = tone === "dark";

  const go = (dir: 1 | -1) => {
    const el = box.current; if (!el) return;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width + 24 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };
  const onScroll = () => {
    const el = box.current; if (!el) return;
    const card = el.querySelector("article");
    const w = card ? card.getBoundingClientRect().width + 24 : 360;
    setIndex(Math.min(items.length - 1, Math.round(el.scrollLeft / w)));
  };

  const arrow = dark
    ? "border-ivory/25 text-ivory/80 hover:border-ivory hover:bg-ivory hover:text-night"
    : "border-night/20 text-night/70 hover:border-night hover:bg-night hover:text-ivory";

  return (
    <section id={id} data-tone={tone} aria-labelledby={`${id ?? "faq"}-title`} className={`w-full ${dark ? "bg-nightSoft text-ivory" : "bg-ivory text-night"}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-10 pt-24 md:flex-row md:items-end md:justify-between md:px-10 md:pt-28">
        <div>
          <h2 id={`${id ?? "faq"}-title`} className="font-serif text-4xl leading-[1.1] sm:text-5xl">{title}</h2>
          <p className={`mt-4 text-sm tabular-nums ${dark ? "text-ivory/70" : "text-night/70"}`}>
            {index + 1} / {items.length}
          </p>
        </div>
        <div className="flex gap-3">
          <button type="button" aria-label={t.prev} onClick={() => go(-1)} className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 ${arrow}`}>←</button>
          <button type="button" aria-label={t.next} onClick={() => go(1)} className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors duration-300 ${arrow}`}>→</button>
        </div>
      </div>

      <div
        ref={box}
        onScroll={onScroll}
        tabIndex={0}
        role="region"
        aria-label={title}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-6 px-6 pb-24 md:scroll-px-10 md:px-10 md:pb-28"
      >
        {items.map((it, i) => (
          <article
            key={i}
            className={`flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border p-7 sm:w-[420px] sm:p-9 ${dark ? "border-ivory/15 bg-night" : "border-night/15 bg-white/40"}`}
          >
            <h3 className="font-serif text-2xl leading-snug">{it.q}</h3>
            <p className={`mt-4 text-[15px] leading-relaxed ${dark ? "text-ivory/75" : "text-night/75"}`}>{it.a}</p>
          </article>
        ))}
        <span aria-hidden className="w-1 shrink-0" />
      </div>
    </section>
  );
}
