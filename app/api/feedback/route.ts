import { NextRequest, NextResponse } from "next/server"
import * as z from "zod"
import fs from "fs"
import path from "path"

const feedbackSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  city: z.string().min(2),
  occupation: z.string().min(2),
  topic: z.string().min(2),
  feedback: z.string().min(20),
  ratingMastery: z.number().min(1).max(5),
  ratingCommunication: z.number().min(1).max(5),
  ratingOverall: z.number().min(1).max(5),
  impression: z.string().optional(),
  improvement: z.string().optional(),
})

const RATE_LIMIT_MAP = new Map<string, { count: number; expiresAt: number }>()
const MAX_REQUESTS_PER_MINUTE = 5
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute

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
    // Rate Limiting
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

    // Validate Payload
    const json = await req.json()
    const parsed = feedbackSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload", details: parsed.error.format() }, { status: 400 })
    }

    const feedbackData = parsed.data

    const newEntry = {
      id: `fb-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...feedbackData,
      createdAt: new Date().toISOString(),
    }

    // 1. Try appending to local JSON file
    const filePath = path.join(process.cwd(), "data", "feedback-submissions.json")
    let savedLocal = false
    try {
      let currentData = []
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8").trim()
        if (fileContent) {
          currentData = JSON.parse(fileContent)
        }
      }
      currentData.push(newEntry)
      fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8")
      savedLocal = true
    } catch (fsError) {
      console.error("Failed to write to local feedback JSON file:", fsError)
      // This is expected in read-only production environments like Vercel Serverless
    }

    // 1.5. Send to Google Sheets Web App if configured
    const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL
    let savedToSheet = false
    if (sheetUrl) {
      try {
        const sheetRes = await fetch(sheetUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEntry),
        })
        if (sheetRes.ok) {
          savedToSheet = true
        } else {
          console.error("Google Sheets API returned non-OK status:", sheetRes.status, await sheetRes.text().catch(() => ""))
        }
      } catch (sheetError) {
        console.error("Failed to post feedback to Google Sheets:", sheetError)
      }
    }

    // 2. Format HTML email
    const renderStars = (num: number) => "⭐".repeat(num)
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; padding:20px; color:#1f2937;">
        <h2 style="margin:0 0 16px; border-bottom:1px solid #e5e7eb; padding-bottom:8px; color:#111827;">Feedback Peserta Baru</h2>
        <p style="margin:0 0 20px; font-size:16px;">Anda menerima feedback baru dari sesi presentasi/sharing Anda.</p>
        
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 24px;">
          <tbody>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 0; font-weight:600; width:150px; color:#4b5563;">Nama Lengkap</td>
              <td style="padding:10px 0;">${escapeHtml(feedbackData.name)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 0; font-weight:600; color:#4b5563;">Email</td>
              <td style="padding:10px 0;"><a href="mailto:${escapeHtml(feedbackData.email)}" style="color:#2563eb; text-decoration:none;">${escapeHtml(feedbackData.email)}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 0; font-weight:600; color:#4b5563;">Kota Domisili</td>
              <td style="padding:10px 0;">${escapeHtml(feedbackData.city)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 0; font-weight:600; color:#4b5563;">Pekerjaan</td>
              <td style="padding:10px 0;">${escapeHtml(feedbackData.occupation)}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 0; font-weight:600; color:#4b5563;">Topik/Event</td>
              <td style="padding:10px 0;">${escapeHtml(feedbackData.topic)}</td>
            </tr>
          </tbody>
        </table>

        <div style="background-color:#f9fafb; padding:16px; border-radius:8px; border:1px solid #e5e7eb; margin-bottom:24px;">
          <h3 style="margin:0 0 12px; font-size:15px; color:#374151;">Evaluasi Sesi:</h3>
          <p style="margin:4px 0;"><strong>Penguasaan Materi:</strong> ${renderStars(feedbackData.ratingMastery)} (${feedbackData.ratingMastery}/5)</p>
          <p style="margin:4px 0;"><strong>Komunikasi/Interaksi:</strong> ${renderStars(feedbackData.ratingCommunication)} (${feedbackData.ratingCommunication}/5)</p>
          <p style="margin:8px 0 0; font-size:16px; color:#111827; border-top:1px solid #e5e7eb; padding-top:8px;"><strong>Rating Keseluruhan Sesi:</strong> ${renderStars(feedbackData.ratingOverall)} (${feedbackData.ratingOverall}/5)</p>
        </div>

        <div style="margin-top:20px; margin-bottom:20px;">
          <h3 style="margin:0 0 8px; font-size:15px; color:#374151;">Feedback untuk Aditya:</h3>
          <p style="margin:0; padding:12px; background-color:#fff; border-left:4px solid #10b981; font-style:italic; white-space:pre-wrap; border:1px solid #e5e7eb; border-left-width:4px;">
            ${escapeHtml(feedbackData.feedback)}
          </p>
        </div>

        ${feedbackData.improvement ? `
        <div style="margin-top:20px; margin-bottom:20px;">
          <h3 style="margin:0 0 8px; font-size:15px; color:#b91c1c;">Hal yang Perlu Ditingkatkan:</h3>
          <p style="margin:0; padding:12px; background-color:#fff; border-left:4px solid #ef4444; font-style:italic; white-space:pre-wrap; border:1px solid #e5e7eb; border-left-width:4px;">
            ${escapeHtml(feedbackData.improvement)}
          </p>
        </div>
        ` : ""}

        <div style="margin-top:20px;">
          <h3 style="margin:0 0 8px; font-size:15px; color:#374151;">Kesan & Pesan (Opsional):</h3>
          <p style="margin:0; padding:12px; background-color:#fff; border-left:4px solid #3b82f6; font-style:italic; white-space:pre-wrap; border:1px solid #e5e7eb; border-left-width:4px;">
            ${feedbackData.impression ? escapeHtml(feedbackData.impression) : "<em>Tidak diisi</em>"}
          </p>
        </div>
      </div>
    `

    // 3. Send Email via Resend
    const apiKey = process.env.RESEND_API_KEY
    const contactEmail = process.env.CONTACT_EMAIL || "adityafakhri03@gmail.com"

    if (!apiKey || !contactEmail) {
      return NextResponse.json({ 
        success: true, 
        savedLocal, 
        savedToSheet,
        message: "Submission received. Email not sent because provider is not configured." 
      })
    }

    const payload = {
      from: "Portfolio Feedback <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `[adityafakhri.com] Feedback Baru: ${feedbackData.topic} (${feedbackData.ratingOverall}/5 ⭐)`,
      html,
      reply_to: feedbackData.email,
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
      console.error("Resend API error:", errText)
      return NextResponse.json({ 
        success: true, 
        savedLocal, 
        savedToSheet,
        emailSent: false, 
        error: "Failed to send notification email" 
      })
    }

    return NextResponse.json({ success: true, savedLocal, savedToSheet, emailSent: true })
  } catch (e) {
    console.error("Unexpected error in feedback API:", e)
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 })
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
