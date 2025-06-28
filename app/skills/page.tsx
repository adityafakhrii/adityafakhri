"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TranslatedContent } from "@/components/translated-content"

export default function SkillsPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('skills')} description={t('language') === 'id' ? "Hard skills dan soft skills yang saya kuasai" : "Hard skills and soft skills I master"} />

          <div className="mt-8 space-y-12">
            <ContentBlock title={`💻 ${t('language') === 'id' ? 'Hard Skills' : 'Hard Skills'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">{t('frontendDev')}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { name: "React" },
                        { name: "Next.js" },
                        { name: "TypeScript" },
                        { name: "Bootstrap" },
                        { name: "Tailwind CSS" },
                        { name: "HTML/CSS" },
                      ].map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-3 border rounded-lg">
                          <div className="h-12 w-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-code-xml-icon lucide-code-xml"
                            >
                              <path d="m18 16 4-4-4-4" />
                              <path d="m6 8-4 4 4 4" />
                              <path d="m14.5 4-5 16" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">{t('backendDev')}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: "PHP" },
                      { name: "Laravel" },
                      { name: "RESTful APIs" },
                      { name: "Node.js" },
                      { name: "JavaScript" },
                      { name: "Python" },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center p-3 border rounded-lg">
                        <div className="h-12 w-12 flex items-center justify-center mb-2">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-braces-icon lucide-braces"
                            >
                            <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/>
                            <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">{t('mobileDev')}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { name: "Kotlin" },
                        { name: "Jetpack Compose" },
                        { name: "Material Design" },
                        { name: "Android Studio" },
                        { name: "Flutter" },
                        { name: "Mobile UI/UX" },
                      ].map((skill) => (
                        <div key={skill.name} className="flex flex-col items-center p-3 border rounded-lg">
                          <div className="h-12 w-12 flex items-center justify-center mb-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-tablet-smartphone"
                            >
                              <rect width="10" height="14" x="3" y="8" rx="2" />
                              <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                              <path d="M8 18h.01" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">{t('uiuxDesign')}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                      { name: "Figma" },
                      { name: "Responsive Design" },
                      { name: "Wireframing" },
                      { name: "Prototyping" },
                      { name: "Design Thinking" },
                      { name: "User Research" },
                      ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center p-3 border rounded-lg">
                        <div className="h-12 w-12 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-palette-icon lucide-palette"
                        >
                          <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/>
                          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
                          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
                          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
                          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
                        </svg>
                        </div>
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-4">{t('databaseCloud')}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                      "PostgreSQL",
                      "MySQL",
                      "Firebase",
                      "Google Cloud",
                      "Vercel",
                      "Netlify",
                      ].map((skill) => (
                      <div key={skill} className="flex flex-col items-center p-3 border rounded-lg">
                        <div className="h-12 w-12 flex items-center justify-center mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-database-icon lucide-database"
                        >
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                          <path d="M3 12A9 3 0 0 0 21 12" />
                        </svg>
                        </div>
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                  <h3 className="font-medium text-lg mb-4">{t('aiMl')}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: "TensorFlow" },
                      { name: "Python" },
                      { name: "CNN" },
                    ].map((skill) => (
                      <div key={skill.name} className="flex flex-col items-center p-3 border rounded-lg">
                        <div className="h-12 w-12 flex items-center justify-center mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-brain-circuit-icon lucide-brain-circuit"
                          >
                            <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                            <path d="M9 13a4.5 4.5 0 0 0 3-4"/>
                            <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                            <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                            <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                            <path d="M12 13h4"/>
                            <path d="M12 18h6a2 2 0 0 1 2 2v1"/>
                            <path d="M12 8h8"/>
                            <path d="M16 8V5a2 2 0 0 1 2-2"/>
                            <circle cx="16" cy="13" r=".5"/>
                            <circle cx="18" cy="3" r=".5"/>
                            <circle cx="20" cy="21" r=".5"/>
                            <circle cx="20" cy="8" r=".5"/>
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-center">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>

            <ContentBlock title={`🔧 ${t('language') === 'id' ? 'Tools & Technologies Lainnya' : 'Other Tools & Technologies'}`}>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "GitHub",
                  "Co-Pilot",
                  "VS Code",
                  "Android Studio",
                  "Google Colab",
                  "Laragon",
                  "NPM",
                  "Postman",
                  "Docker",
                  "Vite",
                  "ESLint",
                  "Prettier",
                  "Notion",
                  "Bolt.new",
                  "v0",
                  "ChatGPT",
                  "Claude",
                  "Gemini",
                ].map((tool) => (
                  <Badge key={tool} variant="secondary">
                    {tool}
                  </Badge>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title={`🤝 ${t('language') === 'id' ? 'Soft Skills' : 'Soft Skills'}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">{t('language') === 'id' ? 'Komunikasi & Kepemimpinan' : 'Communication & Leadership'}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-2">🎤</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Public Speaking' : 'Public Speaking'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id' 
                              ? "Presentasi teknis, webinar, dan workshop untuk berbagai audiens"
                              : "Technical presentations, webinars, and workshops for various audiences"
                            }
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">👨‍🏫</span>
                        <div>
                          <p className="font-medium">{t('mentoring')}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id'
                              ? "Membimbing developer junior dan berbagi pengetahuan teknis"
                              : "Mentoring junior developers and sharing technical knowledge"
                            }
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">👥</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Kepemimpinan Tim' : 'Team Leadership'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id'
                              ? "Mengelola tim developer dengan metodologi Agile/Scrum"
                              : "Managing developer teams with Agile/Scrum methodology"
                            }
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📝</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Penulisan Teknis' : 'Technical Writing'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id' 
                              ? "Dokumentasi, artikel teknis, dan tutorial"
                              : "Documentation, technical articles, and tutorials"
                            }
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-4">{t('language') === 'id' ? 'Pemecahan Masalah & Adaptabilitas' : 'Problem Solving & Adaptability'}</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="mr-2">🧩</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Pemecahan Masalah' : 'Problem Solving'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id'
                              ? "Analisis masalah kompleks dan pengembangan solusi efektif"
                              : "Complex problem analysis and effective solution development"
                            }
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔄</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Adaptabilitas' : 'Adaptability'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id'
                              ? "Cepat beradaptasi dengan teknologi dan kebutuhan baru"
                              : "Quick adaptation to new technologies and requirements"
                            }
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">⏱️</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Manajemen Waktu' : 'Time Management'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id' 
                              ? "Prioritas tugas dan manajemen waktu yang efektif"
                              : "Task prioritization and effective time management"
                            }
                          </p>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔍</span>
                        <div>
                          <p className="font-medium">{t('language') === 'id' ? 'Perhatian pada Detail' : 'Attention to Detail'}</p>
                          <p className="text-sm text-muted-foreground">
                            {t('language') === 'id'
                              ? "Fokus pada kualitas dan detail dalam pengembangan"
                              : "Focus on quality and detail in development"
                            }
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>

            <ContentBlock title={`🌐 ${t('languages')}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">Bahasa Indonesia</h3>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">English</h3>
                  <p className="text-sm text-muted-foreground">Professional Proficiency</p>
                </div>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}