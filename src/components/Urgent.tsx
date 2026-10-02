import { site } from "@/config/site";
import { content, type Lang } from "@/i18n";
import { PhoneIcon } from "@/components/Icons";

/* Rendez-vous en urgence : on appelle directement.
   - variante « band » : bandeau fin, juste sous l'accueil ;
   - variante « section » : bloc avec titre et texte, sur les pages Ostéo, Kiné et cabinets. */
const phoneBtn = "inline-flex min-h-[52px] shrink-0 items-center gap-3 rounded-full bg-night px-7 font-serif text-2xl text-ivory transition-colors duration-300 hover:bg-nightSoft";

export function UrgentBand({ lang = "fr" }: { lang?: Lang }) {
  const t = content(lang).ui.urgent;
  return (
    <aside aria-label={t.aria} className="w-full bg-steel text-night">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:min-h-[76px] md:px-10 md:py-0">
        <p className="text-base leading-snug">
          <strong className="font-semibold">{t.band}</strong>
          <span className="text-night/80"> · {t.bandText}</span>
        </p>
        <a href={site.phoneHref} className={phoneBtn}>
          <PhoneIcon className="h-5 w-5" />{site.phone}
        </a>
      </div>
    </aside>
  );
}

export function UrgentSection({ lang = "fr", title, text }: { lang?: Lang; title: string; text: string }) {
  const t = content(lang).ui.urgent;
  return (
    <section id="urgence" data-tone="light" aria-labelledby="urgence-title" className="w-full bg-steel text-night">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[7fr_5fr] md:items-center md:gap-16 md:px-10 md:py-16">
        <div>
          <h2 id="urgence-title" className="font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-night/85">{text}</p>
          <p className="mt-3 text-sm leading-relaxed text-night/70">{t.safety}</p>
        </div>
        <div className="md:justify-self-end">
          <a href={site.phoneHref} className={`${phoneBtn} min-h-[64px] px-9 text-3xl`}>
            <PhoneIcon className="h-6 w-6" />{site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
