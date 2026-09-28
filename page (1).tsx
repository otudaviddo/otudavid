import { site, disciplines } from "@/config/site";
import Choice from "@/components/Choice";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 text-center md:px-10 md:pt-28">
        <h1 className="rise font-serif text-5xl tracking-[0.3em] sm:text-6xl md:text-7xl">{site.name}</h1>
        <p className="rise d1 mt-6 text-xs uppercase tracking-[0.28em] text-ivory/70 sm:text-sm">{site.title}</p>
        <p className="rise d2 mt-16 font-serif text-xl italic text-ivory/80 md:mt-24">{site.tagline}</p>

        <div className="mt-12 flex flex-col gap-6 md:flex-row md:gap-8">
          <Choice d={disciplines.osteo} delay="d2" />
          <Choice d={disciplines.kine} delay="d3" />
        </div>

        <p className="rise d3 mx-auto mt-16 max-w-2xl text-sm leading-relaxed text-ivory/60">
          {site.about}
        </p>
        <p className="rise d3 mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ivory/50">
          Cabinet à <strong className="text-ivory/70 font-normal">Ixelles</strong> (rue de Hennin)
          et à <strong className="text-ivory/70 font-normal">Woluwe-Saint-Pierre</strong> (rue de la Station), à Bruxelles.
        </p>
      </section>
      <Testimonials />
      <Contact />
    </>
  );
}
