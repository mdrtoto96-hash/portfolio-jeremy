import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Jeremy Rondeau",
  description: "Mentions légales du site Jeremy Rondeau, vidéaste professionnel en Vendée.",
  robots: { index: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
