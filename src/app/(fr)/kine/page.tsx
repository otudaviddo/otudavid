import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import BookingPage from "@/components/BookingPage";

const d = content("fr").disciplines.kine;
export const metadata = pageMeta({ title: d.metaTitle, description: d.metaDescription, path: "/kine", alt: { fr: "/kine", en: "/en/physiotherapy" }, lang: "fr" });

export default function Page() {
  return <BookingPage kind="kine" lang="fr" />;
}
