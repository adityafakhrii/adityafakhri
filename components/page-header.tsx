"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"
import { TranslationKey } from "@/lib/translations"

interface PageHeaderProps {
  title: string | TranslationKey
  description?: string | TranslationKey
  className?: string
  translate?: boolean
}

export function PageHeader({ title, description, className, translate = false }: PageHeaderProps) {
  const { t } = useLanguage()
  
  const displayTitle = translate && typeof title === 'string' ? t(title as TranslationKey) : title
  const displayDescription = translate && typeof description === 'string' ? t(description as TranslationKey) : description
  
  return (
    <div className={cn("space-y-2", className)}>
      <h1 className="text-3xl font-bold tracking-tight">{displayTitle}</h1>
      {displayDescription && <p className="text-lg text-muted-foreground">{displayDescription}</p>}
    </div>
  )
}