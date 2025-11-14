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
    company: "CodePolitan",
    dateRange: { id: "Sep 2024 - Sekarang", en: "Sep 2024 - Present" },
    location: "Cimahi",
    bullets: {
      id: [
        "Membuat konten tutorial dan kelas pemrograman terstruktur, meningkatkan keterlibatan pengguna sebesar 30% dan menarik 2.000+ pelajar baru di berbagai platform.",
        "Mendesain dan menyampaikan silabus pemrograman yang progresif dan praktis, menyesuaikan dengan kebutuhan dunia nyata.",
        "Memimpin konsultasi online mingguan, memberikan bimbingan personal, troubleshooting, dan mentorship untuk mempercepat pertumbuhan peserta.",
      ],
      en: [
        "Creating tutorial content and structured programming classes, increasing user engagement by 30% and attracting 2,000+ new learners across various platforms.",
        "Designing and delivering progressive and practical programming syllabi, adapting to real-world needs.",
        "Leading weekly online consultations, providing personal guidance, troubleshooting, and mentorship to accelerate participant growth.",
      ],
    },
    tags: ["Mentoring", "Content Creation", "YouTube", "Programming"],
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