import type { Metadata } from "next"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "Tentang Aditya Fakhri Riansyah | AI Web Developer, Speaker & Mentor IT",
  description:
    "Profil lengkap Aditya Fakhri Riansyah — Web Developer berbasis AI, Public Speaker di 40+ event IT, dan Mentor Pemrograman. Mengedukasi 5.000+ peserta di Sukabumi, Bandung, Jakarta, dan seluruh Indonesia.",
  keywords: [
    "Tentang Aditya Fakhri",
    "Aditya Fakhri Riansyah",
    "Pembicara Pemrograman Sukabumi",
    "Pembicara Coding Bandung",
    "Speaker IT Indonesia",
    "Pembicara AI Sukabumi",
    "Tech Speaker Bandung",
    "Mentor Programming Sukabumi",
    "Speaker Workshop Web Development"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/about",
  },
  openGraph: {
    title: "Tentang Aditya Fakhri Riansyah | AI Web Developer, Speaker & Mentor IT",
    description:
      "Profil lengkap Aditya Fakhri Riansyah — Web Developer berbasis AI, Public Speaker di 40+ event IT, dan Mentor Pemrograman.",
    url: "https://adityafakhri.id/about",
    type: "profile",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tentang Aditya Fakhri Riansyah | AI Web Developer & Speaker IT",
    description:
      "Profil lengkap Aditya Fakhri Riansyah — Web Developer berbasis AI, Public Speaker di 40+ event IT, dan Mentor Pemrograman.",
    images: ["/foto-adit.webp"],
  },
}

export default function AboutPage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://adityafakhri.id/about/#profilepage",
    "url": "https://adityafakhri.id/about",
    "name": "Tentang Aditya Fakhri Riansyah",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://adityafakhri.id/#person",
      "name": "Aditya Fakhri Riansyah",
      "jobTitle": ["AI Web Developer", "Tech Speaker", "IT Mentor"],
      "description": "Public Speaker Pemrograman, Coding, IT, & AI. Telah berbicara di 40+ event tech dan mengedukasi 5.000+ peserta.",
      "url": "https://adityafakhri.id/about",
      "image": "https://adityafakhri.id/foto-adit.webp"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileSchema),
        }}
      />
      <AboutContent />
    </>
  )
}