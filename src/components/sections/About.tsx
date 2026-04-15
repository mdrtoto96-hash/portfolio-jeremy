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
      className="mob-section"
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
        borderTop: "1px solid rgba(240,237,232,0.07)",
      }}
    >
      {/* Titre — même style que Portfolio */}
      <div style={{
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        marginBottom: "3rem",
        borderBottom: "1px solid rgba(240,237,232,0.1)",
        paddingBottom: "1.5rem",
      }}>
        <span style={{
          fontFamily: "var(--font-playfair)", fontStyle: "italic",
          fontSize: "clamp(2rem, 2.8vw, 3.2rem)",
          color: "#F0EDE8",
        }}>
          À propos
        </span>
      </div>

      <div className="about-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "5rem",
        alignItems: "center",
      }}>

        {/* ── Photo ── */}
        <motion.div
          className="about-photo-wrap"
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "2rem" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="about-photo-img"
            src="/images/photo-jeremy-.jpg"
            alt="Jeremy Rondeau"
            onClick={() => setLightbox(true)}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              cursor: "zoom-in",
              transition: "opacity 0.2s, outline-color 0.3s",
              outline: "1px solid rgba(240,237,232,0.18)",
              outlineOffset: "-1px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.outlineColor = "rgba(240,237,232,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.outlineColor = "rgba(240,237,232,0.18)";
            }}
          />
        </motion.div>

        {/* ── Texte ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ minWidth: 0 }}
        >
          <div className="about-text" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Je suis vidéaste depuis un an et demi et j&apos;adore vraiment
              ce métier. Pour moi, la vidéo est magique, car elle permet de partager des émotions et des
              sensations que les mots ne peuvent pas décrire. Grâce à une vidéo, les gens peuvent vivre
              un moment à fond même s&apos;ils n&apos;étaient pas là.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Ce que j&apos;aime par-dessus tout, c&apos;est le terrain. Rencontrer du monde, discuter et
              capter l&apos;ambiance d&apos;un lieu. Mon parcours est un peu particulier, car j&apos;ai commencé
              avec un iPhone quand je travaillais encore dans l&apos;électricité. J&apos;ai tellement aimé ça
              que j&apos;ai investi dans du vrai matériel et j&apos;ai tout appris par moi-même. À force de
              pratique et de tutos, je suis devenu autonome sur le tournage, le cadrage, le montage
              et la colorimétrie.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Aujourd&apos;hui, je travaille beaucoup avec mon association sur des événements. C&apos;est ce
              qui m&apos;anime le plus : capturer l&apos;énergie des gens et la faire revivre à l&apos;écran.
              Le côté humain et créatif est super important pour moi. J&apos;aime travailler avec d&apos;autres
              passionnés et échanger des idées pour sortir le meilleur résultat possible.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.9, color: "rgba(240,237,232,0.6)" }}>
              Je suis maintenant à la recherche de nouvelles opportunités pour évoluer à fond. Mon but
              est de participer à des projets plus importants, je suis prêt à relever de nouveaux
              défis et à montrer ce que je suis capable de faire !
            </p>
          </div>

          {/* Infos pratiques */}
          <div style={{
            marginTop: "2.5rem",
            paddingTop: "0.5rem",
            display: "flex",
            gap: "4rem",
            flexWrap: "wrap",
          }}>
            {[
              { label: "Localisation", value: "Vendée, France" },
              { label: "Disponibilité", value: "Immédiate" },
              { label: "Mobilité", value: "Pays de la Loire" },
            ].map((item) => (
              <div key={item.label}>
                <p style={{
                  fontSize: "0.62rem", letterSpacing: "0.15em",
                  textTransform: "uppercase", color: "rgba(240,237,232,0.5)", marginBottom: "0.3rem",
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
            src="/images/photo-jeremy-.jpg"
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
