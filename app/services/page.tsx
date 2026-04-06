import type { Metadata } from "next"
import { ServicesContent } from "./content"

export const metadata: Metadata = {
  title: "Services",
  description: "Layanan content creation dan speaking engagement oleh Aditya Fakhri Riansyah dengan harga kompetitif.",
}

export default function ServicesPage() {
  return <ServicesContent />
}