"use client"

import React, { useEffect, useRef } from "react"
import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import { BlogShareButton } from "@/components/blog-share-buttons"
import type { BlogPost } from "@/data/blog"

interface RelatedPostData {
  id: string
  title: string
  excerpt: string
  category: string
}

interface BlogPostClientProps {
  id: string
  post: BlogPost | null
  relatedPosts: RelatedPostData[]
}

export function BlogPostClient({ id, post, relatedPosts }: BlogPostClientProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = React.useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const container = contentRef.current
    if (!container) return
    const handleClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(
        ".prompt-portfolio-copy-btn"
      ) as HTMLButtonElement | null
      if (!btn) return
      const wrapper = btn.closest(".prompt-portfolio-prompt-wrapper")
      const promptEl = wrapper?.querySelector(".prompt-portfolio-prompt")
      if (!promptEl) return
      const text = promptEl.textContent?.trim() || ""
      navigator.clipboard.writeText(text).then(() => {
        btn.classList.add("copied")
        btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:4px;"><polyline points="20 6 9 17 4 12"/></svg>Copied!`
        setTimeout(() => {
          btn.classList.remove("copied")
          btn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:-2px;margin-right:4px;"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>Copy Prompt`
        }, 2000)
      })
    }
    container.addEventListener("click", handleClick)
    return () => container.removeEventListener("click", handleClick)
  }, [])

  return (
    <TranslatedContent
      renderContent={({ t }) => {
        if (!post) {
          return (
            <div className="container max-w-5xl py-8 px-4 md:px-8">
              <PageHeader
                title={t("k_1114e997")}
                description={t("k_063549d5")}
              />
              <Button asChild variant="outline" className="mt-4">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t("k_cd5f5976")}
                </Link>
              </Button>
            </div>
          )
        }

        return (
          <div className="container max-w-5xl py-8 px-4 md:px-8">
            {/* Reading Progress Indicator Bar */}
            <div
              className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-primary to-primary/80 z-50 transition-all duration-150 shadow-sm"
              style={{ width: `${scrollProgress}%` }}
              aria-label="Reading progress"
            />

            <div className="mb-4 sm:mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-muted-foreground hover:text-foreground transition-all py-1.5 px-3.5 rounded-full bg-muted/80 hover:bg-muted border border-border shadow-xs active:scale-[0.98]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>{t("k_0557fa92")}</span>
              </Link>
            </div>

            <article
              className="mb-6 sm:mb-8 w-full max-w-full overflow-hidden"
              itemScope
              itemType="https://schema.org/Article"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                <Badge className="font-semibold text-xs tracking-wide px-2.5 py-0.5">{post.category || t("notAvailable")}</Badge>
                <BlogShareButton
                  title={post.title}
                  blogId={id}
                  lang={t("language")}
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight sm:leading-[1.25] tracking-tight mb-3 sm:mb-5 text-foreground break-words">
                {post.title || t("notAvailable")}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-muted-foreground pt-2 border-t border-border/50">
                <div className="flex items-center">
                  <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 text-primary" />
                  <span className="font-medium text-foreground">{post.author || t("notAvailable")}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 text-muted-foreground" />
                  {post.date || t("notAvailable")}
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 text-muted-foreground" />
                  {post.readTime || t("notAvailable")}
                </div>
              </div>
            </article>

            {post.imageSrc && (
              <div className="rounded-2xl overflow-hidden border mb-6 sm:mb-8 shadow-sm w-full max-w-full bg-muted">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={1200}
                  height={500}
                  priority
                  className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px]"
                />
              </div>
            )}

            <ContentBlock className="w-full max-w-full overflow-hidden">
              {post.content ? (
                <div
                  ref={contentRef}
                  className="prose prose-lg max-w-none w-full max-w-full overflow-x-hidden text-[16px] sm:text-[17px] leading-[1.8]"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <p className="text-sm text-muted-foreground">
                  {t("notAvailable")}
                </p>
              )}
            </ContentBlock>

            <ContentBlock title={`${t("tags")}`} className="mt-8">
              <div className="flex flex-wrap gap-2">
                {(post.tags || []).map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title={`${t("relatedArticles")}`} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className="block border rounded-lg overflow-hidden hover:shadow-sm transition"
                  >
                    <div className="p-4">
                      <Badge className="mb-2">{related.category}</Badge>
                      <h3 className="font-semibold mb-1">{related.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {related.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </ContentBlock>
          </div>
        )
      }}
    />
  )
}
