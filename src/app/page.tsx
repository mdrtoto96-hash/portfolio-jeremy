import Navigation from "@/components/ui/Navigation";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* Identité */}
        <div style={{
          paddingTop: "6.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid #E5E4DF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}>
          <div>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 500,
              lineHeight: 1,
              color: "#0D0D0D",
              letterSpacing: "-0.01em",
            }}>
              Jeremy Rondeau
            </h1>
            <p style={{
              marginTop: "0.5rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#aaa",
            }}>
              Vidéaste
            </p>
          </div>
          <p style={{ fontSize: "0.72rem", color: "#bbb", letterSpacing: "0.06em", paddingBottom: "0.15rem" }}>
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
