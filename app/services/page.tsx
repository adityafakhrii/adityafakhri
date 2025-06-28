"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Instagram, ImageIcon, Film, Mic } from "lucide-react"
import Link from "next/link"
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
                <p>
                  {t('language') === 'id' 
                    ? "Menawarkan berbagai layanan content creation untuk Instagram dengan harga yang kompetitif. Semua layanan mencakup konsultasi awal, revisi, dan pengiriman file dalam format yang dibutuhkan."
                    : "Offering various content creation services for Instagram at competitive prices. All services include initial consultation, revisions, and file delivery in the required format."
                  }
                </p>
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
                        <Badge className="text-lg font-semibold">89K</Badge>
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
                        <Badge className="text-lg font-semibold">99K</Badge>
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
                        <Badge className="text-lg font-semibold">139K</Badge>
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
                        <Badge className="text-lg font-semibold">159K</Badge>
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
                        <Badge className="text-lg font-semibold">149K</Badge>
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
                        <Badge className="text-lg font-semibold">169K</Badge>
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
                          <Badge className="text-lg font-semibold">229K</Badge>
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
                          <Badge className="text-lg font-semibold">239K</Badge>
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
                          <Badge className="text-lg font-semibold">279K</Badge>
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
                      <span className="text-sm text-muted-foreground line-through mr-2">268k</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">219k</span>
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
                      <span className="text-sm text-muted-foreground line-through mr-2">443k</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">329k</span>
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
                      <span className="text-sm text-muted-foreground line-through mr-2">636k</span>
                    </div>
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">449k</span>
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
                <p className="text-lg text-muted-foreground">
                  {t('language') === 'id' 
                    ? "Layanan speaking engagement untuk berbagai acara teknologi, workshop, dan seminar dengan topik pengembangan web, AI, dan karir teknologi."
                    : "Speaking engagement services for various technology events, workshops, and seminars with topics on web development, AI, and technology careers."
                  }
                </p>
              </div>

              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
                <div className="bg-primary/10 p-4 flex items-center">
                  <Mic className="h-5 w-5 mr-2 text-primary" />
                  <h3 className="font-medium text-lg">
                    {t('language') === 'id' ? 'Layanan Speaking' : 'Speaking Services'}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Workshop/Training</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id' ? 'Durasi 2-4 jam dengan hands-on practice' : '2-4 hours duration with hands-on practice'}
                          </p>
                        </div>
                      </div>
                      <Badge className="text-lg font-semibold">2.000.000 - 3.000.000</Badge>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Seminar/Conference Talk</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id' ? 'Durasi 1-2 jam dengan Q&A session' : '1-2 hours duration with Q&A session'}
                          </p>
                        </div>
                      </div>
                      <Badge className="text-lg font-semibold">500.000 - 3.000.000</Badge>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Webinar/Online Talk</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id' ? 'Durasi 1-2 jam via platform online' : '1-2 hours duration via online platform'}
                          </p>
                        </div>
                      </div>
                      <Badge className="text-lg font-semibold">350.000 - 2.000.000</Badge>
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
                  </div>
                </CardContent>
              </Card>
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