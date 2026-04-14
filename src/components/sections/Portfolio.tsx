"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    num: "01",
    title: "Lumières de Minuit",
    type: "Clip Musical",
    year: "2024",
    desc: "Atmosphère nocturne, contraste lumière / ombre.",
  },
  {
    num: "02",
    title: "Urban Soul",
    type: "Publicité",
    year: "2024",
    desc: "Campagne streetwear — identité visuelle forte.",
  },
  {
    num: "03",
    title: "Fragments",
    type: "Court-métrage",
    year: "2023",
    desc: "Exploration cinématographique de la mémoire.",
  },
  {
    num: "04",
    title: "Resonance",
    type: "Documentaire",
    year: "2023",
    desc: "Portrait intime d'un musicien de jazz.",
  },
  {
    num: "05",
    title: "Horizons",
    type: "Film d'entreprise",
    year: "2023",
    desc: "Vision d'une entreprise innovante.",
  },
  {
    num: "06",
    title: "Echo",
    type: "Clip Musical",
    year: "2022",
    desc: "Clip onirique pour un artiste indépendant.",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="portfolio" ref={ref} className="w-full" style={{ padding: "7rem 2rem" }}>
      {/* Titre */}
      <div className="flex items-baseline gap-6 mb-16" style={{ paddingLeft: "0" }}>
        <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0D0D0D" }}>
          Portfolio
        </span>
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "#888", textTransform: "uppercase" }}>
          {projects.length} projets
        </span>
      </div>

      {/* Liste */}
      <div style={{ borderTop: "1px solid #E5E4DF" }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group"
            style={{
              display: "grid",
              gridTemplateColumns: "3rem 1fr auto auto",
              alignItems: "center",
              gap: "2rem",
              padding: "1.6rem 0",
              borderBottom: "1px solid #E5E4DF",
              transition: "background 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F3F2EE")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Numéro */}
            <span style={{ fontSize: "0.7rem", color: "#bbb", letterSpacing: "0.08em" }}>{p.num}</span>

            {/* Titre + desc */}
            <div>
              <p style={{ fontSize: "1.05rem", fontWeight: 500, color: "#0D0D0D", letterSpacing: "-0.01em" }}>
                {p.title}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#888", marginTop: "0.2rem" }}>{p.desc}</p>
            </div>

            {/* Type */}
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#888",
                display: "none",
              }}
              className="md:block"
            >
              {p.type}
            </span>

            {/* Année */}
            <span style={{ fontSize: "0.8rem", color: "#bbb" }}>{p.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
