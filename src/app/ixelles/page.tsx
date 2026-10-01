import { site } from "@/config/site";
import { pageMeta } from "@/config/meta";
import CabinetPage from "@/components/CabinetPage";

const a = site.addresses[1];
export const metadata = pageMeta({ title: a.metaTitle, description: a.metaDescription, path: "/ixelles" });

export default function Page() {
  return <CabinetPage a={a} />;
}
