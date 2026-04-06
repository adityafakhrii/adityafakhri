import type { Metadata } from "next"
import { SpeakingContent } from "./content"

export const metadata: Metadata = {
  title: "Speaking",
  description: "Daftar speaking engagement, workshop, dan seminar Aditya Fakhri Riansyah di berbagai acara teknologi.",
}

export default function SpeakingPage() {
  return <SpeakingContent />
}
