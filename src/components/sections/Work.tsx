"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Lumières de Minuit",
    category: "Clip Musical",
    year: "2024",
    client: "Artist X",
    description: "Clip atmosphérique explorant les contrastes entre lumière et obscurité.",
    tags: ["Clip", "Colorimétrie", "Storytelling"],
    color: "from-purple-900/30",
  },
  {
    id: 2,
    title: "Urban Soul",
    category: "Publicité",
    year: "2024",
    client: "Brand Co.",
    description: "Campagne publicitaire urbaine pour une marque de streetwear émergente.",
    tags: ["Pub", "Urban", "Motion"],
    color: "from-amber-900/30",
  },
  {
    id: 3,
    title: "Fragments",
    category: "Court-métrage",
    year: "2023",
    client: "Projet personnel",
    description: "Exploration cinématographique de la mémoire et du temps qui passe.",
    tags: ["Cinéma", "Narration", "Art"],
    color: "from-blue-900/30",
  },
  {
    id: 4,
    title: "Resonance",
    category: "Documentaire",
    year: "2023",
    client: "Festival Film",
    description: "Portrait intime d'un musicien de jazz dans son quotidien.",
    tags: ["Documentaire", "Portrait", "Musique"],
    color: "from-green-900/20",
  },
  {
    id: 5,
    title: "Horizons",
    category: "Institutionnel",
    year: "2023",
    client: "Corp XYZ",
    description: "Film corporate mettant en valeur la vision d'une entreprise innovante.",
    tags: ["Corporate", "Drone", "Interview"],
    color: "from-red-900/20",
  },
  {
    id: 6,
    title: "Echo",
    category: "Clip Musical",
    year: "2022",
    client: "Label Y",
    description: "Clip poétique aux visuels oniriques pour un artiste indépendant.",
    tags: ["Clip", "Onirique", "VFX"],
    color: "from-indigo-900/30",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filter, setFilter] = useState("Tous");

  const categories = ["Tous", "Clip Musical", "Publicité", "Court-métrage", "Documentaire", "Institutionnel"];
  const filtered = filter === "Tous" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" ref={ref} className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[9px] tracking-[0.5em] uppercase">03</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(36px,6vw,80px)] font-bold text-[#f0ede8] leading-tight"
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                Mes Travaux
              </motion.h2>
            </div>
          </div>

          {/* Filtres */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[9px] tracking-[0.3em] uppercase px-4 py-2 border transition-all duration-300 ${
                  filter === cat
                    ? "border-[#c9a84c] bg-[#c9a84c] text-[#080808]"
                    : "border-[rgba(255,255,255,0.1)] text-[#6b6b6b] hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="relative bg-[#080808] group overflow-hidden aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Grid de lignes */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)",
                }}
              />

              {/* Numéro */}
              <div className="absolute top-5 left-5 font-display text-[10px] text-[rgba(255,255,255,0.2)] tracking-[0.3em]">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Catégorie */}
              <div className="absolute top-5 right-5 text-[9px] text-[#c9a84c] tracking-[0.3em] uppercase">
                {project.category}
              </div>

              {/* Contenu central */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="overflow-hidden">
                  <motion.h3
                    className="font-display text-2xl md:text-3xl font-bold text-[#f0ede8] mb-2 group-hover:text-[#c9a84c] transition-colors duration-300"
                    animate={hoveredId === project.id ? { y: -4 } : { y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>
                <motion.p
                  className="text-[#6b6b6b] text-xs leading-relaxed mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredId === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] tracking-[0.3em] uppercase text-[rgba(255,255,255,0.3)] border border-[rgba(255,255,255,0.08)] px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.div
                    animate={hoveredId === project.id ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight className="text-[#c9a84c]" size={18} />
                  </motion.div>
                </div>
              </div>

              {/* Bords dorés au hover */}
              <div className="absolute inset-0 border border-[rgba(201,168,76,0)] group-hover:border-[rgba(201,168,76,0.2)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Voir tout */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="group flex items-center gap-3 mx-auto border border-[rgba(255,255,255,0.15)] text-[#f0ede8] px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300">
            Voir tous les projets
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
