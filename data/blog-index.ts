/**
 * Lightweight blog index — exports only metadata (title, excerpt, date, etc.)
 * WITHOUT the heavy `content` field.
 *
 * Use this for listing pages (homepage, blog list) to avoid bundling 400KB+
 * of HTML content to the client.
 *
 * For full post content (blog detail page), import from `@/data/blog` directly
 * in a Server Component.
 */
import blogs, { type BlogPost } from "./blog"

export type BlogIndexItem = Omit<BlogPost, "content"> & { id: string }

/** Pre-computed sorted blog index (newest first), without content */
const blogIndex: BlogIndexItem[] = Object.entries(blogs)
  .map(([id, post]) => ({
    id,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    author: post.author,
    tags: [...post.tags],
    imageSrc: post.imageSrc,
    relatedPosts: post.relatedPosts ? [...post.relatedPosts] : undefined,
    isoDate: post.isoDate,
  }))
  .sort((a, b) => (b.isoDate || "2026-01-01").localeCompare(a.isoDate || "2026-01-01"))

export default blogIndex
