import { site } from "@/config/site";
import { pageMeta } from "@/config/meta";
import CabinetPage from "@/components/CabinetPage";

const a = site.addresses[0];
export const metadata = pageMeta({ title: a.metaTitle, description: a.metaDescription, path: "/woluwe-saint-pierre" });

export default function Page() {
  return <CabinetPage a={a} />;
}
