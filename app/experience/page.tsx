import type { Metadata } from "next"
import { ExperienceContent } from "./content"

export const metadata: Metadata = {
  title: "Pengalaman Kerja & Karir Profesional | Aditya Fakhri Riansyah",
  description: "Rekam jejak pengalaman kerja profesional, peran kepemimpinan IT, project software engineering, dan pencapaian karir Aditya Fakhri Riansyah.",
  keywords: [
    "Pengalaman Kerja Developer",
    "Karir Aditya Fakhri",
    "Portfolio Pengalaman IT",
    "Web Developer Experience",
    "Tech Lead Experience"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/experience",
  },
  openGraph: {
    title: "Pengalaman Kerja & Karir Profesional | Aditya Fakhri Riansyah",
    description: "Rekam jejak pengalaman kerja profesional dan karir IT Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/experience",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pengalaman Kerja & Karir Profesional | Aditya Fakhri Riansyah",
    description: "Rekam jejak pengalaman kerja profesional dan karir IT Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function ExperiencePage() {
  return <ExperienceContent />
}