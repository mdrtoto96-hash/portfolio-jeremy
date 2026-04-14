"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, X, Volume2, VolumeX } from "lucide-react";

export default function Showreel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [open, setOpen] = useState(false);

  return (
    <section id="showreel" ref={ref} className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Titre section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-6 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[9px] tracking-[0.5em] uppercase">02</span>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            className="font-display text-[clamp(36px,6vw,80px)] font-bold text-[#f0ede8] leading-tight"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            Showreel 2024
          </motion.h2>
        </div>
      </div>

      {/* Vidéo placeholder */}
      <motion.div
        className="max-w-7xl mx-auto relative aspect-video bg-[#111] overflow-hidden group"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent z-10" />

        {/* Image placeholder cinématique */}
        <div
          className="absolute inset-0 bg-[#111]"
          style={{
            backgroundImage: `
              linear-gradient(135deg, rgba(201,168,76,0.03) 0%, transparent 50%),
              repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px),
              repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(255,255,255,0.01) 60px, rgba(255,255,255,0.01) 61px)
            `,
          }}
        />

        {/* Play button */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <motion.button
            onClick={() => setOpen(true)}
            className="group/btn relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 rounded-full border border-[rgba(201,168,76,0.3)] group-hover/btn:border-[#c9a84c] transition-colors duration-300" />
            <motion.div
              className="absolute inset-0 rounded-full border border-[#c9a84c]"
              animate={{ scale: [1, 1.4, 1.4], opacity: [0.6, 0, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            />
            <Play className="text-[#c9a84c] ml-1" size={28} fill="currentColor" />
          </motion.button>
          <p className="mt-6 text-[#6b6b6b] text-[10px] tracking-[0.5em] uppercase">
            Lancer le showreel
          </p>
        </div>

        {/* Durée */}
        <div className="absolute bottom-4 right-4 z-20 text-[#6b6b6b] text-[10px] tracking-widest">
          02:47
        </div>

        {/* Bords décoratifs */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[rgba(201,168,76,0.3)] z-20" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[rgba(201,168,76,0.3)] z-20" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[rgba(201,168,76,0.3)] z-20" />
      </motion.div>

      {/* Stats */}
      <motion.div
        className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { value: "50+", label: "Projets réalisés" },
          { value: "8", label: "Années d'expérience" },
          { value: "30+", label: "Clients satisfaits" },
          { value: "5M+", label: "Vues générées" },
        ].map((stat) => (
          <div key={stat.label} className="text-center border-t border-[rgba(255,255,255,0.06)] pt-8">
            <div className="font-display text-4xl md:text-5xl font-bold text-[#c9a84c] mb-2">
              {stat.value}
            </div>
            <div className="text-[#6b6b6b] text-[10px] tracking-[0.4em] uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Modal vidéo */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#c9a84c] transition-colors"
          >
            <X size={28} />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-[#111] flex items-center justify-center">
            <p className="text-[#6b6b6b] text-sm tracking-widest">
              — Insérez votre lien Vimeo/YouTube ici —
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
