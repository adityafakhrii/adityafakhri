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
            <div className="p-4 border rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-medium">Indonesia Developer Summit 2024</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      15 Januari 2024
                    </span>
                  </p>
                </div>
                <Badge>Confirmed</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="font-medium">AI in Web Development Workshop</h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      28 Februari 2024
                    </span>
                  </p>
                </div>
                <Badge variant="outline">Tentative</Badge>
              </div>
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
                      src="/placeholder.svg?height=300&width=300&text=TechConf+2023"
                      alt="TechConf 2023"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Conference</Badge>
                      <Badge variant="outline">AI</Badge>
                      <Badge variant="outline">Web Development</Badge>
                    </div>
                    <h3 className="font-medium text-xl">TechConf 2023</h3>
                    <h4 className="text-lg text-muted-foreground">Mengintegrasikan AI dalam Aplikasi Web Modern</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        15 Oktober 2023
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Jakarta Convention Center
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Presentasi tentang cara mengintegrasikan model AI seperti GPT dan teknologi computer vision ke
                      dalam aplikasi web modern. Membahas best practices, pertimbangan etis, dan demo implementasi
                      praktis.
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

            <Card>
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=DevFest+2023"
                      alt="DevFest 2023"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Workshop</Badge>
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Performance</Badge>
                    </div>
                    <h3 className="font-medium text-xl">DevFest 2023</h3>
                    <h4 className="text-lg text-muted-foreground">Optimasi Performa Aplikasi React</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />5 Agustus 2023
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Bandung Digital Valley
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Workshop hands-on tentang teknik optimasi performa untuk aplikasi React. Peserta belajar tentang
                      memoization, code splitting, lazy loading, dan penggunaan profiler untuk mengidentifikasi
                      bottleneck.
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
                      src="/placeholder.svg?height=300&width=300&text=WebinarSeries"
                      alt="Webinar Series"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Webinar</Badge>
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">Serverless</Badge>
                    </div>
                    <h3 className="font-medium text-xl">TechTalk Webinar Series</h3>
                    <h4 className="text-lg text-muted-foreground">Membangun Aplikasi Serverless dengan Next.js</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        20 Juni 2023
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Online (Zoom)
                      </div>
                    </div>
                    <p className="mt-4 text-sm">
                      Webinar tentang pengembangan aplikasi serverless menggunakan Next.js dan Vercel. Membahas
                      keuntungan arsitektur serverless, implementasi API routes, dan strategi deployment yang efisien.
                    </p>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">
                          Tonton Rekaman
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
              <h3 className="font-medium mb-2">Web Development</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Modern React & Next.js</li>
                <li>Performance Optimization</li>
                <li>State Management Strategies</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">AI Integration</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>LLM APIs in Web Applications</li>
                <li>Computer Vision for Mobile Apps</li>
                <li>Ethical AI Implementation</li>
                <li>AI-Enhanced UX</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Mobile Development</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>React Native Best Practices</li>
                <li>Cross-Platform Development</li>
                <li>Native Module Integration</li>
                <li>Mobile App Performance</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Career & Mentorship</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li>Breaking into Tech</li>
                <li>Effective Mentorship</li>
                <li>Building a Personal Brand</li>
                <li>Continuous Learning Strategies</li>
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
