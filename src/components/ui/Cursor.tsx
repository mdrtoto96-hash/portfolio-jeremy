"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot  = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rx = 0, ry = 0;
    let mx = 0, my = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.left = `${mx}px`;
        dot.current.style.top  = `${my}px`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      rx = lerp(rx, mx, 0.13);
      ry = lerp(ry, my, 0.13);
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top  = `${ry}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    // Hover sur éléments interactifs
    const onEnter = () => ring.current?.classList.add("hovering");
    const onLeave = () => ring.current?.classList.remove("hovering");
    const targets = () => document.querySelectorAll("a, button, [role='button']");
    const bind = () => targets().forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    bind();
    const observer = new MutationObserver(bind);
    observer.observe(document.body, { childList: true, subtree: true });

    // ── Plein écran : masque le curseur custom, laisse le curseur natif ──
    const onFullscreen = () => {
      const d = dot.current;
      const r = ring.current;
      if (!d || !r) return;
      const inFs = !!document.fullscreenElement;
      d.style.display = inFs ? "none" : "";
      r.style.display = inFs ? "none" : "";
    };

    document.addEventListener("fullscreenchange", onFullscreen);
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("fullscreenchange", onFullscreen);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
