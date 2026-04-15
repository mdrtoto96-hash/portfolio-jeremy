"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  {
    period: "2019 — 2025",
    role: "Électricien",
    company: "FAECE — La Garnache",
    desc: "6 ans dans le secteur de l'électricité. Expérience du terrain, rigueur technique et sens de l'organisation. Reconversion volontaire vers la vidéo, ma véritable passion.",
    current: false,
  },
  {
    period: "2024",
    role: "Formation Autodidacte",
    company: "Auto-formation",
    desc: "Apprentissage en autonomie complète : tournage, cadrage, montage sur DaVinci Resolve, colorimétrie, prises de vue drone. Passage de l'iPhone au matériel professionnel Sony. Aucune école, juste de la pratique et de la détermination.",
    current: false,
  },
  {
    period: "Oct. 2024",
    role: "Prestations Événementielles",
    company: "Association — Bénévolat",
    desc: "Captation vidéo de festivals, concerts et événements associatifs. Réalisation d'aftermovies, mise en valeur de l'ambiance et de l'énergie live.",
    current: true,
  },
  {
    period: "Juil. 2025",
    role: "Création de JRV Production",
    company: "Micro-entreprise",
    desc: "Officialisation de mon activité avec la création de ma micro-entreprise. Tournage, montage et colorimétrie pour des entreprises, associations et événements. Gestion complète des projets de A à Z.",
    current: true,
  },
  {
    period: "2025 — 2026",
    role: "Prestations Corporate & Événementiel",
    company: "Clients entreprises & associations",
    desc: "Réalisation de films d'entreprise et de captations événementielles pour des clients locaux : Délices & Services, Atelier Auzance, Élémente Experience et d'autres projets associatifs.",
    current: true,
  },
];

const skills = [
  "Traitement de l'image",
  "Montage vidéo",
  "Cadrage et composition",
  "Prises de vue aériennes (drone FPV)",
  "Production de contenu vidéo",
  "Organisation de projet",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 1.7fr) 1px minmax(0, 1fr)",
        alignItems: "start",
      }}>

        {/* ── Colonne gauche : Timeline ── */}
        <div style={{ paddingRight: "4rem" }}>
          <p style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(2rem, 2.8vw, 3.2rem)", fontWeight: 400,
            color: "#F0EDE8", marginBottom: "2.5rem",
          }}>
            Parcours
          </p>

          <div style={{ position: "relative" }}>
            {/* Ligne verticale */}
            <div style={{
              position: "absolute",
              left: "7px",
              top: "6px",
              bottom: "6px",
              width: "1px",
              background: "rgba(240,237,232,0.1)",
            }} />

            {timeline.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "16px 1fr",
                  gap: "1.5rem",
                  paddingBottom: i < timeline.length - 1 ? "2.2rem" : 0,
                }}
              >
                {/* Point sur la timeline */}
                <div style={{ paddingTop: "6px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    background: item.current ? "#E05C3A" : "transparent",
                    border: item.current ? "none" : "1px solid rgba(240,237,232,0.3)",
                    flexShrink: 0,
                    zIndex: 1,
                  }} />
                </div>

                {/* Contenu */}
                <div>
                  <span style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: item.current ? "#E05C3A" : "rgba(240,237,232,0.35)",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}>
                    {item.period}
                  </span>
                  <p style={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "#F0EDE8",
                    marginBottom: "0.15rem",
                  }}>
                    {item.role}
                  </p>
                  <p style={{
                    fontSize: "0.73rem",
                    color: "rgba(240,237,232,0.4)",
                    marginBottom: "0.6rem",
                    letterSpacing: "0.03em",
                  }}>
                    {item.company}
                  </p>
                  <p style={{
                    fontSize: "0.88rem",
                    color: "rgba(240,237,232,0.5)",
                    lineHeight: 1.75,
                  }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Séparateur vertical ── */}
        <div style={{ background: "rgba(240,237,232,0.1)", alignSelf: "stretch" }} />

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
            fontSize: "clamp(2rem, 2.8vw, 3.2rem)", fontWeight: 400,
            color: "#F0EDE8", marginBottom: "2rem",
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
                borderBottom: "1px solid rgba(240,237,232,0.1)",
                fontSize: "0.9rem", color: "rgba(240,237,232,0.6)",
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
