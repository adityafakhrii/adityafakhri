"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import blogs from "@/data/blog"

const articles = Object.entries(blogs).map(([id, p]) => ({
  id,
  title: p.title,
  excerpt: p.excerpt,
  date: p.date,
  readTime: p.readTime,
  category: p.category,
  imageSrc: p.imageSrc || "/placeholder.svg?height=200&width=400",
}))

export default function BlogPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('blogTitle')} description={t('blogDescription')} />

          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder={t('searchArticles')} className="pl-10" />
            </div>
            <Button>{t('search')}</Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">{t('all')}</TabsTrigger>
              <TabsTrigger value="web">{t('web')}</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="career">
                {t('language') === 'id' ? 'Karir' : 'Career'}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.id}`} className="block group">
                    <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={article.imageSrc || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                          loading="lazy"
                          className="object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge className="mb-2 bg-muted text-muted-foreground">{article.category}</Badge>
                        <h3 className="font-medium text-lg line-clamp-2">{article.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0 flex items-center text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3.5 w-3.5 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center ml-4">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {article.readTime}
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            {["web", "ai", "career"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles
                    .filter((article) =>
                      category === "web"
                        ? article.category === "Web Development" ||
                          article.category === "TypeScript" ||
                          article.category === "Backend"
                        : category === "ai"
                          ? article.category === "AI"
                          : article.category === "Career" || article.category === "UI/UX",
                    )
                    .map((article) => (
                      <Link key={article.id} href={`/blog/${article.id}`} className="block group">
                        <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={article.imageSrc || "/placeholder.svg"}
                              alt={article.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                              loading="lazy"
                              className="object-cover transition-transform duration-200 group-hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <Badge className="mb-2">{article.category}</Badge>
                            <h3 className="font-medium text-lg line-clamp-2">{article.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                          </CardContent>
                          <CardFooter className="p-4 pt-0 flex items-center text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {article.date}
                            </div>
                            <div className="flex items-center ml-4">
                              <Clock className="h-3.5 w-3.5 mr-1" />
                              {article.readTime}
                            </div>
                          </CardFooter>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <ContentBlock title={t('language') === 'id' ? 'Berlangganan Newsletter' : 'Subscribe Newsletter'} className="mt-12">
            <div className="text-center max-w-xl mx-auto">
              <p className="mb-4">
                {t('language') === 'id' 
                  ? "Dapatkan artikel terbaru dan tips pengembangan langsung ke inbox Anda. Saya mengirim newsletter setiap dua minggu dengan konten eksklusif."
                  : "Get the latest articles and development tips directly to your inbox. I send newsletters every two weeks with exclusive content."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input placeholder={t('language') === 'id' ? 'Email Anda' : 'Your Email'} className="flex-1" />
                <Button>{t('language') === 'id' ? 'Berlangganan' : 'Subscribe'}</Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {t('language') === 'id' 
                  ? "Saya tidak akan pernah membagikan email Anda. Anda dapat berhenti berlangganan kapan saja."
                  : "I will never share your email. You can unsubscribe at any time."
                }
              </p>
            </div>
          </ContentBlock>
        </div>
      )}
    />
  )
}
