import type { Metadata } from "next"
import { BlogContent } from "./content"

export const metadata: Metadata = {
  title: "Blog & Artikel Web Development / AI | Aditya Fakhri Riansyah",
  description: "Kumpulan artikel, tips praktis, tutorial Next.js, prompt engineering AI, dan insight dunia pemrograman oleh Aditya Fakhri Riansyah.",
  keywords: [
    "Blog Pemrograman",
    "Tutorial Next.js",
    "Prompt Engineering AI",
    "Belajar Web Development",
    "Tips Frontend",
    "Aditya Fakhri Blog",
    "Artikel Coding Indonesia"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/blog",
  },
  openGraph: {
    title: "Blog & Artikel Web Development / AI | Aditya Fakhri Riansyah",
    description: "Kumpulan artikel, tutorial Next.js, dan prompt AI oleh Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/blog",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Artikel Web Development / AI | Aditya Fakhri Riansyah",
    description: "Kumpulan artikel, tutorial Next.js, dan prompt AI oleh Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://adityafakhri.id/blog/#blog",
    "url": "https://adityafakhri.id/blog",
    "name": "Blog Aditya Fakhri Riansyah",
    "description": "Artikel dan panduan praktis seputar modern web development dan AI engineering.",
    "publisher": {
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
          __html: JSON.stringify(blogSchema),
        }}
      />
      <BlogContent />
    </>
  )
}

