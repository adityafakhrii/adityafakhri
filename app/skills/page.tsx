import type { Metadata } from "next"
import { SkillsContent } from "./content"

export const metadata: Metadata = {
  title: "Skills",
  description: "Hard skills dan soft skills yang dikuasai Aditya Fakhri Riansyah — Frontend, Backend, Mobile, AI/ML, dan UI/UX.",
}

export default function SkillsPage() {
  return <SkillsContent />
}