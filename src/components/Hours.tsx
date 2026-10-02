import type { Lang } from "@/i18n";

type Slot = { day: string; opens: string; closes: string };
const DAYS_FR: Record<string, string> = { Monday: "Lundi", Tuesday: "Mardi", Wednesday: "Mercredi", Thursday: "Jeudi", Friday: "Vendredi", Saturday: "Samedi", Sunday: "Dimanche" };

/** « 07:45 » devient « 7h45 » en français et « 7:45 » en anglais. */
export function hour(lang: Lang, t: string) {
  const [h, m] = t.split(":");
  const H = String(Number(h));
  return lang === "fr" ? (m === "00" ? `${H}h` : `${H}h${m}`) : `${H}:${m}`;
}

/* Horaires d'un cabinet : une ligne par jour. */
export default function Hours({ hours, lang = "fr", className = "", dayClass = "", timeClass = "" }: {
  hours: readonly Slot[]; lang?: Lang; className?: string; dayClass?: string; timeClass?: string;
}) {
  return (
    <dl className={className}>
      {hours.map((s) => (
        <div key={s.day} className="flex items-baseline justify-between gap-6">
          <dt className={dayClass}>{lang === "fr" ? DAYS_FR[s.day] : s.day}</dt>
          <dd className={`tabular-nums ${timeClass}`}>{hour(lang, s.opens)} – {hour(lang, s.closes)}</dd>
        </div>
      ))}
    </dl>
  );
}
