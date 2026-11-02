"use client"

import { useState, useMemo } from "react"
import { PageHeader } from "@/components/page-header"
import {
    ExternalLink,
    BookOpen,
    Shirt,
    Monitor,
    Video,
    Sparkles,
    Layers,
    Info,
    Clock,
    Search,
    X,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import { linkCategories, type LinkItem } from "@/data/links"
import { cn } from "@/lib/utils"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const categoryIconMap = {
    BookOpen,
    Shirt,
    Monitor,
    Video,
    Sparkles,
}

export function LinksContent() {
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all")
    const [searchQuery, setSearchQuery] = useState<string>("")

    const totalProductsCount = useMemo(() => {
        return linkCategories.reduce((acc, cat) => acc + cat.items.length, 0)
    }, [])

    // Newest added products always appear at the top in "Semua"
    const allProducts = useMemo(() => {
        const items = linkCategories.flatMap((cat) => cat.items)
        return [...items].sort((a, b) => {
            const timeA = new Date(a.createdAt).getTime()
            const timeB = new Date(b.createdAt).getTime()
            return timeB - timeA
        })
    }, [])

    const currentCategory = useMemo(() => {
        if (selectedCategoryId === "all") return null
        return linkCategories.find((cat) => cat.id === selectedCategoryId) || null
    }, [selectedCategoryId])

    const categoryFilteredProducts = useMemo(() => {
        if (selectedCategoryId === "all") {
            return allProducts
        }
        const items = currentCategory ? currentCategory.items : []
        return [...items].sort((a, b) => {
            const timeA = new Date(a.createdAt).getTime()
            const timeB = new Date(b.createdAt).getTime()
            return timeB - timeA
        })
    }, [selectedCategoryId, allProducts, currentCategory])

    return (
        <TranslatedContent
            renderContent={({ t }) => {
                const lang = (t('language') === 'en' ? 'en' : 'id') as 'id' | 'en'
                const CurrentCategoryIcon = currentCategory ? (categoryIconMap[currentCategory.icon] || Sparkles) : null

                // Instant real-time filtering even from the first character
                const q = searchQuery.toLowerCase().trim()
                const displayedProducts = q
                    ? categoryFilteredProducts.filter((item) => {
                        const titleMatch = item.title.toLowerCase().includes(q)
                        const descMatch = (item.description[lang] || "").toLowerCase().includes(q)
                        const catMatch = (item.categoryName[lang] || "").toLowerCase().includes(q)
                        const badgeMatch = (item.badge?.[lang] || "").toLowerCase().includes(q)
                        return titleMatch || descMatch || catMatch || badgeMatch
                    })
                    : categoryFilteredProducts

                return (
                    <div className="container max-w-5xl py-8 px-4 md:px-8" suppressHydrationWarning>
                        <PageHeader
                            title={t('linksPageTitle')}
                            description={t('linksPageDescription')}
                        />

                        {/* MOBILE ONLY: Single-line Search Bar + Category Dropdown (Clean, zero clutter) */}
                        <div className="mt-6 flex sm:hidden items-center gap-2" suppressHydrationWarning>
                            {/* Search input with live filter */}
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('linksPageSearchPlaceholder')}
                                    suppressHydrationWarning
                                    className="w-full h-10 pl-9 pr-8 rounded-xl bg-muted/40 border border-border/70 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery("")}
                                        aria-label="Clear search"
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                )}
                            </div>

                            {/* Dropdown Kategori on Mobile */}
                            <div className="shrink-0">
                                <Select value={selectedCategoryId} onValueChange={setSelectedCategoryId}>
                                    <SelectTrigger className="w-[125px] h-10 px-3 rounded-xl bg-muted/40 border-border/70 text-xs font-medium">
                                        <SelectValue placeholder={t('linksPageAllCategories')} />
                                    </SelectTrigger>
                                    <SelectContent align="end" className="rounded-xl">
                                        <SelectItem value="all">
                                            {t('linksPageAllCategories')} ({totalProductsCount})
                                        </SelectItem>
                                        {linkCategories.map((cat) => (
                                            <SelectItem key={cat.id} value={cat.id}>
                                                {cat.name[lang]} {cat.items.length > 0 ? `(${cat.items.length})` : ''}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* DESKTOP ONLY: Category Pills + Search Bar on the Right */}
                        <div className="mt-8 hidden sm:flex items-center justify-between gap-4" suppressHydrationWarning>
                            {/* Category Filter Pills */}
                            <div className="flex flex-wrap items-center gap-2 flex-1">
                                <button
                                    type="button"
                                    onClick={() => setSelectedCategoryId("all")}
                                    className={cn(
                                        "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0",
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
                                    )} suppressHydrationWarning>
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
                                                "inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 shrink-0",
                                                isSelected
                                                    ? "bg-primary text-primary-foreground shadow-sm"
                                                    : "bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/60"
                                            )}
                                        >
                                            <IconComponent className="h-4 w-4" />
                                            <span suppressHydrationWarning>{cat.name[lang]}</span>
                                            {count > 0 && (
                                                <span className={cn(
                                                    "px-1.5 py-0.2 rounded-full text-[11px] font-semibold",
                                                    isSelected
                                                        ? "bg-primary-foreground/20 text-primary-foreground"
                                                        : "bg-muted-foreground/15 text-muted-foreground"
                                                )} suppressHydrationWarning>
                                                    {count}
                                                </span>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Search bar on Desktop */}
                            <div className="relative w-64 shrink-0">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder={t('linksPageSearchPlaceholder')}
                                    suppressHydrationWarning
                                    className="w-full h-10 pl-9 pr-8 rounded-xl bg-muted/40 border border-border/70 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                                />
                                {searchQuery && (
                                    <button
                                        type="button"
                                        onClick={() => setSearchQuery("")}
                                        aria-label="Clear search"
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Context Header for Selected Category */}
                        {currentCategory && (
                            <div className="mt-6 p-4 rounded-xl bg-muted/40 border border-border/60 flex items-center justify-between gap-3 animate-in fade-in duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                                        {CurrentCategoryIcon && <CurrentCategoryIcon className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                                            {currentCategory.sectionTitle[lang]}
                                        </h2>
                                        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                                            {currentCategory.description[lang]}
                                        </p>
                                    </div>
                                </div>
                                {currentCategory.items.length > 0 && (
                                    <span className="hidden sm:inline-flex text-xs font-semibold px-2.5 py-1 rounded-md bg-background border border-border/60 text-muted-foreground">
                                        {currentCategory.items.length} {t('linksPageTotalProducts')}
                                    </span>
                                )}
                            </div>
                        )}

                        {/* Product Grid (2-column on mobile, 3-4 column on desktop) */}
                        <div className="mt-6">
                            {displayedProducts.length > 0 ? (
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                                    {displayedProducts.map((item: LinkItem) => (
                                        <Link
                                            key={item.id}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex flex-col h-full rounded-2xl border border-border/70 bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
                                        >
                                            {/* Product Image */}
                                            <div className="relative aspect-square w-full bg-muted/40 overflow-hidden border-b border-border/50">
                                                <Image
                                                    src={item.imageSrc}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                />
                                                
                                                {/* Floating Category Badge */}
                                                <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
                                                    <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md bg-background/85 text-foreground backdrop-blur-md border border-border/60 shadow-xs">
                                                        {item.categoryName[lang]}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Product Details */}
                                            <div className="p-3 sm:p-4 flex flex-col flex-1">
                                                <h3 className="font-semibold text-xs sm:text-sm text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h3>

                                                <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-2 mt-1 sm:mt-1.5 leading-relaxed">
                                                    {item.description[lang]}
                                                </p>

                                                {/* Action Button */}
                                                <div className="mt-auto pt-3">
                                                    <div className="inline-flex w-full items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2.5 rounded-xl text-xs font-semibold bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-200">
                                                        <span>{t('viewProduct')}</span>
                                                        <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : searchQuery ? (
                                /* Empty State when Search has no matches */
                                <div className="py-12 px-4 text-center rounded-2xl border border-dashed border-border/80 bg-muted/20 flex flex-col items-center justify-center">
                                    <div className="p-3.5 rounded-full bg-muted text-muted-foreground mb-3">
                                        <Search className="h-6 w-6 opacity-70" />
                                    </div>
                                    <h4 className="text-sm md:text-base font-semibold text-foreground">
                                        {t('linksPageSearchNoResults')} "{searchQuery}"
                                    </h4>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-md">
                                        {lang === 'en'
                                            ? "Try checking for typos or searching with different keywords."
                                            : "Coba periksa kata kunci atau reset pencarian untuk melihat semua produk."}
                                    </p>
                                    <div className="flex items-center gap-2 mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setSearchQuery("")}
                                            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xs"
                                        >
                                            {t('linksPageSearchReset')}
                                        </button>
                                        {selectedCategoryId !== "all" && (
                                            <button
                                                type="button"
                                                onClick={() => setSelectedCategoryId("all")}
                                                className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-muted text-foreground hover:bg-muted/80 border border-border/60 transition-all"
                                            >
                                                {lang === 'en' ? "Search in All Categories" : "Cari di Semua Kategori"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                /* Empty State when category has no items yet */
                                <div className="py-12 px-4 text-center rounded-2xl border border-dashed border-border/80 bg-muted/20 flex flex-col items-center justify-center">
                                    <div className="p-3.5 rounded-full bg-muted text-muted-foreground mb-3">
                                        <Clock className="h-6 w-6 opacity-70" />
                                    </div>
                                    <h4 className="text-sm md:text-base font-semibold text-foreground">
                                        {currentCategory ? currentCategory.name[lang] : ""} — {t('linksPageComingSoon')}
                                    </h4>
                                    <p className="text-xs md:text-sm text-muted-foreground mt-1 max-w-md">
                                        {t('linksPageEmptyCategory')}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Affiliate Disclaimer & Footer Note */}
                        <div className="mt-10 space-y-4 pt-4 border-t border-border/50">
                            <div className="p-3.5 sm:p-4 rounded-xl bg-muted/30 border border-border/50 flex items-start gap-3 text-xs text-muted-foreground">
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
                )
            }}
        />
    )
}
