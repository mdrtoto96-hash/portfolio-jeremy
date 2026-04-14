"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Megaphone, Music, Video, Plane, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Court-métrage & Cinéma",
    description:
      "De la pré-production au montage final, je prends en charge votre projet de A à Z avec une direction artistique soignée.",
    price: "Sur devis",
  },
  {
    icon: Megaphone,
    title: "Film Publicitaire",
    description:
      "Des publicités impactantes qui incarnent l'identité de votre marque et captivent votre audience cible.",
    price: "À partir de 2 500€",
  },
  {
    icon: Music,
    title: "Clip Musical",
    description:
      "Des clips qui amplifient votre musique avec des visuels uniques, pensés pour sublimer votre univers artistique.",
    price: "À partir de 1 800€",
  },
  {
    icon: Video,
    title: "Film d'Entreprise",
    description:
      "Présentez votre entreprise avec des vidéos institutionnelles qui inspirent confiance et racontent votre histoire.",
    price: "À partir de 1 200€",
  },
  {
    icon: Plane,
    title: "Prise de vue Drone",
    description:
      "Des images aériennes spectaculaires réalisées avec une licence professionnelle pour sublimer vos projets.",
    price: "À partir de 600€/j",
  },
  {
    icon: Clapperboard,
    title: "Reportage & Documentaire",
    description:
      "Capturez des moments vrais avec une approche documentaire authentique et un regard humain et engagé.",
    price: "Sur devis",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section id="services" ref={ref} className="py-32 px-6 md:px-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-6 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-[9px] tracking-[0.5em] uppercase">05</span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                className="font-display text-[clamp(36px,5vw,72px)] font-bold text-[#f0ede8] leading-tight"
                initial={{ y: "100%" }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              >
                Services
              </motion.h2>
            </div>
          </div>
          <motion.p
            className="text-[#6b6b6b] text-sm leading-relaxed self-end md:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Chaque projet est unique. Je m'adapte à vos besoins pour livrer
            une vidéo qui dépasse vos attentes, dans les délais et le budget convenus.
          </motion.p>
        </div>

        {/* Grille services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-[#080808] p-8 group hover:bg-[#0d0d0d] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              >
                {/* Numéro & icone */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 border border-[rgba(201,168,76,0.2)] flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[rgba(201,168,76,0.05)] transition-all duration-300">
                    <Icon size={20} className="text-[#c9a84c]" />
                  </div>
                  <span className="text-[rgba(255,255,255,0.1)] font-display text-3xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Contenu */}
                <h3 className="font-display text-lg font-bold text-[#f0ede8] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#6b6b6b] text-xs leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Prix + CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-[#c9a84c] text-[11px] tracking-widest font-medium">
                    {service.price}
                  </span>
                  <button
                    onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[9px] tracking-[0.3em] uppercase text-[rgba(255,255,255,0.3)] hover:text-[#c9a84c] transition-colors duration-300 flex items-center gap-1"
                  >
                    Devis →
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
