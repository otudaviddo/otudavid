import { content } from "@/i18n";
import { pageMeta } from "@/config/meta";
import CabinetPage from "@/components/CabinetPage";

const a = content("en").addresses.find((x) => x.slug === "woluwe-saint-pierre")!;
export const metadata = pageMeta({ title: a.metaTitle, description: a.metaDescription, path: "/en/woluwe-saint-pierre", alt: { fr: "/woluwe-saint-pierre", en: "/en/woluwe-saint-pierre" }, lang: "en" });

export default function Page() {
  return <CabinetPage slug="woluwe-saint-pierre" lang="en" />;
}
