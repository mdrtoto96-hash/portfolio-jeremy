"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    period: "2021 — Présent",
    role: "Vidéaste Freelance",
    company: "Indépendant",
    desc: "Réalisation de clips musicaux, films publicitaires et courts-métrages pour des artistes et marques. Direction de la photographie, colorimétrie, montage.",
  },
  {
    period: "2019 — 2021",
    role: "Chef opérateur",
    company: "Studio Lumière, Paris",
    desc: "Direction de la photographie sur des productions publicitaires et institutionnelles. Gestion d'équipes techniques de 5 à 10 personnes.",
  },
  {
    period: "2017 — 2019",
    role: "Cadreur / Monteur",
    company: "Agence Média XYZ",
    desc: "Production de contenus vidéo pour le web et les réseaux sociaux. Tournage, montage et motion design.",
  },
  {
    period: "2015 — 2017",
    role: "Formation",
    company: "École de l'Image, Paris",
    desc: "Diplôme en réalisation audiovisuelle. Spécialisation cinématographie et post-production.",
  },
];

const skills = [
  "Direction de la photographie",
  "Colorimétrie — DaVinci Resolve",
  "Montage — Premiere Pro",
  "Motion Design — After Effects",
  "Tournage drone (certifié)",
  "Sony A7S III / FX3",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full"
      style={{
        padding: "7rem 2rem",
        borderTop: "1px solid #E5E4DF",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "5rem" }} className="lg:grid-cols-[1fr_320px] lg:gap-20">
        {/* Expériences */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0D0D0D",
              display: "block",
              marginBottom: "3rem",
            }}
          >
            Expérience
          </span>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "2rem",
                  padding: "2rem 0",
                  borderBottom: "1px solid #E5E4DF",
                }}
              >
                {/* Période */}
                <div>
                  <span style={{ fontSize: "0.75rem", color: "#888", letterSpacing: "0.04em" }}>
                    {exp.period}
                  </span>
                </div>

                {/* Contenu */}
                <div>
                  <p style={{ fontSize: "1rem", fontWeight: 500, color: "#0D0D0D", marginBottom: "0.2rem" }}>
                    {exp.role}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#E05C3A", marginBottom: "0.8rem", letterSpacing: "0.04em" }}>
                    {exp.company}
                  </p>
                  <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.7 }}>
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compétences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#0D0D0D",
              display: "block",
              marginBottom: "2rem",
            }}
          >
            Compétences
          </span>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                style={{
                  padding: "0.9rem 0",
                  borderBottom: "1px solid #E5E4DF",
                  fontSize: "0.85rem",
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <span style={{ width: "4px", height: "4px", background: "#E05C3A", borderRadius: "50%", flexShrink: 0 }} />
                {s}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
