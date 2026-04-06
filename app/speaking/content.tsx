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

// Re-exporting to force refresh
export function SpeakingContent() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null)

    return (
        <>
            <TranslatedContent
                renderContent={({ t }) => (
                    <div className="container max-w-5xl py-8 px-4 md:px-8">
                        <PageHeader title={t('speakingTitle')} description={t('speakingDescription')} />

                        <div className="mt-8 space-y-8">
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
                                                                alt={t('language') === 'id' ? item.title.id : item.title.en}
                                                                fill
                                                                sizes="100vw"
                                                                suppressHydrationWarning
                                                                priority={item.priority}
                                                                className={`${item.imageClassName ?? "object-contain"} cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                                                                onClick={() => setSelectedImage({
                                                                    src: item.imageSrc,
                                                                    alt: t('language') === 'id' ? item.title.id : item.title.en
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
                                                                {t('language') === 'id' ? item.title.id : item.title.en}
                                                            </h3>
                                                            {item.subtitle && (
                                                                <h4 className="text-lg text-muted-foreground">
                                                                    {t('language') === 'id' ? item.subtitle.id : item.subtitle.en}
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
                                                                        {t('language') === 'id' ? item.description.id : item.description.en}
                                                                        <ul className="list-disc list-inside mt-1">
                                                                            {(t('language') === 'id' ? item.bullets.id : item.bullets.en).map((b, i) => (
                                                                                <li key={i}>{b}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                ) : (
                                                                    <p className="mt-4 text-sm">
                                                                        {t('language') === 'id' ? item.description.id : item.description.en}
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
                                                                    {t('language') === 'id' ? item.organizer.id : item.organizer.en}
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
                                    {t('k_57047ae1')
                                    }
                                </p>

                                <div className="space-y-6">
                                    {pastEvents.map((item) => (
                                        <Card key={item.id}>
                                            <CardContent className="p-0">
                                                <div className="grid grid-cols-1 md:grid-cols-3">
                                                    <div className="relative h-48 md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                                                        <Image
                                                            src={item.imageSrc}
                                                            alt={t('language') === 'id' ? item.title.id : item.title.en}
                                                            fill
                                                            sizes="100vw"
                                                            suppressHydrationWarning
                                                            priority={item.priority}
                                                            className={`${item.imageClassName ?? "object-contain"} cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                                                            onClick={() => setSelectedImage({
                                                                src: item.imageSrc,
                                                                alt: t('language') === 'id' ? item.title.id : item.title.en
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
                                                            {t('language') === 'id' ? item.title.id : item.title.en}
                                                        </h3>
                                                        {item.subtitle && (
                                                            <h4 className="text-lg text-muted-foreground">
                                                                {t('language') === 'id' ? item.subtitle.id : item.subtitle.en}
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
                                                                    {t('language') === 'id' ? item.description.id : item.description.en}
                                                                    <ul className="list-disc list-inside mt-1">
                                                                        {(t('language') === 'id' ? item.bullets.id : item.bullets.en).map((b, i) => (
                                                                            <li key={i}>{b}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ) : (
                                                                <p className="mt-4 text-sm">
                                                                    {t('language') === 'id' ? item.description.id : item.description.en}
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
                                                                {t('language') === 'id' ? item.organizer.id : item.organizer.en}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
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
