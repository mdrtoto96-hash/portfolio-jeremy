"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Link, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", project: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-6 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-[9px] tracking-[0.5em] uppercase">06</span>
        </div>

        <div className="overflow-hidden mb-20">
          <motion.h2
            className="font-display text-[clamp(36px,7vw,100px)] font-bold text-[#f0ede8] leading-tight"
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            Travaillons
            <span className="text-transparent block md:inline md:ml-4" style={{ WebkitTextStroke: "1px rgba(240,237,232,0.3)" }}>
              ensemble.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-[#6b6b6b] text-sm leading-relaxed mb-12 max-w-sm">
              Vous avez un projet en tête ? Je serais ravi d'en discuter.
              Décrivez-moi votre idée et je vous répondrai sous 48h.
            </p>

            {/* Contact direct */}
            <div className="space-y-6 mb-12">
              <a
                href="mailto:contact@jeremyrondeau.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 border border-[rgba(255,255,255,0.08)] flex items-center justify-center group-hover:border-[#c9a84c] transition-colors">
                  <Mail size={16} className="text-[#6b6b6b] group-hover:text-[#c9a84c] transition-colors" />
                </div>
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-[#c9a84c] mb-0.5">Email</p>
                  <p className="text-[#f0ede8] text-sm group-hover:text-[#c9a84c] transition-colors">
                    contact@jeremyrondeau.com
                  </p>
                </div>
              </a>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-[9px] tracking-[0.5em] uppercase text-[#c9a84c] mb-6">Suivez mon travail</p>
              <div className="flex gap-4">
                {[
                  { icon: Link, label: "Instagram", href: "https://instagram.com" },
                  { icon: Link, label: "LinkedIn", href: "https://linkedin.com" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-[#6b6b6b] hover:text-[#c9a84c] transition-colors border border-[rgba(255,255,255,0.08)] hover:border-[#c9a84c] px-4 py-2.5"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="mt-12 pt-8 border-t border-[rgba(255,255,255,0.06)]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] tracking-[0.3em] uppercase text-[#6b6b6b]">
                  Disponible pour nouveaux projets
                </span>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-[#6b6b6b] mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.1)] text-[#f0ede8] text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors placeholder-[rgba(255,255,255,0.15)]"
                  placeholder="Jeremy Rondeau"
                />
              </div>
              <div>
                <label className="block text-[9px] tracking-[0.4em] uppercase text-[#6b6b6b] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={200}
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.1)] text-[#f0ede8] text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors placeholder-[rgba(255,255,255,0.15)]"
                  placeholder="vous@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.4em] uppercase text-[#6b6b6b] mb-2">
                Type de projet *
              </label>
              <select
                required
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                className="w-full bg-[#0d0d0d] border border-[rgba(255,255,255,0.1)] text-[#f0ede8] text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors"
              >
                <option value="" disabled>Sélectionner...</option>
                <option value="clip">Clip Musical</option>
                <option value="pub">Film Publicitaire</option>
                <option value="corporate">Film d&apos;Entreprise</option>
                <option value="court">Court-métrage</option>
                <option value="doc">Documentaire</option>
                <option value="drone">Drone</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-[9px] tracking-[0.4em] uppercase text-[#6b6b6b] mb-2">
                Votre projet *
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={2000}
                className="w-full bg-transparent border border-[rgba(255,255,255,0.1)] text-[#f0ede8] text-sm px-4 py-3 focus:outline-none focus:border-[#c9a84c] transition-colors placeholder-[rgba(255,255,255,0.15)] resize-none"
                placeholder="Décrivez votre projet, vos objectifs, votre budget..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="group w-full flex items-center justify-center gap-3 bg-[#c9a84c] text-[#080808] py-4 text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-[#e8c96b] transition-all duration-300 disabled:opacity-50"
            >
              {status === "idle" && (
                <>
                  Envoyer le message
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
              {status === "sending" && "Envoi en cours..."}
              {status === "sent" && "Message envoyé !"}
              {status === "error" && "Erreur — Réessayez"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
