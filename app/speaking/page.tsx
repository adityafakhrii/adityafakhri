"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { TranslatedContent } from "@/components/translated-content"
import { pastEvents, upcomingEvents } from "@/data/events"

export default function SpeakingPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('speakingTitle')} description={t('speakingDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock title={t('upcomingEvents')}>
              <p className="text-lg mb-4">
                {t('language') === 'id' 
                  ? "Hey! Ini nih jadwal event-event yang bakal saya isi sebagai speaker dalam waktu dekat."
                  : "Hey! Here are the upcoming events where I'll be speaking in the near future."
                }
              </p>
              {upcomingEvents.length > 0 ? (
                <div className="space-y-6">
                  {upcomingEvents.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-3">
                          <div className="relative h-48 md:h-auto">
                            <Image
                              src={item.imageSrc}
                              alt={t('language') === 'id' ? item.title.id : item.title.en}
                              fill
                              sizes="100vw"
                              suppressHydrationWarning
                              priority={item.priority}
                              className={item.imageClassName ?? "object-contain"}
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <div className="flex flex-wrap gap-2 mb-2" suppressHydrationWarning>
                              <Badge>{item.category}</Badge>
                              {item.tags.map((tag) => (
                                <Badge key={tag} variant="outline">{tag}</Badge>
                              ))}
                            </div>
                            <h3 className="font-medium text-xl">
                              {t('language') === 'id' ? item.title.id : item.title.en}
                            </h3>
                            {item.subtitle && (
                              <h4 className="text-lg text-muted-foreground">
                                {t('language') === 'id' ? item.subtitle.id : item.subtitle.en}
                              </h4>
                            )}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {item.date}
                              </div>
                              {item.time && (
                                <>
                                  <div className="hidden sm:block">•</div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {item.time}
                                  </div>
                                </>
                              )}
                              <div className="hidden sm:block">•</div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {item.location}
                              </div>
                            </div>
                            {item.description && (
                              item.bullets ? (
                                <div className="mt-4 text-sm">
                                  {t('language') === 'id' ? item.description.id : item.description.en}
                                  <ul className="list-disc list-inside mt-1">
                                    {(t('language') === 'id' ? item.bullets.id : item.bullets.en).map((b, i) => (
                                      <li key={i}>{b}</li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                <p className="mt-4 text-sm">
                                  {t('language') === 'id' ? item.description.id : item.description.en}
                                </p>
                              )
                            )}
                            {item.links && item.links.length > 0 && (
                              <div className="mt-4">
                                <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                                  {item.links.map((link) => (
                                    <Link
                                      key={link.href}
                                      href={link.href}
                                      target="_blank"
                                      className={buttonVariants({
                                        variant: "outline",
                                        size: "sm",
                                        className: "w-full sm:w-auto whitespace-normal",
                                      })}
                                    >
                                      {t('language') === 'id' ? link.labelId : link.labelEn}
                                      <ExternalLink className="ml-2 h-3 w-3" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                            {item.organizer && (
                              <div className="mt-4 text-sm text-muted-foreground">
                                {t('language') === 'id' ? item.organizer.id : item.organizer.en}
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="border rounded-lg p-6 text-center text-muted-foreground">
                  {t('language') === 'id' 
                    ? "Belum ada event terdekat saat ini. Pantau halaman ini ya!"
                    : "No upcoming events at the moment. Check back soon!"
                  }
                </div>
              )}
            </ContentBlock>

            <ContentBlock title={t('pastEvents')}>
              <p className="text-lg mb-6">
                {t('language') === 'id' 
                  ? "Saya aktif berbagi pengetahuan dan pengalaman melalui berbagai acara teknologi, webinar, dan konferensi. Berikut adalah beberapa acara di mana saya menjadi pembicara."
                  : "I actively share knowledge and experience through various technology events, webinars, and conferences. Here are some events where I was a speaker."
                }
              </p>

              <div className="space-y-6">
                {pastEvents.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-48 md:h-auto">
                          <Image
                            src={item.imageSrc}
                            alt={t('language') === 'id' ? item.title.id : item.title.en}
                            fill
                            sizes="100vw"
                            suppressHydrationWarning
                            priority={item.priority}
                            className={item.imageClassName ?? "object-contain"}
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex flex-wrap gap-2 mb-2" suppressHydrationWarning>
                            <Badge>{item.category}</Badge>
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="outline">{tag}</Badge>
                            ))}
                          </div>
                          <h3 className="font-medium text-xl">
                            {t('language') === 'id' ? item.title.id : item.title.en}
                          </h3>
                          {item.subtitle && (
                            <h4 className="text-lg text-muted-foreground">
                              {t('language') === 'id' ? item.subtitle.id : item.subtitle.en}
                            </h4>
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {item.date}
                            </div>
                            {item.time && (
                              <>
                                <div className="hidden sm:block">•</div>
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {item.time}
                                </div>
                              </>
                            )}
                            <div className="hidden sm:block">•</div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {item.location}
                            </div>
                          </div>
                          {item.description && (
                            item.bullets ? (
                              <div className="mt-4 text-sm">
                                {t('language') === 'id' ? item.description.id : item.description.en}
                                <ul className="list-disc list-inside mt-1">
                                  {(t('language') === 'id' ? item.bullets.id : item.bullets.en).map((b, i) => (
                                    <li key={i}>{b}</li>
                                  ))}
                                </ul>
                              </div>
                            ) : (
                              <p className="mt-4 text-sm">
                                {t('language') === 'id' ? item.description.id : item.description.en}
                              </p>
                            )
                          )}
                          {item.links && item.links.length > 0 && (
                              <div className="mt-4">
                              <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                                {item.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    className={buttonVariants({
                                      variant: "outline",
                                      size: "sm",
                                      className: "w-full sm:w-auto whitespace-normal",
                                    })}
                                  >
                                    {t('language') === 'id' ? link.labelId : link.labelEn}
                                    <ExternalLink className="ml-2 h-3 w-3" />
                                  </Link>
                                ))}
                              </div>
                              </div>
                          )}
                          {item.organizer && (
                            <div className="mt-4 text-sm text-muted-foreground">
                              {t('language') === 'id' ? item.organizer.id : item.organizer.en}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title={t('topicsISpeak')}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' 
                      ? "Fullstack Web Development dengan AI"
                      : "Fullstack Web Development with AI"
                    }
                  </h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Laravel Framework & Ecosystem</li>
                    <li>React.js & Next.js Development</li>
                    <li>Tailwind CSS & Bootstrap</li>
                    <li>
                      {t('language') === 'id' 
                        ? "Praktik Terbaik Fullstack Development"
                        : "Fullstack Development Best Practices"
                      }
                    </li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' 
                      ? "AI untuk Developer"
                      : "AI for Developers"
                    }
                  </h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>
                      {t('language') === 'id' 
                        ? "Tools AI untuk Development"
                        : "AI Tools for Development"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Etika dalam Pengembangan AI"
                        : "Ethics in AI Development"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Praktik Terbaik Integrasi AI"
                        : "AI Integration Best Practices"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Prompt Engineering untuk Developer"
                        : "Prompt Engineering for Developers"
                      }
                    </li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Android Development</h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Kotlin Android Development</li>
                    <li>Android Architecture Patterns</li>
                    <li>Kotlin Coroutines & Flow</li>
                    <li>Android App Performance</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' 
                      ? "Softskill untuk Developer"
                      : "Softskill for Developer"
                    }
                  </h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>
                      {t('language') === 'id' 
                        ? "Pengembangan & Perencanaan Karir"
                        : "Career Development & Planning"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Personal Branding untuk Developer"
                        : "Personal Branding for Developers"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Komunikasi Teknis"
                        : "Technical Communication"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Manajemen Waktu & Proyek"
                        : "Time & Project Management"
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-4">
                  {t('language') === 'id' 
                    ? "Tertarik untuk mengundang saya berbicara di acara Anda?"
                    : "Interested in inviting me to speak at your event?"
                  }
                </h3>
                <p className="mb-6">
                  {t('language') === 'id' 
                    ? "Saya tersedia untuk konferensi, workshop, webinar, dan meetups tentang topik-topik yang berkaitan dengan pengembangan web, integrasi AI, dan pengembangan karier teknologi. Silakan hubungi saya untuk mendiskusikan peluang kolaborasi dan bagaimana saya dapat membantu acara Anda."
                    : "I'm available for conferences, workshops, webinars, and meetups on topics related to web development, AI integration, and technology career development. Please contact me to discuss collaboration opportunities and how I can help your event."
                  }
                </p>
                <Button asChild>
                  <Link href="/contact">{t('contactMe')}</Link>
                </Button>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}
