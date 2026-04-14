"use client";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        width: "100%",
        borderTop: "1px solid #E5E4DF",
        padding: "5rem 0 3rem",
      }}
    >
      {/* Contact */}
      <div style={{ marginBottom: "3rem" }}>
        <p style={{
          fontSize: "0.65rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#aaa",
          marginBottom: "1.2rem",
        }}>
          Contact
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <a
            href="mailto:jrv.production85@gmail.com"
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
              color: "#0D0D0D",
              textDecoration: "none",
              transition: "color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#E05C3A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#0D0D0D")}
          >
            jrv.production85@gmail.com
          </a>

          <a
            href="tel:+33672751954"
            style={{
              fontSize: "1rem",
              color: "#888",
              textDecoration: "none",
              transition: "color 0.2s",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
          >
            06 72 75 19 54
          </a>
        </div>
      </div>

      {/* Bas */}
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
        <span style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          color: "#0D0D0D",
          fontSize: "0.95rem",
        }}>
          Jeremy Rondeau
        </span>

        <span style={{ fontSize: "0.7rem", color: "#ccc" }}>
          © {new Date().getFullYear()} — Vidéaste & Réalisateur
        </span>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "LinkedIn", href: "https://linkedin.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: "#aaa",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
