"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

const W = "100%";
const MAX = "1520px";
const PAD = "0 5rem";
const NAV_H = 52;

const navLinks = [
  { label: "Portfolio",  href: "#portfolio" },
  { label: "À propos",  href: "#about" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact",   href: "#contact" },
];

function go(href: string) {
  if (href === "#top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  if (href === "#contact") { window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); return; }
  const el = document.querySelector(href);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_H;
  window.scrollTo({ top, behavior: "smooth" });
}

const NAV_BTN: React.CSSProperties = {
  fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase",
  color: "rgba(240,237,232,0.4)", background: "none", border: "none",
  cursor: "none", transition: "color 0.2s", padding: 0,
};

export default function Home() {
  const [scrolled,  setScrolled]  = useState(false);
  const [showreel,  setShowreel]  = useState(false);

  // Toujours revenir en haut au chargement
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Fermer le showreel avec Échap
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setShowreel(false); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  return (
    <div id="top" style={{ background: "#0D0D0D", minHeight: "100vh" }}>

      {/* ── Barre sticky ── */}
      <div className="nav-blur" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "opacity 0.4s",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        background: "rgba(13,13,13,0.92)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(240,237,232,0.08)",
      }}>
        <div className="mob-pad" style={{
          width: W, maxWidth: MAX, margin: "0 auto", padding: PAD,
          height: `${NAV_H}px`, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <button onClick={() => go("#top")} style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "1.05rem", color: "#F0EDE8", background: "none", border: "none",
          }}>
            Jeremy Rondeau
          </button>
          <div className="nav-links-sticky" style={{ display: "flex", gap: "2.8rem" }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                style={NAV_BTN}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
              >{l.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* ── HERO ── */}
      <div style={{ width: W, height: "100vh", overflow: "hidden", position: "relative" }}>
        <div className="hero-zoom" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, #181816 0%, #0D0D0D 60%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

        <div style={{
          position: "relative", zIndex: 10, height: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}>
          <p className="hero-t1" style={{
            fontSize: "0.6rem", letterSpacing: "0.3em",
            textTransform: "uppercase", color: "rgba(240,237,232,0.55)",
            marginBottom: "2rem",
          }}>Vidéaste</p>

          <h1 className="hero-t2" style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(3.5rem, 7vw, 9.5rem)", fontWeight: 400,
            lineHeight: 1, color: "#F0EDE8", letterSpacing: "0.01em",
            textAlign: "center",
          }}>Jeremy Rondeau</h1>

          {/* Bouton Showreel */}
          <button
            className="hero-t3 showreel-pulse"
            onClick={() => setShowreel(true)}
            style={{
              marginTop: "2.5rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
              background: "none", border: "1px solid rgba(240,237,232,0.2)",
              color: "rgba(240,237,232,0.7)",
              padding: "0.7rem 1.8rem",
              fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase",
              transition: "color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animation = "none";
              e.currentTarget.style.borderColor = "rgba(240,237,232,0.6)";
              e.currentTarget.style.color = "#F0EDE8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animation = "";
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.color = "rgba(240,237,232,0.7)";
            }}
          >
            {/* Icône play */}
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "18px", height: "18px",
              border: "1px solid currentColor", borderRadius: "50%",
              flexShrink: 0,
            }}>
              <span style={{
                width: 0, height: 0,
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                borderLeft: "7px solid currentColor",
                marginLeft: "2px",
              }} />
            </span>
            Showreel
          </button>

          {/* Nav links */}
          <div className="hero-t5 hero-nav-links" style={{
            display: "flex", gap: "2.5rem", marginTop: "3rem",
            justifyContent: "center",
          }}>
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => go(l.href)}
                style={NAV_BTN}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
              >{l.label}</button>
            ))}
          </div>


          {/* Chevrons scroll */}
          <button className="hero-t5" onClick={() => go("#portfolio")} style={{
            marginTop: "4rem", display: "flex", flexDirection: "column",
            alignItems: "center", gap: 0,
            background: "none", border: "none",
            color: "#F0EDE8",
          }}>
            {(["chev-0", "chev-1", "chev-2"] as const).map((cls) => (
              <svg key={cls} className={cls} width="24" height="14" viewBox="0 0 24 14" fill="none">
                <path d="M1 1L12 12L23 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ))}
          </button>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="mob-pad" style={{ width: W, maxWidth: MAX, margin: "0 auto", padding: PAD }}>
        <Portfolio />
        <About />
        <Experience />
        <Footer />
      </div>

      {/* ── Modal Showreel ── */}
      {showreel && (
        <div
          onClick={() => setShowreel(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(13,13,13,0.97)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "3rem",
          }}
        >
          {/* Fermer */}
          <button
            onClick={() => setShowreel(false)}
            style={{
              position: "absolute", top: "2rem", right: "2rem",
              background: "none", border: "none",
              color: "rgba(240,237,232,0.5)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.5)")}
          >
            <X size={22} strokeWidth={1.2} />
          </button>

          {/* Lecteur */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: "1100px" }}
          >
            <div style={{
              aspectRatio: "16/9",
              background: "#0a0a0a",
              border: "1px solid rgba(240,237,232,0.07)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: "1rem",
            }}>
              {/*
                ── Pour ajouter le showreel ──
                Remplacez ce bloc par :
                <iframe
                  src="https://www.youtube-nocookie.com/embed/VOTRE_ID?autoplay=1"
                  style={{ position:"absolute", inset:0, width:"100%", height:"100%", border:"none" }}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="23" stroke="rgba(240,237,232,0.12)" strokeWidth="1"/>
                <path d="M20 16L34 24L20 32V16Z" fill="rgba(240,237,232,0.2)"/>
              </svg>
              <p style={{
                fontSize: "0.62rem", letterSpacing: "0.2em",
                textTransform: "uppercase", color: "rgba(240,237,232,0.2)",
              }}>
                Showreel à venir
              </p>
            </div>

            <div style={{
              display: "flex", justifyContent: "space-between",
              padding: "1rem 0 0",
              fontSize: "0.72rem",
            }}>
              <span style={{
                fontFamily: "var(--font-playfair)", fontStyle: "italic",
                color: "rgba(240,237,232,0.5)",
              }}>Jeremy Rondeau — Showreel</span>
              <span style={{ color: "rgba(240,237,232,0.2)", letterSpacing: "0.08em" }}>2024</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
