"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";

const W = "100%";
const MAX = "1520px";
const PAD = "0 5rem";
const NAV_H = 52;
const SHOWREEL_URL = "https://www.youtube-nocookie.com/embed/dlXrXRIfGts?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&color=white&enablejsapi=1";

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
  transition: "color 0.2s", padding: 0,
};

function ShowreelModal({ onClose }: { onClose: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sendTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => { sendTimers.current.forEach(clearTimeout); };
  }, []);

  const onIframeLoad = () => {
    const send = () => {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      win.postMessage(JSON.stringify({ event: "command", func: "setVolume", args: [50] }), "*");
      win.postMessage(JSON.stringify({ event: "command", func: "setPlaybackQuality", args: ["hd1080"] }), "*");
    };
    sendTimers.current.forEach(clearTimeout);
    sendTimers.current = [setTimeout(send, 800), setTimeout(send, 1800)];
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0,
        background: "rgba(13,13,13,0.92)",
        zIndex: 9000,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "2rem",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: "1.5rem", right: "1.5rem",
          background: "none", border: "none", color: "#fff",
          cursor: "pointer", padding: "0.5rem",
        }}
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: "900px" }}
      >
        <div style={{ aspectRatio: "16/9", background: "#111", position: "relative" }}>
          <iframe
            ref={iframeRef}
            src={SHOWREEL_URL}
            onLoad={onIframeLoad}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Showreel"
          />
        </div>

        <div style={{
          display: "flex", justifyContent: "space-between",
          padding: "1rem 0 0", color: "#999", fontSize: "0.8rem",
        }}>
          <span style={{ color: "#fff", fontWeight: 500 }}>Showreel</span>
          <span>Jeremy Rondeau — 2026</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showreel, setShowreel] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
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
      <div className="hero-full" style={{ width: W, overflow: "hidden", position: "relative" }}>
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
            className="hero-t3"
            onClick={() => setShowreel(true)}
            style={{
              marginTop: "2.5rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
              background: "rgba(240,237,232,0.1)",
              border: "1px solid rgba(240,237,232,0.55)",
              color: "#F0EDE8",
              padding: "0.9rem 2.2rem",
              fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase",
              boxShadow: "0 2px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
              transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(240,237,232,0.18)";
              e.currentTarget.style.borderColor = "rgba(240,237,232,0.9)";
              e.currentTarget.style.boxShadow = "0 4px 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.14)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(240,237,232,0.1)";
              e.currentTarget.style.borderColor = "rgba(240,237,232,0.55)";
              e.currentTarget.style.boxShadow = "0 2px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)";
            }}
          >
            <span style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "18px", height: "18px",
              border: "1px solid currentColor", borderRadius: "50%",
              flexShrink: 0,
            }}>
              <svg width="7" height="7" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "1px" }}>
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </span>
            Showreel
          </button>

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

      {/* ── Modale Showreel ── */}
      <AnimatePresence>
        {showreel && <ShowreelModal onClose={() => setShowreel(false)} />}
      </AnimatePresence>

    </div>
  );
}
