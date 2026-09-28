import { disciplines } from "@/config/site";

type D = (typeof disciplines)[keyof typeof disciplines];

export default function Choice({ d, delay }: { d: D; delay: string }) {
  return (
    <a
      href={d.url}
      className={`rise ${delay} group flex min-h-[220px] flex-1 flex-col items-center justify-center gap-5 border border-ivory/25 px-8 py-14 text-center transition-colors duration-500 hover:border-steel hover:bg-ivory/[0.03] md:min-h-[320px]`}
    >
      <span className="font-serif text-3xl tracking-[0.22em] sm:text-4xl">{d.upper}</span>
      <span className="h-px w-10 bg-ivory/30 transition-all duration-500 group-hover:w-16 group-hover:bg-steel" />
      <span className="text-xs uppercase tracking-[0.25em] text-steel transition-transform duration-300 group-hover:translate-x-1">
        Prendre rendez-vous →
      </span>
    </a>
  );
}
