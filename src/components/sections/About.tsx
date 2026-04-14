"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "Direction de la photographie",
  "Colorimétrie DaVinci Resolve",
  "Montage Premiere Pro",
  "Motion Design After Effects",
  "Tournage drone",
  "Son et mixage",
  "Direction artistique",
  "Production exécutive",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-20">
          <div className="w-6 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[9px] tracking-[0.5em] uppercase">04</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Colonne gauche */}
          <div>
            <div className="overflow-hidden mb-6">
              <motion.h2
                className="font-display text-[clamp(36px,5vw,72px)] font-bold text-[#f0ede8] leading-tight"
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                À propos
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-2">
              <motion.h2
                className="font-display text-[clamp(36px,5vw,72px)] font-bold text-transparent leading-tight"
                style={{ WebkitTextStroke: "1px rgba(240,237,232,0.2)" }}
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
              >
                de moi
              </motion.h2>
            </div>

            {/* Photo placeholder */}
            <motion.div
              className="mt-12 relative aspect-[3/4] max-w-sm overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-[#111]" />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent z-10" />
              {/* Placeholder silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[rgba(255,255,255,0.05)] text-center">
                  <div className="font-display text-8xl font-bold">JR</div>
                  <div className="text-xs tracking-widest mt-2">Photo ici</div>
                </div>
              </div>
              {/* Bords */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#c9a84c] z-20" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#c9a84c] z-20" />
              {/* Nom sur la photo */}
              <div className="absolute bottom-6 left-6 z-20">
                <p className="font-display text-lg font-bold text-[#f0ede8]">Jeremy Rondeau</p>
                <p className="text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase mt-1">Vidéaste & Réalisateur</p>
              </div>
            </motion.div>
          </div>

          {/* Colonne droite */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Citation */}
              <div className="mb-10 pl-6 border-l-2 border-[#c9a84c]">
                <p className="font-display text-xl md:text-2xl text-[#f0ede8] leading-relaxed italic">
                  "Chaque projet est une histoire à raconter. Mon rôle est de trouver la meilleure façon de la mettre en images."
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-[#6b6b6b] text-sm leading-relaxed mb-12">
                <p>
                  Vidéaste et réalisateur passionné, je travaille depuis plus de 8 ans dans l'image.
                  Formé à l'École de l'Image, j'ai développé un style reconnaissable :
                  cinématographique, émotionnel et ancré dans le réel.
                </p>
                <p>
                  J'interviens sur des projets variés — clips musicaux, publicités, courts-métrages,
                  documentaires et films d'entreprise — avec toujours la même exigence visuelle.
                </p>
                <p>
                  Basé à Paris, disponible partout en France et à l'international.
                </p>
              </div>

              {/* Skills */}
              <div className="mb-12">
                <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-6">Compétences</p>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 text-[11px] text-[#6b6b6b] tracking-wide"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.06 }}
                    >
                      <span className="w-1 h-1 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Équipement */}
              <div className="pt-8 border-t border-[rgba(255,255,255,0.06)]">
                <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-4">Équipement principal</p>
                <p className="text-[#6b6b6b] text-[11px] leading-relaxed">
                  Sony A7S III / Sony FX3 — DJI Ronin 4D — Sigma Art — Sony G Master
                  <br />
                  DJI Mavic 3 Cine — Aputure 600D — DaVinci Resolve Studio
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
