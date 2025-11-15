import type { MetadataRoute } from "next"
import blogs from "@/data/blog"

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

  const staticEntries: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = Object.keys(blogs).map((id) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}

