import type { Metadata } from "next"
import { SpeakingContent } from "./content"

export const metadata: Metadata = {
  title: "Pembicara AI & IT Speaker Indonesia (Bandung, Sukabumi & Global) | Aditya Fakhri Riansyah",
  description: "Aditya Fakhri Riansyah — Pembicara AI, Narasumber Workshop Web Development, dan IT Speaker di 40+ event. Tersedia untuk seminar & workshop di Bandung, Cimahi, Sukabumi, seluruh Indonesia, serta internasional (onsite & online).",
  keywords: [
    "Pembicara AI",
    "Pembicara AI Bandung",
    "Tech Speaker Bandung",
    "Pembicara IT Bandung",
    "Pembicara IT Cimahi",
    "Pembicara IT Sukabumi",
    "Narasumber AI Indonesia",
    "Pembicara Web Developer",
    "Narasumber Workshop AI",
    "IT Speaker Indonesia",
    "International Tech Speaker Indonesia",
    "Speaker Vibe Coding",
    "Speaker Next.js Indonesia",
    "Mentor AI Bandung",
    "Narasumber Seminar Teknologi"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/speaking",
  },
  openGraph: {
    title: "Pembicara AI & IT Speaker Indonesia | Aditya Fakhri Riansyah",
    description: "Pembicara AI, Tech Speaker Bandung, dan Mentor Web Developer di 40+ event. Terbuka untuk sesi onsite di Bandung, Cimahi, Sukabumi, seluruh Indonesia, dan sesi virtual global.",
    url: "https://adityafakhri.id/speaking",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pembicara AI & IT Speaker Indonesia | Aditya Fakhri Riansyah",
    description: "Pembicara AI, Tech Speaker Bandung, dan Mentor Web Developer di 40+ event nasional & internasional.",
    images: ["/foto-adit.webp"],
  },
}

export default function SpeakingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://adityafakhri.id/#person",
        "name": "Aditya Fakhri Riansyah",
        "alternateName": ["Aditya Fakhri", "Adit"],
        "url": "https://adityafakhri.id",
        "image": "https://adityafakhri.id/foto-adit.webp",
        "jobTitle": [
          "AI Web Developer",
          "Pembicara AI",
          "IT Speaker",
          "Tech Speaker",
          "Programming Mentor"
        ],
        "description": "Pembicara IT & AI, AI-Driven Web Developer, dan Mentor Pemrograman di 40+ event teknologi. Berbasis di Bandung, Cimahi, dan Sukabumi; terbuka untuk undangan di seluruh Indonesia maupun panggung internasional.",
        "sameAs": [
          "https://github.com/adityafakhrii",
          "https://linkedin.com/in/adityafakhrii",
          "https://instagram.com/adityafakhrii",
          "https://x.com/adityafakhrii"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Agentic AI",
          "Vibe Coding",
          "Prompt Engineering",
          "Fullstack Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Developer Productivity"
        ],
        "areaServed": [
          { "@type": "City", "name": "Bandung" },
          { "@type": "City", "name": "Cimahi" },
          { "@type": "City", "name": "Sukabumi" },
          { "@type": "AdministrativeArea", "name": "Jawa Barat" },
          { "@type": "Country", "name": "Indonesia" },
          { "@type": "AdministrativeArea", "name": "Worldwide (Remote)" }
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://adityafakhri.id/speaking#webpage",
        "url": "https://adityafakhri.id/speaking",
        "name": "Pembicara AI & IT Speaker Indonesia | Aditya Fakhri Riansyah",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://adityafakhri.id/#website",
          "url": "https://adityafakhri.id",
          "name": "Aditya Fakhri Riansyah"
        },
        "about": { "@id": "https://adityafakhri.id/#person" },
        "description": "Katalog portofolio pembicara seminar, workshop coding, webinar AI, dan sesi speaking teknologi oleh Aditya Fakhri Riansyah."
      },
      {
        "@type": "FAQPage",
        "@id": "https://adityafakhri.id/speaking#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Siapa Aditya Fakhri Riansyah sebagai pembicara IT & AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Aditya Fakhri Riansyah adalah AI-driven web developer, IT mentor, dan tech speaker dari Indonesia yang telah menjadi narasumber di 40+ event teknologi nasional bersama Logitech Indonesia, WPU Course, RuangAI, GDSC, serta berbagai universitas dan komunitas teknologi ternama."
            }
          },
          {
            "@type": "Question",
            "name": "Topik apa saja yang dibawakan Aditya Fakhri dalam seminar atau workshop?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Topik utama yang sering dibawakan meliputi: 1) Agentic AI & Vibe Coding: Masa Depan Software Engineering; 2) Pemanfaatan AI Tools untuk Produktivitas Developer & Profesional; 3) Fullstack Modern Web Development dengan Next.js, React, dan TypeScript; 4) Strategi Karier & Personal Branding Developer di Era AI."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah Aditya Fakhri menerima undangan pembicara onsite di Bandung, Cimahi, dan Sukabumi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ya, Aditya Fakhri berbasis di Jawa Barat dan sangat aktif mengisi sesi tatap muka (onsite) di wilayah Bandung Raya (Kota Bandung, Cimahi, Jatinangor), Sukabumi, Bogor, serta Jabodetabek."
            }
          },
          {
            "@type": "Question",
            "name": "Apakah tersedia untuk seminar di seluruh Indonesia dan internasional?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tentu. Aditya Fakhri terbuka untuk undangan onsite di seluruh kota di Indonesia maupun sesi virtual / webinar internasional dalam Bahasa Indonesia atau Bahasa Inggris."
            }
          },
          {
            "@type": "Question",
            "name": "Bagaimana cara mengundang Aditya Fakhri sebagai narasumber atau speaker?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Anda dapat mengajukan undangan melalui formulir resmi di https://adityafakhri.id/contact atau menghubungi langsung melalui WhatsApp dan email yang tertera di situs resmi."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <SpeakingContent />
    </>
  )
}

