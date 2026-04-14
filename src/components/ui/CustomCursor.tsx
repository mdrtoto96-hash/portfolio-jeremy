"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const isExpanded = useRef(false);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const enter = () => {
      isExpanded.current = true;
      ringRef.current?.classList.add("cursor-expanded");
    };
    const leave = () => {
      isExpanded.current = false;
      ringRef.current?.classList.remove("cursor-expanded");
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      {/* Dot précis */}
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
      />
      {/* Ring avec lag */}
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
