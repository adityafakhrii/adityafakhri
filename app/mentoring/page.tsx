"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  Star, 
  Code, 
  Camera, 
  CreditCard, 
  Search,
  Shield,
  Award,
  MessageSquare,
  ExternalLink,
  Sparkles
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"

export default function MentoringPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20 text-center">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-300">
              Batch 1 - Pendaftaran Terbuka
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Mentoring with Aditya
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Laravel & Soft Skill Intensive Mentoring - Build Real Wedding Guest App
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Program mentoring singkat, padat, tapi berdampak buat web developer pemula yang ingin naik level dengan real project & upgrade soft skill!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="http://wa.me/62895808860080" target="_blank">
                  Daftar Sekarang
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="http://wa.me/62895808860080" target="_blank">
                  Tanya Mentor
                </Link>
              </Button>
            </div>

            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h3 className="font-medium text-lg mb-2">Project yang Akan Kamu Bangun:</h3>
              <h4 className="text-xl font-bold text-primary mb-3">Aplikasi Tamu Resepsi Pernikahan</h4>
              <p className="text-muted-foreground">
                Aplikasi lengkap dengan fitur CRUD, QRIS payment integration, kamera check-in, search & filter, plus admin panel yang siap pakai untuk bisnis wedding organizer!
              </p>
            </div>
          </section>

          {/* Apa yang Akan Dipelajari */}
          <ContentBlock title="🎯 Apa yang Akan Dipelajari?" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Program komprehensif yang menggabungkan skill teknis dan soft skill untuk karir yang sukses
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Real Laravel Project</h3>
                      <p className="text-sm text-muted-foreground">
                        Build aplikasi Tamu Resepsi Pernikahan dengan fitur CRUD, QRIS payment, kamera check-in, dan admin panel yang lengkap
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">CV & Portfolio Review</h3>
                      <p className="text-sm text-muted-foreground">
                        Review mendalam CV dan portfolio kamu agar siap tempur di dunia kerja dengan feedback yang actionable
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Soft Skill Development</h3>
                      <p className="text-sm text-muted-foreground">
                        Personal branding, penggunaan AI tools, dan strategi career growth yang akan membedakan kamu dari yang lain
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentBlock>

          {/* Timeline */}
          <ContentBlock title="📅 Timeline Program" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              4 sesi intensif yang akan mengubah karir kamu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">Kickoff & Overview Proyek</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Rabu, 25 Juni 2025
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          19.00 WIB
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">CRUD + Midtrans</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Minggu, 29 Juni 2025
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          16.00 WIB
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">Search, Kamera, Finalisasi</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Rabu, 2 Juli 2025
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          19.00 WIB
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <span className="text-lg font-bold">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-lg">Soft Skill & Portofolio</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          Minggu, 6 Juli 2025
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          16.00 WIB
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-6 text-center">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                Semua sesi direkam & bisa ditonton ulang!
              </Badge>
            </div>
          </ContentBlock>

          {/* Target Peserta */}
          <ContentBlock title="🎯 Target Peserta" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Siapa yang cocok mengikuti program ini?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Web Developer Pemula - Yang pengen naik level skill dan karir",
                "Programmer Tanpa Portfolio - Yang belum punya showcase project",
                "Freelancer - Yang butuh proyek untuk portfolio",
                "Fresh Graduate - Yang bingung mulai karir dari mana"
              ].map((target, index) => (
                <div key={index} className="flex items-start p-4 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{target}</span>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Benefits */}
          <ContentBlock title="✨ Benefit Program" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Apa yang kamu dapatkan dari program ini
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Live Mentoring 4 Sesi",
                  description: "Total 6+ jam pembelajaran intensif dengan mentor berpengalaman"
                },
                {
                  icon: MessageSquare,
                  title: "Grup Diskusi Private",
                  description: "Akses eksklusif ke grup diskusi untuk bertanya dan sharing"
                },
                {
                  icon: Code,
                  title: "Studi Kasus Real Project",
                  description: "Aplikasi Tamu Resepsi Pernikahan dengan fitur lengkap"
                },
                {
                  icon: Award,
                  title: "File Materi & Rekaman",
                  description: "Semua materi dan rekaman sesi bisa diakses selamanya"
                },
                {
                  icon: Star,
                  title: "CV & Portfolio Review",
                  description: "Review mendalam untuk meningkatkan daya saing kamu"
                },
                {
                  icon: CheckCircle,
                  title: "Sertifikat Digital",
                  description: "Sertifikat kelulusan yang bisa ditambahkan ke LinkedIn"
                }
              ].map((benefit, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <benefit.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ContentBlock>

          {/* Studi Kasus Project */}
          <ContentBlock title="💼 Studi Kasus: Laravel Guestbook App" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Project nyata yang akan kamu bangun selama program
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4">Fitur Utama Aplikasi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Users, title: "Input Data Tamu", desc: "Form registrasi tamu dengan validasi lengkap" },
                  { icon: CreditCard, title: "QRIS untuk Donasi", desc: "Integrasi Midtrans untuk pembayaran digital" },
                  { icon: Camera, title: "Kamera Check-in", desc: "Fitur foto untuk dokumentasi kehadiran tamu" },
                  { icon: Search, title: "Search & Filter", desc: "Pencarian dan filter data tamu yang efisien" },
                  { icon: Code, title: "Admin Panel CRUD", desc: "Dashboard admin untuk mengelola semua data" },
                  { icon: Shield, title: "Security Features", desc: "Authentication dan authorization yang proper" }
                ].map((feature, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center mb-2">
                      <feature.icon className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-medium">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm font-medium text-yellow-800">
                  <strong>Bonus:</strong> Best practice Laravel, clean code, dan deployment tips
                </p>
              </div>
            </div>
          </ContentBlock>

          {/* Mentor */}
          <ContentBlock title="👨‍🏫 Mentor" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Belajar langsung dari praktisi berpengalaman
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="https://i.ibb.co.com/849G20Hn/profile-pic-9.png"
                      alt="Aditya Fakhri Riansyah"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Aditya Fakhri Riansyah</h3>
                    <p className="text-muted-foreground mb-2">Technical Facilitator, AI-Driven Web Dev</p>
                    <p className="text-sm mb-4">Mentor @CODEPOLITAN | GDG Organizer | Ex-Panasonic project engineer</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Laravel</Badge>
                      <Badge variant="outline">Full Stack</Badge>
                      <Badge variant="outline">AI Integration</Badge>
                      <Badge variant="outline">Tech Speaker</Badge>
                    </div>
                    
                    <p className="text-sm text-muted-foreground">
                      Pembicara aktif di komunitas tech dengan pengalaman mengajar ratusan developer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ContentBlock>

          {/* Harga */}
          <ContentBlock title="💰 Harga Program" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Pilih paket yang sesuai dengan kebutuhan kamu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Early Bird */}
              <Card className="relative border-2 border-yellow-300 shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-yellow-500 text-yellow-50">Paling Populer</Badge>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Early Bird</h3>
                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground line-through mr-2">Rp149.000</span>
                    <span className="text-3xl font-bold">Rp99.000</span>
                  </div>
                  <p className="text-sm text-red-600 font-medium mb-4">Terbatas untuk 5 orang pertama</p>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    {[
                      "Akses semua 4 sesi live mentoring",
                      "Grup diskusi private",
                      "File materi & rekaman",
                      "Studi kasus project lengkap",
                      "CV & portfolio review",
                      "Sertifikat digital"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" asChild>
                    <Link href="http://wa.me/62895808860080" target="_blank">
                      Pilih Paket Ini
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Group Mentoring */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Group Mentoring</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">Rp149.000</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Akses semua sesi & materi</p>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    {[
                      "Akses semua 4 sesi live mentoring",
                      "Grup diskusi private",
                      "File materi & rekaman",
                      "Studi kasus project lengkap",
                      "CV & portfolio review",
                      "Sertifikat digital"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="http://wa.me/62895808860080" target="_blank">
                      Pilih Paket Ini
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Private 1:1 */}
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Private 1:1</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">Rp149.000</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">2 sesi x 60 menit, topik fleksibel</p>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    {[
                      "2 sesi private mentoring",
                      "Topik sesuai kebutuhan",
                      "Flexible scheduling",
                      "Personal guidance",
                      "Direct feedback",
                      "Sertifikat digital"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="http://wa.me/62895808860080" target="_blank">
                      Pilih Paket Ini
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg font-medium mb-4">
                Daftar sekarang dan mulai transformasi karir kamu!
              </p>
              <Button size="lg" asChild>
                <Link href="http://wa.me/62895808860080" target="_blank">
                  Daftar Sekarang
                </Link>
              </Button>
            </div>
          </ContentBlock>

          {/* Testimoni */}
          <ContentBlock title="💬 Testimoni Alumni" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Apa kata mereka yang sudah mengikuti mentoring
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Budi Santoso",
                  role: "Junior Developer • Tech Startup",
                  testimonial: "Program mentoring ini benar-benar mengubah cara saya memahami Laravel. Project wedding guest app yang dibangun sangat praktis dan bisa langsung dipakai untuk portfolio!"
                },
                {
                  name: "Sari Dewi",
                  role: "Fresh Graduate • Universitas Indonesia",
                  testimonial: "Soft skill session-nya sangat membantu! CV saya jadi lebih menarik dan akhirnya diterima kerja di perusahaan impian. Worth it banget!"
                },
                {
                  name: "Ahmad Rizki",
                  role: "Freelancer • Independent",
                  testimonial: "Mentornya sangat berpengalaman dan sabar. Materi CRUD + Midtrans integration sangat detail dan mudah dipahami. Recommended!"
                },
                {
                  name: "Maya Putri",
                  role: "Web Developer • Digital Agency",
                  testimonial: "Project yang dibangun sangat real-world. Fitur kamera check-in dan QRIS payment benar-benar applicable untuk bisnis nyata. Great learning experience!"
                }
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{testimonial.testimonial}"</p>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ContentBlock>

          {/* FAQ */}
          <ContentBlock title="❓ Frequently Asked Questions" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Pertanyaan yang sering ditanyakan tentang program ini
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Apakah program ini cocok untuk pemula?</AccordionTrigger>
                <AccordionContent>
                  Ya, program ini dirancang khusus untuk web developer pemula yang ingin naik level. Materi akan dijelaskan step-by-step mulai dari dasar hingga implementasi fitur advanced.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Bagaimana format belajarnya?</AccordionTrigger>
                <AccordionContent>
                  Format belajar adalah live mentoring via Zoom dengan durasi 1.5-2 jam per sesi. Semua sesi akan direkam dan bisa diakses kapan saja. Ada juga grup diskusi private untuk tanya jawab.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Apakah ada sertifikat setelah selesai program?</AccordionTrigger>
                <AccordionContent>
                  Ya, peserta yang menyelesaikan semua sesi akan mendapatkan sertifikat digital yang bisa ditambahkan ke LinkedIn dan portfolio.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Bagaimana jika saya tidak bisa mengikuti sesi live?</AccordionTrigger>
                <AccordionContent>
                  Tidak masalah! Semua sesi akan direkam dan bisa ditonton ulang. Kamu juga bisa bertanya di grup diskusi private jika ada yang kurang jelas.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Apakah ada tugas atau project yang wajib dikerjakan?</AccordionTrigger>
                <AccordionContent>
                  Project wedding guest app akan dikerjakan bersama-sama selama sesi mentoring. Tidak ada tugas wajib, tapi sangat disarankan untuk mengikuti dan mempraktikkan materi yang diberikan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </ContentBlock>

          {/* CTA Final */}
          <ContentBlock className="mt-12">
            <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">
                Siap Untuk Mengubah Karir Kamu?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Jangan sia-siakan kesempatan untuk belajar dari mentor berpengalaman dan bangun project yang akan membedakan kamu dari kandidat lain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="http://wa.me/62895808860080" target="_blank">
                    Daftar Sekarang
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="http://wa.me/62895808860080" target="_blank">
                    Tanya Mentor
                  </Link>
                </Button>
              </div>
            </div>
          </ContentBlock>
        </div>
      )}
    />
  )
}