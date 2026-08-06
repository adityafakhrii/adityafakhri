import { useLanguage } from "@/contexts/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { getLocalizedData, TranslatableString } from "@/data/projects"

interface ProjectCardProps {
  title: string
  description: TranslatableString | string
  imageSrc: string
  tags: readonly string[]
  href: string
}

import { ArrowUpRight } from "lucide-react"

export function ProjectCard({ title, description, imageSrc, tags, href }: ProjectCardProps) {
  const { language } = useLanguage()

  return (
    <Link href={href} className="block group">
      <Card className="overflow-hidden border transition-all duration-300 hover:shadow-md hover:border-primary/40 group-hover:translate-y-[-2px]">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
              {title}
              <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-primary" />
            </h3>
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">{getLocalizedData(description, language)}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-normal text-xs bg-muted/80 group-hover:bg-muted transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
