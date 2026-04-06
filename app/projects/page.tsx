import type { Metadata } from "next"
import { ProjectsContent } from "./content"

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio proyek Aditya Fakhri Riansyah — Web Application, Mobile App, Landing Page, dan lainnya.",
}

export default function ProjectsPage() {
  return <ProjectsContent />
}