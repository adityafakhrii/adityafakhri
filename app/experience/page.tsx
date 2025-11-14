"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { TranslatedContent } from "@/components/translated-content"
import { experiences, achievements } from "@/data/experience"

export default function ExperiencePage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('experienceTitle')} description={t('experienceDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-muted pb-8">
                    <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                    <h3 className="font-medium text-xl">
                      {t('language') === 'id' ? exp.role.id : exp.role.en}
                    </h3>
                    <p className="text-muted-foreground">
                      {exp.company} • {t('language') === 'id' ? exp.dateRange.id : exp.dateRange.en} • {exp.location}
                    </p>
                    <div className="mt-4 space-y-2">
                      <ul className="list-disc list-inside space-y-1 pl-4">
                        {(t('language') === 'id' ? exp.bullets.id : exp.bullets.en).map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                      {exp.tags && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ContentBlock>

            <ContentBlock title={t('achievements')}>
              <div className="space-y-4">
                {achievements.map((ach, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <h3 className="font-medium">
                      {t('language') === 'id' ? ach.id : ach.en}
                    </h3>
                  </div>
                ))}
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}