"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fn = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      height: "2px",
      width: `${progress}%`,
      background: "linear-gradient(90deg, rgba(240,237,232,0.3) 0%, #F0EDE8 100%)",
      boxShadow: "0 0 8px rgba(240,237,232,0.4)",
      zIndex: 100,
      transition: "width 0.08s linear",
      pointerEvents: "none",
    }} />
  );
}
