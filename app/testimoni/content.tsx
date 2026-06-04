"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MessageSquare, Quote, MapPin, Calendar, Sparkles } from "lucide-react"
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
  ratingContent: number
  ratingDelivery: number
  ratingOverall: number
  impression?: string
  createdAt: string
}

interface TestimoniContentProps {
  initialSubmissions: FeedbackSubmission[]
}

export function TestimoniContent({ initialSubmissions }: TestimoniContentProps) {
  const { language } = useLanguage()

  // Filter 5-star reviews with text feedback, sorted by newest first
  const testimonials = (initialSubmissions || [])
    .filter(
      (item) =>
        item.ratingOverall === 5 &&
        item.impression &&
        item.impression.trim().length > 0
    )
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

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
        <div className="container max-w-5xl py-8 px-4 md:px-8 animate-fade-in">
          <PageHeader title={t("testimoniTitle")} description={t("testimoniDescription")} />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-8 flex gap-3 items-start">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t("testimoniCallout")}
                </p>
              </div>

              {testimonials.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {testimonials.map((item) => (
                    <Card
                      key={item.id}
                      className="border border-border/80 hover:border-primary/40 hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
                    >
                      <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                        {/* Quote icon watermark */}
                        <div className="absolute right-4 top-4 text-muted-foreground/10 pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
                          <Quote className="h-16 w-16 rotate-180" />
                        </div>

                        {/* Top Section: Stars and Topic */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="h-4.5 w-4.5 text-yellow-400 fill-yellow-400 filter drop-shadow-[0_0_2px_rgba(250,204,21,0.4)]"
                              />
                            ))}
                          </div>
                          
                          <div className="inline-block">
                            <Badge variant="outline" className="text-xs bg-muted/50 border-muted text-muted-foreground font-normal">
                              {item.topic}
                            </Badge>
                          </div>
                        </div>

                        {/* Body Section: Content */}
                        <p className="text-foreground/90 text-sm leading-relaxed italic relative pl-4 border-l-2 border-primary/30 my-2 flex-grow">
                          "{item.impression}"
                        </p>

                        {/* Bottom Section: Author Details */}
                        <div className="border-t pt-4 mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
                          <div>
                            <h4 className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <p className="mt-0.5 font-medium">
                              {item.occupation}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1 items-start sm:items-end text-[10px]">
                            {item.city && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-muted-foreground/60" />
                                <span>{item.city}</span>
                              </div>
                            )}
                            {item.createdAt && (
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 text-muted-foreground/60" />
                                <span>{formatDateStr(item.createdAt)}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
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
