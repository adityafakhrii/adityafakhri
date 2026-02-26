import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectData {
    id: number
    title: string
    description: string
    link?: string
    isAvailable: boolean
}

const projects: ProjectData[] = [
    {
        id: 1,
        title: "SahurYuk",
        description: "Aplikasi rekomendasi menu sahur dan berbuka puasa berbasis AI. Fiturnya bisa input budget, input, atau foto bahan makanan nanti AI bisa ngasih rekomendasi menunya.",
        link: "http://sahuryuk.lovable.app/",
        isAvailable: true
    },
    {
        id: 2,
        title: "Ramadhan Time",
        description: "Aplikasi jadwal imsakiyah dan countdown maghrib untuk Ramadhan. Dapatkan jadwal sholat real-time berdasarkan lokasi Anda.",
        link: "https://ramadhantime.lovable.app/",
        isAvailable: true
    },
    ...Array.from({ length: 28 }, (_, i) => ({
        id: i + 3,
        title: `Day ${i + 3}`,
        description: "Coming soon...",
        isAvailable: false
    }))
]

export function RamadhanProjects() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                project.isAvailable ? (
                    <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden border-border/50">
                        <div className="h-2 w-full bg-primary/20 group-hover:bg-primary transition-colors" />
                        <CardHeader className="flex-none">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                                    Day {project.id}
                                </span>
                            </div>
                            <CardTitle className="text-xl">{project.title}</CardTitle>
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-medium text-muted-foreground hover:text-primary underline underline-offset-4 mt-1"
                                >
                                    {project.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                                </Link>
                            )}
                        </CardHeader>
                        <CardContent className="flex-1">
                            <CardDescription className="text-base leading-relaxed text-muted-foreground">
                                {project.description}
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="pt-4 flex-none">
                            <Link
                                href={project.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                            >
                                Kunjungi Web <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </CardFooter>
                    </Card>
                ) : (
                    <Card key={project.id} className="flex flex-col h-full opacity-60 border-dashed border-border/60">
                        <CardHeader className="flex-none">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                                    Day {project.id}
                                </span>
                            </div>
                            <Skeleton className="h-6 w-24 mb-2" />
                        </CardHeader>
                        <CardContent className="flex-1 space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-4/5" />
                        </CardContent>
                        <CardFooter className="pt-4 flex-none">
                            <div className="w-full h-10 rounded-md bg-muted flex items-center justify-center items-center">
                                <span className="text-sm font-medium text-muted-foreground animate-pulse">Coming soon...</span>
                            </div>
                        </CardFooter>
                    </Card>
                )
            ))}
        </div>
    )
}
