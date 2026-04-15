import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schéma de validation strict
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nom trop court")
    .max(100, "Nom trop long")
    .regex(/^[\p{L}\s\-'.]+$/u, "Nom invalide"),
  email: z.string().email("Email invalide").max(200),
  project: z.enum(["clip", "pub", "corporate", "court", "doc", "drone", "autre"]),
  message: z
    .string()
    .min(10, "Message trop court")
    .max(2000, "Message trop long"),
});

// Rate limiting simple en mémoire (en prod, utiliser Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Trop de tentatives. Réessayez dans 15 minutes." },
      { status: 429 }
    );
  }

  // Validation Content-Type
  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Format invalide" }, { status: 415 });
  }

  // Parse + validation
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON invalide" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const { name, email, project, message } = parsed.data;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "jrv.production85@gmail.com",
      subject: `📩 Nouveau message de ${name} — ${project}`,
      text: `Nom : ${name}\nEmail : ${email}\nProjet : ${project}\n\n${message}`,
    });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

// Bloquer les autres méthodes
export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée" }, { status: 405 });
}
