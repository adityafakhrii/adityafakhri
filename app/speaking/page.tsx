import type { Metadata } from "next"
import { SpeakingContent } from "./content"

export const metadata: Metadata = {
  title: "Speaking & Mentoring",
  description: "Daftar speaking engagement, narasumber AI, pembicara IT, workshop, dan seminar Web Developer oleh Aditya Fakhri Riansyah.",
  keywords: ["Pembicara AI", "IT Speaker Indonesia", "Pembicara Web Developer", "Mentor AI", "Narasumber Teknologi", "Tech Speaker"],
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
              "description": "Pembicara IT dan AI, Web Developer Mentor.",
              "url": "https://adityafakhri.com/speaking"
            }
          })
        }}
      />
      <SpeakingContent />
    </>
  )
}
