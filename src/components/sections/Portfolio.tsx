"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ─── CONFIG DES PROJETS ──────────────────────────────────────────────────────
// Pour ajouter une vidéo :
//   - YouTube  → videoUrl: "https://www.youtube.com/watch?v=XXXX"
//   - Vimeo    → videoUrl: "https://vimeo.com/XXXX"
//   - Fichier  → videoUrl: "/videos/mon-film.mp4"  (mettre le fichier dans /public/videos/)
// Pour la miniature :
//   - thumbnail: "/images/mon-projet.jpg"  (mettre l'image dans /public/images/)
//   - Laisser vide pour afficher le placeholder gris
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Lumières de Minuit",
    category: "Clip Musical",
    year: "2024",
    videoUrl: "", // ex: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    thumbnail: "",
  },
  {
    id: 2,
    title: "Urban Soul",
    category: "Publicité",
    year: "2024",
    videoUrl: "",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Fragments",
    category: "Court-métrage",
    year: "2023",
    videoUrl: "",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Resonance",
    category: "Documentaire",
    year: "2023",
    videoUrl: "",
    thumbnail: "",
  },
  {
    id: 5,
    title: "Horizons",
    category: "Film d'entreprise",
    year: "2023",
    videoUrl: "",
    thumbnail: "",
  },
  {
    id: 6,
    title: "Echo",
    category: "Clip Musical",
    year: "2022",
    videoUrl: "",
    thumbnail: "",
  },
];

// Convertit une URL YouTube ou Vimeo en URL d'embed
function toEmbedUrl(url: string): string {
  if (!url) return "";

  // YouTube
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0`;
  }

  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
  }

  // Fichier local ou autre
  return url;
}

function isLocalVideo(url: string): boolean {
  return url.startsWith("/") || url.startsWith("blob:");
}

// ─── CARTE VIDÉO ─────────────────────────────────────────────────────────────
function VideoCard({
  project,
  index,
  inView,
  onOpen,
}: {
  project: (typeof projects)[0];
  index: number;
  inView: boolean;
  onOpen: (p: (typeof projects)[0]) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
      }}
    >
      {/* Vignette 16:9 */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          background: "#EDECE8",
          overflow: "hidden",
          borderRadius: "2px",
        }}
      >
        {/* Miniature si disponible */}
        {project.thumbnail && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.thumbnail}
            alt={project.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
        )}

        {/* Overlay hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: hovered ? "rgba(13,13,13,0.35)" : "rgba(13,13,13,0)",
            transition: "background 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Bouton play */}
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "1.5px solid rgba(250,250,248,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1)" : "scale(0.7)",
              transition: "all 0.3s ease",
              background: "rgba(250,250,248,0.12)",
              backdropFilter: "blur(4px)",
            }}
          >
            {/* Triangle play */}
            <div
              style={{
                width: 0,
                height: 0,
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "14px solid rgba(250,250,248,0.95)",
                marginLeft: "3px",
              }}
            />
          </div>
        </div>

        {/* Placeholder texte quand pas de miniature */}
        {!project.thumbnail && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#bbb",
                opacity: hovered ? 0 : 1,
                transition: "opacity 0.2s",
              }}
            >
              Miniature à ajouter
            </span>
          </div>
        )}

        {/* Catégorie coin haut gauche */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            background: "rgba(250,250,248,0.9)",
            padding: "0.2rem 0.5rem",
            backdropFilter: "blur(4px)",
          }}
        >
          {project.category}
        </div>
      </div>

      {/* Info sous la carte */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#0D0D0D",
            letterSpacing: "-0.01em",
            transition: "color 0.2s",
            ...(hovered ? { color: "#E05C3A" } : {}),
          }}
        >
          {project.title}
        </span>
        <span style={{ fontSize: "0.75rem", color: "#bbb" }}>{project.year}</span>
      </div>
    </motion.div>
  );
}

// ─── MODAL LECTEUR ───────────────────────────────────────────────────────────
function VideoModal({
  project,
  onClose,
}: {
  project: (typeof projects)[0] | null;
  onClose: () => void;
}) {
  if (!project) return null;

  const embedUrl = project.videoUrl ? toEmbedUrl(project.videoUrl) : "";
  const local = project.videoUrl ? isLocalVideo(project.videoUrl) : false;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(13,13,13,0.92)",
          zIndex: 9000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        {/* Fermer */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            padding: "0.5rem",
          }}
        >
          <X size={24} />
        </button>

        {/* Contenu */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{ width: "100%", maxWidth: "900px" }}
        >
          <div style={{ aspectRatio: "16/9", background: "#111", position: "relative" }}>
            {embedUrl && !local ? (
              <iframe
                src={embedUrl}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            ) : embedUrl && local ? (
              <video
                src={embedUrl}
                controls
                autoPlay
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", background: "#000" }}
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  color: "#555",
                }}
              >
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  Vidéo non configurée
                </span>
                <span style={{ fontSize: "0.75rem", color: "#444" }}>
                  Ajoutez un lien YouTube, Vimeo ou un fichier MP4
                </span>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 0 0",
              color: "#999",
              fontSize: "0.8rem",
            }}
          >
            <span style={{ color: "#fff", fontWeight: 500 }}>{project.title}</span>
            <span>{project.category} — {project.year}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── SECTION PORTFOLIO ────────────────────────────────────────────────────────
export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [active, setActive] = useState<(typeof projects)[0] | null>(null);

  return (
    <>
      <section id="portfolio" ref={ref} style={{ width: "100%", paddingTop: "2.5rem", paddingBottom: "5rem" }}>
        {/* Titre */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "3rem",
            borderBottom: "1px solid #E5E4DF",
            paddingBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#0D0D0D",
            }}
          >
            Portfolio
          </span>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: "#aaa", textTransform: "uppercase" }}>
            {projects.length} projets
          </span>
        </div>

        {/* Grille cartes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((p, i) => (
            <VideoCard
              key={p.id}
              project={p}
              index={i}
              inView={inView}
              onOpen={setActive}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {active && <VideoModal project={active} onClose={() => setActive(null)} />}
    </>
  );
}
