import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import CabinetPage from "@/components/CabinetPage";

const a = content("en").addresses.find((x) => x.slug === "ixelles")!;
export const metadata = pageMeta({ title: a.metaTitle, description: a.metaDescription, path: "/en/ixelles", alt: { fr: "/ixelles", en: "/en/ixelles" }, lang: "en" });

export default function Page() {
  return <CabinetPage slug="ixelles" lang="en" />;
}
