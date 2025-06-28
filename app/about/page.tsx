"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { TranslatedContent } from "@/components/translated-content"

export default function AboutPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('aboutTitle')} description={t('aboutDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <div className="space-y-4">
                <p className="text-lg">
                  {t('language') === 'id' 
                    ? "Memiliki passion dalam membangun solusi digital yang berdampak dan membuat pengetahuan teknologi dapat diakses oleh semua orang. Terampil dalam pengembangan web full-stack dengan JavaScript & Laravel dengan pola pikir pemecahan masalah yang kuat."
                    : "Passionate about building impactful digital solutions and making technology knowledge accessible to everyone. Skilled in full-stack web development with JavaScript & Laravel with strong problem-solving mindset."
                  }
                </p>
                <p className="text-lg">
                  {t('language') === 'id'
                    ? "Selain mengembangkan aplikasi, saya juga aktif sebagai mentor dan content creator di bidang teknologi. Saya percaya bahwa berbagi pengetahuan adalah cara terbaik untuk terus belajar dan berkembang."
                    : "Besides developing applications, I'm also active as a mentor and content creator in the technology field. I believe that sharing knowledge is the best way to keep learning and growing."
                  }
                </p>
                <p className="text-lg">
                  {t('language') === 'id'
                    ? "Selalu terbuka untuk berkolaborasi, berbagi pengetahuan, atau sekadar minum kopi dan mengobrol tentang teknologi! Jangan ragu untuk terhubung di adityafakhri03@gmail.com. 🚀☕"
                    : "Always open to collaborate, share knowledge, or just have coffee and chat about technology! Don't hesitate to connect at adityafakhri03@gmail.com. 🚀☕"
                  }
                </p>
              </div>
            </ContentBlock>

            <ContentBlock title={`🧠 ${t('philosophy')}`}>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('language') === 'id' ? "Teknologi harus mempermudah, bukan mempersulit" : "Technology should simplify, not complicate"}</li>
                <li>{t('language') === 'id' ? "Kode yang baik adalah kode yang dapat dipahami" : "Good code is understandable code"}</li>
                <li>{t('language') === 'id' ? "Pembelajaran adalah proses seumur hidup" : "Learning is a lifelong process"}</li>
                <li>{t('language') === 'id' ? "Kolaborasi menghasilkan solusi terbaik" : "Collaboration produces the best solutions"}</li>
                <li>{t('language') === 'id' ? "Etika harus menjadi pertimbangan utama dalam pengembangan teknologi" : "Ethics should be the main consideration in technology development"}</li>
              </ul>
            </ContentBlock>

            <ContentBlock title={`🌟 ${t('values')}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('language') === 'id' ? "Inovasi" : "Innovation"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id' 
                      ? "Selalu mencari cara baru dan lebih baik untuk menyelesaikan masalah dan menciptakan nilai."
                      : "Always looking for new and better ways to solve problems and create value."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('language') === 'id' ? "Kualitas" : "Quality"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id'
                      ? "Berkomitmen pada standar tertinggi dalam setiap aspek pekerjaan."
                      : "Committed to the highest standards in every aspect of work."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('language') === 'id' ? "Kolaborasi" : "Collaboration"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id'
                      ? "Bekerja sama dengan klien dan rekan untuk mencapai hasil terbaik."
                      : "Working together with clients and colleagues to achieve the best results."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('language') === 'id' ? "Keberlanjutan" : "Sustainability"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id'
                      ? "Membangun solusi yang dapat bertahan dan berkembang seiring waktu."
                      : "Building solutions that can last and grow over time."
                    }
                  </p>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title={`🌱 ${t('hobbies')}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">📚 {t('language') === 'id' ? "Membaca" : "Reading"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id' 
                      ? "Buku teknologi, fiksi ilmiah, dan pengembangan diri."
                      : "Technology books, science fiction, and self-development."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">🏃‍♂️ {t('language') === 'id' ? "Olahraga" : "Sports"}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id'
                      ? "Sepakbola, Futsal, Lari, dan Bulu Tangkis."
                      : "Football, Futsal, Running, and Badminton."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">🎮 Gaming</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('language') === 'id'
                      ? "Game strategi dan open world untuk melatih pemecahan masalah. Tak lupa menyusun taktik dalam game Sepakbola"
                      : "Strategy and open world games to train problem solving. Not forgetting to arrange tactics in Football games"
                    }
                  </p>
                </div>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}