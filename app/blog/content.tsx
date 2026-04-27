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

import { useState } from "react"

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('blogTitle')} description={t('blogDescription')} />

          <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={t('searchArticles')}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button>{t('search')}</Button>
          </div>

          { /* Removed Newsletter at user's request */}

          <Tabs defaultValue="all">
            <TabsList className="mb-6 flex-wrap h-auto gap-1">
              <TabsTrigger value="all">{t('all')}</TabsTrigger>
              {Array.from(new Set(articles.map((a) => a.category))).filter(Boolean).sort().map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.filter((article) =>
                  article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
                ).map((article) => (
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

            {Array.from(new Set(articles.map((a) => a.category))).filter(Boolean).sort().map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles
                    .filter((article) => article.category === category)
                    .filter((article) =>
                      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
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
        </div>
      )}
    />
  )
}
