import type { Metadata } from "next"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About",
  description: "Tentang Aditya Fakhri Riansyah — AI-Driven Web Developer, Mentor, dan Tech Content Creator.",
}

export default function AboutPage() {
  return <AboutContent />
}