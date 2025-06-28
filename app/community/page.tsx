"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Globe, Code } from "lucide-react"
import { TranslatedContent } from "@/components/translated-content"

export default function CommunityPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader
            title={t('communityTitle')}
            description={t('communityDescription')}
          />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <p className="text-lg mb-6">
                {t('language') === 'id' 
                  ? "Saya percaya bahwa berbagi pengetahuan dan berkontribusi pada komunitas adalah bagian penting dari perjalanan profesional. Berikut adalah beberapa komunitas dan kegiatan volunteering yang saya ikuti."
                  : "I believe that sharing knowledge and contributing to the community is an important part of the professional journey. Here are some communities and volunteering activities I participate in."
                }
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Front of House (FOH)</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Google Developer Groups (GDG) Bandung - Bandung, Indonesia<br />
                          {t('language') === 'id' ? 'Agustus 2023 - Sekarang' : 'August 2023 - Present'}
                        </p>
                        <p className="text-sm mt-2">
                          {t('language') === 'id' 
                            ? "GDG Bandung adalah komunitas pengembang Google di Bandung. Sebagai Front of House (FOH), saya mengatur presentasi, stage, dan sistem suara saat acara komunitas."
                            : "GDG Bandung is a Google developer community in Bandung. As Front of House (FOH), I manage presentations, stage, and sound systems during community events."
                          }
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">
                            {t('language') === 'id' ? 'Agustus 2023 - Sekarang' : 'August 2023 - Present'}
                          </Badge>
                          <Badge variant="outline">{t('community')}</Badge>
                          <Badge variant="outline">Event Organizer</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Lead</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Google Developer Student Clubs (GDSC) Widyatama University - Bandung, Indonesia<br />
                          {t('language') === 'id' ? 'Agustus 2023 - Juli 2024' : 'August 2023 - July 2024'}
                        </p>
                        <p className="text-sm mt-2">
                          {t('language') === 'id' 
                            ? "Google Developer Student Clubs (GDSC) adalah komunitas mahasiswa yang berfokus pada pengembangan keterampilan teknologi, kolaborasi, dan inovasi melalui berbagai pelatihan serta proyek. Sebagai Lead, saya memimpin tim, mengoordinasikan kegiatan, dan membimbing anggota dalam pengembangan proyek serta penguatan jejaring komunitas."
                            : "Google Developer Student Clubs (GDSC) is a student community focused on developing technology skills, collaboration, and innovation through various training and projects. As Lead, I lead the team, coordinate activities, and guide members in project development and community network strengthening."
                          }
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">
                            {t('language') === 'id' ? 'Agustus 2023 - Juli 2024' : 'August 2023 - July 2024'}
                          </Badge>
                          <Badge variant="outline">Leadership</Badge>
                          <Badge variant="outline">{t('mentoring')}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Public Relations</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Google Developer Student Clubs (GDSC) Indonesia<br />
                          {t('language') === 'id' ? 'November 2023 - Februari 2024' : 'November 2023 - February 2024'}
                        </p>
                        <p className="text-sm mt-2">
                          {t('language') === 'id' 
                            ? "Dalam peran ini, saya bertanggung jawab mengundang pakar industri sebagai pembicara dan mentor untuk acara hackathon \"HackFest 2024\". Selain itu, saya juga mengelola komunikasi dengan peserta melalui Instagram serta memberikan bantuan dan dukungan selama acara berlangsung."
                            : "In this role, I was responsible for inviting industry experts as speakers and mentors for the \"HackFest 2024\" hackathon event. Additionally, I also managed communication with participants through Instagram and provided assistance and support during the event."
                          }
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">
                            {t('language') === 'id' ? 'Nov 2023 - Feb 2024' : 'Nov 2023 - Feb 2024'}
                          </Badge>
                          <Badge variant="outline">Public Relations</Badge>
                          <Badge variant="outline">Event Support</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-2 rounded-md">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Section Leader</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {t('language') === 'id' 
                            ? 'Himpunan Mahasiswa Teknik Informatika Universitas Widyatama'
                            : 'Informatics Engineering Student Association Widyatama University'
                          }<br />
                          2022 - 2023
                        </p>
                        <p className="text-sm mt-2">
                          {t('language') === 'id' 
                            ? "Sebagai Section Leader, saya memimpin dan mengoordinasikan berbagai kegiatan kemahasiswaan di bidang informatika, seperti seminar, pelatihan, dan lomba teknologi. Saya juga aktif dalam membangun kolaborasi antar anggota serta mendorong pengembangan soft skill dan hard skill mahasiswa melalui program kerja yang inovatif dan inklusif."
                            : "As Section Leader, I led and coordinated various student activities in the field of informatics, such as seminars, training, and technology competitions. I was also active in building collaboration among members and encouraging the development of soft skills and hard skills of students through innovative and inclusive work programs."
                          }
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">2022 - 2023</Badge>
                          <Badge variant="outline">Leadership</Badge>
                          <Badge variant="outline">Organization</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}