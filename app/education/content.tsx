"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { TranslatedContent } from "@/components/translated-content"

export function EducationContent() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('educationTitle')} description={t('educationDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock title={t('formalEducation')}>
              <div className="space-y-8">
                {/* S1 */}
                <div className="relative pl-6 border-l-2 border-muted pb-8">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <h3 className="font-medium text-xl">
                    {t('k_db719f58')}
                  </h3>
                  <p className="text-muted-foreground">Universitas Widyatama • Sep 2020 - Jul 2024</p>
                  <div className="mt-4">
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li><b>IPK: 3.83 dari 4.0</b></li>
                      <li>
                        {t('k_e94841f4')
                        }
                      </li>
                      <li>
                        {t('k_bd32dc5f')
                        }
                      </li>
                      <li>
                        {t('k_f97d27ca')
                        }
                      </li>
                      <li>
                        {t('k_86e21763')
                        }
                      </li>
                      <li>
                        {t('k_4350605a')
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
                    {t('k_607c0574')} • 2017 - 2020
                  </p>
                  <div className="mt-4">
                    <p>
                      {t('k_5a86e2d3')
                      }
                    </p>
                    <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                      <li>
                        {t('k_3206b6cf')
                        }
                      </li>
                      <li>
                        {t('k_9828b003')
                        }
                      </li>
                      <li>
                        {t('k_0b0b48c1')
                        }
                      </li>
                      <li>
                        {t('k_8c66a503')
                        }
                      </li>
                    </ul>
                    <div className="mt-4">
                      <p className="font-medium">
                        {t('k_c46e944b')}
                      </p>
                      <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                        <li>
                          {t('k_dee523da')
                          }
                        </li>
                        <li>
                          {t('k_ee05955a')
                          }
                        </li>
                        <li>
                          {t('k_d73bcc0f')
                          }
                        </li>
                        <li>
                          {t('k_a9b8d0b1')
                          }
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title={t('nonFormalEducation')}>
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
                    {t('k_31988f37')
                    }
                  </p>
                  <div className="mt-4 space-y-2">
                    <ul className="list-disc list-inside space-y-1 pl-4">
                      <li>
                        <a href="https://drive.google.com/file/d/1QLYbQFS1wIieZvIYmZ3pRZnq010T9rP0/view" target="_blank" rel="noopener noreferrer" className="underline text-primary">Final Transcript</a> &nbsp;|&nbsp;
                        <a href="https://drive.google.com/file/d/1b38KaGFUF-69RU5UfaMLo_MflwTxrNNd/view" target="_blank" rel="noopener noreferrer" className="underline text-primary">Distinction Graduate</a>
                      </li>
                      <li>
                        {t('k_c10ef813')
                        }
                      </li>
                    </ul>
                  </div>
                </div>
                
                {/* Other education entries with similar translation pattern */}
                {/* ... */}
              </div>
            </ContentBlock>

            <ContentBlock title={t('certifications')}>
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

            <ContentBlock title={t('continuousLearning')}>
              <p className="mb-4">
                {t('k_ea9a444b')
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('k_beb72d10')}
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
                    {t('k_355b536d')}
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
                    {t('k_4c67d354')}
                  </h3>
                  <ul className="text-sm space-y-1">
                    <li>O&apos;Reilly Media</li>
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