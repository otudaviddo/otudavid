import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/config/site";
import { siteEn } from "@/content/en";
import Shell from "@/components/Shell";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: siteEn.seo.title, template: "%s" },
  description: siteEn.seo.description,
  alternates: { canonical: "/en", languages: { "fr-BE": "/", en: "/en" } },
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: siteEn.seo.title,
    description: siteEn.seo.description,
    type: "website",
    locale: "en_GB",
    siteName: "David Otu — Osteopath & physiotherapist",
    url: `${SITE_URL}/en`,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "David Otu, osteopath D.O. and physiotherapist in Brussels" }],
  },
  twitter: { card: "summary_large_image", title: siteEn.seo.title, description: siteEn.seo.description, images: ["/og.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0A1428" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
