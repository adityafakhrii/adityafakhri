import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SpeakingPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Speaking & Events" description="Riwayat sebagai pembicara di acara dan konferensi teknologi" />

      <div className="mt-8 space-y-8">
        <ContentBlock title="🎙️ Upcoming Events">
          <p className="text-lg mb-4">
            Hey! Ini nih jadwal event-event yang bakal saya isi sebagai speaker dalam waktu dekat.
          </p>
          <div className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://i.ibb.co/YBYKVTHB/qwords.jpg"
                      alt="Qwords Digital Sprint"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Workshop</Badge>
                      <Badge variant="outline">Personal Branding</Badge>
                      <Badge variant="outline">Career Development</Badge>
                    </div>
                    <h3 className="font-medium text-xl">Belajar Bikin Website 10 Hari, Langsung Siap Terima Project!</h3>
                    <h4 className="text-lg text-muted-foreground">Qwords Digital Sprint</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        25 Juli 2025
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        19.00-21.00 WIB
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Zoom Meeting
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      Sesi khusus membahas tentang pengembangan karir sebagai developer, meliputi:
                      <ul className="list-disc list-inside mt-1">
                        <li>Membangun personal branding dan portofolio yang menarik</li>
                        <li>Teknik pitching efektif untuk HRD dan klien</li>
                        <li>Membangun mindset kolaboratif dalam tim development</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://s.id/qdswebdev" target="_blank">
                          Daftar Sekarang
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      Diselenggarakan oleh: Qwords Cloud Web Hosting Indonesia
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>

        <ContentBlock title="🎯 Past Events">
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
                  src="https://i.ibb.co/0RPc0Tfc/upilaravel.jpg"
                  alt="Workshop Laravel 12"
                  fill
                  className="object-cover object-bottom"
                />
                </div>
                <div className="md:col-span-2 p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge>Workshop</Badge>
                  <Badge variant="outline">Laravel 12</Badge>
                  <Badge variant="outline">Web Development</Badge>
                </div>
                <h3 className="font-medium text-xl">Membuat Aplikasi Web Sederhana dengan Laravel 12</h3>
                <h4 className="text-lg text-muted-foreground">Pelatihan Laravel 12 untuk Pemula + Studi Kasus</h4>
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
                <div className="mt-4 text-sm text-muted-foreground">
                  Diselenggarakan oleh: Himpunan Mahasiswa Ilmu Komputer UPI
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
                  src="https://i.ibb.co/Y7WdG29h/instagram-KF.png"
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
                <h3 className="font-medium text-xl">Styling Website Dengan Tailwind dari Nol</h3>
                <h4 className="text-lg text-muted-foreground">Kelas Fullstack Live Class</h4>
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
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://www.codepolitan.com/course/intro/tailwind-dasar-desain-web-kilat-jaman-sekarang/" target="_blank">
                      Tonton Rekaman
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://pay.codepolitan.com/?slug=program-fullstack-web-development-lifetime&coupon=ADITYAFAKHRI" target="_blank">
                      Join Kelas Fullstack
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  Diselenggarakan oleh: CODEPOLITAN
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
                  src="https://i.ibb.co/JWTgsxfB/chayon.jpg"
                  alt="Chayon Masterclass"
                  fill
                  className="object-cover object-top"
                />
                </div>
                <div className="md:col-span-2 p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge>Masterclass</Badge>
                  <Badge variant="outline">Roadmap</Badge>
                  <Badge variant="outline">Career</Badge>
                </div>
                <h3 className="font-medium text-xl">Roadmap Menjadi Programmer Profesional: Dari Nol Sampai Pro</h3>
                <h4 className="text-lg text-muted-foreground">Chayon Masterclass</h4>
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
                <div className="mt-4 text-sm text-muted-foreground">
                  Diselenggarakan oleh: Chayon Online Course
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
                      src="https://i.ibb.co/Q7nbmP8b/aico.jpg"
                      alt="AI Driven Webcraft"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Webinar</Badge>
                      <Badge variant="outline">AI</Badge>
                      <Badge variant="outline">Web Development</Badge>
                    </div>
                    <h3 className="font-medium text-xl">AI Driven Webcraft: Transform Your Ideas into Websites</h3>
                    <h4 className="text-lg text-muted-foreground">AI Webcrafting: Dari Ide ke Website dalam Hitungan Menit</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        25 April 2025
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        19.00-20.00 WIB
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Zoom Meeting
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Demo langsung penggunaan AI untuk membangun website dengan tools seperti v0.dev dan Bolt. Mengenalkan AI-driven development untuk developer pemula dan praktisi industri kreatif.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://drive.google.com/file/d/1-aftW3xwVdJX0ZXjFJyc1ajnWAfsMOL5/view?usp=sharing" target="_blank">
                          Tonton Rekaman
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      Diselenggarakan oleh: AICO Community
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
                      src="https://i.ibb.co/6cQzb5Kh/bsb.png"
                      alt="More Than Just Code"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Webinar</Badge>
                      <Badge variant="outline">Personal Branding</Badge>
                      <Badge variant="outline">Career Development</Badge>
                    </div>
                    <h3 className="font-medium text-xl">More Than Just Code: Build a Powerful Personal Brand as a Developer</h3>
                    <h4 className="text-lg text-muted-foreground">Membangun Personal Brand yang Kuat sebagai Developer</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        20 Maret 2025
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        15.00-16.00 WIB
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Zoom Meeting
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Sesi ini fokus pada personal branding developer. Membahas cara membangun reputasi melalui komunikasi efektif, berbagi pengetahuan, dan aktif di komunitas teknologi.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://gdgbandung.com/bsb9" target="_blank">
                          Daftar Sekarang
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      Diselenggarakan oleh: GDG Bandung, GDG On Campus & Binary Nusantara
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
                      src="https://i.ibb.co/rGqXvKp2/partiums.jpg"
                      alt="Seminar Nasional Technology Ethics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Seminar</Badge>
                      <Badge variant="outline">Technology Ethics</Badge>
                      <Badge variant="outline">Digital Literacy</Badge>
                    </div>
                    <h3 className="font-medium text-xl">Seminar Nasional: Technology Ethics and Social Impact</h3>
                    <h4 className="text-lg text-muted-foreground">Literasi dan Etika di Era Teknologi</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        05 Oktober 2024
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Universitas Muhammadiyah Surakarta
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Seminar nasional membahas etika teknologi dan dampaknya terhadap masyarakat, mencakup:
                      <ul className="list-disc list-inside mt-1">
                        <li>Etika penggunaan teknologi di ranah publik</li>
                        <li>Dampak sosial dari digitalisasi dan kecerdasan buatan</li>
                        <li>Peran developer dalam membentuk ekosistem digital yang sehat</li>
                      </ul>
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#" target="_blank">
                          Daftar Sekarang
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      Diselenggarakan oleh: HIMATIF Universitas Muhammadiyah Surakarta
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