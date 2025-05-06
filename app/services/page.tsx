import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Instagram, ImageIcon, Film } from "lucide-react"
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
                        <p className="text-sm text-muted-foreground">Multiple gambar dalam satu post</p>
                      </div>
                    </div>
                    <Badge className="text-lg font-semibold">159K</Badge>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Single Post + Re-story</p>
                        <p className="text-sm text-muted-foreground">Post feed dengan tambahan story</p>
                      </div>
                    </div>
                    <Badge className="text-lg font-semibold">149K</Badge>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Carousel + Re-story</p>
                        <p className="text-sm text-muted-foreground">Post carousel dengan tambahan story</p>
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
                          <p className="text-sm text-muted-foreground">Video pendek format vertikal</p>
                        </div>
                      </div>
                      <Badge className="text-lg font-semibold">229K</Badge>
                    </div>

                    <div className="flex justify-between items-start">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">IG Reels + Repost Story</p>
                          <p className="text-sm text-muted-foreground">Video reels dengan tambahan story</p>
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
                          <p className="text-sm text-muted-foreground">Video untuk Instagram dan TikTok</p>
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

        <ContentBlock title="Paket Bundling">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
              <div className="bg-primary/10 p-4 text-center">
                <h3 className="font-medium text-lg">Paket Starter</h3>
                <p className="text-sm text-muted-foreground">Untuk bisnis kecil</p>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">499K</span>
                  <span className="text-muted-foreground">/bulan</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">4 IG Feed Posts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">4 IG Stories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">1 IG Reels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Caption & Hashtag</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Hubungi Saya</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-primary transition-all duration-200 shadow-md">
              <div className="bg-primary p-4 text-center text-primary-foreground">
                <h3 className="font-medium text-lg">Paket Growth</h3>
                <p className="text-sm opacity-90">Paling Populer</p>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">899K</span>
                  <span className="text-muted-foreground">/bulan</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">8 IG Feed Posts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">8 IG Stories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">2 IG Reels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Caption & Hashtag</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Content Calendar</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Basic Analytics</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Hubungi Saya</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-200">
              <div className="bg-primary/10 p-4 text-center">
                <h3 className="font-medium text-lg">Paket Premium</h3>
                <p className="text-sm text-muted-foreground">Untuk bisnis serius</p>
              </div>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">1.499K</span>
                  <span className="text-muted-foreground">/bulan</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">12 IG Feed Posts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">15 IG Stories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">4 IG Reels</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Caption & Hashtag</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Content Calendar</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Advanced Analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                    <span className="text-sm">Competitor Analysis</span>
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/contact">Hubungi Saya</Link>
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
                <Link href="/projects">Lihat Portfolio</Link>
              </Button>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
