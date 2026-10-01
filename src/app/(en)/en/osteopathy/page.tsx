import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import BookingPage from "@/components/BookingPage";

const d = content("en").disciplines.osteo;
export const metadata = pageMeta({ title: d.metaTitle, description: d.metaDescription, path: "/en/osteopathy", alt: { fr: "/osteo", en: "/en/osteopathy" }, lang: "en" });

export default function Page() {
  return <BookingPage kind="osteo" lang="en" />;
}
