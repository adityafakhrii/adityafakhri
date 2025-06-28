"use client"

import { useLanguage } from '@/contexts/language-context'
import { TranslationKey } from '@/lib/translations'

interface TranslatedContentProps {
  renderContent: ({ t }: { t: (key: TranslationKey) => string }) => React.ReactNode
}

export function TranslatedContent({ renderContent }: TranslatedContentProps) {
  const { t } = useLanguage()
  
  return <>{renderContent({ t })}</>
}