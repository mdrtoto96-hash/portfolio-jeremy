import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import GlobalUI from "@/components/ui/GlobalUI";

const inter = Inter({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jeremy Rondeau — Vidéaste",
  description: "Portfolio de Jeremy Rondeau, vidéaste professionnel. Clips, publicités, documentaires.",
  authors: [{ name: "Jeremy Rondeau" }],
  openGraph: {
    title: "Jeremy Rondeau — Vidéaste",
    description: "Vidéaste professionnel — Je transforme vos idées en images.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <GlobalUI />
        {children}
      </body>
    </html>
  );
}
