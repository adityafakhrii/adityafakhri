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
    <div className={cn("space-y-1.5 sm:space-y-2", className)}>
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground" suppressHydrationWarning>{displayTitle}</h1>
      {displayDescription && <p className="text-sm sm:text-base text-muted-foreground leading-relaxed" suppressHydrationWarning>{displayDescription}</p>}
    </div>
  )
}