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
        .pe-example-good { color: hsl(var(--foreground)); }
        .pe-example-bad::before { content: 'Kurang Baik'; display: inline-block; font-size: 0.7rem; font-weight: 700; padding: 0.1rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); border: 1px solid hsl(var(--border)); margin-right: 0.5rem; margin-bottom: 0.35rem; }
        .pe-example-good::before { content: 'Lebih Baik'; display: inline-block; font-size: 0.7rem; font-weight: 700; padding: 0.1rem 0.5rem; border-radius: 0.25rem; background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); margin-right: 0.5rem; margin-bottom: 0.35rem; }
        .pe-tip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1.5rem 0; }
        .pe-tip-card { padding: 1.25rem; border-radius: 0.75rem; background: hsl(var(--card)); border: 1px solid hsl(var(--border)); position: relative; }
        .pe-tip-card h4 { font-size: 0.95rem; font-weight: 700; margin: 0 0 0.35rem 0; color: hsl(var(--foreground)); }
        .pe-tip-card p { font-size: 0.85rem; line-height: 1.6; color: hsl(var(--muted-foreground)); margin: 0 0 2.5rem 0; }
        .pe-copy-btn { position: absolute; bottom: 1rem; right: 1rem; display: inline-flex; align-items: center; gap: 0.35rem; padding: 0.35rem 0.85rem; border-radius: 0.5rem; border: 1px solid hsl(var(--border)); background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s; font-family: inherit; }
        .pe-copy-btn:hover { background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); border-color: hsl(var(--primary)); }
        .pe-copy-btn svg { width: 12px; height: 12px; }
        .pe-prompt-block { background: hsl(var(--muted)); border: 1px solid hsl(var(--border)); border-radius: 0.75rem; padding: 1.25rem; font-size: 0.85rem; line-height: 1.8; color: hsl(var(--foreground)); font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', monospace; white-space: pre-wrap; word-break: break-word; margin: 1rem 0; overflow-x: auto; }
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
        <div class="pe-example-good">"Lo adalah seorang social media strategist berpengalaman 5 tahun di industri F&B. Buatkan 5 caption Instagram untuk promo menu baru kedai kopi — nada casual, target anak muda Jakarta 18-25 tahun. Format: setiap caption max 150 karakter, include 3 hashtag relevan, dan 1 CTA."</div>
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

Extras: Tambahkan tabel perbandingan 5 laptop rekomendasi dengan kolom: nama, harga, prosesor, RAM, dan skor rating.</div>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #3 — T-A-G (Task + Action + Goal)</div>
        <div class="pe-formula-text">[Task] + [Action] + [Goal]</div>
        <div class="pe-formula-desc">Rumus simpel buat instruksi yang action-oriented. Cocok buat tugas teknis: coding, analisis data, debugging.</div>
      </div>

      <div class="pe-example">
        <div class="pe-example-header">Contoh penerapan T-A-G</div>
        <div class="pe-example-bad">"fix kode ini"</div>
        <div class="pe-example-good">"Task: Ada bug di fungsi login — user selalu redirect ke halaman 404 setelah submit form. Action: Analisis kode di bawah, identifikasi root cause, dan berikan fix beserta penjelasan. Goal: User bisa login dan redirect ke dashboard tanpa error."</div>
      </div>

      <div class="pe-formula-box">
        <div class="pe-formula-label">Rumus #4 — B-A-B (Before + After + Bridge)</div>
        <div class="pe-formula-text">[Before: situasi saat ini] + [After: hasil yang diinginkan] + [Bridge: bagaimana AI bisa bantu]</div>
        <div class="pe-formula-desc">Framework storytelling. Sangat efektif buat copywriting, proposal, dan komunikasi persuasif.</div>
      </div>

      <div class="pe-prompt-label">Contoh prompt dengan rumus B-A-B:</div>
      <div class="pe-prompt-block">Before: Toko online gue cuma dapet 50 visitors per hari dan conversion rate 0.5%. Revenue stuck di 2 juta/bulan.

After: Gue mau dapet 500 visitors per hari dengan conversion rate 3%, targetin revenue 20 juta/bulan dalam 3 bulan.

Bridge: Buatkan strategi digital marketing lengkap yang mencakup SEO, social media, dan email marketing — dengan timeline mingguan dan KPI yang terukur.</div>

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

Expectation: Halaman produk loading di bawah 1 detik, skor Lighthouse minimal 90. Setiap solusi disertai penjelasan kenapa dan kode yang siap pakai.</div>

      <div class="pe-section-title">7 Teknik Advanced Prompt Engineering</div>

      <p>Setelah lo paham rumusnya, saatnya level up ke teknik-teknik yang bikin output AI makin presisi dan reliable.</p>

      <div class="pe-technique-list">
        <div class="pe-technique">
          <h3>1. Chain of Thought (CoT) Prompting</h3>
          <p>Minta AI untuk berpikir step-by-step sebelum memberi jawaban final. Teknik ini terbukti meningkatkan akurasi terutama untuk problem-solving dan reasoning.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">"Analisis apakah startup ini layak didanai. Pikirkan langkah demi langkah:
1. Evaluasi market size dan growth potential
2. Analisis competitive landscape
3. Review business model dan unit economics
4. Assess tim dan execution capability
Baru setelah itu, berikan rekomendasi final beserta confidence score."</div>
        </div>

        <div class="pe-technique">
          <h3>2. Few-Shot Prompting</h3>
          <p>Kasih AI beberapa contoh input-output yang lo harapkan. AI akan mengenali pola dan mengikuti format yang lo tentukan.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">"Ubah kalimat formal menjadi casual bahasa anak muda Jakarta.

Contoh 1:
Formal: "Kami mengucapkan terima kasih atas dukungan Anda."
Casual: "Thanks banget buat support-nya, gengs!"

Contoh 2:
Formal: "Silakan hubungi kami untuk informasi lebih lanjut."
Casual: "Ada yang mau ditanyain? DM aja langsung, santai."

Formal: "Kami informasikan bahwa jadwal meeting telah diubah."
Casual: ???"</div>
        </div>

        <div class="pe-technique">
          <h3>3. Role Stacking</h3>
          <p>Bukan cuma satu role — kasih AI multiple roles atau perspectives untuk jawaban yang lebih komprehensif.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">"Evaluasi landing page ini dari 3 perspektif:
1. Sebagai UX designer: analisis user flow, clarity, dan friction points
2. Sebagai copywriter: evaluasi headline, CTA, dan persuasive elements
3. Sebagai growth marketer: cek conversion optimization dan A/B test opportunities

Berikan skor 1-10 dari setiap perspektif dan 3 actionable improvements."</div>
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
- Audience: "Jelaskan seperti ke anak SMA kelas 10"</div>
        </div>

        <div class="pe-technique">
          <h3>5. Self-Reflection Prompting</h3>
          <p>Minta AI untuk mengevaluasi dan memperbaiki output-nya sendiri. Ini bikin kualitas naik signifikan.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">"Tulis email follow-up ke klien yang belum bayar invoice.

Setelah selesai, evaluasi email tersebut:
- Apakah tone-nya terlalu agresif atau terlalu lembek?  
- Ada nggak yang bisa bikin klien tersinggung?
- Apakah CTA-nya jelas?

Kalau ada yang kurang, revisi ulang dan berikan versi final."</div>
        </div>

        <div class="pe-technique">
          <h3>6. Template Prompting</h3>
          <p>Kasih AI template output yang harus diikuti. Ini memastikan output selalu konsisten dan sesuai format yang lo butuhkan.</p>
          <div class="pe-prompt-label">Contoh:</div>
          <div class="pe-prompt-block">"Review produk ini. Gunakan template berikut:

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
**Verdict:** [1 kalimat kesimpulan]"</div>
        </div>

        <div class="pe-technique">
          <h3>7. Iterative Refinement</h3>
          <p>Jangan expect hasil sempurna di prompt pertama. Treat AI seperti kolaborator — kasih feedback dan minta perbaikan secara bertahap.</p>
          <div class="pe-prompt-label">Contoh flow:</div>
          <div class="pe-prompt-block">Prompt 1: "Tulis outline buat artikel tentang investasi saham buat pemula"
→ Review outline, lalu...

Prompt 2: "Bagus. Sekarang expand section 3 tentang analisis fundamental. Tambahkan contoh saham Indonesia yang real."
→ Review lagi...

Prompt 3: "Tambahin disclaimer dan risk warning di akhir. Juga perbaiki paragraf 2 — terlalu teknis buat pemula."</div>
        </div>
      </div>

      <div class="pe-section-title">Template Prompt Siap Pakai</div>

      <p>Simpan template-template ini. Tinggal ganti bagian dalam kurung [] sesuai kebutuhan lo.</p>

      <div class="pe-tip-grid">
        <div class="pe-tip-card">
          <h4>Bikin Konten</h4>
          <p>"Tulis [jenis konten] tentang [topik] untuk [target audience]. Gunakan tone [formal/casual/fun]. Panjang [X] kata. Include [elemen khusus: CTA, data statistik, quotes, dll]."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Tulis [jenis konten] tentang [topik] untuk [target audience]. Gunakan tone [formal/casual/fun]. Panjang [X] kata. Include [elemen khusus: CTA, data statistik, quotes, dll].');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Debug Kode</h4>
          <p>"Kode ini menghasilkan error [error message]. Stack: [tech stack]. Yang diharapkan: [expected behavior]. Yang terjadi: [actual behavior]. Tolong identifikasi bug dan berikan fix beserta penjelasan."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Kode ini menghasilkan error [error message]. Stack: [tech stack]. Yang diharapkan: [expected behavior]. Yang terjadi: [actual behavior]. Tolong identifikasi bug dan berikan fix beserta penjelasan.');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Analisis Data</h4>
          <p>"Analisis data [jenis data] berikut. Identifikasi [X] insight utama, trends, dan anomali. Presentasikan dalam format [tabel/bullet points/executive summary]. Fokus pada [metrik spesifik]."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Analisis data [jenis data] berikut. Identifikasi [X] insight utama, trends, dan anomali. Presentasikan dalam format [tabel/bullet points/executive summary]. Fokus pada [metrik spesifik].');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Email Profesional</h4>
          <p>"Tulis email [tujuan: follow-up/proposal/complaint] ke [siapa] tentang [topik]. Tone [formal/semi-formal]. Max [X] paragraf. Include [data pendukung/deadline/CTA spesifik]."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Tulis email [tujuan: follow-up/proposal/complaint] ke [siapa] tentang [topik]. Tone [formal/semi-formal]. Max [X] paragraf. Include [data pendukung/deadline/CTA spesifik].');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Brainstorming</h4>
          <p>"Generate [X] ide untuk [topik/project]. Untuk setiap ide, jelaskan: konsep singkat, target market, estimasi effort (low/med/high), dan potential impact. Rank dari yang paling menjanjikan."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Generate [X] ide untuk [topik/project]. Untuk setiap ide, jelaskan: konsep singkat, target market, estimasi effort (low/med/high), dan potential impact. Rank dari yang paling menjanjikan.');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
        </div>
        <div class="pe-tip-card">
          <h4>Belajar Konsep Baru</h4>
          <p>"Jelaskan [konsep] seperti mengajar [level: anak 10 tahun/mahasiswa/profesional]. Gunakan [X] analogi dari kehidupan sehari-hari. Berikan [X] contoh nyata. Di akhir, buat quiz singkat 3 pertanyaan."</p>
          <button class="pe-copy-btn" onclick="navigator.clipboard.writeText('Jelaskan [konsep] seperti mengajar [level: anak 10 tahun/mahasiswa/profesional]. Gunakan [X] analogi dari kehidupan sehari-hari. Berikan [X] contoh nyata. Di akhir, buat quiz singkat 3 pertanyaan.');this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><polyline points=&quot;20 6 9 17 4 12&quot;/></svg>Copied!';setTimeout(()=>{this.innerHTML='<svg viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot;><rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot;/><path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;/></svg>Copy';},2000)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy</button>
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
    readTime: "18 min",
    category: "AI",
    author: "Aditya Fakhri Riansyah",
    tags: ["Prompt Engineering", "AI", "ChatGPT", "Claude", "Tutorial", "2026", "Productivity"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777265912351-xkoe1z.webp",
    relatedPosts: ["ai-vs-developer-2026", "cuan-dari-ai-2026", "ai-website-builder-2026"],
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
    readTime: "15 min",
    category: "Web Development",
    author: "Aditya Fakhri Riansyah",
    tags: ["React", "Next.js", "Frontend", "JavaScript", "Framework", "SSR", "SSG", "Web Development", "2026"],
    imageSrc: "https://ltdwpaciulpophywcuam.supabase.co/storage/v1/object/public/shared-images/1777264199759-yt0c54.webp",
    relatedPosts: ["ai-vs-developer-2026", "ai-website-builder-2026"],
  }
} as const

export type BlogId = keyof typeof blogs
export default blogs