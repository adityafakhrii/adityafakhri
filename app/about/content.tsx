"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { TranslatedContent } from "@/components/translated-content"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, Users, Calendar, MapPin, Code, Sparkles, ArrowRight, Award, GraduationCap } from "lucide-react"
import Link from "next/link"

export function AboutContent() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8 space-y-10">
          <PageHeader
            title={t('aboutTitle')}
            description="Public Speaker, Tech Mentor, & AI-Driven Full-Stack Web Developer"
          />

          {/* Hero Speaker Highlight Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-background to-muted border p-6 md:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  <Mic className="h-3.5 w-3.5" /> Pembicara Pemrograman, Coding, IT & AI
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  Menginspirasi Lebih dari <span className="text-primary">5.000+ Peserta</span> di <span className="text-primary">40+ Event Technology</span>
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Aktif membagikan wawasan seputar <strong className="text-foreground font-semibold">Pemrograman (Web Development), Artificial Intelligence (AI), Prompt & Context Engineering, serta Karir Software Engineer</strong>. Berbasis di <strong className="text-foreground font-semibold">Sukabumi & Bandung</strong>, dan siap mengisi seminar, workshop, webinar, maupun tech conference secara nasional.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> Sukabumi</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> Bandung</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> Online / Onsite (Indonesia)</span>
                </div>
              </div>
              <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
                <Button asChild size="lg" className="w-full font-semibold shadow-md">
                  <Link href="/speaking">
                    <Mic className="mr-2 h-4 w-4" /> Undang Pembicara
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <Link href="/contact">
                    Hubungi Langsung <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Key Speaker Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 border rounded-xl bg-card text-center space-y-1 hover:border-primary/50 transition-colors flex flex-col items-center justify-center overflow-hidden">
              <div className="h-9 w-9 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-1.5 shrink-0">
                <Users className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight truncate w-full">5.000+</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium line-clamp-2">Peserta Ter-edukasi</div>
            </div>
            <div className="p-4 sm:p-5 border rounded-xl bg-card text-center space-y-1 hover:border-primary/50 transition-colors flex flex-col items-center justify-center overflow-hidden">
              <div className="h-9 w-9 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-1.5 shrink-0">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight truncate w-full">40+</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium line-clamp-2">Event & Workshop Tech</div>
            </div>
            <div className="p-4 sm:p-5 border rounded-xl bg-card text-center space-y-1 hover:border-primary/50 transition-colors flex flex-col items-center justify-center overflow-hidden">
              <div className="h-9 w-9 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-1.5 shrink-0">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground tracking-tight truncate w-full">10+</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium line-clamp-2">Mitra Komunitas & Kampus</div>
            </div>
            <div className="p-4 sm:p-5 border rounded-xl bg-card text-center space-y-1 hover:border-primary/50 transition-colors flex flex-col items-center justify-center overflow-hidden">
              <div className="h-9 w-9 sm:h-10 sm:w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-1.5 shrink-0">
                <Award className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="text-base sm:text-lg md:text-xl font-bold text-foreground tracking-tight leading-none">CodePolitan</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium pt-0.5">Internal Mentor</div>
            </div>
          </div>

          {/* Bio Narrative */}
          <ContentBlock title="Tentang Aditya Fakhri Riansyah">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                Saya adalah <strong className="text-foreground">AI-Driven Web Developer, Tech Mentor, dan Public Speaker</strong> yang memiliki passion mendalam dalam membangun solusi digital berdampak dan mendemokratisasi pengetahuan teknologi agar dapat diakses oleh siapa saja.
              </p>
              <p>
                Sebagai pembicara di bidang <strong className="text-foreground">Pemrograman, Coding, IT, dan Artificial Intelligence</strong>, saya telah memandu lebih dari 40+ sesi workshop interaktif, webinar nasional, dan seminar teknologi di berbagai kota — khususnya <strong className="text-foreground">Sukabumi, Bandung, Jakarta</strong>, hingga sesi daring nasional yang telah diikuti oleh <strong className="text-foreground">5.000+ peserta</strong> dari kalangan mahasiswa, developer muda, hingga profesional.
              </p>
              <p>
                Selain rutin menjadi pembicara, saya juga aktif sebagai <strong className="text-foreground">Internal Mentor di CODEPOLITAN</strong> dan terlibat dalam ekosistem <strong className="text-foreground">Google Developer Groups (GDG)</strong>. Saya percaya bahwa cara terbaik untuk belajar dan berkembang adalah dengan membagikan ilmu yang bermanfaat kepada sesama.
              </p>
            </div>
          </ContentBlock>

          {/* Top Speaker Topics */}
          <ContentBlock title="Topik Pembicara & Materi Favorit">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 border rounded-xl bg-card space-y-2">
                <Badge className="bg-primary text-primary-foreground">AI & Productivity</Badge>
                <h3 className="font-semibold text-lg">Generative AI untuk Produktivitas Multibidang</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pemanfaatan ChatGPT, Claude, & AI Tools populer untuk mempercepat pembuatan konten, riset, penyusunan dokumen, hingga pengambilan keputusan di berbagai industri.
                </p>
              </div>
              <div className="p-5 border rounded-xl bg-card space-y-2">
                <Badge className="bg-primary text-primary-foreground">AI & Future Tech</Badge>
                <h3 className="font-semibold text-lg">Penerapan AI untuk Developer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bagaimana memanfaatkan AI Agents, Prompt Engineering, dan Context Engineering untuk meningkatkan efisiensi coding 10x lebih cepat secara aman.
                </p>
              </div>
              <div className="p-5 border rounded-xl bg-card space-y-2">
                <Badge className="bg-primary text-primary-foreground">Web Development</Badge>
                <h3 className="font-semibold text-lg">Modern Full-Stack Web Dev</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building scalable web applications menggunakan React, Next.js, Laravel, dan Tailwind CSS dari dasar hingga siap rilis ke publik.
                </p>
              </div>
              <div className="p-5 border rounded-xl bg-card space-y-2">
                <Badge className="bg-primary text-primary-foreground">Career & Mentoring</Badge>
                <h3 className="font-semibold text-lg">Roadmap & Value Software Engineer</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Strategi meningkatkan nilai sebagai developer, menembus karir di industri IT, hingga mendapatkan klien & remote job luar negeri.
                </p>
              </div>
            </div>
          </ContentBlock>

          {/* Core Values */}
          <ContentBlock title={t('values')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1 text-foreground">Inovasi & Adaptasi AI</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Selalu mengadopsi cara baru dan teknologi terkini (seperti AI Tools) untuk menyelesaikan masalah dan menciptakan nilai tinggi.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1 text-foreground">Edukasi Berdampak</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Menyampaikan materi pemrograman & IT dengan bahasa yang sederhana, praktis, dan menyenangkan bagi peserta.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1 text-foreground">Kualitas Kode & Standar</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Berkomitmen pada standar tertinggi dalam arsitektur software, keamanan kode, dan kebersihan sistem.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1 text-foreground">Kolaborasi & Komunitas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Aktif membangun jejaring dengan komunitas IT, kampus, dan lembaga profesional untuk tumbuh bersama.
                </p>
              </div>
            </div>
          </ContentBlock>

          {/* CTA Banner */}
          <div className="text-center py-8 px-6 border rounded-2xl bg-muted/50 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">Ingin Mengundang Aditya Fakhri Sebagai Pembicara?</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
              Tersedia untuk sesi seminar, workshop hands-on, webinar online, maupun guest lecture di Sukabumi, Bandung, Jakarta, dan seluruh Indonesia.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/speaking">Lihat Rekam Jejak Event & Undang</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    />
  )
}
