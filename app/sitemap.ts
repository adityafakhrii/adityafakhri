import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adityafakhri.com"
  const routes = [
    "/",
    "/about",
    "/skills",
    "/experience",
    "/education",
    "/projects",
    "/mentoring",
    "/services",
    "/speaking",
    "/community",
    "/blog",
    "/contact",
  ]

  const now = new Date()

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }))
}

