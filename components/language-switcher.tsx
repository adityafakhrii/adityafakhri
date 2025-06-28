"use client"

import { useLanguage } from '@/contexts/language-context'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 border rounded-md p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('id')}
        className={cn(
          "text-xs px-2 py-1 h-7",
          language === 'id' 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted"
        )}
      >
        ID
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={cn(
          "text-xs px-2 py-1 h-7",
          language === 'en' 
            ? "bg-primary text-primary-foreground" 
            : "hover:bg-muted"
        )}
      >
        EN
      </Button>
    </div>
  )
}