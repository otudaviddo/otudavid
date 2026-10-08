import { content, type Lang } from "@/i18n";

/* Premier écran en un seul bloc : titre, phrase et deux boutons de rendez-vous à gauche,
   grande gravure anatomique à droite. */
export default function HeroBlock({ lang = "fr" }: { lang?: Lang }) {
  const c = content(lang);
  const t = c.ui;
  const btn = "inline-flex min-h-[56px] items-center justify-center rounded-full bg-steel px-8 text-[15px] font-medium text-night transition-colors duration-300 hover:bg-steelDeep";
  const link = "text-sm text-ivory underline decoration-ivory/30 decoration-1 underline-offset-[6px] transition-colors hover:text-steel hover:decoration-steel";
  return (
    <section aria-labelledby="accueil-title" data-tone="dark" className="relative -mt-[72px] overflow-hidden bg-night">
      <span aria-hidden className="hero-wash absolute inset-0" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/ecorche-baton.webp" alt="" aria-hidden width={546} height={950}
        className="pointer-events-none absolute -right-[22%] bottom-0 h-[78%] w-auto max-w-none select-none opacity-25 mix-blend-multiply sm:-right-[6%] sm:opacity-40 lg:-right-[5%] lg:h-[94%] lg:opacity-50 xl:right-[5%] xl:opacity-80"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col justify-center px-6 pb-16 pt-[140px] md:min-h-[600px] md:px-10 md:pb-20 md:pt-[150px] lg:h-[calc(100svh-76px)] lg:py-0">
        <p className="text-sm text-steel">David Otu</p>
        <h1 id="accueil-title" className="mt-4 max-w-[13ch] font-serif text-[clamp(2.9rem,11vw,3.75rem)] leading-[1.02] md:max-w-2xl md:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-ivory/75">{t.hero.text}</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {[c.disciplines.osteo, c.disciplines.kine].map((d) => (
            <a key={d.slug} href={d.url} className={btn}>{t.bookShort} · {d.label}</a>
          ))}
        </div>
        <p className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
          <a href={c.routes.osteo} className={link}>{t.hero.aboutOsteo}</a>
          <a href={c.routes.kine} className={link}>{t.hero.aboutKine}</a>
        </p>
      </div>
    </section>
  );
}
