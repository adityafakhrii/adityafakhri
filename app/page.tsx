"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Code, Lightbulb, Mic, Sparkles, ExternalLink, SquareCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContentBlock } from "@/components/content-block"
import dynamic from "next/dynamic"
const ProjectCard = dynamic(() => import("@/components/project-card").then(m => m.ProjectCard))
import { TranslatedContent } from "@/components/translated-content"
import projects from "@/data/projects"
import blogs from "@/data/blog"
import { pastEvents } from "@/data/events"

export default function Home() {
  const pick = (id: keyof typeof projects) => {
    const p = projects[id]
    return { id, title: p.title, description: p.description, imageSrc: p.imageSrc, tags: p.tags }
  }
  const featuredProjects = [
    pick("siacta"),
    pick("medfluffy"),
    pick("restoranku"),
    pick("ramadhanjs"),
    pick("proquoteai"),
    pick("patunganyuk"),
  ]
  const featuredProjectsShow = featuredProjects.slice(0, 4)
  const articles = Object.entries(blogs)
    .map(([id, p]) => ({ id, title: p.title, excerpt: p.excerpt, date: p.date, readTime: p.readTime, imageSrc: p.imageSrc || "/placeholder.svg?height=200&width=400" }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const latestArticles = articles.slice(0, 4)
  const recentEvents = pastEvents.slice(0, 4)
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t('heroTitle')}</h1>
                <p className="text-xl text-muted-foreground">{t('heroSubtitle')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      {t('contactMe')}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/projects">{t('viewProjects')}</Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10">
                  <Image
                    src="/aditya-fakhri.webp"
                    alt="Aditya Fakhri Riansyah"
                    fill
                    sizes="(max-width: 768px) 50vw, 256px"
                    priority
                    className="object-cover scale-125 translate-y-4"
                  />
                </div>
              </div>
            </div>
          </section>

          <ContentBlock>
            <div className="text-lg text-muted-foreground">
              <p>{t('heroDescription')}</p>
            </div>
          </ContentBlock>

          <ContentBlock title={t('collaboration')} className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
                { name: "CodePolitan", src: "https://mustopa28121992.github.io/projectt/img/press-codepolitan--md5--c6cd986bfb1be889708b672e982814e0.png" },
                { name: "Dicoding", src: "https://landing-page-dicoding.vercel.app/img/dicoding-header-logo.png" },
                { name: "Logitech", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/1200px-Logitech_logo.svg.png" },
                { name: "IDCamp", src: "/idcamp.webp" },
                { name: "Qwords", src: "https://qwords.co.id/wp-content/uploads/2025/03/logo.webp" },
                { name: "Gamelab Indonesia", src: "https://www.gamelab.id/img/logo-gamelab/display/Logo_GameLab_Landscape1.png?v=3.10?v=3.1" },
                { name: "IDWebhost", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_e-YU5wXFZcD_zgP7ejG2-OR7D-OnXqBaA&s" },
                { name: "Dunia Coding", src: "https://apiku-v1.duniacoding.id/logo/logo-big.png" },
                { name: "ITBOX", src: "https://itbox.id/wp-content/uploads/2022/10/ITbox-Logo.png" },
                { name: "Algobash", src: "https://www.algobash.com/wp-content/uploads/2024/03/algo-black.png" },
                { name: "Merdeka Siber", src: "https://merdekasiber.com/wp-content/uploads/2024/05/Frame-43193-1.png" },
                { name: "Progate", src: "https://prog-8.com/assets/landing/primary_logo-4d1810538e410b4c6af84210420099ca1772e8cb39013fad8532e499bcdb136e.svg" },
                { name: "Staditek", src: "https://www.staditek.id/wp-content/uploads/2022/06/StadiTek-logo.png" },
                { name: "Coding Studio", src: "https://codingstudio.id/wp-content/uploads/2020/06/LOGO-MASTERFILE.png" },
                { name: "AICO Community", src: "https://static.tiptip.id/user/header-image/2a8b2eae-a4c4-42db-aad8-73771364c107.png" },
                { name: "Devcode AI", src: "/devcode.webp" },
                { name: "Codemasters", src: "/codemasters.webp" },
                { name: "Schoters by Ruangguru", src: "https://cdn-web-2.ruangguru.com/landing-pages/assets/8a6fd960-7456-42b5-97d6-fc4a4c245f9a.png" },
                { name: "Innovate Edutech", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6KyS6WrO3v-QpI1PAKxNwVT4bt01-yiNIA&s" },
                // { name: "Studpal", src: "https://media.cakeresume.com/image/upload/v1672292026/z3rqxffqfwsmi0ifsqvn.png" },

                
                ].map((company, i) => (
                  <div key={i} className="flex items-center justify-center p-4 bg-muted rounded-lg h-24">
                  <Image
                  src={company.src}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto"
                  />
                </div>
                ))}
            </div>
          </ContentBlock>

          <ContentBlock title={t('mainSkills')} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('frontendDev')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                    React, Next.js, Tailwind CSS, Bootstrap, HTML/CSS
                    </p>
                  </div>
                  </div>
                </CardContent>
                </Card>

                <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <SquareCode className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('backendDev')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                    PHP, Laravel, JavaScript, MySQL
                    </p>
                  </div>
                  </div>
                </CardContent>
                </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{t('mentoring')}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bimbingan teknis, Pengembangan karier, Code reviews, dan Workshop interaktif
                        </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Mic className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{t('contentCreation')}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Artikel teknis, Tutorial, Konten media sosial teknologi/pemrograman
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentBlock>

          <ContentBlock title={t('featuredProjects')} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjectsShow.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  tags={project.tags}
                  href={`/projects/${project.id}`}
                />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  {t('viewAll')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ContentBlock>

          <ContentBlock title={t('pastEvents')} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentEvents.map((item) => (
                <Card key={item.id} className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={item.imageSrc} alt={t('language') === 'id' ? item.title.id : item.title.en} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg line-clamp-2">{t('language') === 'id' ? item.title.id : item.title.en}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{(item.time ? item.time + " • " : "") + item.date} • {item.location}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/speaking">{t('learnMore')}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/speaking">
                  {t('viewAll')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ContentBlock>

          <ContentBlock title={t('latestBlog')} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={article.imageSrc} alt={article.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/blog/${article.id}`}>{t('readMore')}</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  {t('viewAll')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ContentBlock>

          <ContentBlock title={t('contactMe')} className="mt-12">
            <div className="text-center">
              <p className="text-lg mb-6">
                Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">{t('contactMe')}</Link>
              </Button>
            </div>
          </ContentBlock>
        </div>
      )}
    />
  )
}
