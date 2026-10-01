import { pageMeta } from "@/config/meta";
import LegalPage from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Mentions légales et confidentialité | David Otu",
  description: "Éditeur du site, numéro d'entreprise, numéro INAMI et traitement de vos données sur otudavid.be.",
  path: "/mentions-legales", alt: { fr: "/mentions-legales", en: "/en/legal" }, lang: "fr",
});

export default function Page() {
  return <LegalPage lang="fr" />;
}
