"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Code, Lightbulb, Mic, Sparkles, ExternalLink, SquareCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ContentBlock } from "@/components/content-block"
import { ProjectCard } from "@/components/project-card"
import { TranslatedContent } from "@/components/translated-content"

export default function Home() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t('heroTitle')}</h1>
                <p className="text-xl text-muted-foreground">{t('heroSubtitle')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      {t('contactMe')}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/projects">{t('viewProjects')}</Link>
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
              <p>{t('heroDescription')}</p>
            </div>
          </ContentBlock>

          <ContentBlock title={`🤝 ${t('collaboration')}`} className="mt-12">
            <div className="grid grid-cols-5 gap-6">
                {[
                { name: "Google", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" },
                { name: "CodePolitan", src: "https://mustopa28121992.github.io/projectt/img/press-codepolitan--md5--c6cd986bfb1be889708b672e982814e0.png" },
                { name: "Dicoding", src: "https://landing-page-dicoding.vercel.app/img/dicoding-header-logo.png" },
                { name: "ITBOX", src: "https://itbox.id/wp-content/uploads/2022/10/ITbox-Logo.png" },
                { name: "Gamelab Indonesia", src: "https://www.gamelab.id/img/logo-gamelab/display/Logo_GameLab_Landscape1.png?v=3.10?v=3.1" },
                { name: "Algobash", src: "https://www.algobash.com/wp-content/uploads/2024/03/algo-black.png" },
                { name: "Progate", src: "https://gengigih.demopreview.link/assets/logo-partners/progate-logo.png" },
                { name: "Staditek", src: "https://www.staditek.id/wp-content/uploads/2022/06/StadiTek-logo.png" },
                { name: "Coding Studio", src: "https://codingstudio.id/wp-content/uploads/2025/02/Vector-150x150.png" },
                { name: "AICO Community", src: "https://static.tiptip.id/user/header-image/2a8b2eae-a4c4-42db-aad8-73771364c107.png" },
                { name: "Innovate Edutech", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg6KyS6WrO3v-QpI1PAKxNwVT4bt01-yiNIA&s" },
                { name: "Merdeka Siber", src: "https://scontent.fbdo9-1.fna.fbcdn.net/v/t39.30808-6/451865525_402219932836509_4421732481946305727_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHCd43HzB2LBUTvssEG_N7bcbndtoKtldtxud22gq2V262j10U2FFUFuqZCNDlSR6zOkE8i-CldxR_HiFcH1MNH&_nc_ohc=l_mR9wxI2HgQ7kNvwEHO8V7&_nc_oc=Adm8VZ0ZD0flFlTsVqF7wZQjNSNqM3TqiOx2C123vHxiCUh7xrohyrB23MrMlivJSs8&_nc_zt=23&_nc_ht=scontent.fbdo9-1.fna&_nc_gid=O40bqhZFvpmLmc2KiRI7cg&oh=00_AfGfMopYGIsTwZRl09zDUlmtqy9kq_shGqfdo0RgJP1coQ&oe=68167404" },
                { name: "Devcode AI", src: "https://i.ibb.co.com/RTxBnVBW/Devcode-AI.jpg" },
                { name: "Codemasters", src: "https://i.ibb.co.com/hnPWzZ6/416432286-1356985004947217-6764481526990047168-n.jpg" },
                { name: "Studpal", src: "https://media.cakeresume.com/image/upload/v1672292026/z3rqxffqfwsmi0ifsqvn.png" },
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

          <ContentBlock title={`✨ ${t('mainSkills')}`} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{t('frontendDev')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                    React, Next.js, Tailwind CSS, Bootstrap, HTML/CSS
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
                    <h3 className="font-medium">{t('backendDev')}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                    PHP, Laravel, JavaScript, MySQL
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
                      <h3 className="font-medium">{t('mentoring')}</h3>
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
                      <h3 className="font-medium">{t('contentCreation')}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Artikel teknis, Tutorial, Konten media sosial teknologi/pemrograman
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentBlock>

          <ContentBlock title={`📂 ${t('featuredProjects')}`} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="SIACTA"
                description="System Information Accounting & Tax: aplikasi web komprehensif untuk mengelola operasi keuangan dan kepatuhan pajak"
                imageSrc="/placeholder.svg?height=200&width=400"
                tags={["Laravel", "JavaScript", "MySQL", "Bootstrap"]}
                href="https://github.com/adityafakhrii/siacta"
              />

              <ProjectCard
                title="Restoranku"
                description="Sistem manajemen restoran dengan fitur pemesanan via QR code dan pembayaran QRIS via Midtrans."
                imageSrc="/placeholder.svg?height=200&width=400"
                tags={["Laravel", "JavaScript", "MySQL", "Bootstrap"]}
                href="/projects/restoranku"
              />

               <ProjectCard
                title="MedFluffy"
                description="Aplikasi mobile untuk prediksi dini penyakit mata pada anjing menggunakan CNN dan rekomendasi pertolongan pertama."
                imageSrc="/placeholder.svg?height=200&width=400"
                tags={["Kotlin", "Material", "TensorFlow", "Firebase"]}
                href="https://github.com/MedFluffy"
              />
              
              <ProjectCard
                title="Company Profile PT Herya Wood Furniture"
                description="Website profil perusahaan untuk menampilkan produk dan layanan PT Herya Wood Furniture"
                imageSrc="/placeholder.svg?height=200&width=400"
                tags={["Laravel", "JavaScript", "MySQL", "Bootstrap"]}
                href="https://heryawf.co.id/"
              />
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  {t('viewAll')} Proyek
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ContentBlock>

          <ContentBlock title={`📚 ${t('latestBlog')}`} className="mt-12">
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
                      <Link href="/blog/ai-web-development">{t('readMore')}</Link>
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
                      <Link href="/blog/nextjs-vs-react">{t('readMore')}</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  {t('viewAll')} Artikel
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ContentBlock>

          <ContentBlock title={`📞 ${t('contactMe')}`} className="mt-12">
            <div className="text-center">
              <p className="text-lg mb-6">
                Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">{t('contactMe')}</Link>
              </Button>
            </div>
          </ContentBlock>
        </div>
      )}
    />
  )
}