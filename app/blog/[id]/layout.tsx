import type { Metadata, ResolvingMetadata } from "next"
import blogs from "@/data/blog"

export async function generateMetadata(
    { params }: { params: Promise<{ id: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params
    const normalize = (s: string) => decodeURIComponent(s).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-")
    const normId = normalize(resolvedParams.id)
    const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
    const id = entry ? entry[0] : resolvedParams.id
    const post = blogs[id as keyof typeof blogs] as any

    if (!post) {
        return { title: "Artikel Tidak Ditemukan" }
    }

    const previousImages = (await parent).openGraph?.images || []

    return {
        title: post.title,
        description: post.excerpt || post.title,
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            images: post.imageSrc ? [post.imageSrc, ...previousImages] : previousImages,
            type: "article",
            publishedTime: post.date,
            authors: [post.author || "Aditya Fakhri Riansyah"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || post.title,
            images: post.imageSrc ? [post.imageSrc] : [],
        }
    }
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
