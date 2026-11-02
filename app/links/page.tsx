import type { Metadata } from "next"
import { LinksContent } from "./content"

export const metadata: Metadata = {
  title: "Rekomendasi Produk & Link Pilihan | Aditya Fakhri Riansyah",
  description: "Kumpulan link rekomendasi produk pilihan Aditya Fakhri Riansyah: buku IT, jersey, setup kerja, setup content creator, dan rekomendasi produk bermanfaat lainnya.",
  alternates: {
    canonical: "https://adityafakhri.id/links",
  },
  openGraph: {
    title: "Rekomendasi Produk & Link Pilihan | Aditya Fakhri Riansyah",
    description: "Kumpulan link rekomendasi produk pilihan: buku IT, jersey, setup kerja, setup content creator, dan lainnya.",
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
    title: "Rekomendasi Produk & Link Pilihan | Aditya Fakhri Riansyah",
    description: "Kumpulan link rekomendasi produk pilihan: buku IT, jersey, setup kerja, setup content creator, dan lainnya.",
    images: ["/foto-adit.webp"],
    creator: "@adityafakhrii",
  },
}

export default function LinksPage() {
  return <LinksContent />
}

