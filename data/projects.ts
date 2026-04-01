export type TranslatableString = { id: string; en: string } | string;
export type TranslatableChallenge = { challenge: TranslatableString; solution: TranslatableString };

export function getLocalizedData(data: TranslatableString | undefined, lang: string): string {
  if (!data) return "";
  if (typeof data === "string") return data;
  return data[lang as "id" | "en"] || data.id;
}

export type ProjectItem = {
  title: string
  subtitle?: TranslatableString
  description: TranslatableString
  fullDescription?: TranslatableString
  imageSrc?: string
  tags: string[]
  category: string
  status: string
  year: string
  duration?: TranslatableString
  role?: TranslatableString
  client?: TranslatableString
  liveUrl?: string
  repoUrl?: string
  goals?: TranslatableString[]
  features?: TranslatableString[]
  challenges?: TranslatableChallenge[]
  outcomes?: TranslatableString[]
  technologies: Record<string, string[]>
  gallery?: string[]
  testimonial?: { quote: TranslatableString; author: string; position: TranslatableString }
  nextProject?: string
  prevProject?: string
}

const projects = {
  "siacta": {
    title: "SIACTA",
    subtitle: { id: "Sistem Informasi Akuntansi & Pajak", en: "Accounting & Tax Information System" },
    description: { id: "Aplikasi web komprehensif untuk mengelola operasi keuangan dan kepatuhan pajak dengan fitur lengkap untuk bisnis.", en: "A comprehensive web application to manage financial operations and tax compliance with complete features for businesses." },
    fullDescription: { id: "SIACTA adalah sistem informasi akuntansi dan pajak terpadu yang dirancang untuk membantu bisnis mengelola operasi keuangan mereka dengan lebih efisien. Sistem ini mengintegrasikan berbagai aspek akuntansi, mulai dari pencatatan transaksi hingga pelaporan pajak, dalam satu platform yang user-friendly dan powerful.", en: "SIACTA is an integrated accounting and tax information system designed to help businesses manage their financial operations more efficiently. This system integrates various accounting aspects, from transaction recording to tax reporting, in a single user-friendly and powerful platform." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Accounting", "Tax Management"],
    category: "Web Application",
    status: "Production",
    year: "2024",
    duration: { id: "6 bulan", en: "6 months" },
    role: { id: "Full-Stack Developer & Project Lead", en: "Full-Stack Developer & Project Lead" },
    client: { id: "PT. Solusi Bisnis Indonesia", en: "PT. Solusi Bisnis Indonesia" },
    liveUrl: "https://github.com/adityafakhrii/siacta",
    repoUrl: "https://github.com/adityafakhrii/siacta",
    goals: [
      { id: "Mengotomatisasi proses akuntansi manual yang memakan waktu", en: "Automate time-consuming manual accounting processes" },
      { id: "Menyediakan sistem pelaporan pajak yang akurat dan real-time", en: "Provide an accurate and real-time tax reporting system" },
      { id: "Meningkatkan efisiensi operasional keuangan perusahaan", en: "Improve the company's financial operational efficiency" },
      { id: "Memastikan kepatuhan terhadap regulasi perpajakan Indonesia", en: "Ensure compliance with Indonesian tax regulations" },
    ],
    features: [
      { id: "Dashboard analitik keuangan real-time", en: "Real-time financial analytics dashboard" },
      { id: "Manajemen transaksi dan jurnal otomatis", en: "Automatic transaction and journal management" },
      { id: "Sistem pelaporan pajak terintegrasi", en: "Integrated tax reporting system" },
      { id: "Multi-user access dengan role-based permissions", en: "Multi-user access with role-based permissions" },
      { id: "Export data ke berbagai format (PDF, Excel, CSV)", en: "Data export to various formats (PDF, Excel, CSV)" },
      { id: "Backup dan restore data otomatis", en: "Automatic data backup and restore" },
      { id: "Audit trail untuk tracking perubahan data", en: "Audit trail for tracking data changes" },
      { id: "Notifikasi deadline pajak dan pembayaran", en: "Tax deadline and payment notifications" },
    ],
    challenges: [
      { 
        challenge: { id: "Kompleksitas regulasi perpajakan Indonesia yang sering berubah", en: "The complexity of frequently changing Indonesian tax regulations" }, 
        solution: { id: "Mengimplementasikan sistem konfigurasi yang fleksibel dan mudah diupdate sesuai perubahan regulasi terbaru", en: "Implementing a flexible and easily updatable configuration system according to the latest regulatory changes" } 
      },
      { 
        challenge: { id: "Integrasi dengan sistem akuntansi existing client", en: "Integration with the client's existing accounting system" }, 
        solution: { id: "Membangun API yang robust dan sistem import/export data yang kompatibel dengan berbagai format", en: "Building a robust API and a data import/export system compatible with various formats" } 
      },
      { 
        challenge: { id: "Keamanan data keuangan yang sensitif", en: "Security of sensitive financial data" }, 
        solution: { id: "Implementasi enkripsi end-to-end, audit logging, dan sistem backup multi-layer", en: "Implementation of end-to-end encryption, audit logging, and a multi-layer backup system" } 
      },
    ],
    outcomes: [
      { id: "Mengurangi waktu proses akuntansi bulanan dari 5 hari menjadi 2 hari", en: "Reduced monthly accounting process time from 5 days to 2 days" },
      { id: "Meningkatkan akurasi pelaporan pajak hingga 99.8%", en: "Increased tax reporting accuracy to 99.8%" },
      { id: "Menghemat biaya operasional akuntansi sebesar 40%", en: "Saved 40% in accounting operational costs" },
      { id: "Digunakan oleh 15+ perusahaan dengan total 200+ users aktif", en: "Used by 15+ companies with a total of 200+ active users" },
    ],
    technologies: {
      Backend: ["Laravel 10", "PHP 8.1", "MySQL 8.0"],
      Frontend: ["JavaScript ES6+", "Bootstrap 5", "jQuery"],
      Tools: ["Git", "Composer", "NPM", "Laragon"],
      Deployment: ["Apache", "Linux Server", "SSL Certificate"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Dashboard",
      "/placeholder.svg?height=300&width=500&text=Transaction+Management",
      "/placeholder.svg?height=300&width=500&text=Tax+Reports",
      "/placeholder.svg?height=300&width=500&text=Analytics",
    ],
    testimonial: {
      quote: { id: "SIACTA telah mengubah cara kami mengelola keuangan perusahaan. Proses yang sebelumnya memakan waktu berhari-hari kini dapat diselesaikan dalam hitungan jam dengan akurasi yang sangat tinggi.", en: "SIACTA has transformed the way we manage our company's finances. Processes that previously took days can now be completed in hours with very high accuracy." },
      author: "Budi Santoso",
      position: { id: "Finance Manager, PT. Solusi Bisnis Indonesia", en: "Finance Manager, PT. Solusi Bisnis Indonesia" },
    },
    nextProject: "restoranku",
    prevProject: "smart-clinic-ui",
  },
  "medfluffy": {
    title: "MedFluffy",
    subtitle: { id: "AI-Powered Pet Eye Disease Detection", en: "AI-Powered Pet Eye Disease Detection" },
    description: { id: "Aplikasi Android untuk prediksi dini penyakit mata pada anjing menggunakan CNN dan rekomendasi pertolongan pertama.", en: "Android app for early prediction of dog eye diseases using CNN and first aid recommendations." },
    fullDescription: { id: "MedFluffy adalah aplikasi mobile berbasis AI yang dikembangkan sebagai Capstone Project Bangkit Academy 2023. Menggunakan CNN dan TensorFlow Lite untuk inference di perangkat mobile.", en: "MedFluffy is an AI-based mobile application developed as a Bangkit Academy 2023 Capstone Project. It uses CNN and TensorFlow Lite for on-device inference." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Kotlin", "TensorFlow", "CNN", "Firebase", "Material Design", "Computer Vision"],
    category: "Mobile Application",
    status: "Completed",
    year: "2023",
    duration: { id: "4 bulan (200 jam)", en: "4 months (200 hours)" },
    role: { id: "Mobile Developer & ML Engineer", en: "Mobile Developer & ML Engineer" },
    client: { id: "Bangkit Academy Capstone Project", en: "Bangkit Academy Capstone Project" },
    liveUrl: "https://github.com/MedFluffy",
    repoUrl: "https://github.com/MedFluffy",
    goals: [
      { id: "Deteksi dini penyakit mata anjing yang mudah diakses", en: "Easily accessible early detection of dog eye diseases" },
      { id: "Mengurangi biaya konsultasi untuk screening awal", en: "Reduce consultation costs for early screening" },
      { id: "Meningkatkan awareness kesehatan mata hewan peliharaan", en: "Increase awareness of pet eye health" },
    ],
    features: [
      { id: "Deteksi penyakit mata via kamera", en: "Eye disease detection via camera" },
      { id: "AI model akurasi 85%+ untuk 5 penyakit", en: "85%+ accuracy AI model for 5 diseases" },
      { id: "Rekomendasi pertolongan pertama", en: "First aid recommendations" },
      { id: "Riwayat pemeriksaan dan tracking kondisi", en: "Examination history and condition tracking" },
    ],
    challenges: [
      { 
        challenge: { id: "Dataset terbatas dan tidak seimbang", en: "Limited and imbalanced dataset" }, 
        solution: { id: "Data augmentation dan transfer learning", en: "Data augmentation and transfer learning" } 
      },
      { 
        challenge: { id: "Optimasi model untuk mobile", en: "Model optimization for mobile" }, 
        solution: { id: "TensorFlow Lite dan quantization", en: "TensorFlow Lite and quantization" } 
      },
      { 
        challenge: { id: "Variasi pencahayaan foto", en: "Photo lighting variations" }, 
        solution: { id: "Image preprocessing dan panduan pengambilan foto", en: "Image preprocessing and photo capture guidelines" } 
      },
    ],
    outcomes: [
      { id: "Akurasi model 87% pada test dataset", en: "87% model accuracy on test dataset" },
      { id: "Ukuran aplikasi <50MB, response <3 detik", en: "App size <50MB, response <3 seconds" },
      { id: "Top 10% Capstone Project Bangkit 2023", en: "Top 10% Bangkit 2023 Capstone Project" },
    ],
    technologies: {
      Mobile: ["Kotlin", "Android SDK", "Jetpack Compose", "Material Design"],
      "Machine Learning": ["TensorFlow", "TensorFlow Lite", "CNN", "Transfer Learning"],
      Backend: ["Firebase", "Cloud Storage", "Authentication"],
      Tools: ["Android Studio", "Google Colab", "Git", "Figma"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Camera+Interface",
      "/placeholder.svg?height=300&width=500&text=AI+Detection",
      "/placeholder.svg?height=300&width=500&text=Results+Screen",
      "/placeholder.svg?height=300&width=500&text=History+Tracking",
    ],
    testimonial: {
      quote: { id: "MedFluffy sangat membantu untuk screening awal kondisi mata hewan peliharaan. Mudah digunakan dan hasilnya akurat.", en: "MedFluffy is very helpful for the early screening of pet eye conditions. It is easy to use and the results are accurate." },
      author: "Dr. Sarah",
      position: { id: "Veterinarian", en: "Veterinarian" },
    },
    nextProject: "story-app",
    prevProject: "siacta",
  },
  "proquoteai": {
    title: "ProQuoteAI",
    subtitle: { id: "AI-Powered Quotation & Estimation", en: "AI-Powered Quotation & Estimation" },
    description: { id: "Sistem AI untuk membuat quotation profesional dan estimasi biaya dengan cepat.", en: "AI system to quickly create professional quotations and cost estimations." },
    fullDescription: { id: "ProQuoteAI membantu tim sales dan project membuat quotation profesional dengan rekomendasi harga dan komponen otomatis menggunakan model AI.", en: "ProQuoteAI helps sales and project teams create professional quotations with automatic price and component recommendations using AI models." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Next.js", "TypeScript", "OpenAI", "Tailwind", "Pricing Engine"],
    category: "Web Application",
    status: "Prototype",
    year: "2024",
    duration: { id: "2 bulan", en: "2 months" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    client: { id: "Internal R&D", en: "Internal R&D" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Mempercepat pembuatan quotation", en: "Accelerate quotation creation process" },
      { id: "Meningkatkan akurasi estimasi biaya", en: "Improve cost estimation accuracy" },
      { id: "Standarisasi format penawaran", en: "Standardize proposal formats" },
    ],
    features: [
      { id: "Template quotation dinamis", en: "Dynamic quotation templates" },
      { id: "Rekomendasi harga berbasis AI", en: "AI-based price recommendations" },
      { id: "Export PDF dan kirim email", en: "PDF export and email integration" },
      { id: "Approval workflow untuk tim", en: "Team approval workflow" },
    ],
    challenges: [
      { 
        challenge: { id: "Model rekomendasi harga yang akurat", en: "Accurate price recommendation model" }, 
        solution: { id: "Kalibrasi berdasarkan historical data dan feedback loop", en: "Calibration based on historical data and feedback loops" } 
      },
      { 
        challenge: { id: "Standarisasi format lintas industri", en: "Format standardization across industries" }, 
        solution: { id: "Template modular dan konfigurasi kategori produk", en: "Modular templates and product category configurations" } 
      },
    ],
    outcomes: [
      { id: "Waktu pembuatan quotation turun 60%", en: "Quotation creation time reduced by 60%" },
      { id: "Variasi harga antar sales lebih konsisten", en: "Price variation among sales became more consistent" },
    ],
    technologies: {
      Frontend: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Prisma", "PostgreSQL"],
      AI: ["OpenAI API", "Prompt Engineering"],
      Tools: ["Git", "Vercel", "Figma"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Quotation+Template",
      "/placeholder.svg?height=300&width=500&text=Price+Recommendation",
    ],
    testimonial: {
      quote: { id: "ProQuoteAI mempersingkat proses penawaran dan meningkatkan konsistensi harga.", en: "ProQuoteAI shortens the proposal process and increases price consistency." },
      author: "Raka Setia",
      position: { id: "Head of Sales", en: "Head of Sales" },
    },
    nextProject: "patunganyuk",
    prevProject: "ramadhanjs",
  },
  "patunganyuk": {
    title: "PatunganYuk",
    subtitle: { id: "Group Payment & Split Bills", en: "Group Payment & Split Bills" },
    description: { id: "Aplikasi untuk patungan bersama—buat grup, tentukan target, dan split bills otomatis.", en: "Group payment application—create groups, set targets, and automatically split bills." },
    fullDescription: { id: "PatunganYuk memudahkan pengelolaan patungan barang/jasa, tracking kontribusi anggota, dan pembayaran digital.", en: "PatunganYuk simplifies managing group payments, tracking member contributions, and processing digital payments." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Node.js", "MongoDB", "Payment", "Realtime"],
    category: "Web Application",
    status: "Beta",
    year: "2024",
    duration: { id: "3 bulan", en: "3 months" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    client: { id: "Community Product", en: "Community Product" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Permudah patungan bersama", en: "Simplify group payments" },
      { id: "Transparansi kontribusi anggota", en: "Member contribution transparency" },
      { id: "Pembayaran digital yang aman", en: "Secure digital payments" },
    ],
    features: [
      { id: "Grup patungan dengan target nominal", en: "Group payments with target amounts" },
      { id: "Split bills otomatis", en: "Automatic split bills" },
      { id: "Notifikasi status kontribusi", en: "Contribution status notifications" },
      { id: "Export laporan patungan", en: "Export payment reports" },
    ],
    challenges: [
      { 
        challenge: { id: "Rekonsiliasi pembayaran multi-metode", en: "Multi-method payment reconciliation" }, 
        solution: { id: "Webhook dan status tracking terstandarisasi", en: "Standardized webhooks and status tracking" } 
      },
      { 
        challenge: { id: "Transparansi kontribusi", en: "Contribution transparency" }, 
        solution: { id: "Laporan real-time dan audit trail", en: "Real-time reporting and audit trails" } 
      },
    ],
    outcomes: [
      { id: "500+ grup patungan aktif", en: "500+ active payment groups" },
      { id: "Admin lebih mudah memonitor kontribusi", en: "Easier contribution monitoring for admins" },
    ],
    technologies: {
      Frontend: ["React 18", "TypeScript", "Tailwind CSS"],
      Backend: ["Node.js", "Express", "MongoDB"],
      Payment: ["Midtrans", "Stripe"],
      Tools: ["Git", "Docker"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Group+Dashboard",
      "/placeholder.svg?height=300&width=500&text=Split+Bills",
    ],
    testimonial: {
      quote: { id: "Pengelolaan patungan jadi rapi dan transparan.", en: "Managing group bills has become cleaner and more transparent." },
      author: "Intan",
      position: { id: "Community Organizer", en: "Community Organizer" },
    },
    nextProject: "restoranku",
    prevProject: "proquoteai",
  },
  "restoranku": {
    title: "Restoranku",
    subtitle: { id: "Smart Restaurant Management System", en: "Smart Restaurant Management System" },
    description: { id: "Pemesanan via QR code, pembayaran QRIS (Midtrans), dan analytics komprehensif.", en: "QR code ordering, QRIS (Midtrans) payments, and comprehensive analytics." },
    fullDescription: { id: "Restoranku mengintegrasikan QR untuk pemesanan, Midtrans untuk pembayaran digital, dan dashboard analytics real-time.", en: "Restoranku integrates QR for ordering, Midtrans for digital payments, and real-time analytics dashboards." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Midtrans", "QR Code", "Payment Gateway"],
    category: "Web Application",
    status: "Production",
    year: "2025",
    duration: { id: "3 bulan", en: "3 months" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    client: { id: "KelasFullstack", en: "KelasFullstack" },
    liveUrl: "",
    repoUrl: "https://github.com/adityafakhrii/restoranku.git",
    goals: [
      { id: "Digitalisasi pemesanan dan pembayaran", en: "Digitizing ordering and payments" },
      { id: "Analytics real-time untuk keputusan bisnis", en: "Real-time analytics for business decisions" },
      { id: "Efisiensi operasional restoran", en: "Restaurant operational efficiency" },
    ],
    features: [
      { id: "QR Code menu & contactless order", en: "QR Code menus & contactless ordering" },
      { id: "Integrasi Midtrans: QRIS, VA, e-wallet", en: "Midtrans integration: QRIS, VA, e-wallets" },
      { id: "Dashboard analytics penjualan", en: "Sales analytics dashboard" },
      { id: "Notifikasi pesanan kitchen & customer", en: "Kitchen & customer order notifications" },
    ],
    challenges: [
      { 
        challenge: { id: "Integrasi payment multi-metode", en: "Multi-method payment integration" }, 
        solution: { id: "Midtrans SDK + webhook untuk status real-time", en: "Midtrans SDK + webhooks for real-time status" } 
      },
      { 
        challenge: { id: "Sinkronisasi pesanan real-time", en: "Real-time order synchronization" }, 
        solution: { id: "WebSocket & notification system", en: "WebSockets & notification systems" } 
      },
    ],
    outcomes: [
      { id: "Waktu tunggu turun dari 15m ke 5m", en: "Wait times dropped from 15m to 5m" },
      { id: "Transaksi digital naik 80%", en: "Digital transactions increased by 80%" },
      { id: "Error pesanan turun 95%", en: "Order errors decreased by 95%" },
    ],
    technologies: {
      Backend: ["Laravel 12", "PHP 8.4", "MySQL", "Redis"],
      Frontend: ["JavaScript", "Bootstrap 5", "jQuery", "Chart.js"],
      Payment: ["Midtrans API"],
      Tools: ["Git", "Postman", "Laravel Telescope", "Queue Workers"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=QR+Menu",
      "/placeholder.svg?height=300&width=500&text=Order+Interface",
      "/placeholder.svg?height=300&width=500&text=Payment+Gateway",
      "/placeholder.svg?height=300&width=500&text=Analytics+Dashboard",
    ],
    testimonial: {
      quote: { id: "Pelanggan lebih puas, operasional lebih efisien dengan dashboard analytics.", en: "Customers are more satisfied, and operations are more efficient with the analytics dashboard." },
      author: "Ahmad Wijaya",
      position: { id: "Owner, Restoran Nusantara", en: "Owner, Nusantara Restaurant" },
    },
    nextProject: "ramadhanjs",
    prevProject: "medfluffy",
  },
  "ramadhanjs": {
    title: "RamadhanJS",
    subtitle: { id: "30 Days JS Challenge – Ramadhan Edition", en: "30 Days JS Challenge – Ramadan Edition" },
    description: { id: "30 proyek mini selama Ramadhan: typing effect, countdown maghrib, tasbih counter, random ayat, dan lebih banyak lagi.", en: "30 mini-projects during Ramadan: typing effect, Maghrib countdown, tasbih counter, random verses, and more." },
    fullDescription: { id: "Self-initiated 30-day JavaScript challenge selama Ramadhan 2025. Setiap hari satu mini app baru (React/TS/Vite) untuk spiritual & skill-building: Countdown Maghrib, Tasbih Counter, Random Ayat, Umrah Planner, Mosque Finder, dll.", en: "Self-initiated 30-day JavaScript challenge during Ramadan 2025. One new mini app daily (React/TS/Vite) for spiritual & skill-building: Maghrib Countdown, Tasbih Counter, Random Verses, Umrah Planner, Mosque Finder, etc." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["JavaScript", "TypeScript", "React", "Vite", "TailwindCSS", "30-Day Challenge"],
    category: "Web Application",
    status: "Completed",
    year: "2025",
    duration: { id: "1 bulan", en: "1 month" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    client: { id: "Self Initiated / Open Source", en: "Self Initiated / Open Source" },
    liveUrl: "",
    repoUrl: "https://github.com/adityafakhrii/ramadhanjs-2025.git",
    goals: [
      { id: "Menyelesaikan 30 proyek mini dalam 30 hari Ramadhan", en: "Complete 30 mini-projects in 30 days of Ramadan" },
      { id: "Meningkatkan skill React, TypeScript & Vite", en: "Improve React, TypeScript & Vite skills" },
      { id: "Menyediakan tools digital bermanfaat untuk umat", en: "Provide useful digital tools for the community" },
    ],
    features: [
      { id: "Typing Effect (Hari 1)", en: "Typing Effect (Day 1)" },
      { id: "Countdown Maghrib (Hari 2)", en: "Maghrib Countdown (Day 2)" },
      { id: "Ramadhan Quote (Hari 3)", en: "Ramadan Quote (Day 3)" },
      { id: "Tasbih Counter (Hari 4)", en: "Tasbih Counter (Day 4)" },
      { id: "Random Ayat (Hari 5)", en: "Random Verse (Day 5)" },
      { id: "Umrah Planner (Hari 6)", en: "Umrah Planner (Day 6)" },
      { id: "Mosque Finder (Hari 7)", en: "Mosque Finder (Day 7)" },
      { id: "What Weather (Hari 8)", en: "What Weather (Day 8)" },
      { id: "Linktree Clone (Hari 9)", en: "Linktree Clone (Day 9)" },
      { id: "Kalender Ibadah (Hari 10)", en: "Worship Calendar (Day 10)" },
      { id: "Scroll Hadith (Hari 11)", en: "Scroll Hadith (Day 11)" },
      { id: "Islamic History (Hari 12)", en: "Islamic History (Day 12)" },
      { id: "... dan proyek lainnya", en: "... and other projects" },
    ],
    challenges: [
      { 
        challenge: { id: "Menjaga konsistensi coding setiap hari selama Ramadhan", en: "Maintaining coding consistency every day during Ramadan" }, 
        solution: { id: "Bangun boilerplate Vite-React-TS + Tailwind di hari 0, siapkan issue template & GitHub Actions biar tinggal code-push-deploy", en: "Built Vite-React-TS + Tailwind boilerplate on day 0, prepared issue templates & GitHub Actions for easy code-push-deploy" } 
      },
      { 
        challenge: { id: "Menghadirkan ide fitur yang tetap relevan & spiritual", en: "Coming up with relevant & spiritual feature ideas" }, 
        solution: { id: "Kumpulkan pain-point Ramadhan dari grup WhatsApp & Twitter, prioritaskan tools yang sehari-hari dipakai (countdown, tasbih, jadwal)", en: "Gathered Ramadan pain-points from WhatsApp groups & Twitter, prioritized daily-use tools (countdown, tasbih, schedule)" } 
      },
    ],
    outcomes: [
      { id: "30 repo GitHub aktif selesai tepat waktu", en: "30 active GitHub repos completed on time" },
      { id: "Portfolio skill React/TS meningkat drastis", en: "React/TS skill portfolio improved drastically" },
    ],
    technologies: {
      Frontend: ["React", "TypeScript", "Vite", "TailwindCSS", "HTML5", "CSS3"],
      APIs: ["Al-Quran Cloud API", "OpenStreetMap Nominatim", "OpenWeatherMap"],
      Tools: ["Git", "GitHub Actions", "Netlify", "pnpm"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Countdown+Maghrib",
      "/placeholder.svg?height=300&width=500&text=Tasbih+Counter",
    ],
    testimonial: {
      quote: { id: "Ide 30 hari 30 app sangat inspiratif, saya turut belajar setiap repo-nya!", en: "The 30 days 30 apps idea is very inspiring, I learned along with every repo!" },
      author: "Ahmad Fauzi",
      position: { id: "Frontend Developer", en: "Frontend Developer" },
    },
    nextProject: "mentoring-landing",
    prevProject: "restoranku",
  },
  "mentoring-landing": {
    title: "Mentoring Landing Page",
    subtitle: { id: "Modern Landing Page for Mentoring Program", en: "Modern Landing Page for Mentoring Program" },
    description: { id: "Landing page modern dan responsif untuk program mentoring.", en: "Modern and responsive landing page for a mentoring program." },
    fullDescription: { id: "Landing page dengan fokus konversi dan UX: sekilas program, mentor profile, testimonial, FAQ, dan form kontak.", en: "Conversion and UX-focused landing page: program overview, mentor profiles, testimonials, FAQs, and contact forms." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Responsive Design", "SEO"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: { id: "2 bulan", en: "2 months" },
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    client: { id: "Mentoring Program Indonesia", en: "Mentoring Program Indonesia" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Meningkatkan conversion pendaftaran", en: "Increase registration conversions" },
      { id: "Informasi program yang jelas", en: "Clear program information" },
      { id: "Optimasi SEO", en: "SEO Optimization" },
    ],
    features: [
      { id: "Hero section dengan CTA", en: "Hero section with CTA" },
      { id: "Program overview & timeline", en: "Program overview & timeline" },
      { id: "Mentor profiles", en: "Mentor profiles" },
      { id: "Testimonial carousel & FAQ", en: "Testimonial carousel & FAQs" },
    ],
    challenges: [
      { 
        challenge: { id: "Kecepatan loading & SEO", en: "Loading speed & SEO" }, 
        solution: { id: "Code splitting, image optimization, dan meta lengkap", en: "Code splitting, image optimization, and complete meta tags" } 
      },
    ],
    outcomes: [
      { id: "Conversion rate meningkat 35%", en: "Conversion rate increased by 35%" },
      { id: "Skor Lighthouse SEO 95+", en: "Lighthouse SEO score 95+" },
    ],
    technologies: {
      Frontend: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      Tools: ["Git", "Vercel", "Figma"],
      SEO: ["Meta Tags", "Structured Data", "Sitemap"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Hero+Section",
      "/placeholder.svg?height=300&width=500&text=Program+Overview",
    ],
    nextProject: "laravel-upi-training",
    prevProject: "ramadhanjs",
  },
  "laravel-upi-training": {
    title: "Laravel 12 UPI Training",
    subtitle: { id: "Student Management System for Training", en: "Student Management System for Training" },
    description: { id: "Aplikasi manajemen mahasiswa dan program studi sederhana untuk pelatihan Laravel 12.", en: "A simple student and study program management application for Laravel 12 training." },
    fullDescription: { id: "CRUD mahasiswa, manajemen prodi, dan responsive UI.", en: "Student CRUD operations, program management, and responsive UI." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel 12", "PHP", "MySQL", "CRUD Operations", "Training Project"],
    category: "Web Application",
    status: "Training Project",
    year: "2024",
    duration: { id: "1 bulan", en: "1 month" },
    role: { id: "Instructor & Developer", en: "Instructor & Developer" },
    client: { id: "Universitas Pendidikan Indonesia", en: "Universitas Pendidikan Indonesia" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Mengajarkan konsep dasar Laravel", en: "Teach basic Laravel concepts" },
      { id: "CRUD operations yang proper", en: "Proper CRUD operations" },
      { id: "Hands-on dengan real project", en: "Hands-on experience with a real project" },
    ],
    features: [
      { id: "CRUD data mahasiswa", en: "Student data CRUD" },
      { id: "Manajemen program studi", en: "Study program management" },
      { id: "Auth & authorization", en: "Authentication & authorization" },
      { id: "Export ke Excel/PDF", en: "Export to Excel/PDF" },
    ],
    challenges: [
      { 
        challenge: { id: "Peserta dengan latar belakang beragam", en: "Participants with diverse backgrounds" }, 
        solution: { id: "Materi bertahap dan contoh nyata CRUD yang sederhana", en: "Gradual material and simple real-world CRUD examples" } 
      },
      { 
        challenge: { id: "Setup environment berbeda-beda", en: "Different environment setups" }, 
        solution: { id: "Panduan instalasi lengkap dan troubleshooting umum", en: "Complete installation guide and common troubleshooting" } 
      }
    ],
    outcomes: [
      { id: "80% peserta berhasil membangun aplikasi CRUD sederhana", en: "80% of participants successfully built a simple CRUD application" },
      { id: "Pemahaman dasar MVC dan routing meningkat", en: "Increased understanding of basic MVC and routing" }
    ],
    technologies: {
      Backend: ["Laravel 12", "PHP 8.2", "MySQL 8.0"],
      Frontend: ["Blade Templates", "Bootstrap 5", "JavaScript"],
      Tools: ["Composer", "Artisan CLI", "Git", "XAMPP"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Student+List",
      "/placeholder.svg?height=300&width=500&text=Add+Student",
    ],
    nextProject: "mangrove-kedatim",
    prevProject: "mentoring-landing",
  },
  "mangrove-kedatim": {
    title: "Mangrove Kedatim",
    subtitle: { id: "Eco-Tourism Landing Page", en: "Eco-Tourism Landing Page" },
    description: { id: "Kenalan dengan destinasi wisata Mangrove Kedatim: spot foto, spot outbound, dan informasi lengkapnya.", en: "Get to know the Mangrove Kedatim tourist destination: photo spots, outbound areas, and complete information." },
    fullDescription: { id: "Landing page responsif untuk memperkenalkan kawasan wisata Mangrove Kedatim, lengkap dengan galeri foto, peta lokasi, fasilitas, jam operasional, dan kontak pengelola.", en: "A responsive landing page to introduce the Mangrove Kedatim tourist area, featuring a photo gallery, location map, facilities, operating hours, and management contacts." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Bootstrap 5", "Eco-Tourism", "Landing Page"],
    category: "Landing Page",
    status: "Completed",
    year: "2024",
    duration: { id: "2 minggu", en: "2 weeks" },
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    client: { id: "Pengelola Wisata Mangrove Kedatim", en: "Mangrove Kedatim Tourism Management" },
    liveUrl: "https://mangrovekedatimsumenep.netlify.app/",
    repoUrl: "https://github.com/adityafakhrii/mangrovekedatim.git",
    goals: [
      { id: "Meningkatkan kunjungan wisata lokal", en: "Increase local tourism visits" },
      { id: "Menyediakan informasi destinasi secara digital", en: "Provide digital destination information" },
    ],
    features: [
      { id: "Hero section dengan video background", en: "Hero section with video background" },
      { id: "Galeri foto interaktif", en: "Interactive photo gallery" },
      { id: "Peta lokasi & rute perjalanan", en: "Location map & travel routes" },
      { id: "Section fasilitas & harga tiket", en: "Facilities & ticket price section" },
      { id: "Testimoni pengunjung", en: "Visitor testimonials" },
    ],
    challenges: [
      { 
        challenge: { id: "Optimasi gambar untuk koneksi lambat", en: "Image optimization for slow connections" }, 
        solution: { id: "Compress gambar dan lazy loading galeri", en: "Image compression and lazy loading for the gallery" } 
      },
      { 
        challenge: { id: "Informasi destinasi yang sering berubah", en: "Frequently changing destination information" }, 
        solution: { id: "Struktur konten modular mudah diupdate", en: "Modular content structure for easy updates" } 
      }
    ],
    outcomes: [
      { id: "Traffic organik meningkat 40%", en: "Organic traffic increased by 40%" },
      { id: "Bounce rate turun 25%", en: "Bounce rate decreased by 25%" }
    ],
    technologies: {
      Frontend: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
      Backend: ["— (Static CMS integration)"],
      Tools: ["Vercel", "Figma", "Google Maps Embed API"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Spot+Foto+Jembatan",
      "/placeholder.svg?height=300&width=500&text=Spot+Outbound",
      "/placeholder.svg?height=300&width=500&text=Piknik+di+Dermaga",
    ],
    nextProject: "desa-cisontrol",
    prevProject: "laravel-upi-training",
  },
  "desa-cisontrol": {
    title: "Desa Cisontrol",
    subtitle: { id: "Village Information System", en: "Village Information System" },
    description: { id: "Digitalisasi layanan administrasi dan pengelolaan data desa.", en: "Digitization of village administration services and data management." },
    fullDescription: { id: "Portal layanan online, manajemen kependudukan, sistem pengajuan surat, dan transparansi keuangan desa.", en: "Online service portal, population management, letter application system, and village financial transparency." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "Government System", "Public Service", "Digital Transformation"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: { id: "6 bulan (ongoing)", en: "6 months (ongoing)" },
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    client: { id: "Pemerintah Desa Cisontrol", en: "Cisontrol Village Government" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Digitalisasi layanan administrasi desa", en: "Digitize village administration services" },
      { id: "Meningkatkan transparansi pemerintahan", en: "Increase government transparency" },
    ],
    features: [
      { id: "Portal layanan warga", en: "Citizen service portal" },
      { id: "Manajemen data kependudukan", en: "Population data management" },
      { id: "Pengajuan surat online", en: "Online document requests" },
      { id: "Dashboard perangkat desa", en: "Village apparatus dashboard" },
    ],
    challenges: [
      { 
        challenge: { id: "Migrasi data kependudukan dari sistem lama", en: "Population data migration from legacy system" }, 
        solution: { id: "ETL dengan validasi dan audit trail", en: "ETL with validation and audit trails" } 
      },
      { 
        challenge: { id: "Adopsi teknologi oleh perangkat desa", en: "Technology adoption by village officials" }, 
        solution: { id: "Pelatihan dan UI sederhana berbasis kebutuhan", en: "Training and simple needs-based UI" } 
      }
    ],
    outcomes: [
      { id: "Waktu proses pengajuan surat turun 60%", en: "Document processing time cut by 60%" },
      { id: "Transparansi laporan meningkat dengan dashboard real-time", en: "Increased report transparency with real-time dashboards" }
    ],
    technologies: {
      Backend: ["Laravel 10", "PHP 8.1", "MySQL"],
      Frontend: ["Vue.js", "Bootstrap", "JavaScript"],
      Tools: ["Git", "Docker", "Linux Server"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Citizen+Portal",
      "/placeholder.svg?height=300&width=500&text=Document+Services",
    ],
    nextProject: "newyear-countdown",
    prevProject: "mangrove-kedatim",
  },
  "newyear-countdown": {
    title: "New Year Countdown",
    subtitle: { id: "Interactive Countdown Application", en: "Interactive Countdown Application" },
    description: { id: "Aplikasi countdown interaktif untuk tahun baru dengan animasi.", en: "Interactive countdown application for the New Year with beautiful animations." },
    fullDescription: { id: "Countdown dengan particle effects, tema, musik latar, dan mode fullscreen.", en: "Countdown featuring particle effects, themes, background music, and fullscreen mode." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["JavaScript", "CSS Animations", "Interactive UI", "Canvas API"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: { id: "1 bulan", en: "1 month" },
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    client: { id: "Personal Project", en: "Personal Project" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Pengalaman countdown yang engaging", en: "Engaging countdown experience" },
      { id: "Animasi smooth dan performa optimal", en: "Smooth animations and optimal performance" },
    ],
    features: [
      { id: "Countdown real-time", en: "Real-time countdown" },
      { id: "Particle effects & fireworks", en: "Particle effects & fireworks" },
      { id: "Multiple themes", en: "Multiple themes" },
    ],
    challenges: [
      { 
        challenge: { id: "Performa animasi pada perangkat low-end", en: "Animation performance on low-end devices" }, 
        solution: { id: "Canvas rendering ringan dan pengurangan kompleksitas efek", en: "Lightweight canvas rendering and reduced effect complexity" } 
      },
      { 
        challenge: { id: "Sinkronisasi waktu lintas zona", en: "Time synchronization across timezones" }, 
        solution: { id: "Menggunakan Intl API dan normalisasi timezone", en: "Utilizing the Intl API and timezone normalization" } 
      }
    ],
    outcomes: [
      { id: "Animasi stabil ~60fps di mayoritas perangkat", en: "Stable ~60fps animation on most devices" },
      { id: "Penggunaan memori terjaga dan load cepat", en: "Stable memory usage and fast loading" }
    ],
    technologies: {
      Frontend: ["Vanilla JavaScript", "CSS3 Animations", "Canvas API", "Web Audio API"],
      Tools: ["Git", "Webpack", "Sass", "ESLint"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Countdown+Display",
      "/placeholder.svg?height=300&width=500&text=Fireworks",
    ],
    nextProject: "sushi-webapp",
    prevProject: "desa-cisontrol",
  },
  "sushi-webapp": {
    title: "Sushi Web App",
    subtitle: { id: "Online Ordering & Restaurant App", en: "Online Ordering & Restaurant App" },
    description: { id: "Aplikasi web restoran sushi: menu interaktif, pemesanan online, dan sistem manajemen pesanan.", en: "Sushi restaurant web app: interactive menus, online ordering, and order management system." },
    fullDescription: { id: "Aplikasi web untuk restoran sushi yang menyediakan pengalaman pemesanan online yang seamless. Dengan design yang menarik dan user experience yang optimal, aplikasi ini membantu restoran meningkatkan penjualan online.", en: "A sushi restaurant web application providing a seamless online ordering experience. With an attractive design and optimal user experience, this app helps the restaurant increase online sales." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Redux Toolkit", "Material-UI", "Framer Motion", "Restaurant"],
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: { id: "2 bulan", en: "2 months" },
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    client: { id: "Sushi Zen Restaurant", en: "Sushi Zen Restaurant" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Meningkatkan penjualan online restoran", en: "Increase online restaurant sales" },
      { id: "Mempermudah proses pemesanan bagi pelanggan", en: "Simplify the ordering process for customers" },
      { id: "Optimasi UI/UX untuk konversi lebih tinggi", en: "Optimize UI/UX for higher conversions" },
    ],
    features: [
      { id: "Menu interaktif dengan kategori dan filter", en: "Interactive menu with categories and filters" },
      { id: "Shopping cart dan checkout", en: "Shopping cart and checkout" },
      { id: "Payment integration (Stripe, PayPal)", en: "Payment integration (Stripe, PayPal)" },
      { id: "Order management untuk admin", en: "Order management for administrators" },
    ],
    challenges: [
      { 
        challenge: { id: "Integrasi pembayaran dan checkout", en: "Payment and checkout integration" }, 
        solution: { id: "API gateway Stripe/PayPal dengan validasi server-side", en: "Stripe/PayPal API gateways with server-side validation" } 
      },
      { 
        challenge: { id: "Persistensi cart lintas sesi", en: "Cross-session cart persistence" }, 
        solution: { id: "State management dengan storage fallback dan hydrasi", en: "State management with storage fallbacks and hydration" } 
      }
    ],
    outcomes: [
      { id: "Konversi checkout meningkat 20%", en: "Checkout conversion increased by 20%" },
      { id: "Waktu pemesanan turun 30%", en: "Ordering time reduced by 30%" }
    ],
    technologies: {
      Frontend: ["React 18", "Redux Toolkit", "Material-UI", "Framer Motion"],
      Backend: ["Node.js", "Express", "MongoDB"],
      Payment: ["Stripe API", "PayPal Integration"],
      Tools: ["Git", "Docker", "AWS S3", "Cloudinary"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Menu+Display",
      "/placeholder.svg?height=300&width=500&text=Shopping+Cart",
      "/placeholder.svg?height=300&width=500&text=Checkout+Process",
      "/placeholder.svg?height=300&width=500&text=Order+Tracking",
    ],
    nextProject: "story-app",
    prevProject: "newyear-countdown",
  },
  "story-app": {
    title: "StoryApp",
    subtitle: { id: "Social Media Storytelling Platform", en: "Social Media Storytelling Platform" },
    description: { id: "Aplikasi Android untuk berbagi cerita dengan upload gambar, lokasi, dan timeline interaktif.", en: "Android app for sharing stories with image uploads, locations, and interactive timelines." },
    fullDescription: { id: "Aplikasi mobile social media yang fokus pada storytelling dengan fitur location sharing, image upload, dan interactive timeline menggunakan best practices Android development.", en: "A social media mobile app focused on storytelling, featuring location sharing, image uploads, and interactive timelines using Android development best practices." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Kotlin", "Android", "Social Media", "Location Services", "Camera API"],
    category: "Mobile Application",
    status: "Completed",
    year: "2023",
    duration: { id: "4 bulan", en: "4 months" },
    role: { id: "Android Developer", en: "Android Developer" },
    client: { id: "Personal Project", en: "Personal Project" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Menciptakan platform storytelling yang engaging", en: "Create an engaging storytelling platform" },
      { id: "Implementasi fitur location-based stories", en: "Implement location-based stories" },
      { id: "UX yang smooth di perangkat mobile", en: "Smooth UX on mobile devices" },
    ],
    features: [
      { id: "Story creation (text, image, location)", en: "Story creation (text, image, location)" },
      { id: "Interactive timeline dengan infinite scroll", en: "Interactive timeline with infinite scroll" },
      { id: "Location-based discovery", en: "Location-based discovery" },
      { id: "User profiles, reactions, dan comments", en: "User profiles, reactions, and comments" },
    ],
    challenges: [
      { 
        challenge: { id: "Privasi lokasi pengguna", en: "User location privacy" }, 
        solution: { id: "Izin granular dan kontrol sharing per cerita", en: "Granular permissions and per-story sharing controls" } 
      },
      { 
        challenge: { id: "Kinerja upload gambar", en: "Image upload performance" }, 
        solution: { id: "Compress di client dan upload resumable", en: "Client-side compression and resumable uploads" } 
      }
    ],
    outcomes: [
      { id: "Retensi pengguna meningkat 15%", en: "User retention increased by 15%" },
      { id: "Crash-free sessions > 99%", en: "Crash-free sessions > 99%" }
    ],
    technologies: {
      Mobile: ["Kotlin", "Android Jetpack", "Room Database", "Retrofit"],
      Backend: ["Firebase", "Cloud Firestore", "Cloud Storage"],
      Tools: ["Android Studio", "Git", "Figma", "Postman"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Story+Timeline",
      "/placeholder.svg?height=300&width=500&text=Create+Story",
      "/placeholder.svg?height=300&width=500&text=Location+Map",
      "/placeholder.svg?height=300&width=500&text=User+Profile",
    ],
    nextProject: "laundry-app-dirtless",
    prevProject: "sushi-webapp",
  },
  "laundry-app-dirtless": {
    title: "Laundry App - Dirtless",
    subtitle: { id: "Laundry Service Management System", en: "Laundry Service Management System" },
    description: { id: "Aplikasi manajemen laundry: tracking pesanan, notifikasi status, dan pembayaran terintegrasi.", en: "Laundry management app: order tracking, status notifications, and integrated payments." },
    fullDescription: { id: "Aplikasi web untuk layanan laundry end-to-end dari pemesanan hingga pengambilan, dengan tracking real-time dan payment integration.", en: "Web application for end-to-end laundry services from order placement to pickup, with real-time tracking and payment integration." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "Laundry", "MySQL", "Bootstrap"],
    category: "Web Application",
    status: "Completed",
    year: "2023",
    duration: { id: "3 bulan", en: "3 months" },
    role: { id: "Web Developer", en: "Web Developer" },
    client: { id: "Dirtless Laundry Service", en: "Dirtless Laundry Service" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Digitalisasi layanan laundry", en: "Digitizing laundry services" },
      { id: "Transparansi status pesanan", en: "Order status transparency" },
      { id: "Pembayaran online yang aman", en: "Secure online payments" },
    ],
    features: [
      { id: "Order placement & tracking", en: "Order placement & tracking" },
      { id: "Status updates & notifications", en: "Status updates & notifications" },
      { id: "Multiple payment methods", en: "Multiple payment methods" },
      { id: "Order history & receipts", en: "Order history & receipts" },
    ],
    challenges: [
      { 
        challenge: { id: "Rekonsiliasi status pesanan dan pembayaran", en: "Order status and payment reconciliation" }, 
        solution: { id: "Webhook status dan audit trail transaksi", en: "Status webhooks and transaction audit trails" } 
      },
      { 
        challenge: { id: "Notifikasi real-time multi-perangkat", en: "Real-time multi-device notifications" }, 
        solution: { id: "Channel notifikasi terpusat dengan fallback", en: "Centralized notification channels with fallbacks" } 
      }
    ],
    outcomes: [
      { id: "Waktu operasional berkurang 25%", en: "Operational time reduced by 25%" },
      { id: "Keluhan pelanggan turun 30%", en: "Customer complaints fell by 30%" }
    ],
    technologies: {
      Frontend: ["Bootstrap", "jQuery"],
      Backend: ["Laravel", "MySQL", "Redis"],
      Tools: ["Composer", "Git", "Postman"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Order+Placement",
      "/placeholder.svg?height=300&width=500&text=Order+Tracking",
      "/placeholder.svg?height=300&width=500&text=Payment+Options",
      "/placeholder.svg?height=300&width=500&text=Order+History",
    ],
    nextProject: "smart-clinic-ui",
    prevProject: "story-app",
  },
  "smart-clinic-ui": {
    title: "Smart Clinic UI",
    subtitle: { id: "Healthcare Interface Design System", en: "Healthcare Interface Design System" },
    description: { id: "Interface klinik pintar dengan desain modern dan UX optimal untuk tenaga medis.", en: "Smart clinic interface with modern design and optimal UX for medical personnel." },
    fullDescription: { id: "Antarmuka pengguna untuk klinik modern dengan fokus pada efisiensi workflow tenaga medis dan patient experience. UI/UX clean dan intuitive untuk operasional klinik optimal.", en: "User interface for a modern clinic focused on the efficiency of medical workflows and patient experience. Clean and intuitive UI/UX for optimal clinic operations." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Healthcare UI", "Medical System", "UX Design", "Design System"],
    category: "Web Application",
    status: "Completed",
    year: "2023",
    duration: { id: "4 bulan", en: "4 months" },
    role: { id: "UI/UX Developer", en: "UI/UX Developer" },
    client: { id: "Smart Clinic Indonesia", en: "Smart Clinic Indonesia" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Efisiensi workflow tenaga medis", en: "Medical workflow efficiency" },
      { id: "Interface user-friendly untuk staff", en: "User-friendly interface for staff" },
      { id: "Design system yang konsisten", en: "Consistent design system" },
    ],
    features: [
      { id: "Dashboard dokter & staff", en: "Doctor & staff dashboard" },
      { id: "Patient management & medical records", en: "Patient management & medical records" },
      { id: "Appointment scheduling & calendar", en: "Appointment scheduling & calendar" },
      { id: "Prescription interface & drug database", en: "Prescription interface & drug database" },
    ],
    challenges: [
      { 
        challenge: { id: "Kompleksitas workflow medis", en: "Complexity of medical workflows" }, 
        solution: { id: "User flow terstruktur dan komponen reusable", en: "Structured user flows and reusable components" } 
      },
      { 
        challenge: { id: "Aksesibilitas untuk tenaga medis", en: "Accessibility for medical staff" }, 
        solution: { id: "Kontras tinggi, navigasi keyboard, dan komponen teruji", en: "High contrast, keyboard navigation, and tested components" } 
      }
    ],
    outcomes: [
      { id: "Waktu input data pasien berkurang 35%", en: "Patient data input time reduced by 35%" },
      { id: "Kepuasan pengguna meningkat berdasarkan feedback internal", en: "Increased user satisfaction based on internal feedback" }
    ],
    technologies: {
      Frontend: ["React 18", "TypeScript", "Ant Design", "Styled Components"],
      "State Management": ["Redux Toolkit", "RTK Query"],
      Tools: ["Storybook", "Figma", "Git", "Jest"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Doctor+Dashboard",
      "/placeholder.svg?height=300&width=500&text=Patient+Records",
      "/placeholder.svg?height=300&width=500&text=Appointment+Calendar",
      "/placeholder.svg?height=300&width=500&text=Prescription+Interface",
    ],
    nextProject: "siacta",
    prevProject: "laundry-app-dirtless",
  },
  "sibi-app-ui-ux": {
    title: "SIBI App UI/UX",
    subtitle: { id: "Sistem Informasi Perbukuan Indonesia", en: "Indonesian Book Information System" },
    description: { id: "Desain UI/UX Sistem Informasi Perbukuan Indonesia dengan fokus aksesibilitas dan pengalaman membaca digital.", en: "UI/UX design of the Indonesian Book Information System focusing on accessibility and digital reading experience." },
    fullDescription: { id: "Desain untuk perpustakaan buku digital berisi buku teks pelajaran sekolah dalam format PDF, Audio, dan Interaktif, produksi resmi Pusat Perbukuan untuk mendukung kegiatan belajar.", en: "Design for a digital book library containing school textbooks in PDF, Audio, and Interactive formats, officially produced by the Book Center to support learning activities." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["UI/UX Design", "Figma", "User Research", "Prototyping", "Accessibility"],
    category: "Design",
    status: "Completed",
    year: "2025",
    duration: { id: "3 bulan", en: "3 months" },
    role: { id: "UI/UX Designer", en: "UI/UX Designer" },
    client: { id: "Kemendikdasmen", en: "Ministry of Basic and Secondary Education" },
    liveUrl: "",
    repoUrl: "",
    goals: [
      { id: "Antarmuka inklusif dan aksesibel", en: "Inclusive and accessible interfaces" },
      { id: "Pengalaman membaca digital yang intuitif", en: "Intuitive digital reading experience" },
      { id: "Sistem desain konsisten dan skalabel", en: "Consistent and scalable design system" },
    ],
    features: [
      { id: "Dashboard pembelajaran personal", en: "Personalized learning dashboard" },
      { id: "Pembaca PDF dengan anotasi", en: "PDF reader with annotations" },
      { id: "Buku audio dengan kontrol kecepatan", en: "Audiobooks with speed controls" },
      { id: "Buku interaktif dengan elemen multimedia", en: "Interactive books with multimedia elements" },
    ],
    challenges: [
      { 
        challenge: { id: "Aksesibilitas lintas perangkat", en: "Cross-device accessibility" }, 
        solution: { id: "Pedoman WCAG dan pengujian dengan screen reader", en: "WCAG guidelines and screen reader testing" } 
      },
      { 
        challenge: { id: "Konsistensi desain skala besar", en: "Large-scale design consistency" }, 
        solution: { id: "Design system terpusat dan token desain", en: "Centralized design system and design tokens" } 
      }
    ],
    outcomes: [
      { id: "Adopsi pengguna meningkat di perangkat low-end", en: "Increased user adoption on low-end devices" },
      { id: "Waktu membaca meningkat berkat UX yang nyaman", en: "Reading time increased due to comfortable UX" }
    ],
    technologies: {
      Design: ["Figma", "Adobe XD", "Principle", "Lottie"],
      Research: ["User Interviews", "Usability Testing", "A/B Testing"],
      Prototyping: ["Interactive Prototypes", "Animation", "Micro-interactions"],
      Accessibility: ["WCAG Guidelines", "Screen Reader Support", "Inclusive Design"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Library+Dashboard",
      "/placeholder.svg?height=300&width=500&text=PDF+Reader",
      "/placeholder.svg?height=300&width=500&text=Audio+Book+Player",
      "/placeholder.svg?height=300&width=500&text=Interactive+Book",
    ],
    testimonial: {
      quote: { id: "Desain SIBI sangat inklusif dan efektif untuk mendukung pembelajaran digital.", en: "The SIBI design is very inclusive and effective in supporting digital learning." },
      author: "Dewi Suryana",
      position: { id: "Kepala Pusat Perbukuan Kemendikdasmen", en: "Head of Book Center, Ministry of Education" },
    },
    nextProject: "lavafa-co",
    prevProject: "smart-clinic-ui",
  },
  "lavafa-co": {
    title: "LavaFa.co",
    subtitle: { id: "Creative Agency Landing Page", en: "Creative Agency Landing Page" },
    description: { id: "Landing page agensi kreatif yang menyediakan jasa pengembangan website, aplikasi mobile, dan desain UI/UX oleh developer berpengalaman 5+ tahun.", en: "Creative agency landing page providing website development, mobile app, and UI/UX design services by developers with 5+ years of experience." },
    fullDescription: { id: "Platform landing page untuk agensi kreatif yang menghadirkan solusi digital komprehensif: pengembangan website modern, aplikasi mobile native, serta desain UI/UX yang dikembangkan oleh tim developer berpengalaman lebih dari 5 tahun di industri digital.", en: "A landing page platform for a creative agency offering comprehensive digital solutions: modern website development, native mobile apps, and UI/UX design developed by a team of developers with over 5 years of experience in the digital industry." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["React", "Next.js", "TypeScript", "Creative Agency", "Landing Page"],
    category: "Landing Page",
    status: "Completed",
    year: "2025",
    duration: { id: "1 bulan", en: "1 month" },
    role: { id: "Lead Frontend Developer", en: "Lead Frontend Developer" },
    client: { id: "LavaFa Digital Solutions", en: "LavaFa Digital Solutions" },
    liveUrl: "https://lavafa.co",
    repoUrl: "",
    goals: [
      { id: "Menampilkan portofolio jasa digital secara elegan", en: "Elegantly display the digital service portfolio" },
      { id: "Konversi pengunjung menjadi klien potensial", en: "Convert visitors into potential clients" },
      { id: "Performa cepat dan SEO-friendly", en: "Fast performance and SEO-friendly" },
    ],
    features: [
      { id: "Hero section dengan animasi interaktif", en: "Hero section with interactive animations" },
      { id: "Section portofolio proyek", en: "Project portfolio section" },
      { id: "Testimoni klien", en: "Client testimonials" },
      { id: "Form kontak dan konsultasi", en: "Contact and consultation form" },
    ],
    challenges: [
      { 
        challenge: { id: "Performa halaman kaya animasi", en: "Performance of an animation-rich page" }, 
        solution: { id: "Optimasi animasi dan code-splitting komponen berat", en: "Animation optimization and code-splitting for heavy components" } 
      },
      { 
        challenge: { id: "SEO untuk jasa berbasis layanan", en: "SEO for service-based offerings" }, 
        solution: { id: "Schema markup dan konten terstruktur", en: "Schema markup and structured content" } 
      }
    ],
    outcomes: [
      { id: "Leads inbound meningkat 25%", en: "Inbound leads increased by 25%" },
      { id: "Skor Lighthouse 95+ pada Performance dan SEO", en: "Lighthouse score of 95+ for Performance and SEO" }
    ],
    technologies: {
      Frontend: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      Backend: ["Node.js", "Express", "PostgreSQL"],
      DevOps: ["Vercel", "AWS S3"],
      Tools: ["Git", "Figma", "Lighthouse"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Hero+Section",
      "/placeholder.svg?height=300&width=500&text=Services+Section",
      "/placeholder.svg?height=300&width=500&text=Portfolio+Gallery",
      "/placeholder.svg?height=300&width=500&text=Contact+Form",
    ],
    testimonial: {
      quote: { id: "Tim LavaFa membantu kami mendapatkan klien baru melalui landing page yang elegan dan cepat.", en: "The LavaFa team helped us acquire new clients through an elegant and fast landing page." },
      author: "Rini Pratiwi",
      position: { id: "CEO, Digital Ventures Indonesia", en: "CEO, Digital Ventures Indonesia" },
    },
    nextProject: "laravel-mastery",
    prevProject: "sibi-app-ui-ux",
  },
  "laravel-mastery": {
    title: "Laravel Mastery",
    subtitle: { id: "E-Book Belajar Laravel untuk Pemula", en: "Laravel Learning E-Book for Beginners" },
    description: { id: "E-Book praktis belajar Laravel dari nol hingga mahir, cocok untuk pemula yang ingin memulai pengembangan web modern.", en: "A practical e-book for learning Laravel from scratch to mastery, perfect for beginners wanting to start modern web development." },
    fullDescription: { id: "Panduan lengkap Laravel dengan penjelasan sederhana, contoh kode, dan studi kasus nyata untuk membangun aplikasi web profesional dari awal.", en: "A comprehensive Laravel guide with simple explanations, code examples, and real-world case studies to build a professional web application from scratch." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Laravel", "PHP", "E-Book", "Pemula", "Belajar"],
    category: "Landing Page",
    status: "Completed",
    year: "2025",
    duration: { id: "1 minggu", en: "1 week" },
    role: { id: "Full-Stack Developer & Content Creator", en: "Full-Stack Developer & Content Creator" },
    client: { id: "Self-initiated Project", en: "Self-initiated Project" },
    liveUrl: "",
    repoUrl: "https://github.com/adityafakhrii/laravel-mastery-ebook",
    goals: [
      { id: "Menyediakan materi Laravel yang mudah dipahami pemula", en: "Provide easily understandable Laravel materials for beginners" },
      { id: "Meningkatkan minat belajar pengembangan web", en: "Increase interest in learning web development" },
      { id: "Menyediakan panduan praktis dengan studi kasus", en: "Provide practical guides with case studies" },
    ],
    features: [
      { id: "Penjelasan konsep Laravel dari dasar", en: "Explanation of basic Laravel concepts" },
      { id: "Contoh kode lengkap dan runnable", en: "Complete and runnable code examples" },
      { id: "Studi kasus membangun aplikasi nyata", en: "Case study of building a real application" },
      { id: "Tips dan trik pengembangan Laravel", en: "Laravel development tips and tricks" },
      { id: "Panduan instalasi dan konfigurasi", en: "Installation and configuration guide" },
      { id: "Update konten secara berkala", en: "Regular content updates" },
    ],
    challenges: [
      { 
        challenge: { id: "Menyusun materi yang ramah pemula", en: "Arranging beginner-friendly material" }, 
        solution: { id: "Progressive learning path dan contoh kode langkah demi langkah", en: "Progressive learning path and step-by-step code examples" } 
      },
      { 
        challenge: { id: "Menjaga konten tetap relevan", en: "Keeping content relevant" }, 
        solution: { id: "Update berkala mengikuti rilis Laravel terbaru", en: "Regular updates following the latest Laravel releases" } 
      }
    ],
    outcomes: [
      { id: "Ratusan unduhan dalam bulan pertama", en: "Hundreds of downloads in the first month" },
      { id: "Umpan balik positif dari komunitas pemula", en: "Positive feedback from the beginner community" }
    ],
    technologies: {
      Backend: ["Laravel 11", "PHP 8.3"],
      Frontend: ["Blade", "Tailwind CSS"],
      Tools: ["Markdown", "GitHub Pages", "Vite"],
    },
    gallery: [
      "/placeholder.svg?height=300&width=500&text=Cover+E-Book",
      "/placeholder.svg?height=300&width=500&text=Daftar+Isi",
      "/placeholder.svg?height=300&width=500&text=Contoh+Kode",
      "/placeholder.svg?height=300&width=500&text=Studi+Kasus",
    ],
    testimonial: {
      quote: { id: "E-Book ini sangat membantu saya memahami Laravel dengan mudah dan cepat.", en: "This E-Book really helped me understand Laravel easily and quickly." },
      author: "Siti Nurhaliza",
      position: { id: "Mahasiswa Teknik Informatika", en: "Informatics Engineering Student" },
    },
    nextProject: "sibi-app-ui-ux",
    prevProject: "lavafa-co",
  },
  "gambaryuk": {
    title: "GambarYuk",
    subtitle: { id: "Modern Image Processing Tool", en: "Modern Image Processing Tool" },
    description: { id: "Alat pengolahan gambar modern dengan fitur manipulasi gambar berbasis web.", en: "Modern image processing tool with web-based image manipulation features." },
    fullDescription: { id: "GambarYuk adalah aplikasi web untuk mengolah gambar secara instan, mulai dari resize, crop, hingga filter canggih.", en: "GambarYuk is a web application for instant image processing, ranging from resizing and cropping to advanced filters." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Canvas API", "Image Processing"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    liveUrl: "https://gambaryuk.adityafakhri.com/",
    repoUrl: "https://github.com/adityafakhrii/gambaryuk",
    technologies: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      Processing: ["Canvas API", "Sharp"],
    },
  },
  "invoiceyuk": {
    title: "InvoiceYuk",
    subtitle: { id: "Simple Invoicing for Freelancers", en: "Simple Invoicing for Freelancers" },
    description: { id: "Solusi pembuatan invoice cepat dan profesional untuk freelancer dan UMKM.", en: "Fast and professional invoice creation solution for freelancers and SMEs." },
    fullDescription: { id: "InvoiceYuk memudahkan proses billing dengan template profesional dan tracking status pembayaran.", en: "InvoiceYuk simplifies the billing process with professional templates and payment status tracking." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    liveUrl: "https://invoiceyuk.vercel.app/",
    repoUrl: "https://github.com/adityafakhrii/invoiceyuk",
    technologies: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Prisma", "PostgreSQL"],
    },
  },
  "sahur-buka-ai-chef": {
    title: "Sahur Buka AI Chef",
    subtitle: { id: "AI-Powered Ramadan Meal Planner", en: "AI-Powered Ramadan Meal Planner" },
    description: { id: "Asisten AI untuk merekomendasikan menu sahur dan buka puasa berdasarkan bahan yang ada.", en: "AI assistant to recommend suhoor and iftar menus based on available ingredients." },
    fullDescription: { id: "Membantu umat Muslim merencanakan menu makan selama bulan Ramadan dengan bantuan kecerdasan buatan.", en: "Helping Muslims plan their meals during Ramadan with the help of artificial intelligence." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "OpenAI", "Ramadan"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    technologies: {
      Frontend: ["Next.js", "TypeScript"],
      AI: ["OpenAI API", "GPT-4o"],
    },
  },
  "ruangai-prompt-hub": {
    title: "RuangAI Prompt Hub",
    subtitle: { id: "Curated AI Prompts Marketplace", en: "Curated AI Prompts Marketplace" },
    description: { id: "Platform untuk berbagi dan menemukan prompt AI terbaik untuk berbagai kebutuhan.", en: "A platform for sharing and discovering the best AI prompts for various needs." },
    fullDescription: { id: "RuangAI Prompt Hub adalah komunitas untuk para AI enthusiast dalam mengoptimalkan penggunaan LLM.", en: "RuangAI Prompt Hub is a community for AI enthusiasts to optimize their LLM usage." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "AI Prompts", "Community"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    liveUrl: "https://prompt.ruangai.id/",
    repoUrl: "https://github.com/adityafakhrii/ruangai-prompt-hub",
    technologies: {
      Frontend: ["Next.js", "TypeScript", "Tailwind CSS"],
      Backend: ["Firebase"],
    },
  },
  "dompetyuk": {
    title: "DompetYuk",
    subtitle: { id: "Personal Finance Tracker", en: "Personal Finance Tracker" },
    description: { id: "Aplikasi pencatatan keuangan pribadi yang simpel dan efektif.", en: "A simple and effective personal finance tracking app." },
    fullDescription: { id: "DompetYuk membantu Anda melacak pengeluaran dan pemasukan harian dengan grafik yang mudah dipahami.", en: "DompetYuk helps you track daily income and expenses with easy-to-understand charts." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "React", "State Management", "Finance"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    technologies: {
      Frontend: ["React", "TypeScript", "Zustand"],
      Backend: ["Supabase"],
    },
  },
  "vibe-code-landing": {
    title: "Vibe Code Landing",
    subtitle: { id: "High-Performance Agency Landing Page", en: "High-Performance Agency Landing Page" },
    description: { id: "Landing page modern dengan desain 'vibe' yang kuat untuk agensi digital.", en: "A modern landing page with a strong 'vibe' design for a digital agency." },
    fullDescription: { id: "Landing page dengan animasi halus dan fokus pada estetika serta konversi.", en: "A landing page with smooth animations, focusing on aesthetics and conversions." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Framer Motion", "UI/UX"],
    category: "Landing Page",
    status: "Production",
    year: "2026",
    role: { id: "Frontend Developer", en: "Frontend Developer" },
    technologies: {
      Frontend: ["Next.js", "Framer Motion", "Tailwind CSS"],
    },
  },
  "thrkaget": {
    title: "THR Kaget",
    subtitle: { id: "Viral Seasonal App", en: "Viral Seasonal App" },
    description: { id: "Aplikasi viral untuk bagi-bagi THR dengan cara yang seru dan interaktif.", en: "A viral app for distributing Eid money (THR) in a fun and interactive way." },
    fullDescription: { id: "THR Kaget adalah platform yang memungkinkan pengguna untuk membuat link bagi-bagi THR secara digital dengan elemen gamifikasi yang menarik.", en: "THR Kaget is a platform allowing users to create digital links for distributing Eid money (THR) with engaging gamification elements." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Realtime", "Gamification"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    repoUrl: "https://github.com/adityafakhrii/thrkaget",
    technologies: {
      Frontend: ["Next.js", "Tailwind CSS", "Framer Motion"],
      Backend: ["Firebase", "Cloud Functions"],
    },
  },
  "falaah-your-spiritual-guide": {
    title: "Falaah",
    subtitle: { id: "AI Spiritual Guide", en: "AI Spiritual Guide" },
    description: { id: "Asisten spiritual berbasis AI yang membantu menjawab pertanyaan seputar agama dengan referensi terpercaya.", en: "An AI-based spiritual assistant that helps answer religious questions with reliable references." },
    fullDescription: { id: "Falaah menggunakan LLM yang dikhususkan untuk menjawab pertanyaan spiritual dan keagamaan dengan pendekatan yang modern dan relevan.", en: "Falaah uses a specialized LLM to answer spiritual and religious questions with a modern and relevant approach." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "AI", "LLM", "Religious Tech"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    technologies: {
      Frontend: ["Next.js", "TypeScript"],
      AI: ["OpenAI", "LangChain"],
    },
  },
  "ai-task-master": {
    title: "AI Task Master",
    subtitle: { id: "Smart Productivity Tool", en: "Smart Productivity Tool" },
    description: { id: "Sistem manajemen tugas otomatis yang menggunakan AI untuk prioritas dan estimasi waktu.", en: "An automated task management system using AI for prioritization and time estimation." },
    fullDescription: { id: "AI Task Master membantu tim mengelola workflow mereka dengan fitur cerdas yang menyarankan urutan pengerjaan tugas berdasarkan urgensi dan kapasitas.", en: "AI Task Master helps teams manage their workflow with smart features that suggest task execution order based on urgency and capacity." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "AI", "Productivity"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    repoUrl: "https://github.com/adityafakhrii/ai-task-master",
    technologies: {
      Frontend: ["Next.js", "Tailwind CSS"],
      AI: ["GPT-4o API"],
      Backend: ["PostgreSQL", "Prisma"],
    },
  },
  "yukaccess": {
    title: "YukAccess",
    subtitle: { id: "All in One SaaS Tools", en: "All in One SaaS Tools" },
    description: { id: "Aplikasi yang menyediakan semua tools SaaS dalam satu platform", en: "An application providing all SaaS tools in a single platform." },
    fullDescription: { id: "YukAccess menyediakan berbagai tools SaaS untuk memudahkan pekerjaan digital.", en: "YukAccess provides various SaaS tools to simplify digital work." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "SaaS", "Auth", "IAM"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    technologies: {
      Frontend: ["React", "TypeScript"],
      Backend: ["Node.js", "Auth0", "Redis"],
    },
  },
  "warung-go-digital-pos": {
    title: "Warung Go Digital POS",
    subtitle: { id: "Smart POS for UMKM", en: "Smart POS for UMKM" },
    description: { id: "Sistem kasir pintar untuk membantu warung dan UMKM beralih ke transaksi digital.", en: "A smart POS system to help local shops and SMEs transition to digital transactions." },
    fullDescription: { id: "Aplikasi POS yang ringan namun powerful, mendukung pembayaran digital, manajemen stok, dan laporan keuangan harian secara otomatis.", en: "A lightweight yet powerful POS app supporting digital payments, inventory management, and automated daily financial reporting." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "FinTech", "POS", "UMKM"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Lead Developer", en: "Lead Developer" },
    technologies: {
      Frontend: ["Next.js", "Tailwind CSS"],
      Backend: ["Firebase", "Midtrans Payment"],
    },
  },
  "umkm-insight-ai": {
    title: "UMKM Insight AI",
    subtitle: { id: "AI Analytics for Small Businesses", en: "AI Analytics for Small Businesses" },
    description: { id: "Platform analitik bisnis yang memberikan saran strategi berdasarkan data penjualan menggunakan AI.", en: "A business analytics platform providing AI-based strategic advice from sales data." },
    fullDescription: { id: "Membantu pengusaha kecil memahami tren pasar dan perilaku pelanggan melalui visualisasi data dan insight cerdas dari model AI.", en: "Helps small business owners understand market trends and customer behavior through data visualization and smart insights from AI models." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "AI", "Business Intelligence", "Analytics"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Data & AI Engineer", en: "Data & AI Engineer" },
    technologies: {
      Frontend: ["Next.js", "Chart.js"],
      AI: ["OpenAI API", "Python (Data Processing)"],
      Backend: ["Supabase"],
    },
  },
  "kfs-course-agent": {
    title: "KFS Course Agent",
    subtitle: { id: "AI Learning Assistant", en: "AI Learning Assistant" },
    description: { id: "Asisten pembelajaran otomatis untuk membantu siswa dalam kursus online memahami materi lebih cepat.", en: "An automated learning assistant to help online course students grasp material faster." },
    fullDescription: { id: "Course Agent ini mampu menjawab pertanyaan spesifik tentang kurikulum, memberikan ringkasan materi, dan membuat kuis latihan otomatis.", en: "This Course Agent can answer curriculum-specific questions, provide material summaries, and generate automated practice quizzes." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["Python", "AI", "EdTech", "Automation"],
    category: "Web Application",
    status: "Production",
    year: "2025",
    role: { id: "Backend & AI Developer", en: "Backend & AI Developer" },
    repoUrl: "https://github.com/adityafakhrii/kfs_course_agent",
    technologies: {
      Backend: ["Python", "FastAPI"],
      AI: ["LangChain", "OpenAI"],
      Tools: ["Docker"],
    },
  },
  "careermate": {
    title: "CareerMate",
    subtitle: { id: "AI Career Coaching Platform", en: "AI Career Coaching Platform" },
    description: { id: "Platform bimbingan karir yang membantu optimasi CV dan persiapan interview berbasis AI.", en: "A career coaching platform assisting with CV optimization and AI-based interview preparation." },
    fullDescription: { id: "CareerMate menggunakan teknologi AI untuk memberikan feedback instan pada CV pengguna dan mensimulasikan sesi interview teknis.", en: "CareerMate uses AI technology to provide instant feedback on user CVs and simulate technical interview sessions." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "AI", "HR Tech", "Next.js"],
    category: "Web Application",
    status: "Production",
    year: "2025",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    repoUrl: "https://github.com/adityafakhrii/careermate",
    technologies: {
      Frontend: ["Next.js", "Tailwind CSS"],
      AI: ["GPT-4 Vision", "Whisper API"],
    },
  },
  "ruangai-event": {
    title: "RuangAI Event Management",
    subtitle: { id: "Enterprise Event Solution", en: "Enterprise Event Solution" },
    description: { id: "Sistem manajemen event terpadu untuk skala besar dengan fitur ticketing dan manajemen peserta.", en: "An integrated large-scale event management system featuring ticketing and attendee management." },
    fullDescription: { id: "RuangAI Event mempermudah penyelenggara mengelola pendaftaran, absensi berbasis QR, dan distribusi sertifikat secara otomatis.", en: "RuangAI Event simplifies registration management, QR-based attendance, and automated certificate distribution for organizers." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Next.js", "Event Management", "Enterprise"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    technologies: {
      Frontend: ["Next.js", "TypeScript"],
      Backend: ["Supabase", "Resend (Email)"],
    },
  },
  "kas-harian-kantor": {
    title: "Kas Harian Kantor",
    subtitle: { id: "Internal Cash Tracking System", en: "Internal Cash Tracking System" },
    description: { id: "Aplikasi internal untuk mengelola dan melacak arus kas kecil di lingkungan kantor.", en: "An internal app to manage and track petty cash flow in an office environment." },
    fullDescription: { id: "Sistem ini membantu tim operasional mencatat pengeluaran rutin kantor dengan transparansi tinggi dan sistem approval berjenjang.", en: "This system helps the operations team record routine office expenses with high transparency and a tiered approval system." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "Finance", "Internal Tool", "ERP"],
    category: "Web Application",
    status: "Production",
    year: "2026",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    technologies: {
      Frontend: ["React", "TypeScript"],
      Backend: ["Node.js", "PostgreSQL"],
    },
  },
  "resepsi-tamu-digital": {
    title: "Resepsi Tamu Digital",
    subtitle: { id: "Modern Guest Management", en: "Modern Guest Management" },
    description: { id: "Solusi digital untuk menggantikan buku tamu konvensional dengan sistem QR code.", en: "A digital solution replacing conventional guestbooks with a QR code system." },
    fullDescription: { id: "Resepsi Tamu Digital memberikan pengalaman check-in yang elegan bagi tamu undangan di acara formal maupun kantor.", en: "Resepsi Tamu Digital offers an elegant check-in experience for invited guests at formal events or offices." },
    imageSrc: "/placeholder.svg?height=400&width=800",
    tags: ["TypeScript", "QR Code", "Guest Management"],
    category: "Web Application",
    status: "Production",
    year: "2025",
    role: { id: "Full-Stack Developer", en: "Full-Stack Developer" },
    repoUrl: "https://github.com/adityafakhrii/resepsi-tamu-digital",
    technologies: {
      Frontend: ["Next.js", "TypeScript"],
      Backend: ["Firebase"],
    },
  },
} satisfies Record<string, ProjectItem>

export type ProjectId = keyof typeof projects
export default projects