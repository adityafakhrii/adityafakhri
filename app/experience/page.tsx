import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"

export default function ExperiencePage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Pengalaman Kerja" description="Riwayat karir dan pengalaman profesional" />

      <div className="mt-8 space-y-8">
        <ContentBlock>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Senior Web Developer</h3>
              <p className="text-muted-foreground">TechCorp • 2021 - Sekarang</p>
              <div className="mt-4 space-y-2">
                <p>
                  Memimpin pengembangan aplikasi web dengan fokus pada integrasi AI dan pengalaman pengguna. Mengelola
                  tim developer dan berkolaborasi dengan stakeholder untuk menentukan arah pengembangan produk.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Mengembangkan dan mengimplementasikan arsitektur aplikasi berbasis microservices</li>
                  <li>Mengelola tim 5 developer dengan metodologi Agile/Scrum</li>
                  <li>Mengintegrasikan solusi AI untuk meningkatkan pengalaman pengguna</li>
                  <li>Mengoptimalkan performa aplikasi dan mengurangi waktu loading sebesar 40%</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">AWS</Badge>
                </div>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Frontend Developer</h3>
              <p className="text-muted-foreground">DigitalSolutions • 2019 - 2021</p>
              <div className="mt-4 space-y-2">
                <p>
                  Mengembangkan antarmuka pengguna untuk berbagai aplikasi web menggunakan React dan Vue.js.
                  Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX yang responsif dan intuitif.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Mengembangkan komponen UI yang dapat digunakan kembali untuk mempercepat pengembangan</li>
                  <li>Mengimplementasikan desain responsif untuk berbagai ukuran layar</li>
                  <li>Mengoptimalkan performa frontend dengan teknik lazy loading dan code splitting</li>
                  <li>Berkolaborasi dengan backend developer untuk integrasi API</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">SCSS</Badge>
                  <Badge variant="outline">Webpack</Badge>
                </div>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Junior Developer</h3>
              <p className="text-muted-foreground">WebStudio • 2018 - 2019</p>
              <div className="mt-4 space-y-2">
                <p>
                  Membantu pengembangan website dan aplikasi web sederhana menggunakan HTML, CSS, dan JavaScript.
                  Mempelajari framework modern dan praktik pengembangan terbaik.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Mengembangkan dan memelihara website untuk klien dari berbagai industri</li>
                  <li>Mengimplementasikan desain responsif dan animasi UI</li>
                  <li>Mempelajari dan menerapkan praktik pengembangan modern</li>
                  <li>Berpartisipasi dalam code review dan pair programming</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">jQuery</Badge>
                  <Badge variant="outline">PHP</Badge>
                </div>
              </div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="🏆 Pencapaian">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Pengembangan Sistem SIACTA</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Memimpin pengembangan sistem informasi akademik yang kini digunakan oleh lebih dari 5.000 pengguna
                aktif.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Optimasi Performa Aplikasi</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Meningkatkan performa aplikasi e-commerce dengan mengurangi waktu loading sebesar 40% dan meningkatkan
                konversi sebesar 15%.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Integrasi AI dalam Aplikasi Kesehatan</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Mengimplementasikan fitur diagnosis awal berbasis AI pada aplikasi MedFluffy dengan akurasi 85%.
              </p>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
