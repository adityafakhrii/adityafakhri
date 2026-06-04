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
  try {
    const filePath = path.join(process.cwd(), "data", "feedback-submissions.json")
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8")
      return JSON.parse(content)
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
