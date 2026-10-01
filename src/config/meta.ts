import type { Metadata } from "next";

/** Métadonnées complètes d'une page : titre, description, adresse canonique
 *  et aperçu de partage (Open Graph / WhatsApp, Facebook, LinkedIn…) propres à la page. */
export function pageMeta({ title, description, path, image = "/og.jpg", alt, lang = "fr" }: { title: string; description: string; path: string; image?: string; alt?: { fr: string; en: string }; lang?: "fr" | "en" }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path, ...(alt ? { languages: { "fr-BE": alt.fr, en: alt.en } } : {}) },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: lang === "fr" ? "fr_BE" : "en_GB",
      siteName: lang === "fr" ? "David Otu — Ostéopathe & kinésithérapeute" : "David Otu — Osteopath & physiotherapist",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
