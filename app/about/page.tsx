import type { Metadata } from "next"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About | Speaker Pemrograman, Coding, IT & AI — Sukabumi, Bandung & Indonesia",
  description: "Profil Aditya Fakhri Riansyah — Public Speaker Pemrograman, Coding, IT, & AI. Telah berbicara di 40+ event tech dan mengedukasi 5.000+ peserta di Sukabumi, Bandung, Jakarta, dan berbagai kota.",
  keywords: [
    "Pembicara Pemrograman Sukabumi",
    "Pembicara Coding Bandung",
    "Speaker IT Indonesia",
    "Pembicara AI Sukabumi",
    "Tech Speaker Bandung",
    "Mentor Programming Sukabumi",
    "Aditya Fakhri Riansyah",
    "Speaker Workshop Web Development"
  ]
}

export default function AboutPage() {
  return <AboutContent />
}