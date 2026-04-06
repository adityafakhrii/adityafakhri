import type { Metadata } from "next"
import { EducationContent } from "./content"

export const metadata: Metadata = {
  title: "Education",
  description: "Riwayat pendidikan formal, non-formal, sertifikasi, dan continuous learning Aditya Fakhri Riansyah.",
}

export default function EducationPage() {
  return <EducationContent />
}