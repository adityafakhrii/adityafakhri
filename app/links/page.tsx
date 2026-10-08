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
    siteName: "Aditya Fakhri Riansyah",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/foto-adit.webp",
        width: 1000,
        height: 1000,
        alt: "Aditya Fakhri Riansyah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Link Penting & Profil Media Sosial | Aditya Fakhri Riansyah",
    description: "Kumpulan link penting, media sosial, dan portfolio Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
    creator: "@adityafakhrii",
  },
}

export default function LinksPage() {
  return <LinksContent />
}

