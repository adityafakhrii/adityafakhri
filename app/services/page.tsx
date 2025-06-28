import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Instagram, ImageIcon, Film, Mic } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader
        title="Layanan & Harga"
        description="Layanan konten berbayar untuk brand, produk, atau campaign Anda."
      />

      <div className="mt-8 space-y-8">
        <ContentBlock>
          <div className="text-lg text-muted-foreground mb-6">
            <p>
              Menawarkan berbagai layanan content creation untuk Instagram dengan harga yang kompetitif. Semua layanan mencakup konsultasi awal, revisi, dan pengiriman file dalam format yang dibutuhkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
              <div className="bg-primary/10 p-4 flex items-center">
                <Instagram className="h-5 w-5 mr-2 text-primary" />
                <h3 className="font-medium text-lg">Instagram Story</h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">IG Story Image</p>
                        <p className="text-sm text-muted-foreground">Maksimal 2 story</p>
                      </div>
                    </div>
                    <Badge className="text-lg font-semibold">89K</Badge>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">IG Story Video</p>
                        <p className="text-sm text-muted-foreground">Maksimal 1 story</p>
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
                <h3 className="font-medium text-lg">Instagram Feed</h3>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Single Post</p>
                        <p className="text-sm text-muted-foreground">1 gambar berkualitas tinggi</p>
                      </div>
                    </div>
                    <Badge className="text-lg font-semibold">139K</Badge>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Carousel</p>
                        <p className="text-sm text-muted-foreground">10 slide gambar dalam satu post</p>
                      </div>
                    </div>
                    <Badge className="text-lg font-semibold">159K</Badge>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Single Post + Repost Story</p>
                        <p className="text-sm text-muted-foreground">1 gambar dengan tambahan story</p>
                      </div>
                    </div>
                    <Badge className="text-lg font-semibold">149K</Badge>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Carousel + Repost Story</p>
                        <p className="text-sm text-muted-foreground">10 slide gambar dengan tambahan story</p>
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
                <h3 className="font-medium text-lg">Instagram Reels & Video</h3>
              </div>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">IG Reels</p>
                          <p className="text-sm text-muted-foreground">Video maksimal 90 detik dengan format 9:16</p>
                        </div>
                      </div>
                      <Badge className="text-lg font-semibold">229K</Badge>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">IG Reels + Repost Story</p>
                          <p className="text-sm text-muted-foreground">Video reels dengan tambahan repost story</p>
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
                          <p className="text-sm text-muted-foreground">Video untuk Instagram dan TikTok dengan durasi maksimal 90 detik</p>
                        </div>
                      </div>
                      <Badge className="text-lg font-semibold">279K</Badge>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h4 className="font-medium mb-2">Keuntungan Tambahan:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span className="text-sm">Optimasi untuk algoritma platform</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span className="text-sm">Musik dan efek yang trending</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                          <span className="text-sm">Caption dan hashtag yang relevan</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>

        <ContentBlock title="Speaking Engagement">
          <div className="mb-6">
            <p className="text-lg text-muted-foreground">
              Layanan speaking engagement untuk berbagai acara teknologi, workshop, dan seminar dengan topik pengembangan web, AI, dan karir teknologi.
            </p>
          </div>

          <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
            <div className="bg-primary/10 p-4 flex items-center">
              <Mic className="h-5 w-5 mr-2 text-primary" />
              <h3 className="font-medium text-lg">Speaking Services</h3>
            </div>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Workshop/Training</p>
                      <p className="text-sm text-muted-foreground">Durasi 2-4 jam dengan hands-on practice</p>
                    </div>
                  </div>
                  <Badge className="text-lg font-semibold">2.000.000 - 3.000.000</Badge>
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Seminar/Conference Talk</p>
                      <p className="text-sm text-muted-foreground">Durasi 1-2 jam dengan Q&A session</p>
                    </div>
                  </div>
                  <Badge className="text-lg font-semibold">500.000 - 3.000.000</Badge>
                </div>

                <div className="flex justify-between items-start">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Webinar/Online Talk</p>
                      <p className="text-sm text-muted-foreground">Durasi 1-2 jam via platform online</p>
                    </div>
                  </div>
                  <Badge className="text-lg font-semibold">350.000 - 2.000.000</Badge>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-medium mb-3">Harga dapat disesuaikan berdasarkan:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-sm">Lokasi event (dalam/luar kota)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-sm">Durasi dan kompleksitas materi</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-sm">Persiapan materi khusus</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-sm">Jumlah peserta dan target audience</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span className="text-sm">Jenis organisasi (komersial/non-profit/pendidikan)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </ContentBlock>

        <ContentBlock title="Paket Bundling">
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
                  {/* <span className="text-muted-foreground">/bulan</span> */}
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
                  {/* <span className="text-muted-foreground">/bulan</span> */}
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
                    <span className="text-sm"><strong>FREE  Carousel Design</strong></span>
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
                  {/* <span className="text-muted-foreground">/bulan</span> */}
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
                    <span className="text-sm"><strong>FREE  Carousel Design</strong></span>
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

        <ContentBlock title="Proses Kerja">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 border rounded-lg text-center">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Konsultasi</h3>
              <p className="text-sm text-muted-foreground">Diskusi kebutuhan dan tujuan konten Anda</p>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Perencanaan</h3>
              <p className="text-sm text-muted-foreground">Menyusun rencana dan naskah konten</p>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Produksi</h3>
              <p className="text-sm text-muted-foreground">Pembuatan konten sesuai dengan rencana</p>
            </div>

            <div className="p-6 border rounded-lg text-center">
              <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-medium mb-2">Publikasi</h3>
              <p className="text-sm text-muted-foreground">Penerbitan konten dan share analisis performa</p>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Siap bantu brand, produk, atau campaign Anda tampil standout di media sosial!</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Konten berkualitas tinggi adalah kunci untuk membangun brand awareness dan engagement di media sosial.
              Yuk, Hubungi saya sekarang untuk mendiskusikan kebutuhan konten Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Hubungi Saya</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://www.instagram.com/adityafakhrii/" target="_blank">Lihat Portfolio</Link>
              </Button>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}