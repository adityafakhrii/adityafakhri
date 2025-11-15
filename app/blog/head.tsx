export default function Head() {
  const baseUrl = "https://adityafakhri.com"
  const title = "Blog"
  const description = "Artikel dan tutorial tentang pengembangan web, AI, dan teknologi"
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
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}