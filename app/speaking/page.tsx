import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpeakingPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Speaking & Events" description="Riwayat sebagai pembicara di acara dan konferensi teknologi" />

      <div className="mt-8 space-y-8">
        <ContentBlock title="🎙️ Upcoming Events">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg text-center">
              <h3 className="font-medium text-lg mb-2">Coming Soon</h3>
              <p className="text-muted-foreground text-sm">
          Belum ada event yang dijadwalkan. Pantau halaman ini untuk update selanjutnya!
              </p>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock>
          <p className="text-lg mb-6">
            Saya aktif berbagi pengetahuan dan pengalaman melalui berbagai acara teknologi, webinar, dan konferensi.
            Berikut adalah beberapa acara di mana saya menjadi pembicara.
          </p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Laravel+12"
                  alt="Workshop Laravel 12"
                  fill
                  className="object-cover"
                />
                </div>
                <div className="md:col-span-2 p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge>Workshop</Badge>
                  <Badge variant="outline">Laravel 12</Badge>
                  <Badge variant="outline">Web Development</Badge>
                </div>
                <h3 className="font-medium text-xl">Workshop Laravel 12</h3>
                <h4 className="text-lg text-muted-foreground">Laravel 12 untuk Pemula + Studi Kasus</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  04 Juni 2025
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Universitas Pendidikan Indonesia, Bandung
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Pelatihan intensif untuk pemula yang ingin mempelajari dasar-dasar Laravel 12. Peserta akan mempraktikkan pembuatan aplikasi web sederhana melalui studi kasus nyata, mulai dari instalasi hingga deployment.
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                  <Link href="#">
                    Lihat Materi
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                  </Button>
                </div>
                </div>
              </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=TailwindCSS"
                  alt="Kelas Fullstack Tailwind"
                  fill
                  className="object-cover"
                />
                </div>
                <div className="md:col-span-2 p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge>Workshop</Badge>
                  <Badge variant="outline">Fullstack</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                </div>
                <h3 className="font-medium text-xl">Kelas Fullstack by CODEPOLITAN</h3>
                <h4 className="text-lg text-muted-foreground">Styling Website Dengan Tailwind dari Nol</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Jumat, 16 Mei 2025
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Zoom Meeting
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Workshop interaktif membahas dasar-dasar penggunaan Tailwind CSS untuk styling website modern. Peserta akan belajar mulai dari instalasi, konsep utility-first, hingga praktik membangun tampilan responsif secara langsung.
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm" asChild>
                  <Link href="https://pay.codepolitan.com/?slug=program-fullstack-web-development-lifetime&coupon=ADITYAFAKHRI" target="_blank">
                    Join Kelas Fullstack
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                  </Button>
                </div>
                </div>
              </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                <Image
                  src="/placeholder.svg?height=300&width=300&text=Chayon+Masterclass"
                  alt="Chayon Masterclass"
                  fill
                  className="object-cover"
                />
                </div>
                <div className="md:col-span-2 p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge>Masterclass</Badge>
                  <Badge variant="outline">Roadmap</Badge>
                  <Badge variant="outline">Career</Badge>
                </div>
                <h3 className="font-medium text-xl">Chayon Masterclass</h3>
                <h4 className="text-lg text-muted-foreground">Roadmap Menjadi Programmer Profesional: Dari Nol Sampai Pro</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  03 Mei 2025
                  </div>
                  <div className="hidden sm:block">•</div>
                  <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Zoom Meeting
                  </div>
                </div>
                <p className="mt-4 text-sm">
                  Sesi masterclass membahas langkah-langkah praktis dan roadmap lengkap untuk menjadi programmer profesional, mulai dari dasar hingga siap kerja di industri. Cocok untuk pemula maupun yang ingin memperkuat fondasi karier di bidang teknologi.
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                  <Link href="https://youtu.be/7TAWMT56fxA?si=6nbY-4FbdskktfcV" target="_blank">
                    Tonton Rekaman
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                  <Link href="https://docs.google.com/presentation/d/1tbQUYvYjsHN5Sl7NyPcjjBTnY4NZjYat3yasWCuw29o/edit?usp=sharing" target="_blank">
                    Lihat Materi
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                  </Button>
                </div>
                </div>
              </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=MeetUp"
                      alt="React Meetup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Meetup</Badge>
                      <Badge variant="outline">React Native</Badge>
                      <Badge variant="outline">Mobile</Badge>
                    </div>
                    <h3 className="font-medium text-xl">React Indonesia Meetup</h3>
                    <h4 className="text-lg text-muted-foreground">Pengalaman Membangun Aplikasi MedFluffy</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        10 April 2023
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        GoWork Coworking Space, Jakarta
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Berbagi pengalaman dalam membangun aplikasi kesehatan hewan MedFluffy menggunakan React Native.
                      Membahas tantangan, solusi, dan pembelajaran selama proses pengembangan.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">
                          Lihat Slide
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>

        <ContentBlock title="📝 Topik yang Saya Bicarakan">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Fullstack Web Development with AI</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Laravel Framework & Ecosystem</li>
                <li>React.js & Next.js Development</li>
                <li>Tailwind CSS & Bootstrap</li>
                <li>Fullstack Development Best Practices</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">AI for Developers</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>AI Tools for Development</li>
                <li>Ethics in AI Development</li>
                <li>AI Integration Best Practices</li>
                <li>Prompt Engineering for Devs</li>
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
              <h3 className="font-medium mb-2">Softskill for Developer</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Career Development & Planning</li>
                <li>Personal Branding for Devs</li>
                <li>Technical Communication</li>
                <li>Time & Project Management</li>
              </ul>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock>
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">Tertarik untuk mengundang saya berbicara di acara Anda?</h3>
            <p className="mb-6">
            Saya tersedia untuk konferensi, workshop, webinar, dan meetups tentang topik-topik yang berkaitan dengan pengembangan web, integrasi AI, dan pengembangan karier teknologi. Silakan hubungi saya untuk mendiskusikan peluang kolaborasi dan bagaimana saya dapat membantu acara Anda.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
