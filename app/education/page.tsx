import type { Metadata } from "next"
import { EducationContent } from "./content"

export const metadata: Metadata = {
  title: "Pendidikan & Sertifikasi IT | Aditya Fakhri Riansyah",
  description: "Riwayat pendidikan formal, sertifikasi profesional IT, pelatihan teknologi, dan continuous learning Aditya Fakhri Riansyah.",
  keywords: [
    "Pendidikan Aditya Fakhri",
    "Sertifikasi Web Developer",
    "Sertifikasi AI Developer",
    "Universitas Widyatama",
    "Pendidikan Software Engineer"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/education",
  },
  openGraph: {
    title: "Pendidikan & Sertifikasi IT | Aditya Fakhri Riansyah",
    description: "Riwayat pendidikan formal dan sertifikasi profesional IT Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/education",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pendidikan & Sertifikasi IT | Aditya Fakhri Riansyah",
    description: "Riwayat pendidikan formal dan sertifikasi profesional IT Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function EducationPage() {
  return <EducationContent />
}