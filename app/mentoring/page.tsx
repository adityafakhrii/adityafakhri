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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Mentoring with Aditya
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Private 1:1 Mentoring - Sesuai Kebutuhan & Request Kamu
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Mentoring personal yang disesuaikan dengan kebutuhan spesifik kamu. Mau belajar Laravel? React? Career guidance? Portfolio review? Semua bisa diatur sesuai request!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="https://forms.gle/BxPgHKrETedUfcfN7" target="_blank">
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
              <h3 className="font-medium text-lg mb-2">Mentoring Sesuai Kebutuhan Kamu:</h3>
              <h4 className="text-xl font-bold text-primary mb-3">100% Customizable Learning Path</h4>
              <p className="text-muted-foreground">
                Dari web development, mobile app, career guidance, portfolio review, hingga soft skill development - semua disesuaikan dengan goals dan level kamu saat ini!
              </p>
            </div>
          </section>

          {/* Apa yang Akan Dipelajari */}
          <ContentBlock title="Apa yang Akan Dipelajari?" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Topik mentoring yang bisa disesuaikan dengan kebutuhan dan request kamu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Technical Skills</h3>
                      <p className="text-sm text-muted-foreground">
                        Laravel, React, Next.js, PHP, JavaScript, Database, API development, atau teknologi lain sesuai kebutuhan kamu
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
                      <h3 className="font-medium mb-2">Career Development</h3>
                      <p className="text-sm text-muted-foreground">
                        CV review, portfolio optimization, interview preparation, salary negotiation, dan career planning strategy
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
                      <h3 className="font-medium mb-2">Project Guidance</h3>
                      <p className="text-sm text-muted-foreground">
                        Code review, debugging help, architecture planning, best practices, atau bantuan menyelesaikan project yang sedang stuck
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ContentBlock>

          {/* Timeline */}
          <ContentBlock title="Timeline Program" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Jadwal mentoring yang sepenuhnya fleksibel sesuai ketersediaan kamu dan mentor
            </p>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Jadwal Fleksibel</h3>
                    <p className="text-sm text-muted-foreground">
                      Tentukan sendiri waktu yang paling cocok untuk kamu
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg mb-2">Durasi Sesi</h3>
                    <p className="text-sm text-muted-foreground">
                      60-90 menit per sesi, disesuaikan dengan kompleksitas topik
                    </p>
                  </CardContent>
                </Card>
          </ContentBlock>

          {/* Target Peserta */}
          <ContentBlock title="Target Peserta" className="mt-12">
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
          <ContentBlock title="Benefit Program" className="mt-12">
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

          {/* Topik Mentoring */}
          <ContentBlock title="Topik Mentoring yang Tersedia" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Beberapa contoh topik yang bisa kita bahas dalam sesi mentoring
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">Web Development</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Laravel framework & best practices</li>
                    <li>• React.js & Next.js development</li>
                    <li>• Database design & optimization</li>
                    <li>• API development & integration</li>
                    <li>• Payment gateway integration</li>
                    <li>• Deployment & hosting setup</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ContentBlock>

          {/* Mentor */}
          <ContentBlock title="Mentor" className="mt-12">
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
          <ContentBlock title="Harga Program" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Pilih paket yang sesuai dengan kebutuhan kamu
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* Per Sesi */}
              <Card className="border-2 hover:border-primary/50 transition-all duration-200">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Per Sesi</h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-lg text-muted-foreground line-through">699K</span>
                      <span className="text-4xl font-bold text-primary">149K</span>
                    </div>
                    <p className="text-sm text-muted-foreground">/ sesi</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                    <p className="text-sm font-medium text-green-800">
                      Diskon 79% khusus harga early bird batch pertama — bisa naik setelah batch ini penuh
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {[
                      "1 sesi private mentoring (60 menit)",
                      "Topik 100% sesuai request kamu",
                      "Flexible scheduling",
                      "Personal guidance & feedback",
                      "Rekaman sesi untuk review",
                      "Follow-up support via chat"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" asChild>
                    <Link href="https://forms.gle/BxPgHKrETedUfcfN7" target="_blank">
                      Pilih Paket Ini
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Paket 4x Sesi */}
              <Card className="relative border-2 border-primary shadow-lg">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Paling Hemat</Badge>
                </div>
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Paket 4x Sesi</h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-lg text-muted-foreground line-through">2796K</span>
                      <span className="text-4xl font-bold text-primary">500K</span>
                    </div>
                    <p className="text-sm text-muted-foreground">hemat 2296K</p>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mb-6">
                    <p className="text-sm font-medium text-primary">
                      Hemat 2296K dari harga normal! Cocok untuk learning path yang lebih komprehensif
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {[
                      "4 sesi private mentoring (240+ menit total)",
                      "Topik bisa berbeda setiap sesi",
                      "Bisa follow structured curriculum atau custom",
                      "Priority scheduling",
                      "Rekaman semua sesi",
                      "Extended follow-up support",
                      "Bonus: Career consultation session"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" asChild>
                    <Link href="https://forms.gle/BxPgHKrETedUfcfN7" target="_blank">
                      Pilih Paket Ini
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center bg-muted/50 rounded-lg p-6">
              <h4 className="font-medium text-lg mb-3">Metode Pembayaran</h4>
              <p className="text-muted-foreground mb-4">
                Bisa bayar via QRIS, Gopay, atau transfer bank
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://forms.gle/BxPgHKrETedUfcfN7" target="_blank">
                    Daftar Sekarang
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="http://wa.me/62895808860080" target="_blank">
                    Tanya Detail Program
                  </Link>
                </Button>
              </div>
            </div>
          </ContentBlock>

          {/* Testimoni */}
          <ContentBlock title="Testimoni Alumni" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Apa kata mereka yang sudah mengikuti mentoring
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  name: "Budi Santoso",
                  role: "Junior Developer • Tech Startup",
                  testimonial: "Mentoring 1:1 dengan Aditya sangat personal dan focused. Saya bisa tanya hal-hal spesifik yang stuck di project dan langsung dapat solusi yang applicable!"
                },
                {
                  name: "Sari Dewi",
                  role: "Fresh Graduate • Universitas Indonesia",
                  testimonial: "Career consultation session-nya game changer! CV dan portfolio saya jadi lebih menarik dan akhirnya diterima kerja di perusahaan impian. Worth it banget!"
                },
                {
                  name: "Ahmad Rizki",
                  role: "Freelancer • Independent",
                  testimonial: "Fleksibilitas topik mentoring sangat membantu. Bisa diskusi dari technical problem sampai business strategy untuk freelancing. Mentornya sangat berpengalaman!"
                },
                {
                  name: "Maya Putri",
                  role: "Web Developer • Digital Agency",
                  testimonial: "Jadwal yang fleksibel sangat cocok untuk working professional. Bisa request topik sesuai kebutuhan project di kantor. Very helpful!"
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
          <ContentBlock title="Frequently Asked Questions" className="mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Pertanyaan yang sering ditanyakan tentang program ini
            </p>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Apakah bisa request topik mentoring sesuai kebutuhan?</AccordionTrigger>
                <AccordionContent>
                  Tentu saja! Ini adalah kelebihan utama mentoring private 1:1. Kamu bisa request topik apa saja yang sesuai dengan kebutuhan, goals, atau masalah yang sedang kamu hadapi.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Bagaimana cara menentukan jadwal mentoring?</AccordionTrigger>
                <AccordionContent>
                  Setelah mendaftar, kita akan koordinasi jadwal via WhatsApp. Jadwal sangat fleksibel dan bisa disesuaikan dengan waktu luang kamu, baik weekday maupun weekend.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Apakah cocok untuk level beginner sampai advanced?</AccordionTrigger>
                <AccordionContent>
                  Ya, karena topik dan pendekatan disesuaikan dengan level kamu. Beginner bisa mulai dari dasar, intermediate bisa fokus ke specific skills, advanced bisa diskusi architecture atau career strategy.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Apakah ada follow-up setelah sesi mentoring?</AccordionTrigger>
                <AccordionContent>
                  Ya, ada follow-up support via chat untuk pertanyaan lanjutan. Untuk paket 4x sesi, support-nya lebih extended dan bisa konsultasi ringan di luar jadwal mentoring.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Bagaimana jika saya ingin ganti topik di tengah mentoring?</AccordionTrigger>
                <AccordionContent>
                  Tidak masalah! Fleksibilitas adalah kelebihan mentoring private. Kamu bisa ganti atau adjust topik sesuai kebutuhan yang berkembang selama proses mentoring.
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
                Dapatkan mentoring personal yang disesuaikan dengan kebutuhan spesifik kamu. Mulai transformasi karir dengan guidance yang tepat sasaran!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="https://forms.gle/BxPgHKrETedUfcfN7" target="_blank">
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