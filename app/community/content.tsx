"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Globe, Code } from "lucide-react"
import { TranslatedContent } from "@/components/translated-content"

export function CommunityContent() {
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
                {t('k_6c52da86')
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
                          {t('k_022eeed6')}
                        </p>
                        <p className="text-sm mt-2">
                          {t('k_e9707bb3')
                          }
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">
                            {t('k_022eeed6')}
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
                          {t('k_0f90c578')}
                        </p>
                        <p className="text-sm mt-2">
                          {t('k_0c92c4ff')
                          }
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">
                            {t('k_0f90c578')}
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
                          {t('k_f8ae3556')}
                        </p>
                        <p className="text-sm mt-2">
                          {t('k_8b235069')}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="outline">
                            {t('k_aea269a9')}
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
                          {t('k_cdbffbdc')
                          }<br />
                          2022 - 2023
                        </p>
                        <p className="text-sm mt-2">
                          {t('k_9be8b755')
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