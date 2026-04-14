"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col justify-center"
      style={{ minHeight: "100vh", paddingTop: "5rem" }}
    >
      {/* Tag haut */}
      <motion.div
        className="flex justify-between items-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase" }}>
          Vidéaste & Réalisateur
        </span>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.1em", color: "#aaa" }}>
          Paris — Disponible
        </span>
      </motion.div>

      {/* Nom */}
      <div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(4rem, 11vw, 10rem)",
              fontWeight: 500,
              lineHeight: 0.9,
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
            transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(4rem, 11vw, 10rem)",
              fontWeight: 400,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "#0D0D0D",
            }}
          >
            Rondeau
          </motion.h1>
        </div>
      </div>

      {/* Bas du hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        style={{
          marginTop: "3.5rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "#666", maxWidth: "360px" }}>
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{
          marginTop: "4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          color: "#ccc",
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ width: "1px", height: "36px", background: "#ccc" }}
        />
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Défiler</span>
      </motion.div>
    </section>
  );
}
