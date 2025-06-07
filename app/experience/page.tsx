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
            {/* Internal Mentor */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Internal Mentor</h3>
              <p className="text-muted-foreground">CodePolitan • Sep 2024 - Sekarang • Cimahi</p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Membuat konten tutorial dan kelas pemrograman terstruktur, meningkatkan keterlibatan pengguna sebesar 30% dan menarik 2.000+ pelajar baru di berbagai platform.</li>
                  <li>Mendesain dan menyampaikan silabus pemrograman yang progresif dan praktis, menyesuaikan dengan kebutuhan dunia nyata.</li>
                  <li>Memimpin konsultasi online mingguan, memberikan bimbingan personal, troubleshooting, dan mentorship untuk mempercepat pertumbuhan peserta.</li>
                  <li>Menyusun insight teknologi yang ringkas dan aplikatif—termasuk tips, trik, dan berita—untuk mempercepat peningkatan skill audiens.</li>
                  <li>Mengelola dan mengembangkan channel YouTube edukasi, menyajikan konten video menarik tentang pemrograman, web development, dan teknologi modern.</li>
                  <li>Mengkurasi konten berbasis tren agar tetap relevan dan selaras dengan perkembangan industri, meningkatkan nilai dan umur konten.</li>
                  <li>Menanggapi pertanyaan peserta melalui kanal dukungan langsung, meningkatkan kepuasan dan tingkat kelulusan kursus.</li>
                  <li>Berkolaborasi lintas tim konten dan edukasi untuk merancang, mengembangkan, dan menerbitkan materi edukasi inovatif berkualitas tinggi.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Mentoring</Badge>
                  <Badge variant="outline">Content Creation</Badge>
                  <Badge variant="outline">YouTube</Badge>
                  <Badge variant="outline">Programming</Badge>
                </div>
              </div>
            </div>

            {/* Mentor Bangkit */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Mentor</h3>
              <p className="text-muted-foreground">Bangkit Academy by Google, Tokopedia, Gojek, & Traveloka • Feb 2024 - Jan 2025 • Jakarta</p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Membimbing 24 mahasiswa kelas MD-34 dan 23 mahasiswa kelas MD-06, berkontribusi pada tingkat kelulusan 93% dan 91%—tertinggi dalam sejarah Bangkit.</li>
                  <li>Mendukung pencapaian predikat distinction untuk 5 mahasiswa, menempatkan mereka di 10% teratas dari 8.000+ peserta.</li>
                  <li>Menyelenggarakan 34 sesi konsultasi mingguan dan meraih rating 4.9+ dari feedback peserta.</li>
                  <li>Mendukung instruktur dalam 25 sesi ILT (Instructor-Led Training) untuk hard & soft skills, dengan rating efektivitas 4.9+.</li>
                  <li>Meninjau notebook bulanan seluruh peserta untuk memastikan pencapaian learning objective, menghasilkan tingkat kelulusan 100%.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Mentoring</Badge>
                  <Badge variant="outline">Education</Badge>
                  <Badge variant="outline">Bangkit</Badge>
                  <Badge variant="outline">Soft Skills</Badge>
                </div>
              </div>
            </div>

            {/* Lead GDSC */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Lead</h3>
              <p className="text-muted-foreground">GDSC Widyatama University • Aug 2023 - Jul 2024 • Bandung</p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Berpartisipasi dalam komunitas global dengan 5.700+ Alumni, 2.177 Lead di 100+ negara dan 87 universitas di Indonesia.</li>
                  <li>Membentuk 21 core team dan mendaftarkan 1.582 anggota dari 35+ universitas dan 40 kota di Indonesia.</li>
                  <li>Mengorganisir 55 event hard & soft skills, bekerja sama dengan 10+ universitas dan menarik 1.218 peserta dalam satu event.</li>
                  <li>Berkolaborasi dengan 5 institusi untuk memperluas jangkauan dan dampak program.</li>
                  <li>Memberikan benefit total Rp43.500.000 berupa voucher kursus coding dan e-wallet kepada peserta.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Community</Badge>
                  <Badge variant="outline">Event</Badge>
                  <Badge variant="outline">GDSC</Badge>
                </div>
              </div>
            </div>

            {/* Junior Web Developer */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Junior Web Developer</h3>
              <p className="text-muted-foreground">PT Cinovasi Rekaprima • Jun 2022 - Jun 2023 • Bandung</p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Mengembangkan dan memelihara aplikasi untuk klien Panasonic, menambah fitur baru dan memperbaiki bug untuk meningkatkan kepuasan pengguna.</li>
                  <li>Berkolaborasi dengan project manager untuk menerjemahkan kebutuhan ke spesifikasi teknis, memastikan proyek selesai tepat waktu (95% on-time delivery).</li>
                  <li>Berpartisipasi dalam sesi brainstorming dan memberikan solusi inovatif, meningkatkan performa aplikasi sebesar 30%.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Web Development</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Teamwork</Badge>
                </div>
              </div>
            </div>

            {/* Frontend Developer */}
            <div className="relative pl-6 border-l-2 border-muted pb-8">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Frontend Developer</h3>
              <p className="text-muted-foreground">PT Sibernetika Teknologi Industri • Sep 2022 - Jan 2023 • Bandung</p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Mengembangkan aplikasi web Panasonic Smart Clinic sesuai kebutuhan klien PT Panasonic Industrial Devices Batam.</li>
                  <li>Mengubah desain UI/UX menjadi kode, memastikan tampilan dan fungsi sesuai spesifikasi.</li>
                  <li>Menyesuaikan desain sesuai permintaan klien dan membuat halaman responsif untuk berbagai perangkat.</li>
                  <li>Berkolaborasi dengan backend developer untuk integrasi, memastikan aplikasi berjalan lancar.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">Frontend</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">UI/UX</Badge>
                  <Badge variant="outline">Responsive</Badge>
                </div>
              </div>
            </div>

            {/* Web Developer Jerbee */}
            <div className="relative pl-6 border-l-2 border-muted">
              <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <h3 className="font-medium text-xl">Web Developer</h3>
              <p className="text-muted-foreground">PT Jerbee Indonesia • Jul 2019 - Sep 2019 • Bandung</p>
              <div className="mt-4 space-y-2">
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li>Mengembangkan website menggunakan PHP, Laravel, JavaScript/Ajax, Bootstrap, dan MySQL.</li>
                  <li>Menyelesaikan masalah produksi secara cepat dan efektif.</li>
                  <li>Berperan dalam adopsi tools pengembangan modern, meningkatkan produktivitas tim sebesar 25%.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">MySQL</Badge>
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
