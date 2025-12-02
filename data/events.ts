export type EventItem = {
  id: string
  category: string
  tags: string[]
  imageSrc: string
  imageClassName?: string
  priority?: boolean
  title: { id: string; en: string }
  subtitle?: { id: string; en: string }
  date: string
  time?: string
  location: string
  description?: { id: string; en: string }
  bullets?: { id: string[]; en: string[] }
  links?: { labelId: string; labelEn: string; href: string }[]
  organizer?: { id: string; en: string }
}

export const upcomingEvents: EventItem[] = [
  {
    id: "corner-talkshow-pakuan-2025",
    category: "Talkshow",
    tags: ["AI", "Prompt Engineering", "Productivity"],
    imageSrc: "/speaking/cornettalkshow-unpak-2025.webp",
    title: {
      id: "From Prompt to Productive Code",
      en: "From Prompt to Productive Code",
    },
    subtitle: {
      id: "Jadikan Prompt sebagai Solusi Nyata",
      en: "Turn Prompts into Real Solutions",
    },
    date: "06 Desember 2025",
    time: "08.00 - 14.00 WIB",
    location: "Universitas Pakuan, Bogor",
    description: {
      id: "Sesi talkshow praktis tentang pemanfaatan AI dan prompt engineering untuk meningkatkan produktivitas pengembangan perangkat lunak.",
      en: "Practical talkshow on leveraging AI and prompt engineering to boost software development productivity.",
    },
    bullets: {
      id: [
        "AI untuk coding, debugging, dan analisis sistem",
        "Skill penting agar relevan & adaptif",
        "Etika & regulasi AI untuk developer",
        "Tips produktif belajar teknologi baru",
      ],
      en: [
        "AI for coding, debugging & system analysis",
        "Key skills to stay relevant & adaptable",
        "AI ethics & regulations for developers",
        "Tips for productive tech learning",
      ],
    },
    organizer: { id: "Diselenggarakan oleh: Corner Talkshow", en: "Organized by: Corner Talkshow" },
    links: [
      { labelId: "Daftar Gratis", labelEn: "Free Registration", href: "https://unpak.link/cts2025" },
    ],
  },
]

export const pastEvents: EventItem[] = [
  {
    id: "it-fest-uho-2025",
    category: "Seminar",
    tags: ["AI", "Mindset", "Career Development"],
    imageSrc: "/speaking/it-fest-uho-2025.webp",
    title: {
      id: "Skills, Mindset, dan AI untuk Masa Depan",
      en: "Skills, Mindset, and AI for the Future",
    },
    subtitle: {
      id: "IT Fest 18 UHO",
      en: "IT Fest 18 UHO",
    },
    date: "29 November 2025",
    time: "08.00-12.00 WITA",
    location: "Kendari, Sulawesi Tenggara",
    description: {
      id: "Sesi ini membahas transformasi AI, skill & mindset era digital, serta masa depan & etika AI.",
      en: "This session will cover AI transformation, digital era skills & mindset, and the future & ethics of AI.",
    },
    bullets: {
      id: [
        "Apa itu AI, jenisnya, dan contoh penerapan di berbagai bidang",
        "Dampak AI terhadap cara kerja dan peluang karier",
        "Skill kunci: literasi digital, data mindset, critical thinking, kreativitas",
        "Pentingnya lifelong learning",
        "Penggunaan AI yang beretika",
        "Peran generasi muda dalam inovasi dan solusi berkelanjutan",
      ],
      en: [
        "What AI is, its types, and application examples across various fields",
        "Impact of AI on work methods and career opportunities",
        "Key skills: digital literacy, data mindset, critical thinking, creativity",
        "The importance of lifelong learning",
        "Ethical use of AI",
        "The role of the younger generation in innovation and sustainable solutions",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: IT Fest 18 UHO",
      en: "Organized by: IT Fest 18 UHO",
    },
    links: [
      {
        labelId: "Lihat Materi",
        labelEn: "View Materials",
        href: "https://docs.google.com/presentation/d/1_D1U2UpX3d0hsDFUmXXs1z6Vd8bO-OR3Kh-wyCyolBk/edit?usp=sharing",
      },
    ],
  },
  {
    id: "qwords-digital-sprint",
    category: "Workshop",
    tags: ["Personal Branding", "Career Development"],
    imageSrc: "/speaking/qwords.webp",
    imageClassName: "object-contain bg-white",
    title: {
      id: "Belajar Bikin Website 10 Hari, Langsung Siap Terima Project!",
      en: "Learn to Build Websites in 10 Days, Ready to Accept Projects!",
    },
    subtitle: { id: "Qwords Digital Sprint", en: "Qwords Digital Sprint" },
    date: "25 Juli 2025",
    time: "19.00-21.00 WIB",
    location: "Zoom Meeting",
    description: {
      id: "Sesi khusus membahas tentang pengembangan karir sebagai developer, meliputi:",
      en: "Special session discussing career development as a developer, including:",
    },
    bullets: {
      id: [
        "Membangun personal branding dan portofolio yang menarik",
        "Teknik pitching efektif untuk HRD dan klien",
        "Membangun mindset kolaboratif dalam tim development",
      ],
      en: [
        "Building personal branding and an attractive portfolio",
        "Effective pitching techniques for HR and clients",
        "Building collaborative mindset in development teams",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: Qwords Cloud Web Hosting Indonesia",
      en: "Organized by: Qwords Cloud Web Hosting Indonesia",
    },
    links: [
      { labelId: "Daftar Sekarang", labelEn: "Register Now", href: "https://s.id/qdswebdev" },
    ],
  },
  {
    id: "upi-laravel-12",
    category: "Workshop",
    tags: ["Laravel 12", "Web Development"],
    imageSrc: "/speaking/upilaravel.webp",
    imageClassName: "object-contain bg-white",
    priority: true,
    title: {
      id: "Membuat Aplikasi Web Sederhana dengan Laravel 12",
      en: "Building Simple Web Applications with Laravel 12",
    },
    subtitle: {
      id: "Pelatihan Laravel 12 untuk Pemula + Studi Kasus",
      en: "Laravel 12 Training for Beginners + Case Study",
    },
    date: "04 Juni 2025",
    location: "Universitas Pendidikan Indonesia, Bandung",
    description: {
      id: "Pelatihan intensif untuk pemula yang ingin mempelajari dasar-dasar Laravel 12. Peserta akan mempraktikkan pembuatan aplikasi web sederhana melalui studi kasus nyata, mulai dari instalasi hingga deployment.",
      en: "Intensive training for beginners who want to learn the basics of Laravel 12. Participants will practice building simple web applications through real case studies, from installation to deployment.",
    },
    organizer: {
      id: "Diselenggarakan oleh: Himpunan Mahasiswa Ilmu Komputer UPI",
      en: "Organized by: Computer Science Student Association UPI",
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "#" },
    ],
  },
  {
    id: "instagram-kf",
    category: "Workshop",
    tags: ["Fullstack", "Tailwind CSS"],
    imageSrc: "/speaking/instagram-KF.webp",
    title: {
      id: "Styling Website Dengan Tailwind dari Nol",
      en: "Styling Websites With Tailwind from Scratch",
    },
    subtitle: { id: "Kelas Fullstack Live Class", en: "Fullstack Live Class" },
    date: "Jumat, 16 Mei 2025",
    location: "Zoom Meeting",
    description: {
      id: "Workshop interaktif membahas dasar-dasar penggunaan Tailwind CSS untuk styling website modern. Peserta akan belajar mulai dari instalasi, konsep utility-first, hingga praktik membangun tampilan responsif secara langsung.",
      en: "Interactive workshop covering the basics of using Tailwind CSS for modern website styling. Participants will learn from installation, utility-first concepts, to hands-on practice building responsive layouts.",
    },
    links: [
      { labelId: "Join Kelas Fullstack", labelEn: "Join Fullstack Class", href: "https://pay.codepolitan.com/?slug=program-fullstack-web-development-lifetime&coupon=ADITYAFAKHRI" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://www.codepolitan.com/course/intro/tailwind-dasar-desain-web-kilat-jaman-sekarang/" },
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1nGqXbBuwlhv9QoQYRzyEyz4wBaRWhOcxdYu-Kfr4p1k/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: CODEPOLITAN", en: "Organized by: CODEPOLITAN" },
  },
  {
    id: "chayon-masterclass",
    category: "Masterclass",
    tags: ["Roadmap", "Career"],
    imageSrc: "/speaking/chayon.webp",
    title: {
      id: "Roadmap Menjadi Programmer Profesional: Dari Nol Sampai Pro",
      en: "Professional Programmer Roadmap: From Zero to Pro",
    },
    subtitle: { id: "Chayon Masterclass", en: "Chayon Masterclass" },
    date: "03 Mei 2025",
    location: "Zoom Meeting",
    description: {
      id: "Sesi masterclass membahas langkah-langkah praktis dan roadmap lengkap untuk menjadi programmer profesional, mulai dari dasar hingga siap kerja di industri. Cocok untuk pemula maupun yang ingin memperkuat fondasi karier di bidang teknologi.",
      en: "Masterclass session discussing practical steps and complete roadmap to become a professional programmer, from basics to industry-ready. Suitable for beginners and those looking to strengthen their career foundation in technology.",
    },
    links: [
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/7TAWMT56fxA?si=6nbY-4FbdskktfcV" },
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1tbQUYvYjsHN5Sl7NyPcjjBTnY4NZjYat3yasWCuw29o/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: Chayon Online Course", en: "Organized by: Chayon Online Course" },
  },
  {
    id: "aico-webinar",
    category: "Webinar",
    tags: ["AI", "Web Development"],
    imageSrc: "/speaking/aico.webp",
    title: {
      id: "AI Driven Webcraft: Mengubah Ide Menjadi Website",
      en: "AI Driven Webcraft: Transform Your Ideas into Websites",
    },
    subtitle: {
      id: "AI Webcrafting: Dari Ide ke Website dalam Hitungan Menit",
      en: "AI Webcrafting: From Ideas to Websites in Minutes",
    },
    date: "25 April 2025",
    time: "19.00-20.00 WIB",
    location: "Zoom Meeting",
    description: {
      id: "Demo langsung penggunaan AI untuk membangun website dengan tools seperti v0.dev dan Bolt. Mengenalkan AI-driven development untuk developer pemula dan praktisi industri kreatif.",
      en: "Live demo of using AI to build websites with tools like v0.dev and Bolt. Introducing AI-driven development for beginner developers and creative industry practitioners.",
    },
    links: [
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://drive.google.com/file/d/1-aftW3xwVdJX0ZXjFJyc1ajnWAfsMOL5/view?usp=sharing" },
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1lQkzTt7UvrDlQ86SdeCHz7kPOEFEGSDgPAxLT78BqC4/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: AICO Community", en: "Organized by: AICO Community" },
  },
  {
    id: "bsb-webinar",
    category: "Webinar",
    tags: ["Personal Branding", "Career Development"],
    imageSrc: "/speaking/bsb.webp",
    title: {
      id: "Lebih dari Sekadar Kode: Membangun Personal Brand yang Kuat sebagai Developer",
      en: "More Than Just Code: Build a Powerful Personal Brand as a Developer",
    },
    subtitle: {
      id: "Membangun Personal Brand yang Kuat sebagai Developer",
      en: "Building a Strong Personal Brand as a Developer",
    },
    date: "20 Maret 2025",
    time: "15.00-16.00 WIB",
    location: "Zoom Meeting",
    description: {
      id: "Sesi ini fokus pada personal branding developer. Membahas cara membangun reputasi melalui komunikasi efektif, berbagi pengetahuan, dan aktif di komunitas teknologi.",
      en: "This session focuses on developer personal branding. Discussing ways to build reputation through effective communication, knowledge sharing, and active participation in tech communities.",
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1Om-ZNp9IzvwMjB4Zn8-wQPB2e2AJwQiNElNrudJXoYc/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: GDG Bandung, GDG On Campus & Binary Nusantara", en: "Organized by: GDG Bandung, GDG On Campus & Binary Nusantara" },
  },
  {
    id: "partiums-seminar",
    category: "Seminar",
    tags: ["Technology Ethics", "Digital Literacy"],
    imageSrc: "/speaking/partiums.webp",
    title: {
      id: "Seminar Nasional: Etika Teknologi dan Dampak Sosial",
      en: "National Seminar: Technology Ethics and Social Impact",
    },
    subtitle: {
      id: "Literasi dan Etika di Era Teknologi",
      en: "Literacy and Ethics in the Technology Era",
    },
    date: "05 Oktober 2024",
    location: "Universitas Muhammadiyah Surakarta",
    description: {
      id: "Seminar nasional membahas etika teknologi dan dampaknya terhadap masyarakat, mencakup:",
      en: "National seminar discussing technology ethics and its impact on society, covering:",
    },
    bullets: {
      id: [
        "Etika penggunaan teknologi di ranah publik",
        "Dampak sosial dari digitalisasi dan kecerdasan buatan",
        "Peran developer dalam membentuk ekosistem digital yang sehat",
      ],
      en: [
        "Ethics of technology use in public domain",
        "Social impact of digitalization and artificial intelligence",
        "Developer's role in shaping a healthy digital ecosystem",
      ],
    },
    links: [
      { labelId: "Lihat Dokumentasi", labelEn: "View Documentation", href: "https://drive.google.com/drive/folders/1SA8gdYKN51MhnAiS4Jw2b7KMaErUXPVQ" },
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1nGqXbBuwlhv9QoQYRzyEyz4wBaRWhOcxdYu-Kfr4p1k/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: HIMATIF Universitas Muhammadiyah Surakarta", en: "Organized by: HIMATIF Universitas Muhammadiyah Surakarta" },
  },
  {
    id: "gdgoc-info-session",
    category: "Info Session",
    tags: ["Community", "Career Development"],
    imageSrc: "/speaking/gdgoc.webp",
    title: {
      id: "Memberdayakan Masa Depan Teknologimu: Temukan Google Developer on Campus Widyatama!",
      en: "Empowering Your Tech Future: Discover Google Developer on Campus Widyatama!",
    },
    subtitle: { id: "GDGOC Info Session", en: "GDGOC Info Session" },
    date: "24 November 2024",
    time: "19.00-21.00 WIB",
    location: "Google Meet",
    description: {
      id: "Sebagai Former Lead GDSC '23, membagikan pengalaman seputar:",
      en: "As a Former GDSC Lead '23, sharing experiences about:",
    },
    bullets: {
      id: [
        "Kepemimpinan dan kontribusi dalam komunitas teknologi",
        "Insight membangun karir teknologi lewat ekosistem Google Developer",
        "Tips berkontribusi aktif di komunitas teknologi",
      ],
      en: [
        "Leadership and contribution in tech communities",
        "Insights on building tech career through Google Developer ecosystem",
        "Tips for active contribution in tech communities",
      ],
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/14cD8JzY5NyWRxGwIjLzPlVmn1ZJyNRpt0KpUfOKSJbU/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: GDGoC – Universitas Widyatama", en: "Organized by: GDGoC – Universitas Widyatama" },
  },
  {
    id: "gamelab-glow-240",
    category: "Webinar",
    tags: ["Softskill", "Career Development", "AI"],
    imageSrc: "/speaking/gamelab.webp",
    title: {
      id: "GLOW#240 – Softskill untuk Raih Karier Software Engineer di Era AI",
      en: "GLOW#240 – Softskills to Achieve Software Engineer Career in AI Era",
    },
    subtitle: {
      id: "Pengembangan Softskill untuk Software Engineer Modern",
      en: "Softskill Development for Modern Software Engineers",
    },
    date: "14 Juni 2024",
    time: "15.30-16.30 WIB",
    location: "Online - Gamelab Platform",
    description: {
      id: "Sesi khusus membahas pengembangan softskill untuk software engineer:",
      en: "Special session discussing softskill development for software engineers:",
    },
    bullets: {
      id: [
        "Pentingnya softskill untuk menunjang karier di bidang pemrograman",
        "Keterampilan komunikasi, problem solving, dan teamwork",
        "Tantangan menjadi software engineer di era AI",
        "Tips praktis untuk mengembangkan diri sebagai developer modern",
      ],
      en: [
        "The importance of softskills for career support in programming",
        "Communication skills, problem solving, and teamwork",
        "Challenges of being a software engineer in the AI era",
        "Practical tips for self-development as a modern developer",
      ],
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1SYh7nEgnVJApEeqOf3yB68rOlgR24qvOk2b1tjLGm3o/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: GAMELAB Indonesia", en: "Organized by: GAMELAB Indonesia" },
  },
]
