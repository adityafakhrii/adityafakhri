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

export function ServicesContent() {
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
                  {t('k_c87f62d3')
                  }
                </p>
                <div className="flex items-center gap-2 text-base font-medium text-amber-600 dark:text-amber-500">
                  <AlertTriangle className="h-4 w-4" />
                  <p>
                    {t('k_0cf088db')}
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
                              {t('k_66540568')}
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
                              {t('k_84153cd0')}
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
                              {t('k_e88f98f3')}
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
                              {t('k_a4b29380')}
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
                              {t('k_fe10b4c3')}
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
                              {t('k_bea667c3')}
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
                                {t('k_73985b03')}
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
                                {t('k_e1054a3f')}
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
                                {t('k_004564b7')}
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
                                {t('k_4ac273e8')}
                              </p>
                            </div>
                          </div>
                          <Badge className="text-lg font-semibold">650K</Badge>
                        </div>

                        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                          <h4 className="font-medium mb-2">
                            {t('k_c55f1f51')}
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                              <span className="text-sm">
                                {t('k_66841d86')}
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                              <span className="text-sm">
                                {t('k_b96661d9')}
                              </span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                              <span className="text-sm">
                                {t('k_17681810')}
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
                      {t('k_fa3bad65')}
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
                      <span className="text-sm text-muted-foreground line-through mr-2">580K</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">349K</span>
                      <p className="text-sm text-primary font-medium italic">Hemat 231k</p>
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
                      <Link href="https://wa.me/62895808860080" target="_blank">Hubungi via WhatsApp</Link>
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
                      <span className="text-sm text-muted-foreground line-through mr-2">980K</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">599K</span>
                      <p className="text-sm text-primary font-medium italic">Hemat 381k</p>
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
                      <Link href="https://wa.me/62895808860080" target="_blank">Hubungi via WhatsApp</Link>
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
                      <span className="text-sm text-muted-foreground line-through mr-2">1.600K</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">849K</span>
                      <p className="text-sm text-primary font-medium italic">Hemat 751k</p>
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
                      <Link href="https://wa.me/62895808860080" target="_blank">Hubungi via WhatsApp</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>

            <ContentBlock title={t('speakingEngagement')}>
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-2">
                  {t('k_9cf5baf1')
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
                          <span>{t('k_e2b25e3b')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_af8cca51')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_42fcb671')}</span>
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
                          <span>{t('k_e8c8efa1')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_cf2887f0')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_2dbf5079')}</span>
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
                          <span>{t('k_c605befe')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_503b5a13')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_d4efabf2')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_f91a9d56')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_6085ce72')}</span>
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
                          <span>{t('k_e2b25e3b')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_af8cca51')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_2fa0f74e')}</span>
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
                          <span>{t('k_e8c8efa1')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_7bb17359')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_68fa9a7b')}</span>
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
                          <span>{t('k_3a9c8ca7')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_d4b13dd9')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_51c4a743')}</span>
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
                          <span>{t('k_e796b890')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Hands-on basic</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_ab37a58c')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_933e183f')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_804a72b6')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_af8cca51')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_42fcb671')}</span>
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
                          <span>{t('k_bc4dfc4a')}</span>
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
                          <span>{t('k_9bf8d454')}</span>
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
                          <span>{t('k_ee631a33')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Bonus checklist & tools</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{t('k_994145d0')}</span>
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
                  <p>{t('k_43ce7dd4')}</p>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium mb-3">
                  {t('k_4453f9b8')}
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('k_9356822a')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('k_459ff4e0')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('k_d78e67b6')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('k_a32b929c')}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">
                      {t('k_67a3c04d')}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Previous Events Social Proof */}
              <div className="mt-12 pt-8 border-t border-primary/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold tracking-tight">
                    {t('k_9faabb13')}
                  </h3>
                  <Button variant="ghost" className="gap-2" asChild>
                    <Link href="/speaking">
                      {t('k_d8d7ad6a')} <ArrowRight className="h-4 w-4" />
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
                    {t('k_6bf17fe4')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_0d3023ff')}
                  </p>
                </div>

                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('k_21d28aa0')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_105852d9')}
                  </p>
                </div>

                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('k_756d97bb')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_f7c2aff5')}
                  </p>
                </div>

                <div className="p-6 border rounded-lg text-center">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="font-medium mb-2">
                    {t('k_6bd6beac')}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_56c672f8')}
                  </p>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-4">
                  {t('k_0183cb4e')
                  }
                </h3>
                <p className="mb-6 max-w-2xl mx-auto">
                  {t('k_854cca49')
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link href="/contact">{t('contactMe')}</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="https://www.instagram.com/adityafakhrii/" target="_blank">
                      {t('k_647d0c72')}
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