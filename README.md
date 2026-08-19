# 🚀 Notion-Style Portfolio — Aditya Fakhri

Portofolio pribadi dan platform interaktif yang terinspirasi oleh tampilan clean, minimalis, dan fleksibel ala **Notion**. Dibangun menggunakan **Next.js (App Router)**, **React**, **TypeScript**, dan **Tailwind CSS**.

---

## 🌟 Fitur Utama

- 🎨 **Notion-Style UI/UX**: Desain antarmuka bersih dan responsif dengan sidebar navigasi ala Notion.
- 🌐 **Dukungan Multi-Bahasa (i18n)**: Berpindah bahasa antara Bahasa Indonesia (ID) dan Bahasa Inggris (EN) secara praktis.
- 🌓 **Tema Gelap & Terang (Dark/Light Mode)**: Peralihan tema otomatis dan manual menggunakan `next-themes`.
- 📱 **Desain Fully Responsive**: Tampilan optimal di perangkat smartphone, tablet, maupun desktop.
- ⚡ **Performa & SEO Tinggi**: Dilengkapi metadata SEO, OpenGraph, dynamic sitemap, `robots.txt`, Vercel Analytics, serta Speed Insights.
- 📚 **Halaman Interaktif & Konten Lengkap**:
  - **Tentang (About)**: Profil singkat, latar belakang, dan keahlian.
  - **Proyek (Projects)**: Galeri proyek dan karya yang pernah dikerjakan.
  - **Blog**: Artikel dan pemikiran seputar teknologi & pengembangan diri.
  - **Mentoring**: Layanan bimbingan dan mentorship.
  - **RamadhanJS**: Halaman khusus inisiatif dan program komunitas RamadhanJS.
  - **Laporan Keuangan Transparan**: Tabel laporan keuangan terintegrasi.
  - **Pengalaman & Pendidikan (Experience & Education)**: Riwayat karir dan studi.
  - **Ulasan & Feedback (Testimoni)**: Tanggapan dan testimonial dari rekan atau mentee.
- 🧪 **Pengujian Otomatis**: Pengujian komponen dan fungsi menggunakan **Jest** dan **React Testing Library**.

---

## 🛠️ Teknologi & Tools

| Kategori | Teknologi / Library |
| --- | --- |
| **Framework Utama** | [Next.js](https://nextjs.org/) (App Router), [React](https://react.dev/) |
| **Bahasa Pemrograman** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling & UI** | [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), Lucide Icons |
| **Manajemen State/Tema** | `next-themes`, Context API (Language Context) |
| **Pengujian (Testing)** | [Jest](https://jestjs.io/), React Testing Library |
| **Analitik & Monitoring**| Vercel Analytics, Vercel Speed Insights |

---

## 📁 Struktur Proyek

```text
adityafakhri/
├── app/                  # Route & Halaman Utama (Next.js App Router)
│   ├── about/            # Halaman Tentang Saya
│   ├── blog/             # Halaman & Artikel Blog
│   ├── community/        # Komunitas
│   ├── contact/          # Halaman Kontak
│   ├── education/        # Riwayat Pendidikan
│   ├── experience/       # Pengalaman Kerja / Karir
│   ├── feedback/         # Form & Tanggapan Feedback
│   ├── mentoring/        # Layanan Mentoring
│   ├── projects/         # Portofolio Proyek
│   ├── ramadhanjs/       # Program & Event RamadhanJS
│   ├── services/         # Layanan yang Ditawarkan
│   ├── skills/           # Keahlian & Tech Stack
│   ├── layout.tsx        # Root Layout & Provider
│   ├── page.tsx          # Halaman Beranda (Home)
│   └── globals.css       # File CSS Global
├── components/           # Komponent React Reusable
│   ├── ui/               # Komponen UI dasar (shadcn/ui)
│   ├── portfolio-sidebar.tsx  # Sidebar Navigasi Notion Style
│   ├── language-switcher.tsx # Tombol Ganti Bahasa
│   ├── content-block.tsx     # Blok Konten Teks/Halaman
│   └── ...
├── contexts/             # Context Providers (Contoh: Language Context)
├── data/                 # Data Statis & Konten Lokal
├── content/              # Konten Tambahan & File Markdown
├── public/               # Asset Statis (Gambar, Icon, Favicon)
├── __tests__/            # File Unit Testing (Jest)
├── jest.config.ts        # Konfigurasi Jest
├── tailwind.config.ts    # Konfigurasi Tailwind CSS
└── package.json          # Dependensi & Script Project
```

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat

Pastikan Anda telah menginstal:
- **Node.js** (versi 18.x atau yang lebih baru disarankan)
- **npm**, **yarn**, atau **pnpm**

### Langkah Instalasi

1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/adityafakhri/adityafakhri.git
   cd adityafakhri
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (Development):**
   ```bash
   npm run dev
   ```

4. Buka browser dan akses [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

---

## 📜 Script yang Tersedia

Di dalam direktori proyek, Anda dapat menjalankan perintah-perintah berikut:

- `npm run dev`: Menjalankan aplikasi dalam mode pengembangan.
- `npm run build`: Membuat build produksi yang telah dioptimasi.
- `npm run start`: Menjalankan aplikasi yang telah di-build dalam mode produksi.
- `npm run lint`: Menjalankan ESLint untuk mengecek kualitas kode.
- `npm run test`: Menjalankan pengujian otomatis menggunakan Jest.

---

## 📄 Lisensi

Proyek ini dilindungi di bawah **MIT License** — bebas untuk digunakan, dimodifikasi, dan dikembangkan kembali.

---

## 🤝 Kontak & Media Sosial

- **Website**: [adityafakhri.id](https://adityafakhri.id)
- **Instagram**: [@adityafakhrii](https://www.instagram.com/adityafakhrii/)
- **GitHub**: [@adityafakhrii](https://github.com/adityafakhrii)
- **LinkedIn**: [Aditya Fakhri Riansyah](https://www.linkedin.com/in/adityafakhrii/)

---

<p center="true">Made with 💻 + ☕ by <a href="https://www.linkedin.com/in/adityafakhrii">Aditya Fakhri</a></p>
