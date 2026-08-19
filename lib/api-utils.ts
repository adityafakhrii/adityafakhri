import { NextRequest, NextResponse } from "next/server"

// ─── Shared Rate Limiter ───────────────────────────────────────
const RATE_LIMIT_MAP = new Map<string, { count: number; expiresAt: number }>()

function cleanupRateLimitMap() {
  const now = Date.now()
  for (const [ip, data] of RATE_LIMIT_MAP.entries()) {
    if (data.expiresAt < now) {
      RATE_LIMIT_MAP.delete(ip)
    }
  }
}

/**
 * Applies in-memory rate limiting by IP address.
 * Returns a NextResponse with 429 status if the limit is exceeded, or null if allowed.
 *
 * Note: In serverless environments (Vercel), this resets on cold starts.
 * For production-grade rate limiting, consider using Vercel KV or Upstash Redis.
 */
export function applyRateLimit(
  req: NextRequest,
  maxRequests: number = 3,
  windowMs: number = 60_000
): NextResponse | null {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
  if (ip === "unknown") return null

  cleanupRateLimitMap()
  const now = Date.now()
  const limitData = RATE_LIMIT_MAP.get(ip)

  if (limitData && limitData.expiresAt > now) {
    if (limitData.count >= maxRequests) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }
    limitData.count += 1
  } else {
    RATE_LIMIT_MAP.set(ip, { count: 1, expiresAt: now + windowMs })
  }

  return null
}

// ─── Origin / Referer Validation (CSRF-like) ──────────────────
const ALLOWED_ORIGINS = [
  "https://adityafakhri.id",
  "https://www.adityafakhri.id",
  "https://adityafakhri.com",
  "https://www.adityafakhri.com",
]

/**
 * Validates that the request originates from an allowed origin.
 * Skips validation in development mode.
 * Returns a NextResponse with 403 status if origin is invalid, or null if allowed.
 */
export function validateOrigin(req: NextRequest): NextResponse | null {
  // Skip origin check in development
  if (process.env.NODE_ENV === "development") return null

  const origin = req.headers.get("origin")
  const referer = req.headers.get("referer")

  // At least one must be present and match allowed origins
  const originValid = origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o))
  const refererValid = referer && ALLOWED_ORIGINS.some((o) => referer.startsWith(o))

  if (!originValid && !refererValid) {
    return NextResponse.json(
      { error: "Forbidden: invalid origin" },
      { status: 403 }
    )
  }

  return null
}

// ─── Honeypot Validation ──────────────────────────────────────
/**
 * Checks the honeypot field in the request payload.
 * If `_hp` field is filled (non-empty), the request is from a bot.
 * Returns a NextResponse with 200 (silent success) to trick bots, or null if valid.
 */
export function checkHoneypot(data: Record<string, unknown>): NextResponse | null {
  if (data._hp && typeof data._hp === "string" && data._hp.trim().length > 0) {
    // Bot detected — return fake success to avoid tipping off the bot
    return NextResponse.json({ success: true })
  }
  return null
}

// ─── HTML Escaping ────────────────────────────────────────────
/**
 * Escapes HTML special characters to prevent XSS in email templates.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
