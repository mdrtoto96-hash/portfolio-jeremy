"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,248,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #E5E4DF" : "1px solid transparent",
      }}
    >
      <div className="w-full px-10 md:px-16 py-5 flex items-center justify-end">
        <nav className="flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              style={{
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                color: "#888",
                transition: "color 0.2s",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0D0D0D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
