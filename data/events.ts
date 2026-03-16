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
    id: "workshop-webdev-polines-2026",
    category: "Workshop",
    tags: ["Web Development", "AI", "Workshop"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1773035940630-2sznch.webp",
    title: {
      id: "Workshop Web Development: Build Your Own Website with AI",
      en: "Web Development Workshop: Build Your Own Website with AI"
    },
    subtitle: {
      id: "Techup Politeknik Negeri Semarang",
      en: "Techup Politeknik Negeri Semarang"
    },
    date: "03 April 2026",
    time: "07.00 WIB",
    location: "Politeknik Negeri Semarang, Kota Semarang",
    description: {
      id: "Workshop offline di Politeknik Negeri Semarang membahas pembuatan website mandiri menggunakan teknologi AI bersama Aditya Fakhri Riansyah.",
      en: "Offline workshop at Semarang State Polytechnic discussing independent website creation using AI technology with Aditya Fakhri Riansyah."
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://docs.google.com/forms/d/e/1FAIpQLSeU3cI15mTnQBoYyipuMKmWRSptgLYP81DRwMfURC4trlXAdQ/viewform" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: Techup Politeknik Negeri Semarang",
      en: "Organized by: Techup Politeknik Negeri Semarang"
    }
  }
]

export const pastEvents: EventItem[] = [
  {
    id: "ngabuburit-produktif-thr-digital",
    category: "Workshop",
    tags: ["Lovable", "Antigravity", "Vibe Coding", "AI"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1773033054845-3xdk2m.webp",
    title: {
      id: "Ngabuburit Produktif: Bikin Aplikasi THR Kaget Digital dengan Vibe Coding",
      en: "Productive Ngabuburit: Build a Digital THR Surprise App with Vibe Coding"
    },
    subtitle: {
      id: "Dunia Coding Academy",
      en: "Dunia Coding Academy"
    },
    date: "14 - 15 Maret 2026",
    time: "15.30 WIB",
    location: "Live on Google Meet",
    description: {
      id: "Workshop online membahas pembuatan aplikasi THR Digital menggunakan Lovable, Antigravity, dan AI.",
      en: "Online workshop discussing the creation of a Digital THR application using Lovable, Antigravity, and AI."
    },
    bullets: {
      id: [
        "Mengenal konsep fitur THR Kaget pada aplikasi fintech",
        "Pengenalan Vibe Coding dan best practice menggunakan AI untuk coding",
        "Eksplorasi tools Lovable & Antigravity untuk membangun aplikasi",
        "Membuat prototype aplikasi THR Digital dengan AI",
        "Implementasi fitur Generate Link, Claim THR & Random Nominal",
        "Integrasi project Lovable → GitHub → Local Development & Deploy",
        "Output: Aplikasi THR Digital terdeploy + link project portfolio"
      ],
      en: [
        "Introduction to the THR Surprise feature concept in fintech apps",
        "Introduction to Vibe Coding and best practices using AI for coding",
        "Exploring Lovable & Antigravity tools to build an application",
        "Creating a Digital THR app prototype with AI",
        "Implementing Generate Link, Claim THR & Random Nominal features",
        "Lovable project integration → GitHub → Local Development & Deploy",
        "Output: Deployed Digital THR App + project portfolio link"
      ]
    },
    links: [
      { labelId: "Materi Hari ke-1", labelEn: "Materials Day 1", href: "https://docs.google.com/presentation/d/1lAhjfmTmX4TnKUcXH8Bf3O_olbh6cZ3MIggczmszbJU/edit?usp=sharing" },
      { labelId: "Materi Hari ke-2", labelEn: "Materials Day 2", href: "https://docs.google.com/presentation/d/1bFVOhZ1sBHSLiyslAb9fxI02T4uPbBp_Mo1kgraEntw/edit?usp=sharing" },
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://duniacoding.id/event" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: Dunia Coding Academy",
      en: "Organized by: Dunia Coding Academy"
    }
  },
  {
    id: "devcoach-229-laravel",
    category: "Live Session",
    tags: ["Laravel", "Framework", "Web"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1773033055414-k39wo8.webp",
    title: {
      id: "DevCoach #230: Is Laravel dead?",
      en: "DevCoach #230: Is Laravel dead?"
    },
    subtitle: {
      id: "Dicoding Indonesia",
      en: "Dicoding Indonesia"
    },
    date: "13 Maret 2026",
    time: "16.00 - 17.00 WIB",
    location: "Live on YouTube",
    description: {
      id: "Sesi DevCoach yang membedah framework Laravel, alasan industri menyukainya, serta demonstrasi live dari instalasi hingga aksi.",
      en: "DevCoach session analyzing the Laravel framework, why the industry loves it, and a live demonstration from installation to action."
    },
    bullets: {
      id: [
        "Bedah framework Laravel",
        "Why Industry Loves It?",
        "Live Demo: From Install to Action!"
      ],
      en: [
        "Dissecting the Laravel framework",
        "Why Industry Loves It?",
        "Live Demo: From Install to Action!"
      ]
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1jRb1zD9c6doRmcxBpJ728I0EVm_QzayTKPpYoEPHoaY/edit?usp=sharing" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://www.youtube.com/live/52H_TUqozb4" },
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://dicoding.id/devcoach" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: Dicoding Indonesia",
      en: "Organized by: Dicoding Indonesia"
    }
  },
  {
    id: "bsb-vibe-coding-ramadhan-2026",
    category: "Offline Event",
    tags: ["Vibe Coding", "AI", "Ramadhan", "Charity"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772692127547-v5hyta.webp",
    title: {
      id: "Vibe Coding Ramadhan: Aplikasi AI Rekomendasi Menu Sahur & Buka Puasa",
      en: "Vibe Coding Ramadhan: AI App for Sahur & Iftar Menu Recommendations"
    },
    subtitle: {
      id: "Belajar Sambil Beramal Season 6 - GDG Bandung x Logitech",
      en: "Learn While Donating Season 6 - GDG Bandung x Logitech"
    },
    date: "07 Maret 2026",
    time: "14.00 - 19.30 WIB",
    location: "Kota Bandung",
    description: {
      id: "Event offline Belajar Sambil Beramal Season 6. TechTalk Vibe Coding membahas pembuatan aplikasi AI rekomendasi menu sahur & buka puasa. Level Up Your Skill, Scale Up Your Charity.",
      en: "Belajar Sambil Beramal Season 6 offline event. TechTalk Vibe Coding discussing the creation of an AI app for sahur & iftar menu recommendations. Level Up Your Skill, Scale Up Your Charity."
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/13cl4wEL_bVjM9oekpiwiDqh0_pn3mIJzmG73fyFSsNE/edit?usp=sharing" },
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://gdg.community.dev/events/details/google-gdg-bandung-presents-offline-vibe-coding-to-production-building-ai-apps-for-ramadhan/" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: GDG Bandung, Binary Nusantara, BandungDev, MX Perience Club",
      en: "Organized by: GDG Bandung, Binary Nusantara, BandungDev, MX Perience Club"
    }
  },
  {
    id: "vibe-coding-101-antigravity",
    category: "Workshop",
    tags: ["AI", "Vibe Coding", "Lovable", "Antigravity"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772614312178-vznxaw.webp",
    imageClassName: "object-contain bg-white",
    title: {
      id: "Vibe Coding 101: Membangun Aplikasi Berbasis AI Dengan Antigravity",
      en: "Vibe Coding 101: Building AI-Based Applications With Antigravity",
    },
    subtitle: {
      id: "Workshop RuangAI by CODEPOLITAN",
      en: "RuangAI Workshop by CODEPOLITAN",
    },
    date: "04 Maret 2026",
    time: "10.00 - 12.00 WIB",
    location: "Online",
    description: {
      id: "Workshop hands-on membangun aplikasi berbasis AI menggunakan Lovable dan Antigravity, dengan studi kasus pembuatan Aplikasi \"Falaah\" - Smart Ibadah Tracker.",
      en: "Hands-on workshop on building AI-based applications using Lovable and Antigravity, with a case study on creating the \"Falaah\" Application - Smart Ibadah Tracker.",
    },
    bullets: {
      id: [
        "Pengenalan Vibe Coding dan tools AI",
        "Membangun aplikasi berbasis AI menggunakan Lovable dan Antigravity",
        "Studi kasus: Smart Ibadah Tracker \"Falaah\"",
      ],
      en: [
        "Introduction to Vibe Coding and AI tools",
        "Building AI-based apps using Lovable and Antigravity",
        "Case study: Smart Ibadah Tracker \"Falaah\"",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: RuangAI By CODEPOLITAN",
      en: "Organized by: RuangAI By CODEPOLITAN",
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1oDUazVN5F4DTafOhilTx7Oji-M1EDvukRegnOIVIEnQ/edit?usp=sharing" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/avHl5Pr2TIY" }
    ],
  },
  {
    id: "devhandal-circle-offline-2026",
    category: "Meet & Greet",
    tags: ["DevHandal", "Networking", "Career"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772692127231-qpwkjg.webp",
    title: {
      id: "DevHandal Circle: Expert Meet & Greet Offline",
      en: "DevHandal Circle: Expert Meet & Greet Offline"
    },
    subtitle: {
      id: "Developer Handal x CODEPOLITAN x Tencent EdgeOne",
      en: "Developer Handal x CODEPOLITAN x Tencent EdgeOne"
    },
    date: "15 Februari 2026",
    time: "09.00 - 14.00 WIB",
    location: "BLOCK71, Kota Bandung",
    description: {
      id: "Sesi offline eksklusif untuk graduated DevHandal 2026. Buka peluang terhubung ke para Expert, jalin relasi dan dapatkan doorprize menarik.",
      en: "Exclusive offline session for graduated DevHandal 2026. Open opportunities to connect with Experts, build networks and get exciting doorprizes."
    },
    organizer: {
      id: "Diselenggarakan oleh: DevHandal, CODEPOLITAN & Tencent EdgeOne",
      en: "Organized by: DevHandal, CODEPOLITAN & Tencent EdgeOne"
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://luma.com/knyqhp0f" }
    ],
  },
  {
    id: "idcamp-dicoding-ai-web-dev",
    category: "Live Session",
    tags: ["AI", "Web Dev", "Lovable", "Antigravity"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772692126933-1z0scs.webp",
    title: {
      id: "IDCamp x Dicoding Live: AI Web Dev - Build Real Apps with Lovable & Antigravity",
      en: "IDCamp x Dicoding Live: AI Web Dev - Build Real Apps with Lovable & Antigravity"
    },
    subtitle: {
      id: "AI Series by IDCamp x Dicoding",
      en: "AI Series by IDCamp x Dicoding"
    },
    date: "10 Februari 2026",
    time: "19.00 - 20.30 WIB",
    location: "Live on YouTube",
    description: {
      id: "Sesi IDCamp x Dicoding Live membahas cara membangun aplikasi nyata menggunakan Lovable & Antigravity bersama Cantika Putri dan Aditya Fakhri Riansyah.",
      en: "IDCamp x Dicoding Live session discussing how to build real apps using Lovable & Antigravity with Cantika Putri and Aditya Fakhri Riansyah."
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1-Zq0fb7ZpT3I0LSe9_YZu5R7kf6eH_cZJaRPOHcv-Lk/edit?usp=sharing" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://www.youtube.com/live/YTh2zlwgmOc?si=MXL9lRwdu-TH-Xze" },
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://dicoding.com/events/9539" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: IDCamp & Dicoding",
      en: "Organized by: IDCamp & Dicoding"
    }
  },
  {
    id: "ruangai-live-20-image-tools",
    category: "Live Session",
    tags: ["AI", "Vibe Coding", "Image Tools", "Productivity"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772699383774-gfd9zy.webp",
    title: {
      id: "Production-Ready Image Tools With Vibe Coding: Resize, Compress, Convert",
      en: "Production-Ready Image Tools With Vibe Coding: Resize, Compress, Convert"
    },
    subtitle: {
      id: "RuangAI Live Session - Pertemuan 20",
      en: "RuangAI Live Session - Session 20"
    },
    date: "05 Februari 2026",
    time: "10.00 - 11.30 WIB",
    location: "Live on Zoom",
    description: {
      id: "Sesi live reguler RuangAI pertemuan ke-20 bersama Aji dan Aditya, membahas pembuatan Production-Ready Image Tools (Resize, Compress, Convert) dengan pendekatan Vibe Coding.",
      en: "Regular RuangAI live session meeting 20 with Aji and Aditya, discussing the creation of Production-Ready Image Tools (Resize, Compress, Convert) using the Vibe Coding approach."
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://drive.google.com/file/d/1F1b9nVj9fXna_rG_-EpKJ4Un4q7z9U3l/view?usp=sharing" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/Et9-BGtFYqI" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: RuangAI by CODEPOLITAN",
      en: "Organized by: RuangAI by CODEPOLITAN"
    }
  },
  {
    id: "live-session-unindra-2026",
    category: "Live Session",
    tags: ["AI", "SaaS Builder", "POS"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772692126590-x40don.webp",
    title: {
      id: "Spesial Live Session: Bangun POS Warung pakai Lovable & Antigravity",
      en: "Special Live Session: Build a Warung POS with Lovable & Antigravity"
    },
    subtitle: {
      id: "RuangAI by CODEPOLITAN",
      en: "RuangAI by CODEPOLITAN"
    },
    date: "31 Januari 2026",
    time: "09.00 - 11.30 WIB",
    location: "Live on Zoom",
    description: {
      id: "Sesi live spesial bersama RuangAI dan Universitas Indraprasta PGRI membahas cara membangun aplikasi POS untuk warung menggunakan Lovable dan Antigravity bersama Aditya, Felisha, dan Adela.",
      en: "Special live session with RuangAI and Indraprasta PGRI University discussing how to build a POS app for warung using Lovable and Antigravity with Aditya, Felisha, and Adela."
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://www.canva.com/design/DAHDD81OVNs/t07610cbTQQex9cQlaZlIQ/edit?utm_content=DAHDD81OVNs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/oMSvs1iWKgs" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: Universitas Indraprasta PGRI & RuangAI",
      en: "Organized by: Indraprasta PGRI University & RuangAI"
    }
  },
  {
    id: "training-gen-ai-smkn2-sukabumi-2026",
    category: "Training",
    tags: ["AI", "Generative AI", "Coding Assist", "SaaS Builder"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1772697046298-1afkze.webp",
    title: {
      id: "Siap Kerja di Era AI: Skill Digital yang Wajib Dimiliki Anak SMK",
      en: "Ready to Work in the AI Era: Digital Skills Every SMK Student Must Have"
    },
    subtitle: {
      id: "Training Generative AI Bagi Siswa SMKN 2 Sukabumi ",
      en: "Generative AI Training for SMKN 2 Sukabumi Students"
    },
    date: "28 Januari 2026",
    time: "09.00 - 12.00 WIB",
    location: "SMKN 2 Sukabumi",
    description: {
      id: "Training Generative AI eksklusif untuk membekali siswa SMKN 2 Sukabumi dengan skill digital agar siap kerja di era AI.",
      en: "Exclusive Generative AI Training to equip SMKN 2 Sukabumi students with digital skills to be ready for work in the AI era."
    },
    bullets: {
      id: [
        "Pengenalan dan literasi dasar AI untuk mempermudah pekerjaan",
        "Mengenal berbagai AI Tools populer penunjang produktivitas",
        "Persiapan masuk dunia kerja dengan mindset digital",
        "Pembuatan CV terstruktur dan persiapan wawancara"
      ],
      en: [
        "Introduction and basic AI literacy to simplify work",
        "Get to know various popular AI Tools supporting productivity",
        "Preparation to enter the workforce with a digital mindset",
        "Structured CV creation and interview preparation"
      ]
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://www.canva.com/design/DAHDD7AgbVE/dCu4D8fzO70AzDxfRavfEQ/edit?utm_content=DAHDD7AgbVE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
    ],
    organizer: {
      id: "Diselenggarakan oleh: RuangAI By CODEPOLITAN & SMKN 2 Sukabumi",
      en: "Organized by: RuangAI By CODEPOLITAN & SMKN 2 Sukabumi"
    }
  },
  {
    id: "seminar-himatif-2025",
    category: "Seminar",
    tags: ["AI", "Frontend", "Backend", "Web Development"],
    imageSrc: "/speaking/seminar-himatif.webp",
    title: {
      id: "Intelligent Project Delivery (Seminar Nasional)",
      en: "Intelligent Project Delivery (National Seminar)",
    },
    subtitle: {
      id: "Empowering Frontend-Backend Development with AI",
      en: "Empowering Frontend-Backend Development with AI",
    },
    date: "13 Desember 2025",
    time: "10.30 - 12.50 WIB",
    location: "Univ. Widyatama, Bandung",
    description: {
      id: "Membahas integrasi AI dalam pengembangan Front-end & Back-end serta strategi Intelligent Project Delivery.",
      en: "Discussing AI integration in Front-end & Back-end development and Intelligent Project Delivery strategies.",
    },
    bullets: {
      id: [
        "Nambah Wawasan Baru tentang integrasi AI",
        "Implementasi AI dalam project development",
        "E-Certificate Nasional",
      ],
      en: [
        "Gain new insights on AI integration",
        "AI implementation in project development",
        "National E-Certificate",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: HIMATIF UTAMA",
      en: "Organized by: HIMATIF UTAMA",
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1WrNPxLq5lZxu7ajDjJ7La6rt3VYhVjv3QzFhDYf3JFU/edit?usp=sharing" },
      { labelId: "Lihat Dokumentasi", labelEn: "View Documentation", href: "https://drive.google.com/drive/folders/1rZGjyb3AQKkffg-a-bevu8K4JeOmyJMg?usp=drive_link" },
    ],
  },
  {
    id: "workshop-rai-dec-2025",
    category: "Workshop",
    tags: ["AI", "Finance", "Automation", "SaaS"],
    imageSrc: "/speaking/workshop-rai.webp",
    title: {
      id: "Bangun Asisten Keuangan UMKM Otomatis via WhatsApp Pakai AI",
      en: "Build Automated SME Finance Assistant via WhatsApp Using AI",
    },
    subtitle: {
      id: "Workshop RuangAI",
      en: "RuangAI Workshop",
    },
    date: "07 Desember 2025",
    time: "10.00 - 13.00 WIB",
    location: "Live on Zoom",
    description: {
      id: "Belajar membuat sistem asisten keuangan otomatis untuk UMKM yang terintegrasi dengan WhatsApp dan AI, lengkap dengan dashboard pelaporan.",
      en: "Learn to build an automated financial assistant system for SMEs integrated with WhatsApp and AI, complete with a reporting dashboard.",
    },
    bullets: {
      id: [
        "Laporan otomatis harian, mingguan, dan bulanan",
        "Dashboard web pemasukan, pengeluaran & profit",
        "Export laporan ke PDF untuk presentasi",
      ],
      en: [
        "Automated daily, weekly, and monthly reports",
        "Web dashboard for income, expenses & profit",
        "Export reports to PDF for presentation",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: RuangAI by CODEPOLITAN",
      en: "Organized by: RuangAI by CODEPOLITAN",
    },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1LIHHaunjhWZhRKPbMze09VcHYyTYANv_F1xQCozKjp4/edit?usp=sharing" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/eSfT3OJguvw" },
    ],
  },
  {
    id: "corner-talkshow-pakuan-2025",
    category: "Seminar",
    tags: ["AI", "Prompt Engineering", "Productivity"],
    imageSrc: "/speaking/cornettalkshow-unpak-2025.webp",
    title: {
      id: "From Prompt to Productive Code: Jadikan Prompt sebagai Solusi Nyata",
      en: "From Prompt to Productive Code: Turn Prompts into Real Solutions",
    },
    subtitle: {
      id: "Corner Talkshow",
      en: "Corner Talkshow",
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
    organizer: { id: "Diselenggarakan oleh: Corner Talkshow HIMAKOM UNPAK", en: "Organized by: Corner Talkshow HIMAKOM UNPAK" },
    links: [
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1RTws1kV52FifDB5PPddJXdelZq6D-Z4KmeSvehnNBUY/edit?usp=sharing" },
      { labelId: "Lihat Dokumentasi", labelEn: "View Documentation", href: "https://drive.google.com/drive/folders/1Zd_67jFnc-wp4m_c8Z7DEmmdnjIq4_6Z" },
    ],
  },
  {
    id: "it-fest-uho-2025",
    category: "Seminar",
    tags: ["AI", "Mindset", "Career Development"],
    imageSrc: "/speaking/it-fest-uho-2025.webp",
    title: {
      id: "Unleashing The Infinite Potential: Skills, Mindset, and AI for The Future",
      en: "Unleashing The Infinite Potential: Skills, Mindset, and AI for The Future",
    },
    subtitle: {
      id: "IT Fest 18 UHO",
      en: "IT Fest 18 UHO",
    },
    date: "29 Nov 2025",
    time: "08.00 - 12.00 WITA",
    location: "UHO, Kendari, Sulawesi Tenggara",
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
      {
        labelId: "Lihat Dokumentasi",
        labelEn: "View Documentation",
        href: "https://drive.google.com/drive/folders/1cKFjovFN90rQRn0e_RxPT5yPzHjsEWNF",
      },
    ],
  },
  {
    id: "kelasfullstack-uiux-dpr",
    category: "Webinar",
    tags: ["UI/UX", "Figma", "Redesign", "Web Design"],
    imageSrc: "/speaking/uiux-dpr.webp",
    title: {
      id: "Belajar UI/UX Web Dengan Figma \"Re-Design Web DPR RI\"",
      en: "Learn Web UI/UX With Figma \"DPR RI Web Re-Design\"",
    },
    subtitle: {
      id: "Webinar KelasFullstack",
      en: "KelasFullstack Webinar",
    },
    date: "20 September 2025",
    time: "19.00 - 21.00 WIB",
    location: "Live on Zoom",
    description: {
      id: "Webinar UI/UX eksklusif membahas proses redesign website DPR RI menggunakan Figma. Dipandu oleh Ahmad Oriza & Aditya Fakhri, mengupas teknik desain antarmuka pemerintahan yang modern.",
      en: "Exclusive UI/UX webinar discussing the redesign process of the DPR RI website using Figma. Led by Ahmad Oriza & Aditya Fakhri, exploring modern government interface design techniques.",
    },
    bullets: {
      id: [
        "Studi kasus nyata: Transformasi tampilan Web DPR RI",
        "Workflow desain profesional di Figma",
        "Prinsip desain UI/UX untuk website instansi publik",
        "Diskusi seputar karir dan skill UI/UX Designer",
      ],
      en: [
        "Real case study: DPR RI Web interface transformation",
        "Professional design workflow in Figma",
        "UI/UX design principles for public agency websites",
        "Discussion on UI/UX Designer careers and skills",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: KelasFullstack",
      en: "Organized by: KelasFullstack",
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://www.codepolitan.com/events/belajar-uiux-web-dengan-figma-studi-kasus-redesign-web-dpr-ri/" },
    ],
  },
  {
    id: "road-to-devfest-bandung-2025",
    category: "Seminar",
    tags: ["Firebase", "AI", "Cloud", "Web Development"],
    imageSrc: "/speaking/rtd1.webp",
    title: {
      id: "AI-Powered Web Dev: Build and Deploy with Firebase Studio",
      en: "AI-Powered Web Dev: Build and Deploy with Firebase Studio",
    },
    subtitle: {
      id: "Road to DevFest Bandung 2025",
      en: "Road to DevFest Bandung 2025",
    },
    date: "23 Agustus 2025",
    time: "13.00 - 16.00 WIB",
    location: "Univ. Maranatha, Bandung",
    description: {
      id: "Membahas cara membangun dan men-deploy aplikasi web berbasis AI dengan lebih cepat menggunakan Firebase Studio. Berkolaborasi dengan M. Haidar Hanif & Didiet Agus P. dalam topik Web & Cloud.",
      en: "Discussing how to build and deploy AI-based web applications faster using Firebase Studio. Collaborating with M. Haidar Hanif & Didiet Agus P. on Web & Cloud topics.",
    },
    bullets: {
      id: [
        "Eksplorasi fitur Firebase Studio untuk pengembangan Web AI",
        "Demo live: Dari kode lokal ke deployment cloud global",
        "Best practice arsitektur modern untuk skalabilitas",
        "Diskusi panel tentang masa depan tools developer",
      ],
      en: [
        "Exploring Firebase Studio features for AI Web development",
        "Live demo: From local code to global cloud deployment",
        "Modern architecture best practices for scalability",
        "Panel discussion on the future of developer tools",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: GDG Bandung",
      en: "Organized by: GDG Bandung",
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://gdgbandung.com/devfestbdg1" },
      {
        labelId: "Lihat Materi",
        labelEn: "View Materials",
        href: "https://docs.google.com/presentation/d/15mex0XAbWizYXZz9iA7qk8AQ6sppjD832s0mAN8I1mI/edit?usp=sharing",
      },
      {
        labelId: "Lihat Dokumentasi",
        labelEn: "View Documentation",
        href: "https://drive.google.com/drive/folders/1BPs6G7ZFFIuHEtuh-re96brN_A4Ci_SY",
      },
    ],
  },
  {
    id: "kelasfullstack-mahasiswa-ti-ai",
    category: "Webinar",
    tags: ["Career", "AI", "Student", "Personal Branding"],
    imageSrc: "/speaking/mahasiswa-ti.webp",
    title: {
      id: "Mahasiswa TI: Bertahan di Era AI? Hadapi Karir & Stand Out",
      en: "IT Students: Surviving in AI Era? Career & Standing Out",
    },
    subtitle: {
      id: "Webinar KelasFullstack",
      en: "KelasFullstack Webinar",
    },
    date: "09 Agustus 2025",
    time: "19.00 WIB - Selesai",
    location: "Live on Zoom",
    description: {
      id: "Webinar eksklusif bareng praktisi industri yang akan membantu memahami arah karier di tengah gempuran teknologi. Diskusi seru tentang strategi bertahan dan cara 'stand out' di tengah keramaian talent.",
      en: "Exclusive webinar with industry practitioners to help understand career directions amidst tech disruption. Exciting discussion on survival strategies and how to 'stand out' in the talent crowd.",
    },
    bullets: {
      id: [
        "Tips menghadapi ketidakpastian karir di era AI",
        "Strategi personal branding untuk mahasiswa IT",
        "Insight industri dari Ahmad Oriza, Safira, & Aditya Fakhri",
        "Sesi tanya jawab seputar pengembangan diri",
      ],
      en: [
        "Tips for facing career uncertainty in the AI era",
        "Personal branding strategies for IT students",
        "Industry insights from Ahmad Oriza, Safira, & Aditya Fakhri",
        "Q&A session on self-development",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: KelasFullstack",
      en: "Organized by: KelasFullstack",
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://www.codepolitan.com/events/mahasiswa-ti-bertahan-di-era-al-gimana-caranya-di-tengah-derasnya-perkembangan-teknologi/" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://www.youtube.com/live/h6gUQZMTeEM?si=TElq259BGy79KrGz" },
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
    time: "19.00 - 21.00 WIB",
    location: "Live on Zoom",
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
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://s.id/qdswebdev" },
      {
        labelId: "Lihat Materi",
        labelEn: "View Materials",
        href: "https://docs.google.com/presentation/d/1da5uz69oyHXmcXYrkpo7Sifyz4NvPsrttZgCo_WvW-A/edit?usp=sharing",
      },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/GOMbDAFmD-s" },
    ],
  },
  {
    id: "dunia-coding-react-workshop",
    category: "Workshop",
    tags: ["React JS", "Web Development", "Portfolio"],
    imageSrc: "/speaking/workshop-react.webp",
    title: {
      id: "Workshop Basic React JS: Bangun Website Perpustakaan",
      en: "Basic React JS Workshop: Build a Library Website",
    },
    subtitle: {
      id: "Dunia Coding Academy Workshop",
      en: "Dunia Coding Academy Workshop",
    },
    date: "18 - 19 Juli 2025",
    time: "19.30 WIB - 21.30 WIB",
    location: "Live on Google Meet",
    description: {
      id: "Workshop intensif 2 hari belajar React JS dari dasar sekaligus membangun portofolio website perpustakaan. Cocok untuk pemula yang ingin terjun ke dunia Front-End Developer.",
      en: "2-day intensive workshop learning React JS from scratch while building a library website portfolio. Suitable for beginners wanting to dive into Front-End Development.",
    },
    bullets: {
      id: [
        "Konsep dasar React JS (Components, Props, State)",
        "Studi kasus: Membuat Website Perpustakaan",
        "Source code & sertifikat",
        "Sesi diskusi dan tanya jawab interaktif",
      ],
      en: [
        "React JS basic concepts (Components, Props, State)",
        "Case study: Building a Library Website",
        "Source code & certificate",
        "Interactive Q&A and discussion sessions",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: Dunia Coding Academy",
      en: "Organized by: Dunia Coding Academy",
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://duniacoding.id/event/belajar-react-sekaligus-bikin-portofolio-yuk-bangun-website-perpustakaan-sendiri-2025" },
      { labelId: "Materi Day 1", labelEn: "Material Day 1", href: "https://docs.google.com/presentation/d/1284ZvzWPA43_kpwd5D5tUm_WDj5r288dJ6e92Y5Fs1A/edit?usp=sharing" },
      { labelId: "Materi Day 2", labelEn: "Material Day 2", href: "https://docs.google.com/presentation/d/1za7BJYLiuaFBY3I92u25O0P8Wxm_xlgIvVNkCnfaBhI/edit?usp=sharing" },
      { labelId: "Rekaman Day 1", labelEn: "Recording Day 1", href: "https://youtu.be/B9XmU5tklrs" },
      { labelId: "Rekaman Day 2", labelEn: "Recording Day 2", href: "https://youtu.be/1OGmf6ve5y0" },
    ],
  },
  {
    id: "kelasfullstack-landing-page-ai",
    category: "Webinar",
    tags: ["AI", "Web Development", "Landing Page", "No-Code"],
    imageSrc: "/speaking/landing-page.webp",
    title: {
      id: "Membuat Landing Page Produk Pro dengan AI Assist Coding",
      en: "Building Pro Product Landing Page with AI Assist Coding",
    },
    subtitle: {
      id: "Live Class KelasFullstack",
      en: "KelasFullstack Live Class",
    },
    date: "03 Juli 2025",
    time: "15.00 WIB - Selesai",
    location: "Live on Zoom",
    description: {
      id: "Belajar bikin landing page profesional siap jualan pakai AI tools! Mulai dari dasar, pakai builder kayak Bolt & V0, plus workflow coding dengan bantuan AI. Praktis, tanpa ribet ngoding dari nol!",
      en: "Learn to build professional landing pages ready for sales using AI tools! Starting from basics, using builders like Bolt & V0, plus AI-assisted coding workflow. Practical, no complex coding from scratch!",
    },
    bullets: {
      id: [
        "Dasar pembuatan landing page profesional",
        "Menggunakan AI tools (Bolt & V0)",
        "Workflow coding dengan bantuan AI",
        "Tanpa ribet ngoding dari nol",
      ],
      en: [
        "Basics of professional landing page creation",
        "Using AI tools (Bolt & V0)",
        "AI-assisted coding workflow",
        "Hassle-free, no coding from scratch",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: KelasFullstack",
      en: "Organized by: KelasFullstack",
    },
    links: [
      {
        labelId: "Lihat Materi",
        labelEn: "View Materials",
        href: "https://www.canva.com/design/DAGr6N5jvG8/TEeme4vMbPU3pMBHyOdGOA/edit?utm_content=DAGr6N5jvG8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
      {
        labelId: "Tonton Rekaman",
        labelEn: "Watch Recording",
        href: "https://www.youtube.com/live/hfdJPrgO-zk?si=UxGPwdqgA7Y7kcpZ",
      },
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
    time: "09.00-17.00 WIB",
    location: "Univ. Pendidikan Indonesia, Bandung",
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
    date: "16 Mei 2025",
    time: "15.00 - 17.00 WIB",
    location: "Live on Zoom",
    description: {
      id: "Workshop interaktif membahas dasar-dasar penggunaan Tailwind CSS untuk styling website modern. Peserta akan belajar mulai dari instalasi, konsep utility-first, hingga praktik membangun tampilan responsif secara langsung.",
      en: "Interactive workshop covering the basics of using Tailwind CSS for modern website styling. Participants will learn from installation, utility-first concepts, to hands-on practice building responsive layouts.",
    },
    links: [
      { labelId: "Halaman Event", labelEn: "Event Page", href: "https://pay.codepolitan.com/?slug=program-fullstack-web-development-lifetime&coupon=ADITYAFAKHRI" },
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://www.codepolitan.com/course/intro/tailwind-dasar-desain-web-kilat-jaman-sekarang/" },
      { labelId: "Lihat Materi", labelEn: "View Materials", href: "https://docs.google.com/presentation/d/1nGqXbBuwlhv9QoQYRzyEyz4wBaRWhOcxdYu-Kfr4p1k/edit?usp=sharing" },
    ],
    organizer: { id: "Diselenggarakan oleh: KelasFullstack", en: "Organized by: KelasFullstack" },
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
    time: "10.00 - 11.30 WIB",
    location: "Live on Zoom",
    description: {
      id: "Sesi masterclass membahas langkah-langkah praktis dan roadmap lengkap untuk menjadi programmer profesional, mulai dari dasar hingga siap kerja di industri. Cocok untuk pemula maupun yang ingin memperkuat fondasi karier di bidang teknologi.",
      en: "Masterclass session discussing practical steps and complete roadmap to become a professional programmer, from basics to industry-ready. Suitable for beginners and those looking to strengthen their career foundation in technology.",
    },
    links: [
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/JDOhYebLaCw" },
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
    location: "Live on Zoom",
    description: {
      id: "Demo langsung penggunaan AI untuk membangun website dengan tools seperti v0.dev dan Bolt. Mengenalkan AI-driven development untuk developer pemula dan praktisi industri kreatif.",
      en: "Live demo of using AI to build websites with tools like v0.dev and Bolt. Introducing AI-driven development for beginner developers and creative industry practitioners.",
    },
    links: [
      { labelId: "Tonton Rekaman", labelEn: "Watch Recording", href: "https://youtu.be/jztfelvj8UM" },
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
      id: "More Than Just Code: Build a Powerful Personal Brand as a Developer",
      en: "More Than Just Code: Build a Powerful Personal Brand as a Developer",
    },
    subtitle: {
      id: "Membangun Personal Brand yang Kuat sebagai Developer",
      en: "Building a Strong Personal Brand as a Developer",
    },
    date: "20 Maret 2025",
    time: "15.00 - 16.00 WIB",
    location: "Live on Zoom",
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
    location: "Universitas Muhammadiyah Surakarta, Jawa Tengah",
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
    id: "bangkit-widyatama-2023",
    category: "Seminar",
    tags: ["Career Development", "Bangkit", "Google"],
    imageSrc: "/speaking/bangkit.webp",
    title: {
      id: "Sukses Karir IT Bersama Bangkit 2024",
      en: "IT Career Success with Bangkit 2024",
    },
    subtitle: {
      id: "by Bangkit Ambassador Universitas Widyatama",
      en: "by Bangkit Ambassador Widyatama University",
    },
    date: "08 Desember 2023",
    time: "13.00 - 16.00 WIB",
    location: "Univ. Widyatama, Bandung",
    description: {
      id: "Sebagai Bangkit 2023 Distinction Graduate dan GDSC Lead Widyatama, berbagi pengalaman tentang perjalanan karir IT melalui program Bangkit dan ekosistem Google Developer Student Clubs.",
      en: "As Bangkit 2023 Distinction Graduate and GDSC Lead Widyatama, sharing experiences about IT career journey through Bangkit program and Google Developer Student Clubs ecosystem.",
    },
    bullets: {
      id: [
        "Pengalaman mengikuti program Bangkit Academy",
        "Tips sukses dalam program pembelajaran intensif",
        "Peluang karir setelah lulus dari Bangkit",
        "Peran komunitas dalam pengembangan karir teknologi",
      ],
      en: [
        "Experience participating in Bangkit Academy program",
        "Tips for success in intensive learning programs",
        "Career opportunities after graduating from Bangkit",
        "The role of community in technology career development",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: Bangkit Ambassador & GDSC Universitas Widyatama",
      en: "Organized by: Bangkit Ambassador & GDSC Widyatama University",
    },
  },
  {
    id: "gdgoc-info-session",
    category: "Info Session",
    tags: ["Community", "Career Development"],
    imageSrc: "/speaking/gdgoc.webp",
    title: {
      id: "Empowering Your Tech Future: Discover Google Developer on Campus Widyatama!",
      en: "Empowering Your Tech Future: Discover Google Developer on Campus Widyatama!",
    },
    subtitle: { id: "GDGOC Info Session", en: "GDGOC Info Session" },
    date: "24 November 2024",
    time: "19.00- 21.00 WIB",
    location: "Live on Google Meet",
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
    id: "gdsc-info-session-2023",
    category: "Info Session",
    tags: ["Community", "Career Development", "GDSC"],
    imageSrc: "/speaking/gdsc2023.webp",
    title: {
      id: "GDSC Info Session: Kickstart Your Tech Career with GDSC",
      en: "GDSC Info Session: Kickstart Your Tech Career with GDSC",
    },
    subtitle: { id: "GDSC Widyatama Info Session", en: "GDSC Widyatama Info Session" },
    date: "21 Oktober 2023",
    time: "19.30 - 20.30 WIB",
    location: "Live on Google Meet",
    description: {
      id: "Info session GDSC Widyatama yang membahas peluang dan manfaat bergabung dengan Google Developer Student Clubs. Dipandu oleh Hadian Rahmat (Former Lead GDSC Widyatama 2020) dan Aditya Fakhri Riansyah (Lead GDSC Widyatama 2023).",
      en: "GDSC Widyatama info session discussing opportunities and benefits of joining Google Developer Student Clubs. Led by Hadian Rahmat (Former Lead GDSC Widyatama 2020) and Aditya Fakhri Riansyah (Lead GDSC Widyatama 2023).",
    },
    bullets: {
      id: [
        "Mengenal GDSC dan ekosistem Google Developer",
        "Peluang belajar dan networking di komunitas teknologi",
        "Pengalaman dari Former Lead dan Current Lead GDSC",
        "Tips memaksimalkan manfaat dari komunitas teknologi",
      ],
      en: [
        "Getting to know GDSC and Google Developer ecosystem",
        "Learning and networking opportunities in tech communities",
        "Experiences from Former Lead and Current Lead GDSC",
        "Tips to maximize benefits from tech communities",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: GDSC Widyatama University",
      en: "Organized by: GDSC Widyatama University",
    },
  },
  {
    id: "mezink-programming-101",
    category: "Workshop",
    tags: ["Programming", "Beginner", "Coding"],
    imageSrc: "/speaking/mezink.webp",
    title: {
      id: "Programming 101: Exploring the Coding Universe",
      en: "Programming 101: Exploring the Coding Universe",
    },
    subtitle: {
      id: "Mezink Academy Live Workshop",
      en: "Mezink Academy Live Workshop",
    },
    date: "25 Agustus",
    time: "19.30 WIB",
    location: "Live on Zoom",
    description: {
      id: "Workshop live interaktif untuk pemula yang ingin menjelajahi dunia pemrograman. Membahas dasar-dasar coding dan membangun fondasi yang kuat untuk perjalanan belajar programming.",
      en: "Interactive live workshop for beginners who want to explore the programming world. Discussing coding basics and building a strong foundation for the programming learning journey.",
    },
    bullets: {
      id: [
        "Pengenalan dasar pemrograman dan coding universe",
        "Memahami logika pemrograman untuk pemula",
        "Tips memilih bahasa pemrograman pertama",
        "Praktik langsung dengan mentor berpengalaman",
      ],
      en: [
        "Introduction to programming basics and coding universe",
        "Understanding programming logic for beginners",
        "Tips for choosing your first programming language",
        "Hands-on practice with experienced mentor",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: Mezink Academy",
      en: "Organized by: Mezink Academy",
    },
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
    time: "15.30 - 16.30 WIB",
    location: "Live on Zoom",
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
  {
    id: "uiuxindo-mindo-talk-1",
    category: "Talkshow",
    tags: ["Front-End", "Career", "Self-Taught"],
    imageSrc: "/speaking/uiuixindo.webp",
    title: {
      id: "Kiat Praktis Belajar Front-End Development Secara Otodidak Tanpa Modal",
      en: "Practical Tips for Self-Taught Front-End Development Without Capital",
    },
    subtitle: {
      id: "Mindo-Talk: TECHNOLOGY SERIES #1",
      en: "Mindo-Talk: TECHNOLOGY SERIES #1",
    },
    date: "30 April 2024",
    time: "19.00 - 20.00 WIB",
    location: "Live on Discord",
    description: {
      id: "Diskusi santai membahas strategi dan tips praktis belajar Front-End Development secara otodidak tanpa biaya, mulai dari roadmap belajar hingga tips mendapatkan pekerjaan.",
      en: "Casual discussion on strategies and practical tips for self-taught Front-End Development without cost, covering learning roadmaps to job hunting tips.",
    },
    bullets: {
      id: [
        "Tips belajar coding otodidak yang efektif",
        "Pemanfaatan sumber belajar gratis berkualitas",
        "Membangun portofolio tanpa modal",
        "Networking dan personal branding untuk pemula",
      ],
      en: [
        "Effective self-taught coding tips",
        "Leveraging high-quality free learning resources",
        "Building a portfolio without capital",
        "Networking and personal branding for beginners",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: UIUXINDO",
      en: "Organized by: UIUXINDO",
    },
    links: [],
  },
  {
    id: "gdsc-tech-ramadan-1",
    category: "Webinar",
    tags: ["IT Student", "Career", "Self-Development"],
    imageSrc: "/speaking/tech-ramadan.webp",
    title: {
      id: "Unleashing Your Potential as an IT Student",
      en: "Unleashing Your Potential as an IT Student",
    },
    subtitle: {
      id: "#TechRamadanSeries1 GDSC Polines x GDSC Widyatama",
      en: "#TechRamadanSeries1 GDSC Polines x GDSC Widyatama",
    },
    date: "22 Maret 2024",
    time: "14.30 - 16.00 WIB",
    location: "Live on Zoom",
    description: {
      id: "Sharing session santai ngabuburit membahas tips dan trik memaksimalkan potensi sebagai mahasiswa IT agar siap menghadapi dunia kerja.",
      en: "Casual sharing session while waiting for iftar, discussing tips and tricks to maximize potential as an IT student to be ready for the professional world.",
    },
    bullets: {
      id: [
        "Menggali potensi diri di luar perkuliahan",
        "Pentingnya komunitas untuk pertumbuhan karir",
        "Tips menyeimbangkan akademik dan organisasi",
        "Persiapan karir sejak masa kuliah",
      ],
      en: [
        "Unlocking self-potential beyond lectures",
        "Importance of communities for career growth",
        "Tips for balancing academics and organizations",
        "Career preparation since college days",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: GDSC Polines x GDSC Widyatama",
      en: "Organized by: GDSC Polines x GDSC Widyatama",
    },
    links: [],
  },
  {
    id: "dinotis-coding-pemula-2022",
    category: "Webinar",
    tags: ["Beginner", "Coding", "Career"],
    imageSrc: "/speaking/dinotis.webp",
    title: {
      id: "Begini Langkah Pertama Belajar Coding Untuk Pemula",
      en: "First Steps to Learn Coding for Beginners",
    },
    subtitle: {
      id: "#DinotisEdu",
      en: "#DinotisEdu",
    },
    date: "06 November 2022",
    time: "19.45 - 21.00 WIB",
    location: "Live on Dinotis",
    description: {
      id: "Sesi webinar untuk pemula yang ingin memulai perjalanan belajar coding. Membahas langkah-langkah praktis dan roadmap untuk memulai karir sebagai developer.",
      en: "Webinar session for beginners who want to start their coding journey. Discussing practical steps and roadmap to start a career as a developer.",
    },
    bullets: {
      id: [
        "Langkah pertama memulai belajar coding",
        "Memilih bahasa pemrograman yang tepat untuk pemula",
        "Sumber belajar gratis dan berkualitas",
        "Tips konsisten dalam belajar coding",
      ],
      en: [
        "First steps to start learning coding",
        "Choosing the right programming language for beginners",
        "Free and quality learning resources",
        "Tips for consistency in learning coding",
      ],
    },
    organizer: {
      id: "Diselenggarakan oleh: Dinotis",
      en: "Organized by: Dinotis",
    },
  },
]
