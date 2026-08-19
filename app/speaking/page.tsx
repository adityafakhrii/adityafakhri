import type { Metadata } from "next"
import { SpeakingContent } from "./content"

export const metadata: Metadata = {
  title: "Speaking & Narasumber IT / AI | Aditya Fakhri Riansyah",
  description: "Daftar event seminar, webinar, workshop coding, dan sesi speaking IT/AI oleh Aditya Fakhri Riansyah di berbagai kota (Sukabumi, Bandung, Jakarta, dll).",
  keywords: [
    "Pembicara AI",
    "IT Speaker Indonesia",
    "Pembicara Web Developer",
    "Mentor AI",
    "Narasumber Teknologi",
    "Tech Speaker Bandung",
    "Pembicara IT Sukabumi",
    "Narasumber Workshop AI"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/speaking",
  },
  openGraph: {
    title: "Speaking & Narasumber IT / AI | Aditya Fakhri Riansyah",
    description: "Daftar event seminar, webinar, workshop coding, dan sesi speaking IT/AI oleh Aditya Fakhri Riansyah di 40+ event.",
    url: "https://adityafakhri.id/speaking",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking & Narasumber IT / AI | Aditya Fakhri Riansyah",
    description: "Daftar event seminar, webinar, workshop coding, dan sesi speaking IT/AI oleh Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function SpeakingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "mainEntity": {
              "@type": "Person",
              "name": "Aditya Fakhri Riansyah",
              "jobTitle": ["AI Web Developer", "Tech Speaker", "IT Mentor"],
              "description": "Pembicara IT dan AI, Web Developer Mentor di 40+ event nasional.",
              "url": "https://adityafakhri.id/speaking",
              "image": "https://adityafakhri.id/foto-adit.webp"
            }
          })
        }}
      />
      <SpeakingContent />
    </>
  )
}

