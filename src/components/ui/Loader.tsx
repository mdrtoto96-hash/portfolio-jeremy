"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 3;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9997] bg-[#080808] flex flex-col items-center justify-center"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Logo / Nom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 text-center"
          >
            <p className="font-display text-[#c9a84c] text-xs tracking-[0.4em] uppercase mb-2">
              Jeremy Rondeau
            </p>
            <p className="text-[#6b6b6b] text-[10px] tracking-[0.6em] uppercase">
              Vidéaste
            </p>
          </motion.div>

          {/* Compteur */}
          <motion.div
            className="font-display text-[80px] font-bold text-white leading-none tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {Math.min(count, 100)}
          </motion.div>

          {/* Barre de progression */}
          <div className="mt-8 w-40 h-[1px] bg-[rgba(255,255,255,0.1)] overflow-hidden">
            <motion.div
              className="h-full bg-[#c9a84c]"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(count, 100)}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
