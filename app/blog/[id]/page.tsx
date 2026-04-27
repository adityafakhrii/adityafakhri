"use client"

import React, { useEffect, useRef } from 'react'
import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import { BlogShareButton } from "@/components/blog-share-buttons"
import blogs from "@/data/blog"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = React.use(params)
  const normalize = (s: string) => decodeURIComponent(s).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-")
  const normId = normalize(resolvedParams.id)
  const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
  const id = entry ? entry[0] : resolvedParams.id
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const handleClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('.prompt-portfolio-copy-btn') as HTMLButtonElement | null;
      if (!btn) return;
      const wrapper = btn.closest('.prompt-portfolio-prompt-wrapper');
      const promptEl = wrapper?.querySelector('.prompt-portfolio-prompt');
      if (!promptEl) return;
      const text = promptEl.textContent?.trim() || '';
      navigator.clipboard.writeText(text).then(() => {
        btn.classList.add('copied');
        btn.innerHTML = '✅ Copied!';
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.innerHTML = '📄 Copy Prompt';
        }, 2000);
      });
    };
    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, []);

  return (
    <TranslatedContent
      renderContent={({ t }) => {
        const post = blogs[id as keyof typeof blogs]

        if (!post) {
          return (
            <div className="container max-w-5xl py-8 px-4 md:px-8">
              <PageHeader
                title={t('k_1114e997')}
                description={t('k_063549d5')}
              />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('k_cd5f5976')}
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
                {t('k_0557fa92')}
              </Link>
            </Button>

            <article className="mb-8" itemScope itemType="https://schema.org/Article">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title || "Not Available",
                    "image": post.imageSrc ? [new URL(post.imageSrc, "https://adityafakhri.com").toString()] : undefined,
                    "datePublished": post.date || "Not Available",
                    "author": [{
                      "@type": "Person",
                      "name": post.author || "Aditya Fakhri Riansyah",
                      "url": "https://adityafakhri.com"
                    }]
                  })
                }}
              />
              <div className="flex items-center justify-between mb-4">
                <Badge>{post.category || t('notAvailable')}</Badge>
                <BlogShareButton title={post.title} blogId={id} lang={t('language')} />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[1.3] tracking-tight mb-5 break-words">{post.title || t('notAvailable')}</h1>
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
                <div ref={contentRef} className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
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
