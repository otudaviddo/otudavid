import { pageMeta } from "@/config/meta";
import LegalPage from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Legal notice and privacy | David Otu",
  description: "Site publisher, company number, INAMI number and how your data is handled on otudavid.be.",
  path: "/en/legal", alt: { fr: "/mentions-legales", en: "/en/legal" }, lang: "en",
});

export default function Page() {
  return <LegalPage lang="en" />;
}
