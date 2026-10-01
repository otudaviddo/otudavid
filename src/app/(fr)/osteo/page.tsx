import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import BookingPage from "@/components/BookingPage";

const d = content("fr").disciplines.osteo;
export const metadata = pageMeta({ title: d.metaTitle, description: d.metaDescription, path: "/osteo", alt: { fr: "/osteo", en: "/en/osteopathy" }, lang: "fr" });

export default function Page() {
  return <BookingPage kind="osteo" lang="fr" />;
}
