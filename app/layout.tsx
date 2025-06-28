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
  title: "Aditya Fakhri Riansyah | AI-Driven Web Developer",
  description: "Portfolio of Aditya Fakhri Riansyah - Web Developer, Mentor, and Tech Content Creator",
    generator: 'v0.dev'
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