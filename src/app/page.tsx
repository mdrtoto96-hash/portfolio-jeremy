import Navigation from "@/components/ui/Navigation";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Bandeau identité — discret, une seule ligne */}
        <div style={{
          paddingTop: "6.5rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid #E5E4DF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <p style={{ fontSize: "0.82rem", color: "#0D0D0D", letterSpacing: "0.02em" }}>
            <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>Jeremy Rondeau</span>
            <span style={{ color: "#aaa", margin: "0 0.6rem" }}>—</span>
            <span style={{ color: "#888", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Vidéaste & Réalisateur</span>
          </p>
          <p style={{ fontSize: "0.72rem", color: "#aaa", letterSpacing: "0.06em" }}>
            Paris · Disponible
          </p>
        </div>

        <Portfolio />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
