"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { TranslatedContent } from "@/components/translated-content"

export default function EducationPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('educationTitle')} description={t('educationDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock title={`🎓 ${t('formalEducation')}`}>
              <div className="space-y-8">
                {/* S1 */}
                <div className="relative pl-6 border-l-2 border-muted pb-8">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <h3 className="font-medium text-xl">
                    {t('language') === 'id' ? 'S1 Informatika' : 'Bachelor of Informatics'}
                  </h3>
                  <p className="text-muted-foreground">Universitas Widyatama • Sep 2020 - Jul 2024</p>
                  <div className="mt-4">
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li><b>IPK: 3.83 dari 4.0</b></li>
                      <li>
                        {t('language') === 'id' 
                          ? "Lulusan Terbaik Program Studi Teknik Informatika Angkatan 2020"
                          : "Best Graduate of Informatics Engineering Study Program Class of 2020"
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Lead komunitas Google Developer Student Club Universitas Widyatama"
                          : "Lead of Google Developer Student Club Widyatama University community"
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Ketua Seksi Informasi dan Komunikasi di Himpunan Mahasiswa Teknik Informatika"
                          : "Head of Information and Communication Section at Informatics Engineering Student Association"
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Lulusan terbaik program MSIB Bangkit Academy"
                          : "Best graduate of MSIB Bangkit Academy program"
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Penerima Hibah PHP2D dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI"
                          : "Recipient of PHP2D Grant from the Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia"
                        }
                      </li>
                    </ul>
                  </div>
                </div>

                {/* SMK */}
                <div className="relative pl-6 border-l-2 border-muted">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <h3 className="font-medium text-xl">SMKN 2 Sukabumi</h3>
                  <p className="text-muted-foreground">
                    {t('language') === 'id' ? 'Rekayasa Perangkat Lunak' : 'Software Engineering'} • 2017 - 2020
                  </p>
                  <div className="mt-4">
                    <p>
                      {t('language') === 'id' 
                        ? "Selama di SMKN 2 Sukabumi, saya aktif dalam berbagai organisasi, ekstrakurikuler, dan lomba, di antaranya:"
                        : "During my time at SMKN 2 Sukabumi, I was active in various organizations, extracurricular activities, and competitions, including:"
                      }
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                      <li>
                        {t('language') === 'id' 
                          ? "Ketua IT Club – Memimpin komunitas IT sekolah dan mengembangkan proyek teknologi."
                          : "Head of IT Club – Leading the school's IT community and developing technology projects."
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Anggota Lasphic – Berpartisipasi dalam ekstrakurikuler perfilman, belajar produksi video dan sinematografi."
                          : "Member of Lasphic – Participating in film extracurricular activities, learning video production and cinematography."
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Anggota Confidence – Kontributor sebagai penulis dan editor majalah sekolah."
                          : "Member of Confidence – Contributor as writer and editor of school magazine."
                        }
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Kepala Seksi 9 OSIS (Divisi TIK) – Bertanggung jawab atas pengembangan teknologi dan informasi di sekolah."
                          : "Head of Section 9 OSIS (ICT Division) – Responsible for technology and information development at school."
                        }
                      </li>
                    </ul>
                    <div className="mt-4">
                      <p className="font-medium">
                        {t('language') === 'id' ? 'Prestasi:' : 'Achievements:'}
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                        <li>
                          {t('language') === 'id' 
                            ? "Juara 1 LKS Web Design Tingkat Kota (Sukabumi, 2018)"
                            : "1st Place LKS Web Design City Level (Sukabumi, 2018)"
                          }
                        </li>
                        <li>
                          {t('language') === 'id' 
                            ? "Juara 2 LKS Web Technologies Tingkat Kota (Sukabumi, 2019)"
                            : "2nd Place LKS Web Technologies City Level (Sukabumi, 2019)"
                          }
                        </li>
                        <li>
                          {t('language') === 'id' 
                            ? "Top 10 Finalis Lomba Website Sekolah Anugerah Atikan Jabar Tingkat Provinsi (Jawa Barat)"
                            : "Top 10 Finalist School Website Competition Anugerah Atikan Jabar Provincial Level (West Java)"
                          }
                        </li>
                        <li>
                          {t('language') === 'id' 
                            ? "Peringkat 12 dari 27 LKS Web Design Tingkat Provinsi (Jawa Barat, 2018)"
                            : "Rank 12 out of 27 LKS Web Design Provincial Level (West Java, 2018)"
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title={`🧠 ${t('nonFormalEducation')}`}>
              <div className="space-y-8">
                {/* Bangkit Academy */}
                <div className="relative pl-6 border-l-2 border-muted pb-8">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <h3 className="font-medium text-xl flex items-center gap-2">
                    Bangkit Academy Mobile Development Cohort
                    <a
                      href="https://g.co/bangkit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline text-base font-normal"
                    >
                      g.co/bangkit
                    </a>
                  </h3>
                  <p className="text-muted-foreground">
                    {t('language') === 'id' 
                      ? "Diselenggarakan oleh Google, Tokopedia, Gojek, & Traveloka • Feb 2023 - Jul 2023"
                      : "Organized by Google, Tokopedia, Gojek, & Traveloka • Feb 2023 - Jul 2023"
                    }
                  </p>
                  <div className="mt-4 space-y-2">
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>
                        <a href="https://drive.google.com/file/d/1QLYbQFS1wIieZvIYmZ3pRZnq010T9rP0/view" target="_blank" rel="noopener noreferrer" className="underline text-primary">Final Transcript</a> &nbsp;|&nbsp;
                        <a href="https://drive.google.com/file/d/1b38KaGFUF-69RU5UfaMLo_MflwTxrNNd/view" target="_blank" rel="noopener noreferrer" className="underline text-primary">Distinction Graduate</a>
                      </li>
                      <li>
                        {t('language') === 'id' 
                          ? "Meraih predikat Top 10% lulusan terbaik dari 5.000+ peserta, menguasai pengembangan aplikasi Android menggunakan Kotlin dan best practice industri."
                          : "Achieved Top 10% best graduate predicate from 5,000+ participants, mastering Android application development using Kotlin and industry best practices."
                        }
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Other education entries with similar translation pattern */}
                {/* ... */}
              </div>
            </ContentBlock>

            <ContentBlock title={`🏆 ${t('certifications')}`}>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">AWS Certified Developer - Associate</h3>
                  <p className="text-sm text-muted-foreground">Amazon Web Services • 2022</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Cloud Computing</Badge>
                    <Badge variant="outline">AWS Services</Badge>
                    <Badge variant="outline">Serverless</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Professional Scrum Master I (PSM I)</h3>
                  <p className="text-sm text-muted-foreground">Scrum.org • 2021</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Agile</Badge>
                    <Badge variant="outline">Scrum</Badge>
                    <Badge variant="outline">Project Management</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Google Associate Android Developer</h3>
                  <p className="text-sm text-muted-foreground">Google • 2020</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">Android</Badge>
                    <Badge variant="outline">Kotlin</Badge>
                    <Badge variant="outline">Mobile Development</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">React Developer Certification</h3>
                  <p className="text-sm text-muted-foreground">Meta • 2019</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">Frontend</Badge>
                  </div>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title={`📚 ${t('continuousLearning')}`}>
              <p className="mb-4">
                {t('language') === 'id' 
                  ? "Saya percaya bahwa pembelajaran adalah proses seumur hidup. Berikut adalah beberapa platform dan sumber belajar yang saya gunakan untuk terus mengembangkan keterampilan:"
                  : "I believe that learning is a lifelong process. Here are some platforms and learning resources I use to continuously develop skills:"
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Kursus Online' : 'Online Courses'}
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>Udemy</li>
                    <li>Coursera</li>
                    <li>Pluralsight</li>
                    <li>Frontend Masters</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Komunitas & Forum' : 'Community & Forums'}
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>Stack Overflow</li>
                    <li>GitHub</li>
                    <li>Dev.to</li>
                    <li>Reddit r/webdev</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' ? 'Buku & Publikasi' : 'Books & Publications'}
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>O'Reilly Media</li>
                    <li>Manning Publications</li>
                    <li>Smashing Magazine</li>
                    <li>CSS-Tricks</li>
                  </ul>
                </div>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}