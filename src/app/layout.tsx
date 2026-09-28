import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site, SITE_URL } from "@/config/site";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.seo.title, template: `%s — ${site.name}` },
  description: site.seo.description,
  keywords: [
    "kinésithérapeute Ixelles",
    "ostéopathe Ixelles",
    "kinésithérapeute Woluwe-Saint-Pierre",
    "ostéopathe Woluwe-Saint-Pierre",
    "kinésithérapie Bruxelles",
    "ostéopathie Bruxelles",
    "David Otu",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    type: "website",
    locale: "fr_BE",
    siteName: site.name,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#0A1428" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-BE" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <StructuredData />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ivory focus:px-3 focus:py-2 focus:text-night">
          Aller au contenu
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
