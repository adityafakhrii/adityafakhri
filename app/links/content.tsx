"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import type { TranslationKey } from "@/lib/translations"

interface LinkItem {
    title: string
    descriptionKey: TranslationKey
    url: string
    imageSrc: string
    categoryKey: TranslationKey
    badge?: string
}

const bookLinks: LinkItem[] = [
    {
        title: "Panduan Coding Menggunakan AI untuk Pemula",
        descriptionKey: "linksPageCodingAIDesc",
        url: "https://s.shopee.co.id/60SCV1xFQi",
        imageSrc: "https://www.gambaryuk.com/1791434300126-3wwjoy.webp",
        categoryKey: "linksPageBook",
        badge: "Terbaru",
    },
    {
        title: "Buku Pengantar Sistem Informasi",
        descriptionKey: "linksPageBookSIDesc",
        url: "https://s.shopee.co.id/1gJDL2Aygv",
        imageSrc: "https://www.gambaryuk.com/1791434293352-ph4heq.webp",
        categoryKey: "linksPageBook",
    },
    {
        title: "Machine Learning",
        descriptionKey: "linksPageMLDesc",
        url: "https://s.shopee.co.id/W7Fwbchwe",
        imageSrc: "https://www.gambaryuk.com/1791434298995-gv2ir6.webp",
        categoryKey: "linksPageBook",
    },
]

export function LinksContent() {
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
                            {/* Section Header */}
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                                        {t('linksPageBooksSection')}
                                    </h2>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                        {t('language') === 'id' 
                                            ? 'Rekomendasi buku fisik pilihan untuk memperdalam ilmu teknologi & pemrograman' 
                                            : 'Curated physical book recommendations to master technology & programming'}
                                    </p>
                                </div>
                            </div>

                            {/* Books List */}
                            <div className="space-y-3 md:space-y-4">
                                {bookLinks.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group"
                                    >
                                        <Card className="overflow-hidden border border-border/70 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]">
                                            <CardContent className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
                                                {/* Book Cover Image */}
                                                <div className="relative w-16 h-22 sm:w-20 sm:h-28 rounded-lg overflow-hidden border border-border/60 bg-muted shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                                                    <Image
                                                        src={link.imageSrc}
                                                        alt={link.title}
                                                        fill
                                                        sizes="(max-width: 640px) 64px, 80px"
                                                        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                                    />
                                                </div>

                                                {/* Book Info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                                                            {t(link.categoryKey)}
                                                        </span>
                                                        {link.badge && (
                                                            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                                                {link.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                        {link.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                                                        {t(link.descriptionKey)}
                                                    </p>
                                                    <div className="mt-3 sm:hidden">
                                                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border/80 bg-muted/60 text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                                                            <span>{t('viewProduct')}</span>
                                                            <ExternalLink className="h-3 w-3" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Action Button on Tablet/Desktop */}
                                                <div className="hidden sm:flex flex-shrink-0 self-center">
                                                    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border/80 bg-background text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary text-xs font-semibold shadow-sm transition-all duration-300">
                                                        <span>{t('viewProduct')}</span>
                                                        <ExternalLink className="h-3.5 w-3.5" />
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>

                            <p className="text-center text-xs md:text-sm text-muted-foreground mt-6">
                                {t('linksPageMore')}
                            </p>
                        </ContentBlock>
                    </div>
                </div>
            )}
        />
    )
}
