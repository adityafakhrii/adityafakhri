import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Globe, Code } from "lucide-react"
import Image from "next/image"

export default function CommunityPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader
        title="Komunitas & Volunteering"
        description="Kontribusi dan keterlibatan dalam komunitas teknologi"
      />

      <div className="mt-8 space-y-8">
        <ContentBlock>
          <p className="text-lg mb-6">
            Saya percaya bahwa berbagi pengetahuan dan berkontribusi pada komunitas adalah bagian penting dari
            perjalanan profesional. Berikut adalah beberapa komunitas dan kegiatan volunteering yang saya ikuti.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mentor di CodeCamp</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Membimbing peserta bootcamp dalam pengembangan web dan mobile. Mengadakan sesi mentoring mingguan
                      dan code review untuk membantu peserta mengembangkan keterampilan teknis mereka.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">2020 - Sekarang</Badge>
                      <Badge variant="outline">Mentoring</Badge>
                      <Badge variant="outline">Code Review</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Volunteer di TechForGood</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mengembangkan aplikasi web dan mobile untuk organisasi non-profit. Membantu organisasi sosial
                      memanfaatkan teknologi untuk meningkatkan dampak positif mereka.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">2019 - Sekarang</Badge>
                      <Badge variant="outline">Web Development</Badge>
                      <Badge variant="outline">Social Impact</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Anggota Komunitas Developer Indonesia</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Aktif dalam forum diskusi dan kegiatan komunitas developer lokal. Berpartisipasi dalam hackathon
                      dan coding challenge untuk membangun jaringan dan berbagi pengetahuan.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">2018 - Sekarang</Badge>
                      <Badge variant="outline">Networking</Badge>
                      <Badge variant="outline">Knowledge Sharing</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Kontributor Open Source</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Berkontribusi pada proyek open source untuk meningkatkan ekosistem pengembangan. Aktif dalam
                      komunitas GitHub dan forum diskusi teknis.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">2017 - Sekarang</Badge>
                      <Badge variant="outline">Open Source</Badge>
                      <Badge variant="outline">GitHub</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>

        <ContentBlock title="🌟 Proyek Komunitas">
          <div className="space-y-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=EdTech+App"
                    alt="EdTech App"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="font-medium text-lg">Aplikasi EdTech untuk Sekolah Pedesaan</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Mengembangkan aplikasi pembelajaran yang dapat digunakan offline untuk sekolah di daerah dengan
                    koneksi internet terbatas. Aplikasi ini membantu siswa mengakses materi pembelajaran berkualitas
                    meskipun dengan keterbatasan infrastruktur.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>React Native</Badge>
                    <Badge>Offline-First</Badge>
                    <Badge>Education</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="relative h-48 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=300&width=300&text=Health+App"
                    alt="Health App"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-2 p-6">
                  <h3 className="font-medium text-lg">Platform Kesehatan untuk Lansia</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Berkolaborasi dengan tim multidisiplin untuk mengembangkan platform yang membantu lansia mengelola
                    kesehatan mereka. Fitur utama termasuk pengingat obat, monitoring kesehatan sederhana, dan koneksi
                    dengan keluarga atau pengasuh.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge>Next.js</Badge>
                    <Badge>Progressive Web App</Badge>
                    <Badge>Healthcare</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="🏆 Penghargaan Komunitas">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Volunteer of the Year</h3>
              <p className="text-sm text-muted-foreground mt-1">TechForGood • 2022</p>
              <p className="text-sm mt-2">
                Penghargaan untuk kontribusi luar biasa dalam mengembangkan solusi teknologi untuk organisasi
                non-profit.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Top Contributor</h3>
              <p className="text-sm text-muted-foreground mt-1">Open Source Festival • 2021</p>
              <p className="text-sm mt-2">
                Diakui sebagai salah satu kontributor terbaik dalam festival open source tahunan.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Community Impact Award</h3>
              <p className="text-sm text-muted-foreground mt-1">Developer Community Indonesia • 2020</p>
              <p className="text-sm mt-2">
                Penghargaan untuk dampak positif dalam komunitas developer melalui mentoring dan berbagi pengetahuan.
              </p>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
