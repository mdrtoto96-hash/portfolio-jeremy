"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        width: "100%",
        borderTop: "1px solid #E5E4DF",
        padding: "5rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      {/* Email */}
      <div>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: "0.6rem" }}>
          Contact
        </p>
        <a
          href="mailto:contact@jeremyrondeau.com"
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            color: "#0D0D0D",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#E05C3A")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#0D0D0D")}
        >
          contact@jeremyrondeau.com
        </a>
      </div>

      {/* Bas de page */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          borderTop: "1px solid #E5E4DF",
          paddingTop: "2rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", color: "#0D0D0D" }}>
          Jeremy Rondeau
        </span>
        <span style={{ fontSize: "0.75rem", color: "#bbb" }}>
          © {new Date().getFullYear()} — Tous droits réservés
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.75rem", letterSpacing: "0.08em", color: "#888", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: "0.75rem", letterSpacing: "0.08em", color: "#888", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
