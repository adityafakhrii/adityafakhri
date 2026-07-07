"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
} from "@/components/ui/dialog"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink, Clock, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button"
import { TranslatedContent } from "@/components/translated-content"
import { pastEvents, upcomingEvents } from "@/data/events"
import { getLocalized } from "@/lib/utils"

const isCampusEvent = (event: typeof pastEvents[0]): boolean => {
    const campusKeywords = [
        'univ', 'university', 'universitas', 'himpunan', 'mahasiswa', 'student', 'students', 'gdsc', 'gdgoc', 'kampus', 
        'school', 'sekolah', 'upi', 'itb', 'ugm', 'unpak', 'uho', 'unpas', 
        'unpad', 'unsyiah', 'undip', 'unnes', 'uns', 'its', 'unair', 'ub', 
        'himatif', 'hmtf', 'hima', 'academic', 'college', 'politeknik', 'polban',
        'sangga buana', 'nurtanio', 'telekomunikasi', 'telkom', 'smkn', 'smk', 'sma', 'ambassador', 'widyatama', 'himakom', 'polines',
        'universitas indonesia'
    ];

    const textToSearch = [
        event.category,
        ...(event.tags || []),
        event.title.id,
        event.title.en,
        event.subtitle?.id || '',
        event.subtitle?.en || '',
        event.location,
        event.organizer?.id || '',
        event.organizer?.en || ''
    ].join(' ').toLowerCase();

    const words = textToSearch.split(/[^a-zA-Z0-9-]/);
    return campusKeywords.some(keyword => {
        if (keyword.includes(' ')) {
            return textToSearch.includes(keyword);
        }
        return words.includes(keyword);
    });
};

// Re-exporting to force refresh
export function SpeakingContent() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null)
    const [activeFilter, setActiveFilter] = useState<"all" | "company" | "campus">("all")

    const scrollToAllEvents = () => {
        const element = document.getElementById("all-events-section");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToEvent = (id: string) => {
        setActiveFilter("all");
        setTimeout(() => {
            const element = document.getElementById(`event-card-${id}`);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    };

    return (
        <>
            <TranslatedContent
                renderContent={({ t }) => (
                    <div className="container max-w-5xl py-8 px-4 md:px-8">
                        <PageHeader title={t('speakingTitle')} description={t('speakingDescription')} />

                        {/* Featured Events Section */}
                        <div className="mt-8 mb-12">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight">
                                        {t('featuredEvents')}
                                    </h2>
                                    <p className="text-muted-foreground mt-1 text-sm">
                                        {t('featuredEventsDesc')}
                                    </p>
                                </div>
                                <Button
                                    onClick={scrollToAllEvents}
                                    className="sm:self-end bg-foreground text-background hover:bg-foreground/90 text-sm font-semibold transition-all duration-300"
                                >
                                    {t('viewAllEvents')}
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(() => {
                                    const featuredIds = [
                                        "airena-belajar-unisba-2026",
                                        "build-with-ai-pustekinfo-dpr-2026",
                                        "workshop-pertamina-patra-niaga-2026"
                                    ];

                                    const featured = pastEvents
                                        .filter(event => featuredIds.includes(event.id))
                                        .sort((a, b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id));

                                    return featured.map((item) => (
                                        <Card 
                                            key={`featured-${item.id}`} 
                                            onClick={() => scrollToEvent(item.id)}
                                            className="overflow-hidden flex flex-col justify-between border border-amber-500/20 bg-gradient-to-b from-amber-500/5 to-transparent hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        >
                                            <div>
                                                <div className="relative h-44 w-full overflow-hidden bg-muted">
                                                    <Image
                                                        src={item.imageSrc}
                                                        alt={getLocalized(item.title, t('language'))}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        suppressHydrationWarning
                                                        className={`${item.imageClassName ?? "object-cover"} hover:scale-105 transition-transform duration-300 ease-in-out`}
                                                    />
                                                </div>
                                                <div className="p-5">
                                                    <div className="flex items-center gap-2 mb-2" suppressHydrationWarning>
                                                        <Badge className="bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-500/30 font-semibold dark:text-amber-400 text-xs">
                                                            Featured
                                                        </Badge>
                                                        <Badge variant="outline" className="text-xs">{item.category}</Badge>
                                                    </div>
                                                    <h3 className="font-semibold text-lg leading-snug">
                                                        {getLocalized(item.title, t('language'))}
                                                    </h3>
                                                    {item.subtitle && (
                                                        <h4 className="text-sm font-medium text-amber-600 dark:text-amber-400 mt-1">
                                                            {getLocalized(item.subtitle, t('language'))}
                                                        </h4>
                                                    )}
                                                    <div className="flex flex-col gap-1.5 mt-3 text-xs text-muted-foreground">
                                                        <div className="flex items-center">
                                                            <Calendar className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                                                            {item.date}
                                                        </div>
                                                        <div className="flex items-center">
                                                            <MapPin className="h-3.5 w-3.5 mr-1.5 shrink-0" />
                                                            <span>{item.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 pt-0 mt-auto">
                                                {item.links && item.links.length > 0 ? (
                                                    <div className="flex flex-col gap-2" suppressHydrationWarning>
                                                        {item.links.slice(0, 2).map((link) => (
                                                            <Link
                                                                key={link.href}
                                                                href={link.href}
                                                                target="_blank"
                                                                onClick={(e) => e.stopPropagation()}
                                                                className={buttonVariants({
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    className: "w-full justify-between text-xs whitespace-normal border-amber-500/20 hover:bg-amber-500/5",
                                                                })}
                                                            >
                                                                {t('language') === 'id' ? link.labelId : link.labelEn}
                                                                <ExternalLink className="h-3 w-3 shrink-0" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="text-xs text-muted-foreground italic text-center py-2 border border-dashed rounded-md bg-muted/50">
                                                        {t('language') === 'id' ? 'Dokumentasi internal' : 'Internal documentation'}
                                                    </div>
                                                )}
                                            </div>
                                        </Card>
                                    ));
                                })()}
                            </div>
                        </div>

                        <div id="all-events-section" className="mt-8 space-y-8 scroll-mt-20">
                            <ContentBlock title={t('upcomingEvents')}>
                                <p className="text-lg mb-4">
                                    {t('k_5d852ced')
                                    }
                                </p>
                                {upcomingEvents.length > 0 ? (
                                    <div className="space-y-6">
                                        {upcomingEvents.map((item) => (
                                            <Card key={item.id}>
                                                <CardContent className="p-0">
                                                    <div className="grid grid-cols-1 md:grid-cols-3">
                                                        <div className="relative h-48 md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                                                            <Image
                                                                src={item.imageSrc}
                                                                alt={getLocalized(item.title, t('language'))}
                                                                fill
                                                                sizes="100vw"
                                                                suppressHydrationWarning
                                                                priority={item.priority}
                                                                className={`${item.imageClassName ?? "object-contain"} cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                                                                onClick={() => setSelectedImage({
                                                                    src: item.imageSrc,
                                                                    alt: getLocalized(item.title, t('language'))
                                                                })}
                                                            />
                                                        </div>
                                                        <div className="md:col-span-2 p-6">
                                                            <div className="flex flex-wrap gap-2 mb-2" suppressHydrationWarning>
                                                                <Badge>{item.category}</Badge>
                                                                {item.tags.map((tag) => (
                                                                    <Badge key={tag} variant="outline">{tag}</Badge>
                                                                ))}
                                                            </div>
                                                            <h3 className="font-medium text-xl">
                                                                {getLocalized(item.title, t('language'))}
                                                            </h3>
                                                            {item.subtitle && (
                                                                <h4 className="text-lg text-muted-foreground">
                                                                    {getLocalized(item.subtitle, t('language'))}
                                                                </h4>
                                                            )}
                                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                                                                <div className="flex items-center">
                                                                    <Calendar className="h-4 w-4 mr-1" />
                                                                    {item.date}
                                                                </div>
                                                                {item.time && (
                                                                    <>
                                                                        <div className="hidden sm:block">•</div>
                                                                        <div className="flex items-center">
                                                                            <Clock className="h-4 w-4 mr-1" />
                                                                            {item.time}
                                                                        </div>
                                                                    </>
                                                                )}
                                                                <div className="hidden sm:block">•</div>
                                                                <div className="flex items-center">
                                                                    <MapPin className="h-4 w-4 mr-1" />
                                                                    {item.location}
                                                                </div>
                                                            </div>
                                                            {item.description && (
                                                                item.bullets ? (
                                                                    <div className="mt-4 text-sm">
                                                                        {getLocalized(item.description, t('language'))}
                                                                        <ul className="list-disc list-inside mt-1">
                                                                            {getLocalized(item.bullets, t('language')).map((b, i) => (
                                                                                <li key={i}>{b}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ) : (
                                                                    <p className="mt-4 text-sm">
                                                                        {getLocalized(item.description, t('language'))}
                                                                    </p>
                                                                )
                                                            )}
                                                            {item.links && item.links.length > 0 && (
                                                                <div className="mt-4">
                                                                    <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                                                                        {item.links.map((link) => (
                                                                            <Link
                                                                                key={link.href}
                                                                                href={link.href}
                                                                                target="_blank"
                                                                                className={buttonVariants({
                                                                                    variant: "outline",
                                                                                    size: "sm",
                                                                                    className: "w-full sm:w-auto whitespace-normal",
                                                                                })}
                                                                            >
                                                                                {t('language') === 'id' ? link.labelId : link.labelEn}
                                                                                <ExternalLink className="ml-2 h-3 w-3" />
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {item.organizer && (
                                                                <div className="mt-4 text-sm text-muted-foreground">
                                                                    {getLocalized(item.organizer, t('language'))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="border rounded-lg p-6 text-center text-muted-foreground">
                                        {t('k_bae21e5e')
                                        }
                                    </div>
                                )}
                            </ContentBlock>

                            <ContentBlock title={t('pastEvents')}>
                                <p className="text-lg mb-6">
                                    {t('k_57047ae1')}
                                </p>

                                {(() => {
                                    const filters = [
                                        { value: "all" as const, label: t('filterAll'), count: pastEvents.length },
                                        { value: "company" as const, label: t('filterCompany'), count: pastEvents.filter(e => !isCampusEvent(e)).length },
                                        { value: "campus" as const, label: t('filterCampus'), count: pastEvents.filter(e => isCampusEvent(e)).length },
                                    ];

                                    const filteredPastEvents = pastEvents.filter(event => {
                                        if (activeFilter === "all") return true;
                                        const isCampus = isCampusEvent(event);
                                        if (activeFilter === "campus") return isCampus;
                                        return !isCampus;
                                    });

                                    return (
                                        <>
                                            <div className="flex flex-wrap gap-2 mb-6" suppressHydrationWarning>
                                                {filters.map((filter) => {
                                                    const isActive = activeFilter === filter.value;
                                                    return (
                                                        <button
                                                            key={filter.value}
                                                            onClick={() => setActiveFilter(filter.value)}
                                                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                                                isActive
                                                                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                                                                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                                                            }`}
                                                        >
                                                            {filter.label}
                                                            <span className={`inline-flex items-center justify-center px-2 py-0.5 text-xs rounded-full ${
                                                                isActive
                                                                    ? "bg-primary-foreground/20 text-primary-foreground"
                                                                    : "bg-foreground/10 text-muted-foreground"
                                                            }`}>
                                                                {filter.count}
                                                            </span>
                                                        </button>
                                                    );
                                                })}
                                            </div>

                                            <div className="space-y-6">
                                                {filteredPastEvents.length > 0 ? (
                                                    filteredPastEvents.map((item) => (
                                                        <Card key={item.id} id={`event-card-${item.id}`} className="scroll-mt-24">
                                                            <CardContent className="p-0">
                                                                <div className="grid grid-cols-1 md:grid-cols-3">
                                                                    <div className="relative h-48 md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                                                                        <Image
                                                                            src={item.imageSrc}
                                                                            alt={getLocalized(item.title, t('language'))}
                                                                            fill
                                                                            sizes="100vw"
                                                                            suppressHydrationWarning
                                                                            priority={item.priority}
                                                                            className={`${item.imageClassName ?? "object-contain"} cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                                                                            onClick={() => setSelectedImage({
                                                                                src: item.imageSrc,
                                                                                alt: getLocalized(item.title, t('language'))
                                                                            })}
                                                                        />
                                                                    </div>
                                                                    <div className="md:col-span-2 p-6">
                                                                        <div className="flex flex-wrap gap-2 mb-2" suppressHydrationWarning>
                                                                            <Badge>{item.category}</Badge>
                                                                            {item.tags.map((tag) => (
                                                                                <Badge key={tag} variant="outline">{tag}</Badge>
                                                                            ))}
                                                                        </div>
                                                                        <h3 className="font-medium text-xl">
                                                                            {getLocalized(item.title, t('language'))}
                                                                        </h3>
                                                                        {item.subtitle && (
                                                                            <h4 className="text-lg text-muted-foreground">
                                                                                {getLocalized(item.subtitle, t('language'))}
                                                                            </h4>
                                                                        )}
                                                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                                                                            <div className="flex items-center">
                                                                                <Calendar className="h-4 w-4 mr-1" />
                                                                                {item.date}
                                                                            </div>
                                                                            {item.time && (
                                                                                <>
                                                                                    <div className="hidden sm:block">•</div>
                                                                                    <div className="flex items-center">
                                                                                        <Clock className="h-4 w-4 mr-1" />
                                                                                        {item.time}
                                                                                    </div>
                                                                                </>
                                                                            )}
                                                                            <div className="hidden sm:block">•</div>
                                                                            <div className="flex items-center">
                                                                                <MapPin className="h-4 w-4 mr-1" />
                                                                                {item.location}
                                                                            </div>
                                                                        </div>
                                                                        {item.description && (
                                                                            item.bullets ? (
                                                                                <div className="mt-4 text-sm">
                                                                                    {getLocalized(item.description, t('language'))}
                                                                                    <ul className="list-disc list-inside mt-1">
                                                                                        {getLocalized(item.bullets, t('language')).map((b, i) => (
                                                                                            <li key={i}>{b}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ) : (
                                                                                <p className="mt-4 text-sm">
                                                                                    {getLocalized(item.description, t('language'))}
                                                                                </p>
                                                                            )
                                                                        )}
                                                                        {item.links && item.links.length > 0 && (
                                                                            <div className="mt-4">
                                                                                <div className="flex flex-wrap gap-2" suppressHydrationWarning>
                                                                                    {item.links.map((link) => (
                                                                                        <Link
                                                                                            key={link.href}
                                                                                            href={link.href}
                                                                                            target="_blank"
                                                                                            className={buttonVariants({
                                                                                                variant: "outline",
                                                                                                size: "sm",
                                                                                                className: "w-full sm:w-auto whitespace-normal",
                                                                                            })}
                                                                                        >
                                                                                            {t('language') === 'id' ? link.labelId : link.labelEn}
                                                                                            <ExternalLink className="ml-2 h-3 w-3" />
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        )}
                                                                        {item.organizer && (
                                                                            <div className="mt-4 text-sm text-muted-foreground">
                                                                                {getLocalized(item.organizer, t('language'))}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))
                                                ) : (
                                                    <div className="border rounded-lg p-6 text-center text-muted-foreground">
                                                        {t('language') === 'id' ? 'Tidak ada event ditemukan' : 'No events found'}
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    );
                                })()}
                            </ContentBlock>

                            <ContentBlock title={t('topicsISpeak')}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 border rounded-lg">
                                        <h3 className="font-medium mb-2">
                                            {t('k_610a1a10')
                                            }
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li>Laravel Framework & Ecosystem</li>
                                            <li>React.js & Next.js Development</li>
                                            <li>Tailwind CSS & Bootstrap</li>
                                            <li>
                                                {t('k_415016bc')
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 border rounded-lg">
                                        <h3 className="font-medium mb-2">
                                            {t('k_2c42d2e9')
                                            }
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li>
                                                {t('k_d8d0f873')
                                                }
                                            </li>
                                            <li>
                                                {t('k_e7ef8019')
                                                }
                                            </li>
                                            <li>
                                                {t('k_14f78e66')
                                                }
                                            </li>
                                            <li>
                                                {t('k_75078a79')
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-4 border rounded-lg">
                                        <h3 className="font-medium mb-2">Android Development</h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li>Kotlin Android Development</li>
                                            <li>Android Architecture Patterns</li>
                                            <li>Kotlin Coroutines & Flow</li>
                                            <li>Android App Performance</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 border rounded-lg">
                                        <h3 className="font-medium mb-2">
                                            {t('k_86a90478')
                                            }
                                        </h3>
                                        <ul className="text-sm space-y-1 list-disc list-inside">
                                            <li>
                                                {t('k_b68a23a2')
                                                }
                                            </li>
                                            <li>
                                                {t('k_7a6743c6')
                                                }
                                            </li>
                                            <li>
                                                {t('k_bbf1f26a')
                                                }
                                            </li>
                                            <li>
                                                {t('k_c5e7bca9')
                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </ContentBlock>

                            <ContentBlock>
                                <div className="text-center">
                                    <h3 className="text-xl font-medium mb-4">
                                        {t('k_11483c36')
                                        }
                                    </h3>
                                    <p className="mb-6">
                                        {t('k_faeb6028')
                                        }
                                    </p>
                                    <Button asChild>
                                        <Link href="/contact">{t('contactMe')}</Link>
                                    </Button>
                                </div>
                            </ContentBlock>
                        </div>
                    </div>
                )}
            />

            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none shadow-none [&>button]:hidden">
                    <DialogHeader className="sr-only">
                        <DialogTitle>Image Preview</DialogTitle>
                        <DialogDescription>Enlarged view of the event image</DialogDescription>
                    </DialogHeader>
                    <div className="relative w-full h-[80vh] pointer-events-none">
                        <DialogClose className="absolute right-0 top-0 z-50 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white pointer-events-auto transition-colors focus-visible:outline-none focus-visible:ring-0">
                            <X className="h-6 w-6" />
                            <span className="sr-only">Close</span>
                        </DialogClose>
                        {selectedImage && (
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                fill
                                className="object-contain pointer-events-auto"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

