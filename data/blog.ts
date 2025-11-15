export type BlogPost = {
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  author?: string
  tags: string[]
  imageSrc?: string
  relatedPosts?: string[]
}

const blogs = {
  "ai-web-development": {
    title: "Mengintegrasikan AI dalam Pengembangan Web Modern",
    excerpt: "Bagaimana AI meningkatkan UX dan efisiensi pada aplikasi web.",
    content: `
      <p>AI membuka peluang besar untuk menghadirkan pengalaman pengguna yang lebih cerdas dan efisien. Mulai dari rekomendasi konten hingga chatbot, integrasi AI kini menjadi bagian penting dari aplikasi web modern.</p>
      <h2>Use Case Utama</h2>
      <ul>
        <li>Rekomendasi konten personal</li>
        <li>Chatbot customer service 24/7</li>
        <li>Deteksi anomali pada data</li>
      </ul>
      <h2>Teknologi</h2>
      <ul>
        <li>Model foundation via API (OpenAI, Claude)</li>
        <li>Embeddings untuk pencarian semantik</li>
        <li>Server-side orchestration</li>
      </ul>
      <h2>Tantangan</h2>
      <ul>
        <li>Privasi data dan kepatuhan</li>
        <li>Bias model</li>
        <li>Biaya inferensi</li>
      </ul>
      <p>Dengan desain arsitektur yang tepat, AI dapat meningkatkan value aplikasi tanpa mengorbankan keandalan dan privasi.</p>
    `,
    date: "12 Apr 2023",
    readTime: "8 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Web Development", "Machine Learning", "UX", "API"],
    imageSrc: "/placeholder.svg?height=400&width=800",
    relatedPosts: ["nextjs-vs-react", "typescript-best-practices"],
  },
  "nextjs-vs-react": {
    title: "Next.js vs React: Kapan Menggunakan Masing-masing?",
    excerpt: "Perbandingan fitur, performa, dan use-case Next.js vs React.",
    content: `
      <p>React adalah library UI fleksibel, sementara Next.js adalah framework di atas React yang menyediakan SSR/SSG, routing, dan optimasi bawaan. Memilih keduanya bergantung pada kebutuhan SEO, performa, dan skala aplikasi.</p>
      <h2>React</h2>
      <ul>
        <li>Fleksibel, minimal opini</li>
        <li>Butuh setup tambahan untuk SSR/SEO</li>
      </ul>
      <h2>Next.js</h2>
      <ul>
        <li>SSR/SSG/ISR built-in</li>
        <li>File-based routing, image optimization</li>
      </ul>
      <h2>Rekomendasi</h2>
      <ul>
        <li>Blog/E-commerce: Next.js</li>
        <li>Dashboard internal SPA: React</li>
      </ul>
      <p>Untuk sebagian besar web modern, Next.js menjadi sweet spot berkat fitur produksi siap pakai.</p>
    `,
    date: "28 Mar 2023",
    readTime: "6 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["React", "Next.js", "Frontend", "JavaScript", "Framework"],
    imageSrc: "/placeholder.svg?height=400&width=800",
    relatedPosts: ["ai-web-development", "typescript-best-practices"],
  },
  "typescript-best-practices": {
    title: "Praktik Terbaik TypeScript untuk Proyek Skala Besar",
    excerpt: "Strategi type system, arsitektur, dan tooling untuk skala besar.",
    content: `
      <p>TypeScript meningkatkan keandalan dan DX pada aplikasi besar. Praktik terbaik meliputi strict mode, pemisahan domain types, utility types, dan linting konsisten.</p>
      <h2>Fundamental</h2>
      <ul>
        <li>Aktifkan <code>strict</code> dan <code>noImplicitAny</code></li>
        <li>Gunakan <code>type</code> untuk union/intersection, <code>interface</code> untuk kontrak publik</li>
      </ul>
      <h2>Organisasi</h2>
      <ul>
        <li>Feature-based structure</li>
        <li>Barrel files untuk ekspor</li>
      </ul>
      <h2>Tooling</h2>
      <ul>
        <li>ESLint + tsconfig paths</li>
        <li>Project references untuk monorepo</li>
      </ul>
      <p>Dengan pendekatan sistematis, TypeScript memudahkan scaling tim dan kode.</p>
    `,
    date: "15 Feb 2023",
    readTime: "10 min",
    category: "TypeScript",
    author: "Aditya Fakhri Riansyah",
    tags: ["TypeScript", "JavaScript", "Best Practices", "Architecture", "Development"],
    imageSrc: "/placeholder.svg?height=400&width=800",
    relatedPosts: ["nextjs-vs-react", "ai-web-development"],
  },
  "responsive-design-2023": {
    title: "Tren Desain Responsif di 2023",
    excerpt: "Teknik layout modern, fluid typography, dan aksesibilitas.",
    content: `
      <p>Desain responsif terus berevolusi: container queries, fluid typography, dan dark mode menjadi standar baru. Fokus pada aksesibilitas dan performa untuk semua perangkat.</p>
      <ul>
        <li>CSS Grid/Flexbox untuk layout adaptif</li>
        <li>Container queries untuk komponen reaktif</li>
        <li>Prefers-color-scheme untuk theme</li>
      </ul>
    `,
    date: "03 Jan 2023",
    readTime: "5 min",
    category: "UI/UX",
    author: "Aditya Fakhri Riansyah",
    tags: ["Responsive", "CSS", "Design", "Accessibility"],
    imageSrc: "/placeholder.svg?height=200&width=400",
    relatedPosts: ["nextjs-vs-react"],
  },
  "serverless-architecture": {
    title: "Memahami Arsitektur Serverless",
    excerpt: "Konsep, use-case, dan praktik implementasi serverless.",
    content: `
      <p>Serverless menghilangkan kebutuhan pengelolaan server dengan fungsi on-demand. Cocok untuk API ringan, event-driven apps, dan batch jobs.</p>
      <ul>
        <li>FaaS: AWS Lambda, Cloud Functions</li>
        <li>Keuntungan: skalabilitas, biaya pay-as-you-go</li>
        <li>Tantangan: cold start, observability</li>
      </ul>
    `,
    date: "19 Dec 2022",
    readTime: "7 min",
    category: "Backend",
    author: "Aditya Fakhri Riansyah",
    tags: ["Serverless", "Cloud", "Architecture"],
    imageSrc: "/placeholder.svg?height=200&width=400",
    relatedPosts: ["ai-web-development"],
  },
  "mentoring-junior-developers": {
    title: "Tips Mentoring untuk Developer Junior",
    excerpt: "Strategi efektif membimbing dan mengembangkan developer junior.",
    content: `
      <p>Mentoring efektif berfokus pada growth mindset, feedback konstruktif, dan pendelegasian bertahap. Bangun lingkungan belajar yang aman dan suportif.</p>
      <ul>
        <li>Pair programming dan code review</li>
        <li>Goal-setting yang terukur (OKR)</li>
        <li>Rencana belajar berjangka</li>
      </ul>
    `,
    date: "05 Nov 2022",
    readTime: "6 min",
    category: "Career",
    author: "Aditya Fakhri Riansyah",
    tags: ["Mentoring", "Career", "Leadership"],
    imageSrc: "/placeholder.svg?height=200&width=400",
    relatedPosts: ["responsive-design-2023"],
  },
} as const

export type BlogId = keyof typeof blogs
export default blogs