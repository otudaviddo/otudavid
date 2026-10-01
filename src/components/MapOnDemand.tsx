"use client";
import { useState } from "react";

/* Carte Google chargée seulement au clic : tant que le visiteur ne la demande pas,
   rien n'est envoyé à Google et aucun cookie n'est déposé. */
export default function MapOnDemand({ src, title, address, show, note, route, routeHref }: {
  src: string; title: string; address: string; show: string; note: string; route: string; routeHref: string;
}) {
  const [on, setOn] = useState(false);
  const box = "h-[360px] w-full overflow-hidden rounded-2xl border border-night/15 md:h-full md:min-h-[460px]";
  if (on) return <iframe title={title} src={src} referrerPolicy="no-referrer-when-downgrade" className={box} />;
  return (
    <div className={`${box} flex flex-col items-start justify-end bg-nightSoft p-8 text-ivory md:p-10`}>
      <p className="font-serif text-3xl leading-tight">{address}</p>
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="button"
          onClick={() => setOn(true)}
          className="inline-flex min-h-[52px] items-center rounded-full border border-ivory/40 px-7 text-xs uppercase tracking-[0.22em] transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-night"
        >
          {show}
        </button>
        <a href={routeHref} className="text-sm underline decoration-ivory/40 decoration-1 underline-offset-4 hover:text-steel">{route}</a>
      </div>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70">{note}</p>
    </div>
  );
}
