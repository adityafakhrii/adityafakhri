import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"

export default function EducationPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Pendidikan" description="Latar belakang pendidikan dan sertifikasi" />

      <div className="mt-8 space-y-8">
        <ContentBlock title="🎓 Pendidikan Formal">
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">S1 Teknik Informatika</h3>
              <p className="text-muted-foreground">Universitas Teknologi Indonesia • 2014 - 2018</p>
              <div className="mt-4">
                <p>
                  Fokus pada pengembangan perangkat lunak dan kecerdasan buatan. Skripsi tentang implementasi machine
                  learning untuk sistem rekomendasi.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                  <li>GPA: 3.85/4.0</li>
                  <li>Juara 2 Kompetisi Pemrograman Tingkat Nasional 2017</li>
                  <li>Asisten Dosen untuk mata kuliah Algoritma dan Pemrograman</li>
                  <li>Anggota aktif Klub Robotika dan Artificial Intelligence</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">SMA Negeri 1 Jakarta</h3>
              <p className="text-muted-foreground">Jurusan IPA • 2011 - 2014</p>
              <div className="mt-4">
                <p>Fokus pada mata pelajaran Matematika, Fisika, dan Komputer.</p>
                <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                  <li>Ketua Klub Komputer</li>
                  <li>Finalis Olimpiade Komputer Tingkat Provinsi</li>
                </ul>
              </div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="🧠 Pendidikan Non-Formal">
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Bootcamp Full-Stack Development</h3>
              <p className="text-muted-foreground">CodeAcademy • 2018</p>
              <div className="mt-4">
                <p>Program intensif 3 bulan yang mencakup pengembangan web modern, database, dan deployment.</p>
                <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                  <li>Pengembangan aplikasi web full-stack dengan MERN stack</li>
                  <li>Implementasi autentikasi dan otorisasi</li>
                  <li>Deployment dan CI/CD</li>
                  <li>Proyek capstone: Aplikasi manajemen proyek kolaboratif</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">AI & Machine Learning Specialization</h3>
              <p className="text-muted-foreground">Coursera • 2020</p>
              <div className="mt-4">
                <p>
                  Seri kursus online yang mencakup dasar-dasar AI, machine learning, dan implementasi praktisnya dalam
                  pengembangan aplikasi.
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                  <li>Dasar-dasar machine learning dan deep learning</li>
                  <li>Implementasi model AI dalam aplikasi web</li>
                  <li>Computer vision dan natural language processing</li>
                  <li>Proyek akhir: Sistem rekomendasi berbasis AI</li>
                </ul>
              </div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="🏆 Sertifikasi">
          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">AWS Certified Developer - Associate</h3>
              <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Cloud Computing</Badge>
                <Badge variant="outline">AWS Services</Badge>
                <Badge variant="outline">Serverless</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Professional Scrum Master I (PSM I)</h3>
              <p className="text-sm text-muted-foreground">Scrum.org • 2021</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Agile</Badge>
                <Badge variant="outline">Scrum</Badge>
                <Badge variant="outline">Project Management</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Google Associate Android Developer</h3>
              <p className="text-sm text-muted-foreground">Google • 2020</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">Android</Badge>
                <Badge variant="outline">Kotlin</Badge>
                <Badge variant="outline">Mobile Development</Badge>
              </div>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">React Developer Certification</h3>
              <p className="text-sm text-muted-foreground">Meta • 2019</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Frontend</Badge>
              </div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="📚 Pembelajaran Berkelanjutan">
          <p className="mb-4">
            Saya percaya bahwa pembelajaran adalah proses seumur hidup. Berikut adalah beberapa platform dan sumber
            belajar yang saya gunakan untuk terus mengembangkan keterampilan:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Online Courses</h3>
              <ul className="text-sm space-y-1">
                <li>Udemy</li>
                <li>Coursera</li>
                <li>Pluralsight</li>
                <li>Frontend Masters</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Komunitas & Forum</h3>
              <ul className="text-sm space-y-1">
                <li>Stack Overflow</li>
                <li>GitHub</li>
                <li>Dev.to</li>
                <li>Reddit r/webdev</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Buku & Publikasi</h3>
              <ul className="text-sm space-y-1">
                <li>O'Reilly Media</li>
                <li>Manning Publications</li>
                <li>Smashing Magazine</li>
                <li>CSS-Tricks</li>
              </ul>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
