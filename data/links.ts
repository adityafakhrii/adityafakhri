export interface TranslatableText {
  id: string
  en: string
}

export interface LinkItem {
  id: string
  title: string
  description: TranslatableText
  url: string
  imageSrc: string
  categoryId: string
  categoryName: TranslatableText
  badge?: TranslatableText
}

export type CategoryIconType = "BookOpen" | "Shirt" | "Monitor" | "Video" | "Sparkles"

export interface LinkCategory {
  id: string
  name: TranslatableText
  sectionTitle: TranslatableText
  description: TranslatableText
  icon: CategoryIconType
  items: LinkItem[]
}

export const linkCategories: LinkCategory[] = [
  {
    id: "buku-it",
    name: {
      id: "Buku IT",
      en: "IT Books",
    },
    sectionTitle: {
      id: "Rekomendasi Buku IT",
      en: "IT Book Recommendations",
    },
    description: {
      id: "Rekomendasi buku fisik pilihan untuk memperdalam ilmu teknologi & pemrograman",
      en: "Curated physical book recommendations to master technology & programming",
    },
    icon: "BookOpen",
    items: [
      {
        id: "coding-ai",
        title: "Panduan Coding Menggunakan AI untuk Pemula",
        description: {
          id: "Panduan praktis belajar coding dan membangun aplikasi dibantu AI untuk pemula",
          en: "Practical guide to learning coding and building applications with AI for beginners",
        },
        url: "https://s.shopee.co.id/60SCV1xFQi",
        imageSrc: "https://www.gambaryuk.com/1791434300126-3wwjoy.webp",
        categoryId: "buku-it",
        categoryName: {
          id: "Buku",
          en: "Book",
        },
        badge: {
          id: "Terbaru",
          en: "New",
        },
      },
      {
        id: "pengantar-si",
        title: "Buku Pengantar Sistem Informasi",
        description: {
          id: "Rekomendasi buku untuk memahami dasar-dasar Sistem Informasi",
          en: "Recommended book to understand the fundamentals of Information Systems",
        },
        url: "https://s.shopee.co.id/1gJDL2Aygv",
        imageSrc: "https://www.gambaryuk.com/1791434293352-ph4heq.webp",
        categoryId: "buku-it",
        categoryName: {
          id: "Buku",
          en: "Book",
        },
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        description: {
          id: "Rekomendasi produk untuk belajar Machine Learning",
          en: "Recommended product for learning Machine Learning",
        },
        url: "https://s.shopee.co.id/W7Fwbchwe",
        imageSrc: "https://www.gambaryuk.com/1791434298995-gv2ir6.webp",
        categoryId: "buku-it",
        categoryName: {
          id: "Buku",
          en: "Book",
        },
      },
    ],
  },
  {
    id: "jersey",
    name: {
      id: "Jersey",
      en: "Jerseys",
    },
    sectionTitle: {
      id: "Rekomendasi Jersey",
      en: "Jersey Recommendations",
    },
    description: {
      id: "Rekomendasi jersey original pilihan untuk koleksi dan olahraga",
      en: "Curated original jersey recommendations for sport and collections",
    },
    icon: "Shirt",
    items: [
      {
        id: "chelsea-home-2026-27",
        title: "Chelsea Home 2026/27 Original",
        description: {
          id: "Jersey Chelsea Home 2026/27 Original resmi untuk koleksi dan kenyamanan mendukung The Blues",
          en: "Official Chelsea Home 2026/27 Original jersey for your collection and cheering for The Blues",
        },
        url: "https://s.shopee.co.id/6q1xJGlHIm",
        imageSrc: "https://www.gambaryuk.com/1793591576881-ql2m3l.webp",
        categoryId: "jersey",
        categoryName: {
          id: "Jersey",
          en: "Jersey",
        },
        badge: {
          id: "Original",
          en: "Original",
        },
      },
    ],
  },
  {
    id: "setup-kerja",
    name: {
      id: "Setup Kerja",
      en: "Workspace Setup",
    },
    sectionTitle: {
      id: "Rekomendasi Setup Kerja",
      en: "Workspace Setup Recommendations",
    },
    description: {
      id: "Rekomendasi perlengkapan dan aksesoris penunjang produktivitas kerja harian",
      en: "Curated workspace gear and accessories for daily work productivity",
    },
    icon: "Monitor",
    items: [],
  },
  {
    id: "setup-content-creator",
    name: {
      id: "Setup Content Creator",
      en: "Content Creator Setup",
    },
    sectionTitle: {
      id: "Rekomendasi Setup Content Creator",
      en: "Content Creator Setup Recommendations",
    },
    description: {
      id: "Rekomendasi perlengkapan audio, visual, dan lighting untuk produksi konten",
      en: "Curated audio, visual, and lighting gear for content creation",
    },
    icon: "Video",
    items: [],
  },
  {
    id: "rekomendasi-produk-lainnya",
    name: {
      id: "Rekomendasi Produk Lainnya",
      en: "Other Recommendations",
    },
    sectionTitle: {
      id: "Rekomendasi Produk Lainnya",
      en: "Other Curated Recommendations",
    },
    description: {
      id: "Berbagai produk pilihan bermanfaat lainnya di luar kategori utama",
      en: "Various other curated useful products beyond the main categories",
    },
    icon: "Sparkles",
    items: [],
  },
]

