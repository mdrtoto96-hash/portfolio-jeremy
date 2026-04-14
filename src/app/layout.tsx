import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dm = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jeremy Rondeau — Vidéaste",
  description: "Portfolio de Jeremy Rondeau, vidéaste professionnel. Cinéma, publicité, clip, documentaire.",
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
    <html lang="fr" className={`${dm.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
