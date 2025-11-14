"use client"

import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
  import { TranslatedContent } from "@/components/translated-content"
import projects from "@/data/projects"

const normalizeCategory = (c?: string) => {
  if (!c) return "web"
  const s = c.toLowerCase()
  if (s.includes("mobile")) return "mobile"
  if (s.includes("design") || s.includes("ui") || s.includes("ux")) return "design"
  return "web"
}

const isDone = (s: (typeof featuredProjects)[number]["status"]) =>
  s === "Completed" || s === "Production"

const getStatusStyle = (s: (typeof featuredProjects)[number]["status"]) => {
  switch (s) {
    case "Completed":
    case "Production":
      return { variant: "outline" as const, className: "text-xs bg-green-100 text-green-800 border-green-300" }
    case "Prototype":
    case "Beta":
    case "Training Project":
      return { variant: "outline" as const, className: "text-xs bg-orange-100 text-orange-800 border-orange-300" }
    default:
      return { variant: "default" as const, className: "text-xs bg-blue-500 text-blue-50" }
  }
}

const pick = (id: keyof typeof projects) => {
  const p = projects[id]
  return {
    id,
    title: p.title,
    description: p.description,
    imageSrc: p.imageSrc,
    tags: p.tags,
    category: normalizeCategory(p.category),
    status: p.status,
    year: p.year,
  }
}

const featuredProjects = [
  pick("siacta"),
  pick("medfluffy"),
  pick("restoranku"),
  pick("ramadhanjs"),
  pick("proquoteai"),
  pick("patunganyuk"),
]

const recentProjects = [
  pick("sibi-app-ui-ux"),
  pick("lavafa-co"),
  pick("laravel-mastery"),
  pick("mentoring-landing"),
  pick("laravel-upi-training"),
  pick("mangrove-kedatim"),
  pick("desa-cisontrol"),
  pick("newyear-countdown"),
  pick("sushi-webapp"),
  pick("story-app"),
  pick("laundry-app-dirtless"),
  pick("smart-clinic-ui"),
]

const allProjects = [...featuredProjects, ...recentProjects]

export default function ProjectsPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('projectsTitle')} description={t('projectsDescription')} />

          {/* Featured Projects Section */}
          <ContentBlock title={t('featuredProjectsTitle')} className="mt-8">
            <p className="text-muted-foreground mb-6">
              {t('language') === 'id' 
                ? "Proyek-proyek utama yang menunjukkan keahlian dan pengalaman saya dalam pengembangan aplikasi web dan mobile."
                : "Main projects that showcase my expertise and experience in web and mobile application development."
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <div key={project.id} className="relative">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    tags={project.tags}
                    href={`/projects/${project.id}`}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="default" className="bg-yellow-500 text-yellow-50">
                      {t('language') === 'id' ? 'Unggulan' : 'Featured'}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {project.year}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ContentBlock>

          {/* Recent Projects Section */}
          <ContentBlock title={t('recentProjectsTitle')} className="mt-12">
            <p className="text-muted-foreground mb-6">
              {t('language') === 'id' 
                ? "Proyek-proyek terbaru yang sedang dikerjakan atau baru saja diselesaikan, menampilkan eksplorasi teknologi dan solusi inovatif."
                : "Recent projects that are being worked on or have just been completed, showcasing technology exploration and innovative solutions."
              }
            </p>
            
            <Tabs defaultValue="all" className="mt-6">
              <TabsList className="mb-6">
                <TabsTrigger value="all">{t('all')}</TabsTrigger>
                <TabsTrigger value="web">{t('web')}</TabsTrigger>
                <TabsTrigger value="mobile">{t('mobile')}</TabsTrigger>
                <TabsTrigger value="design">{t('design')}</TabsTrigger>
                <TabsTrigger value="completed">{t('completed')}</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="relative">
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        imageSrc={project.imageSrc}
                        tags={project.tags}
                        href={`/projects/${project.id}`}
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {(() => { const s = getStatusStyle(project.status); return (
                          <Badge variant={s.variant} className={s.className}>
                            {project.status}
                          </Badge>
                        )})()}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentProjects
                    .filter((project) => project.category === "web")
                    .map((project) => (
                      <div key={project.id} className="relative">
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imageSrc={project.imageSrc}
                          tags={project.tags}
                          href={`/projects/${project.id}`}
                        />
                      <div className="absolute top-4 right-4">
                          {(() => { const s = getStatusStyle(project.status); return (
                            <Badge variant={s.variant} className={s.className}>
                              {project.status}
                            </Badge>
                          )})()}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentProjects
                    .filter((project) => project.category === "mobile")
                    .map((project) => (
                      <div key={project.id} className="relative">
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imageSrc={project.imageSrc}
                          tags={project.tags}
                          href={`/projects/${project.id}`}
                        />
                        <div className="absolute top-4 right-4">
                          {(() => { const s = getStatusStyle(project.status); return (
                            <Badge variant={s.variant} className={s.className}>
                              {project.status}
                            </Badge>
                          )})()}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentProjects
                    .filter((project) => project.category === "design")
                    .map((project) => (
                      <div key={project.id} className="relative">
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imageSrc={project.imageSrc}
                          tags={project.tags}
                          href={`/projects/${project.id}`}
                        />
                        <div className="absolute top-4 right-4">
                          {(() => { const s = getStatusStyle(project.status); return (
                            <Badge variant={s.variant} className={s.className}>
                              {project.status}
                            </Badge>
                          )})()}
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentProjects
                    .filter((project) => project.status === "Completed")
                    .map((project) => (
                      <div key={project.id} className="relative">
                        <ProjectCard
                          title={project.title}
                          description={project.description}
                          imageSrc={project.imageSrc}
                          tags={project.tags}
                          href={`/projects/${project.id}`}
                        />
                        <div className="absolute top-4 right-4">
                          <Badge variant="outline" className="text-xs bg-green-100 text-green-800 border-green-300">
                            {t('completed')}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </ContentBlock>

          {/* Project Statistics */}
          <ContentBlock title={t('projectStats')} className="mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-primary">{allProjects.length}</div>
                <div className="text-sm text-muted-foreground">{t('totalProjects')}</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {allProjects.filter(p => p.status === "Completed" || p.status === "Production").length}
                </div>
                <div className="text-sm text-muted-foreground">{t('completedProjects')}</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {allProjects.filter(p => !isDone(p.status)).length}
                </div>
                <div className="text-sm text-muted-foreground">{t('inDevelopment')}</div>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold text-orange-600">
                  {allProjects.filter(p => p.category === "web").length}
                </div>
                <div className="text-sm text-muted-foreground">{t('webApps')}</div>
              </div>
            </div>
          </ContentBlock>

          <ContentBlock title={t('language') === 'id' ? 'Proses Pengembangan' : 'Development Process'} className="mt-12">
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-muted pb-6">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="font-medium text-lg">
                  1. {t('language') === 'id' ? 'Discovery & Planning' : 'Discovery & Planning'}
                </h3>
                <p className="mt-2">
                  {t('language') === 'id' 
                    ? "Memahami kebutuhan klien, melakukan riset pasar, dan merencanakan arsitektur serta fitur aplikasi dengan detail."
                    : "Understanding client needs, conducting market research, and planning architecture and application features in detail."
                  }
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-muted pb-6">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="font-medium text-lg">
                  2. {t('language') === 'id' ? 'Design & Prototyping' : 'Design & Prototyping'}
                </h3>
                <p className="mt-2">
                  {t('language') === 'id' 
                    ? "Membuat wireframe, mockup, dan prototype interaktif untuk memvisualisasikan solusi sebelum development."
                    : "Creating wireframes, mockups, and interactive prototypes to visualize solutions before development."
                  }
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-muted pb-6">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="font-medium text-lg">
                  3. {t('language') === 'id' ? 'Development' : 'Development'}
                </h3>
                <p className="mt-2">
                  {t('language') === 'id' 
                    ? "Mengimplementasikan solusi dengan pendekatan iteratif, menggunakan best practices dan teknologi modern."
                    : "Implementing solutions with an iterative approach, using best practices and modern technology."
                  }
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-muted pb-6">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="font-medium text-lg">
                  4. {t('language') === 'id' ? 'Testing & QA' : 'Testing & QA'}
                </h3>
                <p className="mt-2">
                  {t('language') === 'id' 
                    ? "Melakukan pengujian menyeluruh untuk memastikan kualitas, performa, dan keamanan aplikasi."
                    : "Conducting thorough testing to ensure application quality, performance, and security."
                  }
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-muted">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary"></div>
                <h3 className="font-medium text-lg">
                  5. {t('language') === 'id' ? 'Deployment & Maintenance' : 'Deployment & Maintenance'}
                </h3>
                <p className="mt-2">
                  {t('language') === 'id' 
                    ? "Meluncurkan aplikasi ke production dan memberikan dukungan berkelanjutan untuk memastikan keberhasilan jangka panjang."
                    : "Launching the application to production and providing ongoing support to ensure long-term success."
                  }
                </p>
              </div>
            </div>
          </ContentBlock>
        </div>
      )}
    />
  )
}