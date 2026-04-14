"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Portfolio", href: "top" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#competences" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (window.scrollY < 100) { setActive("top"); return; }
      const ids = ["contact", "competences", "experience", "portfolio"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActive("#" + id);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    if (href === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.3s",
      background: scrolled ? "rgba(250,250,248,0.96)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid #E5E4DF" : "1px solid transparent",
    }}>
      <div style={{
        maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem",
        height: "56px", display: "flex", alignItems: "center",
        justifyContent: "flex-end", gap: "2.5rem",
      }}>
        {links.map((l) => {
          const isActive = active === l.href;
          return (
            <button key={l.href} onClick={() => go(l.href)} style={{
              fontSize: "0.75rem", letterSpacing: "0.07em",
              color: isActive ? "#0D0D0D" : "#aaa",
              fontWeight: isActive ? 500 : 400,
              transition: "color 0.2s", background: "none", border: "none",
              cursor: "pointer", padding: "0.25rem 0",
              borderBottom: isActive ? "1px solid #0D0D0D" : "1px solid transparent",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#0D0D0D" : "#aaa")}
            >
              {l.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
