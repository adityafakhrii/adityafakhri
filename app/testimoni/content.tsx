"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare, Quote, MapPin, Calendar, ChevronDown, ChevronUp, Loader2 } from "lucide-react"
import { TranslatedContent } from "@/components/translated-content"
import { useLanguage } from "@/contexts/language-context"
import { format } from "date-fns"
import { id as localeID, enUS as localeEN } from "date-fns/locale"

interface FeedbackSubmission {
  id: string
  name: string
  email: string
  city: string
  occupation: string
  topic: string
  ratingMastery: number
  ratingCommunication: number
  ratingOverall: number
  feedback: string
  impression?: string
  improvement?: string
  createdAt: string
}

interface TestimoniContentProps {
  initialSubmissions: FeedbackSubmission[]
}

const BATCH_SIZE = 9
const MAX_FEEDBACK_LENGTH = 180

interface TestimonialCardProps {
  item: FeedbackSubmission
  formatDateStr: (dateIso: string) => string
  t: (key: string) => string
}

function TestimonialCard({ item, formatDateStr, t }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isLong = item.feedback.length > MAX_FEEDBACK_LENGTH

  const displayText = !isLong || isExpanded
    ? item.feedback
    : `${item.feedback.slice(0, MAX_FEEDBACK_LENGTH).trim()}...`

  return (
    <Card
      className="border border-border/80 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
    >
      <CardContent className="p-5 sm:p-6 flex flex-col justify-between h-full space-y-4">
        {/* Quote icon watermark */}
        <div className="absolute right-4 top-4 text-muted-foreground/10 pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
          <Quote className="h-14 w-14 rotate-180" />
        </div>

        {/* Top Section: Stars and Topic */}
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 text-yellow-400 fill-yellow-400 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.4)]"
              />
            ))}
          </div>

          <div className="inline-block">
            <Badge variant="outline" className="text-[11px] bg-muted/50 border-muted text-muted-foreground font-normal">
              {item.topic}
            </Badge>
          </div>
        </div>

        {/* Body Section: Content with Truncate & Read More */}
        <div className="relative pl-3.5 border-l-2 border-primary/30 my-2 flex-grow flex flex-col justify-between">
          <p className="text-foreground/90 text-sm leading-relaxed italic transition-all duration-200">
            &ldquo;{displayText}&rdquo;
          </p>

          {isLong && (
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-primary hover:text-primary/80 text-xs font-semibold mt-2.5 inline-flex items-center gap-1 transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded self-start"
              aria-label={isExpanded ? t("testimoniShowLess") : t("testimoniReadMore")}
            >
              <span>{isExpanded ? t("testimoniShowLess") : t("testimoniReadMore")}</span>
              {isExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
          )}
        </div>

        {/* Bottom Section: Author Details */}
        <div className="border-t pt-3.5 mt-2 flex flex-col gap-2.5 text-xs text-muted-foreground">
          <div>
            <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors line-clamp-1">
              {item.name}
            </h4>
            <p className="mt-0.5 font-medium text-[11px] line-clamp-1">
              {item.occupation}
            </p>
          </div>

          <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground/75 pt-1.5 border-t border-border/40">
            {item.city ? (
              <div className="flex items-center gap-1 truncate">
                <MapPin className="h-3 w-3 shrink-0 text-muted-foreground/60" />
                <span className="truncate">{item.city}</span>
              </div>
            ) : <div />}
            {item.createdAt && (
              <div className="flex items-center gap-1 shrink-0">
                <Calendar className="h-3 w-3 shrink-0 text-muted-foreground/60" />
                <span>{formatDateStr(item.createdAt)}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimoniContent({ initialSubmissions }: TestimoniContentProps) {
  const { language } = useLanguage()
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  // Filter 5-star reviews with text feedback, sorted by newest first
  const testimonials = useMemo(() => {
    return (initialSubmissions || [])
      .filter(
        (item) =>
          item.ratingOverall === 5 &&
          item.feedback &&
          item.feedback.trim().length > 0
      )
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }, [initialSubmissions])

  const visibleTestimonials = useMemo(() => {
    return testimonials.slice(0, visibleCount)
  }, [testimonials, visibleCount])

  const hasMore = visibleCount < testimonials.length

  // Infinite scroll observer
  useEffect(() => {
    if (!hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore) {
          setIsLoadingMore(true)
          setTimeout(() => {
            setVisibleCount((prev) => prev + BATCH_SIZE)
            setIsLoadingMore(false)
          }, 300)
        }
      },
      { threshold: 0.1, rootMargin: "150px" }
    )

    const current = observerTarget.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [hasMore, isLoadingMore])

  // Formatting Date helper
  const formatDateStr = (dateIso: string) => {
    try {
      const date = new Date(dateIso)
      return format(date, "d MMMM yyyy", {
        locale: language === "id" ? localeID : localeEN,
      })
    } catch {
      return ""
    }
  }

  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-6xl py-8 px-4 md:px-8 animate-fade-in">
          <PageHeader title={t("testimoniTitle")} description={t("testimoniDescription")} />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              {testimonials.length > 0 ? (
                <>
                  {/* Testimonial Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleTestimonials.map((item) => (
                      <TestimonialCard
                        key={item.id}
                        item={item}
                        formatDateStr={formatDateStr}
                        t={t}
                      />
                    ))}
                  </div>

                  {/* Infinite Scroll Trigger & Loader */}
                  {hasMore && (
                    <div ref={observerTarget} className="pt-8 pb-4 flex flex-col items-center justify-center">
                      {isLoadingMore ? (
                        <div className="flex items-center gap-2.5 text-sm text-muted-foreground animate-pulse py-3 px-4 rounded-full bg-muted/40 border">
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                          <span>{t("testimoniLoadingMore")}</span>
                        </div>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setIsLoadingMore(true)
                            setTimeout(() => {
                              setVisibleCount((prev) => prev + BATCH_SIZE)
                              setIsLoadingMore(false)
                            }, 300)
                          }}
                          className="gap-2 text-xs text-muted-foreground hover:text-foreground"
                        >
                          <ChevronDown className="h-3.5 w-3.5" />
                          {t("testimoniLoadMoreBtn")}
                        </Button>
                      )}
                    </div>
                  )}

                  {/* All items loaded status */}
                  {!hasMore && testimonials.length > BATCH_SIZE && (
                    <div className="text-center pt-8 pb-2">
                      <p className="text-xs text-muted-foreground/80">
                        {t("testimoniAllLoaded")} ({testimonials.length} {t("testimoniOfTotal")} {testimonials.length})
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16 px-4 border-2 border-dashed rounded-xl flex flex-col items-center justify-center">
                  <MessageSquare className="h-12 w-12 text-muted-foreground/40 mb-3" />
                  <p className="text-muted-foreground font-medium text-sm">{t("testimoniEmpty")}</p>
                </div>
              )}
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}
