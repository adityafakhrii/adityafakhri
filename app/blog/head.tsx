export default function Head() {
  const baseUrl = "https://adityafakhri.id"
  const title = "Blog & Artikel | Aditya Fakhri Riansyah"
  const description = "Artikel dan tutorial tentang pengembangan web modern, AI, dan teknologi"
  const url = `${baseUrl}/blog`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}