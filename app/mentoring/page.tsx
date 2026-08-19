import type { Metadata } from "next"
import { MentoringContent } from "./content"

export const metadata: Metadata = {
  title: "Private Mentoring 1-on-1 Pemrograman & AI | Aditya Fakhri Riansyah",
  description: "Program mentoring privat pemrograman web dan AI bersama Aditya Fakhri Riansyah — bimbingan intensif dari dasar hingga siap berkarir di industri tech.",
  keywords: [
    "Private Mentoring Programming",
    "Mentoring Coding Sukabumi",
    "Kursus Web Developer Privat",
    "Belajar Next.js 1 on 1",
    "Mentor AI Indonesia",
    "Aditya Fakhri Mentoring"
  ],
  alternates: {
    canonical: "https://adityafakhri.id/mentoring",
  },
  openGraph: {
    title: "Private Mentoring 1-on-1 Pemrograman & AI | Aditya Fakhri Riansyah",
    description: "Program mentoring privat pemrograman web dan AI bersama Aditya Fakhri Riansyah.",
    url: "https://adityafakhri.id/mentoring",
    images: ["/foto-adit.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Mentoring 1-on-1 Pemrograman & AI | Aditya Fakhri Riansyah",
    description: "Program mentoring privat pemrograman web dan AI bersama Aditya Fakhri Riansyah.",
    images: ["/foto-adit.webp"],
  },
}

export default function MentoringPage() {
  return <MentoringContent />
}