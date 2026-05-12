"use client";
import Link from "next/link";

const SECTION: React.CSSProperties = {
  marginBottom: "2.5rem",
};

const LABEL: React.CSSProperties = {
  fontSize: "0.6rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(240,237,232,0.4)",
  marginBottom: "0.6rem",
  display: "block",
};

const VALUE: React.CSSProperties = {
  fontSize: "0.95rem",
  color: "rgba(240,237,232,0.75)",
  lineHeight: 1.8,
};

export default function MentionsLegales() {
  return (
    <div style={{ background: "#0D0D0D", minHeight: "100vh", color: "#F0EDE8" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "6rem 2rem 5rem" }}>

        {/* Retour */}
        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(240,237,232,0.4)", textDecoration: "none",
          marginBottom: "3rem", transition: "color 0.2s",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M5 12l7-7M5 12l7 7"/>
          </svg>
          Retour
        </Link>

        <h1 style={{
          fontFamily: "var(--font-playfair)", fontStyle: "italic",
          fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400,
          marginBottom: "3rem",
          borderBottom: "1px solid rgba(240,237,232,0.1)",
          paddingBottom: "1.5rem",
        }}>
          Mentions légales
        </h1>

        {/* Éditeur */}
        <div style={SECTION}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "1.2rem", fontWeight: 500 }}>
            Éditeur du site
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { label: "Nom", value: "Rondeau Jeremy" },
              { label: "Activité", value: "Vidéaste professionnel — Micro-entreprise JRV Production" },
              { label: "Adresse", value: "27 rue des Dix-Huit Otages\n85220 Apremont, France" },
              { label: "Email", value: "jrv.production85@gmail.com" },
              { label: "Téléphone", value: "06 72 75 19 54" },
              { label: "SIRET", value: "989 255 237 00012" },
              { label: "TVA", value: "Non assujetti à la TVA — Article 293 B du CGI" },
              { label: "Directeur de la publication", value: "Rondeau Jeremy" },
            ].map(({ label, value }) => (
              <div key={label}>
                <span style={LABEL}>{label}</span>
                <p style={{ ...VALUE, whiteSpace: "pre-line" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(240,237,232,0.08)", marginBottom: "2.5rem" }} />

        {/* Hébergeur */}
        <div style={SECTION}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "1.2rem", fontWeight: 500 }}>
            Hébergeur
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {[
              { label: "Société", value: "Vercel Inc." },
              { label: "Adresse", value: "340 Pine Street, Suite 701\nSan Francisco, CA 94104, États-Unis" },
              { label: "Site web", value: "https://vercel.com" },
            ].map(({ label, value }) => (
              <div key={label}>
                <span style={LABEL}>{label}</span>
                <p style={{ ...VALUE, whiteSpace: "pre-line" }}>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(240,237,232,0.08)", marginBottom: "2.5rem" }} />

        {/* Propriété intellectuelle */}
        <div style={SECTION}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "1.2rem", fontWeight: 500 }}>
            Propriété intellectuelle
          </h2>
          <p style={VALUE}>
            L&apos;ensemble des contenus présents sur ce site (textes, images, vidéos) est la propriété exclusive de Jeremy Rondeau — JRV Production, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>
        </div>

        <div style={{ borderTop: "1px solid rgba(240,237,232,0.08)", marginBottom: "2.5rem" }} />

        {/* Données personnelles */}
        <div style={SECTION}>
          <h2 style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#F0EDE8", marginBottom: "1.2rem", fontWeight: 500 }}>
            Données personnelles
          </h2>
          <p style={VALUE}>
            Ce site ne collecte aucune donnée personnelle via formulaire. Des données de navigation anonymes peuvent être collectées via Vercel Analytics à des fins de statistiques (pages visitées, pays d&apos;origine). Conformément au RGPD, vous pouvez exercer vos droits en contactant : jrv.production85@gmail.com
          </p>
        </div>

        <p style={{ fontSize: "0.7rem", color: "rgba(240,237,232,0.2)", marginTop: "3rem" }}>
          Dernière mise à jour : mai 2026
        </p>
      </div>
    </div>
  );
}
