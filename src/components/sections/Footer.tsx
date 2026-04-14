"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-bold text-sm tracking-[0.3em] text-[#f0ede8]">
          JR<span className="text-[#c9a84c]">.</span>
        </p>

        <p className="text-[#6b6b6b] text-[10px] tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} Jeremy Rondeau — Tous droits réservés
        </p>

        <div className="flex items-center gap-2 text-[#6b6b6b] text-[10px] tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
          Paris, France
        </div>
      </div>
    </footer>
  );
}
