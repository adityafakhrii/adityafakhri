import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
})

const RATE_LIMIT_MAP = new Map<string, { count: number; expiresAt: number }>()
const MAX_REQUESTS_PER_MINUTE = 3
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

// Helper to cleanup expired entries
function cleanupRateLimitMap() {
  const now = Date.now()
  for (const [ip, data] of RATE_LIMIT_MAP.entries()) {
    if (data.expiresAt < now) {
      RATE_LIMIT_MAP.delete(ip)
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    if (ip !== "unknown") {
      cleanupRateLimitMap()
      const now = Date.now()
      const limitData = RATE_LIMIT_MAP.get(ip)

      if (limitData && limitData.expiresAt > now) {
        if (limitData.count >= MAX_REQUESTS_PER_MINUTE) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          )
        }
        limitData.count += 1
      } else {
        RATE_LIMIT_MAP.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW })
      }
    }

    const json = await req.json()
    const parsed = contactSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
    }

    const { name, email, subject, message } = parsed.data

    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; padding:16px;">
        <h2 style="margin:0 0 12px;">Pesan Kontak Baru</h2>
        <p style="margin:0 0 12px;">Anda menerima pesan baru dari formulir kontak portofolio.</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tbody>
            <tr>
              <td style="padding:8px; font-weight:600; width:120px;">Nama</td>
              <td style="padding:8px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600;">Email</td>
              <td style="padding:8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600;">Subjek</td>
              <td style="padding:8px;">${escapeHtml(subject)}</td>
            </tr>
            <tr>
              <td style="padding:8px; font-weight:600;">Pesan</td>
              <td style="padding:8px; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `

    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL || "adityafakhri03@gmail.com"

    if (!apiKey || !contactEmail) {
      return NextResponse.json({ error: "Email provider not configured" }, { status: 500 })
    }

    const payload = {
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `[adityafakhri.com] ${subject}`,
      html,
      reply_to: email,
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const errText = await res.text()
      return NextResponse.json({ error: "Failed to send email", details: errText }, { status: 502 })
    }

    const data = await res.json()
    return NextResponse.json({ success: true, id: data.id })
  } catch (e) {
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 })
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}