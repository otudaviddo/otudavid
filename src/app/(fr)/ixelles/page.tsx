import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import CabinetPage from "@/components/CabinetPage";

const a = content("fr").addresses.find((x) => x.slug === "ixelles")!;
export const metadata = pageMeta({ title: a.metaTitle, description: a.metaDescription, path: "/ixelles", alt: { fr: "/ixelles", en: "/en/ixelles" }, lang: "fr" });

export default function Page() {
  return <CabinetPage slug="ixelles" lang="fr" />;
}
