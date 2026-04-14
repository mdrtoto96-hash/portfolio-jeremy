"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section style={{ paddingTop: "12rem", paddingBottom: "8rem" }}>

      {/* Petite info en haut */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "2.5rem",
        }}
      >
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase" }}>
          Vidéaste & Réalisateur
        </span>
        <span style={{ fontSize: "0.68rem", letterSpacing: "0.1em", color: "#aaa" }}>
          Paris — Disponible
        </span>
      </motion.div>

      {/* Nom — pleine largeur */}
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3.8rem, 10vw, 9.5rem)",
            fontWeight: 500,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#0D0D0D",
          }}
        >
          Jeremy
        </motion.h1>
      </div>

      <div style={{ overflow: "hidden" }}>
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
          style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(3.8rem, 10vw, 9.5rem)",
            fontWeight: 400,
            lineHeight: 0.92,
            letterSpacing: "-0.03em",
            color: "#0D0D0D",
          }}
        >
          Rondeau
        </motion.h1>
      </div>

      {/* Description + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        style={{
          marginTop: "3rem",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#666", maxWidth: "380px" }}>
          Je transforme vos idées en images qui marquent les esprits.
          Clips, publicités, documentaires, courts-métrages.
        </p>

        <button
          onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.85rem 2rem",
            border: "1px solid #0D0D0D",
            background: "transparent",
            color: "#0D0D0D",
            transition: "all 0.25s",
            whiteSpace: "nowrap",
            flexShrink: 0,
            cursor: "pointer",
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

    </section>
  );
}
