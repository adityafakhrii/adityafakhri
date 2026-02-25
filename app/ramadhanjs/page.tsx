import { Metadata } from "next"
import { Moon, Star } from "lucide-react"
import { RamadhanProjects } from "@/components/ramadhan-projects"

export const metadata: Metadata = {
    title: "RamadhanJS 30 Days Projects",
    description: "30 Hari 30 Aplikasi JavaScript Spesial Ramadhan",
}

export default function RamadhanJSHome() {
    return (
        <div className="container max-w-6xl py-12 px-4 md:px-8">
            <div className="space-y-16">
                {/* Header Section */}
                <header className="text-center space-y-6 pt-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full border border-primary/20 mb-4">
                        <Moon className="w-6 h-6 text-primary mr-2" />
                        <span className="text-primary font-medium tracking-wide">30 Days Projects</span>
                        <Star className="w-6 h-6 text-primary ml-2" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold pb-2 tracking-tight">
                        RamadhanJS 2026
                    </h1>
                    <div className="space-y-4">
                        <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                            Membangun 30 aplikasi selama 30 hari di bulan Ramadhan.
                            Satu hari, satu aplikasi. Berkreasi dan belajar setiap hari.
                        </p>
                        <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
                            Follow Instagram <a href="https://www.instagram.com/adityafakhrii/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline underline-offset-4">@adityafakhrii</a> buat ikutin perjalanan gue bikin 30 aplikasi selama bulan ramadhan ini.
                        </p>
                    </div>
                </header>

                {/* Projects List Section */}
                <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                    <RamadhanProjects />
                </section>

                {/* Footer */}
                <footer className="text-center pt-12 pb-6 text-muted-foreground text-sm border-t mt-12">
                    <p>© 2025 Aditya Fakhri. Dibuat dengan sepenuh hati di bulan suci.</p>
                </footer>
            </div>
        </div>
    )
}
