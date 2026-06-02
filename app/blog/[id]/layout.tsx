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
    
    // Resolve absolute image URL
    const getImageUrl = (src?: string) => {
        if (!src) return undefined
        if (src.startsWith('http')) return src
        return `https://adityafakhri.com${src.startsWith('/') ? '' : '/'}${src}`
    }
    const resolvedImage = getImageUrl(post.imageSrc)
    const imagesList = resolvedImage ? [resolvedImage] : previousImages

    return {
        title: post.title,
        description: post.excerpt || post.title,
        keywords: post.tags || [],
        alternates: {
            canonical: `https://adityafakhri.com/blog/${id}`,
        },
        robots: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt || post.title,
            url: `https://adityafakhri.com/blog/${id}`,
            images: imagesList,
            type: "article",
            publishedTime: post.isoDate ? new Date(post.isoDate).toISOString() : undefined,
            authors: [post.author || "Aditya Fakhri Riansyah"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt || post.title,
            images: resolvedImage ? [resolvedImage] : [],
        }
    }
}

export default function BlogDetailLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}
