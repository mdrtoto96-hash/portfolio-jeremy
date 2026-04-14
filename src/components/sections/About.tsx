"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid #E5E4DF",
        borderBottom: "1px solid #E5E4DF",
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "260px 1fr",
        gap: "5rem",
        alignItems: "start",
      }}>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/*
            Pour ajouter votre photo, remplacez ce bloc par :
            <img
              src="/photo.jpg"
              alt="Jeremy Rondeau"
              style={{ width: "260px", height: "340px", objectFit: "cover", display: "block" }}
            />
          */}
          <div style={{
            width: "260px",
            height: "340px",
            background: "#EDECE8",
            border: "1px dashed #C8C6C0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.7rem",
            flexShrink: 0,
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#C0BDB7" strokeWidth="0.9">
              <circle cx="12" cy="8" r="4.5" />
              <path d="M3 21c0-5 4-8.5 9-8.5s9 3.5 9 8.5" />
            </svg>
            <span style={{
              fontSize: "0.58rem", letterSpacing: "0.12em", color: "#C0BDB7",
              textTransform: "uppercase", textAlign: "center", lineHeight: 1.6,
            }}>
              Votre photo
            </span>
          </div>
        </motion.div>

        {/* ── Texte ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ minWidth: 0 }}
        >
          <p style={{
            fontFamily: "var(--font-playfair)", fontStyle: "italic",
            fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 400,
            color: "#0D0D0D", marginBottom: "2rem",
          }}>
            À propos
          </p>

          {/*
            ── TEXTE DE MOTIVATION ──
            Remplacez ce texte par votre présentation personnelle.
            Paragraphe 1 : votre passion, votre approche
            Paragraphe 2 : votre expérience et ce qui vous différencie
            Paragraphe 3 : ce que vous recherchez
          */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", maxWidth: "620px" }}>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#444" }}>
              Passionné par l&apos;image depuis mon plus jeune âge, j&apos;ai construit mon parcours autour
              d&apos;une conviction simple : chaque histoire mérite d&apos;être racontée avec soin et précision.
              Le cadre, la lumière, le montage — chaque détail compte pour créer une émotion juste.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#444" }}>
              Après plusieurs années à travailler sur des projets variés — clips musicaux, films publicitaires,
              documentaires — j&apos;ai développé une vraie sensibilité visuelle et la capacité de m&apos;adapter
              à des univers créatifs très différents, tout en apportant ma propre vision.
            </p>
            <p style={{ fontSize: "0.9rem", lineHeight: 1.9, color: "#444" }}>
              Je suis aujourd&apos;hui à la recherche d&apos;un poste de vidéaste au sein d&apos;une agence de
              communication pour mettre mes compétences au service de projets ambitieux et continuer
              à évoluer dans un environnement stimulant.
            </p>
          </div>

          {/* Infos pratiques */}
          <div style={{
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid #E5E4DF",
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
          }}>
            {[
              { label: "Localisation", value: "Paris, France" },
              { label: "Disponibilité", value: "Immédiate" },
              { label: "Mobilité", value: "France & International" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{
                  fontSize: "0.62rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "#bbb", marginBottom: "0.3rem",
                }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#0D0D0D" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
