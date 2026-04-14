"use client";

import { useEffect, useState } from "react";
import Portfolio from "@/components/sections/Portfolio";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

const navLinks = [
  { label: "Portfolio", href: "top" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

function go(href: string) {
  if (href === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 160);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Barre sticky minimale — apparaît seulement après le scroll */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        background: "rgba(250,250,248,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5E4DF",
      }}>
        <div style={{
          maxWidth: "1400px", margin: "0 auto", padding: "0 3rem",
          height: "52px", display: "flex", alignItems: "center",
          justifyContent: "space-between",
        }}>
          <button onClick={() => go("top")} style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "1rem", color: "#0D0D0D", background: "none", border: "none", cursor: "pointer",
          }}>
            Jeremy Rondeau
          </button>
          <div style={{ display: "flex", gap: "2rem" }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} style={{
                fontSize: "0.73rem", letterSpacing: "0.07em", color: "#888",
                background: "none", border: "none", cursor: "pointer", transition: "color 0.2s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 3rem" }}>

        {/* ── Identité ── */}
        <div style={{
          paddingTop: "4.5rem",
          paddingBottom: "2.5rem",
          borderBottom: "1px solid #E5E4DF",
        }}>
          <h1 style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 400,
            lineHeight: 1, color: "#0D0D0D", letterSpacing: "0.01em",
          }}>
            Jeremy Rondeau
          </h1>
          <p style={{
            marginTop: "0.5rem", fontSize: "0.68rem",
            letterSpacing: "0.22em", textTransform: "uppercase", color: "#aaa",
          }}>
            Vidéaste
          </p>

          {/* Liens de navigation — sous le nom */}
          <div style={{ display: "flex", gap: "2rem", marginTop: "1.6rem", flexWrap: "wrap" }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} style={{
                fontSize: "0.78rem", letterSpacing: "0.06em", color: "#555",
                background: "none", border: "none", cursor: "pointer",
                transition: "color 0.2s", padding: 0,
                borderBottom: "1px solid transparent",
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0D0D0D";
                  e.currentTarget.style.borderBottomColor = "#0D0D0D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#555";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <Portfolio />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
