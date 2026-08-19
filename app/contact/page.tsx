import type { Metadata } from "next"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Kontak & Kolaborasi | Aditya Fakhri Riansyah",
  description: "Hubungi Aditya Fakhri Riansyah untuk undangan pembicara IT/AI, proyek pengembangan website, private mentoring, atau peluang kerjasama profesional lainnya.",
  keywords: [
    "Kontak Aditya Fakhri",
    "Undang Pembicara Coding",
    "Hubungi Web Developer",
    "Kerjasama IT Tech Speaker"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/contact",
  },
  openGraph: {
    title: "Kontak & Kolaborasi | Aditya Fakhri Riansyah",
    description: "Hubungi Aditya Fakhri Riansyah untuk undangan pembicara, proyek pembuatan website, atau mentoring.",
    url: "https://adityafakhri.id/contact",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontak & Kolaborasi | Aditya Fakhri Riansyah",
    description: "Hubungi Aditya Fakhri Riansyah untuk undangan pembicara atau proyek website.",
    images: ["/foto-adit.webp"],
  },
}

export default function ContactPage() {
  return <ContactContent />
}