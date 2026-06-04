import type { Metadata } from "next"
import fs from "fs"
import path from "path"
import { TestimoniContent } from "./content"

export const dynamic = "force-dynamic"
export const revalidate = 0

export const metadata: Metadata = {
  title: "Testimoni",
  description: "Ulasan jujur dan kesan dari para peserta seminar, workshop, dan kelas mentoring bersama Aditya Fakhri Riansyah.",
}

async function getFeedbackSubmissions() {
  // 1. Try fetching from Google Sheet Webapp if configured
  const sheetUrl = process.env.GOOGLE_SHEET_WEBAPP_URL
  if (sheetUrl) {
    try {
      const res = await fetch(sheetUrl, {
        next: { revalidate: 15 }, // Cache sheet responses for 15 seconds
      })
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data)) {
          return data
        }
      } else {
        console.error("Google Sheets API returned non-OK status on GET:", res.status)
      }
    } catch (err) {
      console.error("Failed to fetch feedback from Google Sheets:", err)
    }
  }

  // 2. Fallback to local JSON file
  try {
    const filePath = path.join(process.cwd(), "data", "feedback-submissions.json")
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8").trim()
      if (content) {
        return JSON.parse(content)
      }
    }
  } catch (err) {
    console.error("Failed to read feedback submissions:", err)
  }
  return []
}

export default async function TestimoniPage() {
  const submissions = await getFeedbackSubmissions()
  return <TestimoniContent initialSubmissions={submissions} />
}
