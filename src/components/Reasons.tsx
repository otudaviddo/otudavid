"use client";
import { useMemo, useState } from "react";
import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import { zones } from "@/content/motifs";
import Body3D, { type Hotspot } from "@/components/Body3D";

/* « Pourquoi me consulter ? » : un corps en 3D qui tourne, et tous les motifs rangés par zone.
   On choisit une zone (sur le corps ou dans les boutons) : le corps pivote vers elle et la liste
   de la zone s'affiche, avec pour chaque motif la discipline (kiné, ostéo ou les deux).
   Trois situations ne se montrent pas sur un corps : tout le corps, sport, après une opération.
   Le corps est décoratif : les boutons et la liste suffisent, au clavier comme au lecteur d'écran. */

const HOTSPOTS: Hotspot[] = zones.map((z) => (z.p && z.n ? { p: z.p, n: z.n } : null));

// Si la 3D ne peut pas s'afficher : la gravure de l'homme au bâton.
function Flat() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[546/950] h-full">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/ecorche-baton.webp" alt="" width={546} height={950} loading="lazy" className="absolute inset-0 h-full w-full object-contain opacity-60 mix-blend-screen" />
    </div>
  );
}

export default function Reasons({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui.reasons;
  const en = lang === "en";
  const [zoneId, setZoneId] = useState("dos");
  const index = zones.findIndex((z) => z.id === zoneId);
  const zone = zones[index];
  const labels = useMemo(() => zones.map((z) => (en ? z.en : z.fr)), [en]);
  const pill = "inline-flex min-h-[48px] items-center rounded-full border border-night/35 px-6 text-[15px] font-medium transition-colors duration-300 hover:border-night hover:bg-night hover:text-ivory";
  const zoneBtn = (on: boolean) => `min-h-[44px] shrink-0 whitespace-nowrap rounded-full border px-4 text-[15px] transition-colors duration-200 ${on ? "border-night bg-night text-ivory" : "border-night/30 hover:border-night"}`;

  return (
    <section id="motifs" data-tone="navy" aria-labelledby="motifs-accueil-title" className="relative w-full overflow-hidden bg-ivory text-night">
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <h2 id="motifs-accueil-title" className="font-serif text-4xl leading-[1.1] sm:text-5xl">{t.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-night/80">{t.pick}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={c.routes.kine} className={pill}>{c.disciplines.kine.label}</a>
            <a href={c.routes.osteo} className={pill}>{c.disciplines.osteo.label}</a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div className="h-[380px] sm:h-[520px] lg:sticky lg:top-24 lg:h-[600px] lg:self-start">
            <Body3D hotspots={HOTSPOTS} labels={labels} active={zone.p ? index : null} onActive={(i) => i !== null && setZoneId(zones[i].id)} fallback={<Flat />} />
          </div>

          <div className="min-w-0">
            <div role="group" aria-label={t.zonesAria} className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
              {zones.map((z) => (
                <button key={z.id} type="button" aria-pressed={z.id === zoneId} onClick={() => setZoneId(z.id)} className={zoneBtn(z.id === zoneId)}>
                  {en ? z.en : z.fr}
                </button>
              ))}
            </div>

            <div aria-live="polite">
              <h3 className="mt-9 font-serif text-3xl">{en ? zone.en : zone.fr}</h3>
              <ul className="mt-4 border-t border-night/15">
                {zone.items.map((m) => (
                  <li key={m.fr} className="flex items-baseline justify-between gap-4 border-b border-night/15 py-3.5">
                    <span className="min-w-0 font-serif text-xl leading-snug sm:text-2xl">
                      {m.soin ? (
                        <a href={c.soinHref(m.soin)} className="underline decoration-night/25 decoration-1 underline-offset-[6px] transition-colors hover:text-steelDeep hover:decoration-steelDeep">{en ? m.en : m.fr}</a>
                      ) : (en ? m.en : m.fr)}
                    </span>
                    <span className="shrink-0 whitespace-nowrap rounded-full bg-night/10 px-2.5 py-0.5 text-xs font-semibold text-steelDeep">{t.tags[m.d]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 border-t border-night/15 pt-5 text-[15px] text-night/80">
              {t.notListed} <a href={site.phoneHref} className="whitespace-nowrap font-semibold text-night underline decoration-night/30 underline-offset-4">{site.phone}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
