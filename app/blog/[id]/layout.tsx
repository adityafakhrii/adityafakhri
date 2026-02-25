import type React from "react"
import type { Metadata } from "next"
import blogs from "@/data/blog"

const normalize = (s: string) =>
    decodeURIComponent(s).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-")

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const { id: rawId } = await params
    const baseUrl = "https://adityafakhri.com"
    const normId = normalize(rawId)
    const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
    const id = entry ? entry[0] : rawId
    const post = blogs[id as keyof typeof blogs]

    if (!post) {
        return { title: "Blog" }
    }

    const image = post.imageSrc ?? "/placeholder.svg"
    const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

    return {
        title: post.title,
        description: post.excerpt,
        alternates: {
            canonical: `${baseUrl}/blog/${id}`,
        },
        openGraph: {
            type: "article",
            url: `${baseUrl}/blog/${id}`,
            title: post.title,
            description: post.excerpt,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.excerpt,
            images: [imageUrl],
        },
    }
}

export default async function BlogPostLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ id: string }>
}) {
    const { id: rawId } = await params
    const baseUrl = "https://adityafakhri.com"
    const normId = normalize(rawId)
    const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
    const id = entry ? entry[0] : rawId
    const post = blogs[id as keyof typeof blogs]

    const image = post?.imageSrc ?? "/placeholder.svg"
    const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`

    const jsonLd = post
        ? {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: imageUrl,
            datePublished: post.date,
            author: {
                "@type": "Person",
                name: post.author ?? "Aditya Fakhri Riansyah",
            },
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${baseUrl}/blog/${id}`,
            },
        }
        : null

    return (
        <>
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            {children}
        </>
    )
}
