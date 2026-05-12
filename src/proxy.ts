import { NextRequest, NextResponse } from "next/server";

// User-agents suspects à bloquer
const BLOCKED_UA = [/sqlmap/i, /nikto/i, /nessus/i, /masscan/i, /zgrab/i];

// Chemins d'attaque courants
const BLOCKED_PATHS = [
  "/wp-admin", "/wp-login", "/.env", "/.git",
  "/config.php", "/phpinfo", "/shell", "/xmlrpc", "/.htaccess",
];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = req.headers.get("user-agent") ?? "";

  // 1. Bloquer les chemins suspects
  for (const p of BLOCKED_PATHS) {
    if (pathname.toLowerCase().startsWith(p)) {
      return new NextResponse("Not Found", { status: 404 });
    }
  }

  // 2. Bloquer les user-agents malveillants
  for (const pattern of BLOCKED_UA) {
    if (pattern.test(ua)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  const res = NextResponse.next();

  // 4. Headers de sécurité
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-XSS-Protection", "1; mode=block");

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
