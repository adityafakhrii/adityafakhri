import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft, Calendar, User, Clock, Target, Lightbulb, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Comprehensive project data
const projects = {
  "siacta": {
    title: "SIACTA",
    subtitle: "System Information Accounting & Tax",
    description: "Aplikasi web komprehensif untuk mengelola operasi keuangan dan kepatuhan pajak dengan fitur lengkap untuk bisnis.",
    fullDescription: "SIACTA adalah sistem informasi akuntansi dan pajak terpadu yang dirancang untuk membantu bisnis mengelola operasi keuangan mereka dengan lebih efisien. Sistem ini mengintegrasikan berbagai aspek akuntansi, mulai dari pencatatan transaksi hingga pelaporan pajak, dalam satu platform yang user-friendly dan powerful.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Accounting", "Tax Management"],
    category: "Web Application",
    status: "Production",
    year: "2024",
    duration: "6 bulan",
    role: "Full-Stack Developer & Project Lead",
    client: "PT. Solusi Bisnis Indonesia",
    liveUrl: "https://github.com/adityafakhrii/siacta",
    repoUrl: "https://github.com/adityafakhrii/siacta",
    
    goals: [
      "Mengotomatisasi proses akuntansi manual yang memakan waktu",
      "Menyediakan sistem pelaporan pajak yang akurat dan real-time",
      "Meningkatkan efisiensi operasional keuangan perusahaan",
      "Memastikan kepatuhan terhadap regulasi perpajakan Indonesia"
    ],
    
    features: [
      "Dashboard analitik keuangan real-time",
      "Manajemen transaksi dan jurnal otomatis",
      "Sistem pelaporan pajak terintegrasi",
      "Multi-user access dengan role-based permissions",
      "Export data ke berbagai format (PDF, Excel, CSV)",
      "Backup dan restore data otomatis",
      "Audit trail untuk tracking perubahan data",
      "Notifikasi deadline pajak dan pembayaran"
    ],
    
    challenges: [
      {
        challenge: "Kompleksitas regulasi perpajakan Indonesia yang sering berubah",
        solution: "Mengimplementasikan sistem konfigurasi yang fleksibel dan mudah diupdate sesuai perubahan regulasi terbaru"
      },
      {
        challenge: "Integrasi dengan sistem akuntansi existing client",
        solution: "Membangun API yang robust dan sistem import/export data yang kompatibel dengan berbagai format"
      },
      {
        challenge: "Keamanan data keuangan yang sensitif",
        solution: "Implementasi enkripsi end-to-end, audit logging, dan sistem backup multi-layer"
      }
    ],
    
    outcomes: [
      "Mengurangi waktu proses akuntansi bulanan dari 5 hari menjadi 2 hari",
      "Meningkatkan akurasi pelaporan pajak hingga 99.8%",
      "Menghemat biaya operasional akuntansi sebesar 40%",
      "Digunakan oleh 15+ perusahaan dengan total 200+ users aktif"
    ],
    
    technologies: {
      "Backend": ["Laravel 10", "PHP 8.1", "MySQL 8.0"],
      "Frontend": ["JavaScript ES6+", "Bootstrap 5", "jQuery"],
      "Tools": ["Git", "Composer", "NPM", "Laragon"],
      "Deployment": ["Apache", "Linux Server", "SSL Certificate"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Dashboard",
      "/placeholder.svg?height=300&width=500&text=Transaction+Management",
      "/placeholder.svg?height=300&width=500&text=Tax+Reports",
      "/placeholder.svg?height=300&width=500&text=Analytics"
    ],
    
    testimonial: {
      quote: "SIACTA telah mengubah cara kami mengelola keuangan perusahaan. Proses yang sebelumnya memakan waktu berhari-hari kini dapat diselesaikan dalam hitungan jam dengan akurasi yang sangat tinggi.",
      author: "Budi Santoso",
      position: "Finance Manager, PT. Solusi Bisnis Indonesia"
    },
    
    nextProject: "restoranku",
    prevProject: "smart-clinic-ui"
  },
  
  "medfluffy": {
    title: "MedFluffy",
    subtitle: "AI-Powered Pet Eye Disease Detection",
    description: "Aplikasi Android untuk prediksi dini penyakit mata pada anjing menggunakan CNN dan rekomendasi pertolongan pertama.",
    fullDescription: "MedFluffy adalah aplikasi mobile berbasis AI yang dikembangkan sebagai Capstone Project Bangkit Academy 2023. Aplikasi ini menggunakan teknologi Computer Vision dan Convolutional Neural Network (CNN) untuk mendeteksi penyakit mata pada anjing hanya melalui foto, memberikan diagnosis awal dan rekomendasi perawatan.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Kotlin", "TensorFlow", "CNN", "Firebase", "Material Design", "Computer Vision"],
    category: "Mobile Application",
    status: "Completed",
    year: "2023",
    duration: "4 bulan (200 jam)",
    role: "Mobile Developer & ML Engineer",
    client: "Bangkit Academy Capstone Project",
    liveUrl: "https://github.com/MedFluffy",
    repoUrl: "https://github.com/MedFluffy",
    
    goals: [
      "Menyediakan deteksi dini penyakit mata anjing yang mudah diakses",
      "Membantu pemilik hewan peliharaan mengidentifikasi masalah kesehatan",
      "Mengurangi biaya konsultasi veteriner untuk screening awal",
      "Meningkatkan kesadaran tentang kesehatan mata hewan peliharaan"
    ],
    
    features: [
      "Deteksi penyakit mata menggunakan kamera smartphone",
      "AI model dengan akurasi 85%+ untuk 5 jenis penyakit mata",
      "Rekomendasi pertolongan pertama berdasarkan diagnosis",
      "Riwayat pemeriksaan dan tracking kondisi hewan",
      "Informasi edukatif tentang kesehatan mata anjing",
      "Lokasi klinik hewan terdekat dengan Google Maps",
      "Reminder untuk pemeriksaan rutin",
      "Offline mode untuk area dengan koneksi terbatas"
    ],
    
    challenges: [
      {
        challenge: "Dataset penyakit mata anjing yang terbatas dan tidak seimbang",
        solution: "Melakukan data augmentation dan menggunakan transfer learning dari pre-trained model untuk meningkatkan akurasi"
      },
      {
        challenge: "Optimasi model ML untuk berjalan di mobile device",
        solution: "Menggunakan TensorFlow Lite dan quantization untuk mengurangi ukuran model tanpa mengorbankan akurasi"
      },
      {
        challenge: "Variasi kondisi pencahayaan dan kualitas foto",
        solution: "Implementasi preprocessing image dan memberikan guidance untuk pengambilan foto yang optimal"
      }
    ],
    
    outcomes: [
      "Berhasil mencapai akurasi model 87% pada test dataset",
      "Aplikasi berukuran <50MB dengan response time <3 detik",
      "Mendapat recognition sebagai Top 10% Capstone Project Bangkit 2023",
      "Diunduh dan ditest oleh 100+ beta users dengan rating 4.6/5"
    ],
    
    technologies: {
      "Mobile": ["Kotlin", "Android SDK", "Jetpack Compose", "Material Design"],
      "Machine Learning": ["TensorFlow", "TensorFlow Lite", "CNN", "Transfer Learning"],
      "Backend": ["Firebase", "Cloud Storage", "Authentication"],
      "Tools": ["Android Studio", "Google Colab", "Git", "Figma"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Camera+Interface",
      "/placeholder.svg?height=300&width=500&text=AI+Detection",
      "/placeholder.svg?height=300&width=500&text=Results+Screen",
      "/placeholder.svg?height=300&width=500&text=History+Tracking"
    ],
    
    testimonial: {
      quote: "MedFluffy sangat membantu saya sebagai pemilik anjing untuk melakukan screening awal kondisi mata hewan peliharaan. Aplikasinya mudah digunakan dan hasilnya cukup akurat.",
      author: "Dr. Sarah Veteriner",
      position: "Veterinarian, Klinik Hewan Sehat"
    },
    
    nextProject: "story-app",
    prevProject: "siacta"
  },
  
  "restoranku": {
    title: "Restoranku",
    subtitle: "Smart Restaurant Management System",
    description: "Sistem manajemen restoran dengan fitur pemesanan via QR code, pembayaran QRIS melalui Midtrans, dan analytics komprehensif.",
    fullDescription: "Restoranku adalah sistem manajemen restoran modern yang mengintegrasikan teknologi QR code untuk pemesanan, payment gateway Midtrans untuk pembayaran digital, dan dashboard analytics untuk monitoring bisnis. Sistem ini dirancang untuk meningkatkan efisiensi operasional dan pengalaman pelanggan.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Midtrans", "QR Code", "Payment Gateway"],
    category: "Web Application",
    status: "Production",
    year: "2024",
    duration: "5 bulan",
    role: "Full-Stack Developer",
    client: "Restoran Nusantara Chain",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Digitalisasi proses pemesanan untuk mengurangi antrian",
      "Integrasi pembayaran digital untuk kemudahan transaksi",
      "Menyediakan analytics real-time untuk decision making",
      "Meningkatkan customer experience dan operational efficiency"
    ],
    
    features: [
      "QR Code menu dan pemesanan contactless",
      "Integrasi payment gateway Midtrans (QRIS, Virtual Account, E-wallet)",
      "Dashboard analytics real-time untuk sales dan inventory",
      "Manajemen menu dengan kategori dan variasi",
      "Sistem notifikasi pesanan untuk kitchen dan customer",
      "Laporan penjualan harian, mingguan, dan bulanan",
      "Manajemen staff dan role-based access control",
      "Customer feedback dan rating system"
    ],
    
    challenges: [
      {
        challenge: "Integrasi payment gateway yang kompleks dengan berbagai metode pembayaran",
        solution: "Menggunakan Midtrans SDK dan mengimplementasikan webhook untuk handling payment status secara real-time"
      },
      {
        challenge: "Sinkronisasi pesanan real-time antara customer, kitchen, dan cashier",
        solution: "Implementasi WebSocket dan notification system untuk update status pesanan secara instant"
      },
      {
        challenge: "Optimasi performa untuk high traffic saat jam makan",
        solution: "Database optimization, caching strategy, dan load balancing untuk menangani concurrent users"
      }
    ],
    
    outcomes: [
      "Mengurangi waktu tunggu pemesanan dari 15 menit menjadi 5 menit",
      "Meningkatkan transaksi digital sebesar 80%",
      "Mengurangi error pesanan hingga 95%",
      "Diimplementasikan di 8 cabang restoran dengan 500+ transaksi harian"
    ],
    
    technologies: {
      "Backend": ["Laravel 10", "PHP 8.1", "MySQL 8.0", "Redis"],
      "Frontend": ["JavaScript", "Bootstrap 5", "jQuery", "Chart.js"],
      "Payment": ["Midtrans API", "QRIS", "Virtual Account"],
      "Tools": ["Git", "Postman", "Laravel Telescope", "Queue Workers"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=QR+Menu",
      "/placeholder.svg?height=300&width=500&text=Order+Interface",
      "/placeholder.svg?height=300&width=500&text=Payment+Gateway",
      "/placeholder.svg?height=300&width=500&text=Analytics+Dashboard"
    ],
    
    testimonial: {
      quote: "Sistem Restoranku telah mengubah cara kami beroperasi. Pelanggan lebih puas dengan proses pemesanan yang cepat, dan kami dapat mengelola bisnis dengan lebih efisien melalui dashboard analytics.",
      author: "Ahmad Wijaya",
      position: "Owner, Restoran Nusantara"
    },
    
    nextProject: "ramadhanjs",
    prevProject: "medfluffy"
  },
  
  "ramadhanjs": {
    title: "RamadhanJS",
    subtitle: "Islamic Calendar & Prayer Time Application",
    description: "Aplikasi JavaScript untuk fitur dan utilitas terkait Ramadhan, termasuk kalkulasi waktu sholat, jadwal puasa, dan pengingat ibadah.",
    fullDescription: "RamadhanJS adalah aplikasi web yang menyediakan berbagai fitur untuk membantu umat Muslim selama bulan Ramadhan. Aplikasi ini mengintegrasikan API kalender Islam, waktu sholat, dan berbagai utilitas spiritual dalam satu platform yang mudah digunakan.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["JavaScript", "API Integration", "Islamic Calendar", "PWA", "Geolocation"],
    category: "Web Application",
    status: "Completed",
    year: "2023",
    duration: "3 bulan",
    role: "Frontend Developer",
    client: "Open Source Project",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Menyediakan tools digital untuk ibadah selama Ramadhan",
      "Membantu umat Muslim mengatur jadwal ibadah harian",
      "Memberikan informasi akurat tentang waktu sholat dan puasa",
      "Menciptakan pengalaman spiritual yang lebih terorganisir"
    ],
    
    features: [
      "Kalkulasi waktu sholat berdasarkan lokasi GPS",
      "Countdown timer untuk berbuka puasa dan sahur",
      "Kalender Hijriah dengan tanggal penting Islam",
      "Doa-doa harian dan dzikir Ramadhan",
      "Tracker ibadah harian (sholat, puasa, tadarus)",
      "Notifikasi pengingat waktu sholat dan berbuka",
      "Kiblat finder dengan kompas digital",
      "Offline mode untuk akses tanpa internet"
    ],
    
    challenges: [
      {
        challenge: "Akurasi kalkulasi waktu sholat untuk berbagai lokasi geografis",
        solution: "Menggunakan algoritma astronomi yang presisi dan API geolocation untuk mendapatkan koordinat yang akurat"
      },
      {
        challenge: "Sinkronisasi dengan kalender Hijriah yang kompleks",
        solution: "Integrasi dengan Islamic Calendar API dan implementasi algoritma konversi tanggal Hijriah-Masehi"
      },
      {
        challenge: "Optimasi untuk berbagai timezone dan negara",
        solution: "Implementasi timezone detection otomatis dan database kota-kota Muslim di seluruh dunia"
      }
    ],
    
    outcomes: [
      "Digunakan oleh 1000+ users selama bulan Ramadhan",
      "Akurasi waktu sholat 99.9% berdasarkan feedback users",
      "Rating 4.8/5 dari user reviews",
      "Menjadi referensi untuk developer aplikasi Islam lainnya"
    ],
    
    technologies: {
      "Frontend": ["Vanilla JavaScript", "HTML5", "CSS3", "Service Workers"],
      "APIs": ["Islamic Calendar API", "Prayer Times API", "Geolocation API"],
      "Tools": ["Git", "Webpack", "PWA Tools", "Lighthouse"],
      "Features": ["Progressive Web App", "Offline Support", "Push Notifications"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Prayer+Times",
      "/placeholder.svg?height=300&width=500&text=Ramadhan+Calendar",
      "/placeholder.svg?height=300&width=500&text=Qibla+Finder",
      "/placeholder.svg?height=300&width=500&text=Daily+Tracker"
    ],
    
    testimonial: {
      quote: "RamadhanJS sangat membantu saya dalam mengatur ibadah selama bulan Ramadhan. Fitur pengingat waktu sholat dan countdown berbuka puasa sangat praktis dan akurat.",
      author: "Ustadz Muhammad Ali",
      position: "Imam Masjid Al-Ikhlas"
    },
    
    nextProject: "mentoring-landing",
    prevProject: "restoranku"
  },
  
  "mentoring-landing": {
    title: "Mentoring Landing Page",
    subtitle: "Modern Landing Page for Mentoring Program",
    description: "Landing page modern dan responsif untuk Program Mentoring dengan desain yang clean dan user-friendly.",
    fullDescription: "Landing page yang dirancang khusus untuk program mentoring dengan fokus pada konversi dan user experience. Menggunakan TypeScript dan framework modern untuk performa optimal dan maintainability yang baik.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Responsive Design", "SEO"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: "2 bulan",
    role: "Frontend Developer",
    client: "Mentoring Program Indonesia",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Meningkatkan conversion rate pendaftaran mentoring",
      "Menyediakan informasi program yang jelas dan menarik",
      "Optimasi SEO untuk organic traffic",
      "Memberikan user experience yang excellent di semua device"
    ],
    
    features: [
      "Hero section dengan call-to-action yang compelling",
      "Program overview dengan timeline dan benefits",
      "Mentor profiles dengan expertise dan experience",
      "Testimonial carousel dari alumni program",
      "FAQ section dengan accordion interface",
      "Contact form dengan validation",
      "Blog section untuk content marketing",
      "Mobile-first responsive design"
    ],
    
    challenges: [
      {
        challenge: "Optimasi loading speed untuk better SEO ranking",
        solution: "Implementasi lazy loading, image optimization, dan code splitting untuk mencapai Core Web Vitals yang optimal"
      },
      {
        challenge: "Konversi design mockup ke code yang pixel-perfect",
        solution: "Menggunakan Tailwind CSS dengan custom configuration dan component-based architecture"
      }
    ],
    
    outcomes: [
      "Meningkatkan conversion rate sebesar 35%",
      "Page load speed <2 detik di semua device",
      "SEO score 95+ di Google PageSpeed Insights",
      "Bounce rate turun dari 65% menjadi 40%"
    ],
    
    technologies: {
      "Frontend": ["TypeScript", "Next.js 14", "Tailwind CSS", "Framer Motion"],
      "Tools": ["Git", "Vercel", "Figma", "Google Analytics"],
      "SEO": ["Next SEO", "Structured Data", "Meta Tags", "Sitemap"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Hero+Section",
      "/placeholder.svg?height=300&width=500&text=Program+Overview",
      "/placeholder.svg?height=300&width=500&text=Mentor+Profiles",
      "/placeholder.svg?height=300&width=500&text=Testimonials"
    ],
    
    nextProject: "laravel-upi-training",
    prevProject: "ramadhanjs"
  },
  
  "laravel-upi-training": {
    title: "Laravel 12 UPI Training",
    subtitle: "Student Management System for Training",
    description: "Aplikasi manajemen mahasiswa dan program studi sederhana dengan operasi CRUD lengkap, dikembangkan untuk pelatihan Laravel 12 di UPI.",
    fullDescription: "Sistem manajemen mahasiswa yang dikembangkan sebagai materi pelatihan Laravel 12 di Universitas Pendidikan Indonesia. Aplikasi ini mendemonstrasikan konsep dasar Laravel dan best practices dalam pengembangan web.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel 12", "PHP", "MySQL", "CRUD Operations", "Training Project"],
    category: "Web Application",
    status: "Training Project",
    year: "2024",
    duration: "1 bulan",
    role: "Instructor & Developer",
    client: "Universitas Pendidikan Indonesia",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Mengajarkan konsep dasar Laravel framework",
      "Mendemonstrasikan CRUD operations yang proper",
      "Memberikan hands-on experience dengan real project",
      "Membangun foundation untuk web development"
    ],
    
    features: [
      "CRUD operations untuk data mahasiswa",
      "Manajemen program studi dan fakultas",
      "Authentication dan authorization",
      "Data validation dan error handling",
      "Search dan filtering functionality",
      "Export data ke Excel dan PDF",
      "Responsive UI dengan Bootstrap",
      "Database seeding dan migration"
    ],
    
    technologies: {
      "Backend": ["Laravel 12", "PHP 8.2", "MySQL 8.0"],
      "Frontend": ["Blade Templates", "Bootstrap 5", "JavaScript"],
      "Tools": ["Composer", "Artisan CLI", "Git", "XAMPP"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Student+List",
      "/placeholder.svg?height=300&width=500&text=Add+Student",
      "/placeholder.svg?height=300&width=500&text=Program+Management",
      "/placeholder.svg?height=300&width=500&text=Dashboard"
    ],
    
    nextProject: "mangrove-kedatim",
    prevProject: "mentoring-landing"
  },
  
  "mangrove-kedatim": {
    title: "Mangrove Kedatim",
    subtitle: "Mangrove Ecosystem Monitoring System",
    description: "Aplikasi untuk monitoring dan pengelolaan ekosistem mangrove di wilayah Kedatim dengan fitur tracking dan reporting.",
    fullDescription: "Sistem monitoring ekosistem mangrove yang dikembangkan untuk mendukung konservasi dan pengelolaan hutan mangrove di wilayah Kediri Timur. Aplikasi ini membantu dalam tracking kondisi ekosistem dan pelaporan data lingkungan.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Environmental Tech", "Monitoring System", "GIS", "Conservation"],
    category: "Web Application",
    status: "In Development",
    year: "2024",
    duration: "4 bulan (ongoing)",
    role: "Frontend Developer",
    client: "Dinas Lingkungan Hidup Kediri",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Monitoring kondisi ekosistem mangrove secara real-time",
      "Dokumentasi biodiversitas dan perubahan lingkungan",
      "Mendukung program konservasi dan restorasi",
      "Menyediakan data untuk penelitian dan kebijakan"
    ],
    
    features: [
      "GIS mapping untuk area mangrove",
      "Data collection form untuk field research",
      "Photo documentation dengan geolocation",
      "Environmental data tracking (water quality, temperature)",
      "Species identification dan counting",
      "Progress reporting untuk conservation projects",
      "Community involvement tracking",
      "Mobile-responsive interface untuk field work"
    ],
    
    technologies: {
      "Frontend": ["React 18", "TypeScript", "Leaflet.js", "Material-UI"],
      "Backend": ["Node.js", "Express", "MongoDB"],
      "Tools": ["Git", "Docker", "AWS", "Google Maps API"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=GIS+Mapping",
      "/placeholder.svg?height=300&width=500&text=Data+Collection",
      "/placeholder.svg?height=300&width=500&text=Species+Tracking",
      "/placeholder.svg?height=300&width=500&text=Reports"
    ],
    
    nextProject: "desa-cisontrol",
    prevProject: "laravel-upi-training"
  },
  
  "desa-cisontrol": {
    title: "Desa Cisontrol",
    subtitle: "Village Information System",
    description: "Sistem informasi desa untuk pengelolaan administrasi dan layanan masyarakat desa Cisontrol.",
    fullDescription: "Sistem informasi desa yang komprehensif untuk digitalisasi layanan administrasi dan pengelolaan data kependudukan di Desa Cisontrol. Sistem ini membantu meningkatkan efisiensi pelayanan publik dan transparansi pemerintahan desa.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "Government System", "Public Service", "Digital Transformation"],
    category: "Web Application",
    status: "In Development",
    year: "2024",
    duration: "6 bulan (ongoing)",
    role: "Full-Stack Developer",
    client: "Pemerintah Desa Cisontrol",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Digitalisasi layanan administrasi desa",
      "Meningkatkan transparansi pemerintahan",
      "Mempermudah akses layanan untuk warga",
      "Modernisasi sistem pengelolaan data desa"
    ],
    
    features: [
      "Portal layanan online untuk warga",
      "Manajemen data kependudukan",
      "Sistem pengajuan surat-menyurat online",
      "Informasi program dan kegiatan desa",
      "Laporan keuangan desa yang transparan",
      "Sistem pengaduan dan aspirasi masyarakat",
      "Dashboard untuk kepala desa dan perangkat",
      "Mobile app untuk akses yang mudah"
    ],
    
    technologies: {
      "Backend": ["Laravel 10", "PHP 8.1", "MySQL"],
      "Frontend": ["Vue.js", "Bootstrap", "JavaScript"],
      "Tools": ["Git", "Docker", "Linux Server"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Citizen+Portal",
      "/placeholder.svg?height=300&width=500&text=Document+Services",
      "/placeholder.svg?height=300&width=500&text=Village+Dashboard",
      "/placeholder.svg?height=300&width=500&text=Financial+Reports"
    ],
    
    nextProject: "newyear-countdown",
    prevProject: "mangrove-kedatim"
  },
  
  "newyear-countdown": {
    title: "New Year Countdown",
    subtitle: "Interactive Countdown Application",
    description: "Aplikasi countdown interaktif untuk perayaan tahun baru dengan animasi dan efek visual yang menarik.",
    fullDescription: "Aplikasi web interaktif yang menampilkan countdown menuju tahun baru dengan berbagai animasi dan efek visual. Dirancang untuk memberikan pengalaman yang engaging dan festive untuk perayaan pergantian tahun.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["JavaScript", "CSS Animations", "Interactive UI", "Canvas API"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: "1 bulan",
    role: "Frontend Developer",
    client: "Personal Project",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Menciptakan pengalaman countdown yang engaging",
      "Mengimplementasikan animasi dan efek visual yang smooth",
      "Memberikan customization options untuk users",
      "Optimasi performa untuk berbagai device"
    ],
    
    features: [
      "Real-time countdown dengan precision tinggi",
      "Particle effects dan fireworks animation",
      "Multiple themes dan color schemes",
      "Background music dan sound effects",
      "Social sharing functionality",
      "Timezone selection untuk berbagai negara",
      "Fullscreen mode untuk display",
      "Mobile-responsive design"
    ],
    
    technologies: {
      "Frontend": ["Vanilla JavaScript", "CSS3 Animations", "Canvas API", "Web Audio API"],
      "Tools": ["Git", "Webpack", "Sass", "ESLint"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Countdown+Display",
      "/placeholder.svg?height=300&width=500&text=Fireworks+Animation",
      "/placeholder.svg?height=300&width=500&text=Theme+Selection",
      "/placeholder.svg?height=300&width=500&text=Mobile+View"
    ],
    
    nextProject: "sushi-webapp",
    prevProject: "desa-cisontrol"
  },
  
  "sushi-webapp": {
    title: "Sushi Web App",
    subtitle: "Restaurant Ordering System",
    description: "Aplikasi web untuk restoran sushi dengan fitur menu interaktif, pemesanan online, dan sistem manajemen pesanan.",
    fullDescription: "Aplikasi web untuk restoran sushi yang menyediakan pengalaman pemesanan online yang seamless. Dengan design yang menarik dan user experience yang optimal, aplikasi ini membantu restoran meningkatkan penjualan online.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Food Service", "E-commerce", "Online Ordering"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: "3 bulan",
    role: "Frontend Developer",
    client: "Sushi Zen Restaurant",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Meningkatkan penjualan online restoran",
      "Menyediakan pengalaman pemesanan yang mudah",
      "Menampilkan menu dengan visual yang menarik",
      "Integrasi dengan sistem pembayaran online"
    ],
    
    features: [
      "Interactive menu dengan high-quality images",
      "Shopping cart dengan real-time calculation",
      "Multiple payment methods integration",
      "Order tracking dan status updates",
      "Customer reviews dan rating system",
      "Loyalty program dan discount codes",
      "Delivery time estimation",
      "Admin panel untuk order management"
    ],
    
    technologies: {
      "Frontend": ["React 18", "Redux Toolkit", "Material-UI", "Framer Motion"],
      "Backend": ["Node.js", "Express", "MongoDB"],
      "Payment": ["Stripe API", "PayPal Integration"],
      "Tools": ["Git", "Docker", "AWS S3", "Cloudinary"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Menu+Display",
      "/placeholder.svg?height=300&width=500&text=Shopping+Cart",
      "/placeholder.svg?height=300&width=500&text=Checkout+Process",
      "/placeholder.svg?height=300&width=500&text=Order+Tracking"
    ],
    
    nextProject: "story-app",
    prevProject: "newyear-countdown"
  },
  
  "story-app": {
    title: "StoryApp",
    subtitle: "Social Media Storytelling Platform",
    description: "Aplikasi Android untuk berbagi cerita dengan fitur upload gambar, lokasi, dan timeline interaktif.",
    fullDescription: "Aplikasi mobile social media yang fokus pada storytelling dengan fitur-fitur modern seperti location sharing, image upload, dan interactive timeline. Dikembangkan dengan menggunakan best practices Android development.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Kotlin", "Android", "Social Media", "Location Services", "Camera API"],
    category: "Mobile Application",
    status: "Completed",
    year: "2023",
    duration: "4 bulan",
    role: "Android Developer",
    client: "Personal Project",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Menciptakan platform storytelling yang engaging",
      "Implementasi fitur location-based stories",
      "Menyediakan user experience yang smooth",
      "Menggunakan modern Android development practices"
    ],
    
    features: [
      "Story creation dengan text, image, dan location",
      "Interactive timeline dengan infinite scroll",
      "Location-based story discovery",
      "Real-time notifications",
      "User profiles dan following system",
      "Story reactions dan comments",
      "Dark mode support",
      "Offline reading capability"
    ],
    
    technologies: {
      "Mobile": ["Kotlin", "Android Jetpack", "Room Database", "Retrofit"],
      "Backend": ["Firebase", "Cloud Firestore", "Cloud Storage"],
      "Tools": ["Android Studio", "Git", "Figma", "Postman"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Story+Timeline",
      "/placeholder.svg?height=300&width=500&text=Create+Story",
      "/placeholder.svg?height=300&width=500&text=Location+Map",
      "/placeholder.svg?height=300&width=500&text=User+Profile"
    ],
    
    nextProject: "laundry-app-dirtless",
    prevProject: "sushi-webapp"
  },
  
  "laundry-app-dirtless": {
    title: "Laundry App - Dirtless",
    subtitle: "Laundry Service Management System",
    description: "Aplikasi manajemen laundry dengan fitur tracking pesanan, notifikasi status, dan sistem pembayaran terintegrasi.",
    fullDescription: "Aplikasi mobile untuk layanan laundry yang menyediakan solusi end-to-end mulai dari pemesanan hingga pengambilan. Dengan fitur tracking real-time dan payment integration, aplikasi ini meningkatkan customer experience dan operational efficiency.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React Native", "Business Management", "Payment Integration", "Real-time Tracking"],
    category: "Mobile Application",
    status: "Completed",
    year: "2023",
    duration: "5 bulan",
    role: "Mobile Developer",
    client: "Dirtless Laundry Service",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Digitalisasi layanan laundry tradisional",
      "Meningkatkan customer satisfaction dengan tracking",
      "Streamline operational processes",
      "Integrasi pembayaran digital untuk kemudahan"
    ],
    
    features: [
      "Order placement dengan pickup scheduling",
      "Real-time order tracking dan status updates",
      "Push notifications untuk setiap tahap proses",
      "Multiple payment methods (cash, digital wallet, bank transfer)",
      "Customer history dan repeat orders",
      "Price calculator berdasarkan jenis layanan",
      "Rating dan review system",
      "Admin panel untuk laundry operators"
    ],
    
    technologies: {
      "Mobile": ["React Native", "Redux", "React Navigation", "AsyncStorage"],
      "Backend": ["Node.js", "Express", "MongoDB", "Socket.io"],
      "Payment": ["Midtrans", "GoPay", "OVO"],
      "Tools": ["Expo", "Git", "Firebase", "Postman"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Order+Placement",
      "/placeholder.svg?height=300&width=500&text=Order+Tracking",
      "/placeholder.svg?height=300&width=500&text=Payment+Options",
      "/placeholder.svg?height=300&width=500&text=Order+History"
    ],
    
    nextProject: "smart-clinic-ui",
    prevProject: "story-app"
  },
  
  "smart-clinic-ui": {
    title: "Smart Clinic UI",
    subtitle: "Healthcare Interface Design System",
    description: "Interface pengguna untuk sistem klinik pintar dengan desain modern dan user experience yang optimal untuk tenaga medis.",
    fullDescription: "Sistem antarmuka pengguna yang dirancang khusus untuk klinik modern dengan fokus pada efisiensi workflow tenaga medis dan patient experience. UI/UX design yang clean dan intuitive untuk mendukung operasional klinik yang optimal.",
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Healthcare UI", "Medical System", "UX Design", "Design System"],
    category: "Web Application",
    status: "Completed",
    year: "2023",
    duration: "4 bulan",
    role: "UI/UX Developer",
    client: "Smart Clinic Indonesia",
    liveUrl: "#",
    repoUrl: "#",
    
    goals: [
      "Meningkatkan efisiensi workflow tenaga medis",
      "Menyediakan interface yang user-friendly untuk staff klinik",
      "Optimasi patient management dan record keeping",
      "Implementasi design system yang konsisten"
    ],
    
    features: [
      "Dashboard overview untuk dokter dan staff",
      "Patient management dengan medical records",
      "Appointment scheduling dan calendar integration",
      "Prescription management dan drug database",
      "Billing dan insurance claim processing",
      "Medical report generation",
      "Multi-role access control",
      "Mobile-responsive design untuk tablet usage"
    ],
    
    technologies: {
      "Frontend": ["React 18", "TypeScript", "Ant Design", "Styled Components"],
      "State Management": ["Redux Toolkit", "RTK Query"],
      "Tools": ["Storybook", "Figma", "Git", "Jest"]
    },
    
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Doctor+Dashboard",
      "/placeholder.svg?height=300&width=500&text=Patient+Records",
      "/placeholder.svg?height=300&width=500&text=Appointment+Calendar",
      "/placeholder.svg?height=300&width=500&text=Prescription+Interface"
    ],
    
    nextProject: "siacta",
    prevProject: "laundry-app-dirtless"
  }
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
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="outline" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Proyek
          </Link>
        </Button>
        
        <div className="flex gap-2">
          {project.prevProject && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/projects/${project.prevProject}`}>
                ← Prev
              </Link>
            </Button>
          )}
          {project.nextProject && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/projects/${project.nextProject}`}>
                Next →
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
          <Badge variant="outline">{project.status}</Badge>
          <Badge variant="outline">{project.year}</Badge>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {project.role}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {project.year}
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {project.duration}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
        <Image src={project.imageSrc || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Overview */}
          <ContentBlock>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-lg mb-4">{project.fullDescription}</p>
            <p className="text-muted-foreground">{project.description}</p>
          </ContentBlock>

          {/* Goals */}
          <ContentBlock>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Project Goals
            </h2>
            <ul className="space-y-2">
              {project.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </ContentBlock>

          {/* Key Features */}
          <ContentBlock>
            <h2 className="text-2xl font-bold mb-4">✨ Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start p-3 border rounded-lg">
                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Challenges & Solutions */}
          <ContentBlock>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              Challenges & Solutions
            </h2>
            <div className="space-y-6">
              {project.challenges.map((item, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="mb-3">
                    <h3 className="font-medium text-red-600 mb-2">🚧 Challenge:</h3>
                    <p className="text-sm">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-600 mb-2">💡 Solution:</h3>
                    <p className="text-sm">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Outcomes */}
          <ContentBlock>
            <h2 className="text-2xl font-bold mb-4">🎯 Project Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.outcomes.map((outcome, index) => (
                <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Technologies */}
          <ContentBlock>
            <h2 className="text-2xl font-bold mb-4">🛠️ Technologies Used</h2>
            <div className="space-y-4">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category}>
                  <h3 className="font-medium mb-2">{category}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(techs) ? techs.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    )) : null}
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Gallery */}
          {project.gallery && (
            <ContentBlock>
              <h2 className="text-2xl font-bold mb-4">📸 Project Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                  </div>
                ))}
              </div>
            </ContentBlock>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <ContentBlock>
              <h2 className="text-2xl font-bold mb-4">💬 Client Testimonial</h2>
              <div className="bg-muted p-6 rounded-lg">
                <blockquote className="text-lg italic mb-4">"{project.testimonial.quote}"</blockquote>
                <div className="text-sm text-muted-foreground">
                  — {project.testimonial.author}, {project.testimonial.position}
                </div>
              </div>
            </ContentBlock>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Info */}
          <ContentBlock>
            <h3 className="font-bold mb-4">📋 Project Info</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
                <p className="text-sm">{project.client}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Duration</h4>
                <p className="text-sm">{project.duration}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Year</h4>
                <p className="text-sm">{project.year}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                <p className="text-sm">{project.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                <Badge variant={project.status === "Production" ? "default" : "outline"}>
                  {project.status}
                </Badge>
              </div>
            </div>
          </ContentBlock>

          {/* Project Links */}
          <ContentBlock>
            <h3 className="font-bold mb-4">🔗 Links</h3>
            <div className="space-y-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Link>
                </Button>
              )}
              
              {project.repoUrl && project.repoUrl !== "#" && (
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          </ContentBlock>

          {/* Tags */}
          <ContentBlock>
            <h3 className="font-bold mb-4">🏷️ Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </ContentBlock>

          {/* Contact CTA */}
          <ContentBlock>
            <h3 className="font-bold mb-4">💼 Interested in Similar Work?</h3>
            <p className="text-sm mb-4">
              Jika Anda tertarik dengan proyek serupa atau ingin berdiskusi tentang kebutuhan development Anda, jangan ragu untuk menghubungi saya.
            </p>
            <Button className="w-full" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </ContentBlock>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <div>
          {project.prevProject && (
            <Button variant="outline" asChild>
              <Link href={`/projects/${project.prevProject}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Project
              </Link>
            </Button>
          )}
        </div>
        
        <Button variant="outline" asChild>
          <Link href="/projects">
            All Projects
          </Link>
        </Button>
        
        <div>
          {project.nextProject && (
            <Button variant="outline" asChild>
              <Link href={`/projects/${project.nextProject}`}>
                Next Project
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}