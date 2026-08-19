import type { Metadata } from "next"
import { CommunityContent } from "./content"

export const metadata: Metadata = {
  title: "Aktivitas Komunitas & Volunteering | Aditya Fakhri Riansyah",
  description: "Aktivitas dan kepemimpinan komunitas tech oleh Aditya Fakhri Riansyah — GDG Bandung, Lead GDSC Universitas Widyatama, RuangAI, dan kegiatan developer.",
  keywords: [
    "Komunitas IT Bandung",
    "GDSC Widyatama",
    "GDG Bandung",
    "RuangAI Developer",
    "Volunteering IT Indonesia",
    "Aditya Fakhri Community"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/community",
  },
  openGraph: {
    title: "Aktivitas Komunitas & Volunteering | Aditya Fakhri Riansyah",
    description: "Aktivitas dan kepemimpinan komunitas tech oleh Aditya Fakhri Riansyah — GDG Bandung, GDSC Widyatama, dan RuangAI.",
    url: "https://adityafakhri.id/community",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aktivitas Komunitas & Volunteering | Aditya Fakhri Riansyah",
    description: "Aktivitas dan kepemimpinan komunitas tech oleh Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function CommunityPage() {
  return <CommunityContent />
}