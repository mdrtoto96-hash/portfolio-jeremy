import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import GlobalUI from "@/components/ui/GlobalUI";
import { Analytics } from "@vercel/analytics/next";

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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rondeaujeremy.fr"
  ),
  title: "Jeremy Rondeau — Vidéaste",
  description: "Portfolio de Jeremy Rondeau, vidéaste en Vendée. Films d'entreprise, événementiel, publicité. Disponible immédiatement.",
  authors: [{ name: "Jeremy Rondeau" }],
  openGraph: {
    title: "Jeremy Rondeau — Vidéaste",
    description: "Films d'entreprise, événementiel, publicité — Vendée, Pays de la Loire.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.rondeaujeremy.fr",
    siteName: "Jeremy Rondeau",
    images: [
      {
        url: "https://www.rondeaujeremy.fr/Imagesite.png",
        width: 1200,
        height: 630,
        alt: "Jeremy Rondeau — Vidéaste",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Rondeau — Vidéaste",
    description: "Films d'entreprise, événementiel, publicité — Vendée, Pays de la Loire.",
    images: ["https://www.rondeaujeremy.fr/Imagesite.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <GlobalUI />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
