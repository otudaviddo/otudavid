import type { QA } from "@/content/faq";

/** Données structurées « FAQPage » : aident Google à comprendre les questions/réponses. */
export default function FaqSchema({ items }: { items: QA[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
