"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, BookOpen, Cpu } from "lucide-react"
import Link from "next/link"
import { TranslatedContent } from "@/components/translated-content"
import type { TranslationKey } from "@/lib/translations"

interface LinkItem {
    title: string
    descriptionKey: TranslationKey
    url: string
    icon: React.ComponentType<{ className?: string }>
    categoryKey: TranslationKey
}

const links: LinkItem[] = [
    {
        title: "Buku Pengantar Sistem Informasi",
        descriptionKey: "linksPageBookSIDesc",
        url: "https://s.shopee.co.id/10xiK1U2WR",
        icon: BookOpen,
        categoryKey: "linksPageBook",
    },
    {
        title: "Machine Learning",
        descriptionKey: "linksPageMLDesc",
        url: "https://s.shopee.co.id/50Tr5OW912",
        icon: Cpu,
        categoryKey: "linksPageBook",
    },
]

export default function LinksPage() {
    return (
        <TranslatedContent
            renderContent={({ t }) => (
                <div className="container max-w-5xl py-8 px-4 md:px-8">
                    <PageHeader
                        title={t('linksPageTitle')}
                        description={t('linksPageDescription')}
                    />

                    <div className="mt-8 space-y-8">
                        <ContentBlock>
                            <div className="space-y-3 md:space-y-4">
                                {links.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group"
                                    >
                                        <Card className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]">
                                            <CardContent className="p-4 md:p-5 flex items-start gap-3 md:gap-4">
                                                <div className="flex-shrink-0 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 mt-0.5">
                                                    <link.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                                                            {t(link.categoryKey)}
                                                        </span>
                                                    </div>
                                                    <h3 className="font-semibold text-sm md:text-base break-words">{link.title}</h3>
                                                    <p className="text-xs md:text-sm text-muted-foreground break-words mt-0.5">{t(link.descriptionKey)}</p>
                                                </div>
                                                <ExternalLink className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0 mt-1" />
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>

                            <p className="text-center text-xs md:text-sm text-muted-foreground mt-4">
                                {t('linksPageMore')}
                            </p>
                        </ContentBlock>
                    </div>
                </div>
            )}
        />
    )
}
