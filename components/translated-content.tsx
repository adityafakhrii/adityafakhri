"use client"

import { useLanguage } from '@/contexts/language-context'
import { TranslationKey } from '@/lib/translations'

interface TranslatedContentProps {
  children: ({ t }: { t: (key: TranslationKey) => string }) => React.ReactNode
}

export function TranslatedContent({ children }: TranslatedContentProps) {
  const { t } = useLanguage()
  
  return <>{children({ t })}</>
}