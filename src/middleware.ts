import { NextRequest, NextResponse } from "next/server";

// User-agents suspects à bloquer
const BLOCKED_UA_PATTERNS = [
  /sqlmap/i,
  /nikto/i,
  /nessus/i,
  /masscan/i,
  /zgrab/i,
  /python-requests\/[0-1]\./i, // vieilles versions souvent utilisées pour scraping malveillant
];

// Chemins d'attaque courants à bloquer
const BLOCKED_PATHS = [
  "/wp-admin",
  "/wp-login",
  "/.env",
  "/.git",
  "/config.php",
  "/phpinfo",
  "/admin",
  "/shell",
  "/xmlrpc",
  "/.htaccess",
  "/etc/passwd",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = req.headers.get("user-agent") ?? "";

  // 1. Bloquer les chemins suspects
  for (const p of BLOCKED_PATHS) {
    if (pathname.toLowerCase().startsWith(p)) {
      return new NextResponse("Not Found", { status: 404 });
    }
  }

  // 2. Bloquer les user-agents malveillants
  for (const pattern of BLOCKED_UA_PATTERNS) {
    if (pattern.test(ua)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  // 3. Vérifier la taille du body pour l'API contact
  if (pathname === "/api/contact") {
    const contentLength = req.headers.get("content-length");
    if (contentLength && parseInt(contentLength) > 10_000) {
      return NextResponse.json({ error: "Payload trop volumineux" }, { status: 413 });
    }
  }

  const res = NextResponse.next();

  // 4. Headers de sécurité supplémentaires sur toutes les réponses
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-XSS-Protection", "1; mode=block");

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
