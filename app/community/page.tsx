import type { Metadata } from "next"
import { CommunityContent } from "./content"

export const metadata: Metadata = {
  title: "Community",
  description: "Kontribusi komunitas Aditya Fakhri Riansyah — GDG Bandung, GDSC Widyatama, dan kegiatan volunteering lainnya.",
}

export default function CommunityPage() {
  return <CommunityContent />
}