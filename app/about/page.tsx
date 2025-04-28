import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"

export default function AboutPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Tentang Saya" description="Mengenal lebih dekat Aditya Fakhri Riansyah" />

      <div className="mt-8 space-y-8">
        <ContentBlock>
          <div className="space-y-4">
            <p className="text-lg">
              Saya adalah seorang Web Developer dengan fokus pada pengembangan aplikasi modern yang didukung teknologi
              AI. Dengan pengalaman lebih dari 5 tahun di industri teknologi, saya telah membangun berbagai solusi
              digital untuk klien dari berbagai sektor.
            </p>
            <p className="text-lg">
              Selain mengembangkan aplikasi, saya juga aktif sebagai mentor dan content creator di bidang teknologi.
              Saya percaya bahwa berbagi pengetahuan adalah cara terbaik untuk terus belajar dan berkembang.
            </p>
          </div>
        </ContentBlock>

        <ContentBlock title="🎯 Misi">
          <p>
            Membantu bisnis dan individu memanfaatkan teknologi modern untuk mencapai tujuan mereka melalui solusi
            digital yang inovatif, efisien, dan berpusat pada pengguna.
          </p>
        </ContentBlock>

        <ContentBlock title="👁️ Visi">
          <p>
            Menjadi pionir dalam pengembangan aplikasi web yang mengintegrasikan AI secara etis dan efektif, serta
            membangun komunitas developer yang kolaboratif dan inklusif.
          </p>
        </ContentBlock>

        <ContentBlock title="🧠 Filosofi">
          <ul className="list-disc list-inside space-y-2">
            <li>Teknologi harus mempermudah, bukan mempersulit</li>
            <li>Kode yang baik adalah kode yang dapat dipahami</li>
            <li>Pembelajaran adalah proses seumur hidup</li>
            <li>Kolaborasi menghasilkan solusi terbaik</li>
            <li>Etika harus menjadi pertimbangan utama dalam pengembangan teknologi</li>
          </ul>
        </ContentBlock>

        <ContentBlock title="🌟 Nilai-Nilai">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Inovasi</h3>
              <p className="text-sm text-muted-foreground">
                Selalu mencari cara baru dan lebih baik untuk menyelesaikan masalah dan menciptakan nilai.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Kualitas</h3>
              <p className="text-sm text-muted-foreground">
                Berkomitmen pada standar tertinggi dalam setiap aspek pekerjaan.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Kolaborasi</h3>
              <p className="text-sm text-muted-foreground">
                Bekerja sama dengan klien dan rekan untuk mencapai hasil terbaik.
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">Keberlanjutan</h3>
              <p className="text-sm text-muted-foreground">
                Membangun solusi yang dapat bertahan dan berkembang seiring waktu.
              </p>
            </div>
          </div>
        </ContentBlock>

        <ContentBlock title="🌱 Hobi & Minat">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">📚 Membaca</h3>
              <p className="text-sm text-muted-foreground">Buku teknologi, fiksi ilmiah, dan pengembangan diri.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">🏃‍♂️ Olahraga</h3>
              <p className="text-sm text-muted-foreground">Lari, bersepeda, dan hiking di akhir pekan.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">🎮 Gaming</h3>
              <p className="text-sm text-muted-foreground">Game strategi dan RPG untuk melatih pemecahan masalah.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">🎸 Musik</h3>
              <p className="text-sm text-muted-foreground">Bermain gitar dan mendengarkan berbagai genre musik.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">✈️ Traveling</h3>
              <p className="text-sm text-muted-foreground">Mengeksplorasi tempat baru dan budaya berbeda.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium mb-2">👨‍🍳 Memasak</h3>
              <p className="text-sm text-muted-foreground">Eksperimen dengan resep baru dan fusion cuisine.</p>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
