import type { Metadata, Viewport } from "next";
import { site, SITE_URL } from "@/config/site";
import Shell from "@/components/Shell";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.seo.title, template: "%s" },
  description: site.seo.description,
  authors: [{ name: site.name }],
  alternates: { canonical: "/", languages: { "fr-BE": "/", en: "/en" } },
  icons: { icon: "/icon.svg", apple: "/apple-icon.png" },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "fr_BE",
    siteName: "David Otu — Ostéopathe & kinésithérapeute",
    url: SITE_URL,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "David Otu, ostéopathe D.O. et kinésithérapeute à Ixelles et Woluwe-Saint-Pierre" }],
  },
  twitter: { card: "summary_large_image", title: site.seo.title, description: site.seo.description, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="fr">{children}</Shell>;
}
