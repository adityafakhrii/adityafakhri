import blogs from "@/data/blog"

const normalize = (s: string) => decodeURIComponent(s).trim().toLowerCase().replace(/[\s_]+/g, "-").replace(/-+/g, "-")

export default function Head({ params }: { params: { id: string } }) {
  const baseUrl = "https://adityafakhri.com"
  const normId = normalize(params.id)
  const entry = Object.entries(blogs).find(([key]) => normalize(key) === normId)
  const id = entry ? entry[0] : params.id
  const post = blogs[id as keyof typeof blogs]

  const title = post?.title ?? "Blog"
  const description = post?.excerpt ?? "Artikel blog"
  const url = `${baseUrl}/blog/${id}`
  const image = post?.imageSrc ?? "/placeholder.svg"

  const jsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        image: image.startsWith("http") ? image : `${baseUrl}${image}`,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author ?? "Aditya Fakhri Riansyah",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url,
        },
      }
    : null

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image.startsWith("http") ? image : `${baseUrl}${image}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image.startsWith("http") ? image : `${baseUrl}${image}`} />}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  )
}