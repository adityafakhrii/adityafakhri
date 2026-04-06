import type { Metadata } from "next"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi Aditya Fakhri Riansyah untuk kolaborasi, project, atau pertanyaan seputar teknologi.",
}

export default function ContactPage() {
  return <ContactContent />
}