"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { TranslatedContent } from "@/components/translated-content"

export function AboutContent() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('aboutTitle')} description={t('aboutDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock>
              <div className="space-y-4">
                <p className="text-lg">
                  {t('k_674103c8')
                  }
                </p>
                <p className="text-lg">
                  {t('k_6db9f60a')
                  }
                </p>
                <p className="text-lg">
                  {t('k_eef22c21')
                  }
                </p>
              </div>
            </ContentBlock>

            <ContentBlock title={t('philosophy')}>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('k_7cc167f6')}</li>
                <li>{t('k_49ed2a7d')}</li>
                <li>{t('k_752a7657')}</li>
                <li>{t('k_fd71c7f4')}</li>
                <li>{t('k_3efc22c1')}</li>
              </ul>
            </ContentBlock>

            <ContentBlock title={t('values')}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('k_32f28a2c')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_91626681')
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('k_571094bb')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_f194db98')
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('k_337e8f4a')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_b16013c6')
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('k_19bea5be')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_f76862de')
                    }
                  </p>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title={t('hobbies')}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('k_26fccddf')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_fd568ee5')
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">{t('k_918e180e')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_6e5fb417')
                    }
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Gaming</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('k_4abe016b')
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
