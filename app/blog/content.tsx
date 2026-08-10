"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Calendar, Clock, FileQuestion, Sparkles, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import blogIndex from "@/data/blog-index"

const articles = blogIndex.map((p) => ({
  ...p,
  imageSrc: p.imageSrc || "/placeholder.svg?height=200&width=400",
  isoDate: p.isoDate || "2026-01-01",
}))

const categories = Array.from(new Set(articles.map((a) => a.category).filter(Boolean))).sort() as string[]

import { useState } from "react"
import { GridSkeletonGrid } from "@/components/skeleton-card"

export function BlogContent() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchChange = (val: string) => {
    setIsLoading(true)
    setSearchQuery(val)
    setTimeout(() => setIsLoading(false), 200)
  }

  const getFilteredArticles = (categoryFilter?: string) => {
    return articles.filter((article) => {
      const matchesCategory = !categoryFilter || article.category === categoryFilter
      const matchesSearch =
        searchQuery.trim() === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }

  const renderEmptyState = () => (
    <div className="text-center py-16 px-4 border rounded-2xl bg-card/50 backdrop-blur-sm border-dashed my-4 flex flex-col items-center justify-center animate-fade-in">
      <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
        <FileQuestion className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground">
        Waduh, artikelnya nggak ketemu nih!
      </h3>
      <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
        Coba ketik kata kunci lain seperti <span className="font-semibold text-foreground">"AI"</span>, <span className="font-semibold text-foreground">"Prompt"</span>, atau <span className="font-semibold text-foreground">"Next.js"</span>. Siapa tahu ketemu yang kamu cari!
      </p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleSearchChange("")}
        className="rounded-full px-5 hover:bg-primary hover:text-primary-foreground transition-all"
      > Reset Pencarian
      </Button>
    </div>
  )

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
                className="pl-10 pr-9"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            {searchQuery && (
              <Button variant="outline" onClick={() => handleSearchChange("")}>
                Reset
              </Button>
            )}
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6 flex-wrap h-auto gap-1">
              <TabsTrigger value="all">{t('all')}</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {isLoading ? (
                <GridSkeletonGrid count={4} type="blog" />
              ) : getFilteredArticles().length === 0 ? (
                renderEmptyState()
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getFilteredArticles().map((article) => (
                    <Link key={article.id} href={`/blog/${article.id}`} className="block group">
                      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md border hover:border-primary/40 group-hover:translate-y-[-2px]">
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
                          <Badge className="mb-2 bg-primary text-primary-foreground font-medium">{article.category}</Badge>
                          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{article.excerpt}</p>
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
              )}
            </TabsContent>

            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                {isLoading ? (
                  <GridSkeletonGrid count={2} type="blog" />
                ) : getFilteredArticles(category).length === 0 ? (
                  renderEmptyState()
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getFilteredArticles(category).map((article) => (
                      <Link key={article.id} href={`/blog/${article.id}`} className="block group">
                        <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md border hover:border-primary/40 group-hover:translate-y-[-2px]">
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
                            <Badge className="mb-2 bg-primary text-primary-foreground font-medium">{article.category}</Badge>
                            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{article.excerpt}</p>
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
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}
    />
  )
}
