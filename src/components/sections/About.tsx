"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { X } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [lightbox, setLightbox] = useState(false);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(240,237,232,0.1)",
        borderBottom: "1px solid rgba(240,237,232,0.1)",
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: "5rem",
        alignItems: "center",
      }}>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo Jeremy .jpg"
            alt="Jeremy Rondeau"
            onClick={() => setLightbox(true)}
            style={{
              width: "320px",
              height: "420px",
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
              flexShrink: 0,
              cursor: "zoom-in",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          />
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
            fontSize: "clamp(2rem, 2.8vw, 3.2rem)", fontWeight: 400,
            color: "#F0EDE8", marginBottom: "2rem",
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
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Passionné par l&apos;image depuis mon plus jeune âge, j&apos;ai construit mon parcours autour
              d&apos;une conviction simple : chaque histoire mérite d&apos;être racontée avec soin et précision.
              Le cadre, la lumière, le montage — chaque détail compte pour créer une émotion juste.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Après plusieurs années à travailler sur des projets variés — clips musicaux, films publicitaires,
              documentaires — j&apos;ai développé une vraie sensibilité visuelle et la capacité de m&apos;adapter
              à des univers créatifs très différents, tout en apportant ma propre vision.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Je suis aujourd&apos;hui à la recherche d&apos;un poste de vidéaste au sein d&apos;une agence de
              communication pour mettre mes compétences au service de projets ambitieux et continuer
              à évoluer dans un environnement stimulant.
            </p>
          </div>

          {/* Infos pratiques */}
          <div style={{
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(240,237,232,0.1)",
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
                  textTransform: "uppercase", color: "rgba(240,237,232,0.35)", marginBottom: "0.3rem",
                }}>
                  {item.label}
                </p>
                <p style={{ fontSize: "0.85rem", color: "#F0EDE8" }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* ── Lightbox photo plein écran ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(13,13,13,0.96)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "2rem",
          }}
        >
          <button
            onClick={() => setLightbox(false)}
            style={{
              position: "absolute", top: "2rem", right: "2rem",
              background: "none", border: "none",
              color: "rgba(240,237,232,0.5)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F0EDE8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,237,232,0.5)")}
          >
            <X size={22} strokeWidth={1.2} />
          </button>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/photo Jeremy .jpg"
            alt="Jeremy Rondeau"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      )}
    </section>
  );
}
