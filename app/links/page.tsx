import type { Metadata } from "next"
import { LinksContent } from "./content"

export const metadata: Metadata = {
  title: "Links",
  description: "Kumpulan link penting Aditya Fakhri Riansyah — sosial media, portfolio, dan kontak.",
}

export default function LinksPage() {
  return <LinksContent />
}
