"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Surligner le lien actif selon la section visible
      const sections = links.map((l) => document.querySelector(l.href));
      const scrollY = window.scrollY + 120;
      sections.forEach((section, i) => {
        if (!section) return;
        const el = section as HTMLElement;
        if (scrollY >= el.offsetTop && scrollY < el.offsetTop + el.offsetHeight) {
          setActive(links[i].href);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(250,250,248,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E4DF" : "1px solid transparent",
      }}
    >
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2.5rem",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "2.5rem",
      }}>
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => go(l.href)}
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.07em",
              color: active === l.href ? "#0D0D0D" : "#aaa",
              fontWeight: active === l.href ? 500 : 400,
              transition: "color 0.2s",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.25rem 0",
              borderBottom: active === l.href ? "1px solid #0D0D0D" : "1px solid transparent",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
            onMouseLeave={(e) => (e.currentTarget.style.color = active === l.href ? "#0D0D0D" : "#aaa")}
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
}
