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
      style={{ paddingTop: "5rem", paddingBottom: "6rem", borderTop: "1px solid #E5E4DF" }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.7fr) 1px minmax(0, 1fr)",
        alignItems: "start",
      }}>

        {/* ── Colonne gauche : Expérience ── */}
        <div style={{ paddingRight: "4rem" }}>
          <p style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400,
            color: "#0D0D0D", marginBottom: "2rem",
          }}>
            Expérience
          </p>

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: "1.5rem",
                padding: "1.6rem 0",
                borderBottom: "1px solid #E5E4DF",
              }}
            >
              <span style={{ fontSize: "0.72rem", color: "#999", letterSpacing: "0.03em", paddingTop: "0.1rem" }}>
                {exp.period}
              </span>
              <div>
                <p style={{ fontSize: "0.92rem", fontWeight: 500, color: "#0D0D0D", marginBottom: "0.15rem" }}>
                  {exp.role}
                </p>
                <p style={{ fontSize: "0.73rem", color: "#E05C3A", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                  {exp.company}
                </p>
                <p style={{ fontSize: "0.82rem", color: "#666", lineHeight: 1.7 }}>
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Séparateur vertical ── */}
        <div style={{ background: "#E5E4DF", alignSelf: "stretch" }} />

        {/* ── Colonne droite : Compétences ── */}
        <motion.div
          id="competences"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ paddingLeft: "4rem" }}
        >
          <p style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400,
            color: "#0D0D0D", marginBottom: "2rem",
          }}>
            Compétences
          </p>

          {skills.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
              style={{
                padding: "0.9rem 0",
                borderBottom: "1px solid #E5E4DF",
                fontSize: "0.83rem", color: "#444",
                display: "flex", alignItems: "center", gap: "0.75rem",
              }}
            >
              <span style={{ width: "4px", height: "4px", background: "#E05C3A", borderRadius: "50%", flexShrink: 0 }} />
              {s}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
