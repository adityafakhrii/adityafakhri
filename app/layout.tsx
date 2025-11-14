import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { PortfolioSidebar } from "@/components/portfolio-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LanguageProvider } from "@/contexts/language-context"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://adityafakhri.com"),
  title: {
    default: "Aditya Fakhri Riansyah | AI-Driven Web Developer",
    template: "%s | Aditya Fakhri Riansyah",
  },
  description:
    "Portfolio Aditya Fakhri Riansyah — Web Developer berbasis AI, Mentor, dan Tech Content Creator.",
  generator: "v0.dev",
  keywords: [
    "Web Developer",
    "Next.js",
    "React",
    "AI",
    "Mentor Pemrograman",
    "Portfolio Teknologi",
    "Pengembangan Web",
  ],
  authors: [{ name: "Aditya Fakhri Riansyah", url: "https://adityafakhri.com" }],
  alternates: {
    canonical: "https://adityafakhri.com",
  },
  openGraph: {
    type: "website",
    url: "https://adityafakhri.com",
    title: "Aditya Fakhri Riansyah | AI-Driven Web Developer",
    description:
      "Portfolio Aditya Fakhri Riansyah — Web Developer berbasis AI, Mentor, dan Tech Content Creator.",
    siteName: "Aditya Fakhri",
    images: [
      {
        url: "/foto-adit.webp",
        width: 1200,
        height: 630,
        alt: "Aditya Fakhri Riansyah",
      },
    ],
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Fakhri Riansyah | AI-Driven Web Developer",
    description:
      "Portfolio Aditya Fakhri Riansyah — Web Developer berbasis AI, Mentor, dan Tech Content Creator.",
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
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/adit.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aditya Fakhri Riansyah",
              url: "https://adityafakhri.com",
              jobTitle: "Web Developer",
              sameAs: [
                "https://github.com/adityafakhrii",
                "https://www.linkedin.com/in/adityafakhrii",
                "https://x.com/adityafakhrii",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://adityafakhri.com",
              name: "Aditya Fakhri Riansyah",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://adityafakhri.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
            <SidebarProvider>
              <div className="flex min-h-screen">
                <PortfolioSidebar />
                <main className="flex-1 overflow-auto mx-auto">{children}</main>
              </div>
            </SidebarProvider>
          </ThemeProvider>
        </LanguageProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
