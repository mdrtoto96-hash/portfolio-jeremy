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
          paddingTop: "5.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid #E5E4DF",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "end",
        }}>

          {/* Gauche : nom + titre */}
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

          {/* Droite : photo + localisation */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.9rem" }}>

            {/* Photo — remplacez ce bloc par votre image :
                <img src="/photo.jpg" alt="Jeremy Rondeau"
                     style={{ width:"160px", height:"200px", objectFit:"cover" }} />
            */}
            <div style={{
              width: "160px",
              height: "200px",
              background: "#EDECE8",
              border: "1px dashed #C8C6C0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C0BDB7" strokeWidth="1">
                <circle cx="12" cy="8" r="4.5" />
                <path d="M3 21c0-5 4-8.5 9-8.5s9 3.5 9 8.5" />
              </svg>
              <span style={{
                fontSize: "0.58rem", letterSpacing: "0.12em",
                color: "#C0BDB7", textTransform: "uppercase",
                textAlign: "center", lineHeight: 1.5,
              }}>
                Votre photo
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
