import type { MetadataRoute } from "next"
import blogs from "@/data/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adityafakhri.id"
  const routes: Array<{ path: string; priority: number; changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" }> = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.9, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" },
    { path: "/speaking", priority: 0.8, changeFrequency: "weekly" },
    { path: "/mentoring", priority: 0.8, changeFrequency: "monthly" },
    { path: "/services", priority: 0.8, changeFrequency: "monthly" },
    { path: "/skills", priority: 0.7, changeFrequency: "monthly" },
    { path: "/experience", priority: 0.7, changeFrequency: "monthly" },
    { path: "/education", priority: 0.7, changeFrequency: "monthly" },
    { path: "/community", priority: 0.7, changeFrequency: "monthly" },
    { path: "/testimoni", priority: 0.7, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
    { path: "/ramadhanjs", priority: 0.6, changeFrequency: "monthly" },
    { path: "/ramadhanjs2025", priority: 0.5, changeFrequency: "yearly" },
    { path: "/links", priority: 0.5, changeFrequency: "monthly" },
  ]

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const blogEntries: MetadataRoute.Sitemap = Object.entries(blogs).map(([id, post]: [string, any]) => {
    let postDate = now
    if (post.isoDate) {
      const parsed = new Date(post.isoDate)
      if (!isNaN(parsed.getTime())) {
        postDate = parsed
      }
    }
    return {
      url: `${baseUrl}/blog/${id}`,
      lastModified: postDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }
  })

  return [...staticEntries, ...blogEntries]
}

