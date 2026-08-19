import type { Metadata } from "next"
import { LinksContent } from "./content"

export const metadata: Metadata = {
  title: "Link Penting & Profil Media Sosial | Aditya Fakhri Riansyah",
  description: "Kumpulan link penting, media sosial, portfolio, repository, dan kanal komunikasi Aditya Fakhri Riansyah.",
  alternates: {
    canonical: "https://adityafakhri.id/links",
  },
  openGraph: {
    title: "Link Penting & Profil Media Sosial | Aditya Fakhri Riansyah",
    description: "Kumpulan link penting, media sosial, dan portfolio Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/links",
    images: ["/foto-adit.webp"],
  },
}

export default function LinksPage() {
  return <LinksContent />
}

