import type { Metadata } from "next"
import { FeedbackContent } from "./content"

export const metadata: Metadata = {
  title: "Event Feedback",
  description: "Berikan tanggapan dan masukan Anda setelah mengikuti sesi bersama Aditya Fakhri Riansyah.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function FeedbackPage() {
  return <FeedbackContent />
}
