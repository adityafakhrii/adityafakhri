import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or API
const projects = {
  siacta: {
    title: "SIACTA",
    description: "Sistem Informasi Akademik Terpadu untuk manajemen perkuliahan dan nilai.",
    fullDescription:
      "SIACTA adalah sistem informasi akademik terpadu yang dirancang untuk memudahkan manajemen perkuliahan, penjadwalan, dan penilaian di institusi pendidikan tinggi. Sistem ini mengintegrasikan berbagai aspek administrasi akademik dalam satu platform yang komprehensif dan user-friendly.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    client: "Universitas Teknologi Indonesia",
    duration: "6 bulan",
    year: "2022",
    role: "Lead Developer",
    liveUrl: "https://example.com/siacta",
    repoUrl: "https://github.com/example/siacta",
    features: [
      "Manajemen jadwal perkuliahan otomatis",
      "Sistem penilaian terintegrasi",
      "Portal mahasiswa dan dosen",
      "Laporan akademik real-time",
      "Integrasi dengan sistem pembayaran",
    ],
    challenges: [
      "Migrasi dari sistem lama tanpa mengganggu operasional",
      "Mengintegrasikan data dari berbagai departemen",
      "Memastikan keamanan data sensitif",
      "Mengoptimalkan performa untuk penggunaan skala besar",
    ],
    solutions: [
      "Implementasi strategi migrasi bertahap",
      "Pengembangan API terpadu untuk integrasi data",
      "Penerapan enkripsi end-to-end dan autentikasi multi-faktor",
      "Optimasi database dan implementasi caching",
    ],
    testimonial: {
      quote:
        "SIACTA telah mengubah cara kami mengelola administrasi akademik. Proses yang sebelumnya memakan waktu berjam-jam kini dapat diselesaikan dalam hitungan menit.",
      author: "Dr. Budi Santoso",
      position: "Dekan Fakultas Teknik, Universitas Teknologi Indonesia",
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Dashboard",
      "/placeholder.svg?height=300&width=500&text=Schedule",
      "/placeholder.svg?height=300&width=500&text=Grading",
      "/placeholder.svg?height=300&width=500&text=Reports",
    ],
  },
  // Other projects would be defined similarly
}

export default async function ProjectDetailPage({ params }: { params: { id: string } }) {
  const resolvedParams = await params
  const project = projects[resolvedParams.id as keyof typeof projects]

  // Fallback for projects not in our mock data
  if (!project) {
    return (
      <div className="container max-w-5xl py-8 px-4 md:px-8">
        <PageHeader title="Proyek Tidak Ditemukan" description="Maaf, proyek yang Anda cari tidak tersedia." />
        <Button asChild className="mt-6">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Proyek
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Proyek
        </Link>
      </Button>

      <PageHeader title={project.title} description={project.description} />

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="mt-8 rounded-lg overflow-hidden border">
        <Image
          src={project.imageSrc || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={400}
          className="object-cover w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2 space-y-6">
          <ContentBlock>
            <p className="text-lg">{project.fullDescription}</p>
          </ContentBlock>

          <ContentBlock title="✨ Fitur Utama">
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </ContentBlock>

          <ContentBlock title="🧩 Tantangan & Solusi">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Tantangan:</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium mb-2">Solusi:</h3>
                <ul className="space-y-2">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ContentBlock>

          <ContentBlock title="📸 Galeri">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={500}
                    height={300}
                    className="object-cover w-full"
                  />
                </div>
              ))}
            </div>
          </ContentBlock>

          <ContentBlock title="💬 Testimoni">
            <blockquote className="border-l-4 border-primary pl-4 italic">"{project.testimonial.quote}"</blockquote>
            <div className="mt-4 text-sm text-muted-foreground">
              — {project.testimonial.author}, {project.testimonial.position}
            </div>
          </ContentBlock>
        </div>

        <div className="space-y-6">
          <ContentBlock title="📋 Informasi Proyek">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Klien</h3>
                <p>{project.client}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Durasi</h3>
                <p>{project.duration}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Tahun</h3>
                <p>{project.year}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Peran</h3>
                <p>{project.role}</p>
              </div>
            </div>
          </ContentBlock>

          <ContentBlock title="🔗 Link">
            <div className="space-y-3">
              <Button variant="outline" className="w-full" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Lihat Live
                </Link>
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            </div>
          </ContentBlock>

          <ContentBlock title="📞 Tertarik?">
            <p className="text-sm mb-4">
              Jika Anda tertarik dengan proyek serupa atau ingin berdiskusi lebih lanjut, jangan ragu untuk menghubungi
              saya.
            </p>
            <Button className="w-full" asChild>
              <Link href="/contact">Hubungi Saya</Link>
            </Button>
          </ContentBlock>
        </div>
      </div>
    </div>
  )
}