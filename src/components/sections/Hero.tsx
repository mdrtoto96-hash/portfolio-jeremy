"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-end"
      style={{ padding: "0 2rem 5rem", paddingTop: "8rem" }}
    >
      {/* Ligne supérieure */}
      <div className="w-full flex justify-between items-start mb-auto pt-8" style={{ paddingTop: "6rem" }}>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#888", textTransform: "uppercase" }}>
          Vidéaste & Réalisateur
        </span>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#888" }}>
          Paris, France — Disponible
        </span>
      </div>

      {/* Nom principal */}
      <div className="mt-auto">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 500,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#0D0D0D",
            }}
          >
            Jeremy
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 400,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              color: "#0D0D0D",
            }}
          >
            Rondeau
          </motion.h1>
        </div>

        {/* Divider + description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mt-10 gap-6"
        >
          <div style={{ width: "1px", height: "60px", background: "#0D0D0D", flexShrink: 0 }} className="hidden md:block" />
          <p
            className="max-w-md"
            style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#555", paddingLeft: "0" }}
          >
            Je transforme vos idées en images qui marquent les esprits.
            Clips, publicités, documentaires, courts-métrages.
          </p>
          <button
            onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.9rem 2.2rem",
              border: "1px solid #0D0D0D",
              background: "transparent",
              color: "#0D0D0D",
              transition: "all 0.25s",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0D0D0D";
              e.currentTarget.style.color = "#FAFAF8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#0D0D0D";
            }}
          >
            Voir le portfolio →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
