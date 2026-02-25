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
  "ai-website-builder-2026": {
    title: "10 AI Website Builder Terbaik 2026 — Bikin Web Tanpa Ngoding!",
    excerpt: "Kumpulan AI website builder terbaik di 2026 yang bisa bantu lo bikin website, app, bahkan portfolio — tanpa nulis satu baris kode pun.",
    content: `
      <style>
        .ai-builder-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 0;
          list-style: none;
          margin: 2rem 0;
        }
        .ai-builder-card {
          display: flex;
          gap: 1.25rem;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          transition: box-shadow 0.2s, transform 0.2s;
          align-items: flex-start;
        }
        .ai-builder-card:hover {
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .ai-builder-number {
          flex-shrink: 0;
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          font-weight: 700;
          font-size: 1.125rem;
        }
        .ai-builder-body {
          flex: 1;
          min-width: 0;
        }
        .ai-builder-body h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1.125rem;
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        .ai-builder-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: 0.5rem;
          border: none;
          background: #1a1a1a;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          margin-top: 0.75rem;
          transition: opacity 0.2s, transform 0.15s;
          cursor: pointer;
        }
        .ai-builder-btn:hover {
          opacity: 0.8;
          transform: translateX(2px);
        }
        .ai-builder-btn svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
          stroke: #fff;
          transition: transform 0.2s;
        }
        .ai-builder-btn:hover svg {
          transform: translateX(3px);
        }
        .ai-builder-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: hsl(var(--muted-foreground));
          margin: 0;
        }
        .ai-builder-cta {
          margin-top: 3rem;
          padding: 2rem;
          border-radius: 1rem;
          background: linear-gradient(135deg, hsl(280 70% 50%), hsl(320 80% 55%), hsl(350 80% 60%));
          text-align: center;
          color: #fff;
        }
        .ai-builder-cta h2 {
          color: #fff !important;
          margin-top: 0 !important;
          font-size: 1.5rem;
        }
        .ai-builder-cta p {
          color: rgba(255,255,255,0.9);
          margin-bottom: 1.25rem;
        }
        .ai-builder-cta a {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          background: #fff;
          color: hsl(280 70% 50%);
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ai-builder-cta a:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        @media (max-width: 480px) {
          .ai-builder-card {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1.25rem;
          }
          .ai-builder-number {
            width: 2.5rem;
            height: 2.5rem;
            font-size: 1rem;
          }
          .ai-builder-cta {
            padding: 1.5rem 1rem;
          }
        }
      </style>

      <p>Di era 2026, bikin website nggak harus ribet. Cukup deskripsiin ide lo ke AI, dan boom — website langsung jadi. Nah, berikut ini <strong>10 AI Website Builder terbaik</strong> yang wajib lo coba!</p>

      <div class="ai-builder-list">

        <div class="ai-builder-card">
          <div class="ai-builder-number">1</div>
          <div class="ai-builder-body">
            <h3>Readdy – AI Website Builder Instan</h3>
            <p class="ai-builder-desc">Tinggal tulis mau bikin apa, websitenya langsung jadi. Cocok buat lo yang mau launch cepet tanpa ribet ngoding.</p>
            <a class="ai-builder-btn" href="https://readdy.ai" target="_blank" rel="noopener noreferrer">readdy.ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">2</div>
          <div class="ai-builder-body">
            <h3>HeroUI Chat – Prompt ke React App</h3>
            <p class="ai-builder-desc">Screenshot + prompt → langsung jadi React app. Buat lo yang capek slicing manual dari Figma.</p>
            <a class="ai-builder-btn" href="https://heroui.chat" target="_blank" rel="noopener noreferrer">heroui.chat <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">3</div>
          <div class="ai-builder-body">
            <h3>Co.dev – Text to App Builder</h3>
            <p class="ai-builder-desc">Cuma jelasin ide lo, aplikasinya langsung ke-generate. Startup mode ON tanpa tim dev gede.</p>
            <a class="ai-builder-btn" href="https://co.dev" target="_blank" rel="noopener noreferrer">co.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">4</div>
          <div class="ai-builder-body">
            <h3>Chariot AI – Website Tanpa Coding</h3>
            <p class="ai-builder-desc">Deskripsiin visi lo, AI-nya bangunin websitenya. Cepet, responsif, tinggal publish.</p>
            <a class="ai-builder-btn" href="https://chariotai.com" target="_blank" rel="noopener noreferrer">chariotai.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">5</div>
          <div class="ai-builder-body">
            <h3>Frontly – No Code Business App</h3>
            <p class="ai-builder-desc">Bikin internal tools & app bisnis dalam menit. Tanpa 1 baris code pun.</p>
            <a class="ai-builder-btn" href="https://frontly.ai" target="_blank" rel="noopener noreferrer">frontly.ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">6</div>
          <div class="ai-builder-body">
            <h3>Greta – App + Growth Stack Builder</h3>
            <p class="ai-builder-desc">Nggak cuma bikin app, tapi sekalian growth tools-nya. Analytics, email, automation — satu paket.</p>
            <a class="ai-builder-btn" href="https://greta.questera.ai" target="_blank" rel="noopener noreferrer">greta.questera.ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">7</div>
          <div class="ai-builder-body">
            <h3>Rork – AI Mobile App Builder</h3>
            <p class="ai-builder-desc">React Native app langsung jadi. iOS & Android sekali jalan.</p>
            <a class="ai-builder-btn" href="https://rork.com" target="_blank" rel="noopener noreferrer">rork.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">8</div>
          <div class="ai-builder-body">
            <h3>Create.xyz – Words to Website</h3>
            <p class="ai-builder-desc">Ngetik ide → langsung jadi website atau tools. Cepet banget buat prototyping.</p>
            <a class="ai-builder-btn" href="https://create.xyz" target="_blank" rel="noopener noreferrer">create.xyz <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">9</div>
          <div class="ai-builder-body">
            <h3>A0.dev – React Native Builder</h3>
            <p class="ai-builder-desc">Masukin ide, dapet full React Native app. Development time dipangkas brutal.</p>
            <a class="ai-builder-btn" href="https://a0.dev" target="_blank" rel="noopener noreferrer">a0.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">10</div>
          <div class="ai-builder-body">
            <h3>Contra Portfolio – AI Portfolio Builder</h3>
            <p class="ai-builder-desc">Freelancer wajib tahu ini. Portfolio jadi dalam menit, bisa langsung dapet klien.</p>
            <a class="ai-builder-btn" href="https://contra.com/portfolios" target="_blank" rel="noopener noreferrer">contra.com/portfolios <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

      </div>

      <h2>Kesimpulan</h2>
      <p>AI website builder di 2026 udah bener-bener next level. Lo tinggal punya ide, jelasin ke AI, dan semuanya langsung jadi — dari website, mobile app, sampe portfolio. Nggak ada alasan lagi buat nggak mulai bikin sesuatu hari ini!</p>

      <div class="ai-builder-cta">
        <h2>Mau Lebih Banyak Tips Teknologi & AI?</h2>
        <p>Follow Instagram gue buat dapet update terbaru seputar AI, web dev, dan tech tips keren lainnya!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "25 Feb 2026",
    readTime: "5 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Website Builder", "No Code", "Tools", "2026", "Web Development"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771997631397-6vwuqy.webp",
    relatedPosts: ["ai-web-development"],
  },
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
    relatedPosts: ["ai-website-builder-2026", "nextjs-vs-react", "typescript-best-practices"],
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