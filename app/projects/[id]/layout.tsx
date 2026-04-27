import type { Metadata, ResolvingMetadata } from "next"
import projects, { getLocalizedData, type ProjectItem } from "@/data/projects"

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params
    const project = projects[resolvedParams.id as keyof typeof projects] as ProjectItem

    if (!project) {
        return { title: "Proyek Tidak Ditemukan" }
    }

    const previousImages = (await parent).openGraph?.images || []

    // Using English or Indonesian as fallback, getLocalizedData works here if we pass a default language
    const description = typeof project.subtitle === 'string' ? project.subtitle : (project.subtitle?.id || project.subtitle?.en || project.title)

    return {
        title: project.title,
        description: description,
        openGraph: {
            title: project.title,
            description: description,
            images: project.imageSrc ? [project.imageSrc, ...previousImages] : previousImages,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: description,
            images: project.imageSrc ? [project.imageSrc] : [],
        }
    }
}

export default function ProjectDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
