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
  isoDate?: string
}

const blogs = {

  "prompt-engineering-guide-2026": {
    title: "Rahasia Prompt Engineering 2026: Rumus, Teknik, dan Template yang Bikin AI Nurut Sama Lo",
    excerpt: "Panduan lengkap prompt engineering — dari rumus dasar sampai teknik advanced. Pelajari cara bikin prompt yang presisi biar output AI 10x lebih bagus. Cocok buat pemula maupun profesional.",
    content: `
      <style>
        .pe-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; }
        .pe-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.5rem; margin: 0 0 0.75rem 0; }
        .pe-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .pe-section-title { font-size: 1.25rem; font-weight: 700; margin: 2.5rem 0 1rem 0; color: hsl(var(--foreground)); }
        .pe-formula-box { padding: 1.75rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); margin: 1.5rem 0; }
        .pe-formula-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: hsl(var(--muted-foreground)); margin-bottom: 0.75rem; }
        .pe-formula-text { font-size: 1.1rem; font-weight: 700; color: hsl(var(--foreground)); font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace; line-height: 1.8; padding: 1rem; background: hsl(var(--muted)); border-radius: 0.5rem; margin-bottom: 1rem; }
        .pe-formula-desc { font-size: 0.88rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin: 0; }
        .pe-example { margin: 1.5rem 0; border-radius: 0.75rem; border: 1px solid hsl(var(--border)); overflow: hidden; }
        .pe-example-header { padding: 0.75rem 1.25rem; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(var(--muted-foreground)); background: hsl(var(--muted)); border-bottom: 1px solid hsl(var(--border)); }
        .pe-example-bad, .pe-example-good { padding: 1rem 1.25rem; font-size: 0.88rem; line-height: 1.7; }
        .pe-example-bad { color: hsl(var(--muted-foreground)); border-bottom: 1px solid hsl(var(--border)); }
        .pe-example-good { color: hsl(var(--foreground)); position: relative; padding-right: 4.5rem; }
        .pe-example-bad::before { content: 'Kurang Baik'; display: inline-block; font-size: 0.7rem; font-weight: 700; padding: 0.1rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); margin-right: 0.5rem; margin-bottom: 0.35rem; }
        .pe-example-good::before { content: 'Lebih Baik'; display: inline-block; font-size: 0.7rem; font-weight: 700; padding: 0.1rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); margin-right: 0.5rem; margin-bottom: 0.35rem; }
        .pe-tip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; }
        .pe-tip-card { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); position: relative; }
        .pe-tip-card h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.35rem 0; color: hsl(var(--foreground)); }
        .pe-tip-card p { font-size: 0.85rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0 0 2.5rem 0; }
        .pe-copy-btn { position: absolute; bottom: 1rem; right: 1rem; display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.85rem; border-radius: 0.5rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); color: hsl(var(--muted-foreground)); font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); font-family: inherit; z-index: 10; }
        .pe-copy-btn:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-color: hsl(var(--primary)); transform: scale(1.03); }
        .pe-copy-btn:active { transform: scale(0.97); }
        .pe-copy-btn svg { width: 12px; height: 12px; transition: transform 0.2s; }
        .pe-copy-btn:hover svg { transform: rotate(5deg); }
        .pe-copy-btn.copied { background: #10b981 !important; color: #ffffff !important; border-color: #10b981 !important; }
        
        .pe-prompt-block .pe-copy-btn, .pe-example-good .pe-copy-btn { top: 0.75rem; right: 0.75rem; bottom: auto; }

        .pe-prompt-block { background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; padding: 1.25rem 4.5rem 1.25rem 1.25rem; font-size: 0.85rem; line-height: 1.8; color: hsl(var(--foreground)); font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace; white-space: pre-wrap; word-break: break-word; margin: 1rem 0; overflow-x: auto; position: relative; }
        .pe-prompt-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem; }
        .pe-callout { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2rem 0; }
        .pe-callout p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .pe-callout strong { color: hsl(var(--foreground)); }
        .pe-table-wrap { overflow-x: auto; margin: 1.5rem 0; border-radius: 1rem; border: 1px solid hsl(var(--border)); }
        .pe-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
        .pe-table thead { background: hsl(var(--muted)); }
        .pe-table th { padding: 0.85rem 1rem; text-align: left; font-weight: 700; color: hsl(var(--foreground)); border-bottom: 1px solid hsl(var(--border)); }
        .pe-table td { padding: 0.75rem 1rem; color: hsl(var(--muted-foreground)); border-bottom: 1px solid hsl(var(--border)); line-height: 1.6; }
        .pe-table tr:last-child td { border-bottom: none; }
        .pe-technique-list { display: flex; flex-direction: column; gap: 1.5rem; margin: 1.5rem 0; }
        .pe-technique { padding: 1.5rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .pe-technique h3 { font-size: 1.05rem; font-weight: 700; margin: 0 0 0.5rem 0; color: hsl(var(--foreground)); }
        .pe-technique p { font-size: 0.9rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin: 0 0 0.75rem 0; }
        .pe-technique p:last-child { margin-bottom: 0; }
        .pe-cta { margin-top: 3rem; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--primary)); text-align: center; color: hsl(var(--primary-foreground)); }
        .pe-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.5rem; }
        .pe-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.25rem; font-size: 1rem; }
        .pe-cta a { display: inline-block; padding: 0.75rem 2rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .pe-cta a:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .pe-numbered-list { counter-reset: pe-counter; list-style: none; padding: 0; margin: 1.5rem 0; }
        .pe-numbered-list li { counter-increment: pe-counter; padding: 1rem 1.25rem 1rem 3.5rem; position: relative; margin-bottom: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; font-size: 0.9rem; line-height: 1.7; color: hsl(var(--muted-foreground)); }
        .pe-numbered-list li::before { content: counter(pe-counter); position: absolute; left: 1.25rem; top: 1rem; font-size: 0.85rem; font-weight: 800; color: hsl(var(--foreground)); }
        .pe-numbered-list li strong { color: hsl(var(--foreground)); }
        @media (max-width: 768px) {
          .pe-tip-grid { grid-template-columns: 1fr; }
          .pe-hero { padding: 1.75rem 1.25rem; }
        }
      </style>

      <div class="pe-hero">
        <h2>Prompt Engineering — Skill Paling Underrated di 2026</h2>
        <p>Lo bisa punya akses ke AI paling canggih sedunia, tapi kalau prompt-nya jelek, hasilnya juga jelek. Prompt engineering adalah seni dan sains berkomunikasi dengan AI. Artikel ini bakal kasih lo rumus, teknik, dan contoh nyata biar output AI lo 10x lebih bagus — whether lo pakai ChatGPT, Claude, Gemini, atau tools lainnya.</p>
      </div>

      <p>Pernah nggak lo nanya ke ChatGPT dan jawabannya generik banget? Atau minta bantuan coding tapi hasilnya nggak sesuai harapan? <strong>Masalahnya bukan di AI-nya — masalahnya di prompt lo.</strong></p>

      <p>Prompt engineering itu kayak belajar ngomong bahasa baru. Bahasa yang dimengerti AI. Dan kabar baiknya, ada <strong>rumus dan framework</strong> yang bisa lo ikutin. Lo nggak perlu jadi jenius — cukup paham polanya, dan AI bakal jadi asisten yang jauh lebih berguna.</p>

      <div class="pe-section-title">Kenapa Prompt Engineering Penting?</div>

      <p>Di 2026, hampir semua pekerjaan digital melibatkan AI. Tapi ada gap besar antara orang yang <em>pakai AI</em> dan orang yang <em>jago pakai AI</em>. Perbedaannya? Kualitas prompt. Ini data yang membuktikan:</p>

      <div class="pe-table-wrap">
        <table class="pe-table">
          <thead>
            <tr>
              <th>Aspek</th>
              <th>Prompt Asal-asalan</th>
              <th>Prompt Terstruktur</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Output quality</strong></td>
              <td>Generik, butuh banyak revisi</td>
              <td>Spesifik, langsung bisa dipakai</td>
            </tr>
            <tr>
              <td><strong>Waktu yang dihabiskan</strong></td>
              <td>30-60 menit bolak-balik revisi</td>
              <td>5-10 menit, langsung jadi</td>
            </tr>
            <tr>
              <td><strong>Konsistensi</strong></td>
              <td>Hasil berubah-ubah</td>
              <td>Stabil dan predictable</td>
            </tr>
            <tr>
              <td><strong>Kepuasan user</strong></td>
              <td>"AI gini doang?"</td>
              <td>"Gila, ini bagus banget!"</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="pe-section-title">5 Rumus Prompt Engineering yang Wajib Lo Hafal</div>

      <p>Ini bukan teori — ini <strong>framework yang udah terbukti</strong>. Masing-masing punya use case yang berbeda. Pilih yang paling cocok buat kebutuhan lo.</p>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #1 — R-T-F (Role + Task + Format)</div>
        <div class="pe-formula-text">[Role] + [Task] + [Format]</div>
        <div class="pe-formula-desc">Rumus paling dasar dan paling sering dipakai. Kasih AI sebuah peran, jelaskan tugasnya, lalu tentukan format output-nya. Simple tapi powerful.</div>
      </div>

      <div class="pe-example">
        <div class="pe-example-header">Contoh penerapan R-T-F</div>
        <div class="pe-example-bad">"buatin caption instagram"</div>
        <div class="pe-example-good">Lo adalah seorang social media strategist berpengalaman 5 tahun di industri F&B. Buatkan 5 caption Instagram untuk promo menu baru kedai kopi — nada casual, target anak muda Jakarta 18-25 tahun. Format: setiap caption max 150 karakter, include 3 hashtag relevan, dan 1 CTA.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText(&quot;Lo adalah seorang social media strategist berpengalaman 5 tahun di industri F&B. Buatkan 5 caption Instagram untuk promo menu baru kedai kopi — nada casual, target anak muda Jakarta 18-25 tahun. Format: setiap caption max 150 karakter, include 3 hashtag relevan, dan 1 CTA.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
      </div>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #2 — C-R-E-A-T-E</div>
        <div class="pe-formula-text">Character + Request + Examples + Adjustments + Type of output + Extras</div>
        <div class="pe-formula-desc">Framework 6 elemen untuk prompt yang sangat detail. Cocok buat konten yang butuh kualitas tinggi — artikel blog, proposal, presentasi.</div>
      </div>

      <div class="pe-prompt-label">Contoh prompt dengan rumus C-R-E-A-T-E:</div>
      <div class="pe-prompt-block">Character: Lo adalah content writer berpengalaman yang ahli nulis artikel SEO dalam bahasa Indonesia casual.

Request: Tulis artikel blog tentang "cara memilih laptop untuk programming" dengan target audience mahasiswa informatika.

Examples: Gaya penulisan mirip Tech in Asia atau DailySocial — informatif tapi santai, ada opini personal.

Adjustments: Fokus pada laptop budget 5-15 juta. Jangan rekomendasikan MacBook (di luar budget target). Gunakan bahasa lo-gue.

Type of output: Artikel 1500 kata dengan heading, subheading, bullet points, dan kesimpulan.

Extras: Tambahkan tabel perbandingan 5 laptop rekomendasi dengan kolom: nama, harga, prosesor, RAM, dan skor rating.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Character: Lo adalah content writer berpengalaman yang ahli nulis artikel SEO dalam bahasa Indonesia casual.\\n\\nRequest: Tulis artikel blog tentang &quot;cara memilih laptop untuk programming&quot; dengan target audience mahasiswa informatika.\\n\\nExamples: Gaya penulisan mirip Tech in Asia atau DailySocial — informatif tapi santai, ada opini personal.\\n\\nAdjustments: Fokus pada laptop budget 5-15 juta. Jangan rekomendasikan MacBook (di luar budget target). Gunakan bahasa lo-gue.\\n\\nType of output: Artikel 1500 kata dengan heading, subheading, bullet points, dan kesimpulan.\\n\\nExtras: Tambahkan tabel perbandingan 5 laptop rekomendasi dengan kolom: nama, harga, prosesor, RAM, dan skor rating.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #3 — T-A-G (Task + Action + Goal)</div>
        <div class="pe-formula-text">[Task] + [Action] + [Goal]</div>
        <div class="pe-formula-desc">Rumus simpel buat instruksi yang action-oriented. Cocok buat tugas teknis: coding, analisis data, debugging.</div>
      </div>

      <div class="pe-example">
        <div class="pe-example-header">Contoh penerapan T-A-G</div>
        <div class="pe-example-bad">"fix kode ini"</div>
        <div class="pe-example-good">Task: Ada bug di fungsi login — user selalu redirect ke halaman 404 setelah submit form. Action: Analisis kode di bawah, identifikasi root cause, dan berikan fix beserta penjelasan. Goal: User bisa login dan redirect ke dashboard tanpa error.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText(&quot;Task: Ada bug di fungsi login — user selalu redirect ke halaman 404 setelah submit form. Action: Analisis kode di bawah, identifikasi root cause, dan berikan fix beserta penjelasan. Goal: User bisa login dan redirect ke dashboard tanpa error.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
      </div>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #4 — B-A-B (Before + After + Bridge)</div>
        <div class="pe-formula-text">[Before: situasi saat ini] + [After: hasil yang diinginkan] + [Bridge: bagaimana AI bisa bantu]</div>
        <div class="pe-formula-desc">Framework storytelling. Sangat efektif buat copywriting, proposal, dan komunikasi persuasif.</div>
      </div>

      <div class="pe-prompt-label">Contoh prompt dengan rumus B-A-B:</div>
      <div class="pe-prompt-block">Before: Toko online gue cuma dapet 50 visitors per hari dan conversion rate 0.5%. Revenue stuck di 2 juta/bulan.

After: Gue mau dapet 500 visitors per hari dengan conversion rate 3%, targetin revenue 20 juta/bulan dalam 3 bulan.

Bridge: Buatkan strategi digital marketing lengkap yang mencakup SEO, social media, dan email marketing — dengan timeline mingguan dan KPI yang terukur.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Before: Toko online gue cuma dapet 50 visitors per hari dan conversion rate 0.5%. Revenue stuck di 2 juta/bulan.\\n\\nAfter: Gue mau dapet 500 visitors per hari dengan conversion rate 3%, targetin revenue 20 juta/bulan dalam 3 bulan.\\n\\nBridge: Buatkan strategi digital marketing lengkap yang mencakup SEO, social media, dan email marketing — dengan timeline mingguan dan KPI yang terukur.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #5 — R-I-S-E (Role + Input + Steps + Expectation)</div>
        <div class="pe-formula-text">[Role] + [Input/Context] + [Steps] + [Expectation]</div>
        <div class="pe-formula-desc">Framework terbaik buat tugas multi-step yang kompleks. AI nggak cuma dapet goal-nya, tapi juga tahu langkah-langkah yang lo harapkan.</div>
      </div>

      <div class="pe-prompt-label">Contoh prompt dengan rumus R-I-S-E:</div>
      <div class="pe-prompt-block">Role: Lo adalah senior full-stack developer yang expert di React dan Next.js.

Input: Gue punya app e-commerce yang dibangun dengan Next.js 14 + Supabase. Saat ini halaman produk loading lambat (3.5 detik) dan skor Lighthouse cuma 45.

Steps:
1. Analisis kemungkinan penyebab performa buruk
2. Prioritaskan masalah dari yg paling impactful
3. Berikan solusi spesifik untuk setiap masalah
4. Tulis kode implementasi untuk top 3 solusi

Expectation: Halaman produk loading di bawah 1 detik, skor Lighthouse minimal 90. Setiap solusi disertai penjelasan kenapa dan kode yang siap pakai.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Role: Lo adalah senior full-stack developer yang expert di React dan Next.js.\\n\\nInput: Gue punya app e-commerce yang dibangun dengan Next.js 14 + Supabase. Saat ini halaman produk loading lambat (3.5 detik) dan skor Lighthouse cuma 45.\\n\\nSteps:\\n1. Analisis kemungkinan penyebab performa buruk\\n2. Prioritaskan masalah dari yg paling impactful\\n3. Berikan solusi spesifik untuk setiap masalah\\n4. Tulis kode implementasi untuk top 3 solusi\\n\\nExpectation: Halaman produk loading di bawah 1 detik, skor Lighthouse minimal 90. Setiap solusi disertai penjelasan kenapa dan kode yang siap pakai.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>

      <div class="pe-section-title">7 Teknik Advanced Prompt Engineering</div>

      <p>Setelah lo paham rumusnya, saatnya level up ke teknik-teknik yang bikin output AI makin presisi dan reliable.</p>

      <div class="pe-technique-list">
        <div class="pe-technique">
          <h3>1. Chain of Thought (CoT) Prompting</h3>
          <p>Minta AI untuk berpikir step-by-step sebelum memberi jawaban final. Teknik ini terbukti meningkatkan akurasi terutama untuk problem-solving dan reasoning.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">Analisis apakah startup ini layak didanai. Pikirkan langkah demi langkah:
1. Evaluasi market size dan growth potential
2. Analisis competitive landscape
3. Review business model dan unit economics
4. Assess tim dan execution capability
Baru setelah itu, berikan rekomendasi final beserta confidence score.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Analisis apakah startup ini layak didanai. Pikirkan langkah demi langkah:\\n1. Evaluasi market size dan growth potential\\n2. Analisis competitive landscape\\n3. Review business model dan unit economics\\n4. Assess tim dan execution capability\\nBaru setelah itu, berikan rekomendasi final beserta confidence score.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pe-technique">
          <h3>2. Few-Shot Prompting</h3>
          <p>Kasih AI beberapa contoh input-output yang lo harapkan. AI akan mengenali pola dan mengikuti format yang lo tentukan.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">Ubah kalimat formal menjadi casual bahasa anak muda Jakarta.

Contoh 1:
Formal: "Kami mengucapkan terima kasih atas dukungan Anda."
Casual: "Thanks banget buat support-nya, gengs!"

Contoh 2:
Formal: "Silakan hubungi kami untuk informasi lebih lanjut."
Casual: "Ada yang mau ditanyain? DM aja langsung, santai."

Formal: "Kami informasikan bahwa jadwal meeting telah diubah."
Casual: ???<button class="pe-copy-btn" onclick="navigator.clipboard.writeText(&quot;Ubah kalimat formal menjadi casual bahasa anak muda Jakarta.\\n\\nContoh 1:\\nFormal: \\&quot;Kami mengucapkan terima kasih atas dukungan Anda.\\&quot;\\nCasual: \\&quot;Thanks banget buat support-nya, gengs!\\&quot;\\n\\nContoh 2:\\nFormal: \\&quot;Silakan hubungi kami untuk informasi lebih lanjut.\\&quot;\\nCasual: \\&quot;Ada yang mau ditanyain? DM aja langsung, santai.\\&quot;\\n\\nFormal: \\&quot;Kami informasikan bahwa jadwal meeting telah diubah.\\&quot;\\nCasual: ???&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pe-technique">
          <h3>3. Role Stacking</h3>
          <p>Bukan cuma satu role — kasih AI multiple roles atau perspectives untuk jawaban yang lebih komprehensif.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">Evaluasi landing page ini dari 3 perspektif:
1. Sebagai UX designer: analisis user flow, clarity, dan friction points
2. Sebagai copywriter: evaluasi headline, CTA, dan persuasive elements
3. Sebagai growth marketer: cek conversion optimization dan A/B test opportunities

Berikan skor 1-10 dari setiap perspektif dan 3 actionable improvements.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Evaluasi landing page ini dari 3 perspektif:\\n1. Sebagai UX designer: analisis user flow, clarity, dan friction points\\n2. Sebagai copywriter: evaluasi headline, CTA, dan persuasive elements\\n3. Sebagai growth marketer: cek conversion optimization dan A/B test opportunities\\n\\nBerikan skor 1-10 dari setiap perspektif dan 3 actionable improvements.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pe-technique">
          <h3>4. Constraint Prompting</h3>
          <p>Batasi output AI dengan constraint yang spesifik. Semakin jelas batasannya, semakin fokus dan useful hasilnya.</p>
          <div class="pe-prompt-label">Constraints yang bisa lo pakai:</div>
          <div class="pe-prompt-block">- Panjang: "Jawab dalam maksimal 200 kata"
- Format: "Gunakan bullet points, bukan paragraf"
- Bahasa: "Pakai bahasa Indonesia casual, lo-gue"
- Larangan: "Jangan pakai jargon teknis"
- Scope: "Fokus hanya pada solusi yang bisa dilakukan tanpa budget"
- Tone: "Nada profesional tapi approachable"
- Audience: "Jelaskan seperti ke anak SMA kelas 10"<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('- Panjang: &quot;Jawab dalam maksimal 200 kata&quot;\\n- Format: &quot;Gunakan bullet points, bukan paragraf&quot;\\n- Bahasa: &quot;Pakai bahasa Indonesia casual, lo-gue&quot;\\n- Larangan: &quot;Jangan pakai jargon teknis&quot;\\n- Scope: &quot;Fokus hanya pada solusi yang bisa dilakukan tanpa budget&quot;\\n- Tone: &quot;Nada profesional tapi approachable&quot;\\n- Audience: &quot;Jelaskan seperti ke anak SMA kelas 10&quot;');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pe-technique">
          <h3>5. Self-Reflection Prompting</h3>
          <p>Minta AI untuk mengevaluasi dan memperbaiki output-nya sendiri. Ini bikin kualitas naik signifikan.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">Tulis email follow-up ke klien yang belum bayar invoice.

Setelah selesai, evaluasi email tersebut:
- Apakah tone-nya terlalu agresif atau terlalu lembek?  
- Ada nggak yang bisa bikin klien tersinggung?
- Apakah CTA-nya jelas?

Kalau ada yang kurang, revisi ulang dan berikan versi final.<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Tulis email follow-up ke klien yang belum bayar invoice.\\n\\nSetelah selesai, evaluasi email tersebut:\\n- Apakah tone-nya terlalu agresif atau terlalu lembek?  \\n- Ada nggak yang bisa bikin klien tersinggung?\\n- Apakah CTA-nya jelas?\\n\\nKalau ada yang kurang, revisi ulang dan berikan versi final.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pe-technique">
          <h3>6. Template Prompting</h3>
          <p>Kasih AI template output yang harus diikuti. Ini memastikan output selalu konsisten dan sesuai format yang lo butuhkan.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">Review produk ini. Gunakan template berikut:

**Nama Produk:** [nama]
**Rating:** [X/10]
**Kelebihan:**
- [point 1]
- [point 2]
- [point 3]
**Kekurangan:**
- [point 1]
- [point 2]
**Cocok Untuk:** [target user]
**Verdict:** [1 kalimat kesimpulan]<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Review produk ini. Gunakan template berikut:\\n\\n**Nama Produk:** [nama]\\n**Rating:** [X/10]\\n**Kelebihan:**\\n- [point 1]\\n- [point 2]\\n- [point 3]\\n**Kekurangan:**\\n- [point 1]\\n- [point 2]\\n**Cocok Untuk:** [target user]\\n**Verdict:** [1 kalimat kesimpulan]');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pe-technique">
          <h3>7. Iterative Refinement</h3>
          <p>Jangan expect hasil sempurna di prompt pertama. Treat AI seperti kolaborator — kasih feedback dan minta perbaikan secara bertahap.</p>
          <div class="pe-prompt-label">Contoh flow:</div>
          <div class="pe-prompt-block">Prompt 1: "Tulis outline buat artikel tentang investasi saham buat pemula"
→ Review outline, lalu...

Prompt 2: "Bagus. Sekarang expand section 3 tentang analisis fundamental. Tambahkan contoh saham Indonesia yang real."
→ Review lagi...

Prompt 3: "Tambahin disclaimer dan risk warning di akhir. Juga perbaiki paragraf 2 — terlalu teknis buat pemula."<button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Prompt 1: &quot;Tulis outline buat artikel tentang investasi saham buat pemula&quot;\\n→ Review outline, lalu...\\n\\nPrompt 2: &quot;Bagus. Sekarang expand section 3 tentang analisis fundamental. Tambahkan contoh saham Indonesia yang real.&quot;\\n→ Review lagi...\\n\\nPrompt 3: &quot;Tambahin disclaimer dan risk warning di akhir. Juga perbaiki paragraf 2 — terlalu teknis buat pemula.&quot;');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>
      </div>

      <div class="pe-section-title">Template Prompt Siap Pakai</div>

      <p>Simpan template-template ini. Tinggal ganti bagian dalam kurung [] sesuai kebutuhan lo.</p>

      <div class="pe-tip-grid">
        <div class="pe-tip-card">
          <h4>Bikin Konten</h4>
          <p>"Tulis [jenis konten] tentang [topik] untuk [target audience]. Gunakan tone [formal/casual/fun]. Panjang [X] kata. Include [elemen khusus: CTA, data statistik, quotes, dll]."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Tulis [jenis konten] tentang [topik] untuk [target audience]. Gunakan tone [formal/casual/fun]. Panjang [X] kata. Include [elemen khusus: CTA, data statistik, quotes, dll].');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Debug Kode</h4>
          <p>"Kode ini menghasilkan error [error message]. Stack: [tech stack]. Yang diharapkan: [expected behavior]. Yang terjadi: [actual behavior]. Tolong identifikasi bug dan berikan fix beserta penjelasan."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Kode ini menghasilkan error [error message]. Stack: [tech stack]. Yang diharapkan: [expected behavior]. Yang terjadi: [actual behavior]. Tolong identifikasi bug dan berikan fix beserta penjelasan.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Analisis Data</h4>
          <p>"Analisis data [jenis data] berikut. Identifikasi [X] insight utama, trends, dan anomali. Presentasikan dalam format [tabel/bullet points/executive summary]. Fokus pada [metrik spesifik]."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Analisis data [jenis data] berikut. Identifikasi [X] insight utama, trends, dan anomali. Presentasikan dalam format [tabel/bullet points/executive summary]. Fokus pada [metrik spesifik].');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Email Profesional</h4>
          <p>"Tulis email [tujuan: follow-up/proposal/complaint] ke [siapa] tentang [topik]. Tone [formal/semi-formal]. Max [X] paragraf. Include [data pendukung/deadline/CTA spesifik]."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Tulis email [tujuan: follow-up/proposal/complaint] ke [siapa] tentang [topik]. Tone [formal/semi-formal]. Max [X] paragraf. Include [data pendukung/deadline/CTA spesifik].');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Brainstorming</h4>
          <p>"Generate [X] ide untuk [topik/project]. Untuk setiap ide, jelaskan: konsep singkat, target market, estimasi effort (low/med/high), dan potential impact. Rank dari yang paling menjanjikan."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Generate [X] ide untuk [topik/project]. Untuk setiap ide, jelaskan: konsep singkat, target market, estimasi effort (low/med/high), dan potential impact. Rank dari yang paling menjanjikan.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Belajar Konsep Baru</h4>
          <p>"Jelaskan [konsep] seperti mengajar [level: anak 10 tahun/mahasiswa/profesional]. Gunakan [X] analogi dari kehidupan sehari-hari. Berikan [X] contoh nyata. Di akhir, buat quiz singkat 3 pertanyaan."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Jelaskan [konsep] seperti mengajar [level: anak 10 tahun/mahasiswa/profesional]. Gunakan [X] analogi dari kehidupan sehari-hari. Berikan [X] contoh nyata. Di akhir, buat quiz singkat 3 pertanyaan.');this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
      </div>

      <div class="pe-section-title">Kesalahan Umum yang Harus Dihindari</div>

      <ol class="pe-numbered-list">
        <li><strong>Terlalu vague</strong> — "buatin sesuatu yang bagus" nggak ngasih AI info yang cukup. Selalu spesifik tentang apa, untuk siapa, dan format apa.</li>
        <li><strong>Terlalu panjang tanpa struktur</strong> — prompt panjang boleh, tapi harus terstruktur. Gunakan numbering, dash, atau section headers.</li>
        <li><strong>Nggak kasih konteks</strong> — AI nggak tahu background lo. Selalu kasih konteks: siapa audience-nya, apa tujuannya, apa constraint-nya.</li>
        <li><strong>Expect perfect di percobaan pertama</strong> — treat AI kayak kolaborator. Iterasi itu normal dan bahkan direkomendasikan.</li>
        <li><strong>Copy-paste output tanpa review</strong> — AI bisa hallucinate. Selalu fact-check output-nya, terutama untuk data, kode, dan klaim faktual.</li>
        <li><strong>Nggak nge-set format output</strong> — kalau lo nggak bilang formatnya, AI bakal milih sendiri. Mungkin hasilnya terlalu panjang, terlalu pendek, atau salah format.</li>
        <li><strong>Lupa kasih contoh</strong> — few-shot prompting (kasih 2-3 contoh) drastis meningkatkan kualitas. Kalau bisa kasih contoh, kasih.</li>
      </ol>

      <div class="pe-section-title">Prompt Engineering untuk Coding</div>

      <p>Buat developer, prompt engineering itu game changer. Ini beberapa pattern yang terbukti efektif buat ngoding pakai AI:</p>

      <div class="pe-tip-grid">
        <div class="pe-tip-card">
          <h4>Jelaskan Stack & Konteks</h4>
          <p>Selalu mention tech stack (React, Next.js, Python, dll), versi yang dipakai, dan structure project lo. Semakin jelas konteksnya, semakin akurat kodenya.</p>
        </div>
        <div class="pe-tip-card">
          <h4>Berikan Error Message Lengkap</h4>
          <p>Copy-paste full error message dan stack trace — jangan cuma bilang "ada error". AI butuh info spesifik buat diagnosa masalah.</p>
        </div>
        <div class="pe-tip-card">
          <h4>Minta Penjelasan, Bukan Cuma Kode</h4>
          <p>Tambahkan "jelaskan setiap langkah" atau "tambahkan komentar di kode". Ini membantu lo belajar dan verifikasi logikanya.</p>
        </div>
        <div class="pe-tip-card">
          <h4>Set Batasan yang Jelas</h4>
          <p>"Jangan pakai library eksternal", "gunakan TypeScript strict mode", "ikuti pattern yang sudah ada di codebase". Constraint = output lebih realistis.</p>
        </div>
      </div>

      <div class="pe-callout">
        <p><strong>Pro Tip:</strong> Untuk coding, coba teknik "Rubber Duck Prompting" — jelaskan dulu masalah lo ke AI sedetail mungkin, seolah-olah lo lagi menjelaskan ke teman. Sering kali, proses menjelaskan ini sendiri udah bantu lo menemukan solusinya. Dan kalau belum ketemu, AI punya konteks yang cukup buat kasih jawaban yang akurat.</p>
      </div>

      <div class="pe-section-title">Masa Depan Prompt Engineering</div>

      <p>Banyak yang bilang "prompt engineering bakal mati karena AI makin pintar." Ini <strong>sebagian benar, sebagian salah</strong>.</p>

      <p>Benar, AI di masa depan bakal makin bagus dalam memahami prompt yang ambiguous. Tapi kemampuan berkomunikasi dengan AI secara presisi akan selalu jadi <strong>competitive advantage</strong>. Sama kayak Google Search — semua orang bisa googling, tapi ada orang-orang yang bisa menemukan informasi 10x lebih cepat karena tahu cara search yang efektif.</p>

      <p>Prompt engineering bukan cuma tentang "nulis prompt" — ini tentang <strong>critical thinking, problem decomposition, dan komunikasi yang efektif</strong>. Skill ini transferable ke mana aja, even kalau tools AI berubah.</p>

      <div class="pe-section-title">Kesimpulan</div>

      <p>Prompt engineering bukan rocket science, tapi butuh latihan dan pemahaman. Dengan 5 rumus (R-T-F, C-R-E-A-T-E, T-A-G, B-A-B, R-I-S-E) dan 7 teknik advanced dalam artikel ini, lo udah punya toolkit lengkap buat bikin AI bekerja jauh lebih efektif.</p>

      <p>Key takeaway: <strong>Kualitas output AI = kualitas prompt lo.</strong> Investasi 5 menit extra buat nulis prompt yang bagus bisa hemat 1 jam kerja. That's a 12x return on time. Worth it? Absolutely.</p>

      <div class="pe-callout">
        <p><strong>Challenge:</strong> Ambil salah satu rumus dari artikel ini, terapkan ke kerjaan lo hari ini. Bandingkan hasilnya dengan cara lo prompt biasanya. Lo pasti bakal notice perbedaannya.</p>
      </div>

      <div class="pe-cta">
        <h2>Mau Tips Prompt Engineering Tiap Minggu?</h2>
        <p>Follow Instagram gue buat dapet template prompt, tips AI, dan tutorial yang actionable!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "27 Apr 2026",
    isoDate: "2026-04-27",
    readTime: "18 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["Prompt Engineering", "AI", "ChatGPT", "Claude", "Tutorial", "2026", "Productivity"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777265912351-xkoe1z.webp",
    relatedPosts: ["ai-vs-developer-2026", "cuan-dari-ai-2026", "laptop-programming-mahasiswa-2026"],
  },

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
    isoDate: "2026-04-27",
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
    isoDate: "2026-04-27",
    readTime: "12 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Side Hustle", "Freelance", "Monetisasi", "2026", "Career"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777263911754-sykv6h.webp",
    relatedPosts: ["ai-vs-developer-2026", "ai-website-builder-2026"],
  },
  "prompt-portfolio-website-2026": {
    title: "5 Prompt Website Portofolio Keren!",
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
    isoDate: "2026-04-23",
    readTime: "7 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Portfolio", "Prompt", "Web Design", "Vibe Coding", "2026"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777265651186-frztzo.webp",
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
    isoDate: "2026-02-25",
    readTime: "12 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["AI", "Website Builder", "No Code", "Tools", "2026", "Web Development"],
    imageSrc: "https://kmjodkwdcxenijqgxnhh.supabase.co/storage/v1/object/public/shared-images/1771997631397-6vwuqy.webp",
    relatedPosts: ["prompt-portfolio-website-2026", "ai-web-development"],
  },
  "nextjs-vs-react": {
    title: "Next.js vs React di 2026: Panduan Lengkap Memilih Framework yang Tepat",
    excerpt: "Perbandingan mendalam antara Next.js dan React — dari rendering, routing, performa, sampai kapan harus pakai yang mana. Panduan lengkap untuk developer Indonesia.",
    content: `
      <style>
        .nvr-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; }
        .nvr-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.5rem; margin: 0 0 0.75rem 0; }
        .nvr-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .nvr-section-title { font-size: 1.25rem; font-weight: 700; margin: 2.5rem 0 1rem 0; color: hsl(var(--foreground)); display: flex; align-items: center; gap: 0.5rem; }
        .nvr-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin: 1.5rem 0; }
        .nvr-compare-card { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .nvr-compare-card h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.75rem 0; color: hsl(var(--foreground)); padding-bottom: 0.75rem; border-bottom: 2px solid hsl(var(--border)); }
        .nvr-compare-card ul { margin: 0; padding-left: 1.25rem; }
        .nvr-compare-card li { font-size: 0.92rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin-bottom: 0.4rem; }
        .nvr-table-wrap { overflow-x: auto; margin: 1.5rem 0; border-radius: 1rem; border: 1px solid hsl(var(--border)); }
        .nvr-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
        .nvr-table thead { background: hsl(var(--muted)); }
        .nvr-table th { padding: 0.85rem 1rem; text-align: left; font-weight: 700; color: hsl(var(--foreground)); border-bottom: 1px solid hsl(var(--border)); }
        .nvr-table td { padding: 0.75rem 1rem; color: hsl(var(--muted-foreground)); border-bottom: 1px solid hsl(var(--border)); line-height: 1.5; }
        .nvr-table tr:last-child td { border-bottom: none; }
        .nvr-table tr:hover td { background: hsl(var(--muted) / 0.5); }
        .nvr-callout { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2rem 0; }
        .nvr-callout p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .nvr-callout strong { color: hsl(var(--foreground)); }
        .nvr-use-case-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; }
        .nvr-use-case { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .nvr-use-case h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.35rem 0; color: hsl(var(--foreground)); }
        .nvr-use-case p { font-size: 0.85rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        .nvr-use-case .nvr-tag { display: inline-block; font-size: 0.72rem; font-weight: 600; padding: 0.15rem 0.5rem; border-radius: 9999px; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); margin-top: 0.5rem; }
        .nvr-code-block { background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; padding: 1.25rem; font-size: 0.82rem; line-height: 1.7; color: hsl(var(--foreground)); font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace; white-space: pre-wrap; word-break: break-word; margin: 1rem 0; overflow-x: auto; }
        .nvr-code-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem; }
        .nvr-verdict { padding: 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); margin: 2rem 0; }
        .nvr-verdict h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 1rem 0; color: hsl(var(--foreground)); }
        .nvr-verdict-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .nvr-verdict-item { padding: 1rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .nvr-verdict-item h4 { font-size: 0.9rem; font-weight: 700; margin: 0 0 0.25rem 0; color: hsl(var(--foreground)); }
        .nvr-verdict-item p { font-size: 0.85rem; line-height: 1.5; color: hsl(var(--muted-foreground)); margin: 0; }
        .nvr-cta { margin-top: 3rem; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--primary)); text-align: center; color: hsl(var(--primary-foreground)); }
        .nvr-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.5rem; }
        .nvr-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.25rem; font-size: 1rem; }
        .nvr-cta a { display: inline-block; padding: 0.75rem 2rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .nvr-cta a:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .nvr-faq { margin: 2rem 0; }
        .nvr-faq-item { border: 1px solid hsl(var(--border)); border-radius: 0.75rem; margin-bottom: 0.75rem; overflow: hidden; }
        .nvr-faq-q { padding: 1rem 1.25rem; font-weight: 700; font-size: 0.95rem; color: hsl(var(--foreground)); background: hsl(var(--card)); }
        .nvr-faq-a { padding: 0 1.25rem 1rem 1.25rem; font-size: 0.88rem; line-height: 1.7; color: hsl(var(--muted-foreground)); }
        @media (max-width: 768px) {
          .nvr-compare-grid, .nvr-use-case-grid, .nvr-verdict-row { grid-template-columns: 1fr; }
          .nvr-hero { padding: 1.75rem 1.25rem; }
        }
      </style>

      <div class="nvr-hero">
        <h2>Next.js vs React — Mana yang Harus Lo Pilih?</h2>
        <p>Ini pertanyaan klasik yang sering banget muncul di komunitas developer Indonesia. Tapi jawabannya nggak sesederhana "Next.js lebih bagus" atau "React aja cukup". Semuanya tergantung pada apa yang lo bangun, siapa audience-nya, dan seberapa kompleks project-nya. Artikel ini bakal bantu lo memahami perbedaan mendasar dan membuat keputusan yang tepat.</p>
      </div>

      <p>Sebelum kita masuk ke perbandingan mendalam, ada satu hal penting yang perlu diluruskan: <strong>Next.js itu bukan pengganti React</strong>. Next.js adalah framework yang dibangun <em>di atas</em> React. Jadi kalau lo pakai Next.js, lo tetap nulis React — cuma dengan tambahan fitur-fitur production-ready yang bikin hidup lebih gampang.</p>

      <p>Analoginya gini: React itu kayak <strong>mesin mobil</strong>. Powerful, fleksibel, bisa lo pasang di mobil apa aja. Sementara Next.js itu kayak <strong>mobil utuh</strong> — mesinnya udah ada (React), plus udah ada transmisi, suspensi, AC, dan semua yang lo butuhin buat langsung jalan di jalan raya.</p>

      <div class="nvr-section-title">Apa Itu React?</div>

      <p>React adalah <strong>library JavaScript</strong> buatan Meta (Facebook) yang fokus pada pembuatan user interface (UI). Dirilis pertama kali tahun 2013, React udah jadi standar industri buat membangun web app modern.</p>

      <p>Kekuatan utama React ada di konsep <strong>component-based architecture</strong> dan <strong>virtual DOM</strong>. Lo bisa bikin UI yang kompleks dari komponen-komponen kecil yang reusable, dan React akan secara efisien mengupdate hanya bagian yang berubah — tanpa perlu reload seluruh halaman.</p>

      <div class="nvr-code-label">Contoh komponen React sederhana:</div>
      <div class="nvr-code-block">function ProductCard({ name, price, image }) {
  return (
    &lt;div className="product-card"&gt;
      &lt;img src={image} alt={name} /&gt;
      &lt;h3&gt;{name}&lt;/h3&gt;
      &lt;p&gt;Rp {price.toLocaleString()}&lt;/p&gt;
      &lt;button&gt;Tambah ke Keranjang&lt;/button&gt;
    &lt;/div&gt;
  );
}</div>

      <p>React secara default menggunakan <strong>Client-Side Rendering (CSR)</strong> — artinya semua rendering terjadi di browser pengguna. Ini bagus buat interaktivitas, tapi kurang ideal buat SEO karena search engine mungkin kesulitan membaca konten yang di-render di client.</p>

      <div class="nvr-section-title">Apa Itu Next.js?</div>

      <p>Next.js adalah <strong>React framework</strong> buatan Vercel yang menambahkan fitur-fitur krusial di atas React: server-side rendering (SSR), static site generation (SSG), file-based routing, API routes, image optimization, dan banyak lagi — semuanya sudah built-in tanpa perlu konfigurasi manual.</p>

      <p>Kalau React memberi lo kebebasan total (tapi juga tanggung jawab setup), Next.js memberi lo <strong>opinionated structure</strong> yang langsung production-ready. Lo bisa fokus bikin fitur, bukan konfigurasi webpack.</p>

      <div class="nvr-code-label">Contoh page di Next.js App Router:</div>
      <div class="nvr-code-block">// app/products/page.tsx
export default async function ProductsPage() {
  const products = await fetch('https://api.example.com/products')
    .then(res =&gt; res.json());

  return (
    &lt;main&gt;
      &lt;h1&gt;Produk Kami&lt;/h1&gt;
      {products.map(p =&gt; (
        &lt;ProductCard key={p.id} {...p} /&gt;
      ))}
    &lt;/main&gt;
  );
}
// Data di-fetch di server — SEO friendly, cepat, secure</div>

      <div class="nvr-section-title">Perbandingan Fitur Head-to-Head</div>

      <div class="nvr-table-wrap">
        <table class="nvr-table">
          <thead>
            <tr>
              <th>Fitur</th>
              <th>React (CRA / Vite)</th>
              <th>Next.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Rendering</strong></td>
              <td>Client-Side Rendering (CSR)</td>
              <td>SSR, SSG, ISR, CSR — semua tersedia</td>
            </tr>
            <tr>
              <td><strong>Routing</strong></td>
              <td>Perlu install React Router</td>
              <td>File-based routing (built-in)</td>
            </tr>
            <tr>
              <td><strong>SEO</strong></td>
              <td>Kurang optimal tanpa setup SSR</td>
              <td>SEO-friendly by default</td>
            </tr>
            <tr>
              <td><strong>API Backend</strong></td>
              <td>Butuh backend terpisah</td>
              <td>API Routes / Server Actions built-in</td>
            </tr>
            <tr>
              <td><strong>Image Optimization</strong></td>
              <td>Manual / library pihak ketiga</td>
              <td>next/image component (built-in)</td>
            </tr>
            <tr>
              <td><strong>Performance</strong></td>
              <td>Good (tergantung optimasi manual)</td>
              <td>Excellent (code splitting, lazy loading otomatis)</td>
            </tr>
            <tr>
              <td><strong>Learning Curve</strong></td>
              <td>Lebih rendah (fokus UI saja)</td>
              <td>Sedikit lebih tinggi (perlu paham SSR/SSG)</td>
            </tr>
            <tr>
              <td><strong>Deployment</strong></td>
              <td>Static hosting (Netlify, dsb)</td>
              <td>Vercel, AWS, self-hosted, static export</td>
            </tr>
            <tr>
              <td><strong>Bundle Size</strong></td>
              <td>Lebih kecil (hanya yang lo pakai)</td>
              <td>Sedikit lebih besar (tapi auto-optimized)</td>
            </tr>
            <tr>
              <td><strong>Ekosistem</strong></td>
              <td>Masif, freedom memilih library</td>
              <td>Masif + optimasi bawaan Vercel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="nvr-section-title">Kapan Pakai React (Tanpa Next.js)?</div>

      <p>React tanpa framework cocok buat project yang <strong>nggak butuh SEO</strong>, fokus pada interaktivitas client-side, dan biasanya bersifat internal atau behind-login.</p>

      <div class="nvr-use-case-grid">
        <div class="nvr-use-case">
          <h4>Dashboard & Admin Panel</h4>
          <p>Internal tools yang nggak perlu diindex Google. Fokus pada data visualization, CRUD operations, dan real-time updates.</p>
          <span class="nvr-tag">React + Vite</span>
        </div>
        <div class="nvr-use-case">
          <h4>Single Page Application (SPA)</h4>
          <p>App yang behavior-nya mirip native app — smooth transitions, no page reload, semua terjadi di client.</p>
          <span class="nvr-tag">React + React Router</span>
        </div>
        <div class="nvr-use-case">
          <h4>Widget / Embeddable Component</h4>
          <p>Lo bikin component yang bakal di-embed ke website lain. Butuh library yang ringan dan self-contained.</p>
          <span class="nvr-tag">React + Vite Library Mode</span>
        </div>
        <div class="nvr-use-case">
          <h4>Prototype & Eksperimen</h4>
          <p>Mau cepet bikin proof of concept tanpa setup framework berat? React + Vite bisa jalan dalam hitungan detik.</p>
          <span class="nvr-tag">React + Vite</span>
        </div>
      </div>

      <div class="nvr-section-title">Kapan Pakai Next.js?</div>

      <p>Next.js cocok buat hampir semua web yang <strong>public-facing</strong>, butuh SEO, performa tinggi, dan scalability. Ini pilihan default buat kebanyakan project profesional di 2026.</p>

      <div class="nvr-use-case-grid">
        <div class="nvr-use-case">
          <h4>Website & Landing Page</h4>
          <p>SSG bikin page loading super cepat. SEO metadata gampang di-set per halaman. Perfect buat company profile dan marketing site.</p>
          <span class="nvr-tag">Next.js SSG</span>
        </div>
        <div class="nvr-use-case">
          <h4>Blog & Content Platform</h4>
          <p>MDX support, ISR buat update konten tanpa rebuild, dan image optimization built-in. Lo lagi baca artikel ini pakai Next.js.</p>
          <span class="nvr-tag">Next.js ISR</span>
        </div>
        <div class="nvr-use-case">
          <h4>E-Commerce</h4>
          <p>Product pages perlu SEO, checkout butuh security (server-side). Next.js handle keduanya dengan SSR + Server Actions.</p>
          <span class="nvr-tag">Next.js SSR</span>
        </div>
        <div class="nvr-use-case">
          <h4>Full-Stack Web Application</h4>
          <p>API Routes + Server Components bikin lo bisa handle frontend dan backend dalam satu codebase. Database queries langsung di server component.</p>
          <span class="nvr-tag">Next.js App Router</span>
        </div>
      </div>

      <div class="nvr-section-title">Rendering Strategies Explained</div>

      <p>Salah satu keunggulan terbesar Next.js adalah fleksibilitas rendering. Lo bisa pilih strategy yang berbeda untuk setiap halaman — bahkan untuk setiap komponen. Ini yang bikin Next.js sangat versatile.</p>

      <div class="nvr-compare-grid">
        <div class="nvr-compare-card">
          <h3>SSG (Static Site Generation)</h3>
          <ul>
            <li>HTML di-generate saat <strong>build time</strong></li>
            <li>Paling cepat karena serve file statis</li>
            <li>Cocok buat konten yang jarang berubah</li>
            <li>Contoh: blog posts, dokumentasi, landing page</li>
          </ul>
        </div>
        <div class="nvr-compare-card">
          <h3>SSR (Server-Side Rendering)</h3>
          <ul>
            <li>HTML di-generate saat <strong>setiap request</strong></li>
            <li>Konten selalu fresh dan up-to-date</li>
            <li>Cocok buat data yang sering berubah</li>
            <li>Contoh: feed social media, dashboard real-time</li>
          </ul>
        </div>
        <div class="nvr-compare-card">
          <h3>ISR (Incremental Static Regeneration)</h3>
          <ul>
            <li>Gabungan SSG + SSR: static page yang <strong>auto-update</strong></li>
            <li>Set revalidation interval (misal: tiap 60 detik)</li>
            <li>Best of both worlds: cepat + fresh</li>
            <li>Contoh: halaman produk, berita, pricing</li>
          </ul>
        </div>
        <div class="nvr-compare-card">
          <h3>CSR (Client-Side Rendering)</h3>
          <ul>
            <li>Rendering terjadi di <strong>browser client</strong></li>
            <li>Interaktivitas tinggi, UX mirip native app</li>
            <li>Kurang ideal buat SEO</li>
            <li>Contoh: dashboard, form wizard, chat app</li>
          </ul>
        </div>
      </div>

      <div class="nvr-callout">
        <p><strong>Key Insight:</strong> Di Next.js App Router (2026), default-nya adalah Server Components. Artinya komponen lo di-render di server kecuali lo spesifik menambahkan "use client" di atas file. Ini fundamental shift dari React tradisional yang semuanya client-side.</p>
      </div>

      <div class="nvr-section-title">Performa & SEO</div>

      <p>Buat website public-facing, performa dan SEO itu krusial. Google menggunakan Core Web Vitals sebagai ranking factor — dan di sinilah Next.js punya keunggulan signifikan:</p>

      <div class="nvr-compare-grid">
        <div class="nvr-compare-card">
          <h3>React (CSR)</h3>
          <ul>
            <li>Initial load bisa lambat (download JS dulu, baru render)</li>
            <li>Google bisa crawl, tapi kurang reliable dibanding SSR</li>
            <li>FCP (First Contentful Paint) cenderung lebih lambat</li>
            <li>Butuh manual optimization: code splitting, lazy loading</li>
          </ul>
        </div>
        <div class="nvr-compare-card">
          <h3>Next.js (SSR/SSG)</h3>
          <ul>
            <li>HTML langsung tersedia — FCP sangat cepat</li>
            <li>Fully crawlable oleh semua search engine</li>
            <li>Automatic code splitting per route</li>
            <li>Built-in image optimization (WebP, lazy loading, srcset)</li>
          </ul>
        </div>
      </div>

      <p>Kalau lo bikin website yang targetnya ranking di Google — blog, e-commerce, company profile — <strong>Next.js jelas lebih unggul</strong> tanpa butuh konfigurasi tambahan. Meta tags, Open Graph, sitemap, robots.txt — semuanya gampang di-setup di Next.js.</p>

      <div class="nvr-section-title">Developer Experience (DX)</div>

      <p>Ini aspek yang sering diabaikan tapi sangat ngaruh ke produktivitas sehari-hari:</p>

      <div class="nvr-table-wrap">
        <table class="nvr-table">
          <thead>
            <tr>
              <th>Aspek DX</th>
              <th>React</th>
              <th>Next.js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Setup project</strong></td>
              <td>Vite: cepat dan minimal</td>
              <td>create-next-app: lengkap tapi lebih banyak file</td>
            </tr>
            <tr>
              <td><strong>Hot reload</strong></td>
              <td>Vite HMR: sangat cepat</td>
              <td>Fast Refresh: cepat (Turbopack di 2026)</td>
            </tr>
            <tr>
              <td><strong>Error messages</strong></td>
              <td>Standar React errors</td>
              <td>Enhanced error overlay + suggestions</td>
            </tr>
            <tr>
              <td><strong>TypeScript</strong></td>
              <td>Perlu setup manual</td>
              <td>First-class support, auto-configured</td>
            </tr>
            <tr>
              <td><strong>Testing</strong></td>
              <td>Jest/Vitest + setup manual</td>
              <td>Built-in testing support</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="nvr-section-title">Verdict: Kapan Pakai Apa?</div>

      <div class="nvr-verdict">
        <h3>Rekomendasi berdasarkan project type:</h3>
        <div class="nvr-verdict-row">
          <div class="nvr-verdict-item">
            <h4>Pilih React (Vite)</h4>
            <p>Dashboard internal, admin panel, prototype/MVP sederhana, embeddable widget, SPA behind auth, project yang butuh freedom maksimal dalam arsitektur.</p>
          </div>
          <div class="nvr-verdict-item">
            <h4>Pilih Next.js</h4>
            <p>Website public-facing, blog, e-commerce, SaaS product, landing page, full-stack app, project yang butuh SEO, project yang mau langsung production-ready.</p>
          </div>
        </div>
      </div>

      <div class="nvr-callout">
        <p><strong>Pro Tip:</strong> Kalau lo masih pemula dan bingung mulai dari mana, mulai belajar <strong>React dulu</strong>. Pahami konsep component, state, props, hooks. Setelah itu, transisi ke Next.js akan terasa natural — karena Next.js itu React + fitur tambahan. Lo nggak bisa pakai Next.js tanpa paham React, tapi lo bisa pakai React tanpa Next.js.</p>
      </div>

      <div class="nvr-section-title">FAQ (Pertanyaan yang Sering Muncul)</div>

      <div class="nvr-faq">
        <div class="nvr-faq-item">
          <div class="nvr-faq-q">Apakah Next.js menggantikan React?</div>
          <div class="nvr-faq-a">Tidak. Next.js dibangun di atas React. Kalau lo pakai Next.js, lo tetap menulis React code. Next.js menambahkan fitur-fitur framework (routing, SSR, API) yang React sendiri tidak sediakan.</div>
        </div>
        <div class="nvr-faq-item">
          <div class="nvr-faq-q">Apakah saya harus belajar React dulu sebelum Next.js?</div>
          <div class="nvr-faq-a">Sangat direkomendasikan. Pahami dulu konsep dasar React (components, state, props, hooks, context) sebelum belajar Next.js. Ini akan membuat proses belajar jauh lebih smooth.</div>
        </div>
        <div class="nvr-faq-item">
          <div class="nvr-faq-q">Apakah Next.js gratis?</div>
          <div class="nvr-faq-a">Ya, Next.js sepenuhnya open-source dan gratis. Lo bisa deploy di mana saja (Vercel, AWS, VPS, dll). Vercel menyediakan free tier yang cukup generous untuk project personal dan small business.</div>
        </div>
        <div class="nvr-faq-item">
          <div class="nvr-faq-q">Mana yang lebih cepat, React atau Next.js?</div>
          <div class="nvr-faq-a">Tergantung konteksnya. Untuk initial page load, Next.js (SSG/SSR) lebih cepat karena HTML langsung siap. Untuk interaktivitas setelah load, keduanya sama — karena Next.js menggunakan React untuk client-side hydration.</div>
        </div>
        <div class="nvr-faq-item">
          <div class="nvr-faq-q">Bagaimana dengan Remix, Astro, dan framework lain?</div>
          <div class="nvr-faq-a">Framework lain seperti Remix (sekarang React Router v7) dan Astro juga opciones yang bagus. Tapi untuk ekosistem React di 2026, Next.js masih jadi pilihan paling mainstream dan paling banyak didukung — baik dari sisi komunitas, dokumentasi, maupun lapangan kerja.</div>
        </div>
      </div>

      <div class="nvr-section-title">Kesimpulan</div>

      <p>Di 2026, baik React maupun Next.js tetap jadi pilihan solid untuk web development. Yang penting adalah <strong>pilih berdasarkan kebutuhan project, bukan hype</strong>.</p>

      <p>Kalau lo bikin website yang perlu tampil di Google, butuh performa tinggi, dan mau langsung production-ready — <strong>Next.js adalah pilihan yang tepat</strong>. Tapi kalau lo bikin internal dashboard, prototype cepat, atau widget yang ringan — <strong>React + Vite sudah lebih dari cukup</strong>.</p>

      <p>Yang paling penting: <strong>pahami fundamentalnya</strong>. React adalah fondasinya. Next.js adalah bangunan di atasnya. Kuasai keduanya, dan lo bakal jadi developer yang sangat versatile di pasar kerja 2026.</p>

      <div class="nvr-cta">
        <h2>Mau Belajar Web Development Lebih Dalam?</h2>
        <p>Follow Instagram gue buat tips React, Next.js, AI tools, dan career advice buat developer Indonesia!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "27 Apr 2026",
    isoDate: "2026-04-27",
    readTime: "15 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["React", "Next.js", "Frontend", "JavaScript", "Framework", "SSR", "SSG", "Web Development", "2026"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777264199759-yt0c54.webp",
    relatedPosts: ["ai-vs-developer-2026", "ai-website-builder-2026"],
  },
  "laptop-programming-mahasiswa-2026": {
    title: "Panduan Memilih Laptop Programming Terbaik buat Mahasiswa Informatika (Budget 5–15 Juta)",
    excerpt: "Bingung milih laptop untuk kuliah informatika? Simak panduan spek minimal prosesor, RAM, SSD, GPU, serta rekomendasi laptop programming terbaik 2026.",
    content: `
      <style>
        .lp-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; }
        .lp-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.5rem; margin: 0 0 0.75rem 0; }
        .lp-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .lp-section-title { font-size: 1.25rem; font-weight: 700; margin: 2.5rem 0 1rem 0; color: hsl(var(--foreground)); border-bottom: 2px solid hsl(var(--border)); padding-bottom: 0.5rem; }
        .lp-spec-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0; }
        .lp-spec-card { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); display: flex; flex-direction: column; gap: 0.5rem; }
        .lp-spec-card h4 { font-size: 1rem; font-weight: 700; color: hsl(var(--foreground)); margin: 0; }
        .lp-spec-card .lp-spec-val { font-size: 0.85rem; font-weight: 600; color: hsl(var(--primary)); background: hsl(var(--primary) / 0.1); padding: 0.2rem 0.5rem; border-radius: 0.25rem; width: fit-content; }
        .lp-spec-card p { font-size: 0.85rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        .lp-tip-box { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2rem 0; }
        .lp-tip-box p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .lp-table-wrap { overflow-x: auto; margin: 1.5rem 0; border-radius: 1rem; border: 1px solid hsl(var(--border)); }
        .lp-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 600px; }
        .lp-table thead { background: hsl(var(--muted)); }
        .lp-table th { padding: 0.85rem 1rem; text-align: left; font-weight: 700; color: hsl(var(--foreground)); border-bottom: 1px solid hsl(var(--border)); }
        .lp-table td { padding: 0.75rem 1rem; color: hsl(var(--muted-foreground)); border-bottom: 1px solid hsl(var(--border)); line-height: 1.6; }
        .lp-table tr:last-child td { border-bottom: none; }
        .lp-rec-list { display: flex; flex-direction: column; gap: 1.5rem; margin: 1.5rem 0; }
        .lp-rec-item { padding: 1.5rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .lp-rec-item h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.5rem 0; color: hsl(var(--foreground)); }
        .lp-rec-tags { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap; }
        .lp-rec-tag { font-size: 0.75rem; font-weight: 600; padding: 0.15rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); }
        .lp-rec-tag.highlight { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-color: hsl(var(--primary)); }
        .lp-rec-desc { font-size: 0.9rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin: 0 0 0.75rem 0; }
        .lp-rec-specs { font-size: 0.85rem; background: hsl(var(--muted)); padding: 0.75rem 1rem; border-radius: 0.5rem; border: 1px solid hsl(var(--border)); color: hsl(var(--foreground)); }
        .lp-faq { display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; }
        .lp-faq-item { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .lp-faq-q { font-weight: 700; font-size: 0.95rem; color: hsl(var(--foreground)); margin-bottom: 0.5rem; }
        .lp-faq-a { font-size: 0.9rem; line-height: 1.6; color: hsl(var(--muted-foreground)); }
        .lp-cta { margin-top: 3rem; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--primary)); text-align: center; color: hsl(var(--primary-foreground)); }
        .lp-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.5rem; }
        .lp-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.25rem; font-size: 1rem; }
        .lp-cta a { display: inline-block; padding: 0.75rem 2rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .lp-cta a:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        .lp-numbered-list { counter-reset: lp-counter; list-style: none; padding: 0; margin: 1.5rem 0; }
        .lp-numbered-list li { counter-increment: lp-counter; padding: 1rem 1.25rem 1rem 3.5rem; position: relative; margin-bottom: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; font-size: 0.9rem; line-height: 1.7; color: hsl(var(--muted-foreground)); }
        .lp-numbered-list li::before { content: counter(lp-counter); position: absolute; left: 1.25rem; top: 1rem; font-size: 0.85rem; font-weight: 800; color: hsl(var(--foreground)); }
        .lp-numbered-list li strong { color: hsl(var(--foreground)); }
        @media (max-width: 768px) {
          .lp-hero { padding: 1.75rem 1.25rem; }
        }
      </style>

      <div class="lp-hero">
        <h2>Laptop: Workstation Utama Mahasiswa Informatika</h2>
        <p>Masuk jurusan informatika tanpa laptop yang proper itu kayak masuk gym cuma buat foto depan kaca. Bisa sih, tapi bakal nyusahin diri sendiri. Laptop itu bukan sekadar alat catat materi kuliah, tapi workstation utama lo buat ngoding, buka puluhan tab browser, jalanin Docker, compile project, desain UI, hingga eksperimen tools AI.</p>
      </div>

      <p>Masalahnya, banyak mahasiswa baru salah fokus waktu beli laptop. Ada yang ngejar RGB gaming lebay padahal cuma buat ngoding web. Ada juga yang beli laptop murah banget terus 6 bulan kemudian nangis karena Android Studio bikin laptop ngelag kayak slideshow.</p>

      <p>Biar proses belajar lo berjalan lancar dan gak bikin emosi, lo butuh perangkat yang andal. Yuk kita breakdown spek dasar yang masuk akal beserta rekomendasi laptop programming terbaik dengan budget Rp5–15 juta.</p>

      <div class="lp-section-title">Pahami Kebutuhan Ngoding Lo</div>

      <p>Kebutuhan spek hardware lo sangat bergantung pada fokus bidang pemrograman yang mau lo pelajari:</p>

      <div class="lp-tip-box">
        <p><strong>Pengembangan Ringan & Menengah:</strong> Kalau lo fokus di Web Development (Frontend & Backend Laravel/Node.js), desain UI/UX di Figma, data analyst dasar, atau mobile dev ringan, lo gak butuh laptop gaming tebal seberat 3 kilo. Ultrabook tipis dengan baterai awet jauh lebih ideal buat mobilitas kuliah lo.</p>
      </div>

      <div class="lp-tip-box">
        <p><strong>Pengembangan Berat & Khusus:</strong> Kalau lo mau fokus ke Android Studio berat, Machine Learning/AI, game development (Unity/Unreal Engine), render 3D di Blender, atau jalanin beberapa Virtual Machine (VM), baru deh kartu grafis diskrit (GPU) dan pendinginan laptop yang optimal jadi krusial.</p>
      </div>

      <div class="lp-section-title">Spesifikasi Minimal Aman untuk Mahasiswa Informatika (Standar 2026)</div>

      <p>Biar laptop lo bisa bertahan selama 4 hingga 6 tahun kuliah, ini spek aman yang wajib lo perhatikan:</p>

      <div class="lp-spec-grid">
        <div class="lp-spec-card">
          <h4>Prosesor (CPU)</h4>
          <span class="lp-spec-val">Ryzen 5 seri 7000+ / Intel Core i5 Gen 12+</span>
          <p>Ini otak utama laptop lo. Hindari prosesor entry-level kayak Ryzen 3 atau Core i3 karena umur napasnya pendek buat multitasking programming modern yang makin berat.</p>
        </div>
        <div class="lp-spec-card">
          <h4>Memori (RAM)</h4>
          <span class="lp-spec-val">Minimal 8GB | Ideal 16GB</span>
          <p>Chrome dan tools coding sekarang makan RAM brutal. Pilihlah laptop dengan RAM 16GB atau pastikan RAM-nya bisa di-upgrade di kemudian hari (hindari onboard mati).</p>
        </div>
        <div class="lp-spec-card">
          <h4>Penyimpanan</h4>
          <span class="lp-spec-val">Wajib SSD NVMe 512GB+</span>
          <p>Jangan sekali-kali pakai HDD tradisional. SSD NVMe wajib hukumnya biar loading project kencang. Ukuran 512GB itu pas, karena folder node_modules, Android SDK, dan dataset itu gede banget.</p>
        </div>
        <div class="lp-spec-card">
          <h4>Layar & Panel</h4>
          <span class="lp-spec-val">Full HD | Panel IPS / OLED</span>
          <p>Ngoding berjam-jam di layar jelek bikin mata capek. Cari yang minimal panel IPS/OLED. Layar dengan aspek rasio 16:10 juga lebih enak karena vertical workspace-nya lebih luas.</p>
        </div>
      </div>

      <div class="lp-section-title">Dua Jebakan Utama yang Harus Lo Hindari</div>

      <ol class="lp-numbered-list">
        <li><strong>Terjebak Embel-Embel "Gaming" Tanpa Kebutuhan:</strong> Laptop gaming emang kencang, tapi ada trade-off baterai boros, berat, panas, charger gede, dan kipas bising kayak jet tempur. Pilihlah laptop gaming kalau lo emang butuh GPU-nya saja. Kalau enggak, ultrabook modern jauh lebih worth it.</li>
        <li><strong>Tergiur Spek Tinggi Harga Terlalu Murah:</strong> Hati-hati jebakan marketplace. Spek di atas kertas keliatan bagus tapi build quality jelek, keyboard ampas, layar TN buram, dan aftersales gak jelas. Ingat, laptop ini investasi jangka panjang lo untuk belajar.</li>
      </ol>

      <div class="lp-section-title">5 Rekomendasi Laptop Programming Terbaik (Budget 5–15 Juta)</div>

      <div class="lp-rec-list">
        <div class="lp-rec-item">
          <h3>1. ASUS Vivobook 14 (M1405) — Best Overall</h3>
          <div class="lp-rec-tags">
            <span class="lp-rec-tag highlight">Pilihan Utama</span>
            <span class="lp-rec-tag">Fullstack & Mobile</span>
            <span class="lp-rec-tag">Sangat Balance</span>
          </div>
          <p class="lp-rec-desc">Ini pilihan paling aman buat mayoritas mahasiswa. Performanya balance dengan Ryzen kencang, build quality oke, layar nyaman di mata, baterai decent, dan gak terlalu berat dibawa ke kampus.</p>
          <div class="lp-rec-specs">
            <strong>Spesifikasi Kunci:</strong> AMD Ryzen 5/7 Seri Modern | RAM 16GB (Upgradable) | 512GB SSD NVMe | Layar 14" WUXGA IPS
          </div>
        </div>

        <div class="lp-rec-item">
          <h3>2. ADVAN Workplus Heritage — Performa Brutal, Budget Ketat</h3>
          <div class="lp-rec-tags">
            <span class="lp-rec-tag">Budget King</span>
            <span class="lp-rec-tag">Multitasking Murah</span>
            <span class="lp-rec-tag">HS-Series Power</span>
          </div>
          <p class="lp-rec-desc">Dulu brand lokal sering diremehkan, tapi seri ini absurd banget buat harganya. Dengan prosesor Ryzen HS-series bertenaga tinggi dan RAM 16GB, lo bisa buka puluhan tab dan emulator tanpa hambatan.</p>
          <div class="lp-rec-specs">
            <strong>Spesifikasi Kunci:</strong> AMD Ryzen 5 7535HS | RAM 16GB LPDDR5 | 1TB SSD NVMe | Layar 14" WUXGA IPS 16:10
          </div>
        </div>

        <div class="lp-rec-item">
          <h3>3. Lenovo IdeaPad Slim 5 — Kenyamanan Ngetik & Portabilitas</h3>
          <div class="lp-rec-tags">
            <span class="lp-rec-tag highlight">Ergonomis</span>
            <span class="lp-rec-tag">Layar OLED</span>
            <span class="lp-rec-tag">Keyboard Juara</span>
          </div>
          <p class="lp-rec-desc">Lenovo terkenal dengan kualitas keyboard-nya yang paling enak buat ngetik berjam-jam. Ditambah dengan layar OLED super jernih dan prosesor bertenaga AI, laptop ini nyaman banget buat mobile coding.</p>
          <div class="lp-rec-specs">
            <strong>Spesifikasi Kunci:</strong> AMD Ryzen AI 7 350 | RAM 16GB | 1TB SSD NVMe | Layar 14" WUXGA OLED
          </div>
        </div>

        <div class="lp-rec-item">
          <h3>4. ASUS Vivobook Go 14 — Solusi Awet Budget Pelajar</h3>
          <div class="lp-rec-tags">
            <span class="lp-rec-tag">Hemat Budget</span>
            <span class="lp-rec-tag">Belajar Coding</span>
            <span class="lp-rec-tag">Ringan</span>
          </div>
          <p class="lp-rec-desc">Buat lo yang punya budget ketat tapi mau laptop awet dari brand besar. Cukup banget buat belajar ngoding web, algoritma dasar, Python, database ringan, tanpa bikin dompet bokek.</p>
          <div class="lp-rec-specs">
            <strong>Spesifikasi Kunci:</strong> AMD Ryzen 5 7520U | RAM 16GB LPDDR5 | 512GB SSD NVMe | Layar 14" FHD IPS
          </div>
        </div>

        <div class="lp-rec-item">
          <h3>5. HP Victus 15 (RTX 3050) — Kebutuhan Game Dev & AI Heavy</h3>
          <div class="lp-rec-tags">
            <span class="lp-rec-tag">NVIDIA RTX GPU</span>
            <span class="lp-rec-tag">Machine Learning</span>
            <span class="lp-rec-tag">Unreal & Unity</span>
          </div>
          <p class="lp-rec-desc">Kalau workflow lo berat ke TensorFlow, game engine Unity/Unreal, render 3D di Blender, GPU RTX 3050 di laptop ini bakal kepake banget buat akselerasi CUDA. Tapi inget, ini lebih berat dan baterainya boros.</p>
          <div class="lp-rec-specs">
            <strong>Spesifikasi Kunci:</strong> AMD Ryzen 5 5600H | NVIDIA GeForce RTX 3050 | RAM 16GB (Upgradable) | 512GB SSD
          </div>
        </div>
      </div>

      <div class="lp-section-title">Tabel Perbandingan Laptop Rekomendasi</div>

      <div class="lp-table-wrap">
        <table class="lp-table">
          <thead>
            <tr>
              <th>Kategori / Model</th>
              <th>Harga Estimasi</th>
              <th>Prosesor</th>
              <th>RAM & Storage</th>
              <th>Cocok Buat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>ASUS Vivobook 14 (M1405)</strong></td>
              <td>± Rp11.8 Juta</td>
              <td>AMD Ryzen 5/7</td>
              <td>16GB / 512GB SSD</td>
              <td>Fullstack & Mobile Dev (Sangat Recomended)</td>
            </tr>
            <tr>
              <td><strong>ADVAN Workplus Heritage</strong></td>
              <td>± Rp7.9 Juta</td>
              <td>AMD Ryzen 5 7535HS</td>
              <td>16GB / 1TB SSD</td>
              <td>Multitasking kencang dengan harga bersahabat</td>
            </tr>
            <tr>
              <td><strong>Lenovo IdeaPad Slim 5</strong></td>
              <td>± Rp13.5 Juta</td>
              <td>AMD Ryzen AI 7 350</td>
              <td>16GB / 1TB SSD</td>
              <td>Ngetik lama & visual layar OLED super tajam</td>
            </tr>
            <tr>
              <td><strong>ASUS Vivobook Go 14</strong></td>
              <td>± Rp8.8 Juta</td>
              <td>AMD Ryzen 5 7520U</td>
              <td>16GB / 512GB SSD</td>
              <td>Belajar dasar pemrograman & logika dasar awal</td>
            </tr>
            <tr>
              <td><strong>HP Victus 15 RTX 3050</strong></td>
              <td>± Rp14.9 Juta</td>
              <td>AMD Ryzen 5 5600H</td>
              <td>16GB / 512GB SSD</td>
              <td>AI, Machine Learning, & pengembangan game 3D</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="lp-section-title">FAQ (Tanya Jawab Seputar Laptop Programming)</div>

      <div class="lp-faq">
        <div class="lp-faq-item">
          <div class="lp-faq-q">Apakah mahasiswa informatika harus beli laptop gaming?</div>
          <div class="lp-faq-a">Gak wajib sama sekali. Laptop gaming cuma kepake kalau lo butuh performa GPU diskrit untuk Machine Learning berat atau game engine. Buat coding web, mobile, atau backend biasa, ultrabook tipis dengan Ryzen modern jauh lebih praktis dan nyaman dibawa ke kampus.</div>
        </div>
        <div class="lp-faq-item">
          <div class="lp-faq-q">Kenapa RAM 16GB sangat disarankan dibanding 8GB?</div>
          <div class="lp-faq-a">Karena software modern itu serakah RAM. Kalau lo buka VS Code, browser 20 tab buat riset stack overflow, emulator, dan Docker bersamaan, RAM 8GB bakal langsung sesak dan bikin laptop lemot karena sistem terpaksa swap memory ke SSD.</div>
        </div>
        <div class="lp-faq-item">
          <div class="lp-faq-q">Apakah MacBook (macOS) oke buat anak informatika?</div>
          <div class="lp-faq-a">Bagus banget terutama buat web development dan iOS dev. Tapi pastikan lo beli yang RAM-nya minimal 16GB (jangan ambil 8GB di 2026). Perhatikan juga kalau ada beberapa mata kuliah basis data jadul atau networking yang konfigurasinya lebih gampang di Windows atau Linux.</div>
        </div>
      </div>

      <div class="lp-section-title">Kesimpulan</div>

      <p>Pada akhirnya, laptop terbaik itu bukan yang paling mahal, tapi yang paling pas sama kebutuhan ngoding lo dan ramah di dompet lo. Jadikan laptop sebagai investasi jangka panjang belajar yang nyaman.</p>

      <p>Inget, di dunia informatika, skill lo jauh lebih penting dibanding logo laptop di cover belakang. Laptop cuma alat bantu, yang bikin karir lo maju tetep konsistensi lo belajar, bikin project nyata, bangun portofolio, dan jam terbang ngoding lo secara langsung.</p>

      <div class="lp-cta">
        <h2>Mau Diskusi Seputar Laptop atau Tech?</h2>
        <p>Yuk ngobrol bareng atau follow akun Instagram gue buat dapet tips pemrograman, tutorial asyik, dan update dunia developer digital!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "25 Mei 2026",
    isoDate: "2026-05-25",
    readTime: "12 min",
    category: "Hardware",
    author: "Aditya Fakhri Riansyah",
    tags: ["Laptop Programming", "Mahasiswa Informatika", "Rekomendasi Laptop", "Specs", "Hardware", "2026"],
    imageSrc: "/images/blog/laptop-programming-2026.png",
    relatedPosts: ["prompt-engineering-guide-2026", "ti-vs-si-mahasiswa-2026"],
  },
  "ti-vs-si-mahasiswa-2026": {
    title: "Teknik Informatika vs Sistem Informasi: Bedanya Apa? Jangan Sampai Salah Jurusan",
    excerpt: "Kebingungan memilih antara Teknik Informatika dan Sistem Informasi? Simak analisis mendalam mata kuliah, prospek kerja, estimasi gaji, serta kampus terbaik 2026.",
    content: `
      <style>
        .vs-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; }
        .vs-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.5rem; margin: 0 0 0.75rem 0; }
        .vs-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .vs-section-title { font-size: 1.25rem; font-weight: 700; margin: 2.5rem 0 1rem 0; color: hsl(var(--foreground)); border-bottom: 2px solid hsl(var(--border)); padding-bottom: 0.5rem; }
        .vs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0; }
        .vs-card { padding: 1.5rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .vs-card h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 0.75rem 0; color: hsl(var(--foreground)); }
        .vs-card p { font-size: 0.9rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin: 0 0 1rem 0; }
        .vs-card ul { margin: 0; padding-left: 1.25rem; }
        .vs-card li { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin-bottom: 0.35rem; }
        .vs-spec-val { font-size: 0.85rem; font-weight: 600; color: hsl(var(--primary)); background: hsl(var(--primary) / 0.1); padding: 0.2rem 0.5rem; border-radius: 0.25rem; width: fit-content; margin-bottom: 1rem; }
        .vs-table-wrap { overflow-x: auto; margin: 1.5rem 0; border-radius: 1rem; border: 1px solid hsl(var(--border)); }
        .vs-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 600px; }
        .vs-table thead { background: hsl(var(--muted)); }
        .vs-table th { padding: 0.85rem 1rem; text-align: left; font-weight: 700; color: hsl(var(--foreground)); border-bottom: 1px solid hsl(var(--border)); }
        .vs-table td { padding: 0.75rem 1rem; color: hsl(var(--muted-foreground)); border-bottom: 1px solid hsl(var(--border)); line-height: 1.6; }
        .vs-table tr:last-child td { border-bottom: none; }
        .vs-callout { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2rem 0; }
        .vs-callout p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .vs-campus-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin: 1.5rem 0; }
        .vs-campus-card { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .vs-campus-card h4 { font-size: 0.95rem; font-weight: 700; color: hsl(var(--foreground)); margin: 0 0 0.5rem 0; }
        .vs-campus-card p { font-size: 0.85rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        .vs-faq { display: flex; flex-direction: column; gap: 1rem; margin: 2rem 0; }
        .vs-faq-item { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .vs-faq-q { font-weight: 700; font-size: 0.95rem; color: hsl(var(--foreground)); margin-bottom: 0.5rem; }
        .vs-faq-a { font-size: 0.9rem; line-height: 1.6; color: hsl(var(--muted-foreground)); }
        .vs-cta { margin-top: 3rem; padding: 2.5rem 2rem; border-radius: 1.25rem; background: hsl(var(--primary)); text-align: center; color: hsl(var(--primary-foreground)); }
        .vs-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.5rem; }
        .vs-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.25rem; font-size: 1rem; }
        .vs-cta a { display: inline-block; padding: 0.75rem 2rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
        .vs-cta a:hover { transform: scale(1.05); box-shadow: 0 4px 20px rgba(0,0,0,0.15); }
        @media (max-width: 768px) {
          .vs-grid, .vs-campus-grid { grid-template-columns: 1fr; }
          .vs-hero { padding: 1.75rem 1.25rem; }
        }
      </style>

      <div class="vs-hero">
        <h2>Dua Pintu Masuk Dunia Teknologi</h2>
        <p>Banyak anak SMA yang mau masuk dunia IT bingung pas disuruh milih antara jurusan Teknik Informatika (TI) dan Sistem Informasi (SI). Dari luar, kedua jurusan ini keliatan mirip: sama-sama ngoding, sama-sama komputer, dan sama-sama kerja di dunia teknologi. Tapi pas masuk kuliah? Reality hits hard.</p>
      </div>

      <p>Memahami perbedaan fundamental kedua jurusan ini sangat krusial. Salah milih jurusan bukan cuma bisa bikin IPK lo jeblok karena gak cocok, tapi juga berpotensi bikin lo kehilangan arah karier selama bertahun-tahun setelah lulus kuliah.</p>

      <div class="vs-section-title">Perbedaan Fundamental Secara Ringkas</div>

      <p>Biar gampang diserap, perbedaan esensial dari kedua program studi ini bisa disederhanakan kayak gini:</p>

      <div class="vs-grid">
        <div class="vs-card">
          <h3>Teknik Informatika (TI)</h3>
          <div class="vs-spec-val">Fokus: Membangun Teknologi</div>
          <p>Mempelajari rekayasa perangkat lunak secara mendalam, dari logika pemrograman dasar, desain algoritma yang efisien, rekayasa kecerdasan buatan (AI), jaringan komputer, hingga struktur sistem komputer internal.</p>
          <ul>
            <li>Intensitas pemrograman (coding) sangat tinggi.</li>
            <li>Memerlukan fondasi matematika dan logika yang kuat.</li>
            <li>Berorientasi pada pemecahan masalah teknis perangkat lunak.</li>
          </ul>
        </div>
        <div class="vs-card">
          <h3>Sistem Informasi (SI)</h3>
          <div class="vs-spec-val">Fokus: Menggunakan & Mengintegrasikan Teknologi</div>
          <p>Mempelajari bagaimana menjembatani kebutuhan bisnis dengan solusi teknologi informasi. Mahasiswa diajarkan untuk menganalisis proses bisnis perusahaan, mengelola database enterprise, dan memimpin manajemen proyek IT.</p>
          <ul>
            <li>Menggabungkan aspek teknis pemrograman dengan manajemen bisnis.</li>
            <li>Menitikberatkan pada analisis sistem, interaksi pengguna, dan efisiensi alur bisnis.</li>
            <li>Komunikasi interpersonal dan manajerial memiliki porsi besar.</li>
          </ul>
        </div>
      </div>

      <div class="vs-section-title">Mata Kuliah Utama yang Bakal Lo Pelajari</div>

      <p>Kurikulum kedua jurusan ini dirancang dengan komposisi materi yang berbeda nyata biar lulusannya punya keahlian yang spesifik:</p>

      <div class="vs-grid">
        <div class="vs-card">
          <h3>Mata Kuliah Teknik Informatika</h3>
          <p>Materi di jurusan TI berfokus pada kedalaman rekayasa teknis sistem komputer:</p>
          <ul>
            <li>Algoritma & Struktur Data</li>
            <li>Pemrograman Web & Mobile</li>
            <li>Sistem Operasi & Jaringan Komputer</li>
            <li>Kecerdasan Buatan (AI) & Machine Learning</li>
            <li>Basis Data & Keamanan Siber (Cybersecurity)</li>
            <li>Matematika Diskrit, Kalkulus, dan Logika Informatika</li>
          </ul>
        </div>
        <div class="vs-card">
          <h3>Mata Kuliah Sistem Informasi</h3>
          <p>Materi di jurusan SI berfokus pada jembatan teknologi dan manajemen organisasi:</p>
          <ul>
            <li>Analisis & Perancangan Sistem Informasi</li>
            <li>Manajemen Proyek Teknologi Informasi</li>
            <li>Business Intelligence & Data Analytics</li>
            <li>Desain Antarmuka & Pengalaman Pengguna (UI/UX)</li>
            <li>Enterprise Resource Planning (ERP)</li>
            <li>Audit Sistem Informasi & E-Business</li>
          </ul>
        </div>
      </div>

      <div class="vs-callout">
        <p><strong>Reality Check:</strong> Banyak anak masuk TI karena \"mau bikin game\", lalu kena mental breakdown pas ketemu kalkulus, matematika diskrit, dan logika informatika di semester awal. Pastikan lo emang suka solving problem pake logika matematika sebelum mutusin masuk TI.</p>
      </div>

      <div class="vs-section-title">Perbandingan Prospek Karier & Estimasi Gaji Awal</div>

      <p>Kedua jurusan ini punya prospek kerja yang sangat luas di pasar industri modern dengan klasifikasi peran kayak gini:</p>

      <div class="vs-table-wrap">
        <table class="vs-table">
          <thead>
            <tr>
              <th>Aspek Evaluasi</th>
              <th>Teknik Informatika (TI)</th>
              <th>Sistem Informasi (SI)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Role Populer di Industri</strong></td>
              <td>Software Engineer, Frontend/Backend Developer, AI/Machine Learning Engineer, Cybersecurity Specialist, Cloud Architect, DevOps.</td>
              <td>System Analyst, IT Consultant, Business Analyst, Product Manager, UI/UX Researcher, ERP Consultant.</td>
            </tr>
            <tr>
              <td><strong>Estimasi Gaji Awal (Fresh Graduate)</strong></td>
              <td>Rp5.000.000 – Rp12.000.000 (Bisa naik sangat cepat seiring portofolio teknis dan sertifikasi spesifik).</td>
              <td>Rp5.000.000 – Rp10.000.000 (Role manajerial tech seperti Product Manager sering kali punya kenaikan eksponensial).</td>
            </tr>
            <tr>
              <td><strong>Tantangan Utama</strong></td>
              <td>Teknologi dan framework berubah sangat cepat; harus terus belajar mandiri biar gak ketinggalan.</td>
              <td>Memerlukan soft skill komunikasi lintas tim dan keterampilan analisis proses bisnis yang baik.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="vs-section-title">Rekomendasi Universitas Terbaik di Indonesia</div>

      <p>Kalau lo udah mantap sama pilihan lo, milih kampus dengan ekosistem akademik dan jaringan industri yang kuat bakal bantu karir lo melesat:</p>

      <h3>Program Studi Teknik Informatika Terbaik</h3>
      <div class="vs-campus-grid">
        <div class="vs-campus-card">
          <h4>Institut Teknologi Bandung (ITB)</h4>
          <p>Kuat di AI, software engineering, riset teknologi tingkat tinggi, serta punya reputasi riset internasional yang kokoh. (<a href="https://itbox.id/blog/teknik-informatika-terbaik-di-indonesia" target="_blank" rel="noopener noreferrer">ITBOX</a>)</p>
        </div>
        <div class="vs-campus-card">
          <h4>Universitas Indonesia (UI)</h4>
          <p>Fasilkom UI unggul dalam jaringan kerja industri besar, riset data science, serta melahirkan banyak software engineer top. (<a href="https://www.uag.ac.id/populer/universitas-dengan-jurusan-ilmu-komputer-terbaik-di-indonesia" target="_blank" rel="noopener noreferrer">UAG</a>)</p>
        </div>
        <div class="vs-campus-card">
          <h4>BINUS University</h4>
          <p>Unggul dengan kurikulum pemrograman modern yang dekat dengan industri digital, sangat update, dan siap kerja korporasi tech. (<a href="https://binus.ac.id/malang/2024/02/10-universitas-jurusan-informatika-terbaik-di-indonesia-menurut-edurank/" target="_blank" rel="noopener noreferrer">BINUS</a>)</p>
        </div>
      </div>

      <h3>Program Studi Sistem Informasi Terbaik</h3>
      <div class="vs-campus-grid">
        <div class="vs-campus-card">
          <h4>Universitas Indonesia (UI)</h4>
          <p>Menawarkan kurikulum balance antara bisnis korporat dengan analisis IT modern berstandar akreditasi internasional. (<a href="https://masuk-ptn.com/artikel/detail/kampus-di-indonesia-dengan-jurusan-sistem-informasi-terbaik-versi-qs-wur-2025" target="_blank" rel="noopener noreferrer">Masuk PTN</a>)</p>
        </div>
        <div class="vs-campus-card">
          <h4>Institut Teknologi Sepuluh Nopember (ITS)</h4>
          <p>Fokus kuat di arsitektur enterprise, optimalisasi proses bisnis, tata kelola data, dan pembentukan kepemimpinan digital IT. (<a href="https://www.bintangpelajar.com/ptn-sistem-informasi-terbaik-di-indonesia/" target="_blank" rel="noopener noreferrer">Bintang Pelajar</a>)</p>
        </div>
        <div class="vs-campus-card">
          <h4>Telkom University</h4>
          <p>Sangat kuat di bidang bisnis digital, enterprise system, transformasi digital, serta integrasi teknologi jaringan modern. (<a href="https://masuk-ptn.com/artikel/detail/kampus-di-indonesia-dengan-jurusan-sistem-informasi-terbaik-versi-qs-wur-2025" target="_blank" rel="noopener noreferrer">Masuk PTN</a>)</p>
        </div>
      </div>

      <div class="vs-section-title">FAQ (Tanya Jawab Seputar Jurusan IT)</div>

      <div class="vs-faq">
        <div class="vs-faq-item">
          <div class="vs-faq-q">Apakah di Sistem Informasi juga diajarkan coding?</div>
          <div class="vs-faq-a">Ya, anak SI tetep dapet matkul pemrograman dasar. Tapi bedanya gak sedalam anak TI. SI lebih fokus pada implementasi dan bagaimana kode program tersebut bisa ngebantu operasional bisnis perusahaan berjalan lancar.</div>
        </div>
        <div class="vs-faq-item">
          <div class="vs-faq-q">Lebih susah mana, TI atau SI?</div>
          <div class="vs-faq-a">TI lebih berat secara teknis, logic coding, dan matematika. Sedangkan SI lebih berat di aspek analisis bisnis, manajemen project, komunikasi lintas divisi, serta penyusunan laporan solusi perusahaan. Jadi tantangannya beda!</div>
        </div>
        <div class="vs-faq-item">
          <div class="vs-faq-q">Apakah lulusan Sistem Informasi bisa kerja jadi Programmer?</div>
          <div class="vs-faq-a">Bisa banget. Industri tech modern gak cuma lihat ijazah atau nama jurusan lo, tapi lebih peduli sama skill nyata, portofolio project di GitHub, dan pengalaman coding lo secara langsung. Banyak kok anak SI jadi senior web dev.</div>
        </div>
      </div>

      <div class="vs-section-title">Kesimpulan</div>

      <p>Pilih Teknik Informatika kalau lo emang suka ngulik kode pemrograman, rekayasa logic, algoritma cerdas, dan lo punya passion kuat buat jadi engineer pembuat teknologi. Sebaliknya, pilih Sistem Informasi kalau lo suka teknologi tapi juga tertarik dengan sisi manajemen, strategi bisnis, analisis kebutuhan user, dan koordinasi project IT.</p>

      <p>Tapi inget reality check terakhir: mau lo masuk TI atau SI, kalau cuma ngandelin tugas kampus, lo bakal kalah saing. Industri tech sekarang gak cuma peduli nama jurusan lo. Mereka lihat skill, portfolio project, jam terbang ngoding, soft skill komunikasi, dan cara lo solving problem. Jurusan cuma pintu masuk, karir lo ditentukan oleh seberapa serius lo berkembang setelah masuk.</p>

      <div class="vs-cta">
        <h2>Mau Konsultasi Karir Tech Lebih Jauh?</h2>
        <p>Yuk ngobrol bareng gue atau ikuti akun Instagram gue buat dapet template prompt AI, career advice, tips pemrograman, dan info teknologi terkini!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">Follow @adityafakhrii</a>
      </div>
    `,
    date: "25 Mei 2026",
    isoDate: "2026-05-25",
    readTime: "10 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Teknik Informatika", "Sistem Informasi", "Jurusan IT", "Specs", "Career", "2026"],
    imageSrc: "/images/blog/ti-vs-si-2026.png",
    relatedPosts: ["laptop-programming-mahasiswa-2026", "ai-vs-developer-2026"],
  },
  "website-terbaik-logika-pemrograman-pemula": {
    title: "5 Website Terbaik untuk Melatih Logika Pemrograman bagi Pemula",
    excerpt: "Banyak orang mengira belajar coding itu soal menghafal syntax, padahal logika problem solving jauh lebih penting. Berikut 5 website terbaik untuk melatih logika pemrograman kamu!",
    content: `
      <style>
        .wl-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.5) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .wl-hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 300px; height: 300px; background: radial-gradient(circle, hsl(var(--primary)/0.1) 0%, transparent 70%); pointer-events: none; }
        .wl-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .wl-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .wl-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }
        .wl-intro-callout { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.02); margin: 1.5rem 0; line-height: 1.7; }
        .wl-platform-list { display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0; }
        .wl-card { padding: 1.75rem; border-radius: 1.25rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); box-shadow: 0 4px 20px rgba(0,0,0,0.02); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .wl-card::after { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: transparent; transition: background 0.3s; }
        .wl-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); border-color: hsl(var(--primary)/0.2); }
        .wl-card.codewars:hover::after { background: #b1361e; }
        .wl-card.hackerrank:hover::after { background: #2ec866; }
        .wl-card.leetcode:hover::after { background: #ffa116; }
        .wl-card.codingame:hover::after { background: #f24e1e; }
        .wl-card.exercism:hover::after { background: #0079c1; }
        .wl-card-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; }
        .wl-card-title { display: flex; align-items: center; gap: 0.75rem; }
        .wl-card-title h3 { font-size: 1.3rem; font-weight: 700; margin: 0 !important; color: hsl(var(--foreground)); }
        .wl-card-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 0.5rem; font-size: 1.25rem; font-weight: 800; }
        .wl-card.codewars .wl-card-icon { background: rgba(177, 54, 30, 0.1); color: #b1361e; }
        .wl-card.hackerrank .wl-card-icon { background: rgba(46, 200, 102, 0.1); color: #2ec866; }
        .wl-card.leetcode .wl-card-icon { background: rgba(255, 161, 22, 0.1); color: #ffa116; }
        .wl-card.codingame .wl-card-icon { background: rgba(242, 78, 30, 0.1); color: #f24e1e; }
        .wl-card.exercism .wl-card-icon { background: rgba(0, 121, 193, 0.1); color: #0079c1; }
        .wl-card-link-badge { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.85rem; border-radius: 9999px; font-size: 0.78rem; font-weight: 600; color: hsl(var(--muted-foreground)); background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); text-decoration: none !important; transition: all 0.2s; }
        .wl-card-link-badge:hover { color: hsl(var(--foreground)); background: hsl(var(--border)); border-color: hsl(var(--muted-foreground)); }
        .wl-card-desc { font-size: 0.95rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin-bottom: 1.25rem; }
        .wl-suitability { background: hsl(var(--muted)/0.5); padding: 1.25rem; border-radius: 0.75rem; border: 1px solid hsl(var(--border)); }
        .wl-suitability-title { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: hsl(var(--muted-foreground)); margin-bottom: 0.75rem; }
        .wl-suitability-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; padding: 0 !important; margin: 0 !important; list-style: none !important; }
        .wl-suitability-list li { font-size: 0.88rem !important; color: hsl(var(--foreground)) !important; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0 !important; }
        .wl-suitability-list li::before { content: "✓"; font-weight: 900; display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border-radius: 50%; font-size: 0.72rem; margin-right: 0.25rem; }
        .wl-card.codewars .wl-suitability-list li::before { background: rgba(177, 54, 30, 0.1); color: #b1361e; }
        .wl-card.hackerrank .wl-suitability-list li::before { background: rgba(46, 200, 102, 0.1); color: #2ec866; }
        .wl-card.leetcode .wl-suitability-list li::before { background: rgba(255, 161, 22, 0.1); color: #ffa116; }
        .wl-card.codingame .wl-suitability-list li::before { background: rgba(242, 78, 30, 0.1); color: #f24e1e; }
        .wl-card.exercism .wl-suitability-list li::before { background: rgba(0, 121, 193, 0.1); color: #0079c1; }
        .wl-roadmap { display: flex; flex-direction: column; gap: 1.5rem; margin: 2.5rem 0; position: relative; padding-left: 2rem; }
        .wl-roadmap::before { content: ''; position: absolute; left: 0.6rem; top: 0.5rem; bottom: 0.5rem; width: 2px; background: linear-gradient(to bottom, hsl(var(--primary)/0.2), hsl(var(--primary))); }
        .wl-roadmap-step { position: relative; padding: 1.25rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); }
        .wl-roadmap-step::before { content: ''; position: absolute; left: -1.75rem; top: 1.6rem; width: 12px; height: 12px; border-radius: 50%; background: hsl(var(--primary)); border: 3px solid hsl(var(--background)); }
        .wl-roadmap-step h4 { font-size: 1rem; font-weight: 700; color: hsl(var(--foreground)); margin: 0 0 0.35rem 0; }
        .wl-roadmap-step p { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        .wl-roadmap-step-badge { position: absolute; top: 1.25rem; right: 1.25rem; font-size: 0.72rem; font-weight: 700; padding: 0.15rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); }
        .wl-callout-footer { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid hsl(var(--primary)); background: hsl(var(--muted)); margin: 2.5rem 0; }
        .wl-callout-footer p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }
        .wl-callout-footer strong { color: hsl(var(--foreground)); }
        .wl-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .wl-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .wl-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .wl-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .wl-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .wl-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .wl-cta a svg { transition: transform 0.2s; }
        .wl-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
        @media (max-width: 768px) { .wl-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="wl-hero">
        <h2>Logic Over Syntax — Investasi Terbaik Seorang Developer</h2>
        <p>Banyak pemula terjebak dalam tutorial loop dan mengira bisa coding sama dengan hafal syntax bahasa pemrograman. Padahal, masalah terbesarnya adalah problem solving: bagaimana menerjemahkan solusi di kepala kita menjadi instruksi logis yang bisa dimengerti komputer. 5 platform gratis ini bakal melatih computational thinking kamu dengan cara yang seru dan menantang!</p>
      </div>

      <div class="wl-intro-callout">
        <p>Pernah gak sih kamu nonton puluhan tutorial bikin app, tapi pas buka VS Code kosong dan mau bikin dari nol, kamu langsung bingung mulai dari mana? <strong>Itulah tanda logika pemrogramannya belum matang.</strong> Syntax gampang dicari di Google atau AI, tapi kemampuan merancang langkah logis pemecahan masalah hanya bisa didapatkan melalui latihan konsisten.</p>
      </div>

      <p>Kabar baiknya, melatih logika pemrograman sekarang gak harus lewat materi kuliah teoretis yang ngebosenin. Saat ini, ada banyak website keren yang dirancang khusus untuk menguji logika, algoritma, dan problem solving kamu dengan gamifikasi, visualisasi interaktif, hingga feedback langsung dari komunitas. Berikut adalah 5 platform terbaik yang wajib kamu coba!</p>

      <div class="wl-section-title">5 Platform Terbaik untuk Melatih Logika Programming</div>

      <div class="wl-platform-list">
        
        <!-- Platform 1: Codewars -->
        <div class="wl-card codewars">
          <div class="wl-card-header">
            <div class="wl-card-title">
              <div class="wl-card-icon">⚔️</div>
              <h3>1. Codewars</h3>
            </div>
            <a href="https://www.codewars.com" target="_blank" rel="noopener noreferrer" class="wl-card-link-badge">
              <span>codewars.com</span> ↗
            </a>
          </div>
          <p class="wl-card-desc">
            Codewars menyajikan tantangan coding (disebut sebagai "kata") dengan tema seni bela diri. Kamu memulai sebagai pemula di level kyu paling rendah dan terus naik tingkat seiring keberhasilan memecahkan soal. Daya tarik utama platform ini adalah setelah berhasil submit kode, kamu bisa melihat solusi karya developer lain. Ini cara terbaik belajar menulis kode yang elegan dan efisien.
          </p>
          <div class="wl-suitability">
            <div class="wl-suitability-title">Cocok untuk:</div>
            <ul class="wl-suitability-list">
              <li>Pemula hingga Menengah</li>
              <li>Melatih algoritma dasar & modular</li>
              <li>Belajar berbagai bahasa pemrograman</li>
            </ul>
          </div>
        </div>

        <!-- Platform 2: HackerRank -->
        <div class="wl-card hackerrank">
          <div class="wl-card-header">
            <div class="wl-card-title">
              <div class="wl-card-icon">💚</div>
              <h3>2. HackerRank</h3>
            </div>
            <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" class="wl-card-link-badge">
              <span>hackerrank.com</span> ↗
            </a>
          </div>
          <p class="wl-card-desc">
            HackerRank menyediakan latihan yang sangat terstruktur berdasarkan topik seperti algoritma, SQL, struktur data, matematika, hingga bahasa spesifik (Java, Python, dll). Keunggulan platform ini adalah reputasinya yang diakui secara global: banyak sekali perusahaan teknologi top yang menggunakan platform HackerRank untuk melakukan technical assessment dalam rekrutmen kerja developer.
          </p>
          <div class="wl-suitability">
            <div class="wl-suitability-title">Cocok untuk:</div>
            <ul class="wl-suitability-list">
              <li>Persiapan interview kerja</li>
              <li>Latihan algoritma & SQL</li>
              <li>Belajar problem solving terstruktur</li>
            </ul>
          </div>
        </div>

        <!-- Platform 3: LeetCode -->
        <div class="wl-card leetcode">
          <div class="wl-card-header">
            <div class="wl-card-title">
              <div class="wl-card-icon">👑</div>
              <h3>3. LeetCode</h3>
            </div>
            <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" class="wl-card-link-badge">
              <span>leetcode.com</span> ↗
            </a>
          </div>
          <p class="wl-card-desc">
            LeetCode merupakan 'gold standard' bagi software engineer yang ingin melamar kerja ke perusahaan Big Tech (FAANG). Platform ini memuat ribuan soal algoritma dengan tingkat kesulitan Easy, Medium, dan Hard yang sering sekali keluar persis dalam interview kerja teknis. LeetCode melatih kamu berpikir kritis tentang optimasi performa kode (time & space complexity).
          </p>
          <div class="wl-suitability">
            <div class="wl-suitability-title">Cocok untuk:</div>
            <ul class="wl-suitability-list">
              <li>Persiapan technical interview</li>
              <li>Belajar Struktur Data & Algoritma (DSA)</li>
              <li>Meningkatkan computational thinking tingkat lanjut</li>
            </ul>
          </div>
        </div>

        <!-- Platform 4: CodinGame -->
        <div class="wl-card codingame">
          <div class="wl-card-header">
            <div class="wl-card-title">
              <div class="wl-card-icon">🎮</div>
              <h3>4. CodinGame</h3>
            </div>
            <a href="https://www.codingame.com" target="_blank" rel="noopener noreferrer" class="wl-card-link-badge">
              <span>codingame.com</span> ↗
            </a>
          </div>
          <p class="wl-card-desc">
            Siapa bilang belajar coding harus membosankan? CodinGame mengubah latihan logika pemrograman menjadi game 2D/3D interaktif. Kamu akan menulis kode untuk mengontrol karakter game, menembak musuh, atau balapan pesawat terbang. Platform ini sangat ideal untuk pemula karena memberikan feedback visual langsung yang membantu memahami aliran logika.
          </p>
          <div class="wl-suitability">
            <div class="wl-suitability-title">Cocok untuk:</div>
            <ul class="wl-suitability-list">
              <li>Pemula absolute</li>
              <li>Belajar coding seru sambil bermain</li>
              <li>Meningkatkan motivasi belajar pemrograman</li>
            </ul>
          </div>
        </div>

        <!-- Platform 5: Exercism -->
        <div class="wl-card exercism">
          <div class="wl-card-header">
            <div class="wl-card-title">
              <div class="wl-card-icon">🚀</div>
              <h3>5. Exercism</h3>
            </div>
            <a href="https://exercism.org" target="_blank" rel="noopener noreferrer" class="wl-card-link-badge">
              <span>exercism.org</span> ↗
            </a>
          </div>
          <p class="wl-card-desc">
            Exercism menawarkan pengalaman unik dengan kurikulum belajar yang sangat rapi untuk 70+ bahasa pemrograman. Menariknya, Exercism memiliki opsi "Mentored Track" gratis, di mana kode buatan kamu akan direview langsung oleh mentor manusia secara cuma-cuma sebelum kamu lanjut ke babak berikutnya. Ini membantu kamu menulis kode yang bersih (clean code) dan sesuai best practices.
          </p>
          <div class="wl-suitability">
            <div class="wl-suitability-title">Cocok untuk:</div>
            <ul class="wl-suitability-list">
              <li>Belajar secara bertahap & terstruktur</li>
              <li>Mendapatkan feedback code review nyata</li>
              <li>Mengembangkan best practices jangka panjang</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="wl-section-title">Roadmap Belajar: Mana yang Harus Dicoba Dulu?</div>

      <p>Jika kamu benar-benar pemula yang baru belajar dasar pemrograman, jangan langsung loncat ke LeetCode karena berpotensi membuat kamu frustrasi dan malah menyerah. Ikutilah peta jalan terarah di bawah ini:</p>

      <div class="wl-roadmap">
        
        <div class="wl-roadmap-step">
          <span class="wl-roadmap-step-badge">Langkah 1</span>
          <h4>CodinGame (Visual & Menyenangkan)</h4>
          <p>Mulai dari sini untuk membangun motivasi dan memahami logika perulangan (loops) dan kondisi (if-else) melalui visual game yang menarik.</p>
        </div>

        <div class="wl-roadmap-step">
          <span class="wl-roadmap-step-badge">Langkah 2</span>
          <h4>Exercism (Belajar Terstruktur + Mentoring)</h4>
          <p>Lanjutkan ke Exercism untuk mempelajari suatu bahasa pemrograman secara mendalam, dipandu dengan feedback review gratis dari developer senior.</p>
        </div>

        <div class="wl-roadmap-step">
          <span class="wl-roadmap-step-badge">Langkah 3</span>
          <h4>HackerRank / Codewars (Penguatan Algoritma)</h4>
          <p>Latihlah pemecahan kasus algoritma murni di Codewars untuk melatih modular coding, dan HackerRank untuk pembiasaan kuis dan database SQL.</p>
        </div>

        <div class="wl-roadmap-step">
          <span class="wl-roadmap-step-badge">Langkah 4</span>
          <h4>LeetCode (Persiapan Kerja & Optimasi)</h4>
          <p>Setelah logika dasar kamu sudah kuat, cobalah LeetCode. Fokus pada optimasi kode, struktur data (array, string, stacks, queue), dan problem-solving interview.</p>
        </div>

      </div>

      <div class="wl-callout-footer">
        <p><strong>Reality Check:</strong> Menjadi software engineer andal bukan soal seberapa banyak video tutorial yang kamu tonton dengan pasif, melainkan seberapa sering kamu melatih otak kamu memecahkan masalah. Syntax selalu bisa dicari di dokumentasi atau AI, tapi logika penyelesaian masalah hanya tumbuh melalui konsistensi latihan.</p>
      </div>

      <div class="wl-cta">
        <h2>Ingin Tips & Insight Belajar Coding Setiap Hari?</h2>
        <p>Saya rutin membagikan tips coding gratis, roadmap pemrograman terarah, tools AI terbaru, serta insight dunia kerja IT yang dikemas santai untuk pemula!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "1 Jun 2026",
    isoDate: "2026-06-01",
    readTime: "8 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Logika Pemrograman", "Belajar Coding", "Pemula", "Problem Solving", "Web Development", "Codewars", "HackerRank", "LeetCode", "CodinGame", "Exercism"],
    imageSrc: "/images/blog/logika-pemrograman.png",
    relatedPosts: ["laptop-programming-mahasiswa-2026", "ai-vs-developer-2026"],
  },
  "ide-proyek-portfolio-fullstack-ai": {
    title: "Bosan Bikin Todo-List? 3 Ide Proyek Fullstack Web Unik Berbasis AI untuk Bikin Portofolio Kamu Standout",
    excerpt: "Portofolio Todo-List sudah terlalu umum dan membosankan. Berikut 3 ide proyek fullstack berbasis AI yang memecahkan masalah nyata dan langsung menarik perhatian recruiter!",
    content: `
      <style>
        .ap-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.3) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .ap-hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 300px; height: 300px; background: radial-gradient(circle, hsl(var(--primary)/0.08) 0%, transparent 70%); pointer-events: none; }
        .ap-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .ap-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .ap-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }
        .ap-intro-box { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); margin: 1.5rem 0; line-height: 1.7; }
        .ap-list { display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0; }
        .ap-card { padding: 2rem; border-radius: 1.25rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); box-shadow: 0 4px 20px rgba(0,0,0,0.02); transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
        .ap-card::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: transparent; transition: background 0.3s; }
        .ap-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.06); border-color: hsl(var(--primary)/0.2); }
        .ap-card.recipe:hover::before { background: #10b981; }
        .ap-card.resume:hover::before { background: #3b82f6; }
        .ap-card.reviewer:hover::before { background: #8b5cf6; }
        
        .ap-card-header { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem; }
        .ap-card-title { display: flex; align-items: center; gap: 0.75rem; }
        .ap-card-title h3 { font-size: 1.3rem; font-weight: 700; margin: 0 !important; color: hsl(var(--foreground)); }
        .ap-card-icon { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 0.5rem; font-size: 1.25rem; font-weight: 800; }
        .ap-card.recipe .ap-card-icon { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .ap-card.resume .ap-card-icon { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .ap-card.reviewer .ap-card-icon { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; }

        .ap-badge { display: inline-flex; align-items: center; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; }
        .ap-card.recipe .ap-badge { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .ap-card.resume .ap-badge { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .ap-card.reviewer .ap-badge { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; }

        .ap-card-desc { font-size: 0.95rem; line-height: 1.7; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem; }
        
        .ap-detail-box { background: hsl(var(--muted)/0.5); padding: 1.25rem; border-radius: 0.75rem; border: 1px solid hsl(var(--border)); margin-bottom: 1.5rem; }
        .ap-detail-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem; }
        .ap-detail-text { font-size: 0.9rem; line-height: 1.6; color: hsl(var(--foreground)); margin: 0; }
        
        .ap-stack-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
        .ap-stack-tag { font-size: 0.75rem; font-weight: 600; padding: 0.15rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); }
        
        .ap-impact-bar-container { display: flex; align-items: center; gap: 0.75rem; margin-top: 1rem; }
        .ap-impact-label { font-size: 0.8rem; font-weight: 700; color: hsl(var(--foreground)); min-width: 120px; }
        .ap-impact-bg { flex-grow: 1; height: 8px; border-radius: 9999px; background: hsl(var(--border)); overflow: hidden; }
        .ap-impact-fill { height: 100%; border-radius: 9999px; }
        .ap-card.recipe .ap-impact-fill { background: #10b981; width: 85%; }
        .ap-card.resume .ap-impact-fill { background: #3b82f6; width: 95%; }
        .ap-card.reviewer .ap-impact-fill { background: #8b5cf6; width: 90%; }
        .ap-impact-score { font-size: 0.8rem; font-weight: 800; color: hsl(var(--foreground)); }

        .ap-faq { display: flex; flex-direction: column; gap: 1rem; margin: 2.5rem 0; }
        .ap-faq-item { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .ap-faq-q { font-weight: 700; font-size: 0.95rem; color: hsl(var(--foreground)); margin-bottom: 0.5rem; }
        .ap-faq-a { font-size: 0.9rem; line-height: 1.6; color: hsl(var(--muted-foreground)); }

        .ap-callout { padding: 1.5rem; border-radius: 1rem; border-left: 4px solid #3b82f6; background: hsl(var(--muted)); margin: 2rem 0; }
        .ap-callout p { margin: 0; font-size: 0.95rem; line-height: 1.7; color: hsl(var(--foreground)); }

        .ap-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .ap-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .ap-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .ap-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .ap-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .ap-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .ap-cta a svg { transition: transform 0.2s; }
        .ap-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
        @media (max-width: 768px) { .ap-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="ap-hero">
        <h2>Impression Over Cliché — Standout di Antara Ribuan Pelamar</h2>
        <p>Mari kita reality check sejenak. Di era rekrutmen tech modern 2026, memiliki portofolio berisi Todo-List, aplikasi kalkulator, atau tiruan klon Netflix sederhana sudah tidak lagi membuat recruiter melirik. Mengapa? Karena ribuan pelamar lain juga memiliki portofolio yang sama persis hasil copy-paste dari video tutorial. Jika kamu ingin dilirik startup top, kamu wajib menunjukkan kemampuan mengintegrasikan kecerdasan buatan (AI) untuk menyelesaikan masalah nyata!</p>
      </div>

      <div class="ap-intro-box">
        <p>Recruiter dan Lead Engineer tidak mencari orang yang sekadar bisa menulis kode HTML/CSS dasar. Mereka mencari developer yang <strong>paham alur produk, mampu mengintegrasikan API pihak ketiga (terutama LLM seperti Gemini/Claude), dan bisa memecahkan problem praktis.</strong> 3 ide proyek fullstack berbasis AI ini akan membuktikan bahwa kamu siap kerja di era modern!</p>
      </div>

      <p>Mengintegrasikan AI ke dalam aplikasi web kamu saat ini sangatlah mudah berkat SDK modern seperti Google Gen AI SDK atau Anthropic SDK. Kamu tidak harus menjadi Machine Learning Engineer yang paham matematika rumit. Cukup jadilah fullstack developer cerdas yang tahu bagaimana menyajikan solusi berbasis AI dengan user interface yang bersih and responsif. Ini dia 3 idenya!</p>

      <div class="ap-section-title">3 Ide Proyek Fullstack Web Berbasis AI yang Wajib Kamu Bangun</div>

      <div class="ap-list">
        
        <!-- Project 1: AI Smart Recipe Planner -->
        <div class="ap-card recipe">
          <div class="ap-card-header">
            <div class="ap-card-title">
              <div class="ap-card-icon">🍳</div>
              <h3>1. SmartChef AI — Perencana Resep Berbasis Bahan Sisa Kulkas</h3>
            </div>
            <span class="ap-badge">Kesulitan: Medium</span>
          </div>
          <p class="ap-card-desc">
            Aplikasi web yang membantu mengurangi food waste (limbah makanan). User cukup memasukkan daftar bahan makanan apa saja yang tersisa di dalam kulkas mereka (misal: "telur, nasi dingin, buncis setengah layu, kecap"). AI akan menganalisis bahan tersebut dan menggenerate resep masakan yang lezat, lengkap dengan takaran bumbu, instruksi memasak langkah-demi-langkah, serta analisis nutrisi makro secara real-time.
          </p>
          
          <div class="ap-detail-box">
            <div class="ap-detail-title">Teknologi Rekomendasi (Tech Stack):</div>
            <div class="ap-stack-tags">
              <span class="ap-stack-tag">Next.js (React)</span>
              <span class="ap-stack-tag">Tailwind CSS</span>
              <span class="ap-stack-tag">Gemini API / Claude API</span>
              <span class="ap-stack-tag">Supabase (PostgreSQL)</span>
            </div>
          </div>
          
          <div class="ap-detail-box">
            <div class="ap-detail-title">Nilai Jual di Portofolio (Mengapa Ini Standout):</div>
            <p class="ap-detail-text">
              Proyek ini membuktikan kamu mampu menangani <strong>unstructured user input</strong> dan menerjemahkannya menjadi <strong>structured JSON output</strong> menggunakan AI prompt engineering. Kamu juga bisa menambahkan fitur menyimpan resep favorit ke database (Supabase), mendownload PDF resep masakan, hingga integrasi API pemesanan grocery belanjaan jika bahan utama resep kurang.
            </p>
          </div>
          
          <div class="ap-impact-bar-container">
            <span class="ap-impact-label">Recruiter Impact Score</span>
            <div class="ap-impact-bg">
              <div class="ap-impact-fill"></div>
            </div>
            <span class="ap-impact-score">8.5 / 10</span>
          </div>
        </div>

        <!-- Project 2: AI Resume ATS Optimizer -->
        <div class="ap-card resume">
          <div class="ap-card-header">
            <div class="ap-card-title">
              <div class="ap-card-icon">📄</div>
              <h3>2. OptiResume AI — Analisis & Penyunting Resume ATS Cerdas</h3>
            </div>
            <span class="ap-badge">Kesulitan: Hard</span>
          </div>
          <p class="ap-card-desc">
            Aplikasi yang memecahkan masalah terbesar pencari kerja: lolos seleksi berkas ATS (Applicant Tracking System). User mengunggah file resume/CV mereka dalam format PDF, lalu menempelkan tautan/teks deskripsi pekerjaan (Job Description) yang ingin mereka lamar. AI akan mendeteksi keyword apa saja yang kurang pada resume pelamar, menilai skor kecocokan (Matching Score), dan memberikan saran penulisan ulang deskripsi kerja secara spesifik untuk meningkatkan peluang lolos.
          </p>
          
          <div class="ap-detail-box">
            <div class="ap-detail-title">Teknologi Rekomendasi (Tech Stack):</div>
            <div class="ap-stack-tags">
              <span class="ap-stack-tag">Next.js (App Router)</span>
              <span class="ap-stack-tag">pdf-parse (PDF Text Extractor)</span>
              <span class="ap-stack-tag">Gemini API (Structured Outputs)</span>
              <span class="ap-stack-tag">Diff-Match-Patch (Visualisasi Perbandingan)</span>
            </div>
          </div>
          
          <div class="ap-detail-box">
            <div class="ap-detail-title">Nilai Jual di Portofolio (Mengapa Ini Standout):</div>
            <p class="ap-detail-text">
              Proyek ini bernilai sangat tinggi karena menyelesaikan <strong>masalah bernilai ekonomi/karir yang nyata.</strong> Ini membuktikan kamu menguasai fitur backend kompleks seperti <strong>file upload handling, parsing PDF binary data, manipulasi string tingkat lanjut, serta visualisasi perbandingan (diff views)</strong> secara interaktif di sisi frontend.
            </p>
          </div>
          
          <div class="ap-impact-bar-container">
            <span class="ap-impact-label">Recruiter Impact Score</span>
            <div class="ap-impact-bg">
              <div class="ap-impact-fill"></div>
            </div>
            <span class="ap-impact-score">9.5 / 10</span>
          </div>
        </div>

        <!-- Project 3: AI Code Security Explainer & Reviewer -->
        <div class="ap-card reviewer">
          <div class="ap-card-header">
            <div class="ap-card-title">
              <div class="ap-card-icon">🛡️</div>
              <h3>3. CodeShield AI — Detektor Keamanan & Asisten Review Kode</h3>
            </div>
            <span class="ap-badge">Kesulitan: Medium-Hard</span>
          </div>
          <p class="ap-card-desc">
            Aplikasi web edukatif tempat developer menempelkan potongan kode (code snippet) mereka yang ditulis dalam berbagai bahasa pemrograman. AI akan memindai kode tersebut untuk mencari celah keamanan (seperti SQL Injection, XSS, Hardcoded API Key), memberikan visualisasi baris kode mana yang bermasalah, dan secara cerdas menulis ulang kode tersebut menjadi lebih aman dan efisien sesuai standar *clean code*.
          </p>
          
          <div class="ap-detail-box">
            <div class="ap-detail-title">Teknologi Rekomendasi (Tech Stack):</div>
            <div class="ap-stack-tags">
              <span class="ap-stack-tag">React / Vite</span>
              <span class="ap-stack-tag">Monaco Editor (Code Editor Component)</span>
              <span class="ap-stack-tag">Prism.js (Syntax Highlighting)</span>
              <span class="ap-stack-tag">Claude 3.5 Sonnet / Gemini API</span>
            </div>
          </div>
          
          <div class="ap-detail-box">
            <div class="ap-detail-title">Nilai Jual di Portofolio (Mengapa Ini Standout):</div>
            <p class="ap-detail-text">
              Membangun proyek pembantu sesama developer (developer tools) membuktikan bahwa kamu peduli pada kualitas penulisan kode dan standar industri. Integrasi dengan <strong>Monaco Editor (komponen editor di balik VS Code)</strong> membuktikan kamu mampu menangani *state* editor yang kompleks dan menyajikan performa rendering teks yang optimal.
            </p>
          </div>
          
          <div class="ap-impact-bar-container">
            <span class="ap-impact-label">Recruiter Impact Score</span>
            <div class="ap-impact-bg">
              <div class="ap-impact-fill"></div>
            </div>
            <span class="ap-impact-score">9.0 / 10</span>
          </div>
        </div>

      </div>

      <div class="ap-section-title">FAQ (Tanya Jawab Seputar Integrasi AI)</div>

      <div class="ap-faq">
        <div class="ap-faq-item">
          <div class="ap-faq-q">Apakah membuat aplikasi web AI seperti ini berbayar dan mahal?</div>
          <div class="ap-faq-a">Sama sekali tidak! Saat ini, Google menyediakan API Key Gemini secara gratis (dengan batasan rate limit yang sangat cukup untuk tahap development dan demo portofolio). Supabase dan Vercel juga memiliki tier gratis yang luar biasa luas, sehingga kamu bisa mendeploy seluruh aplikasi ini 100% tanpa keluar uang sepeser pun.</div>
        </div>
        <div class="ap-faq-item">
          <div class="ap-faq-q">Saya baru belajar React, apakah proyek-proyek ini terlalu sulit bagi saya?</div>
          <div class="ap-faq-a">Jangan khawatir! Mulailah secara bertahap. Proyek nomor 1 (SmartChef AI) adalah tempat terbaik untuk memulai karena alur logika data flow-nya cenderung sederhana. Cukup buat UI form sederhana, kirim input ke API, dan tampilkan hasilnya secara terstruktur. Seiring meningkatnya pemahaman state-management, kamu bisa menantang diri membangun proyek ATS Optimizer.</div>
        </div>
        <div class="ap-faq-item">
          <div class="ap-faq-q">Bagaimana cara menyajikan proyek ini agar recruiter benar-benar terkesan?</div>
          <div class="ap-faq-a">Kuncinya ada pada <strong>ReadMe GitHub</strong> dan <strong>Demo Live</strong>. Sediakan video demonstrasi singkat berdurasi 1 menit di file ReadMe kamu, jelaskan tantangan arsitektur yang kamu hadapi, tuliskan bagan alur data, dan pastikan tautan live demo kamu (misal di Vercel) dapat langsung diakses tanpa kendala.</div>
        </div>
      </div>

      <div class="ap-callout">
        <p><strong>Ingat:</strong> Recruiter senior memindai puluhan CV setiap hari. Portofolio berisi proyek kloningan yang pasif tidak lagi memicu rasa penasaran mereka. Sebaliknya, aplikasi interaktif yang menyelesaikan masalah nyata dengan sentuhan kecerdasan buatan akan langsung menempatkan kamu di barisan terdepan seleksi berkas!</p>
      </div>

      <div class="ap-cta">
        <h2>Tertarik Belajar Coding Terarah & Tools AI Terbaru?</h2>
        <p>Yuk ikuti akun Instagram saya buat dapet template prompt praktis, tutorial coding harian, update tools AI developer terpopuler, serta wawasan karir tech yang dikemas santai untuk pemula!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "2 Jun 2026",
    isoDate: "2026-06-02",
    readTime: "10 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Ide Proyek", "Portofolio", "Fullstack", "Web Development", "AI", "React", "Next.js", "Recruitment", "Career", "2026"],
    imageSrc: "/images/blog/portfolio-ai-projects.png",
    relatedPosts: ["website-terbaik-logika-pemrograman-pemula", "ai-vs-developer-2026"],
  },
  "roadmap-fullstack-developer-ai-2026": {
    title: "Roadmap Fullstack Developer + AI 2026: Panduan Lengkap dari Nol Sampai Siap Kerja & Freelance",
    excerpt: "Bingung mulai belajar programming di 2026? Ini roadmap fullstack modern + AI terlengkap — dari fundamental web dev, Node.js/Laravel, database, deployment, hingga RAG AI untuk portofolio siap kerja!",
    content: `
      <style>
        .rm-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.3) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .rm-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .rm-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .rm-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }
        .rm-intro-box { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); margin: 1.5rem 0; line-height: 1.7; }
        
        /* Timeline style for 7 Phases */
        .rm-timeline { display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0; position: relative; padding-left: 2.5rem; }
        .rm-timeline::before { content: ''; position: absolute; left: 0.85rem; top: 0.5rem; bottom: 0.5rem; width: 2px; background: hsl(var(--border)); }
        
        .rm-phase-card { padding: 1.75rem; border-radius: 1.25rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); box-shadow: 0 4px 15px rgba(0,0,0,0.01); position: relative; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .rm-phase-card::before { content: ''; position: absolute; left: -2rem; top: 1.75rem; width: 14px; height: 14px; border-radius: 50%; background: hsl(var(--foreground)); border: 3px solid hsl(var(--background)); z-content: 10; }
        .rm-phase-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.03); border-color: hsl(var(--primary)/0.2); }
        
        .rm-phase-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid hsl(var(--border)); }
        .rm-phase-label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(var(--muted-foreground)); }
        .rm-phase-title { font-size: 1.2rem; font-weight: 800; color: hsl(var(--foreground)); margin: 0 !important; }
        
        .rm-details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 1rem; }
        @media (max-width: 768px) { .rm-details-grid { grid-template-columns: 1fr; } }
        
        .rm-sub-section { display: flex; flex-direction: column; gap: 0.5rem; }
        .rm-sub-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: hsl(var(--muted-foreground)); }
        .rm-sub-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.35rem; }
        .rm-sub-list li { font-size: 0.88rem !important; color: hsl(var(--foreground)) !important; margin-bottom: 0 !important; display: flex; align-items: center; gap: 0.5rem; }
        .rm-sub-list li::before { content: '•'; color: hsl(var(--muted-foreground)); font-weight: bold; }
        
        .rm-resource-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem; }
        .rm-resource-badge { display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.72rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 9999px; background: hsl(var(--primary) / 0.08); color: hsl(var(--primary)); border: 1px solid hsl(var(--primary) / 0.15); text-decoration: none !important; transition: all 0.2s ease-in-out; cursor: pointer; }
        .rm-resource-badge::after { content: '↗'; font-size: 0.65rem; transition: transform 0.2s ease-in-out; }
        .rm-resource-badge:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)) !important; border-color: hsl(var(--primary)); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .rm-resource-badge:hover::after { transform: translate(1px, -1px); }
        
        .rm-target-box { background: hsl(var(--muted)/0.4); padding: 1rem 1.25rem; border-radius: 0.75rem; border: 1px solid hsl(var(--border)); margin-top: 1.25rem; }
        .rm-target-title { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: hsl(var(--foreground)); margin-bottom: 0.5rem; }
        .rm-target-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.35rem; }
        .rm-target-list li { font-size: 0.85rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; display: flex; align-items: center; gap: 0.5rem; }
        .rm-target-list li::before { content: '☑'; color: hsl(var(--foreground)); font-size: 0.95rem; }

        /* Path split for Laravel vs Node.js */
        .rm-path-split { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 1.5rem 0; }
        @media (max-width: 768px) { .rm-path-split { grid-template-columns: 1fr; } }
        .rm-path-card { padding: 1.25rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); }
        .rm-path-card h4 { font-size: 1.05rem; font-weight: 700; color: hsl(var(--foreground)); margin: 0 0 0.5rem 0; display: flex; align-items: center; gap: 0.5rem; }
        .rm-path-badge { font-size: 0.7rem; font-weight: 700; padding: 0.1rem 0.4rem; border-radius: 0.25rem; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); }
        .rm-path-card.laravel h4 { color: #ff2d20; }
        .rm-path-card.nodejs h4 { color: #339933; }

        /* Portfolio section style */
        .rm-portfolio-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin: 2rem 0; }
        .rm-portfolio-card { padding: 1.5rem; border-radius: 1rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); display: flex; flex-direction: column; gap: 0.75rem; }
        .rm-portfolio-card h4 { font-size: 1rem; font-weight: 700; color: hsl(var(--foreground)); margin: 0; display: flex; align-items: center; justify-content: space-between; }
        .rm-portfolio-tier { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; padding: 0.15rem 0.5rem; border-radius: 0.25rem; }
        .rm-portfolio-card.beginner .rm-portfolio-tier { background: rgba(16, 185, 129, 0.1); color: #10b981; }
        .rm-portfolio-card.intermediate .rm-portfolio-tier { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .rm-portfolio-card.advanced .rm-portfolio-tier { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; }
        .rm-portfolio-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.4rem; }
        .rm-portfolio-list li { font-size: 0.88rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; display: flex; align-items: center; gap: 0.5rem; }
        .rm-portfolio-list li::before { content: '✦'; color: hsl(var(--foreground)); font-size: 0.75rem; }

        /* Do and Don't Grid */
        .rm-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2.5rem 0; }
        @media (max-width: 768px) { .rm-compare-grid { grid-template-columns: 1fr; } }
        .rm-compare-card { padding: 1.75rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .rm-compare-card.dont { border-top: 4px solid #ef4444; }
        .rm-compare-card.do { border-top: 4px solid #10b981; }
        .rm-compare-card h3 { font-size: 1.15rem; font-weight: 800; margin: 0 0 1rem 0 !important; color: hsl(var(--foreground)); }
        .rm-compare-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .rm-compare-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .rm-compare-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--muted-foreground)); }
        .rm-compare-card.dont .rm-compare-list li::before { color: #ef4444; }
        .rm-compare-card.do .rm-compare-list li::before { color: #10b981; }

        .rm-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .rm-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .rm-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .rm-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .rm-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .rm-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .rm-cta a svg { transition: transform 0.2s; }
        .rm-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
        @media (max-width: 768px) { .rm-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="rm-hero">
        <h2>Navigasi Belajar Terarah di Tengah Banjir Informasi 2026</h2>
        <p>Jika kamu baru mulai belajar programming di tahun 2026, kemungkinan besar kamu bingung karena informasi di internet terlalu banyak. Ada yang bilang belajar React. Ada yang bilang Laravel. Ada juga yang bilang AI akan menggantikan programmer sepenuhnya sehingga belajar coding sia-sia. Lalu sebenarnya harus mulai dari mana? Artikel ini akan membahas roadmap terstruktur yang saya rekomendasikan berdasarkan kebutuhan industri nyata dan pengalaman membimbing ribuan developer pemula agar siap kerja dan freelance!</p>
      </div>

      <div class="rm-intro-box">
        <p>Tahun 2026 bukan tentang memilih antara menjadi Fullstack Developer murni atau beralih total ke AI. <strong>Developer yang paling dicari saat ini adalah mereka yang mampu menggabungkan keduanya.</strong> Di masa depan, perusahaan tidak membayar orang yang paling banyak menghafal syntax pemrograman, melainkan membayar orang yang bisa membangun solusi andal secara jauh lebih cepat menggunakan bantuan AI.</p>
      </div>

      <div class="rm-section-title">7 Fase Roadmap Belajar Fullstack + AI 2026</div>

      <div class="rm-timeline">
        
        <!-- Fase 1 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 1</span>
            <h3 class="rm-phase-title">Fundamental Web Development</h3>
          </div>
          <p class="rm-phase-desc">Membangun fondasi utama. Jangan terburu-buru loncat ke framework Javascript modern sebelum kamu memahami cara kerja web browser secara mendasar.</p>
          
          <div class="rm-details-grid">
            <div class="rm-sub-section">
              <span class="rm-sub-title">1. HTML (Struktur)</span>
              <ul class="rm-sub-list">
                <li>Pelajari semantik tag, form input, SEO dasar.</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">FreeCodeCamp</a>
                <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">MDN Docs</a>
              </div>
            </div>
            
            <div class="rm-sub-section">
              <span class="rm-sub-title">2. CSS (Styling)</span>
              <ul class="rm-sub-list">
                <li>Fokus pada Flexbox, Grid Layout, dan Responsive Design.</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">CSS Tricks</a>
                <a href="https://flexboxfroggy.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Flexbox Froggy</a>
              </div>
            </div>

            <div class="rm-sub-section" style="grid-column: span 2;">
              <span class="rm-sub-title">3. JavaScript Dasar (Logic)</span>
              <ul class="rm-sub-list">
                <li>Pelajari Variable, Function, Looping, Array, Object, dan DOM Manipulation.</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://javascript.info" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">JavaScript.info</a>
                <a href="https://eloquentjavascript.net" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Eloquent JS</a>
                <a href="https://www.codepolitan.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">CODEPOLITAN</a>
              </div>
            </div>
          </div>
          
          <div class="rm-target-box">
            <div class="rm-target-title">Target Milestone Proyek:</div>
            <ul class="rm-target-list">
              <li>Landing page responsif (HTML + CSS)</li>
              <li>Aplikasi Todo App interaktif dengan local storage</li>
              <li>Kalkulator fungsional & Notes App sederhana</li>
            </ul>
          </div>
        </div>

        <!-- Fase 2 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 2</span>
            <h3 class="rm-phase-title">Version Control System (Git & GitHub)</h3>
          </div>
          <p class="rm-phase-desc">Kenapa penting? Karena hampir semua perusahaan teknologi menggunakan Git untuk kolaborasi tim. Tanpa Git, kamu tidak bisa bekerja sebagai developer profesional.</p>
          
          <div class="rm-details-grid">
            <div class="rm-sub-section">
              <span class="rm-sub-title">Pelajari:</span>
              <ul class="rm-sub-list">
                <li>Repository initialization, commit, push/pull.</li>
                <li>Branching, Merge Conflict, Pull Request (PR).</li>
              </ul>
            </div>
            <div class="rm-sub-section">
              <span class="rm-sub-title">Resource Rekomendasi:</span>
              <div class="rm-resource-badges">
                <a href="https://guides.github.com/introduction/git-handbook/" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Git Handbook</a>
                <a href="https://learngitbranching.js.org" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Learn Git Branching</a>
              </div>
            </div>
          </div>
          
          <div class="rm-target-box">
            <div class="rm-target-title">Target Milestone:</div>
            <ul class="rm-target-list">
              <li>Semua proyek latihan tersimpan rapi dan terpublikasi di profil GitHub pribadi kamu</li>
            </ul>
          </div>
        </div>

        <!-- Fase 3 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 3</span>
            <h3 class="rm-phase-title">Frontend Modern (React & Next.js)</h3>
          </div>
          <p class="rm-phase-desc">Meningkatkan keahlian frontend untuk membangun Single Page Application (SPA) yang interaktif, cepat, dan berstandar industri modern.</p>
          
          <div class="rm-details-grid">
            <div class="rm-sub-section">
              <span class="rm-sub-title">1. React (Library)</span>
              <ul class="rm-sub-list">
                <li>Pelajari Component, State, Props, Hooks (useState, useEffect).</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">React Docs</a>
                <a href="https://scrimba.com/learn/learnreact" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Scrimba React</a>
              </div>
            </div>
            <div class="rm-sub-section">
              <span class="rm-sub-title">2. Next.js (Meta-Framework)</span>
              <ul class="rm-sub-list">
                <li>Pelajari File-system Routing, Server Components, API Routes.</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Next.js Docs</a>
              </div>
            </div>
          </div>
          
          <div class="rm-target-box">
            <div class="rm-target-title">Target Milestone Proyek:</div>
            <ul class="rm-target-list">
              <li>Dashboard admin statis responsif</li>
              <li>Company Profile dengan animasi halus</li>
              <li>Landing Page SaaS modern dengan optimalisasi SEO</li>
            </ul>
          </div>
        </div>

        <!-- Fase 4 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 4</span>
            <h3 class="rm-phase-title">Backend Development</h3>
          </div>
          <p class="rm-phase-desc">Belajar membangun logika sisi server, manajemen otentikasi, dan melayani komunikasi data API. Pilih <strong>salah satu</strong> jalur di bawah ini sesuai kenyamanan belajar kamu:</p>
          
          <div class="rm-path-split">
            <!-- Jalur Laravel -->
            <div class="rm-path-card laravel">
              <h4>Jalur Laravel <span class="rm-path-badge">PHP</span></h4>
              <ul class="rm-sub-list">
                <li>Pelajari pola MVC (Model-View-Controller).</li>
                <li>Database Migration & ORM Eloquent.</li>
                <li>Authentication & JWT/Sanctum REST API.</li>
              </ul>
              <div class="rm-resource-badges" style="margin-top: 0.5rem;">
                <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Laravel Docs</a>
                <a href="https://laracasts.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Laracasts</a>
              </div>
            </div>
            
            <!-- Jalur Node.js -->
            <div class="rm-path-card nodejs">
              <h4>Jalur Node.js <span class="rm-path-badge">JS / TS</span></h4>
              <ul class="rm-sub-list">
                <li>Pelajari runtime Node.js & Express.js.</li>
                <li>Membangun middleware & routing backend.</li>
                <li>Otentikasi dengan JWT & RESTful API.</li>
              </ul>
              <div class="rm-resource-badges" style="margin-top: 0.5rem;">
                <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">NodeJS Docs</a>
                <a href="https://www.youtube.com/@TraversyMedia" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Traversy Media</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Fase 5 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 5</span>
            <h3 class="rm-phase-title">Database Management</h3>
          </div>
          <p class="rm-phase-desc">Belajar menyimpan, memanipulasi, dan menghubungkan data relasional secara terstruktur menggunakan DBMS.</p>
          
          <div class="rm-details-grid">
            <div class="rm-sub-section">
              <span class="rm-sub-title">Pelajari:</span>
              <ul class="rm-sub-list">
                <li>Database MySQL / PostgreSQL.</li>
                <li>Relasi Tabel (One-to-Many, Many-to-Many).</li>
                <li>Query Dasar, JOIN, Indexing untuk optimasi kecepatan query.</li>
              </ul>
            </div>
            <div class="rm-sub-section">
              <span class="rm-sub-title">Resource Rekomendasi:</span>
              <div class="rm-resource-badges">
                <a href="https://sqlbolt.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">SQLBolt (Interactive)</a>
                <a href="https://www.postgresqltutorial.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">PostgreSQL Tutorial</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Fase 6 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 6</span>
            <h3 class="rm-phase-title">Deployment & DevOps Dasar</h3>
          </div>
          <p class="rm-phase-desc">Banyak pemula berhenti belajar di fase database. Padahal, aplikasi yang hanya berjalan di localhost (komputer lokal kamu) tidak memiliki nilai nyata di mata recruiter atau klien freelance.</p>
          
          <div class="rm-details-grid">
            <div class="rm-sub-section">
              <span class="rm-sub-title">Pelajari:</span>
              <ul class="rm-sub-list">
                <li>Cloud hosting Vercel (untuk frontend Next.js).</li>
                <li>Railway / Render (untuk backend API).</li>
                <li>Sewa VPS murah, Setup Linux Server, & Docker dasar.</li>
              </ul>
            </div>
            <div class="rm-sub-section">
              <span class="rm-sub-title">Resource Rekomendasi:</span>
              <div class="rm-resource-badges">
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Vercel</a>
                <a href="https://railway.app" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Railway</a>
                <a href="https://docs.docker.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Docker Docs</a>
              </div>
            </div>
          </div>
          
          <div class="rm-target-box">
            <div class="rm-target-title">Target Milestone:</div>
            <ul class="rm-target-list">
              <li>Semua proyek buatan kamu dideploy online dan memiliki tautan demo live yang bisa diakses publik kapan saja</li>
            </ul>
          </div>
        </div>

        <!-- Fase 7 -->
        <div class="rm-phase-card">
          <div class="rm-phase-header">
            <span class="rm-phase-label">Fase 7</span>
            <h3 class="rm-phase-title">AI Integration (Spesial 2026)</h3>
          </div>
          <p class="rm-phase-desc">Inilah fase krusial yang membedakan roadmap modern 2026 dengan roadmap kuno tahun-tahun sebelumnya. Kamu dituntut mampu melengkapi aplikasi web dengan fitur kecerdasan buatan terintegrasi.</p>
          
          <div class="rm-details-grid">
            <div class="rm-sub-section">
              <span class="rm-sub-title">1. Prompt Engineering & LLM APIs</span>
              <ul class="rm-sub-list">
                <li>Membuat prompt terstruktur (Context, Role, Task, Format).</li>
                <li>Mengakses OpenAI API & Google Gemini API SDK.</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Gemini Developer Docs</a>
                <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">OpenAI API Docs</a>
              </div>
            </div>
            
            <div class="rm-sub-section">
              <span class="rm-sub-title">2. RAG Dasar (Retrieval-Augmented Gen)</span>
              <ul class="rm-sub-list">
                <li>Memahami konsep Embedding data teks.</li>
                <li>Menyimpan embedding ke Vector Database (Supabase Vector).</li>
              </ul>
              <div class="rm-resource-badges">
                <a href="https://supabase.com/docs/guides/ai" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Supabase Vector Docs</a>
                <a href="https://docs.pinecone.io/home" target="_blank" rel="noopener noreferrer" class="rm-resource-badge">Pinecone Tutorials</a>
              </div>
            </div>
          </div>
          
          <div class="rm-target-box">
            <div class="rm-target-title">Target Milestone Proyek AI:</div>
            <ul class="rm-target-list">
              <li>AI Chatbot Assistant / Smart Content Generator</li>
              <li>Aplikasi Chat PDF / AI Knowledge Base interaktif</li>
            </ul>
          </div>
        </div>

      </div>

      <div class="rm-section-title">Portofolio Project Roadmap Terarah</div>

      <p>Biar portofolio kamu dinilai terstruktur dan menunjukkan jam terbang belajar yang nyata, bangunlah proyek portofolio dengan pengelompokan tingkat kesulitan berikut:</p>

      <div class="rm-portfolio-grid">
        
        <div class="rm-portfolio-card beginner">
          <h4>Junior / Beginner <span class="rm-portfolio-tier">Fase 1-2</span></h4>
          <ul class="rm-portfolio-list">
            <li>Todo App dengan Local Storage</li>
            <li>Notes App minimalis responsif</li>
            <li>Expense Tracker (Pencatat Keuangan)</li>
          </ul>
        </div>
        
        <div class="rm-portfolio-card intermediate">
          <h4>Mid / Intermediate <span class="rm-portfolio-tier">Fase 3-5</span></h4>
          <ul class="rm-portfolio-list">
            <li>Sistem Kasir (Point of Sale)</li>
            <li>Dashboard Manajemen Kampus</li>
            <li>Sistem Reservasi Kamar Online</li>
          </ul>
        </div>
        
        <div class="rm-portfolio-card advanced">
          <h4>Senior / Advanced <span class="rm-portfolio-tier">Fase 6-7</span></h4>
          <ul class="rm-portfolio-list">
            <li>SaaS Dashboard dengan analitik grafik</li>
            <li>AI Chatbot Assistant berkonteks khusus</li>
            <li>AI Document Analyzer (Chat PDF)</li>
            <li>AI Proposal Generator otomatis</li>
          </ul>
        </div>

      </div>

      <div class="rm-section-title">Reality Check: Evaluasi Cara Belajar Kamu</div>

      <div class="rm-compare-grid">
        
        <div class="rm-compare-card dont">
          <h3>❌ Cara Belajar yang Salah</h3>
          <ul class="rm-compare-list">
            <li><strong>Nonton tutorial pasif secara maraton</strong> tanpa pernah mengetik atau mempraktikkan kodenya sendiri (<em>Tutorial Hell</em>).</li>
            <li><strong>Gonta-ganti roadmap belajar setiap minggu</strong> hanya karena tergiur teknologi baru yang sedang viral di media sosial.</li>
            <li><strong>Belajar 10 teknologi sekaligus</strong> dalam waktu bersamaan tanpa pernah menamatkan satu pun proyek aplikasi nyata.</li>
            <li><strong>Terlalu fokus menghafal syntax</strong> coding alih-alih melatih computational thinking untuk problem solving kasus nyata.</li>
          </ul>
        </div>

        <div class="rm-compare-card do">
          <h3>✅ Cara Belajar yang Benar</h3>
          <ul class="rm-compare-list">
            <li><strong>Belajar secukupnya, langsung buat proyek.</strong> Tonton materi dasar, lalu luangkan 80% waktu belajar untuk praktik langsung.</li>
            <li><strong>Upload semua progress ke GitHub.</strong> Tunjukkan jam terbang ngoding kamu melalui grafik kontribusi hijau di profil GitHub.</li>
            <li><strong>Tulis pembelajaran di LinkedIn & Twitter.</strong> Ceritakan tantangan ngoding dan solusi yang berhasil kamu temukan.</li>
            <li><strong>Mulai bangun personal branding.</strong> Bagikan tips belajar santai agar dilirik recruiter tanpa perlu lelah menyebar puluhan CV.</li>
          </ul>
        </div>

      </div>

      <div class="rm-section-title">Kesimpulan</div>

      <p>Menjadi developer di era kecerdasan buatan 2026 bukanlah tentang bersaing melawan AI, melainkan bersaing melawan developer lain yang mahir menggunakan AI. Manfaatkan bantuan kecerdasan buatan untuk mempercepat proses penulisan kode boilerplate kamu, tapi pertahankan rasa ingin tahu yang kuat untuk terus melatih logika pemecahan masalah.</p>

      <p>Fokuslah menyelesaikan satu fase demi satu fase secara konsisten. Ingat, perjalanan karir programming yang luar biasa tidak dibangun dalam waktu semalam, melainkan melalui jam terbang latihan yang gigih dan berkelanjutan. Selamat belajar, dan semoga sukses memulai perjalanan karir impian kamu!</p>

      <div class="rm-cta">
        <h2>Mau Roadmap Belajar & Tips Karir Tech Setiap Hari?</h2>
        <p>Yuk ikuti akun Instagram saya buat dapet template prompt AI siap pakai, info project roadmap terbaru, career advice IT, dan insight dunia kerja programmer!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "2 Jun 2026",
    isoDate: "2026-06-02",
    readTime: "12 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Roadmap", "Fullstack", "AI", "Web Development", "React", "Next.js", "Laravel", "Node.js", "Career", "2026", "Freelance"],
    imageSrc: "/images/blog/roadmap-fullstack-2026.png",
    relatedPosts: ["website-terbaik-logika-pemrograman-pemula", "ide-proyek-portfolio-fullstack-ai", "website-belajar-programming-gratis"],
  },
  "website-belajar-programming-gratis": {
    title: "5 Website Gratis Terbaik untuk Belajar Programming dari Nol Sampai Siap Kerja",
    excerpt: "Bingung mulai belajar coding? Ini rekomendasi 5 website belajar programming gratis terbaik dengan kurikulum terstruktur dan proyek nyata untuk membangun portofolio kerjamu dari nol!",
    content: `
      <style>
        .wb-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.3) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .wb-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .wb-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .wb-intro-box { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); margin: 1.5rem 0; line-height: 1.7; }
        .wb-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }

        /* Site Card Styles */
        .wb-site-card { padding: 1.75rem; border-radius: 1.25rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); margin-bottom: 2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.01); position: relative; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .wb-site-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.03); border-color: hsl(var(--primary)/0.2); }
        .wb-site-num { position: absolute; right: 1.75rem; top: 1.75rem; font-size: 2.5rem; font-weight: 900; color: hsl(var(--muted)/0.3); line-height: 1; }
        .wb-site-header { margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid hsl(var(--border)); }
        .wb-site-title { font-size: 1.3rem; font-weight: 800; color: hsl(var(--foreground)); margin: 0 0 0.5rem 0 !important; }

        /* Link Button Style */
        .wb-resource-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.25rem; font-size: 0.75rem; font-weight: 700; padding: 0.35rem 0.85rem; border-radius: 9999px; background: hsl(var(--primary) / 0.08); color: hsl(var(--primary)); border: 1px solid hsl(var(--primary) / 0.15); text-decoration: none !important; transition: all 0.2s ease-in-out; cursor: pointer; margin-top: 0.25rem; }
        .wb-resource-btn::after { content: '↗'; font-size: 0.7rem; transition: transform 0.2s ease-in-out; }
        .wb-resource-btn:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)) !important; border-color: hsl(var(--primary)); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .wb-resource-btn:hover::after { transform: translate(1px, -1px); }

        .wb-site-body { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 1.25rem; }
        @media (max-width: 768px) { .wb-site-body { grid-template-columns: 1fr; gap: 1rem; } }

        .wb-feature-title { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem; }
        .wb-feature-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.4rem; }
        .wb-feature-list li { font-size: 0.88rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; display: flex; align-items: center; gap: 0.5rem; }
        .wb-feature-list li::before { content: '✓'; color: #10b981; font-weight: bold; font-size: 0.95rem; }

        .wb-tags-container { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.25rem; }
        .wb-tag { font-size: 0.72rem; font-weight: 600; padding: 0.2rem 0.65rem; border-radius: 0.25rem; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); }

        /* Compare Grid Styles */
        .wb-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2.5rem 0; }
        @media (max-width: 768px) { .wb-compare-grid { grid-template-columns: 1fr; } }
        .wb-compare-card { padding: 1.75rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .wb-compare-card.dont { border-top: 4px solid #ef4444; }
        .wb-compare-card.do { border-top: 4px solid #10b981; }
        .wb-compare-card h3 { font-size: 1.15rem; font-weight: 800; margin: 0 0 1rem 0 !important; color: hsl(var(--foreground)); }
        .wb-compare-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .wb-compare-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .wb-compare-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--muted-foreground)); }
        .wb-compare-card.dont .wb-compare-list li::before { color: #ef4444; }
        .wb-compare-card.do .wb-compare-list li::before { color: #10b981; }

        /* Order List Styles */
        .wb-order-list { counter-reset: wb-counter; list-style: none !important; padding: 0 !important; margin: 2rem 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .wb-order-list li { counter-increment: wb-counter; padding: 1rem 1.25rem 1rem 3.5rem; position: relative; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; font-size: 0.9rem !important; line-height: 1.7; color: hsl(var(--muted-foreground)) !important; }
        .wb-order-list li::before { content: counter(wb-counter); position: absolute; left: 1.25rem; top: 1rem; font-size: 0.85rem; font-weight: 800; color: hsl(var(--foreground)); background: hsl(var(--muted)); width: 1.5rem; height: 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid hsl(var(--border)); }
        .wb-order-list li strong { color: hsl(var(--foreground)); }

        /* CTA Panel */
        .wb-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .wb-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .wb-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .wb-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .wb-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .wb-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .wb-cta a svg { transition: transform 0.2s; }
        .wb-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
        @media (max-width: 768px) { .wb-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="wb-hero">
        <h2>Catet! Ini 5 Web Buat Belajar Programming GRATIS!</h2>
        <p>Belajar programming di era sekarang sebenarnya jauh lebih mudah dibanding beberapa tahun lalu. Masalahnya bukan karena kurang resource, tapi justru karena terlalu banyak pilihan. Akibatnya banyak pemula yang akhirnya bingung harus mulai dari mana. Artikel ini akan membahas 5 website gratis yang bisa menjadi tempat belajar programming dengan kualitas terbaik dari nol sampai siap kerja!</p>
      </div>

      <div class="wb-intro-box">
        <p>Hari ini belajar dari YouTube, besok pindah to website lain, lusa ikut tutorial baru. Akhirnya sudah berbulan-bulan belajar, tapi belum pernah menyelesaikan satu project pun. Kalau kamu sedang berada di fase tersebut, kamu tidak sendirian. Kuncinya adalah memilih satu kurikulum terstruktur dan fokus menyelesaikannya secara konsisten.</p>
      </div>

      <div class="wb-section-title">5 Website Belajar Programming Gratis Terpopuler</div>

      <!-- Card 1: FreeCodeCamp -->
      <div class="wb-site-card">
        <div class="wb-site-num">01</div>
        <div class="wb-site-header">
          <h3 class="wb-site-title">FreeCodeCamp</h3>
          <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer" class="wb-resource-btn">Kunjungi FreeCodeCamp</a>
        </div>
        <p>FreeCodeCamp adalah salah satu platform belajar programming gratis paling populer di dunia. Platform ini menyediakan kurikulum yang terstruktur mulai dari HTML, CSS, JavaScript, Frontend Development, Backend Development, hingga Data Analysis dan Machine Learning. Yang menarik, kamu tidak hanya belajar teori tetapi juga langsung mengerjakan project sebagai syarat kelulusan.</p>
        
        <div class="wb-site-body">
          <div>
            <div class="wb-feature-title">Kelebihan</div>
            <ul class="wb-feature-list">
              <li>Gratis selamanya</li>
              <li>Kurikulum lengkap & terstruktur</li>
              <li>Banyak project praktik langsung</li>
              <li>Sertifikat kelulusan gratis</li>
            </ul>
          </div>
          <div>
            <div class="wb-feature-title">Cocok Untuk</div>
            <div class="wb-tags-container">
              <span class="wb-tag">Pemula</span>
              <span class="wb-tag">Mahasiswa IT</span>
              <span class="wb-tag">Calon Fullstack Developer</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 2: W3Schools -->
      <div class="wb-site-card">
        <div class="wb-site-num">02</div>
        <div class="wb-site-header">
          <h3 class="wb-site-title">W3Schools</h3>
          <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer" class="wb-resource-btn">Kunjungi W3Schools</a>
        </div>
        <p>Kalau kamu baru pertama kali belajar coding, W3Schools adalah tempat yang sangat nyaman untuk memulai. Materinya disajikan secara singkat, mudah dipahami, dan langsung bisa dicoba melalui editor online yang tersedia. Banyak developer yang sampai hari ini masih menggunakan W3Schools sebagai referensi cepat.</p>
        
        <div class="wb-site-body">
          <div>
            <div class="wb-feature-title">Kelebihan</div>
            <ul class="wb-feature-list">
              <li>Sangat mudah dipahami pemula absolut</li>
              <li>Bisa langsung praktik di browser tanpa install software</li>
              <li>Materi referensi yang sangat lengkap</li>
            </ul>
          </div>
          <div>
            <div class="wb-feature-title">Cocok Untuk</div>
            <div class="wb-tags-container">
              <span class="wb-tag">Pemula Absolut</span>
              <span class="wb-tag">Belajar HTML & CSS</span>
              <span class="wb-tag">JavaScript Dasar</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 3: The Odin Project -->
      <div class="wb-site-card">
        <div class="wb-site-num">03</div>
        <div class="wb-site-header">
          <h3 class="wb-site-title">The Odin Project</h3>
          <a href="https://www.theodinproject.com" target="_blank" rel="noopener noreferrer" class="wb-resource-btn">Kunjungi The Odin Project</a>
        </div>
        <p>Jika tujuanmu adalah menjadi Fullstack Developer, maka The Odin Project wajib masuk daftar belajar. Platform ini memiliki roadmap yang sangat jelas dan fokus pada pembelajaran berbasis project. Kamu akan diajak membangun aplikasi nyata, menggunakan GitHub, dan memahami workflow yang digunakan developer profesional.</p>
        
        <div class="wb-site-body">
          <div>
            <div class="wb-feature-title">Kelebihan</div>
            <ul class="wb-feature-list">
              <li>Fokus pada proyek nyata standar industri</li>
              <li>Roadmap karir yang sangat terstruktur</li>
              <li>Mengajarkan workflow industri (Git, Command Line)</li>
            </ul>
          </div>
          <div>
            <div class="wb-feature-title">Cocok Untuk</div>
            <div class="wb-tags-container">
              <span class="wb-tag">Calon Fullstack Developer</span>
              <span class="wb-tag">Mahasiswa Semester Akhir</span>
              <span class="wb-tag">Fresh Graduate</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 4: Roadmap.sh -->
      <div class="wb-site-card">
        <div class="wb-site-num">04</div>
        <div class="wb-site-header">
          <h3 class="wb-site-title">Roadmap.sh</h3>
          <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer" class="wb-resource-btn">Kunjungi Roadmap.sh</a>
        </div>
        <p>Roadmap.sh adalah platform panduan karir IT paling populer di dunia. Di sini kamu bisa melihat peta jalan (roadmap) belajar berbagai profesi teknologi mulai dari Frontend, Backend, Fullstack, DevOps, hingga AI Engineer. Sangat membantu agar belajarmu terarah dan tidak tersesat di tengah jalan.</p>
        
        <div class="wb-site-body">
          <div>
            <div class="wb-feature-title">Kelebihan</div>
            <ul class="wb-feature-list">
              <li>Peta jalan (roadmap) visual yang sangat detail</li>
              <li>Materi panduan terlengkap dari berbagai bidang IT</li>
              <li>Rekomendasi link referensi belajar berkualitas di tiap topik</li>
            </ul>
          </div>
          <div>
            <div class="wb-feature-title">Cocok Untuk</div>
            <div class="wb-tags-container">
              <span class="wb-tag">Penentu Arah Karir</span>
              <span class="wb-tag">Semua Level Developer</span>
              <span class="wb-tag">DevOps & AI Engineer</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Card 5: Frontend Mentor -->
      <div class="wb-site-card">
        <div class="wb-site-num">05</div>
        <div class="wb-site-header">
          <h3 class="wb-site-title">Frontend Mentor</h3>
          <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer" class="wb-resource-btn">Kunjungi Frontend Mentor</a>
        </div>
        <p>Latihan bikin website dari desain nyata untuk membangun portfolio dan skill frontend. Frontend Mentor menyediakan aset desain profesional (Figma/PNG) yang harus kamu terjemahkan ke dalam kode HTML, CSS, dan JavaScript nyata. Sangat efektif untuk melatih ketajaman slicing desain ke kode.</p>
        
        <div class="wb-site-body">
          <div>
            <div class="wb-feature-title">Kelebihan</div>
            <ul class="wb-feature-list">
              <li>Latihan dengan aset desain standar industri</li>
              <li>Umpan balik (review kode) yang interaktif dari komunitas</li>
              <li>Tantangan praktis dari level pemula hingga lanjutan</li>
            </ul>
          </div>
          <div>
            <div class="wb-feature-title">Cocok Untuk</div>
            <div class="wb-tags-container">
              <span class="wb-tag">Calon Frontend Developer</span>
              <span class="wb-tag">UI/UX Engineer</span>
              <span class="wb-tag">Pengisi Portofolio Kerja</span>
            </div>
          </div>
        </div>
      </div>

      <div class="wb-section-title">Kesalahan Umum Belajar Coding Bagi Pemula</div>

      <p>Banyak orang berpikir mereka butuh lebih banyak tutorial. Padahal masalah sebenarnya adalah terlalu banyak menonton tutorial (<em>Tutorial Hell</em>) dan terlalu sedikit praktik membuat proyek. Hindari pola belajar yang tidak produktif dan beralihlah ke cara yang direkomendasikan industri:</p>

      <div class="wb-compare-grid">
        <div class="wb-compare-card dont">
          <h3>❌ Jangan Lakukan Ini</h3>
          <ul class="wb-compare-list">
            <li><strong>Belajar dari 10 website sekaligus</strong> dalam waktu yang bersamaan sehingga tidak fokus.</li>
            <li><strong>Menonton video tutorial secara pasif</strong> tanpa mengetik kode dan mempraktikkannya sendiri.</li>
            <li><strong>Terus-menerus berganti roadmap belajar</strong> setiap minggu karena lapar mata teknologi baru.</li>
            <li><strong>Takut membuat project sendiri</strong> dari nol hanya karena merasa belum siap atau belum hafal syntax.</li>
          </ul>
        </div>

        <div class="wb-compare-card do">
          <h3>✅ Sebaiknya Lakukan Ini</h3>
          <ul class="wb-compare-list">
            <li><strong>Pilih 1 platform belajar utama</strong> dan selesaikan seluruh materinya sampai tuntas.</li>
            <li><strong>Ikuti kurikulumnya secara tertib</strong> dan kerjakan semua proyek latihan di dalamnya.</li>
            <li><strong>Langsung praktikkan teori</strong> dengan memodifikasi kode latihan sesuai kreativitasmu.</li>
            <li><strong>Upload project buatanmu ke GitHub</strong> sebagai bukti nyata portofolio kerjamu.</li>
          </ul>
        </div>
      </div>

      <div class="wb-intro-box">
        <p>Ingat, <strong>perusahaan tidak membayar sertifikat kelulusanmu. Perusahaan membayar skill nyata, problem solving, dan hasil kerjamu.</strong> Jadi, prioritaskan membuat portofolio dibanding mengoleksi sertifikat.</p>
      </div>

      <div class="wb-section-title">Website Mana yang Harus Kamu Pilih? (Rekomendasi Urutan Belajar)</div>

      <p>Kalau kamu benar-benar pemula yang memulai belajar dari nol absolut, saya sangat menyarankan untuk mengikuti urutan belajar berikut secara bertahap:</p>

      <ol class="wb-order-list">
        <li><strong>W3Schools</strong> — Pelajari dasar-dasar HTML, CSS, dan JavaScript secara interaktif agar terbiasa mengetik sintaks dasar.</li>
        <li><strong>Roadmap.sh</strong> — Cari tahu peta panduan (roadmap) belajar profesi IT pilihanmu sebagai pemandu arah belajar jangka panjang.</li>
        <li><strong>FreeCodeCamp</strong> — Selesaikan kurikulum sertifikasi dasar untuk menantang dirimu membuat proyek nyata pertama di browser.</li>
        <li><strong>The Odin Project</strong> — Bangun workflow lokal yang nyata (Git, GitHub) dan buat proyek aplikasi web fullstack siap deploy.</li>
        <li><strong>Frontend Mentor</strong> — Latihlah skill membelah aset desain profesional menjadi kode website nyata untuk portofolio siap kerja.</li>
      </ol>

      <p>Dengan mengikuti jalur terarah di atas, kamu dapat belajar dari dasar paling mendasar hingga siap membangun proyek portofolio bernilai tinggi yang siap dilirik recruiter industri.</p>

      <div class="wb-section-title">Kesimpulan</div>

      <p>Belajar programming tidak harus mahal dan tidak perlu mengeluarkan biaya jutaan rupiah untuk bootcamp jika kamu punya tekad mandiri yang kuat. Banyak sekali sumber daya pembelajaran gratis berkualitas dunia di luar sana yang siap membantumu menjadi developer profesional.</p>

      <p>Yang paling penting bukanlah platform atau website mana yang kamu pilih untuk belajar, melainkan seberapa konsisten kamu meluangkan waktu untuk belajar dan mempraktikkannya secara nyata. Programmer yang sukses bukanlah mereka yang mengoleksi ratusan bookmark tutorial, melainkan mereka yang benar-benar membangun sesuatu dari ide mereka!</p>

      <div class="wb-cta">
        <h2>Mau Tips Belajar Coding & Info Karir Tech Setiap Hari?</h2>
        <p>Yuk ikuti akun Instagram saya buat dapet info roadmap belajar terstruktur, rekomendasi AI tools terbaru, tips freelance, dan personal branding untuk programmer!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "7 Jun 2026",
    isoDate: "2026-06-07",
    readTime: "8 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Belajar Programming", "Website Gratis", "Coding", "Pemula", "FreeCodeCamp", "W3Schools", "The Odin Project", "Roadmap.sh", "Frontend Mentor", "2026"],
    imageSrc: "/images/blog/website-belajar-coding-gratis.png",
    relatedPosts: ["roadmap-fullstack-developer-ai-2026", "website-terbaik-logika-pemrograman-pemula", "mindset-idea-structuring-produk-ai"],
  },
  "mindset-idea-structuring-produk-ai": {
    title: "Mindset & Idea Structuring: Fondasi Sebelum Membangun Produk dengan AI",
    excerpt: "Banyak orang mengira membangun produk digital dengan AI menghilangkan kebutuhan untuk berpikir. Padahal, pemahaman masalah dan struktur ide tetap menjadi kunci utama. Pelajari formula MVP dan cara berpikir builder di sini!",
    content: `
      <style>
        .mi-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.3) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .mi-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .mi-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        .mi-intro-box { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); margin: 1.5rem 0; line-height: 1.7; }
        .mi-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }

        /* Flowchart/Process Style */
        .mi-process-flow { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; margin: 2rem auto; max-width: 400px; padding: 1.5rem; border-radius: 1rem; background: hsl(var(--muted)/0.3); border: 1px solid hsl(var(--border)); }
        .mi-process-step { padding: 0.75rem 1.5rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); text-align: center; font-size: 0.9rem; font-weight: 700; color: hsl(var(--foreground)); width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .mi-process-arrow { font-size: 1.2rem; color: hsl(var(--muted-foreground)); line-height: 1; margin: 0.1rem 0; }

        /* Comparison Card Grid (for User vs Builder / Errors / MVP) */
        .mi-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; }
        @media (max-width: 768px) { .mi-grid-2 { grid-template-columns: 1fr; } }
        .mi-card { padding: 1.5rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .mi-card h4 { font-size: 1.05rem; font-weight: 800; margin: 0 0 0.75rem 0 !important; color: hsl(var(--foreground)); }
        .mi-card p { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        
        .mi-formula-box { padding: 1.5rem; border-radius: 1rem; background: hsl(var(--muted)/0.4); border: 1px solid hsl(var(--border)); margin: 2rem 0; text-align: center; }
        .mi-formula { font-family: monospace; font-size: 1.3rem; font-weight: 800; color: hsl(var(--foreground)); margin-bottom: 0.5rem; letter-spacing: 0.05em; }
        .mi-formula-desc { font-size: 0.85rem; color: hsl(var(--muted-foreground)); }

        .mi-list { list-style: none !important; padding: 0 !important; margin: 1.5rem 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .mi-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .mi-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--primary)); }
        
        /* Compare Grid (Do and Don't) */
        .mi-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2.5rem 0; }
        @media (max-width: 768px) { .mi-compare-grid { grid-template-columns: 1fr; } }
        .mi-compare-card { padding: 1.75rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .mi-compare-card.dont { border-top: 4px solid #ef4444; }
        .mi-compare-card.do { border-top: 4px solid #10b981; }
        .mi-compare-card h3 { font-size: 1.15rem; font-weight: 800; margin: 0 0 1rem 0 !important; color: hsl(var(--foreground)); }
        .mi-compare-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .mi-compare-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .mi-compare-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--muted-foreground)); }
        .mi-compare-card.dont .mi-compare-list li::before { color: #ef4444; }
        .mi-compare-card.do .mi-compare-list li::before { color: #10b981; }

        .mi-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .mi-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .mi-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .mi-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .mi-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .mi-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .mi-cta a svg { transition: transform 0.2s; }
        .mi-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
        @media (max-width: 768px) { .mi-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="mi-hero">
        <h2>Mindset & Idea Structuring: Fondasi Sebelum Membangun Produk dengan AI</h2>
        <p>Banyak orang berpikir bahwa Artificial Intelligence (AI) akan menghilangkan kebutuhan manusia untuk berpikir. Padahal kenyataannya justru sebaliknya. AI memang dapat membantu membangun kode program dengan cepat, tetapi manusia tetap harus menyusun ide dasar dan strategi produknya secara matang terlebih dahulu!</p>
      </div>

      <div class="mi-intro-box">
        <p>Selama bertahun-tahun, membangun aplikasi dianggap sebagai sesuatu yang hanya bisa dilakukan oleh programmer profesional. Namun hari ini, kehadiran AI memungkinkan siapa saja meluncurkan produk digital mereka sendiri dalam hitungan hari. Kunci keberhasilan produk ini tidak lagi terletak pada kemampuan menghafal syntax coding, melainkan pada ketajaman <strong>Mindset Builder</strong> dan kemampuan penataan struktur ide yang terarah.</p>
      </div>

      <div class="mi-section-title">Perubahan Besar dalam Dunia Pengembangan Aplikasi</div>

      <p>Kehadiran kecerdasan buatan telah mereduksi hambatan teknis secara radikal. Mari bandingkan perbedaan alur pengembangan produk tradisional dengan alur modern berbasis asisten AI:</p>

      <div class="mi-grid-2">
        <div class="mi-card">
          <h4>Dulu (Alur Tradisional)</h4>
          <div class="mi-process-flow">
            <div class="mi-process-step">Ide Ideasi</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Mencari Developer</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Menulis Kode Manual</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Testing Manual</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Peluncuran Produk</div>
          </div>
          <p>Alur ini memerlukan waktu berbulan-bulan bahkan bertahun-tahun serta modal yang sangat besar untuk menggaji tim software engineer dari nol.</p>
        </div>

        <div class="mi-card">
          <h4>Sekarang (Alur AI-Assisted)</h4>
          <div class="mi-process-flow">
            <div class="mi-process-step">Ide Ideasi</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">AI-Assisted Development</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Prototype Instan</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Iterasi Cepat</div>
            <div class="mi-process-arrow">↓</div>
            <div class="mi-process-step">Peluncuran Produk</div>
          </div>
          <p>Dengan bantuan asisten AI, pembuatan prototipe awal aplikasi selesai dalam beberapa jam saja sehingga proses pengujian pasar berjalan jauh lebih efisien.</p>
        </div>
      </div>

      <div class="mi-section-title">Apa Itu AI-Assisted Development & Vibe Coding?</div>

      <p><strong>AI-Assisted Development</strong> adalah pendekatan membangun produk digital di mana AI berperan aktif membantu menyusun ide, mendesain antarmuka, menulis baris kode, memperbaiki error, hingga mengembangkan fitur. Di era modern ini, kita mengenal istilah baru yang disebut dengan <strong>Vibe Coding</strong>.</p>

      <div class="mi-intro-box" style="border-left: 4px solid hsl(var(--primary));">
        <p><strong>Vibe Coding</strong> bukan berarti membangun aplikasi secara asal-asalan. Ini adalah seni menerjemahkan ide abstrak menjadi produk fungsional dengan AI sebagai partner kerja kolaboratif. Fokus utama sang developer bergeser dari sekadar mengetik syntax (<em>coding</em>) menjadi fokus pada: <strong>Problem Solving</strong>, <strong>Product Thinking</strong>, <strong>Prompting</strong>, dan <strong>Iterasi Cepat</strong>.</p>
      </div>

      <div class="mi-section-title">Kesalahan Terbesar Pemula saat Memulai</div>

      <p>Sebelum mulai belajar membangun produk, banyak pemula langsung terjebak menanyakan: <em>"Tools apa yang harus saya gunakan?"</em>. Padahal, itu bukan pertanyaan awal yang benar. Sebelum memilih teknologi, ajukanlah pertanyaan fundamental ini terlebih dahulu:</p>

      <ul class="mi-list">
        <li><strong>Masalah apa yang ingin saya selesaikan?</strong> (Apakah masalah itu benar-benar ada?)</li>
        <li><strong>Siapa yang mengalami masalah tersebut?</strong> (Apakah target pengguna saya nyata?)</li>
        <li><strong>Kenapa masalah itu penting untuk diselesaikan?</strong> (Apakah ada urgensi di dalamnya?)</li>
        <li><strong>Apakah solusi saya benar-benar dibutuhkan?</strong> (Apakah mereka mau menggunakannya?)</li>
      </ul>

      <p>Banyak produk digital gagal di pasaran bukan karena teknologinya yang buruk, melainkan karena mereka sibuk membuat solusi canggih untuk masalah yang tidak pernah dipedulikan oleh siapa pun.</p>

      <div class="mi-section-title">Mengadopsi Mindset sebagai Builder</div>

      <p>Untuk sukses membuat produk digital yang andal, kita harus mengubah cara pandang kita dari sekadar pengguna biasa menjadi seorang pencipta solusi (<em>Builder</em>):</p>

      <div class="mi-grid-2">
        <div class="mi-card">
          <h4>Role: User</h4>
          <p>Hanya bertindak sebagai pengguna akhir aplikasi. Contohnya: menggunakan marketplace untuk berbelanja, mengoperasikan aplikasi kasir di toko, atau sekadar bertanya hal santai ke chatbot AI.</p>
        </div>
        <div class="mi-card">
          <h4>Role: Builder</h4>
          <p>Melihat masalah di sekitarnya dan berinisiatif menciptakan solusi terstruktur. Builder akan langsung menganalisis masalah dan bertanya: <em>"Bagaimana jika saya membuat sebuah produk untuk mempermudah pekerjaan ini?"</em></p>
        </div>
      </div>

      <div class="mi-section-title">Formula Dasar Produk yang Baik</div>

      <p>Sebelum mulai menulis prompt instruksi kepada AI untuk membuat aplikasi, peganglah formula sederhana ini agar produkmu tetap terarah:</p>

      <div class="mi-formula-box">
        <div class="mi-formula">Problem × Target User × Solution = Product</div>
        <div class="mi-formula-desc">Membangun produk digital yang sukses wajib dimulai dari Masalah, mengidentifikasi Pengguna Sasaran, merumuskan Solusi, baru melahirkan Produk. Jangan dibalik!</div>
      </div>

      <p>Sebagai contoh, mari bandingkan pernyataan ide yang kurang tajam dengan ide yang sudah distrukturkan dengan formula di atas:</p>

      <ul class="mi-list">
        <li><strong>Ide Awal (Kurang Jelas):</strong> "Saya ingin membuat aplikasi AI yang canggih." <em>(Terlalu umum dan membingungkan)</em></li>
        <li><strong>Ide yang Distrukturkan (Jelas):</strong>
          <br>• <strong>Target User:</strong> Pekerja lepas (Freelancer)
          <br>• <strong>Problem:</strong> Membuat proposal penawaran proyek memakan waktu lama dan melelahkan.
          <br>• <strong>Solution:</strong> AI membantu menyusun proposal proyek secara otomatis berdasarkan kriteria pekerjaan.
          <br>• <strong>Product Hasilnya:</strong> AI Proposal Generator.
        </li>
      </ul>

      <div class="mi-section-title">Mengenal MVP (Minimum Viable Product)</div>

      <p>Kesalahan fatal pemula lainnya adalah ingin membuat aplikasi berskala besar sejak hari pertama. Mereka ingin menyisipkan fitur login, dashboard analitik, integrasi payment gateway, sistem membership, live chat, dan analytics sekaligus. Alhasil, proyek tersebut menjadi terlalu rumit dan tak kunjung selesai.</p>

      <p>Di sinilah pentingnya merancang <strong>MVP (Minimum Viable Product)</strong>. MVP adalah versi paling sederhana dari produk kamu yang tetap mampu memberikan nilai manfaat utama secara langsung kepada pengguna.</p>

      <div class="mi-intro-box">
        <p>Tujuan utama merancang MVP bukanlah untuk menciptakan produk yang langsung sempurna, melainkan untuk <strong>belajar, menguji asumsi dasar ide, dan mengumpulkan umpan balik (<em>feedback</em>) dari pengguna nyata secepat mungkin</strong> sebelum menginvestasikan banyak waktu dan energi.</p>
      </div>

      <div class="mi-section-title">Cara Menentukan Ide Proyek Selama Belajar</div>

      <p>Jika kamu ingin membuat proyek latihan atau mengikuti program belajar/bootcamp, pilihlah ide yang memenuhi tiga kriteria sederhana berikut:</p>

      <div class="mi-compare-grid">
        <div class="mi-compare-card dont">
          <h3>❌ Hindari Ide Seperti Ini</h3>
          <ul class="mi-compare-list">
            <li><strong>Ide yang terlalu luas dan kompleks</strong> yang membutuhkan waktu berbulan-bulan untuk diselesaikan (misal: kloningan Tokopedia lengkap).</li>
            <li><strong>Target pengguna yang abu-abu</strong> atau tidak jelas siapa yang akan mengoperasikan aplikasi tersebut.</li>
            <li><strong>Solusi yang sulit dijelaskan</strong> dan membutuhkan waktu penjelasan sangat lama hanya untuk memahami konsep dasarnya.</li>
          </ul>
        </div>

        <div class="mi-compare-card do">
          <h3>✅ Pilih Ide Seperti Ini</h3>
          <ul class="mi-compare-list">
            <li><strong>Target pengguna yang sangat spesifik</strong> (misal: pelaku UMKM kuliner, mahasiswa baru, content creator pemula).</li>
            <li><strong>Satu masalah spesifik yang nyata</strong> (misal: kesulitan mencatat kas harian, kesulitan menyusun CV ATS-friendly).</li>
            <li><strong>Solusi yang simpel dan mudah dipahami</strong> dalam waktu singkat oleh orang awam sekalipun.</li>
          </ul>
        </div>
      </div>

      <div class="mi-section-title">Langkah Awal Menyusun Fondasi Ide</div>

      <p>Sebelum kamu membuka tools AI development seperti Next.js, v0, Lovable, atau Bolt.new, luangkan waktu sejenak untuk menuliskan poin-poin fondasi ide berikut di selembar kertas atau catatan digital:</p>

      <ol class="wb-order-list">
        <li><strong>Nama Produk</strong> — Berikan nama yang sederhana, mudah diingat, dan langsung menjelaskan fungsi produkmu.</li>
        <li><strong>Target Pengguna</strong> — Tentukan profil spesifik orang yang akan terbantu dengan aplikasi buatanmu.</li>
        <li><strong>Problem Statement</strong> — Tuliskan satu kalimat yang menjelaskan rasa sakit (<em>pain point</em>) terbesar pengguna sasaranmu.</li>
        <li><strong>Solusi Utama</strong> — Tuliskan fitur pembeda utama yang akan langsung menyelesaikan masalah tersebut secara instan.</li>
        <li><strong>Daftar Fitur Awal (MVP)</strong> — Batasi hanya 2-3 fitur wajib saja, singkirkan semua fitur kosmetik yang belum mendesak.</li>
        <li><strong>User Flow Sederhana</strong> — Petakan alur navigasi pengguna mulai dari membuka halaman awal hingga berhasil menyelesaikan tujuannya di aplikasi.</li>
      </ol>

      <div class="mi-section-title">Kesimpulan</div>

      <p>Teknologi AI telah menurunkan batasan teknis dalam membangun produk digital ke level terendah dalam sejarah. Namun, AI tidak akan pernah bisa menggantikan empati dan kemampuan logis manusia dalam mendeteksi masalah, memahami kebutuhan emosional pengguna, serta mengambil keputusan arsitektur produk strategis.</p>

      <p>Ingatlah selalu bahwa <strong>orang tidak membeli kehebatan teknologi AI yang kamu gunakan; orang membayar solusi andal atas masalah nyata yang sedang mereka hadapi</strong>. Bangunlah fondasi ide kamu dengan kokoh sebelum mulai menulis prompt pembuatan produk!</p>

      <div class="mi-cta">
        <h2>Mau Info Belajar & Career Hacks Dunia IT Tiap Hari?</h2>
        <p>Yuk ikuti Instagram saya untuk mendapatkan update project roadmap terbaru, tips prompts AI engineering, strategi freelancing, serta panduan praktis membangun personal branding IT!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "8 Jun 2026",
    isoDate: "2026-06-08",
    readTime: "7 min",
    category: "Product Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Mindset", "Product Thinking", "MVP", "Vibe Coding", "AI Development", "Ide Startup", "Product Design", "2026"],
    imageSrc: "/images/blog/mindset-produk-ai.png",
    relatedPosts: ["roadmap-fullstack-developer-ai-2026", "ide-proyek-portfolio-fullstack-ai", "prompt-engineering-for-app-development"],
  },
  "prompt-engineering-for-app-development": {
    title: "Prompt Engineering for App Development: Skill Paling Penting dalam Vibe Coding",
    excerpt: "Banyak orang mengira membangun aplikasi dengan AI menghilangkan kebutuhan untuk berpikir. Padahal, prompt engineering adalah skill paling penting untuk mengubah ide menjadi produk secara terstruktur.",
    content: `
      <style>
        .pa-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.3) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .pa-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .pa-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        
        .pa-intro-box { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); margin: 1.5rem 0; line-height: 1.7; }
        .pa-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }
        
        .pa-quote-box { padding: 1.25rem 1.75rem; border-radius: 0.75rem; background: hsl(var(--muted)/0.5); border-left: 4px solid hsl(var(--primary)); font-style: italic; color: hsl(var(--foreground)); margin: 1.5rem 0; font-size: 1rem; line-height: 1.6; }
        
        .pa-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; }
        @media (max-width: 768px) { .pa-grid-2 { grid-template-columns: 1fr; } }
        .pa-card { padding: 1.5rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .pa-card h4 { font-size: 1.05rem; font-weight: 800; margin: 0 0 0.75rem 0 !important; color: hsl(var(--foreground)); }
        .pa-card p { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        
        /* Flowchart/Process Style */
        .pa-process-flow { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; margin: 2rem auto; max-width: 400px; padding: 1.5rem; border-radius: 1rem; background: hsl(var(--muted)/0.3); border: 1px solid hsl(var(--border)); }
        .pa-process-step { padding: 0.75rem 1.5rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); text-align: center; font-size: 0.9rem; font-weight: 700; color: hsl(var(--foreground)); width: 100%; box-shadow: 0 2px 8px rgba(0,0,0,0.02); }
        .pa-process-arrow { font-size: 1.2rem; color: hsl(var(--muted-foreground)); line-height: 1; margin: 0.1rem 0; }

        /* Formula Container */
        .pa-formula-box { padding: 1.75rem; border-radius: 1.25rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); margin: 2rem 0; }
        .pa-formula-title { font-size: 1.15rem; font-weight: 800; color: hsl(var(--foreground)); margin-bottom: 0.5rem; }
        .pa-formula-desc { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin-bottom: 1.25rem; }
        
        .pa-prompt-block { background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; padding: 1.25rem 4.5rem 1.25rem 1.25rem; font-size: 0.88rem; line-height: 1.8; color: hsl(var(--foreground)); font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; word-break: break-word; margin: 1rem 0; position: relative; }
        .pa-prompt-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem; }

        .pa-copy-btn { position: absolute; top: 0.75rem; right: 0.75rem; display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.85rem; border-radius: 0.5rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); color: hsl(var(--muted-foreground)); font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); font-family: inherit; z-index: 10; }
        .pa-copy-btn:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-color: hsl(var(--primary)); transform: scale(1.03); }
        .pa-copy-btn:active { transform: scale(0.97); }
        .pa-copy-btn svg { width: 12px; height: 12px; transition: transform 0.2s; }
        .pa-copy-btn:hover svg { transform: rotate(5deg); }
        .pa-copy-btn.copied { background: #10b981 !important; color: #ffffff !important; border-color: #10b981 !important; }

        .pa-list { list-style: none !important; padding: 0 !important; margin: 1.5rem 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .pa-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .pa-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--primary)); }

        .pa-list-num { counter-reset: pa-counter; list-style: none !important; padding: 0 !important; margin: 1.5rem 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .pa-list-num li { counter-increment: pa-counter; padding: 1rem 1.25rem 1rem 3.5rem; position: relative; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; font-size: 0.9rem !important; line-height: 1.7; color: hsl(var(--muted-foreground)) !important; }
        .pa-list-num li::before { content: counter(pa-counter); position: absolute; left: 1.25rem; top: 1rem; font-size: 0.85rem; font-weight: 800; color: hsl(var(--foreground)); background: hsl(var(--muted)); width: 1.5rem; height: 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid hsl(var(--border)); }
        .pa-list-num li strong { color: hsl(var(--foreground)); }

        /* Compare Grid (Do and Don't / Garbage In Garbage Out) */
        .pa-compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2.5rem 0; }
        @media (max-width: 768px) { .pa-compare-grid { grid-template-columns: 1fr; } }
        .pa-compare-card { padding: 1.75rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); }
        .pa-compare-card.dont { border-top: 4px solid #ef4444; }
        .pa-compare-card.do { border-top: 4px solid #10b981; }
        .pa-compare-card h3 { font-size: 1.15rem; font-weight: 800; margin: 0 0 1rem 0 !important; color: hsl(var(--foreground)); }
        .pa-compare-list { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .pa-compare-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .pa-compare-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--muted-foreground)); }
        .pa-compare-card.dont .pa-compare-list li::before { color: #ef4444; }
        .pa-compare-card.do .pa-compare-list li::before { color: #10b981; }

        .pa-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .pa-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .pa-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .pa-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .pa-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .pa-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .pa-cta a svg { transition: transform 0.2s; }
        .pa-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
        @media (max-width: 768px) { .pa-hero { padding: 1.75rem 1.25rem; } }
      </style>

      <div class="pa-hero">
        <h2>Prompt Engineering for App Development</h2>
        <p>Skill Paling Penting dalam Vibe Coding — Bagaimana menyusun instruksi yang efektif, presisi, dan terarah agar AI mampu menghasilkan produk impian secara andal.</p>
      </div>

      <div class="pa-intro-box">
        <p>Ketika mendengar istilah <strong>Artificial Intelligence (AI)</strong>, banyak orang langsung membayangkan sebuah teknologi ajaib yang bisa melakukan segalanya secara otomatis. Mereka membuka ChatGPT, Gemini, Claude, atau tools AI lainnya, lalu mengetik: <em>"Buatkan aplikasi kasir"</em>. Beberapa detik kemudian AI memberikan jawaban. Namun hasilnya tidak sesuai harapan. Fiturnya kurang lengkap. Strukturnya berantakan. UI-nya tidak sesuai. Akhirnya muncul kesimpulan: <strong>"AI-nya kurang pintar."</strong></p>
      </div>

      <p>Padahal sering kali masalahnya bukan pada AI. Masalahnya ada pada instruksi yang diberikan.</p>

      <p>Bayangkan Anda sedang bekerja dengan seorang developer profesional. Lalu Anda hanya berkata: <em>"Tolong buat aplikasi."</em> Kemungkinan besar developer tersebut akan langsung bertanya:</p>

      <ul class="pa-list">
        <li><strong>Aplikasi apa?</strong></li>
        <li><strong>Untuk siapa?</strong></li>
        <li><strong>Tujuannya apa?</strong></li>
        <li><strong>Masalah apa yang ingin diselesaikan?</strong></li>
        <li><strong>Fiturnya apa?</strong></li>
        <li><strong>Platformnya apa?</strong></li>
      </ul>

      <p>AI bekerja dengan cara yang tidak jauh berbeda. Semakin jelas instruksi yang diberikan, semakin baik hasil yang akan diperoleh. Inilah alasan mengapa <strong>Prompt Engineering</strong> menjadi salah satu skill paling penting dalam era AI, terutama dalam dunia <strong>Vibe Coding</strong>.</p>

      <div class="pa-section-title">Apa Itu Prompt Engineering?</div>

      <p><strong>Prompt Engineering</strong> adalah kemampuan menyusun instruksi yang efektif agar AI menghasilkan output yang sesuai dengan kebutuhan. Prompt bukan sekadar pertanyaan. Prompt adalah cara kita berkomunikasi dengan AI.</p>

      <p style="margin-bottom: 0.5rem;">Dalam konteks pengembangan aplikasi, prompt digunakan untuk:</p>

      <ul class="pa-list">
        <li>Menentukan ide produk</li>
        <li>Memvalidasi kebutuhan pengguna</li>
        <li>Menyusun fitur aplikasi</li>
        <li>Membuat user flow</li>
        <li>Mendesain UI/UX</li>
        <li>Membuat landing page</li>
        <li>Menghasilkan kode</li>
        <li>Melakukan debugging</li>
        <li>Mengembangkan fitur baru</li>
      </ul>

      <div class="pa-quote-box">
        "Prompt adalah bahasa yang digunakan untuk mengubah ide menjadi produk. Semakin baik prompt yang Anda buat, semakin baik pula output yang dihasilkan AI."
      </div>

      <div class="pa-section-title">Era Baru Pengembangan Aplikasi</div>

      <p>Dulu, proses membangun aplikasi terlihat seperti ini:</p>

      <div class="pa-process-flow" style="max-width: 500px;">
        <div class="pa-process-step">Ide</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Belajar Coding</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Membuat Database</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Membuat Backend</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Membuat Frontend</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Testing</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Deploy</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Launch</div>
      </div>

      <p>Seluruh proses bisa memakan waktu berbulan-bulan. Hari ini, proses tersebut mulai berubah secara revolusioner:</p>

      <div class="pa-process-flow" style="max-width: 500px;">
        <div class="pa-process-step">Ide</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Prompt</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">AI</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Prototype</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Refinement</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">Launch</div>
      </div>

      <p>Perubahan ini sangat besar. Namun banyak orang salah memahami perubahan tersebut. Mereka berpikir bahwa coding sudah tidak penting lagi. Padahal yang berubah bukan kebutuhan berpikir. Yang berubah adalah cara mengeksekusinya. Dulu kita berbicara menggunakan bahasa pemrograman. Sekarang kita juga berbicara menggunakan bahasa manusia, dan AI menerjemahkannya menjadi solusi teknis.</p>

      <div class="pa-section-title">Kenapa Prompt Engineering Penting Dalam Vibe Coding?</div>

      <p>Dalam <strong>Vibe Coding</strong>, AI bukan sekadar alat bantu. AI adalah partner kerja kita. Namun, partner yang baik membutuhkan arahan yang jelas agar bisa bekerja maksimal. Mari kita lihat perbedaan nyata dari dua jenis prompt berikut:</p>

      <div class="pa-compare-grid">
        <div class="pa-compare-card dont">
          <h3>❌ Prompt Pertama (Buruk)</h3>
          <div class="pa-prompt-label">Input Prompt:</div>
          <div class="pa-prompt-block">Buat aplikasi toko online.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Buat aplikasi toko online.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
          <p style="font-size: 0.85rem; line-height: 1.6; margin-top: 0.75rem;"><strong>Dampak:</strong> Prompt ini memaksa AI menebak-nebak apa yang Anda inginkan. Hasilnya sangat generik, tidak fungsional, dan sering kali tidak sesuai dengan apa yang ada di kepala Anda.</p>
        </div>

        <div class="pa-compare-card do">
          <h3>✅ Prompt Kedua (Baik)</h3>
          <div class="pa-prompt-label">Input Prompt:</div>
          <div class="pa-prompt-block">Saya ingin membuat aplikasi toko online untuk menjual kopi premium lokal. Target pengguna adalah pekerja kantoran usia 25–40 tahun. Fitur utama yang dibutuhkan adalah katalog produk, keranjang belanja, checkout, dan dashboard admin sederhana. Buatkan user flow, struktur halaman, dan fitur MVP.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Saya ingin membuat aplikasi toko online untuk menjual kopi premium lokal. Target pengguna adalah pekerja kantoran usia 25–40 tahun. Fitur utama yang dibutuhkan adalah katalog produk, keranjang belanja, checkout, dan dashboard admin sederhana. Buatkan user flow, struktur halaman, dan fitur MVP.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
          <p style="font-size: 0.85rem; line-height: 1.6; margin-top: 0.75rem;"><strong>Dampak:</strong> Prompt ini memberikan konteks, target user, dan batasan yang sangat jelas. Hasil rancangan AI akan sangat matang, fungsional, dan siap untuk tahap refinement berikutnya.</p>
        </div>
      </div>

      <p>Karena itu, dalam dunia Vibe Coding berlaku satu prinsip sederhana:</p>

      <div class="pa-quote-box" style="border-left-color: #ef4444; background: hsl(var(--muted)/0.3);">
        <strong>Garbage In, Garbage Out.</strong> Prompt yang buruk akan menghasilkan output yang buruk. Sebaliknya, prompt yang dirancang dengan baik akan menghasilkan output yang jauh lebih berkualitas dan presisi.
      </div>

      <div class="pa-section-title">Prompt Engineering Bukan Tentang Kata-Kata Sakti</div>

      <p>Banyak orang mencari "prompt viral", "prompt rahasia", "prompt sakti", atau "prompt copy-paste". Padahal kenyataannya tidak ada prompt ajaib seperti itu. Prompt yang baik lahir dari pemahaman yang baik terhadap masalah dan tujuan proyek.</p>

      <p>Jika Anda memahami produk yang ingin dibangun, biasanya Anda akan jauh lebih mudah membuat prompt yang efektif. Karena pada dasarnya <strong>Prompt Engineering bukan tentang AI. Prompt Engineering adalah tentang berpikir dengan jelas.</strong></p>

      <div class="pa-section-title">Cara AI Memahami Instruksi</div>

      <p>Secara sederhana, AI mencoba memahami beberapa komponen utama ketika membaca prompt kita. Pastikan Anda menyertakan 4 elemen ini:</p>

      <ul class="pa-list-num">
        <li>
          <strong>Context (Konteks)</strong> — Apa yang sedang dibahas?
          <br>Contoh: <em>AI Resume Builder</em>, <em>Laundry Management System</em>, <em>Online Store</em>, atau <em>AI Proposal Generator</em>. Semakin jelas konteksnya, semakin baik hasilnya.
        </li>
        <li>
          <strong>Objective (Tujuan)</strong> — Apa tujuan yang ingin dicapai?
          <br>Contoh: <em>Membantu freelancer membuat proposal</em>, <em>Membantu UMKM mencatat transaksi</em>, atau <em>Membantu mahasiswa membuat CV</em>. Tujuan yang jelas membuat AI lebih fokus.
        </li>
        <li>
          <strong>Constraint (Batasan)</strong> — Apa batasannya?
          <br>Contoh: <em>Mobile friendly</em>, <em>Minimalis</em>, <em>Untuk pemula</em>, atau <em>Maksimal 5 fitur utama</em>. Constraint membantu AI menghindari output yang terlalu luas dan tidak realistis.
        </li>
        <li>
          <strong>Output (Format)</strong> — Apa hasil akhir yang Anda inginkan?
          <br>Contoh: <em>Tabel</em>, <em>User Flow</em>, <em>Struktur Database</em>, <em>Wireframe</em>, atau <em>Landing Page</em>. Tanpa menentukan format output, AI akan memilih formatnya sendiri yang sering kali kurang sesuai dengan kebutuhan Anda.
        </li>
      </ul>

      <div class="pa-section-title">Formula Prompt Engineering untuk App Development</div>

      <p>Dalam merancang aplikasi, kita bisa menggunakan beberapa framework formula terstruktur berikut:</p>

      <!-- Formula 1 -->
      <div class="pa-formula-box">
        <div class="pa-formula-title">Formula 1 — RTF (Role + Task + Format)</div>
        <p class="pa-formula-desc">Framework paling sederhana dan sangat cocok untuk tugas-tugas yang terisolasi.</p>
        <div class="pa-prompt-label">Contoh Penerapan Prompt:</div>
        <div class="pa-prompt-block"><strong>Role:</strong> Senior Product Manager
<strong>Task:</strong> Buat daftar fitur MVP untuk aplikasi laundry.
<strong>Format:</strong> Tabel berisi fitur dan deskripsi singkat.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Role: Senior Product Manager\\nTask: Buat daftar fitur MVP untuk aplikasi laundry.\\nFormat: Tabel berisi fitur dan deskripsi singkat.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        <p class="pa-formula-desc" style="margin-top: 0.5rem; margin-bottom: 0;"><em>Note: Framework ini sangat cocok untuk tugas-tugas terisolasi yang simpel.</em></p>
      </div>

      <!-- Formula 2 -->
      <div class="pa-formula-box">
        <div class="pa-formula-title">Formula 2 — RISE (Role + Input + Steps + Expectation)</div>
        <p class="pa-formula-desc">Framework terstruktur yang sangat efektif saat Anda merancang aplikasi dari nol.</p>
        <div class="pa-prompt-label">Contoh Penerapan Prompt:</div>
        <div class="pa-prompt-block"><strong>Role:</strong> Senior SaaS Product Architect
<strong>Input:</strong> AI Proposal Generator untuk freelancer.
<strong>Steps:</strong>
1. Analisis target user
2. Tentukan fitur MVP
3. Buat user flow
4. Buat struktur halaman
<strong>Expectation:</strong> Output dalam bentuk tabel yang mudah dipahami pemula.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Role: Senior SaaS Product Architect\\nInput: AI Proposal Generator untuk freelancer.\\nSteps:\\n1. Analisis target user\\n2. Tentukan fitur MVP\\n3. Buat user flow\\n4. Buat struktur halaman\\nExpectation: Output dalam bentuk tabel yang mudah dipahami pemula.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        <p class="pa-formula-desc" style="margin-top: 0.5rem; margin-bottom: 0;"><em>Note: Sangat direkomendasikan ketika menyusun spesifikasi awal modul aplikasi baru.</em></p>
      </div>

      <!-- Formula 3 -->
      <div class="pa-formula-box">
        <div class="pa-formula-title">Formula 3 — CREATE</div>
        <p class="pa-formula-desc">Framework komprehensif untuk proyek yang lebih detail dan kompleks (Landing Page, PRD, Dashboard SaaS).</p>
        <div style="margin-left: 1rem; margin-bottom: 1.25rem;">
          <ul class="pa-list" style="margin: 0.5rem 0 !important;">
            <li><strong>Character</strong> — Peran AI yang diinginkan (contoh: Senior Copywriter)</li>
            <li><strong>Request</strong> — Tugas utama yang diminta</li>
            <li><strong>Examples</strong> — Contoh/referensi sebagai pembanding</li>
            <li><strong>Adjustments</strong> — Penyesuaian khusus (constraints)</li>
            <li><strong>Type of Output</strong> — Format output yang diinginkan</li>
            <li><strong>Extras</strong> — Tambahan khusus (misal: gaya bahasa lo-gue)</li>
          </ul>
        </div>
        <div class="pa-prompt-label">Contoh Penerapan Prompt:</div>
        <div class="pa-prompt-block"><strong>Character:</strong> Senior Copywriter berpengalaman membuat SaaS landing page yang high-converting.
<strong>Request:</strong> Buatkan struktur konten halaman utama untuk AI Proposal Generator.
<strong>Examples:</strong> Gunakan gaya persuasif seperti landing page Stripe (minimalis tapi meyakinkan).
<strong>Adjustments:</strong> Target audiens adalah freelancer pemula. Fokus pada kemudahan penggunaan dan hemat waktu. Jangan terlalu teknis.
<strong>Type of Output:</strong> Struktur seksi per seksi (Hero, Features, Testimonials, FAQ) beserta teks headline dan copy-nya.
<strong>Extras:</strong> Tuliskan dalam bahasa Indonesia casual yang ramah dan solutif.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Character: Senior Copywriter berpengalaman membuat SaaS landing page yang high-converting.\\nRequest: Buatkan struktur konten halaman utama untuk AI Proposal Generator.\\nExamples: Gunakan gaya persuasif seperti landing page Stripe (minimalis tapi meyakinkan).\\nAdjustments: Target audiens adalah freelancer pemula. Fokus pada kemudahan penggunaan dan hemat waktu. Jangan terlalu teknis.\\nType of Output: Struktur seksi per seksi (Hero, Features, Testimonials, FAQ) beserta teks headline dan copy-nya.\\nExtras: Tuliskan dalam bahasa Indonesia casual yang ramah dan solutif.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
      </div>

      <div class="pa-section-title">Teknik Prompt Engineering yang Wajib Dikuasai</div>

      <p>Framework saja tidak cukup. Kita juga perlu memahami beberapa teknik prompting taktis yang sering digunakan oleh builder profesional:</p>

      <ul class="pa-list-num">
        <li>
          <strong>Role Prompting</strong>
          <br>Memberikan peran tertentu kepada AI untuk memfokuskan perspektif jawabannya.
          <br>Contoh: <em>"Bertindak sebagai Senior Product Manager"</em> atau <em>"Bertindak sebagai UI/UX Designer berpengalaman"</em>.
        </li>
        <li>
          <strong>Chain of Thought (CoT)</strong>
          <br>Meminta AI untuk berpikir secara terstruktur langkah demi langkah sebelum menyajikan jawaban final agar tingkat akurasi pemecahan masalahnya jauh lebih tinggi.
          <br>Contoh: <em>"Analisis masalah terlebih dahulu, kemudian tentukan solusi, lalu buat fitur MVP-nya secara bertahap."</em>
        </li>
        <li>
          <strong>Few-Shot Prompting</strong>
          <br>Memberikan contoh format input dan output nyata agar AI dapat langsung meniru pola yang Anda inginkan tanpa banyak menebak.
          <br>Contoh: memberikan format menu dashboard lama agar AI menyusun menu dashboard baru dengan format data yang persis sama.
        </li>
        <li>
          <strong>Constraint Prompting</strong>
          <br>Memberikan batasan parameter yang jelas agar output tetap berada di koridor yang tepat dan tidak melebar ke mana-mana.
          <br>Contoh: <em>"Maksimal 5 fitur utama"</em>, <em>"Mobile friendly"</em>, <em>"Cocok untuk pemula"</em>, atau <em>"Tidak menggunakan library eksternal"</em>.
        </li>
        <li>
          <strong>Iterative Prompting</strong>
          <br>Teknik paling penting dalam Vibe Coding. Jangan berharap prompt pertama Anda langsung menghasilkan aplikasi yang sempurna. Proses koding yang benar dengan AI adalah sebuah siklus percakapan interaktif:
          <div class="pa-process-flow" style="max-width: 300px; margin: 1.5rem auto;">
            <div class="pa-process-step">Tulis Prompt</div>
            <div class="pa-process-arrow">↓</div>
            <div class="pa-process-step">AI Output</div>
            <div class="pa-process-arrow">↓</div>
            <div class="pa-process-step">Review & Test</div>
            <div class="pa-process-arrow">↓</div>
            <div class="pa-process-step">Refinement (Revisi)</div>
            <div class="pa-process-arrow">↓</div>
            <div class="pa-process-step">Output Baru (Final)</div>
          </div>
          Setiap builder profesional bekerja dengan cara iteratif seperti ini.
        </li>
      </ul>

      <div class="pa-section-title">Prompt Engineering untuk Setiap Tahap Pengembangan Produk</div>

      <p>Dalam proses membangun aplikasi dari nol sampai rilis, Anda akan menggunakan prompt pada setiap langkah pengembangannya:</p>

      <div style="display: flex; flex-direction: column; gap: 1.25rem; margin: 2rem 0;">
        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">1</span> Product Discovery</h4>
          <p style="margin-bottom: 0.75rem;">Menganalisis ide awal dan memvalidasi model bisnis serta target pasar.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Analisis ide aplikasi berikut dan tentukan target user, masalah utama, serta value proposition-nya secara mendetail: [deskripsi ide]<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Analisis ide aplikasi berikut dan tentukan target user, masalah utama, serta value proposition-nya secara mendetail: [deskripsi ide]&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">2</span> MVP Planning</h4>
          <p style="margin-bottom: 0.75rem;">Menyaring ide besar agar fokus pada fitur utama yang paling berdampak.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Buatkan daftar fitur MVP yang wajib dimiliki oleh aplikasi ini agar target user bisa langsung merasakan manfaat utamanya tanpa fitur tambahan yang rumit.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Buatkan daftar fitur MVP yang wajib dimiliki oleh aplikasi ini agar target user bisa langsung merasakan manfaat utamanya tanpa fitur tambahan yang rumit.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">3</span> User Flow</h4>
          <p style="margin-bottom: 0.75rem;">Merancang langkah-langkah perjalanan pengguna di dalam aplikasi.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Buatkan langkah-langkah user flow dari proses pertama kali user melakukan pendaftaran (sign up) hingga transaksi checkout berhasil diselesaikan.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Buatkan langkah-langkah user flow dari proses pertama kali user melakukan pendaftaran (sign up) hingga transaksi checkout berhasil diselesaikan.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">4</span> UI/UX Design</h4>
          <p style="margin-bottom: 0.75rem;">Memetakan letak layout, komponen, dan navigasi halaman.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Buat struktur layout dashboard SaaS modern untuk AI Proposal Generator. Jelaskan letak menu navigasi, kartu metrik, dan tabel proyek.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Buat struktur layout dashboard SaaS modern untuk AI Proposal Generator. Jelaskan letak menu navigasi, kartu metrik, dan tabel proyek.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">5</span> Database Design</h4>
          <p style="margin-bottom: 0.75rem;">Merancang struktur penyimpanan data yang efisien dan terelasi.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Buatkan rancangan skema tabel database SQL beserta relasinya untuk menyimpan data user, proposal, dan riwayat pembayaran.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Buatkan rancangan skema tabel database SQL beserta relasinya untuk menyimpan data user, proposal, dan riwayat pembayaran.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">6</span> Coding Assistance</h4>
          <p style="margin-bottom: 0.75rem;">Meminta AI menuliskan kode fungsi atau komponen visual spesifik.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Buatkan implementasi fungsi otentikasi login menggunakan Supabase Authentication di framework Next.js 14 App Router.<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Buatkan implementasi fungsi otentikasi login menggunakan Supabase Authentication di framework Next.js 14 App Router.&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>

        <div class="pa-card">
          <h4 style="display: flex; align-items: center; gap: 0.5rem;"><span style="display: inline-flex; align-items: center; justify-content: center; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.8rem; font-weight: 800;">7</span> Debugging</h4>
          <p style="margin-bottom: 0.75rem;">Mencari penyebab error dan menuliskan kode perbaikannya.</p>
          <div class="pa-prompt-label">Contoh Prompt:</div>
          <div class="pa-prompt-block">Analisis baris kode berikut, jelaskan mengapa memicu error 'Hydration failed' di Next.js, dan berikan perbaikan kodenya: [kode]<button class="pa-copy-btn" onclick="navigator.clipboard.writeText(&quot;Analisis baris kode berikut, jelaskan mengapa memicu error 'Hydration failed' di Next.js, dan berikan perbaikan kodenya: [kode]&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>
        </div>
      </div>

      <div class="pa-section-title">Kesalahan Umum yang Harus Dihindari</div>

      <p>Bagi pemula, hindarilah 5 kesalahan umum prompting berikut agar proses belajar Vibe Coding Anda berjalan mulus:</p>

      <ul class="pa-list">
        <li><strong>Prompt Terlalu Umum:</strong> Mengetik instruksi pendek tanpa batasan jelas seperti <em>"Buat aplikasi toko online"</em>.</li>
        <li><strong>Tidak Menentukan Target User:</strong> Membuat AI buta terhadap tipe audiens aplikasi, sehingga alur navigasi bisa menjadi tidak sesuai sasaran.</li>
        <li><strong>Tidak Menentukan Format Output:</strong> AI akan memilih formatnya sendiri secara acak yang sering kali tidak ramah untuk langsung di-copy ke codebase.</li>
        <li><strong>Terlalu Banyak Request Sekaligus:</strong> Meminta AI membuat dashboard, sistem pembayaran, modul AI, newsletter, affiliate, dan analitik dalam satu prompt sekaligus. AI akan kewalahan dan performa logikanya akan menurun drastis.</li>
        <li><strong>Mengulang Dari Nol:</strong> Menulis instruksi <em>"buat ulang kodenya"</em> saat mendeteksi bug kecil. Lebih baik berikan pesan error konsol secara spesifik dan arahkan AI melakukan perbaikan terfokus (refactoring).</li>
      </ul>

      <div class="pa-section-title">Workflow Prompt Engineering dalam Vibe Coding</div>

      <p>Ingatlah bahwa prompt bukanlah aktivitas sekali pakai. Ini adalah alur komunikasi yang berjalan terus-menerus selama proses pembuatan produk:</p>

      <div class="pa-process-flow" style="max-width: 500px;">
        <div class="pa-process-step">1. Tentukan Ide Awal</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">2. Rancang Prompt Terstruktur</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">3. AI Menghasilkan Output (Kode/UI)</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">4. Review Hasil & Uji Coba Keandalan</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">5. Refinement (Koreksi Bug & Penajaman Detail)</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">6. Integrasi & Build Product</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">7. Uji Coba Kinerja (Testing)</div>
        <div class="pa-process-arrow">↓</div>
        <div class="pa-process-step">8. Optimasi / Pengembangan Berkelanjutan (Improve)</div>
      </div>

      <div class="pa-section-title">Apa yang Akan Kita Lakukan Pada Sesi Kedua?</div>

      <p>Pada sesi kedua nanti, Anda akan menggunakan ide orisinal yang telah dirancang pada sesi pertama. Kita akan mulai menyusun:</p>

      <ul class="pa-list">
        <li>Prompt Product Discovery</li>
        <li>Prompt Fitur MVP</li>
        <li>Prompt User Flow</li>
        <li>Prompt UI/UX Layout</li>
        <li>Prompt Landing Page Copywriting</li>
        <li>Prompt Pengembangan Fitur Utama Produk</li>
      </ul>

      <p>Output konkret dari sesi kedua ini akan menjadi fondasi utama (blueprint) yang sangat berharga ketika kita mulai membangun halaman web (landing page) pada sesi ketiga berikutnya.</p>

      <div class="pa-section-title">Penutup</div>

      <p>Banyak orang berpikir bahwa masa depan dunia software development sepenuhnya dikuasai oleh mesin AI. Sebenarnya tidak demikian. Masa depan industri ini ada di tangan <strong>manusia yang mampu berkomunikasi dengan AI secara efektif dan terarah</strong>.</p>

      <p>Teknologi dan model AI akan terus berganti dan semakin pintar, tetapi kemampuan memahami akar masalah, menyusun instruksi yang logis, serta membimbing AI melahirkan solusi akan selalu menjadi skill berharga yang tidak akan pernah tergantikan.</p>

      <p>Kualitas aplikasi yang Anda bangun dengan AI sangat ditentukan oleh kualitas komunikasi dan prompt yang Anda berikan kepada AI. Selamat melatih teknik koding modernmu!</p>

      <div class="pa-cta">
        <h2>Mau Template Prompt & Update Tips Vibe Coding Tiap Minggu?</h2>
        <p>Yuk ikuti akun Instagram saya untuk mendapatkan rekomendasi template prompt AI, tutorial web dev premium, serta tips membangun portofolio berstandar industri!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "9 Jun 2026",
    isoDate: "2026-06-09",
    readTime: "12 min",
    category: "Product Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["Prompt Engineering", "Vibe Coding", "AI Development", "SaaS Development", "App Development", "Productivity", "2026"],
    imageSrc: "/images/blog/prompt-engineering-app-dev.png",
    relatedPosts: ["roadmap-fullstack-developer-ai-2026", "mindset-idea-structuring-produk-ai"],
  },

  "roadmap-remote-job-client-luar-negeri": {
    title: "Roadmap Mendapatkan Remote Job & Client Luar Negeri untuk Programmer",
    excerpt: "Panduan lengkap langkah demi langkah untuk programmer Indonesia agar bisa mendapatkan remote job atau client luar negeri dan digaji dalam USD.",
    content: `
      <style>
        .rj-hero { padding: 2.5rem 2rem; border-radius: 1.25rem; background: linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--muted)/0.3) 100%); border: 1px solid hsl(var(--border)); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
        .rj-hero h2 { color: hsl(var(--foreground)) !important; font-size: 1.6rem; font-weight: 800; margin: 0 0 0.75rem 0; letter-spacing: -0.02em; }
        .rj-hero p { color: hsl(var(--muted-foreground)); font-size: 1rem; line-height: 1.7; margin: 0; }
        
        .rj-intro-box { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); box-shadow: 0 4px 12px rgba(0,0,0,0.01); margin: 1.5rem 0; line-height: 1.7; }
        .rj-section-title { font-size: 1.35rem; font-weight: 800; margin: 3rem 0 1.25rem 0; color: hsl(var(--foreground)); border-left: 4px solid hsl(var(--primary)); padding-left: 0.75rem; line-height: 1.2; }
        
        .rj-quote-box { padding: 1.25rem 1.75rem; border-radius: 0.75rem; background: hsl(var(--muted)/0.5); border-left: 4px solid hsl(var(--primary)); font-style: italic; color: hsl(var(--foreground)); margin: 1.5rem 0; font-size: 1rem; line-height: 1.6; }
        
        .rj-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin: 2rem 0; }
        .rj-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.25rem; margin: 2rem 0; }
        @media (max-width: 768px) { 
          .rj-grid-2, .rj-grid-3 { grid-template-columns: 1fr; } 
        }
        
        .rj-card { padding: 1.5rem; border-radius: 1.25rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); transition: all 0.2s ease; }
        .rj-card:hover { transform: translateY(-2px); border-color: hsl(var(--primary)/0.5); }
        .rj-card h4 { font-size: 1.05rem; font-weight: 800; margin: 0 0 0.5rem 0 !important; color: hsl(var(--foreground)); }
        .rj-card p { font-size: 0.88rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0; }
        
        .rj-badge-container { display: flex; flex-wrap: wrap; gap: 0.75rem; margin: 1.5rem 0; }
        .rj-badge { display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.6rem 1.25rem; border-radius: 9999px; background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); color: hsl(var(--foreground)); font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.2s ease; }
        .rj-badge:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-color: hsl(var(--primary)); transform: translateY(-2px) scale(1.03); }
        .rj-badge svg { transition: transform 0.2s ease; }
        .rj-badge:hover svg { transform: translate(1px, -1px); }
        
        .rj-prompt-block { background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; padding: 1.25rem 4.5rem 1.25rem 1.25rem; font-size: 0.88rem; line-height: 1.8; color: hsl(var(--foreground)); font-family: 'SF Mono', 'Fira Code', monospace; white-space: pre-wrap; word-break: break-word; margin: 1rem 0; position: relative; }
        .rj-prompt-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem; }

        .rj-copy-btn { position: absolute; top: 0.75rem; right: 0.75rem; display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.85rem; border-radius: 0.5rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); color: hsl(var(--muted-foreground)); font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); font-family: inherit; z-index: 10; }
        .rj-copy-btn:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-color: hsl(var(--primary)); transform: scale(1.03); }
        .rj-copy-btn:active { transform: scale(0.97); }
        .rj-copy-btn svg { width: 12px; height: 12px; transition: transform 0.2s; }
        .rj-copy-btn:hover svg { transform: rotate(5deg); }
        .rj-copy-btn.copied { background: #10b981 !important; color: #ffffff !important; border-color: #10b981 !important; }

        .rj-list { list-style: none !important; padding: 0 !important; margin: 1.5rem 0 !important; display: flex; flex-direction: column; gap: 0.75rem; }
        .rj-list li { font-size: 0.9rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1.25rem; line-height: 1.5; }
        .rj-list li::before { content: '•'; position: absolute; left: 0; top: -0.1rem; font-size: 1.25rem; line-height: 1; color: hsl(var(--primary)); }

        .rj-list-num { counter-reset: rj-counter; list-style: none !important; padding: 0 !important; margin: 1.5rem 0 !important; display: flex; flex-direction: column; gap: 1rem; }
        .rj-list-num li { counter-increment: rj-counter; padding: 1.25rem 1.5rem 1.25rem 3.5rem; position: relative; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; font-size: 0.9rem !important; line-height: 1.7; color: hsl(var(--muted-foreground)) !important; }
        .rj-list-num li::before { content: counter(rj-counter); position: absolute; left: 1.25rem; top: 1.25rem; font-size: 0.85rem; font-weight: 800; color: hsl(var(--foreground)); background: hsl(var(--muted)); width: 1.5rem; height: 1.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1px solid hsl(var(--border)); }
        .rj-list-num li strong { color: hsl(var(--foreground)); }

        .rj-action-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin: 2rem 0; }
        @media (max-width: 768px) { .rj-action-grid { grid-template-columns: 1fr; } }
        .rj-action-card { padding: 1.5rem; border-radius: 1rem; border: 1px solid hsl(var(--border)); background: hsl(var(--card)); border-left: 4px solid hsl(var(--primary)); }
        .rj-action-card h4 { font-size: 1rem; font-weight: 800; margin: 0 0 0.75rem 0 !important; color: hsl(var(--foreground)); }
        .rj-action-card ul { list-style: none !important; padding: 0 !important; margin: 0 !important; display: flex; flex-direction: column; gap: 0.5rem; }
        .rj-action-card ul li { font-size: 0.85rem !important; color: hsl(var(--muted-foreground)) !important; margin-bottom: 0 !important; position: relative; padding-left: 1rem; }
        .rj-action-card ul li::before { content: '✓'; position: absolute; left: 0; color: #10b981; font-weight: bold; }

        .rj-cta { margin-top: 3.5rem; padding: 3rem 2rem; border-radius: 1.5rem; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.9) 100%); text-align: center; color: hsl(var(--primary-foreground)); position: relative; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .rj-cta::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%); pointer-events: none; }
        .rj-cta h2 { color: hsl(var(--primary-foreground)) !important; margin-top: 0 !important; font-size: 1.75rem; font-weight: 800; margin-bottom: 0.75rem; }
        .rj-cta p { color: hsl(var(--primary-foreground) / 0.8); margin-bottom: 1.5rem; font-size: 1.05rem; max-width: 600px; margin-left: auto; margin-right: auto; }
        .rj-cta a { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 2.25rem; border-radius: 9999px; background: hsl(var(--primary-foreground)); color: hsl(var(--primary)); font-weight: 700; font-size: 0.95rem; text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .rj-cta a:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.2); filter: brightness(1.05); }
        .rj-cta a svg { transition: transform 0.2s; }
        .rj-cta a:hover svg { transform: rotate(10deg) scale(1.1); }
      </style>
      
      <div class="rj-hero">
        <h2>Roadmap Mendapatkan Remote Job & Client Luar Negeri untuk Programmer</h2>
        <p>Kalau dollar naik, banyak programmer langsung ngomong: "Enak ya kalau dibayar USD." Masalahnya... Banyak yang berhenti sampai di situ. Padahal pertanyaan yang lebih penting adalah: Gimana caranya supaya skill kita bisa dijual ke pasar global?</p>
      </div>

      <div class="rj-intro-box">
        <p>Kenyataannya, programmer yang dibayar dalam USD bukan selalu yang paling pintar. Sering kali mereka adalah orang yang memiliki portofolio jelas, terlihat di internet (visibility), bisa menunjukkan hasil kerja nyata, dan tahu cara memasarkan skill mereka di pasar global. Jika Anda ingin mulai mendapatkan remote job atau client luar negeri, berikut roadmap lengkap yang saya rekomendasikan.</p>
      </div>

      <div class="rj-section-title">Tahap 1 — Kuasai Satu Skill Dulu</div>

      <p>Kesalahan terbesar pemula adalah mencoba belajar semuanya sekaligus: Frontend, Backend, AI, Mobile, DevOps, dan Cybersecurity secara bersamaan. Akhirnya, tidak ada yang benar-benar dikuasai secara mendalam. Pilihlah satu jalur terlebih dahulu untuk menjadi pondasi utama Anda:</p>

      <div class="rj-grid-3">
        <div class="rj-card">
          <h4>Frontend Dev</h4>
          <p>Fokus menguasai HTML, CSS, JavaScript, serta framework modern seperti React atau Next.js untuk antarmuka web.</p>
        </div>
        <div class="rj-card">
          <h4>Backend Dev</h4>
          <p>Fokus menguasai bahasa server seperti Node.js atau PHP (Laravel), pengelolaan Database, serta pembuatan API.</p>
        </div>
        <div class="rj-card">
          <h4>AI Developer</h4>
          <p>Fokus pada Prompt Engineering, integrasi AI API, implementasi RAG (Retrieval-Augmented Generation), dan Alur Otomasi.</p>
        </div>
      </div>

      <div class="rj-quote-box">
        Targetnya sederhana: "Bisa membuat project utuh sendiri tanpa harus mengikuti tutorial langkah demi langkah."
      </div>

      <div class="rj-section-title">Tahap 2 — Bangun Portfolio Nyata</div>

      <p>Client luar negeri tidak membeli sertifikat kursus online Anda. Client membeli bukti kerja nyata yang fungsional. Pastikan Anda memiliki portofolio minimal sebagai berikut:</p>

      <ul class="rj-list">
        <li><strong>3 Project CRUD Sederhana:</strong> Misalnya aplikasi Todo List, Sistem Kasir (Point of Sales), atau Manajemen Inventori.</li>
        <li><strong>1 Project Fullstack Kompleks:</strong> Misalnya Booking System, Learning Management System (LMS), atau E-Commerce lengkap dengan transaksi.</li>
        <li><strong>1 Project Pemecah Masalah Nyata:</strong> Ini yang paling krusial — buat aplikasi yang menyelesaikan masalah riil di sekitar Anda atau industri spesifik.</li>
      </ul>

      <div class="rj-section-title">Tahap 3 — Upload Semua ke GitHub</div>

      <p>GitHub adalah CV utama bagi seorang programmer di era modern. Ketika recruiter atau client luar negeri melihat profil GitHub yang kosong, kepercayaan mereka (trust) akan langsung menurun drastis. Pastikan:</p>

      <ul class="rj-list">
        <li>Struktur repository bersih dan rapi.</li>
        <li>Dokumentasi README jelas dan informatif.</li>
        <li>Terdapat screenshot atau video demo berdurasi singkat.</li>
        <li>Cantumkan link live demo aplikasi yang bisa langsung diuji coba.</li>
      </ul>

      <div class="rj-section-title">Tahap 4 — Publish Project Online (Deploy)</div>

      <p>Jangan biarkan aplikasi Anda hanya berjalan di localhost komputer Anda sendiri. Client ingin melihat hasilnya secara langsung, bukan mendengar cerita pembuatannya. Deploy project Anda ke platform cloud gratis atau terjangkau:</p>

      <div class="rj-grid-3">
        <div class="rj-card">
          <h4>Vercel / Netlify</h4>
          <p>Sangat cocok untuk deploy project frontend statis atau aplikasi berbasis Next.js/React secara instan.</p>
        </div>
        <div class="rj-card">
          <h4>Railway / Render</h4>
          <p>Sangat praktis untuk menaruh aplikasi backend (Node.js, PHP, Python) dan database server online.</p>
        </div>
        <div class="rj-card">
          <h4>VPS / Cloud Provider</h4>
          <p>Sangat ideal untuk deployment skala produksi menggunakan Docker atau konfigurasi server mandiri.</p>
        </div>
      </div>

      <div class="rj-section-title">Tahap 5 — Bangun Personal Branding</div>

      <p>Ini adalah bagian yang paling sering diremehkan oleh programmer. Padahal, konsisten membuat konten di media sosial atau blog pribadi dapat membuka banyak pintu peluang kerja jarak jauh, webinar, mentoring, hingga proyek kolaborasi global secara inbound.</p>

      <p>Mulailah membagikan progress belajar harian Anda, project baru yang sedang dibangun, tips-tips programming unik, insight seputar teknologi AI terbaru, atau pengalaman mengatasi bug rumit. Tidak perlu menunggu viral, yang terpenting adalah konsistensi dan visibilitas Anda di internet.</p>

      <div class="rj-section-title">Tahap 6 — Mulai Cari Client Global</div>

      <p>Gunakan platform tepercaya di bawah ini untuk mulai menawarkan jasa coding Anda ke kancah internasional:</p>

      <div class="rj-badge-container">
        <a href="https://upwork.com" target="_blank" rel="noopener noreferrer" class="rj-badge">Upwork<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:0.15rem;"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
        <a href="https://freelancer.com" target="_blank" rel="noopener noreferrer" class="rj-badge">Freelancer<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:0.15rem;"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
        <a href="https://fiverr.com" target="_blank" rel="noopener noreferrer" class="rj-badge">Fiverr<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:0.15rem;"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
        <a href="https://contra.com" target="_blank" rel="noopener noreferrer" class="rj-badge">Contra<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:0.15rem;"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
        <a href="https://toptal.com" target="_blank" rel="noopener noreferrer" class="rj-badge">Toptal<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-left:0.15rem;"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></a>
      </div>

      <p>Jangan langsung menargetkan proyek bernilai ribuan dollar di awal. Fokuslah pada penyelesaian pekerjaan kecil terlebih dahulu untuk mendapatkan <strong>bintang 5 dan testimonial pertama Anda</strong>. Rating awal ini akan menjadi batu loncatan terbesar Anda.</p>

      <div class="rj-prompt-label">Template Proposal Upwork Singkat & Efektif (Bisa Di-copy):</div>
      <div class="rj-prompt-block">Hi [Client Name],

I saw your project request for [project requirement]. I have built a similar project recently (you can check it here: [portfolio link]).

I can get this done for you in [timeframe]. Let me know if we can chat briefly to align on the details.

Best,
[Your Name]<button class="rj-copy-btn" onclick="navigator.clipboard.writeText(&quot;Hi [Client Name],\\\\n\\\\nI saw your project request for [project requirement]. I have built a similar project recently (you can check it here: [portfolio link]).\\\\n\\\\nI can get this done for you in [timeframe]. Let me know if we can chat briefly to align on the details.\\\\n\\\\nBest,\\\\n[Your Name]&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>

      <div class="rj-section-title">Tahap 7 — Optimalkan LinkedIn</div>

      <p>Banyak sekali tawaran remote job penuh waktu (full-time remote) yang datang secara langsung melalui inbox LinkedIn. Pastikan profil LinkedIn Anda dioptimalkan dengan baik:</p>

      <ul class="rj-list">
        <li>Gunakan foto profil yang profesional dengan pencahayaan yang baik.</li>
        <li>Tulis headline profil yang jelas, ringkas, dan memuat kata kunci keahlian utama Anda.</li>
      </ul>

      <div class="rj-prompt-label">Contoh Headline LinkedIn (Bisa Di-copy):</div>
      <div class="rj-prompt-block">Fullstack Developer | Laravel | Next.js | AI Integration<button class="rj-copy-btn" onclick="navigator.clipboard.writeText(&quot;Fullstack Developer | Laravel | Next.js | AI Integration&quot;);this.classList.add('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.classList.remove('copied');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button></div>

      <div class="rj-section-title">Tahap 8 — Belajar Bahasa Inggris Praktis</div>

      <p>Anda tidak harus memiliki skor TOEFL/IELTS yang tinggi atau pelafalan yang sempurna. Namun, minimal Anda harus mampu:</p>

      <ul class="rj-list">
        <li>Membaca dokumentasi teknis dalam bahasa Inggris dengan baik.</li>
        <li>Menulis pesan teks/chat secara jelas dan sopan saat berkomunikasi dengan client.</li>
        <li>Melakukan percakapan video call/meeting sederhana untuk menyelaraskan kebutuhan proyek.</li>
      </ul>

      <p>Ingat, mayoritas peluang kerja global menggunakan bahasa Inggris sebagai bahasa pengantar utama.</p>

      <div class="rj-section-title">Tahap 9 — Naikkan Value, Bukan Jam Kerja</div>

      <p>Banyak programmer berpikir bahwa jalan satu-satunya menaikkan pendapatan adalah dengan bekerja lebih lama. Padahal, client global membayar berdasarkan hasil dan nilai solusi yang Anda berikan, bukan berdasarkan jam kerja yang dihabiskan.</p>

      <p>Manfaatkan tools berbasis AI, otomatisasi alur kerja, dan workflow pengembangan modern agar pekerjaan yang biasanya memakan waktu 10 jam dapat diselesaikan secara presisi dalam 2 jam. Dengan begitu, Anda memiliki kapasitas untuk mengambil proyek lain atau menikmati waktu luang Anda.</p>

      <div class="rj-section-title">Rencana Aksi 30 Hari (Action Plan)</div>

      <p>Mulai dari langkah kecil secara konsisten. Berikut rencana aksi mingguan yang bisa Anda jalankan:</p>

      <div class="rj-action-grid">
        <div class="rj-action-card">
          <h4>Minggu 1: Focus & Build</h4>
          <ul>
            <li>Tentukan satu spesialisasi utama Anda.</li>
            <li>Rancang dan mulai coding 1 project portofolio mandiri.</li>
          </ul>
        </div>
        <div class="rj-action-card">
          <h4>Minggu 2: GitHub & Deploy</h4>
          <ul>
            <li>Upload seluruh kode program project Anda ke GitHub.</li>
            <li>Deploy project tersebut agar online dan bisa diakses demo-nya.</li>
          </ul>
        </div>
        <div class="rj-action-card">
          <h4>Minggu 3: Brand & Visibility</h4>
          <ul>
            <li>Optimalkan foto, headline, dan detail profil LinkedIn Anda.</li>
            <li>Mulai bagikan konten atau progress project Anda ke media sosial.</li>
          </ul>
        </div>
        <div class="rj-action-card">
          <h4>Minggu 4: Apply & Pitch</h4>
          <ul>
            <li>Buat akun Upwork/Fiverr/Contra yang profesional.</li>
            <li>Kirim 5 proposal penawaran proyek pertama Anda secara terarah.</li>
          </ul>
        </div>
      </div>

      <div class="rj-section-title">Kesimpulan</div>

      <p>Peluang global tidak pernah menghampiri programmer yang paling diam di kamarnya. Peluang tersebut datang kepada mereka yang terlihat, aktif menunjukkan bukti kerjanya, dan berani mengambil langkah pertama. Memulai kerja dengan client luar negeri pertama Anda akan jauh lebih bernilai dibanding membaca ratusan tutorial tanpa pernah mempraktikkannya sama sekali!</p>

      <div class="rj-cta">
        <h2>Mau Info Belajar & Career Hacks Dunia IT Tiap Hari?</h2>
        <p>Yuk ikuti Instagram saya untuk mendapatkan update project roadmap terbaru, tips prompts AI engineering, strategi freelancing, serta panduan praktis membangun personal branding IT!</p>
        <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:0.25rem;"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Follow @adityafakhrii di Instagram
        </a>
      </div>
    `,
    date: "9 Jun 2026",
    isoDate: "2026-06-09",
    readTime: "9 min",
    category: "Career",
    author: "Aditya Fakhri Riansyah",
    tags: ["Remote Job", "Freelance", "GitHub", "LinkedIn", "Upwork", "Career Development", "2026"],
    imageSrc: "/images/blog/roadmap-remote-job.png",
    relatedPosts: ["roadmap-fullstack-developer-ai-2026", "cuan-dari-ai-2026", "prompt-engineering-for-app-development"],
  }
} as const

export type BlogId = keyof typeof blogs
export default blogs