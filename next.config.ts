import type { NextConfig } from "next";

const CSP = [
  "default-src 'self'",
  // Next.js a besoin de unsafe-inline/unsafe-eval pour l'hydratation React
  "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  // Images : self + data URIs (grain SVG) + blob (previews)
  "img-src 'self' data: blob:",
  // Vidéos locales uniquement + blob pour les previews
  "media-src 'self' blob:",
  // Iframes : YouTube sans cookie + Vimeo (pour les projets futurs)
  "frame-src 'self' https://www.youtube-nocookie.com https://player.vimeo.com",
  // Connexions réseau autorisées
  "connect-src 'self'",
  // Aucun plugin Flash ou Java
  "object-src 'none'",
  // Empêche l'injection de balise <base>
  "base-uri 'self'",
  // Soumet les formulaires uniquement vers le même domaine
  "form-action 'self'",
  // Bloque les iframes imbriquées non autorisées
  "frame-ancestors 'none'",
  // Force HTTPS pour les ressources mixtes
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Préchargement DNS pour les assets Google Fonts
  { key: "X-DNS-Prefetch-Control", value: "on" },

  // Force HTTPS pendant 2 ans, inclut sous-domaines, demande preload
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },

  // Empêche le site d'être intégré dans un iframe (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },

  // Empêche les navigateurs de deviner le type MIME
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Protection XSS ancienne génération (navigateurs legacy)
  { key: "X-XSS-Protection", value: "1; mode=block" },

  // Contrôle les infos de provenance envoyées avec les requêtes
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Désactive les APIs sensibles non utilisées
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "bluetooth=()",
      "accelerometer=()",
      "gyroscope=()",
      "magnetometer=()",
      "interest-cohort=()", // désactive FLoC/Topics Google
    ].join(", "),
  },

  // Isole le contexte de navigation (protection Spectre/side-channel)
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },

  // Empêche d'autres origines de charger les ressources du site
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },

  // Politique CSP complète
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      // Headers de sécurité sur toutes les pages
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Empêche le téléchargement direct des vidéos via lien
      {
        source: "/videos/:path*",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Cache-Control", value: "private, no-store" },
        ],
      },
      // Images : cache navigateur 30 jours
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, immutable" },
        ],
      },
    ];
  },

  // Supprime le header "X-Powered-By: Next.js" (ne pas révéler la stack)
  poweredByHeader: false,

  // Optimisation images Next.js
  images: {
    formats: ["image/avif", "image/webp"],
    // Aucun domaine externe autorisé (portfolio 100% auto-hébergé)
    remotePatterns: [],
  },

  // Compress les réponses
  compress: true,
};

export default nextConfig;
