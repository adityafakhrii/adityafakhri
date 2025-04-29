import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Code, Lightbulb, Mic, Sparkles, ExternalLink, SquareCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContentBlock } from "@/components/content-block"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Aditya Fakhri Riansyah</h1>
            <p className="text-xl text-muted-foreground">AI-Driven Web Developer, Mentor, Tech Content Creator</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Hubungi Saya
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">Lihat Proyek</Link>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/10">
              <Image
                src="https://i.ibb.co.com/G43QDGTX/profile1.jpg"
                alt="Aditya Fakhri Riansyah"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ContentBlock>
        <div className="text-lg text-muted-foreground">
          <p>
            Saya membangun aplikasi web dan mobile modern dengan fokus utama pada pengalaman pengguna, performa optimal, dan aksesibilitas. Saya juga aktif mengeksplorasi integrasi AI, membimbing melalui mentoring, dan berbagi pengetahuan lewat konten edukatif.
          </p>
        </div>
      </ContentBlock>

      <ContentBlock title="🤝 Kolaborasi" className="mt-12">
        <div className="grid grid-cols-5 gap-6">
          {[
            { name: "Google", src: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" },
            { name: "Company 2", src: "/placeholder.svg?height=60&width=120&text=Company 2" },
            { name: "Company 3", src: "/placeholder.svg?height=60&width=120&text=Company 3" },
            { name: "Company 4", src: "/placeholder.svg?height=60&width=120&text=Company 4" },
            { name: "Company 5", src: "/placeholder.svg?height=60&width=120&text=Company 5" },
          ].map((company, i) => (
            <div key={i} className="flex items-center justify-center p-4 bg-muted rounded-lg h-24">
              <Image
          src={company.src}
          alt={company.name}
          width={120}
          height={60}
          className="max-h-12 w-auto"
              />
            </div>
          ))}
        </div>
      </ContentBlock>

      <ContentBlock title="✨ Keahlian Utama" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Front-End Development</h3>
                <p className="text-sm text-muted-foreground mt-1">
                React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              </div>
            </CardContent>
            </Card>

            <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <SquareCode className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Back-End Development</h3>
                <p className="text-sm text-muted-foreground mt-1">
                Node.js, PHP, Laravel, JavaScript
                </p>
              </div>
              </div>
            </CardContent>
            </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mentoring</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Bimbingan teknis, Pengembangan karier, Code reviews, dan Workshop interaktif
                    </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Mic className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Content Creation</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Artikel teknis, Tutorial, Konten media sosial teknologi/pemrograman
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentBlock>

      <ContentBlock title="📂 Proyek Unggulan" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            title="SIACTA"
            description="Sistem Informasi Akademik Terpadu untuk manajemen perkuliahan dan nilai."
            imageSrc="/placeholder.svg?height=200&width=400"
            tags={["Next.js", "TypeScript", "Prisma"]}
            href="/projects/siacta"
          />

          <ProjectCard
            title="Company Profile Herza"
            description="Website profil perusahaan dengan desain modern dan responsif."
            imageSrc="/placeholder.svg?height=200&width=400"
            tags={["React", "Tailwind CSS", "Framer Motion"]}
            href="/projects/herza"
          />

          <ProjectCard
            title="MedFluffy"
            description="Aplikasi kesehatan hewan peliharaan dengan fitur AI untuk diagnosis awal."
            imageSrc="/placeholder.svg?height=200&width=400"
            tags={["React Native", "Firebase", "TensorFlow"]}
            href="/projects/medfluffy"
          />

          <ProjectCard
            title="Restoranku"
            description="Sistem manajemen restoran dengan fitur pemesanan online dan analitik."
            imageSrc="/placeholder.svg?height=200&width=400"
            tags={["Vue.js", "Node.js", "MongoDB"]}
            href="/projects/restoranku"
          />
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">
              Lihat Semua Proyek
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContentBlock>

      <ContentBlock title="💬 Testimoni" className="mt-12">
        <Card>
          <CardContent className="p-6">
            <blockquote className="border-l-4 border-primary pl-4 italic">
              "Aditya adalah developer yang sangat terampil dan kreatif. Ia mampu menerjemahkan ide kompleks menjadi
              solusi teknis yang elegan dan efisien."
            </blockquote>
            <div className="mt-4 text-sm text-muted-foreground">— Sarah Johnson, CTO at TechCorp</div>
          </CardContent>
        </Card>
      </ContentBlock>

      <ContentBlock title="📚 Blog Terbaru" className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=400" alt="Blog post" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg line-clamp-2">Mengintegrasikan AI dalam Pengembangan Web Modern</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                Bagaimana AI dapat meningkatkan pengalaman pengguna dan efisiensi dalam pengembangan web.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog/ai-web-development">Baca Selengkapnya</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-md">
            <div className="relative h-48 w-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=400" alt="Blog post" fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg line-clamp-2">Next.js vs React: Kapan Menggunakan Masing-masing?</h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                Perbandingan mendalam antara Next.js dan React untuk berbagai kasus penggunaan.
              </p>
              <div className="mt-4">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/blog/nextjs-vs-react">Baca Selengkapnya</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              Lihat Semua Artikel
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </ContentBlock>

      <ContentBlock title="📞 Hubungi Saya" className="mt-12">
        <div className="text-center">
          <p className="text-lg mb-6">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Hubungi Saya</Link>
          </Button>
        </div>
      </ContentBlock>
    </div>
  )
}
