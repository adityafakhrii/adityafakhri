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

  "ai-vs-developer-2026": {
    title: "AI vs Developer: Apakah Programmer Bakal Digantiin di 2026?",
    excerpt: "Debat panas soal masa depan programmer di era AI. Apakah developer bakal punah, atau justru makin dibutuhkan? Simak analisis lengkapnya.",
    content: `
      <style>
        .avd-hero { position: relative; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); color: hsl(var(--foreground)); margin-bottom: 2.5rem; overflow: hidden; }
        .avd-hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 300px; height: 300px; background: radial-gradient(circle, hsl(var(--border)) 0%, transparent 70%); pointer-events: none; }
        .avd-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.5rem; margin: 0 0 0.75rem 0; }
        .avd-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .avd-verdict-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin: 2rem 0; }
        .avd-verdict-card { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); transition: transform 0.2s, box-shadow 0.2s; }
        .avd-verdict-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.08); }
        .avd-verdict-card.pro-ai { border-top: 3px solid hsl(var(--primary)); }
        .avd-verdict-card.pro-dev { border-top: 3px solid hsl(var(--border)); }
        .avd-verdict-card h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.75rem 0; color: hsl(var(--foreground)); }
        .avd-verdict-card ul { margin: 0; padding-left: 1.25rem; }
        .avd-verdict-card li { font-size: 0.92rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin-bottom: 0.4rem; }
        .avd-stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 2rem 0; }
        .avd-stat-card { text-align: center; padding: 1.5rem 1rem; border-radius: 1rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); }
        .avd-stat-num { font-size: 2rem; font-weight: 800; color: hsl(var(--foreground)); }
        .avd-stat-label { font-size: 0.82rem; color: hsl(var(--muted-foreground)); margin-top: 0.35rem; }
        .avd-callout { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2rem 0; }
        .avd-callout p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .avd-callout strong { color: hsl(var(--foreground)); }
        .avd-timeline { position: relative; margin: 2rem 0; padding-left: 2rem; border-left: 2px solid hsl(var(--border)); }
        .avd-timeline-item { position: relative; margin-bottom: 1.75rem; padding-left: 1rem; }
        .avd-timeline-item::before { content: ''; position: absolute; left: -2.55rem; top: 0.35rem; width: 12px; height: 12px; border-radius: 50%; background: hsl(var(--primary)); border: 2px solid hsl(var(--background)); }
        .avd-timeline-item h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.25rem 0; color: hsl(var(--foreground)); }
        .avd-timeline-item p { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        .avd-quote { padding: 2rem; border-radius: 1rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); text-align: center; margin: 2rem 0; }
        .avd-quote p { font-size: 1.1rem; font-weight: 500; font-style: italic; line-height: 1.7; color: hsl(var(--foreground)); margin: 0 0 0.5rem 0; }
        .avd-quote span { font-size: 0.82rem; color: hsl(var(--muted-foreground)); }
        .avd-skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0; }
        .avd-skill-card { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .avd-skill-card h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.35rem 0; color: hsl(var(--foreground)); }
        .avd-skill-card p { font-size: 0.85rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        .avd-cta { margin-top: 3rem; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--primary)); text-align: center; color: hsl(var(--primary-foreground)); }
        .avd-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.5rem; }
        .avd-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.25rem; font-size: 1rem; }
        .avd-cta a { display: inline-block; padding: 0.75rem 2rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .avd-cta a:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.25); }
        .avd-section-title { font-size: 1.25rem; font-weight: 700; margin: 2.5rem 0 1rem 0; color: hsl(var(--foreground)); display: flex; align-items: center; gap: 0.5rem; }
        @media (max-width: 768px) { .avd-verdict-row, .avd-stat-row, .avd-skills-grid { grid-template-columns: 1fr; } .avd-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="avd-hero">
        <h2>AI vs Developer — Siapa yang Menang?</h2>
        <p>Perdebatan ini makin panas di 2026. AI bisa bikin website, nulis kode, bahkan debug error. Tapi apakah itu berarti programmer bakal kehilangan pekerjaan? Mari kita bedah dari berbagai sudut — fakta, data, dan realita lapangan.</p>
      </div>

      <p>Kalau lo aktif di dunia tech, pasti udah sering denger kalimat kayak gini: <em>"Ngapain belajar ngoding? Bentar lagi AI yang ngoding."</em> — dan honestly, wajar sih kalau banyak yang mikir gitu. AI di 2026 emang udah <strong>gila-gilaan</strong>.</p>

      <p>Tapi sebelum lo panik dan ganti karir jadi tukang kopi artisanal, yuk kita lihat dulu data dan faktanya. Spoiler: jawabannya <strong>nggak sesimpel itu.</strong></p>

      <div class="avd-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>Data & Fakta 2026</div>

      <div class="avd-stat-row">
        <div class="avd-stat-card">
          <div class="avd-stat-num">92%</div>
          <div class="avd-stat-label">Developer pakai AI tools setiap hari (GitHub Survey 2026)</div>
        </div>
        <div class="avd-stat-card">
          <div class="avd-stat-num">3.2x</div>
          <div class="avd-stat-label">Peningkatan produktivitas dengan AI pair programming</div>
        </div>
        <div class="avd-stat-card">
          <div class="avd-stat-num">+28%</div>
          <div class="avd-stat-label">Kenaikan lowongan developer di Asia Tenggara (Q1 2026)</div>
        </div>
      </div>

      <p>Iya, lo baca bener. Meskipun AI makin canggih, lowongan kerja developer malah <strong>naik</strong>. Kok bisa? Karena demand terhadap software juga ikut meledak. AI bikin cost development turun → lebih banyak bisnis yang bisa afford bikin software → butuh lebih banyak developer buat manage, iterate, dan scale.</p>

      <div class="avd-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>Argumen: "AI Bakal Gantiin Developer"</div>

      <div class="avd-verdict-row">
        <div class="avd-verdict-card pro-ai">
          <h3>Yang AI Udah Bisa</h3>
          <ul>
            <li>Generate boilerplate code dalam detik</li>
            <li>Bikin landing page dari prompt teks</li>
            <li>Auto-fix bugs dan suggest refactoring</li>
            <li>Generate unit tests otomatis</li>
            <li>Convert desain Figma ke kode</li>
            <li>Bikin fullstack app sederhana (CRUD)</li>
          </ul>
        </div>
        <div class="avd-verdict-card pro-dev">
          <h3>Yang AI Masih Struggle</h3>
          <ul>
            <li>Arsitektur sistem yang kompleks & scalable</li>
            <li>Debugging edge cases di production</li>
            <li>Memahami konteks bisnis & user needs</li>
            <li>Keputusan trade-off (performa vs cost)</li>
            <li>Koordinasi antar tim & stakeholder</li>
            <li>Keamanan & compliance yang ketat</li>
          </ul>
        </div>
      </div>

      <div class="avd-callout">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg><strong>Key Insight:</strong> AI itu sangat bagus dalam mengeksekusi tugas yang well-defined. Tapi software development bukan cuma soal nulis kode — itu cuma ~20% dari pekerjaan developer. Sisanya? Problem solving, komunikasi, arsitektur, dan decision making.</p>
      </div>

      <div class="avd-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>Evolusi Peran Developer</div>

      <p>Yang berubah bukan <em>kebutuhan developer</em>, tapi <strong>cara kerjanya</strong>. Sama kayak dulu, kalkulator nggak bikin akuntan punah — malah bikin mereka bisa handle kerjaan yang lebih kompleks. Nah, AI juga gitu buat developer.</p>

      <div class="avd-timeline">
        <div class="avd-timeline-item">
          <h4>2020 — Manual Coding Era</h4>
          <p>Developer nulis semua kode dari scratch. Stack Overflow jadi andalan. Boilerplate makan waktu berjam-jam.</p>
        </div>
        <div class="avd-timeline-item">
          <h4>2022 — Copilot Era</h4>
          <p>GitHub Copilot muncul. Autocomplete makin pintar. Developer mulai jadi "code reviewer" buat AI output.</p>
        </div>
        <div class="avd-timeline-item">
          <h4>2024 — Vibe Coding Era</h4>
          <p>AI bisa generate full app dari prompt. Tools kayak v0.dev, Bolt, Lovable bikin development makin cepet.</p>
        </div>
        <div class="avd-timeline-item">
          <h4>2026 — AI-Augmented Developer Era</h4>
          <p>Developer jadi "AI orchestrator". Fokus berpindah ke arsitektur, quality assurance, dan strategic thinking. Kode ditulis 70% oleh AI, di-review dan di-tune oleh manusia.</p>
        </div>
      </div>

      <div class="avd-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>Developer Seperti Apa yang Tetap Relevan?</div>

      <p>Jawabannya: developer yang <strong>adaptif</strong>. Yang nggak cuma bisa nulis kode, tapi juga bisa berpikir secara strategis dan memanfaatkan AI sebagai force multiplier.</p>

      <div class="avd-skills-grid">
        <div class="avd-skill-card">
          <h4>Prompt Engineering</h4>
          <p>Kemampuan ngasih instruksi yang presisi ke AI tools. Prompt yang bagus = output yang 10x lebih baik.</p>
        </div>
        <div class="avd-skill-card">
          <h4>System Design</h4>
          <p>AI bisa bikin fitur, tapi nggak bisa bikin arsitektur yang scalable. Ini tetep domain manusia.</p>
        </div>
        <div class="avd-skill-card">
          <h4>Critical Thinking</h4>
          <p>AI bisa suggest, tapi lo yang decide. Evaluasi output AI butuh pemahaman mendalam tentang kode.</p>
        </div>
        <div class="avd-skill-card">
          <h4>Soft Skills</h4>
          <p>Komunikasi, leadership, empati — ini yang bikin lo beda dari AI dan irreplaceable di tim.</p>
        </div>
      </div>

      <div class="avd-quote">
        <p>"The best developers in 2026 are not those who write the most code, but those who solve the hardest problems with the least code."</p>
        <span>— Satya Nadella, CEO Microsoft</span>
      </div>

      <div class="avd-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>Kesimpulan: Jadi, Digantiin Nggak?</div>

      <p><strong>Jawaban singkat: TIDAK.</strong> Tapi perannya berubah secara fundamental.</p>

      <p>Developer yang cuma bisa nulis kode tanpa value tambah? Memang bakal makin tergeser. Tapi developer yang bisa <strong>berpikir kritis, memahami bisnis, dan memanfaatkan AI sebagai tools</strong>? Mereka justru makin berharga — karena supply-nya sedikit dan demand-nya gila-gilaan.</p>

      <p>Analogi paling pas: AI itu kayak <strong>power tools</strong>. Tukang kayu yang pakai gergaji listrik bukan berarti "digantiin mesin" — mereka jadi <strong>10x lebih produktif</strong>. Yang terancam cuma tukang kayu yang <em>nolak pakai gergaji listrik</em>.</p>

      <div class="avd-callout">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg><strong>Action Item buat lo:</strong> Mulai belajar pakai AI tools sekarang. Coba Cursor, GitHub Copilot, atau v0.dev. Bikin project kecil. Yang penting: jadiin AI partner, bukan ancaman.</p>
      </div>

      <div class="avd-cta">
        <h2>Mau Up-to-Date Soal AI & Dev?</h2>
        <p>Follow Instagram gue buat tips AI, vibe coding, career advice, dan update terbaru dunia tech!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "27 Apr 2026",
    readTime: "10 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Developer", "Career", "Opini", "2026", "Vibe Coding"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777263802558-hjhc43.webp",
    relatedPosts: ["ai-website-builder-2026", "ai-web-development", "cuan-dari-ai-2026"],
  },
  "cuan-dari-ai-2026": {
    title: "Cara Dapet Cuan dari AI di 2026 — 7 Side Hustle yang Bisa Lo Mulai Hari Ini",
    excerpt: "Nggak perlu jadi AI expert. Ini 7 cara nyata dapet penghasilan tambahan pakai AI tools di 2026 — dari freelance sampai bikin produk digital.",
    content: `
      <style>
        .cuan-hero { position: relative; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); color: hsl(var(--foreground)); margin-bottom: 2.5rem; overflow: hidden; }
        .cuan-hero::before { content: ''; position: absolute; bottom: -30%; right: -10%; width: 250px; height: 250px; background: radial-gradient(circle, hsl(var(--border)) 0%, transparent 70%); pointer-events: none; }
        .cuan-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.5rem; margin: 0 0 0.75rem 0; }
        .cuan-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .cuan-card-list { display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0; }
        .cuan-card { display: flex; gap: 1.5rem; padding: 1.75rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); transition: transform 0.2s, box-shadow 0.2s; align-items: flex-start; }
        .cuan-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); }
        .cuan-card-icon { flex-shrink: 0; width: 3.5rem; height: 3.5rem; display: flex; align-items: center; justify-content: center; border-radius: 1rem; font-size: 1.5rem; font-weight: 700; }
        .cuan-card-icon.i1 { background: hsl(var(--primary)); }
        .cuan-card-icon.i2 { background: hsl(var(--primary)); }
        .cuan-card-icon.i3 { background: hsl(var(--primary)); }
        .cuan-card-icon.i4 { background: hsl(var(--primary)); }
        .cuan-card-icon.i5 { background: hsl(var(--primary)); }
        .cuan-card-icon.i6 { background: hsl(var(--primary)); }
        .cuan-card-icon.i7 { background: hsl(var(--primary)); }
        .cuan-card-body { flex: 1; min-width: 0; }
        .cuan-card-body h3 { font-size: 1.15rem; font-weight: 700; margin: 0 0 0.35rem 0; color: hsl(var(--foreground)); }
        .cuan-card-subtitle { font-size: 0.78rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: hsl(var(--primary)); margin-bottom: 0.5rem; }
        .cuan-card-body p { font-size: 0.92rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin: 0 0 0.75rem 0; }
        .cuan-tag-row { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.5rem; }
        .cuan-tag { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: 9999px; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); }
        .cuan-earning { display: inline-flex; align-items: center; gap: 0.3rem; font-size: 0.82rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 0.5rem; background: hsl(var(--muted)); color: hsl(var(--foreground)); border: 1px solid hsl(var(--border)); }
        .cuan-callout { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2rem 0; }
        .cuan-callout p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .cuan-callout strong { color: hsl(var(--foreground)); }
        .cuan-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin: 1.5rem 0; }
        .cuan-step { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); text-align: center; }
        .cuan-step-num { font-size: 1.5rem; font-weight: 800; color: hsl(var(--foreground)); }
        .cuan-step p { font-size: 0.82rem; color: hsl(var(--muted-foreground)); margin: 0.35rem 0 0 0; line-height: 1.5; }
        .cuan-section-title { font-size: 1.25rem; font-weight: 700; margin: 2.5rem 0 1rem 0; color: hsl(var(--foreground)); display: flex; align-items: center; gap: 0.5rem; }
        .cuan-cta { margin-top: 3rem; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--primary)); text-align: center; color: hsl(var(--primary-foreground)); }
        .cuan-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.5rem; }
        .cuan-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.25rem; font-size: 1rem; }
        .cuan-cta a { display: inline-block; padding: 0.75rem 2rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .cuan-cta a:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.25); }
        @media (max-width: 768px) { .cuan-card { flex-direction: column; gap: 1rem; padding: 1.25rem; } .cuan-steps { grid-template-columns: 1fr; } .cuan-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="cuan-hero">
        <h2>AI = Mesin Cuan di 2026</h2>
        <p>Lo nggak perlu jadi data scientist atau AI researcher buat dapet cuan dari AI. Cukup paham cara pakainya, kreatif dikit, dan konsisten — penghasilan tambahan bisa ngalir bulan ini juga.</p>
      </div>

      <p>AI di 2026 bukan lagi barang eksklusif buat tech bro Silicon Valley. Sekarang, <strong>siapa aja</strong> — freelancer, mahasiswa, karyawan, bahkan ibu rumah tangga — bisa leverage AI buat dapet penghasilan tambahan. Yang lo butuhin cuma laptop, internet, dan kemauan belajar.</p>

      <p>Gue udah kumpulin <strong>7 side hustle paling realistis</strong> yang bisa lo mulai hari ini. Bukan teori doang — ini semua udah dibuktiin orang-orang di komunitas gue. Let's go!</p>

      <div class="cuan-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>7 Side Hustle AI yang Bisa Lo Mulai Hari Ini</div>

      <div class="cuan-card-list">

        <div class="cuan-card">
          <div class="cuan-card-icon i1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #1</div>
            <h3>Jasa Bikin Website Pakai AI (Vibe Coding)</h3>
            <p>Ini yang paling gampang dan paling cepet hasilnya. Pakai tools kayak Lovable, Bolt.new, atau v0.dev, lo bisa bikin website profesional dalam <strong>hitungan jam</strong> — bukan minggu. Landing page, portfolio, company profile — semuanya bisa.</p>
            <p>Targetnya? UMKM, freelancer, content creator yang butuh website tapi nggak mau ribet. Charge Rp 500rb - 3jt per project, dan lo bisa handle 3-5 project per minggu.</p>
            <div class="cuan-earning">Potensi: Rp 2-15 juta/bulan</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">Lovable</span>
              <span class="cuan-tag">Bolt.new</span>
              <span class="cuan-tag">v0.dev</span>
              <span class="cuan-tag">Framer AI</span>
            </div>
          </div>
        </div>

        <div class="cuan-card">
          <div class="cuan-card-icon i2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #2</div>
            <h3>AI Content Writer / Copywriter</h3>
            <p>Bisnis butuh konten — social media, blog, email marketing, product description. Pakai ChatGPT atau Claude sebagai "mesin draft", lo tinggal edit, tambah personality, dan deliver. Quality tetap tinggi, speed 5x lebih cepat dari nulis manual.</p>
            <p>Lo bisa jual paket: 30 caption Instagram Rp 500rb, 4 artikel blog Rp 1jt, email sequence Rp 1.5jt. Klien happy karena cepet, lo happy karena efisien.</p>
            <div class="cuan-earning">Potensi: Rp 3-10 juta/bulan</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">ChatGPT</span>
              <span class="cuan-tag">Claude</span>
              <span class="cuan-tag">Jasper</span>
              <span class="cuan-tag">Copy.ai</span>
            </div>
          </div>
        </div>

        <div class="cuan-card">
          <div class="cuan-card-icon i3"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #3</div>
            <h3>Jual Desain & Asset Digital (AI-Generated)</h3>
            <p>Pakai Midjourney, DALL-E, atau Leonardo AI buat bikin asset digital: icon pack, illustration set, social media template, wallpaper, mockup, dll. Jual di marketplace kayak Gumroad, Creative Market, atau Etsy.</p>
            <p>Ini model passive income — sekali bikin, bisa dijual berkali-kali. Satu pack icon yang bagus bisa dihargai $10-50 dan terjual ratusan kali.</p>
            <div class="cuan-earning">Potensi: Rp 1-20 juta/bulan (passive)</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">Midjourney</span>
              <span class="cuan-tag">DALL-E</span>
              <span class="cuan-tag">Canva AI</span>
              <span class="cuan-tag">Gumroad</span>
            </div>
          </div>
        </div>

        <div class="cuan-card">
          <div class="cuan-card-icon i4"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #4</div>
            <h3>Bikin & Jual Micro-SaaS / AI Tools</h3>
            <p>Ini level up-nya. Pakai AI builder, lo bisa bikin tools kecil yang solve masalah spesifik — invoice generator, habit tracker, AI chatbot buat CS, dll. Jual subscription Rp 50-200rb/bulan per user.</p>
            <p>100 user x Rp 100rb = Rp 10jt/bulan recurring. Butuh effort di awal, tapi setelah jalan, ini bisa jadi <strong>mesin uang otomatis</strong>.</p>
            <div class="cuan-earning">Potensi: Rp 5-50 juta/bulan (recurring)</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">Lovable</span>
              <span class="cuan-tag">Bolt.new</span>
              <span class="cuan-tag">Supabase</span>
              <span class="cuan-tag">Stripe</span>
            </div>
          </div>
        </div>

        <div class="cuan-card">
          <div class="cuan-card-icon i5"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 10 3 12 0v-5"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #5</div>
            <h3>Jadi AI Mentor / Trainer</h3>
            <p>Banyak banget orang dan perusahaan yang mau belajar pakai AI tapi bingung mulai dari mana. Lo bisa jadi mentor-nya! Workshop AI buat kantor, private mentoring, atau bikin kelas online.</p>
            <p>Workshop 2 jam bisa charge Rp 3-10jt per sesi. Private mentoring Rp 500rb-1jt per jam. Dan ini nggak perlu lo jadi PhD — cukup ahead of the curve dan bisa ngajarin dengan bahasa yang gampang.</p>
            <div class="cuan-earning">Potensi: Rp 5-30 juta/bulan</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">Workshop</span>
              <span class="cuan-tag">Mentoring</span>
              <span class="cuan-tag">Online Course</span>
              <span class="cuan-tag">Corporate Training</span>
            </div>
          </div>
        </div>

        <div class="cuan-card">
          <div class="cuan-card-icon i6"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #6</div>
            <h3>AI Video & Konten Creator</h3>
            <p>Bikin konten YouTube, TikTok, atau Reels tentang AI tips, tutorial, atau review tools. AI bisa bantu scriptwriting, thumbnail, bahkan editing. Monetisasi dari ads, sponsorship, dan affiliate links.</p>
            <p>Channel YouTube niche AI dengan 10K subscribers bisa hasilin Rp 2-5jt/bulan dari AdSense aja. Tambahin affiliate link ke AI tools — tiap sign-up bisa dapet $5-50 komisi.</p>
            <div class="cuan-earning">Potensi: Rp 3-25 juta/bulan</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">YouTube</span>
              <span class="cuan-tag">TikTok</span>
              <span class="cuan-tag">CapCut AI</span>
              <span class="cuan-tag">Affiliate</span>
            </div>
          </div>
        </div>

        <div class="cuan-card">
          <div class="cuan-card-icon i7"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></div>
          <div class="cuan-card-body">
            <div class="cuan-card-subtitle">Side Hustle #7</div>
            <h3>Jasa AI Automation untuk Bisnis</h3>
            <p>Bisnis butuh automasi — tapi kebanyakan nggak tau caranya. Lo bisa jual jasa setup: chatbot CS pakai AI, auto-reply email, generate laporan otomatis, atau social media scheduler yang terintegrasi AI.</p>
            <p>Satu project automasi bisa charge Rp 2-10jt. Dan biasanya klien butuh maintenance bulanan juga — recurring income lagi!</p>
            <div class="cuan-earning">Potensi: Rp 5-20 juta/bulan</div>
            <div class="cuan-tag-row">
              <span class="cuan-tag">Make.com</span>
              <span class="cuan-tag">Zapier</span>
              <span class="cuan-tag">n8n</span>
              <span class="cuan-tag">ChatGPT API</span>
            </div>
          </div>
        </div>

      </div>

      <div class="cuan-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>Langkah Memulai</div>

      <p>Bingung mau mulai dari mana? Ini 3 langkah simpel:</p>

      <div class="cuan-steps">
        <div class="cuan-step">
          <div class="cuan-step-num">01</div>
          <p><strong>Pilih 1 Side Hustle</strong> yang paling match sama skill dan interest lo. Jangan serakah, fokus satu dulu.</p>
        </div>
        <div class="cuan-step">
          <div class="cuan-step-num">02</div>
          <p><strong>Bikin 1 Portofolio / Sample</strong> — bikin contoh kerja buat ditunjukin ke calon klien. Gratis dulu juga gapapa.</p>
        </div>
        <div class="cuan-step">
          <div class="cuan-step-num">03</div>
          <p><strong>Mulai Promosi</strong> — post di LinkedIn, Instagram, atau join komunitas freelancer. Klien pertama selalu yang paling susah.</p>
        </div>
      </div>

      <div class="cuan-callout">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.2 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg><strong>Pro Tip:</strong> Jangan nunggu sempurna. Klien pertama lo nggak peduli lo pakai AI atau manual — yang penting hasilnya bagus dan tepat waktu. Mulai sekarang, improve sambil jalan.</p>
      </div>

      <div class="cuan-section-title"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.35rem;flex-shrink:0;"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>Kenapa Harus Sekarang?</div>

      <p>Window of opportunity buat AI side hustle itu <strong>sekarang</strong>. Kenapa?</p>

      <p>1. <strong>Kompetisi masih rendah</strong> — kebanyakan orang masih "wait and see" soal AI. Lo yang gerak duluan bakal punya first-mover advantage.</p>
      <p>2. <strong>Tools makin murah dan gampang</strong> — banyak AI tools yang free atau freemium. Barrier to entry hampir nol.</p>
      <p>3. <strong>Demand meledak</strong> — semua bisnis mau pakai AI tapi nggak tau caranya. Lo bisa jadi jembatan-nya.</p>

      <p>2-3 tahun dari sekarang, market bakal makin crowded. Tapi kalau lo udah punya portfolio, testimoni, dan client base sekarang — lo udah ahead of the game. </p>

      <div class="cuan-cta">
        <h2>Mau Tips AI & Side Hustle Tiap Minggu?</h2>
        <p>Follow Instagram gue buat dapet update tools AI, tips freelance, dan strategi dapet cuan dari teknologi!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "27 Apr 2026",
    readTime: "12 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Side Hustle", "Freelance", "Monetisasi", "2026", "Career"],
    imageSrc: "/placeholder.svg?height=400&width=800",
    relatedPosts: ["ai-vs-developer-2026", "ai-website-builder-2026"],
  },

  "prompt-portfolio-website-2026": {
    title: "5 Prompt Website Portofolio Keren 🚀",
    excerpt: "Kumpulan 5 prompt AI untuk bikin website portofolio keren — dari dark hacker aesthetic sampai creative experimental. Tinggal copas, hasilnya Dribbble-ready!",
    content: `
      <style>
        .prompt-portfolio-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          margin: 2rem 0;
        }
        .prompt-portfolio-card {
          border-radius: 1.25rem;
          overflow: hidden;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .prompt-portfolio-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          transform: translateY(-3px);
        }
        .prompt-portfolio-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          display: block;
        }
        .prompt-portfolio-body {
          padding: 1.75rem;
        }
        .prompt-portfolio-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          color: #fff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .prompt-portfolio-badge.badge-1 { background: linear-gradient(135deg, #0F172A, #1E293B); }
        .prompt-portfolio-badge.badge-2 { background: linear-gradient(135deg, #0F172A, #22C55E); }
        .prompt-portfolio-badge.badge-3 { background: linear-gradient(135deg, #14A7A0, #F76B8A); }
        .prompt-portfolio-badge.badge-4 { background: linear-gradient(135deg, #1E293B, #3B82F6); }
        .prompt-portfolio-badge.badge-5 { background: linear-gradient(135deg, #7C3AED, #EC4899); }
        .prompt-portfolio-body h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: hsl(var(--foreground));
        }
        .prompt-portfolio-desc {
          font-size: 0.92rem;
          line-height: 1.65;
          color: hsl(var(--muted-foreground));
          margin: 0 0 1.25rem 0;
        }
        .prompt-portfolio-prompt-wrapper {
          margin-top: 0.25rem;
        }
        .prompt-portfolio-prompt-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .prompt-portfolio-prompt-label {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: hsl(var(--primary));
          font-family: inherit;
        }
        .prompt-portfolio-copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: 0.5rem;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--card));
          color: hsl(var(--foreground));
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .prompt-portfolio-copy-btn:hover {
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          border-color: hsl(var(--primary));
        }
        .prompt-portfolio-copy-btn.copied {
          background: #22C55E;
          color: #fff;
          border-color: #22C55E;
        }
        .prompt-portfolio-prompt {
          position: relative;
          background: hsl(var(--muted));
          border: 1px solid hsl(var(--border));
          border-radius: 0.75rem;
          padding: 1.25rem;
          font-size: 0.82rem;
          line-height: 1.7;
          color: hsl(var(--foreground));
          font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace;
          white-space: pre-wrap;
          word-break: break-word;
        }
        .prompt-portfolio-cta {
          margin-top: 3rem;
          padding: 2.5rem 2rem;
          border-radius: 1.25rem;
          background: linear-gradient(135deg, #7C3AED, #3B82F6, #14B8A6);
          text-align: center;
          color: #fff;
        }
        .prompt-portfolio-cta h2 {
          color: #fff !important;
          margin-top: 0 !important;
          font-size: 1.5rem;
        }
        .prompt-portfolio-cta p {
          color: rgba(255,255,255,0.9);
          margin-bottom: 1.25rem;
          font-size: 1rem;
        }
        .prompt-portfolio-cta a {
          display: inline-block;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          background: #fff;
          color: #7C3AED;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .prompt-portfolio-cta a:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        }
        @media (max-width: 480px) {
          .prompt-portfolio-body { padding: 1.25rem; }
          .prompt-portfolio-prompt { font-size: 0.75rem; padding: 1rem; }
          .prompt-portfolio-copy-btn { font-size: 0.72rem; padding: 0.35rem 0.7rem; }
        }
      </style>

      <p>Bikin website portofolio itu kadang yang paling ribet bukan codingnya — tapi <strong>nentuin konsep desainnya</strong>. Mau clean tapi beda, mau gelap tapi nggak norak, mau kreatif tapi tetep rapi.</p>

      <p>Nah, buat lo yang lagi butuh inspirasi atau mau langsung pake AI tools (kayak <strong>v0.dev</strong>, <strong>Lovable</strong>, <strong>Bolt</strong>, dll) buat generate website portofolio, gue udah siapin <strong>5 prompt siap pakai</strong> yang bisa langsung lo copas. Masing-masing punya vibe dan tema yang beda — dari hacker aesthetic sampai Gen Z playful. Let's go! 🚀</p>

      <div class="prompt-portfolio-list">

        <div class="prompt-portfolio-card">
          <img class="prompt-portfolio-img" src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1776937092158-pmhcqv.webp" alt="Mysterious Clean Hacker Portfolio" loading="lazy" />
          <div class="prompt-portfolio-body">
            <div class="prompt-portfolio-badge badge-1">🖤 #1 — Mysterious Clean Hacker</div>
            <h3>Dark Minimal with Stealth-Tech Feel</h3>
            <p class="prompt-portfolio-desc">Buat lo yang suka vibes gelap, clean, dan mysterious. Desain ini terinspirasi dari terminal dan hacker aesthetic — tapi tanpa berlebihan ala cyberpunk. Cocok buat developer backend, security engineer, atau siapa aja yang mau keliatan <em>elite</em>.</p>
            <div class="prompt-portfolio-prompt-wrapper">
              <div class="prompt-portfolio-prompt-header">
                <div class="prompt-portfolio-prompt-label">📋 Prompt</div>
                <button class="prompt-portfolio-copy-btn">📄 Copy Prompt</button>
              </div>
              <div class="prompt-portfolio-prompt">Create a clean, mysterious, high-end portfolio UI for "Aditya Fakhri" with a modern hacker aesthetic (minimal, no neon, no cyberpunk cliché). Use dark tones (#000103, #0F172A, #51596B) with subtle cyan/green accents.

Present as a Dribbble-ready layout in two screens: the first shows a minimal hero with a cryptic headline and structured project cards styled like system panels, the second shows case studies, skills, and services arranged like data modules with a sharp CTA. Use precise typography, strong hierarchy, and subtle terminal-style micro-interactions to create a premium, stealth-tech feel.</div>
            </div>
          </div>
        </div>

        <div class="prompt-portfolio-card">
          <img class="prompt-portfolio-img" src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1776937095546-znstzy.webp" alt="Dark Elite Portfolio" loading="lazy" />
          <div class="prompt-portfolio-body">
            <div class="prompt-portfolio-badge badge-2">💚 #2 — Dark Elite</div>
            <h3>Premium Minimalist with Apple-Level Elegance</h3>
            <p class="prompt-portfolio-desc">Inspirasi dari desain Apple dan Stripe — gelap, elegan, dan calm. Cocok buat lo yang mau tampil profesional tanpa perlu rame. Spacing yang lega dan kontras yang kuat bikin portofolio ini keliatan mahal tanpa effort lebih.</p>
            <div class="prompt-portfolio-prompt-wrapper">
              <div class="prompt-portfolio-prompt-header">
                <div class="prompt-portfolio-prompt-label">📋 Prompt</div>
                <button class="prompt-portfolio-copy-btn" onclick="copyPrompt(this)">📄 Copy Prompt</button>
              </div>
              <div class="prompt-portfolio-prompt">Create a premium, dark-themed portfolio UI for "Aditya Fakhri" with a minimalist and high-end aesthetic, designed for Dribbble presentation in two clean screens. Use a deep dark background (#0F172A) with subtle green accent (#22C55E), refined typography, and elegant spacing inspired by Apple and Stripe design language.

The first screen should present a minimal hero section with a strong statement and a refined introduction, followed by selected projects displayed in a sophisticated card layout. The second screen should focus on detailed case studies, technical expertise, and a selective contact call-to-action. The overall design must feel calm, exclusive, and premium, relying on spacing, contrast, and subtle motion cues rather than visual noise.</div>
            </div>
          </div>
        </div>

        <div class="prompt-portfolio-card">
          <img class="prompt-portfolio-img" src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1776937096054-j1gv4w.webp" alt="Gen Z Personal Brand Portfolio" loading="lazy" />
          <div class="prompt-portfolio-body">
            <div class="prompt-portfolio-badge badge-3">🩷 #3 — Gen Z Personal Brand</div>
            <h3>Playful, Colorful, and Social-Media Friendly</h3>
            <p class="prompt-portfolio-desc">Kalau lo pengen portofolio yang fun, relatable, dan berasa kayak feed socmed yang rapih — ini dia. Warna-warna cerah tapi tetep terkontrol, copywriting yang relate sama anak muda, dan layout yang mobile-first banget.</p>
            <div class="prompt-portfolio-prompt-wrapper">
              <div class="prompt-portfolio-prompt-header">
                <div class="prompt-portfolio-prompt-label">📋 Prompt</div>
                <button class="prompt-portfolio-copy-btn" onclick="copyPrompt(this)">📄 Copy Prompt</button>
              </div>
              <div class="prompt-portfolio-prompt">Create a playful and modern personal branding portfolio UI for "Aditya Fakhri" targeting Gen Z developers, formatted as a two-screen Dribbble showcase. Use bright but controlled colors like teal (#14A7A0) and pink (#F76B8A), inspired by social media UI patterns but still clean and structured.

The first screen should focus on an engaging hero section with relatable Indonesian Gen Z copywriting, followed by social proof and a visually engaging content preview section. The second screen should present free resources, a simplified project showcase, and a mentoring call-to-action. The layout should feel like a modern app feed but organized into a polished portfolio format, ensuring strong visual appeal and mobile-first friendliness while remaining clean enough for design showcase.</div>
            </div>
          </div>
        </div>

        <div class="prompt-portfolio-card">
          <img class="prompt-portfolio-img" src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1776937090341-jp3k6t.webp" alt="Minimal Tech Portfolio" loading="lazy" />
          <div class="prompt-portfolio-body">
            <div class="prompt-portfolio-badge badge-4">💙 #4 — Minimal Tech</div>
            <h3>Clean Developer Look Inspired by Notion & Vercel</h3>
            <p class="prompt-portfolio-desc">Minimalis tapi tetep aesthetic. Inspirasi dari Notion, Linear, dan Vercel — layout yang rapi, tipografi yang kuat, dan white space yang generous. Cocok buat fullstack developer atau AI mentor yang mau tampil clean dan trustworthy.</p>
            <div class="prompt-portfolio-prompt-wrapper">
              <div class="prompt-portfolio-prompt-header">
                <div class="prompt-portfolio-prompt-label">📋 Prompt</div>
                <button class="prompt-portfolio-copy-btn" onclick="copyPrompt(this)">📄 Copy Prompt</button>
              </div>
              <div class="prompt-portfolio-prompt">Create a clean and modern portfolio UI design for "Aditya Fakhri" as a Fullstack Developer and AI Mentor, presented as a Dribbble-ready layout split into two screens instead of one long page. The design should follow a minimal aesthetic inspired by Notion, Linear, and Vercel, using a monochrome base with subtle blue accents (#3B82F6), strong typography, and generous white space.

The first screen should focus on the hero section with a strong headline, short description, primary call-to-action, and a compact introduction with profile and key skills, followed by a neatly structured featured projects grid with clean cards. The second screen should continue with services, testimonials, content or education highlights, and a strong closing call-to-action. The layout must feel balanced, visually aesthetic, and optimized for presentation, with consistent spacing, rounded components, and a premium developer look suitable for Dribbble showcase.</div>
            </div>
          </div>
        </div>

        <div class="prompt-portfolio-card">
          <img class="prompt-portfolio-img" src="https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1776937094612-sq19ek.webp" alt="Creative Experimental Portfolio" loading="lazy" />
          <div class="prompt-portfolio-body">
            <div class="prompt-portfolio-badge badge-5">🔮 #5 — Creative Experimental</div>
            <h3>Bold, Asymmetrical, and Unconventional</h3>
            <p class="prompt-portfolio-desc">Buat lo yang nggak mau mainstream. Layout asimetris, tipografi bold, dan campuran light-dark section bikin portofolio ini beda dari yang lain. Cocok buat creative developer atau designer yang mau nunjukin sisi eksploratifnya.</p>
            <div class="prompt-portfolio-prompt-wrapper">
              <div class="prompt-portfolio-prompt-header">
                <div class="prompt-portfolio-prompt-label">📋 Prompt</div>
                <button class="prompt-portfolio-copy-btn" onclick="copyPrompt(this)">📄 Copy Prompt</button>
              </div>
              <div class="prompt-portfolio-prompt">Create a highly creative and experimental portfolio website for "Aditya Fakhri" using an asymmetrical layout, bold typography, and a mix of light and dark sections to create a unique and standout visual identity. The design should feel like a fusion between a designer portfolio and a developer playground, with a dynamic hero section, an interactive project grid with hover effects, a visual skills section using icons and motion, and a dedicated playground area for AI experiments or creative builds. The layout should intentionally break conventional structure but remain usable and responsive, especially on mobile. The tone should be bold, expressive, and unconventional while still maintaining clarity and usability.</div>
            </div>
          </div>
        </div>

      </div>

      <h2>Cara Pakenya Gimana?</h2>
      <p>Gampang banget! Tinggal copas prompt di atas ke AI tools favorit lo — bisa pake <strong>v0.dev</strong>, <strong>Lovable</strong>, <strong>Bolt.new</strong>, atau tool AI lainnya. Ganti nama "Aditya Fakhri" jadi nama lo, dan sesuaiin detail project/skill sesuai kebutuhan. Dalam hitungan menit, portofolio lo udah jadi dan siap dipamerin! ✨</p>

      <div class="prompt-portfolio-cta">
        <h2>Suka Konten Kayak Gini? 🔥</h2>
        <p>Follow Instagram gue buat dapet update terbaru seputar AI, prompt engineering, web dev, dan tips bikin portofolio keren!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "23 Apr 2026",
    readTime: "7 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Portfolio", "Prompt", "Web Design", "Vibe Coding", "2026"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1776937092158-pmhcqv.webp",
    relatedPosts: ["ai-website-builder-2026"],
  },
  "ai-website-builder-2026": {
    title: "30 AI Website Builder Terbaik 2026 — Bikin Web Tanpa Ngoding!",
    excerpt: "Kumpulan 30 AI website builder terbaik di 2026 yang bisa bantu lo bikin website, app, bahkan portfolio — tanpa nulis satu baris kode pun.",
    content: `
      <style>
        .ai-builder-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          padding: 0;
          list-style: none;
          margin: 2rem 0;
        }
        .ai-builder-card {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
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
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          font-weight: 700;
          font-size: 1rem;
        }
        .ai-builder-body {
          flex: 1;
          min-width: 0;
        }
        .ai-builder-body h3 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        .ai-builder-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 0.9rem;
          border-radius: 0.5rem;
          border: none;
          background: #1a1a1a;
          color: #fff;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          margin-top: 0.6rem;
          transition: opacity 0.2s, transform 0.15s;
          cursor: pointer;
        }
        .ai-builder-btn:hover {
          opacity: 0.8;
          transform: translateX(2px);
        }
        .ai-builder-btn svg {
          width: 12px;
          height: 12px;
          flex-shrink: 0;
          stroke: #fff;
          transition: transform 0.2s;
        }
        .ai-builder-btn:hover svg {
          transform: translateX(3px);
        }
        .ai-builder-desc {
          font-size: 0.88rem;
          line-height: 1.5;
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
        @media (max-width: 768px) {
          .ai-builder-list {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .ai-builder-card {
            flex-direction: column;
            gap: 0.75rem;
            padding: 1rem;
          }
          .ai-builder-number {
            width: 2.25rem;
            height: 2.25rem;
            font-size: 0.9rem;
          }
          .ai-builder-cta {
            padding: 1.5rem 1rem;
          }
        }
        .ai-top3-section {
          margin: 2rem 0 2.5rem 0;
        }
        .ai-top3-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: hsl(var(--foreground));
          margin-bottom: 1.25rem;
        }
        .ai-top3-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .ai-top3-card {
          position: relative;
          padding: 1.5rem;
          border-radius: 1rem;
          background: hsl(var(--card));
          border: 2px solid transparent;
          background-clip: padding-box;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ai-top3-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, hsl(280 70% 55%), hsl(340 80% 55%), hsl(30 90% 55%));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          pointer-events: none;
        }
        .ai-top3-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        .ai-top3-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, hsl(280 70% 55%), hsl(340 80% 55%));
          color: #fff;
          margin-bottom: 0.75rem;
        }
        .ai-top3-card h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 0.4rem 0;
          color: hsl(var(--foreground));
        }
        .ai-top3-card .ai-builder-desc {
          font-size: 0.88rem;
          margin-bottom: 0;
        }
        .ai-top3-card .ai-builder-btn {
          margin-top: 0.75rem;
        }
        @media (max-width: 768px) {
          .ai-top3-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <p>Di era 2026, bikin website nggak harus ribet. Cukup deskripsiin ide lo ke AI, dan boom — website langsung jadi. Nah, berikut ini <strong>30 AI Website Builder terbaik</strong> yang wajib lo coba!</p>

      <div class="ai-top3-section">
        <div class="ai-top3-title">Top 3 Rekomendasi Pribadi</div>
        <div class="ai-top3-grid">

          <div class="ai-top3-card">
            <div class="ai-top3-badge">#1 Pick</div>
            <h3>Lovable</h3>
            <p class="ai-builder-desc">Tulis ide → langsung jadi web app. Cocok buat MVP & startup yang butuh cepet launch.</p>
            <a class="ai-builder-btn" href="https://lovable.dev" target="_blank" rel="noopener noreferrer">lovable.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>

          <div class="ai-top3-card">
            <div class="ai-top3-badge">#2 Pick</div>
            <h3>V0.dev</h3>
            <p class="ai-builder-desc">Bikin landing page dalam hitungan menit. Fokus ke design clean + conversion tinggi.</p>
            <a class="ai-builder-btn" href="https://v0.dev" target="_blank" rel="noopener noreferrer">v0.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>

          <div class="ai-top3-card">
            <div class="ai-top3-badge">#3 Pick</div>
            <h3>Bolt.new</h3>
            <p class="ai-builder-desc">Dari frontend sampai backend, semua bisa. Cocok buat lo yang mau build app tanpa ribet setup.</p>
            <a class="ai-builder-btn" href="https://bolt.new" target="_blank" rel="noopener noreferrer">bolt.new <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>

        </div>
      </div>

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

        <div class="ai-builder-card">
          <div class="ai-builder-number">11</div>
          <div class="ai-builder-body">
            <h3>Tempo Labs – AI React Builder</h3>
            <p class="ai-builder-desc">Buat lo yang main React dan mau lebih sat-set. Frontend presisi + AI assist dalam satu tempat.</p>
            <a class="ai-builder-btn" href="https://tempo.new" target="_blank" rel="noopener noreferrer">tempo.new <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">12</div>
          <div class="ai-builder-body">
            <h3>Stunning – AI Landing Page</h3>
            <p class="ai-builder-desc">Landing page jadi dalam hitungan menit. Cocok buat validate ide atau jualan cepet.</p>
            <a class="ai-builder-btn" href="https://stunning.so" target="_blank" rel="noopener noreferrer">stunning.so <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">13</div>
          <div class="ai-builder-body">
            <h3>Base44 – Full-Stack Web App Builder</h3>
            <p class="ai-builder-desc">Bikin web app lengkap sama database bawaan. Tanpa setup backend ribet.</p>
            <a class="ai-builder-btn" href="https://base44.com" target="_blank" rel="noopener noreferrer">base44.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">14</div>
          <div class="ai-builder-body">
            <h3>Dora AI – Interactive Website Builder</h3>
            <p class="ai-builder-desc">Website interaktif & animatif tanpa coding. Design yang beda dari template biasa.</p>
            <a class="ai-builder-btn" href="https://dora.run/ai" target="_blank" rel="noopener noreferrer">dora.run/ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">15</div>
          <div class="ai-builder-body">
            <h3>Trickle – AI All-in-One Builder</h3>
            <p class="ai-builder-desc">Website, AI app, sampai form builder. Drag-drop tapi tetap powerful.</p>
            <a class="ai-builder-btn" href="https://trickle.so" target="_blank" rel="noopener noreferrer">trickle.so <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">16</div>
          <div class="ai-builder-body">
            <h3>Lindo AI – Instan Website Builder</h3>
            <p class="ai-builder-desc">Small business mau go online cepat? Ini bisa jadi solusi instan tanpa dev team.</p>
            <a class="ai-builder-btn" href="https://lindo.ai" target="_blank" rel="noopener noreferrer">lindo.ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">17</div>
          <div class="ai-builder-body">
            <h3>CodeDesign – AI Website Generator</h3>
            <p class="ai-builder-desc">Generate website profesional dalam menit. Simple tapi tetap clean & scalable.</p>
            <a class="ai-builder-btn" href="https://codedesign.ai" target="_blank" rel="noopener noreferrer">codedesign.ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">18</div>
          <div class="ai-builder-body">
            <h3>Wegic AI – Template + AI Automation</h3>
            <p class="ai-builder-desc">Template + AI automation bikin semuanya lebih cepat. Cocok buat yang nggak mau ribet.</p>
            <a class="ai-builder-btn" href="https://wegic.ai" target="_blank" rel="noopener noreferrer">wegic.ai <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">19</div>
          <div class="ai-builder-body">
            <h3>TheSys – AI-Driven Interface Builder</h3>
            <p class="ai-builder-desc">Kayak Figma + AI dalam satu tool. Buat lo yang bikin AI-driven interface.</p>
            <a class="ai-builder-btn" href="https://thesys.dev" target="_blank" rel="noopener noreferrer">thesys.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">20</div>
          <div class="ai-builder-body">
            <h3>Brizy – Drag & Drop + AI Builder</h3>
            <p class="ai-builder-desc">Drag-drop klasik tapi udah dibantu AI. Beginner friendly, hasil tetap profesional.</p>
            <a class="ai-builder-btn" href="https://brizy.io" target="_blank" rel="noopener noreferrer">brizy.io <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">21</div>
          <div class="ai-builder-body">
            <h3>Lovable – AI Web App Builder</h3>
            <p class="ai-builder-desc">Tulis ide → langsung jadi web app. Cocok buat MVP & startup yang butuh cepet launch.</p>
            <a class="ai-builder-btn" href="https://lovable.dev" target="_blank" rel="noopener noreferrer">lovable.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">22</div>
          <div class="ai-builder-body">
            <h3>V0.dev – AI Landing Page Builder</h3>
            <p class="ai-builder-desc">Bikin landing page dalam hitungan menit. Fokus ke design clean + conversion tinggi.</p>
            <a class="ai-builder-btn" href="https://v0.dev" target="_blank" rel="noopener noreferrer">v0.dev <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">23</div>
          <div class="ai-builder-body">
            <h3>Bolt.new – Fullstack AI Builder</h3>
            <p class="ai-builder-desc">Dari frontend sampai backend, semua bisa. Cocok buat lo yang mau build app tanpa ribet setup.</p>
            <a class="ai-builder-btn" href="https://bolt.new" target="_blank" rel="noopener noreferrer">bolt.new <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">24</div>
          <div class="ai-builder-body">
            <h3>Framer AI – Website Builder Modern</h3>
            <p class="ai-builder-desc">Design aesthetic + AI assist. Perfect buat portfolio & website profesional.</p>
            <a class="ai-builder-btn" href="https://framer.com" target="_blank" rel="noopener noreferrer">framer.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">25</div>
          <div class="ai-builder-body">
            <h3>Loopple – AI Website Builder</h3>
            <p class="ai-builder-desc">Generate website cepat dengan template modern. Simple, clean, dan gak bikin pusing.</p>
            <a class="ai-builder-btn" href="https://loopple.com" target="_blank" rel="noopener noreferrer">loopple.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">26</div>
          <div class="ai-builder-body">
            <h3>Uizard – AI Website Designer</h3>
            <p class="ai-builder-desc">Dari wireframe langsung jadi website. Cocok buat lo yang mulai dari ide kasar.</p>
            <a class="ai-builder-btn" href="https://uizard.io" target="_blank" rel="noopener noreferrer">uizard.io <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">27</div>
          <div class="ai-builder-body">
            <h3>Durable – Website Instan dengan AI</h3>
            <p class="ai-builder-desc">1 klik langsung jadi website bisnis. Cepet banget buat landing sederhana.</p>
            <a class="ai-builder-btn" href="https://durable.co" target="_blank" rel="noopener noreferrer">durable.co <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">28</div>
          <div class="ai-builder-body">
            <h3>Renderforest – AI Website + Media</h3>
            <p class="ai-builder-desc">Website + media asset dalam satu platform. Cocok buat branding & bisnis kecil.</p>
            <a class="ai-builder-btn" href="https://renderforest.com" target="_blank" rel="noopener noreferrer">renderforest.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">29</div>
          <div class="ai-builder-body">
            <h3>10Web – AI WordPress Builder</h3>
            <p class="ai-builder-desc">WordPress + AI automation. Build, optimize, dan manage website sekaligus.</p>
            <a class="ai-builder-btn" href="https://10web.io" target="_blank" rel="noopener noreferrer">10web.io <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
          </div>
        </div>

        <div class="ai-builder-card">
          <div class="ai-builder-number">30</div>
          <div class="ai-builder-body">
            <h3>Dorik – AI Website Builder Simpel</h3>
            <p class="ai-builder-desc">No-code + UI clean. Enak buat bikin website cepat tanpa ribet.</p>
            <a class="ai-builder-btn" href="https://dorik.com" target="_blank" rel="noopener noreferrer">dorik.com <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg></a>
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
    readTime: "12 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Website Builder", "No Code", "Tools", "2026", "Web Development"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771997631397-6vwuqy.webp",
    relatedPosts: ["prompt-portfolio-website-2026", "ai-web-development"],
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
  }
} as const

export type BlogId = keyof typeof blogs
export default blogs