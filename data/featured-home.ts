import type { Translatable } from "@/lib/utils"

export type FeaturedProject = {
  id: string
  title: string
  description: Translatable<string>
  imageSrc: string
  tags: string[]
}

export type RecentEvent = {
  id: string
  category: string
  imageSrc: string
  title: { id: string; en: string }
  subtitle?: { id: string; en: string }
  date: string
  time?: string
  location: string
}

export const featuredProjectsShow: FeaturedProject[] = [
  {
    id: "gambaryuk",
    title: "GambarYuk",
    description: {
      id: "Alat pengolahan gambar modern dengan fitur manipulasi gambar berbasis web.",
      en: "Modern image processing tool with web-based image manipulation features."
    },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Canvas API", "Image Processing"]
  },
  {
    id: "invoiceyuk",
    title: "InvoiceYuk",
    description: {
      id: "Solusi pembuatan invoice cepat dan profesional untuk freelancer dan UMKM.",
      en: "Fast and professional invoice creation solution for freelancers and SMEs."
    },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"]
  },
  {
    id: "siacta",
    title: "SIACTA",
    description: {
      id: "Aplikasi web komprehensif untuk mengelola operasi keuangan dan kepatuhan pajak dengan fitur lengkap untuk bisnis.",
      en: "A comprehensive web application to manage financial operations and tax compliance with complete features for businesses."
    },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Accounting"]
  },
  {
    id: "ruangai-prompt-hub",
    title: "RuangAI Prompt Hub",
    description: {
      id: "Platform untuk berbagi dan menemukan prompt AI terbaik untuk berbagai kebutuhan.",
      en: "A platform for sharing and discovering the best AI prompts for various needs."
    },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "AI Prompts", "Community"]
  },
  {
    id: "proquoteai",
    title: "ProQuoteAI",
    description: {
      id: "Sistem AI untuk membuat quotation profesional dan estimasi biaya dengan cepat.",
      en: "AI system to quickly create professional quotations and cost estimations."
    },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Pricing Engine"]
  },
  {
    id: "restoranku",
    title: "Restoranku",
    description: {
      id: "Pemesanan via QR code, pembayaran QRIS (Midtrans), dan analytics komprehensif.",
      en: "QR code ordering, QRIS (Midtrans) payments, and comprehensive analytics."
    },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Payment Gateway"]
  }
]

export const recentEventsShow: RecentEvent[] = [
  {
    id: "mx-fest-2026-ctrl-shift-ai-beyond-mastery-bandung",
    category: "Seminar & Workshop",
    imageSrc: "https://www.gambaryuk.com/1793949704772-p94x9o.webp",
    title: {
      id: "MX FEST 2026: Ctrl + Shift + AI | Beyond Mastery",
      en: "MX FEST 2026: Ctrl + Shift + AI | Beyond Mastery"
    },
    subtitle: {
      id: "MXperience Club x Logitech Indonesia",
      en: "MXperience Club x Logitech Indonesia"
    },
    date: "31 Oktober 2026",
    time: "10.00 WIB",
    location: "BEC, Bandung"
  },
  {
    id: "express-yourself-gensi-indosat-jgu-depok-2026",
    category: "Seminar & Workshop",
    imageSrc: "https://www.gambaryuk.com/1791261700243-5265ir.webp",
    title: {
      id: "Express Yourself, Buat Karya yang #LebihBaik",
      en: "Express Yourself, Create Works That Are #LebihBaik"
    },
    subtitle: {
      id: "Indosat 5G x Tribun Jabar",
      en: "Indosat 5G x Tribun Jabar"
    },
    date: "5 Oktober 2026",
    time: "09.00 - 12.00 WIB",
    location: "Jakarta Global University, Depok"
  },
  {
    id: "express-yourself-gensi-indosat-ubsi-2026",
    category: "Seminar & Workshop",
    imageSrc: "https://www.gambaryuk.com/1791007206181-fdjbn2.webp",
    title: {
      id: "Express Yourself, Buat Karya yang #LebihBaik",
      en: "Express Yourself, Create Works That Are #LebihBaik"
    },
    subtitle: {
      id: "Indosat 5G x Tribun Jabar",
      en: "Indosat 5G x Tribun Jabar"
    },
    date: "30 September 2026",
    time: "09.00 - 12.00 WIB",
    location: "Universitas BSI, Sukabumi"
  },
  {
    id: "coding-lebih-cepat-inixindo-2026",
    category: "Webinar",
    imageSrc: "https://www.gambaryuk.com/1784019787797-ljnddj.webp",
    title: {
      id: "Coding Lebih Cepat, Kerja Lebih Cerdas: Menjadi Developer Masa Depan dengan AI",
      en: "Coding Faster, Working Smarter: Becoming a Developer of the Future with AI"
    },
    subtitle: {
      id: "Inixindo Jogja & eduparx",
      en: "Inixindo Jogja & eduparx"
    },
    date: "23 Juli 2026",
    time: "14.00 WIB",
    location: "Online"
  },
  {
    id: "airena-belajar-unisba-2026",
    category: "Seminar & Workshop",
    imageSrc: "https://www.gambaryuk.com/1783414661178-glh9bd.webp",
    title: {
      id: "Airena Belajar: Ngulik AI bersama Para Expert",
      en: "Airena Belajar: Exploring AI with Experts"
    },
    subtitle: {
      id: "IM3 with Google Gemini",
      en: "IM3 with Google Gemini"
    },
    date: "02 Juli 2026",
    time: "09.00 - 12.00 WIB",
    location: "Universitas Islam Bandung"
  },
  {
    id: "build-with-ai-pustekinfo-dpr-2026",
    category: "Workshop",
    imageSrc: "https://www.gambaryuk.com/1783415423040-qslqq7.webp",
    title: {
      id: "Build with AI: Real World Vibe Coding",
      en: "Build with AI: Real World Vibe Coding"
    },
    subtitle: {
      id: "DPR RI - PUSTEKINFO",
      en: "DPR RI - PUSTEKINFO"
    },
    date: "05 Juni 2026",
    time: "09.00 - 17.00 WIB",
    location: "Ramada by Wyndham Serpong Hotel"
  }
]

export const totalPastEventsCount = 49

