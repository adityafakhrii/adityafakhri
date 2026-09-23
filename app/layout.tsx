import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LanguageProvider } from "@/contexts/language-context"
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from "@/components/ui/toaster"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://adityafakhri.id"),
  title: {
    default: "Aditya Fakhri Riansyah | AI Web Developer, IT Speaker & Mentor Indonesia",
    template: "%s | Aditya Fakhri Riansyah",
  },
  description:
    "Portfolio resmi Aditya Fakhri Riansyah — AI-Driven Web Developer, Tech Speaker di 40+ event IT, Mentor Pemrograman, dan Tech Content Creator di Sukabumi, Bandung, dan Indonesia.",
  generator: "Next.js",
  applicationName: "Aditya Fakhri Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Aditya Fakhri",
    "Aditya Fakhri Riansyah",
    "Aditya Fakhri Web Developer",
    "AI Web Developer Indonesia",
    "Pembicara IT Indonesia",
    "Tech Speaker Bandung",
    "Pembicara AI Sukabumi",
    "Speaker Web Developer",
    "Mentor Pemrograman Sukabumi",
    "Fullstack Developer Indonesia",
    "Next.js Developer Indonesia",
    "React Developer",
    "Narasumber Workshop AI",
    "RuangAI",
    "GDSC Widyatama",
    "GDG Bandung"
  ],
  authors: [{ name: "Aditya Fakhri Riansyah", url: "https://adityafakhri.id" }],
  creator: "Aditya Fakhri Riansyah",
  publisher: "Aditya Fakhri Riansyah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://adityafakhri.id",
  },
  openGraph: {
    type: "website",
    url: "https://adityafakhri.id",
    title: "Aditya Fakhri Riansyah | AI Web Developer, IT Speaker & Mentor Indonesia",
    description:
      "Portfolio resmi Aditya Fakhri Riansyah — AI-Driven Web Developer, Tech Speaker di 40+ event IT, Mentor Pemrograman, dan Tech Content Creator.",
    siteName: "Aditya Fakhri Riansyah",
    images: [
      {
        url: "/foto-adit.webp",
        width: 1200,
        height: 630,
        alt: "Aditya Fakhri Riansyah - AI Web Developer & Tech Speaker",
      },
    ],
    locale: "id_ID",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Fakhri Riansyah | AI Web Developer & Tech Speaker",
    description:
      "Portfolio resmi Aditya Fakhri Riansyah — AI-Driven Web Developer, Tech Speaker di 40+ event IT, Mentor Pemrograman, dan Tech Content Creator.",
    creator: "@adityafakhrii",
    images: ["/foto-adit.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://adityafakhri.id/#person",
      name: "Aditya Fakhri Riansyah",
      alternateName: ["Aditya Fakhri", "Adit"],
      url: "https://adityafakhri.id",
      image: "https://adityafakhri.id/foto-adit.webp",
      jobTitle: [
        "AI Web Developer",
        "Tech Speaker",
        "Programming Mentor",
        "Content Creator"
      ],
      description: "AI-Driven Web Developer, Pembicara IT di 40+ event, Mentor Pemrograman, dan Tech Content Creator asal Indonesia.",
      knowsAbout: [
        "Artificial Intelligence",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Fullstack Web Development",
        "AI Engineering",
        "Vibe Coding",
        "Public Speaking",
        "Mentoring"
      ],
      sameAs: [
        "https://github.com/adityafakhrii",
        "https://www.linkedin.com/in/adityafakhrii",
        "https://www.instagram.com/adityafakhrii",
        "https://x.com/adityafakhrii",
        "https://www.tiktok.com/@adityafakhrii",
        "https://www.youtube.com/@adityafakhrii"
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Universitas Widyatama",
        url: "https://www.widyatama.ac.id"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://adityafakhri.id/#website",
      url: "https://adityafakhri.id",
      name: "Aditya Fakhri Riansyah - Official Website",
      description: "Portfolio & Blog resmi Aditya Fakhri Riansyah — Web Developer berbasis AI, Pembicara IT, dan Mentor Pemrograman.",
      publisher: {
        "@id": "https://adityafakhri.id/#person"
      },
      inLanguage: ["id", "en"]
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: ["Tentang", "Proyek", "Blog", "Speaking", "Mentoring", "Layanan", "Skills", "Kontak"],
      url: [
        "https://adityafakhri.id/about",
        "https://adityafakhri.id/projects",
        "https://adityafakhri.id/blog",
        "https://adityafakhri.id/speaking",
        "https://adityafakhri.id/mentoring",
        "https://adityafakhri.id/services",
        "https://adityafakhri.id/skills",
        "https://adityafakhri.id/contact"
      ]
    }
  ]

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/adit.ico" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link
          rel="preload"
          as="image"
          href="/aditya-fakhri.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: "/*" },
                  eagerness: "moderate",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={true}>
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <PortfolioSidebar />
                <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden mx-auto">{children}</main>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </LanguageProvider>
        <ScrollToTop />
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
