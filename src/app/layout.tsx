import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Jeremy Rondeau — Vidéaste",
  description:
    "Portfolio de Jeremy Rondeau, vidéaste professionnel. Cinéma, publicité, clip, documentaire.",
  keywords: ["vidéaste", "réalisateur", "film", "clip", "publicité", "Jeremy Rondeau"],
  authors: [{ name: "Jeremy Rondeau" }],
  openGraph: {
    title: "Jeremy Rondeau — Vidéaste",
    description: "Vidéaste professionnel — Je transforme vos idées en images.",
    type: "website",
    locale: "fr_FR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${syne.variable} antialiased`}
    >
      <body className="bg-[#080808] text-[#f0ede8] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
