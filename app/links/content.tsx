"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Card, CardContent } from "@/components/ui/card"
import {
    ExternalLink,
    BookOpen,
    Shirt,
    Monitor,
    Video,
    Sparkles,
    Layers,
    Info,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import { linkCategories, type LinkCategory, type LinkItem } from "@/data/links"
import { cn } from "@/lib/utils"

const categoryIconMap = {
    BookOpen,
    Shirt,
    Monitor,
    Video,
    Sparkles,
}

export function LinksContent() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all")

    const totalProductsCount = useMemo(() => {
        return linkCategories.reduce((acc, cat) => acc + cat.items.length, 0)
    }, [])

    const filteredCategories = useMemo(() => {
        if (selectedCategoryId === "all") {
            return linkCategories
        }
        return linkCategories.filter((cat) => cat.id === selectedCategoryId)
    }, [selectedCategoryId])

    return (
        <TranslatedContent
            renderContent={({ t }) => {
                const lang = (t('language') === 'en' ? 'en' : 'id') as 'id' | 'en'

                return (
                    <div className="container max-w-5xl py-8 px-4 md:px-8">
                        <PageHeader
                            title={t('linksPageTitle')}
                            description={t('linksPageDescription')}
                        />

                        {/* Category Filter Pills */}
                        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
                            <button
                                type="button"
                                onClick={() => setSelectedCategoryId("all")}
                                className={cn(
                                    "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 shrink-0",
                                    selectedCategoryId === "all"
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/60"
                                )}
                            >
                                <Layers className="h-4 w-4" />
                                <span>{t('linksPageAllCategories')}</span>
                                <span className={cn(
                                    "px-1.5 py-0.2 rounded-full text-[11px] font-semibold",
                                    selectedCategoryId === "all"
                                        ? "bg-primary-foreground/20 text-primary-foreground"
                                        : "bg-muted-foreground/15 text-muted-foreground"
                                )}>
                                    {totalProductsCount}
                                </span>
                            </button>

                            {linkCategories.map((cat) => {
                                const IconComponent = categoryIconMap[cat.icon] || Sparkles
                                const isSelected = selectedCategoryId === cat.id
                                const count = cat.items.length

                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => setSelectedCategoryId(cat.id)}
                                        className={cn(
                                            "inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 shrink-0",
                                            isSelected
                                                ? "bg-primary text-primary-foreground shadow-sm"
                                                : "bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/60"
                                        )}
                                    >
                                        <IconComponent className="h-4 w-4" />
                                        <span>{cat.name[lang]}</span>
                                        {count > 0 && (
                                            <span className={cn(
                                                "px-1.5 py-0.2 rounded-full text-[11px] font-semibold",
                                                isSelected
                                                    ? "bg-primary-foreground/20 text-primary-foreground"
                                                    : "bg-muted-foreground/15 text-muted-foreground"
                                            )}>
                                                {count}
                                            </span>
                                        )}
                                    </button>
                                )
                            })}
                        </div>

                        {/* Categories & Product List */}
                        <div className="mt-6 space-y-8">
                            {filteredCategories.map((category) => {
                                const IconComponent = categoryIconMap[category.icon] || Sparkles
                                const hasItems = category.items.length > 0

                                return (
                                    <ContentBlock key={category.id}>
                                        {/* Section Header */}
                                        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                                                    <IconComponent className="h-5 w-5" />
                                                </div>
                                                <div>
                                                    <h2 className="text-lg md:text-xl font-bold tracking-tight text-foreground">
                                                        {category.sectionTitle[lang]}
                                                    </h2>
                                                    <p className="text-xs md:text-sm text-muted-foreground mt-0.5">
                                                        {category.description[lang]}
                                                    </p>
                                                </div>
                                            </div>
                                            {hasItems && (
                                                <div className="hidden sm:block">
                                                    <span className="text-xs font-medium text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md border border-border/60">
                                                        {category.items.length} {t('linksPageTotalProducts')}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Products List or Empty State */}
                                        {hasItems ? (
                                            <div className="space-y-3 md:space-y-4">
                                                {category.items.map((item: LinkItem) => (
                                                    <Link
                                                        key={item.id}
                                                        href={item.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block group"
                                                    >
                                                        <Card className="overflow-hidden border border-border/70 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]">
                                                            <CardContent className="p-4 sm:p-5 flex items-center gap-4 sm:gap-5">
                                                                {/* Product Image */}
                                                                <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-lg overflow-hidden border border-border/60 bg-muted shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                                                                    <Image
                                                                        src={item.imageSrc}
                                                                        alt={item.title}
                                                                        fill
                                                                        sizes="(max-width: 640px) 64px, 80px"
                                                                        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                                                                    />
                                                                </div>

                                                                {/* Product Info */}
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                                                                            {item.categoryName[lang]}
                                                                        </span>
                                                                        {item.badge && (
                                                                            <span className="text-[11px] font-bold text-emerald-600 bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                                                                {item.badge[lang]}
                                                                            </span>
                                                                        )}
                                                                    </div>
                                                                    <h3 className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                                                                        {item.title}
                                                                    </h3>
                                                                    <p className="text-xs sm:text-sm text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                                                                        {item.description[lang]}
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
                                        ) : (
                                            <div className="py-8 px-4 text-center rounded-xl border border-dashed border-border/80 bg-muted/20 flex flex-col items-center justify-center">
                                                <div className="p-3 rounded-full bg-muted text-muted-foreground mb-3">
                                                    <IconComponent className="h-6 w-6 opacity-70" />
                                                </div>
                                                <h4 className="text-sm md:text-base font-semibold text-foreground">
                                                    {category.name[lang]} — {t('linksPageComingSoon')}
                                                </h4>
                                                <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-md">
                                                    {t('linksPageEmptyCategory')}
                                                </p>
                                            </div>
                                        )}
                                    </ContentBlock>
                                )
                            })}

                            {/* Affiliate Disclaimer & Footer */}
                            <div className="space-y-4 pt-2">
                                <div className="p-4 rounded-xl bg-muted/40 border border-border/60 flex items-start gap-3 text-xs text-muted-foreground">
                                    <Info className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                    <p className="leading-relaxed">
                                        {t('linksPageAffiliateNotice')}
                                    </p>
                                </div>

                                <p className="text-center text-xs md:text-sm text-muted-foreground">
                                    {t('linksPageMore')}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }}
        />
    )
}
