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
    title: "Atelier Auzance",
    category: "Film d'entreprise",
    year: "2026",
    videoUrl: "https://youtu.be/Fv2i3ralRnU",
    thumbnail: "/images/atelier-auzance-2026.png",
  },
  {
    id: 2,
    title: "La Petite Conv / Le Grand Duc",
    category: "Événementiel",
    year: "2026",
    videoUrl: "https://youtu.be/UjXMPRV_6oU",
    thumbnail: "/images/laptiteconv_le-grand-duc-2026-.png",
  },
  {
    id: 3,
    title: "Délices & Services",
    category: "Film d'entreprise",
    year: "2025",
    videoUrl: "https://youtu.be/ON_k8_j0V9M",
    thumbnail: "/images/delice-et-services.png",
  },
  {
    id: 4,
    title: "Les Jardins des Pagus",
    category: "Publicité",
    year: "2025",
    videoUrl: "https://youtu.be/NiNXI6SiHyM",
    thumbnail: "/images/les-jardins-des-pagus-2025-.png",
  },
  {
    id: 5,
    title: "La Nuit Sans Fin",
    category: "Événementiel",
    year: "2025",
    videoUrl: "https://youtu.be/WO4Df476lqE",
    thumbnail: "/images/las-nuits-sans-fin.png",
  },
  {
    id: 6,
    title: "Élémente Experience",
    category: "Événementiel",
    year: "2025",
    videoUrl: "https://youtu.be/kp0QIf2E_2A",
    thumbnail: "/images/elemente-experience-2025.jpg",
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
    return `https://www.youtube-nocookie.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&color=white&enablejsapi=1`;
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
          background: "#1A1A1A",
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
                color: "rgba(240,237,232,0.2)",
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
            color: "rgba(240,237,232,0.5)",
            background: "rgba(13,13,13,0.75)",
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
          className="card-title"
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "#F0EDE8",
            letterSpacing: "-0.01em",
            transition: "color 0.2s",
            ...(hovered ? { color: "#E05C3A" } : {}),
          }}
        >
          {project.title}
        </span>
        <span className="card-year" style={{ fontSize: "0.75rem", color: "rgba(240,237,232,0.35)" }}>{project.year}</span>
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const videoRef = useRef<HTMLVideoElement>(null);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onIframeLoad = () => {
    const send = () => {
      const win = iframeRef.current?.contentWindow;
      if (!win) return;
      // Volume à 50%
      win.postMessage(JSON.stringify({ event: "command", func: "setVolume", args: [50] }), "*");
      // Qualité max disponible
      win.postMessage(JSON.stringify({ event: "command", func: "setPlaybackQualityRange", args: ["hd1080", "highres"] }), "*");
      win.postMessage(JSON.stringify({ event: "command", func: "setPlaybackQuality", args: ["hd1080"] }), "*");
    };
    setTimeout(send, 800);
    setTimeout(send, 1800);
  };

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
                ref={iframeRef}
                src={embedUrl}
                onLoad={onIframeLoad}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
              />
            ) : embedUrl && local ? (
              <video
                ref={videoRef}
                src={embedUrl}
                controls
                autoPlay
                controlsList="nodownload"
                onLoadedMetadata={() => { if (videoRef.current) videoRef.current.volume = 0.5; }}
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
            borderBottom: "1px solid rgba(240,237,232,0.1)",
            paddingBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              fontStyle: "italic",
              fontSize: "clamp(2rem, 2.8vw, 3.2rem)",
              color: "#F0EDE8",
            }}
          >
            Portfolio
          </span>
          <span style={{ fontSize: "0.72rem", letterSpacing: "0.12em", color: "rgba(240,237,232,0.35)", textTransform: "uppercase" }}>
            {projects.length} projets
          </span>
        </div>

        {/* Grille cartes */}
        <div
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
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
