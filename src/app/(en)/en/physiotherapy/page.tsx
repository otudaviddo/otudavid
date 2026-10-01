import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import BookingPage from "@/components/BookingPage";

const d = content("en").disciplines.kine;
export const metadata = pageMeta({ title: d.metaTitle, description: d.metaDescription, path: "/en/physiotherapy", alt: { fr: "/kine", en: "/en/physiotherapy" }, lang: "en" });

export default function Page() {
  return <BookingPage kind="kine" lang="en" />;
}
