import { NextRequest, NextResponse } from "next/server";

// User-agents suspects à bloquer
const BLOCKED_UA = [/sqlmap/i, /nikto/i, /nessus/i, /masscan/i, /zgrab/i];

// Chemins d'attaque courants
const BLOCKED_PATHS = [
  "/wp-admin", "/wp-login", "/.env", "/.git",
  "/config.php", "/phpinfo", "/shell", "/xmlrpc", "/.htaccess",
];

// Rate limiting simple en mémoire
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const ua = req.headers.get("user-agent") ?? "";
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

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

  // 3. Rate limiting sur l'API contact (5 req / 15 min par IP)
  if (pathname === "/api/contact") {
    if (!checkRateLimit(ip, 5, 15 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Trop de tentatives. Réessayez dans 15 minutes." },
        { status: 429 }
      );
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
