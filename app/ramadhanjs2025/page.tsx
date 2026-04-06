import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Moon, 
  Star, 
  Heart, 
  Code, 
  FileText, 
  Calendar,
  Gift,
  Github
} from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"
import { RamadhanGallery } from "@/components/ramadhan-gallery"
import { FinancialReportTable } from "@/components/financial-report-table"

export const metadata: Metadata = {
  title: "RamadhanJS Challenge 2025",
  description: "Recap dan Dokumentasi RamadhanJS Challenge 2025 x Belajar Sambil Beramal",
}

export default function RamadhanJSPage() {
  const totalDonation = "Rp 2.845.241"
  const totalProjects = 12
  
  const donors = [
    "Abiyyu Cakra", "Adela Mutiara Sani", "Aduf", "Ahmad Ammar", 
    "Anas", "Azlan", "Demas Farand", "Fajar Ramdani", 
    "Imam Mahmuda", "Khaisar Muksid", "Muhammad Latif Kautsar", 
    "Nabil Chesta", "Rachman Setiawan Amir", "Salman", "Wahyu"
  ]

  const documentationImages = [
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837007740-501xlp.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837011104-f7c9h7.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837012200-c13ca1.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837013183-zucviw.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837013742-u4u1ht.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837014290-tu3alf.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837014989-16ijwm.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837016690-tbk5en.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837018455-5cqqe0.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837019632-98tn3u.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837020633-p050uf.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837021467-hijfgy.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837023104-shsuud.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837024421-v99nir.webp",
    "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771837025674-cmdm80.webp"
  ]

  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <div className="space-y-12">
        
        {/* Header Section */}
        <header className="text-center space-y-6 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Moon className="w-6 h-6 text-primary mr-2" />
            <span className="text-primary font-medium tracking-wide">Ramadhan 1446 H</span>
            <Star className="w-6 h-6 text-primary ml-2" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold pb-2">
            RamadhanJS Challenge 2025
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            x Belajar Sambil Beramal
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Sebuah inisiatif untuk mengasah skill coding sembari berbagi kebaikan di bulan suci. 
            Setiap baris kode menjadi jembatan amal jariyah.
          </p>
        </header>

        {/* Recap Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="hover:bg-muted/50 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Total Donasi Terkumpul</CardTitle>
              <Gift className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary drop-shadow-sm">{totalDonation}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Untuk perlengkapan mesjid dan pengajian anak-anak Rumah Pencinta Qur'an Birrul Walidain.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:bg-muted/50 transition-all duration-300 group">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Proyek Terselesaikan</CardTitle>
              <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary drop-shadow-sm">{totalProjects}</div>
              <p className="text-xs text-muted-foreground mt-2">
                Aplikasi JavaScript dibuat selama Ramadhan
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Links Section */}
        <section className="flex flex-wrap gap-4 justify-center">
          <Button 
            asChild 
            variant="outline" 
            className="h-12 px-6"
          >
            <Link href="https://github.com/adityafakhrii/ramadhanjs-2025" target="_blank">
              <Github className="mr-2 h-5 w-5" />
              Lihat Repository GitHub
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="h-12 px-6"
          >
            <Link href="https://docs.google.com/spreadsheets/d/1riE1ZpZBqtljb8B-Trr-lF5o09pw73WB9f2D4l40VdQ/edit?usp=sharing" target="_blank">
              <FileText className="mr-2 h-5 w-5" />
              Laporan Keuangan Lengkap
            </Link>
          </Button>
        </section>

        <Separator />

        {/* Financial Report Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Laporan Keuangan</h2>
          </div>
          <FinancialReportTable />
        </section>

        <Separator />

        {/* Donors Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Para Donatur</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {donors.map((name, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full bg-muted/50 border hover:border-primary/50 transition-colors duration-300 text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-lg italic text-muted-foreground">
                "Jazakumullah khairan katsiran. Semoga Allah membalas kebaikan kalian dengan pahala yang berlipat ganda, memberkahi rezeki, dan menjadikan donasi ini sebagai amal jariyah yang tak terputus. Aamiin."
              </p>
            </CardContent>
          </Card>
        </section>

        <Separator />

        {/* Documentation Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="text-primary h-6 w-6" />
            <h2 className="text-2xl font-bold">Dokumentasi Kegiatan</h2>
          </div>
          
          <RamadhanGallery images={documentationImages} />
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 pb-6 text-muted-foreground text-sm">
          <p>© 2025 Aditya Fakhri Riansyah. Dibuat dengan sepenuh hati di bulan suci.</p>
        </footer>
      </div>
    </div>
  )
}
