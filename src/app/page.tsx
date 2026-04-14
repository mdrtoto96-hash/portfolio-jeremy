"use client";

import { useEffect, useState } from "react";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

const navLinks = [
  { label: "Portfolio", href: "top" },
  { label: "À propos", href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function go(href: string) {
  if (href === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* ── Barre sticky au scroll ── */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "opacity 0.4s",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        background: "rgba(250,250,248,0.96)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #E5E4DF",
      }}>
        <div style={{
          maxWidth: "1400px", margin: "0 auto", padding: "0 3rem",
          height: "52px", display: "flex", alignItems: "center", justifyContent: "space-between",
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

      {/* ── HERO PLEIN ÉCRAN AVEC ZOOM ── */}
      <div style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0D0D0D",
      }}>
        {/* Fond qui zoome */}
        <div
          className="hero-zoom"
          style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, #1a1a18 0%, #0D0D0D 60%, #111110 100%)",
          }}
        />

        {/* Grain subtil */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
          opacity: 0.025,
          pointerEvents: "none",
        }} />

        {/* Contenu centré */}
        <div style={{
          position: "relative", zIndex: 10,
          height: "100%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          textAlign: "center", gap: "0",
        }}>

          {/* Tag */}
          <p className="hero-text-1" style={{
            fontSize: "0.65rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
            marginBottom: "1.6rem",
          }}>
            Vidéaste — Paris
          </p>

          {/* Nom */}
          <h1 className="hero-text-2" style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(3rem, 8vw, 7.5rem)", fontWeight: 400,
            lineHeight: 0.95, color: "#FAFAF8",
            letterSpacing: "0.01em",
          }}>
            Jeremy Rondeau
          </h1>

          {/* Liens nav */}
          <div className="hero-text-3" style={{
            display: "flex", gap: "2.5rem", marginTop: "3rem", flexWrap: "wrap", justifyContent: "center",
          }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)} style={{
                fontSize: "0.72rem", letterSpacing: "0.12em",
                textTransform: "uppercase", color: "rgba(255,255,255,0.45)",
                background: "none", border: "none", cursor: "pointer",
                transition: "color 0.25s",
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAF8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="hero-text-4" style={{ marginTop: "5rem" }}>
            <button onClick={() => go("#portfolio")} style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem",
              color: "rgba(255,255,255,0.25)", background: "none", border: "none", cursor: "pointer",
              transition: "color 0.25s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
            >
              <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Défiler</span>
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
                <line x1="6" y1="0" x2="6" y2="20" stroke="currentColor" strokeWidth="1"/>
                <polyline points="1,14 6,20 11,14" fill="none" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Contenu sous le hero ── */}
      <div id="portfolio" style={{ width: "100%", maxWidth: "1400px", margin: "0 auto", padding: "0 3rem" }}>
        <Portfolio />
        <About />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
