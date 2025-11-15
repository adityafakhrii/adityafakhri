"use client"

import React from 'react'
import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import blogs from "@/data/blog"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const normalize = (s: string) => decodeURIComponent(s).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-")
  const normId = normalize(resolvedParams.id)
  const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
  const id = entry ? entry[0] : resolvedParams.id

  return (
    <TranslatedContent
      renderContent={({ t }) => {
        const post = blogs[id as keyof typeof blogs]

        if (!post) {
          return (
            <div className="container max-w-5xl py-8 px-4 md:px-8">
              <PageHeader 
                title={t('language') === 'id' ? "Artikel Tidak Ditemukan" : "Article Not Found"} 
                description={t('language') === 'id' ? "Maaf, artikel yang Anda cari tidak tersedia." : "Sorry, the article you're looking for is not available."} 
              />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('language') === 'id' ? 'Kembali ke Blog' : 'Back to Blog'}
                </Link>
              </Button>
            </div>
          )
        }

        return (
          <div className="container max-w-5xl py-8 px-4 md:px-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('language') === 'id' ? 'Kembali' : 'Back'}
              </Link>
            </Button>

            <article className="mb-8" itemScope itemType="https://schema.org/Article">
              <Badge className="mb-4">{post.category || t('notAvailable')}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title || t('notAvailable')}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {post.author || t('notAvailable')}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date || t('notAvailable')}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime || t('notAvailable')}
                </div>
              </div>
            </article>

            {post.imageSrc && (
              <div className="rounded-lg overflow-hidden border mb-8">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={1200}
                  height={500}
                  className="object-cover w-full h-[300px] md:h-[400px]"
                />
              </div>
            )}

            <ContentBlock>
              {post.content ? (
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-sm text-muted-foreground">{t('notAvailable')}</p>
              )}
            </ContentBlock>

            <ContentBlock title={`${t('tags')}`} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {(post.tags || []).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title={`${t('relatedArticles')}`} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(post.relatedPosts || []).map((relatedPostId) => {
                  const relatedPost = blogs[relatedPostId as keyof typeof blogs]
                  if (!relatedPost) return null
                  return (
                    <Link key={relatedPostId} href={`/blog/${relatedPostId}`} className="block border rounded-lg overflow-hidden hover:shadow-sm transition">
                      <div className="p-4">
                        <Badge className="mb-2">{relatedPost.category}</Badge>
                        <h3 className="font-semibold mb-1">{relatedPost.title}</h3>
                        <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </ContentBlock>
          </div>
        )
      }}
    />
  )
}
