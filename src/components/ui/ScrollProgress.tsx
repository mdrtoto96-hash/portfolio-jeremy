"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => {
      if (!barRef.current) return;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      barRef.current.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        position: "fixed",
        top: 0, left: 0,
        height: "2px",
        width: "0%",
        background: "linear-gradient(90deg, rgba(240,237,232,0.3) 0%, #F0EDE8 100%)",
        boxShadow: "0 0 8px rgba(240,237,232,0.4)",
        zIndex: 100,
        transition: "width 0.08s linear",
        pointerEvents: "none",
      }}
    />
  );
}
