import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentBlock } from "@/components/content-block"

const projects = [
  {
    id: "siacta",
    title: "SIACTA",
    description: "Sistem Informasi Akademik Terpadu untuk manajemen perkuliahan dan nilai.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "TypeScript", "Prisma"],
    category: "web",
  },
  {
    id: "herya",
    title: "Company Profile Herza",
    description: "Website profil perusahaan dengan desain modern dan responsif.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    category: "web",
  },
  {
    id: "medfluffy",
    title: "MedFluffy",
    description: "Aplikasi kesehatan hewan peliharaan dengan fitur AI untuk diagnosis awal.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "Firebase", "TensorFlow"],
    category: "mobile",
  },
  {
    id: "restoranku",
    title: "Restoranku",
    description: "Sistem manajemen restoran dengan fitur pemesanan online dan analitik.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Vue.js", "Node.js", "MongoDB"],
    category: "web",
  },
  {
    id: "ramadhanjs",
    title: "RamadhanJS",
    description:
      "Aplikasi web untuk membantu umat Muslim selama bulan Ramadhan dengan fitur jadwal sholat dan reminder.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "Express", "MongoDB"],
    category: "web",
  },
  {
    id: "aiwriter",
    title: "AI Writer",
    description: "Tool pembuatan konten dengan bantuan AI untuk meningkatkan produktivitas penulis.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "OpenAI API", "Node.js"],
    category: "ai",
  },
  {
    id: "smartgarden",
    title: "Smart Garden",
    description: "Sistem IoT untuk monitoring dan otomatisasi perawatan tanaman.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Arduino", "React", "MQTT"],
    category: "iot",
  },
  {
    id: "eduquiz",
    title: "EduQuiz",
    description: "Platform pembelajaran interaktif dengan sistem kuis dan analitik kemajuan.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Firebase", "Redux"],
    category: "web",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Proyek" description="Koleksi proyek yang telah saya kerjakan" />

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="mb-6">
          <TabsTrigger value="all">Semua</TabsTrigger>
          <TabsTrigger value="web">Web</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
          <TabsTrigger value="iot">IoT</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                tags={project.tags}
                href={`/projects/${project.id}`}
              />
            ))}
          </div>
        </TabsContent>

        {["web", "mobile", "ai", "iot"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((project) => project.category === category)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    tags={project.tags}
                    href={`/projects/${project.id}`}
                  />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <ContentBlock title="🔍 Proses Pengembangan" className="mt-12">
        <div className="space-y-6">
          <div className="relative pl-6 border-l-2 border-muted pb-6">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <h3 className="font-medium text-lg">1. Discovery & Planning</h3>
            <p className="mt-2">
              Memahami kebutuhan klien, melakukan riset, dan merencanakan arsitektur serta fitur aplikasi.
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-muted pb-6">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <h3 className="font-medium text-lg">2. Design & Prototyping</h3>
            <p className="mt-2">Membuat wireframe, mockup, dan prototype interaktif untuk memvisualisasikan solusi.</p>
          </div>

          <div className="relative pl-6 border-l-2 border-muted pb-6">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <h3 className="font-medium text-lg">3. Development</h3>
            <p className="mt-2">
              Mengimplementasikan solusi dengan pendekatan iteratif dan praktik pengembangan terbaik.
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-muted pb-6">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <h3 className="font-medium text-lg">4. Testing & QA</h3>
            <p className="mt-2">Melakukan pengujian menyeluruh untuk memastikan kualitas dan performa aplikasi.</p>
          </div>

          <div className="relative pl-6 border-l-2 border-muted">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
            <h3 className="font-medium text-lg">5. Deployment & Maintenance</h3>
            <p className="mt-2">
              Meluncurkan aplikasi dan memberikan dukungan berkelanjutan untuk memastikan keberhasilan jangka panjang.
            </p>
          </div>
        </div>
      </ContentBlock>
    </div>
  )
}
