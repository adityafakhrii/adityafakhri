import type { Metadata } from "next"
import { BlogContent } from "./content"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artikel dan insight seputar web development, AI, TypeScript, dan teknologi modern oleh Aditya Fakhri Riansyah.",
}

export default function BlogPage() {
  return <BlogContent />
}
