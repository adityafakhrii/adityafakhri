import type { Metadata } from "next"
import { ExperienceContent } from "./content"

export const metadata: Metadata = {
  title: "Experience",
  description: "Pengalaman kerja dan pencapaian profesional Aditya Fakhri Riansyah di bidang web development dan teknologi.",
}

export default function ExperiencePage() {
  return <ExperienceContent />
}