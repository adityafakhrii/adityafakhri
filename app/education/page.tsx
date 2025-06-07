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
            {/* S1 */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">S1 Informatika</h3>
              <p className="text-muted-foreground">Universitas Widyatama • Sep 2020 - Jul 2024</p>
              <div className="mt-4">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><b>IPK: 3.83 dari 4.0</b></li>
                  <li>Lulusan Terbaik Program Studi Teknik Informatika Angkatan 2020</li>
                  <li>Lead komunitas Google Developer Student Club Universitas Widyatama</li>
                  <li>Ketua Seksi Informasi dan Komunikasi di Himpunan Mahasiswa Teknik Informatika</li>
                  <li>Lulusan terbaik program MSIB Bangkit Academy</li>
                  <li>Penerima Hibah PHP2D dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI</li>
                </ul>
              </div>
            </div>

            {/* SMK */}
            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">SMKN 2 Sukabumi</h3>
              <p className="text-muted-foreground">Rekayasa Perangkat Lunak • 2017 - 2020</p>
              <div className="mt-4">
                <p>
                  Selama di SMKN 2 Sukabumi, saya aktif dalam berbagai organisasi, ekstrakurikuler, dan lomba, di antaranya:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                  <li>Ketua IT Club – Memimpin komunitas IT sekolah dan mengembangkan proyek teknologi.</li>
                  <li>Anggota Lasphic – Berpartisipasi dalam ekstrakurikuler perfilman, belajar produksi video dan sinematografi.</li>
                  <li>Anggota Confidence – Kontributor sebagai penulis dan editor majalah sekolah.</li>
                  <li>Kepala Seksi 9 OSIS (Divisi TIK) – Bertanggung jawab atas pengembangan teknologi dan informasi di sekolah.</li>
                </ul>
                <div className="mt-4">
                  <p className="font-medium">Prestasi:</p>
                  <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                    <li>Juara 1 LKS Web Design Tingkat Kota (Sukabumi, 2018)</li>
                    <li>Juara 2 LKS Web Technologies Tingkat Kota (Sukabumi, 2019)</li>
                    <li>Top 10 Finalis Lomba Website Sekolah Anugerah Atikan Jabar Tingkat Provinsi (Jawa Barat)</li>
                    <li>Peringkat 12 dari 27 LKS Web Design Tingkat Provinsi (Jawa Barat, 2018)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="🧠 Pendidikan Non-Formal">
          <div className="space-y-8">
            {/* Bangkit Academy */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl flex items-center gap-2">
                Bangkit Academy Mobile Development Cohort
                <a
                  href="https://g.co/bangkit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline text-base font-normal"
                >
                  g.co/bangkit
                </a>
              </h3>
              <p className="text-muted-foreground">
                Diselenggarakan oleh Google, Tokopedia, Gojek, & Traveloka • Feb 2023 - Jul 2023
              </p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>
                    <a href="https://drive.google.com/file/d/1QLYbQFS1wIieZvIYmZ3pRZnq010T9rP0/view" target="_blank" rel="noopener noreferrer" className="underline text-primary">Final Transcript</a> &nbsp;|&nbsp;
                    <a href="https://drive.google.com/file/d/1b38KaGFUF-69RU5UfaMLo_MflwTxrNNd/view" target="_blank" rel="noopener noreferrer" className="underline text-primary">Distinction Graduate</a>
                  </li>
                  <li>Meraih predikat <b>Top 10% lulusan terbaik</b> dari 5.000+ peserta, menguasai pengembangan aplikasi Android menggunakan Kotlin dan best practice industri.</li>
                  <li>Bangkit adalah program pengembangan karir yang dipimpin Google dan didukung para ahli industri dari GoTo dan Traveloka, bertujuan mencetak talenta teknologi berkualitas tinggi untuk perusahaan dan startup teknologi Indonesia. Sejak 2020, Bangkit telah melatih lebih dari 20.000 mahasiswa dengan skill relevan industri.</li>
                  <li>
                    Menyelesaikan <b>Capstone Project</b>:<b> MedFluffy</b> – Berhasil menyelesaikan Capstone Project Bangkit 2023 dengan dedikasi 200 jam, mengembangkan aplikasi Android <i>MedFluffy</i> untuk deteksi penyakit mata anjing menggunakan metode Convolutional Neural Network (CNN). Proyek ini menggabungkan machine learning dan mobile development untuk solusi kesehatan hewan peliharaan yang inovatif. 
                        <a href="https://github.com/MedFluffy" target="_blank" rel="noopener noreferrer" className="text-primary"> <u>Lihat di GitHub</u></a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Bootcamp Full-Stack */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Full-Stack Web Development</h3>
              <p className="text-muted-foreground">KelasFullstack • 2024 - sekarang</p>
              <div className="mt-4">
              <p>Program intensif yang berfokus pada pengembangan aplikasi web modern dari sisi frontend dan backend.</p>
              <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                <li>Penerapan stack Laravel, React, Next.JS</li>
                <li>Praktik autentikasi, otorisasi, dan pengelolaan user</li>
                <li>Deployment aplikasi ke cloud</li>
                <li>Proyek: Membangun aplikasi restoran untuk memesan via QR dan payment gateway</li>
              </ul>
              </div>
            </div>
            {/* AI & ML Specialization */}
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
