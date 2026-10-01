import { Cormorant_Garamond, Manrope } from "next/font/google";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import type { Lang } from "@/i18n";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-serif" });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans" });

/** Structure commune des pages (html, en-tête, données structurées), pour chaque langue. */
export default function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang === "fr" ? "fr-BE" : "en"} className={`${serif.variable} ${sans.variable}`}>
      <body>
        <StructuredData />
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-ivory focus:px-3 focus:py-2 focus:text-night">
          {lang === "fr" ? "Aller au contenu" : "Skip to content"}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
