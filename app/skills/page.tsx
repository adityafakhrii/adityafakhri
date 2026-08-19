import type { Metadata } from "next"
import { SkillsContent } from "./content"

export const metadata: Metadata = {
  title: "Skills & Keahlian Teknis | Aditya Fakhri Riansyah",
  description: "Daftar skill teknis, stack teknologi (Next.js, React, TypeScript, AI/ML, Python, Cloud), dan soft skills yang dikuasai oleh Aditya Fakhri Riansyah.",
  keywords: [
    "Keahlian Web Developer",
    "Skill Next.js React",
    "TypeScript Developer",
    "AI ML Tools",
    "Tailwind CSS Specialist",
    "Aditya Fakhri Skills"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/skills",
  },
  openGraph: {
    title: "Skills & Keahlian Teknis | Aditya Fakhri Riansyah",
    description: "Daftar skill teknis, stack teknologi, dan keahlian AI / Web Development Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/skills",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills & Keahlian Teknis | Aditya Fakhri Riansyah",
    description: "Daftar skill teknis dan stack teknologi Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function SkillsPage() {
  return <SkillsContent />
}