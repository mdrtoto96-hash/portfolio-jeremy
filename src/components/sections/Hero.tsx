"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const words = ["Vidéaste.", "Réalisateur.", "Storyteller."];

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let index = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      if (!wordRef.current) return;
      const word = words[index];

      if (!deleting) {
        wordRef.current.textContent = word.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === word.length) {
          deleting = true;
          setTimeout(type, 1800);
          return;
        }
      } else {
        wordRef.current.textContent = word.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          index = (index + 1) % words.length;
        }
      }

      setTimeout(type, deleting ? 60 : 100);
    };

    const t = setTimeout(type, 1200);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.querySelector("#showreel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Fond avec grain */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Lignes décoratives */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <motion.div
          className="w-px bg-[rgba(201,168,76,0.3)]"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
        <span className="text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase rotate-90 whitespace-nowrap my-2">
          2024
        </span>
        <motion.div
          className="w-px bg-[rgba(201,168,76,0.3)]"
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        />
      </div>

      {/* Numéro de scène */}
      <motion.p
        className="absolute right-8 top-1/2 -translate-y-1/2 text-[#c9a84c] text-[9px] tracking-[0.4em] uppercase hidden lg:block"
        style={{ writingMode: "vertical-rl" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Scene 01 — Hero
      </motion.p>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Tag */}
        <motion.p
          className="text-[#c9a84c] text-[10px] tracking-[0.6em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Portfolio — 2024
        </motion.p>

        {/* Nom */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            className="font-display text-[clamp(52px,10vw,140px)] font-bold leading-[0.9] tracking-tight text-[#f0ede8]"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            Jeremy
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            className="font-display text-[clamp(52px,10vw,140px)] font-bold leading-[0.9] tracking-tight text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(240,237,232,0.3)",
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            Rondeau
          </motion.h1>
        </div>

        {/* Typewriter */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="w-8 h-px bg-[#c9a84c]" />
          <p className="font-display text-xl md:text-2xl text-[#c9a84c] font-light min-w-[200px] text-left">
            <span ref={wordRef} />
            <span className="animate-pulse">|</span>
          </p>
          <div className="w-8 h-px bg-[#c9a84c]" />
        </motion.div>

        {/* Sous-titre */}
        <motion.p
          className="text-[#6b6b6b] text-sm md:text-base tracking-widest max-w-md mx-auto leading-relaxed mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          Je transforme vos idées en images qui marquent les esprits.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <button
            onClick={() => document.querySelector("#showreel")?.scrollIntoView({ behavior: "smooth" })}
            className="group flex items-center gap-3 bg-[#c9a84c] text-[#080808] px-8 py-4 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#e8c96b] transition-all duration-300"
          >
            Voir le showreel
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button
            onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-3 border border-[rgba(255,255,255,0.15)] text-[#f0ede8] px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            Mes projets
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6b6b6b] hover:text-[#c9a84c] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <span className="text-[9px] tracking-[0.4em] uppercase">Défiler</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
