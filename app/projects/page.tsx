import type { Metadata } from "next"
import { ProjectsContent } from "./content"

export const metadata: Metadata = {
  title: "Portfolio Proyek & Aplikasi Web | Aditya Fakhri Riansyah",
  description: "Koleksi proyek web modern, aplikasi SaaS, AI prompt tools, open-source repositories, dan mobile app yang dikembangkan oleh Aditya Fakhri Riansyah.",
  keywords: [
    "Portfolio Web Developer",
    "Proyek Next.js",
    "Aplikasi AI",
    "Aditya Fakhri Projects",
    "GambarYuk",
    "InvoiceYuk",
    "Fullstack Projects",
    "Showcase Developer"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/projects",
  },
  openGraph: {
    title: "Portfolio Proyek & Aplikasi Web | Aditya Fakhri Riansyah",
    description: "Koleksi proyek web modern, aplikasi SaaS, dan AI tools oleh Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/projects",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio Proyek & Aplikasi Web | Aditya Fakhri Riansyah",
    description: "Koleksi proyek web modern, aplikasi SaaS, dan AI tools oleh Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function ProjectsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://adityafakhri.id/projects/#collectionpage",
    "url": "https://adityafakhri.id/projects",
    "name": "Koleksi Proyek Aditya Fakhri Riansyah",
    "description": "Portfolio karya dan aplikasi web inovatif oleh Aditya Fakhri Riansyah.",
    "author": {
      "@type": "Person",
      "name": "Aditya Fakhri Riansyah",
      "url": "https://adityafakhri.id"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <ProjectsContent />
    </>
  )
}