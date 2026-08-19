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

  const baseUrl = "https://adityafakhri.id"
  const url = `${baseUrl}/blog/${id}`
  const imageUrl = post.imageSrc
    ? post.imageSrc.startsWith("http")
      ? post.imageSrc
      : `${baseUrl}${post.imageSrc.startsWith("/") ? "" : "/"}${post.imageSrc}`
    : `${baseUrl}/foto-adit.webp`

  const imageType = imageUrl.endsWith(".webp")
    ? "image/webp"
    : imageUrl.endsWith(".png")
    ? "image/png"
    : "image/jpeg"

  return {
    title: post.title,
    description: post.excerpt,
    keywords: Array.from(post.tags || []),
    authors: [{ name: post.author || "Aditya Fakhri Riansyah", url: baseUrl }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "Aditya Fakhri Riansyah",
      locale: "id_ID",
      type: "article",
      publishedTime: post.isoDate || post.date,
      authors: [post.author || "Aditya Fakhri Riansyah"],
      tags: post.tags ? Array.from(post.tags) : undefined,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          type: imageType,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@adityafakhrii",
      site: "@adityafakhrii",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
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

  const baseUrl = "https://adityafakhri.id"

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
                : `https://adityafakhri.id${
                    post.imageSrc.startsWith("/") ? "" : "/"
                  }${post.imageSrc}`,
            ]
          : undefined,
        datePublished: post.isoDate || post.date || "Not Available",
        dateModified: post.isoDate || post.date || "Not Available",
        mainEntityOfPage: `https://adityafakhri.id/blog/${id}`,
        author: [
          {
            "@type": "Person",
            "name": post.author || "Aditya Fakhri Riansyah",
            "url": "https://adityafakhri.id",
          },
        ],
        publisher: {
          "@type": "Person",
          "name": "Aditya Fakhri Riansyah",
          "url": "https://adityafakhri.id",
          "logo": {
            "@type": "ImageObject",
            "url": "https://adityafakhri.id/foto-adit.webp",
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
