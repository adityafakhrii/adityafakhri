import type { Metadata } from "next"
import { ServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Layanan & Kolaborasi (Services) | Aditya Fakhri Riansyah",
  description: "Layanan speaking engagement IT/AI, tech content creation, konsultasi web development, dan kerjasama profesional bersama Aditya Fakhri Riansyah.",
  keywords: [
    "Jasa Pembuatan Website",
    "Undang Pembicara IT",
    "Tech Influencer Kolaborasi",
    "Konsultasi Web Next.js",
    "Aditya Fakhri Services"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/services",
  },
  openGraph: {
    title: "Layanan & Kolaborasi (Services) | Aditya Fakhri Riansyah",
    description: "Layanan speaking engagement IT/AI, tech content creation, dan konsultasi web development bersama Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/services",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Layanan & Kolaborasi (Services) | Aditya Fakhri Riansyah",
    description: "Layanan speaking engagement IT/AI, tech content creation, dan konsultasi web development.",
    images: ["/foto-adit.webp"],
  },
}

export default function ServicesPage() {
  return <ServicesContent />
}