export type ExperienceItem = {
  id: string
  role: { id: string; en: string }
  company: string
  dateRange: { id: string; en: string }
  location: string
  bullets: { id: string[]; en: string[] }
  tags?: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: "internal-mentor-codepolitan",
    role: { id: "Internal Mentor", en: "Internal Mentor" },
    company: "CODEPOLITAN",
    dateRange: { id: "Sep 2024 - Saat ini", en: "Sep 2024 - Present" },
    location: "Cimahi, Jawa Barat, Indonesia",
    bullets: {
      id: [
        "Mengembangkan konten tutorial tentang teknologi terbaru, meningkatkan keterlibatan pengguna sebesar 30% dan menarik lebih dari 1.000 pelajar baru.",
        "Mengembangkan tips, trik, dan berita teknologi, membantu audiens mempelajari keterampilan baru dengan lebih cepat dan efektif.",
        "Mengelola saluran YouTube untuk pendidikan TI, bertanggung jawab membuat dan mengelola konten video di YouTube yang mendidik tentang pemrograman dan teknologi modern.",
        "Membuat konten tentang tren teknologi, mengikuti perkembangan teknologi terbaru dan mengadaptasi materi agar sesuai dengan tren industri.",
        "Kolaborasi dengan tim pengembangan konten, bekerja sama dengan tim internal untuk merencanakan, mengembangkan, dan mempublikasikan materi pendidikan teknologi berkualitas tinggi.",
      ],
      en: [
        "Developed tutorial content on the latest technologies, enhancing user engagement by 30% and attracting over 1,000 new learners.",
        "Developing technology tips, tricks and news, helping audiences learn new skills more quickly and effectively.",
        "Manage YouTube channel for IT education, responsible for creating and managing video content on YouTube that educates about programming, web development, and other modern technologies.",
        "Creating content on technology trends, keeping up to date with the latest technology and adapting material to match industry trends, ensuring content remains relevant and useful.",
        "Collaboration with content development team, work closely with the in-house team to plan, develop and publish high-quality technology education materials.",
      ],
    },
    tags: ["YouTube Video Creation", "Laravel", "Full-Stack Development", "Video Production", "Teaching", "Communication"],
  },
  {
    id: "lead-gdg-campus",
    role: { id: "Lead", en: "Lead" },
    company: "GDG on Campus Widyatama University",
    dateRange: { id: "Agu 2023 - Jul 2024", en: "Aug 2023 - Jul 2024" },
    location: "Bandung, West Java, Indonesia",
    bullets: {
      id: [
        "Berpartisipasi dalam komunitas global lebih dari 5.700 Alumni, 2.177 Lead di lebih dari 100 negara dan 87 universitas di Indonesia, meningkatkan kolaborasi internasional dan peluang jejaring.",
        "Mencapai pembentukan 21 tim inti dan mendaftarkan 1.582 anggota di platform, mewakili lebih dari 35 universitas dan 40 kota di Indonesia, secara signifikan meningkatkan keterlibatan komunitas.",
        "Menyelenggarakan total 55 acara yang mencakup hard skill dan soft skill, bekerja sama dengan lebih dari 10 universitas dan menarik 1.218 peserta ke satu acara.",
        "Berkolaborasi dengan 5 institusi untuk memperluas jangkauan dan dampak program, menghasilkan peningkatan partisipasi dan berbagi sumber daya.",
        "Memberikan manfaat senilai total Rp 43.500.000 dalam bentuk voucher kursus coding dan e-wallet kepada peserta, berkontribusi pada kemajuan pendidikan.",
      ],
      en: [
        "Participated in a global community of over 5,700 Alumni, 2,177 Leads across more than 100 countries and 87 universities in Indonesia, enhancing international collaboration and networking opportunities.",
        "Achieved the formation of 21 core teams and registered 1,582 members on the platform, representing over 35 universities and 40 cities in Indonesia, significantly increasing community engagement.",
        "Organized a total of 55 events covering hard and soft skills, in collaboration with over 10 universities and attracted 1,218 participants to a single event, showcasing the ability to generate significant interest and engagement within the community.",
        "Collaborated with 5 institutions to expand program reach and impact, resulting in increased participation and resource sharing.",
        "Provided benefits totaling IDR 43,500,000 in coding course vouchers and e-wallets to participants, contributing to educational advancement.",
      ],
    },
    tags: ["Leadership", "Communication", "Teamwork", "Team Management", "Event Planning", "Time Management"],
  },
  {
    id: "mobile-development-cohort-bangkit",
    role: { id: "Mobile Development Cohort", en: "Mobile Development Cohort" },
    company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    dateRange: { id: "Feb 2023 - Jul 2023", en: "Feb 2023 - Jul 2023" },
    location: "Bandung, West Java, Indonesia",
    bullets: {
      id: [
        "Meraih pengakuan sebagai salah satu dari 10% lulusan terbaik dari 5.000+ peserta, menguasai pengembangan aplikasi Android menggunakan Kotlin dan praktik terbaik industri.",
        "Bangkit adalah program kesiapan karier yang dipimpin oleh Google, didukung oleh ahli industri dari GoTo dan Traveloka, bertujuan untuk menghasilkan talenta teknis berkualitas tinggi.",
      ],
      en: [
        "Achieved recognition as one of the top 10% graduates out of 5,000+ participants, mastering Android app development using Kotlin and industry-relevant best practices.",
        "Bangkit is a career readiness program led by Google, supported by industry experts from GoTo and Traveloka, aiming to produce high-caliber technical talent.",
      ],
    },
    tags: ["Android Development", "Critical Thinking", "Problem Solving", "Teamwork", "Communication", "Project Management"],
  },
  {
    id: "frontend-web-developer-sibernetika",
    role: { id: "Frontend Web Developer", en: "Frontend Web Developer" },
    company: "PT Sibernetika Teknologi Industri",
    dateRange: { id: "Sep 2022 - Jan 2023", en: "Sep 2022 - Jan 2023" },
    location: "Bandung, West Java, Indonesia",
    bullets: {
      id: [
        "Mengembangkan aplikasi berbasis web bernama Panasonic Smart Clinic untuk memenuhi kebutuhan klien dari PT Panasonic Industrial Devices Batam.",
        "Melakukan slicing desain UI/UX ke dalam kode, memastikan tampilan dan fungsionalitas sesuai spesifikasi yang direncanakan.",
        "Menyesuaikan desain sesuai permintaan klien, menjaga keselarasan dengan kebutuhan klien.",
        "Membuat halaman responsif, memastikan aplikasi dapat diakses di berbagai perangkat.",
        "Berkolaborasi dengan pengembang backend untuk proses integrasi, memastikan fungsionalitas berjalan lancar.",
      ],
      en: [
        "Developed a web-based application called Panasonic Smart Clinic to meet the needs of the client from PT Panasonic Industrial Devices Batam.",
        "Sliced UI/UX design into code, ensuring the appearance and functionality met planned specifications.",
        "Adjusted designs according to client requests, maintaining alignment with client needs.",
        "Created responsive pages, ensuring the application was accessible on various devices.",
        "Collaborated with backend developers for the integration process, ensuring functionality ran smoothly.",
      ],
    },
    tags: ["Front-End Development", "JavaScript", "HTML", "Cascading Style Sheets (CSS)", "Communication"],
  },
  {
    id: "fullstack-web-developer-cinovasi",
    role: { id: "Fullstack Web Developer", en: "Fullstack Web Developer" },
    company: "Cinovasi Rekaprima, PT",
    dateRange: { id: "Jun 2022 - Jun 2023", en: "Jun 2022 - Jun 2023" },
    location: "Bandung, West Java, Indonesia",
    bullets: {
      id: [
        "Mengembangkan dan memelihara aplikasi untuk klien Panasonic, meningkatkan fungsionalitas dengan mengimplementasikan fitur baru dan memperbaiki bug.",
        "Berkolaborasi dengan manajer proyek untuk menerjemahkan persyaratan menjadi spesifikasi teknis, memastikan pengiriman proyek selesai tepat waktu (95% on-time).",
        "Berpartisipasi dalam sesi brainstorming dan memberikan solusi inovatif untuk tantangan teknis, menghasilkan peningkatan kinerja aplikasi sebesar 30%.",
      ],
      en: [
        "Developed and maintained applications for Panasonic clients, enhancing functionality by implementing new features and fixing bug reports.",
        "Collaborated with project managers to translate requirements into technical specifications, ensuring project deliveries were completed on time (95% on-time).",
        "Participated in brainstorming sessions and provided innovative solutions to technical challenges, resulting in a 30% increase in application performance.",
      ],
    },
    tags: ["Struts", "Java", "Back-End Web Development", "Backbone.js"],
  },
  {
    id: "web-developer-jerbee",
    role: { id: "Web Developer", en: "Web Developer" },
    company: "Jerbee Indonesia",
    dateRange: { id: "Jul 2019 - Sep 2019", en: "Jul 2019 - Sep 2019" },
    location: "Bandung, Jawa Barat, Indonesia",
    bullets: {
      id: [
        "Mengembangkan website menggunakan PHP, framework Laravel, JavaScript/Ajax, bootstrap, dan MySQL.",
        "Menunjukkan kemampuan pemecahan masalah yang kuat dengan mengidentifikasi dan menyelesaikan masalah produksi kritis dengan cepat.",
        "Berkontribusi pada adopsi alat pengembangan modern, meningkatkan produktivitas sebesar 25%.",
      ],
      en: [
        "Developed a website using PHP, Laravel framework, JavaScript/Ajax, bootstrap, and MySQL.",
        "Demonstrated strong problem-solving skills by quickly identifying and resolving critical production issues.",
        "Contributed to the adoption of modern development tools, enhancing productivity by 25%.",
      ],
    },
    tags: ["Pengembangan Web", "Laravel", "PHP", "MySQL", "Bootstrap (Framework)", "JavaScript"],
  },
]

export const achievements: { id: string; en: string }[] = [
  {
    id: "Pengembangan Sistem SIACTA",
    en: "SIACTA System Development",
  },
  {
    id: "Optimasi Performa Aplikasi",
    en: "Application Performance Optimization",
  },
  {
    id: "Integrasi AI dalam Aplikasi Kesehatan",
    en: "AI Integration in Health Applications",
  },
]