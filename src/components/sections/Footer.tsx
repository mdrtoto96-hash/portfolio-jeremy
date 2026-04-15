"use client";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        width: "100%",
        paddingTop: "8rem",
        paddingBottom: "4rem",
      }}
    >
      {/* ── Titre Contact qui clignote ── */}
      <h2
        className="contact-blink"
        style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          fontSize: "clamp(2.5rem, 4vw, 5rem)",
          fontWeight: 400,
          color: "#F0EDE8",
          lineHeight: 1,
          marginBottom: "4rem",
        }}
      >
        Contact
      </h2>

      {/* ── Infos de contact ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", marginBottom: "6rem" }}>
        <a
          href="mailto:jrv.production85@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            color: "rgba(240,237,232,0.55)",
            textDecoration: "none",
            transition: "color 0.2s",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.55)")}
        >
          <Mail size={18} strokeWidth={1.2} style={{ flexShrink: 0, opacity: 0.6 }} />
          jrv.production85@gmail.com
        </a>

        <a
          href="tel:+33672751954"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "1rem",
            fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
            color: "rgba(240,237,232,0.55)",
            textDecoration: "none",
            transition: "color 0.2s",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.55)")}
        >
          <Phone size={18} strokeWidth={1.2} style={{ flexShrink: 0, opacity: 0.6 }} />
          06 72 75 19 54
        </a>
      </div>

      {/* ── Barre basse ── */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        borderTop: "1px solid rgba(240,237,232,0.08)",
        paddingTop: "2rem",
      }}>
        <span style={{
          fontFamily: "var(--font-playfair)",
          fontStyle: "italic",
          color: "rgba(240,237,232,0.4)",
          fontSize: "0.95rem",
        }}>
          Jeremy Rondeau
        </span>

        <span style={{ fontSize: "0.7rem", color: "rgba(240,237,232,0.2)", letterSpacing: "0.05em" }}>
          © {new Date().getFullYear()} — Vidéaste
        </span>

        <div style={{ display: "flex", gap: "1.4rem", alignItems: "center" }}>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/jrv.production/?hl=fr"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            style={{ color: "rgba(240,237,232,0.35)", transition: "color 0.2s", display: "flex" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.35)")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jeremy-rondeau-9b1176372/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ color: "rgba(240,237,232,0.35)", transition: "color 0.2s", display: "flex" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.35)")}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="3"/>
              <line x1="8" y1="10" x2="8" y2="17"/>
              <line x1="8" y1="7" x2="8" y2="7.5" strokeWidth="2"/>
              <path d="M12 10v7M12 13a3 3 0 0 1 6 0v4"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
