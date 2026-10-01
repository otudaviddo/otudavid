import type { Metadata } from "next";

/** Métadonnées complètes d'une page : titre, description, adresse canonique
 *  et aperçu de partage (Open Graph / WhatsApp, Facebook, LinkedIn…) propres à la page. */
export function pageMeta({ title, description, path, image = "/og.jpg" }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "fr_BE",
      siteName: "David Otu — Ostéopathe & kinésithérapeute",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
