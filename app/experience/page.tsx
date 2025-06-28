"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { TranslatedContent } from "@/components/translated-content"

export default function ExperiencePage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('experienceTitle')} description={t('experienceDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <div className="space-y-8">
                {/* Internal Mentor */}
                <div className="relative pl-6 border-l-2 border-muted pb-8">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <h3 className="font-medium text-xl">
                    {t('language') === 'id' ? 'Internal Mentor' : 'Internal Mentor'}
                  </h3>
                  <p className="text-muted-foreground">
                    CodePolitan • Sep 2024 - {t('present')} • Cimahi
                  </p>
                  <div className="mt-4 space-y-2">
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>
                        {t('language') === 'id' 
                          ? "Membuat konten tutorial dan kelas pemrograman terstruktur, meningkatkan keterlibatan pengguna sebesar 30% dan menarik 2.000+ pelajar baru di berbagai platform."
                          : "Creating tutorial content and structured programming classes, increasing user engagement by 30% and attracting 2,000+ new learners across various platforms."
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Mendesain dan menyampaikan silabus pemrograman yang progresif dan praktis, menyesuaikan dengan kebutuhan dunia nyata."
                          : "Designing and delivering progressive and practical programming syllabi, adapting to real-world needs."
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Memimpin konsultasi online mingguan, memberikan bimbingan personal, troubleshooting, dan mentorship untuk mempercepat pertumbuhan peserta."
                          : "Leading weekly online consultations, providing personal guidance, troubleshooting, and mentorship to accelerate participant growth."
                        }
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">{t('mentoring')}</Badge>
                      <Badge variant="outline">{t('contentCreation')}</Badge>
                      <Badge variant="outline">YouTube</Badge>
                      <Badge variant="outline">Programming</Badge>
                    </div>
                  </div>
                </div>

                {/* Other experience entries with similar translation pattern */}
                {/* ... */}
              </div>
            </ContentBlock>

            <ContentBlock title={`🏆 ${t('achievements')}`}>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">
                    {t('language') === 'id' 
                      ? "Pengembangan Sistem SIACTA"
                      : "SIACTA System Development"
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('language') === 'id' 
                      ? "Memimpin pengembangan sistem informasi akademik yang kini digunakan oleh lebih dari 5.000 pengguna aktif."
                      : "Leading the development of an academic information system now used by more than 5,000 active users."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">
                    {t('language') === 'id' 
                      ? "Optimasi Performa Aplikasi"
                      : "Application Performance Optimization"
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('language') === 'id' 
                      ? "Meningkatkan performa aplikasi e-commerce dengan mengurangi waktu loading sebesar 40% dan meningkatkan konversi sebesar 15%."
                      : "Improving e-commerce application performance by reducing loading time by 40% and increasing conversion by 15%."
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">
                    {t('language') === 'id' 
                      ? "Integrasi AI dalam Aplikasi Kesehatan"
                      : "AI Integration in Health Applications"
                    }
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {t('language') === 'id' 
                      ? "Mengimplementasikan fitur diagnosis awal berbasis AI pada aplikasi MedFluffy dengan akurasi 85%."
                      : "Implementing AI-based early diagnosis features in the MedFluffy application with 85% accuracy."
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