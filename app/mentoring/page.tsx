import type { Metadata } from "next"
import { MentoringContent } from "./content"

export const metadata: Metadata = {
  title: "Private Mentoring",
  description: "Program mentoring 1:1 bersama Aditya Fakhri Riansyah — topik customizable, jadwal fleksibel.",
}

export default function MentoringPage() {
  return <MentoringContent />
}