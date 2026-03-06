"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Instagram, ImageIcon, Film, Mic, AlertTriangle, MonitorPlay, Brain, Medal, Calendar, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { pastEvents } from "@/data/events"
import { TranslatedContent } from "@/components/translated-content"

export default function ServicesPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader
            title={t('servicesTitle')}
            description={t('servicesDescription')}
          />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <div className="text-lg text-muted-foreground mb-6">
                <p className="mb-2">
                  {t('language') === 'id'
                    ? "Menawarkan berbagai layanan content creation untuk Instagram dengan harga yang kompetitif. Semua layanan mencakup konsultasi awal, revisi, dan pengiriman file dalam format yang dibutuhkan."
                    : "Offering various content creation services for Instagram at competitive prices. All services include initial consultation, revisions, and file delivery in the required format."
                  }
                </p>
                <div className="flex items-center gap-2 text-base font-medium text-amber-600 dark:text-amber-500">
                  <AlertTriangle className="h-4 w-4" />
                  <p>
                    {t('language') === 'id' ? 'Harga yang tertera belum termasuk pajak yang berlaku. (Jika ada)' : 'Please note that taxes are not included in the listed prices. (If applicable)'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
                  <div className="bg-primary/10 p-4 flex items-center">
                    <Instagram className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium text-lg">{t('instagramStory')}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">IG Story Image</p>
                            <p className="text-sm text-muted-foreground">
                              {t('language') === 'id' ? 'Maksimal 2 story' : 'Maximum 2 stories'}
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg font-semibold">170K</Badge>
                      </div>

                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">IG Story Video</p>
                            <p className="text-sm text-muted-foreground">
                              {t('language') === 'id' ? 'Maksimal 1 story' : 'Maximum 1 story'}
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg font-semibold">200K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
                  <div className="bg-primary/10 p-4 flex items-center">
                    <ImageIcon className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium text-lg">{t('instagramFeed')}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Single Post</p>
                            <p className="text-sm text-muted-foreground">
                              {t('language') === 'id' ? '1 gambar berkualitas tinggi' : '1 high quality image'}
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg font-semibold">250K</Badge>
                      </div>

                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Carousel</p>
                            <p className="text-sm text-muted-foreground">
                              {t('language') === 'id' ? '10 slide gambar dalam satu post' : '10 image slides in one post'}
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg font-semibold">350K</Badge>
                      </div>

                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Single Post + Repost Story</p>
                            <p className="text-sm text-muted-foreground">
                              {t('language') === 'id' ? '1 gambar dengan tambahan story' : '1 image with additional story'}
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg font-semibold">270K</Badge>
                      </div>

                      <div className="flex justify-between items-start">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Carousel + Repost Story</p>
                            <p className="text-sm text-muted-foreground">
                              {t('language') === 'id' ? '10 slide gambar dengan tambahan story' : '10 image slides with additional story'}
                            </p>
                          </div>
                        </div>
                        <Badge className="text-lg font-semibold">380K</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200 md:col-span-2">
                  <div className="bg-primary/10 p-4 flex items-center">
                    <Film className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium text-lg">{t('instagramReels')}</h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">IG Reels</p>
                              <p className="text-sm text-muted-foreground">
                                {t('language') === 'id' ? 'Video maksimal 90 detik dengan format 9:16' : 'Maximum 90 second video with 9:16 format'}
                              </p>
                            </div>
                          </div>
                          <Badge className="text-lg font-semibold">400K</Badge>
                        </div>

                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">IG Reels + Repost Story</p>
                              <p className="text-sm text-muted-foreground">
                                {t('language') === 'id' ? 'Video reels dengan tambahan repost story' : 'Reels video with additional repost story'}
                              </p>
                            </div>
                          </div>
                          <Badge className="text-lg font-semibold">430K</Badge>
                        </div>

                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">TikTok Video</p>
                              <p className="text-sm text-muted-foreground">
                                {t('language') === 'id' ? 'Video vertikal maksimal 90 detik khusus TikTok' : 'Maximum 90 second vertical video for TikTok'}
                              </p>
                            </div>
                          </div>
                          <Badge className="text-lg font-semibold">300K</Badge>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-start">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="font-medium">IG Reels + Mirror TikTok</p>
                              <p className="text-sm text-muted-foreground">
                                {t('language') === 'id' ? 'Video untuk Instagram dan TikTok dengan durasi maksimal 90 detik' : 'Video for Instagram and TikTok with maximum 90 second duration'}
                              </p>
                            </div>
                          </div>
                          <Badge className="text-lg font-semibold">650K</Badge>
                        </div>

                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <h4 className="font-medium mb-2">
                            {t('language') === 'id' ? 'Keuntungan Tambahan:' : 'Additional Benefits:'}
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                              <span className="text-sm">
                                {t('language') === 'id' ? 'Optimasi untuk algoritma platform' : 'Platform algorithm optimization'}
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                              <span className="text-sm">
                                {t('language') === 'id' ? 'Musik dan efek yang trending' : 'Trending music and effects'}
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                              <span className="text-sm">
                                {t('language') === 'id' ? 'Caption dan hashtag yang relevan' : 'Relevant captions and hashtags'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Kartu info owning content */}
              <Card className="overflow-hidden border-2 border-amber-300 bg-amber-50 hover:border-amber-400 hover:bg-amber-100 hover:shadow-lg transition-all duration-200 dark:border-amber-800 dark:bg-amber-900 dark:hover:border-amber-700 dark:hover:bg-amber-800">
                <CardContent className="p-4 flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-300 mt-0.5" />
                  <div>
                    <p className="text-sm">
                      {t('language') === 'id'
                        ? 'PENTING: Jika Anda ingin memiliki hak kepemilikan penuh atas konten (owning content), maka akan dikenakan biaya tambahan sebesar 2x lipat dari harga yang tertera di rate card. Hak kepemilikan ini memberikan Anda kebebasan penuh untuk menggunakan, memodifikasi, dan mendistribusikan konten tersebut.'
                        : 'IMPORTANT: If you want full ownership rights over the content (owning content), an additional fee of 2x the listed rate card price will be charged. This ownership grants you complete freedom to use, modify, and distribute the content.'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ContentBlock>

            <ContentBlock title={t('bundlingPackages')}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
                  <div className="bg-primary/10 p-4 text-center">
                    <h3 className="font-medium text-lg">Paket Lite</h3>
                    <p className="text-sm text-muted-foreground">Naik Level, Gak Ribet</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground line-through mr-2">318k</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">349K</span>
                      <p className="text-sm text-primary font-medium italic">Hemat 49k</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Feed (Carousel + Repost Story)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Story Video</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Basic Carousel Design</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Caption & Hashtag</strong></span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="http://wa.me/62895808860080" target="_blank">Hubungi via WhatsApp</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-2 border-primary transition-all duration-200 shadow-md">
                  <div className="bg-primary p-4 text-center text-primary-foreground">
                    <h3 className="font-medium text-lg">Paket Growth</h3>
                    <p className="text-sm opacity-90">Most Value! Naikin Awareness!</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground line-through mr-2">493k</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">599K</span>
                      <p className="text-sm text-primary font-medium italic">Hemat 114k</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Reels + Repost Story</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Feed Carousel + Repost Story</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE 1x IG Story Image</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Copywriting</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Carousel Design</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Caption & Hashtag</strong></span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="http://wa.me/62895808860080" target="_blank">Hubungi via WhatsApp</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
                  <div className="bg-primary/10 p-4 text-center">
                    <h3 className="font-medium text-lg">Paket Premium</h3>
                    <p className="text-sm text-muted-foreground">Full Attack Buat Closing Maksimal!</p>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <span className="text-sm text-muted-foreground line-through mr-2">686k</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">849K</span>
                      <p className="text-sm text-primary font-medium italic">Hemat 187k</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Reels + Mirror Tiktok + Repost Story</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Feed Carousel + Repost Story</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">1x IG Story Video</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE 2x IG Story Image</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Copywriting</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Carousel Design</strong></span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                        <span className="text-sm"><strong>FREE Caption & Hashtag</strong></span>
                      </li>
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href="http://wa.me/62895808860080" target="_blank">Hubungi via WhatsApp</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>

            <ContentBlock title={t('speakingEngagement')}>
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-2">
                  {t('language') === 'id'
                    ? "Layanan speaking engagement untuk berbagai acara teknologi, workshop, dan seminar dengan topik pengembangan web, AI, dan karir teknologi."
                    : "Speaking engagement services for various technology events, workshops, and seminars with topics on web development, AI, and technology careers."
                  }
                </p>
              </div>

              {/* WEBINAR PACKAGE */}
              <div className="mb-12">
                <div className="flex items-center mb-6 bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <MonitorPlay className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">WEBINAR PACKAGE (Online)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Webinar */}
                  <Card className="flex flex-col h-full hover:border-primary/50 transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Basic Webinar</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">500.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 45-60 menit' : 'Duration 45-60 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? '1 topik utama' : '1 main topic'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Q&A 10–15 menit' : 'Q&A 10–15 minutes'}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Standard Webinar */}
                  <Card className="flex flex-col h-full border-primary/50 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg font-medium">Popular</div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Standard Webinar</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">1.000.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 60–90 menit' : 'Duration 60–90 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Custom materi sesuai target audience' : 'Custom material suited to target audience'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Q&A 20–30 menit' : 'Q&A 20–30 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Materi PDF/Link Slide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Story Event Promote</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Premium Webinar */}
                  <Card className="flex flex-col h-full border-amber-400 dark:border-amber-600 bg-amber-50/30 dark:bg-amber-900/10 hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Premium Webinar</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">1.500.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 60-120 menit' : 'Duration 60-120 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Custom materi + Studi kasus' : 'Custom material + Case study'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Q&A 30 menit' : 'Q&A 30 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Materi PDF + resource tambahan' : 'PDF Material + additional resources'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Follow-up Q&A via DM IG (3 hari)' : 'Follow-up Q&A via IG DM (3 days)'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Story Event Promote</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Reels + Tiktok Event Promote</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* SEMINAR / OFFLINE TALK */}
              <div className="mb-12">
                <div className="flex items-center mb-6 bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <Mic className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">SEMINAR / OFFLINE TALK</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Seminar */}
                  <Card className="flex flex-col h-full hover:border-primary/50 transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Basic Seminar</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">900.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 45-60 menit' : 'Duration 45-60 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? '1 topik utama' : '1 main topic'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Q&A 10-15 Menit' : 'Q&A 10-15 Minutes'}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Professional Seminar */}
                  <Card className="flex flex-col h-full border-primary/50 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg font-medium">Popular</div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Professional Seminar</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">1.500.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 60–90 menit' : 'Duration 60–90 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Custom materi sesuai request' : 'Custom material as requested'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Q&A 20-30 menit' : 'Q&A 20-30 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Networking session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Materi PDF/Link Slide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Story Event Promote</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Signature Seminar */}
                  <Card className="flex flex-col h-full border-amber-400 dark:border-amber-600 bg-amber-50/30 dark:bg-amber-900/10 hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Signature Seminar</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">2.200.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 60–120 menit' : 'Duration 60–120 minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Custom materi sesuai kebutuhan event' : 'Custom material suited to event needs'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Studi kasus relevan audience' : 'Relevant audience case study'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Q&A extended</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Networking session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Soft workshop mini session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Materi PDF/Link Slide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Resource & template</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Story Event Promote</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Reels+tiktok Event Promote</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* WORKSHOP (Hands-On) */}
              <div className="mb-12">
                <div className="flex items-center mb-6 bg-primary/5 p-3 rounded-lg border border-primary/10">
                  <Brain className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">WORKSHOP (Hands-On)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Basic Workshop */}
                  <Card className="flex flex-col h-full hover:border-primary/50 transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Basic Workshop</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">1.500.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 60 Menit' : 'Duration 60 Minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Hands-on basic</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Studi kasus sederhana' : 'Simple case study'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Tanpa source code kompleks' : 'No complex source code'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Tanpa support pasca event' : 'No post-event support'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? '1 topik utama' : '1 main topic'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Q&A 10–15 menit' : 'Q&A 10–15 minutes'}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Intensive Workshop */}
                  <Card className="flex flex-col h-full border-primary/50 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-bl-lg font-medium">Popular</div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Intensive Workshop</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">2.500.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Durasi 120–180 Menit' : 'Duration 120–180 Minutes'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Real project build</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Source code repository</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Slide + PDF</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? '3 hari post-event Q&A' : '3 days post-event Q&A'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Networking session</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Materi PDF/Link Slide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Story Event Promote</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Masterclass Workshop */}
                  <Card className="flex flex-col h-full border-amber-400 dark:border-amber-600 bg-amber-50/30 dark:bg-amber-900/10 hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-bold text-lg">Masterclass Workshop</h4>
                        </div>
                        <div className="text-2xl font-bold text-primary">3.200.000</div>
                      </div>
                      <ul className="space-y-2 text-sm flex-grow">
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Full hands-on real case production</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Repo + template project reusable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? '7 hari post-event support' : '7 days post-event support'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Bonus checklist & tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('language') === 'id' ? 'Soft consultation 30 menit dengan panitia' : 'Soft consultation 30 mins with committee'}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Materi PDF/Link Slide</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Resource & template</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Story Event Promote</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>1x IG Reels+tiktok Event Promote</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-4 p-4 border-2 border-amber-300 bg-amber-50 rounded-lg text-sm flex gap-3 items-center dark:border-amber-800 dark:bg-amber-900">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-300 flex-shrink-0" />
                  <p>{t('language') === 'id' 
                     ? 'Travel luar kota untuk sesi offline: transport PP + akomodasi ditanggung oleh penyelenggara'
                     : 'Out of town travel: Round-trip transport + accommodation covered by organizer'}</p>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium mb-3">
                  {t('language') === 'id' ? 'Harga dapat disesuaikan berdasarkan:' : 'Prices can be adjusted based on:'}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('language') === 'id' ? 'Lokasi event (dalam/luar kota)' : 'Event location (in/out of town)'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('language') === 'id' ? 'Durasi dan kompleksitas materi' : 'Duration and material complexity'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('language') === 'id' ? 'Persiapan materi khusus' : 'Special material preparation'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('language') === 'id' ? 'Jumlah peserta dan target audience' : 'Number of participants and target audience'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('language') === 'id' ? 'Jenis organisasi (komersial/non-profit/pendidikan)' : 'Type of organization (commercial/non-profit/education)'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Previous Events Social Proof */}
              <div className="mt-12 pt-8 border-t border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold tracking-tight">
                    {t('language') === 'id' ? 'Event Sebelumnya' : 'Previous Events'}
                  </h3>
                  <Button variant="ghost" className="gap-2" asChild>
                    <Link href="/speaking">
                      {t('language') === 'id' ? 'Lihat Semua' : 'View All'} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {pastEvents.slice(0, 3).map((event) => (
                    <Card key={event.id} className="hover:border-primary/50 transition-all duration-200 overflow-hidden group">
                      <CardContent className="p-0 h-full">
                        <div className="flex flex-row h-full">
                           <div className="relative w-24 md:w-28 flex-shrink-0 bg-muted">
                              <Image 
                                src={event.imageSrc} 
                                alt={t('language') === 'id' ? event.title.id : event.title.en}
                                fill
                                className={`object-cover ${event.imageClassName || ''}`}
                              />
                           </div>
                           
                           <div className="flex-1 p-3 flex flex-col justify-center min-w-0">
                              <div className="mb-2">
                                <Badge variant="secondary" className="mb-1 text-[10px] px-1.5 py-0 h-5">{event.category}</Badge>
                                <h4 className="font-bold line-clamp-2 text-xs md:text-sm leading-tight group-hover:text-primary transition-colors">
                                  {t('language') === 'id' ? event.title.id : event.title.en}
                                </h4>
                              </div>
                              <div className="space-y-1 text-[10px] md:text-xs text-muted-foreground">
                                <div className="flex items-center gap-1.5">
                                  <Calendar className="h-3 w-3 flex-shrink-0" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="h-3 w-3 flex-shrink-0" />
                                  <span className="truncate">{event.location}</span>
                                </div>
                              </div>
                           </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title={t('workProcess')}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Konsultasi' : 'Consultation'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id' ? 'Diskusi kebutuhan dan tujuan konten Anda' : 'Discuss your content needs and goals'}
                  </p>
                </div>

                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Perencanaan' : 'Planning'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id' ? 'Menyusun rencana dan naskah konten' : 'Develop content plan and script'}
                  </p>
                </div>

                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Produksi' : 'Production'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id' ? 'Pembuatan konten sesuai dengan rencana' : 'Content creation according to plan'}
                  </p>
                </div>

                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Publikasi' : 'Publication'}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id' ? 'Penerbitan konten dan share analisis performa' : 'Content publication and performance analysis sharing'}
                  </p>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-4">
                  {t('language') === 'id'
                    ? "Siap bantu brand, produk, atau campaign Anda tampil standout di media sosial!"
                    : "Ready to help your brand, product, or campaign stand out on social media!"
                  }
                </h3>
                <p className="mb-6 max-w-2xl mx-auto">
                  {t('language') === 'id'
                    ? "Konten berkualitas tinggi adalah kunci untuk membangun brand awareness dan engagement di media sosial. Yuk, Hubungi saya sekarang untuk mendiskusikan kebutuhan konten Anda."
                    : "High-quality content is the key to building brand awareness and engagement on social media. Let's contact me now to discuss your content needs."
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">{t('contactMe')}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://www.instagram.com/adityafakhrii/" target="_blank">
                      {t('language') === 'id' ? 'Lihat Portfolio' : 'View Portfolio'}
                    </Link>
                  </Button>
                </div>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}