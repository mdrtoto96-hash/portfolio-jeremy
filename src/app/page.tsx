import Navigation from "@/components/ui/Navigation";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>

        {/* ── Identité ── */}
        <div style={{
          paddingTop: "6rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid #E5E4DF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "2rem",
          flexWrap: "wrap",
        }}>

          {/* Nom + titre */}
          <div>
            <h1 style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 400,
              lineHeight: 1,
              color: "#0D0D0D",
              letterSpacing: "0.01em",
            }}>
              Jeremy Rondeau
            </h1>
            <p style={{
              marginTop: "0.6rem",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#aaa",
            }}>
              Vidéaste
            </p>
          </div>

          {/* Photo + localisation */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1rem" }}>

            {/* ── PHOTO ── Remplacez ce bloc par <img src="/photo.jpg" .../> quand vous avez votre photo */}
            <div style={{
              width: "90px",
              height: "110px",
              background: "#EDECE8",
              border: "1px dashed #C8C6C0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              flexShrink: 0,
            }}>
              {/* Icône silhouette */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8C6C0" strokeWidth="1.2">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span style={{ fontSize: "0.55rem", letterSpacing: "0.1em", color: "#C8C6C0", textTransform: "uppercase", textAlign: "center", lineHeight: 1.4 }}>
                Votre<br />photo
              </span>
            </div>

            <p style={{ fontSize: "0.7rem", color: "#bbb", letterSpacing: "0.06em" }}>
              Paris · Disponible
            </p>
          </div>
        </div>

        <Portfolio />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
