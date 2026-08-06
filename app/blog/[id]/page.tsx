import type { Metadata } from "next"
import blogs, { type BlogPost } from "@/data/blog"
import { BlogPostClient } from "./blog-post-client"

const normalize = (s: string) =>
  decodeURIComponent(s).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-")

export async function generateStaticParams() {
  return Object.keys(blogs).map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const normId = normalize(resolvedParams.id)
  const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
  const id = entry ? entry[0] : resolvedParams.id
  const post = (blogs[id as keyof typeof blogs] as unknown as BlogPost) || null

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan",
      description: "Artikel yang Anda cari tidak tersedia.",
    }
  }

  const baseUrl = "https://adityafakhri.com"
  const url = `${baseUrl}/blog/${id}`
  const image = post.imageSrc
    ? post.imageSrc.startsWith("http")
      ? post.imageSrc
      : `${baseUrl}${post.imageSrc.startsWith("/") ? "" : "/"}${post.imageSrc}`
    : undefined

  return {
    title: post.title,
    description: post.excerpt,
    keywords: Array.from(post.tags || []),
    authors: [{ name: post.author || "Aditya Fakhri Riansyah" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.isoDate || post.date,
      authors: [post.author || "Aditya Fakhri Riansyah"],
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: image ? [image] : undefined,
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params
  const normId = normalize(resolvedParams.id)
  const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
  const id = entry ? entry[0] : resolvedParams.id
  const post = (blogs[id as keyof typeof blogs] as unknown as BlogPost) || null

  const relatedPosts = post?.relatedPosts
    ? (post.relatedPosts as string[])
        .map((relId: string) => {
          const rel = blogs[relId as keyof typeof blogs] as unknown as BlogPost | undefined
          if (!rel) return null
          return {
            id: relId,
            title: rel.title,
            excerpt: rel.excerpt,
            category: rel.category,
          }
        })
        .filter((rel: { id: string; title: string; excerpt: string; category: string } | null): rel is NonNullable<typeof rel> => rel !== null)
    : []

  const schemaData = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title || "Not Available",
        description: post.excerpt || "Not Available",
        image: post.imageSrc
          ? [
              post.imageSrc.startsWith("http")
                ? post.imageSrc
                : `https://adityafakhri.com${
                    post.imageSrc.startsWith("/") ? "" : "/"
                  }${post.imageSrc}`,
            ]
          : undefined,
        datePublished: post.isoDate || post.date || "Not Available",
        dateModified: post.isoDate || post.date || "Not Available",
        mainEntityOfPage: `https://adityafakhri.com/blog/${id}`,
        author: [
          {
            "@type": "Person",
            "name": post.author || "Aditya Fakhri Riansyah",
            "url": "https://adityafakhri.com",
          },
        ],
        publisher: {
          "@type": "Organization",
          "name": "Aditya Fakhri Riansyah",
          "url": "https://adityafakhri.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://adityafakhri.com/aditya-fakhri.webp",
          },
        },
      }
    : null

  return (
    <>
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      )}
      <BlogPostClient id={id} post={post} relatedPosts={relatedPosts} />
    </>
  )
}
