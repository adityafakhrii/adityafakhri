"use client"

import { PageHeader } from "@/components/page-header"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { TranslatedContent } from "@/components/translated-content"

const featuredProjects = [
  {
    id: "siacta",
    title: "SIACTA",
    description: "System Information Accounting & Tax: aplikasi web komprehensif untuk mengelola operasi keuangan dan kepatuhan pajak dengan fitur lengkap untuk bisnis.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Accounting"],
    category: "web",
    featured: true,
    status: "Production",
    year: "2024"
  },
  {
    id: "medfluffy",
    title: "MedFluffy",
    description: "Aplikasi Android untuk prediksi dini penyakit mata pada anjing menggunakan CNN. Dikembangkan sebagai Capstone Project Bangkit Academy 2023 dengan dedikasi 200 jam.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Kotlin", "TensorFlow", "CNN", "Firebase", "Material Design"],
    category: "mobile",
    featured: true,
    status: "Completed",
    year: "2023"
  },
  {
    id: "restoranku",
    title: "Restoranku",
    description: "Sistem manajemen restoran dengan fitur pemesanan via QR code, pembayaran QRIS melalui Midtrans, manajemen inventaris, dan pelaporan komprehensif.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Laravel", "JavaScript", "MySQL", "Bootstrap", "Midtrans", "QR Code"],
    category: "web",
    featured: true,
    status: "Production",
    year: "2024"
  },
  {
    id: "ramadhanjs",
    title: "RamadhanJS",
    description: "Aplikasi JavaScript untuk fitur dan utilitas terkait Ramadhan, termasuk kalkulasi waktu sholat, jadwal puasa, dan pengingat ibadah.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "API Integration", "Islamic Calendar", "PWA"],
    category: "web",
    featured: true,
    status: "Completed",
    year: "2023"
  }
]

const recentProjects = [
  {
    id: "sibi-app-ui-ux",
    title: "SIBI App UI/UX",
    description: "Desain antarmuka pengguna untuk aplikasi SIBI dengan fokus pada user experience yang optimal dan aksesibilitas.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
    category: "design",
    status: "Completed",
    year: "2024"
  },
  {
    id: "lavafa-co",
    title: "LavaFa.co",
    description: "Platform digital modern dengan desain yang elegan dan fungsionalitas yang komprehensif untuk kebutuhan bisnis.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Next.js", "TypeScript", "Modern Design"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "laravel-mastery",
    title: "Laravel Mastery",
    description: "Proyek pembelajaran dan penguasaan framework Laravel dengan implementasi fitur-fitur advanced dan best practices.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Laravel", "PHP", "Advanced Features", "Best Practices"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "mentoring-landing",
    title: "Mentoring Landing Page",
    description: "Landing page modern dan responsif untuk Program Mentoring dengan desain yang clean dan user-friendly.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Responsive Design"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "laravel-upi-training",
    title: "Laravel 12 UPI Training",
    description: "Aplikasi manajemen mahasiswa dan program studi sederhana dengan operasi CRUD lengkap, dikembangkan untuk pelatihan Laravel 12 di UPI.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Laravel 12", "PHP", "MySQL", "CRUD Operations"],
    category: "web",
    status: "Training Project",
    year: "2024"
  },
  {
    id: "mangrove-kedatim",
    title: "Mangrove Kedatim",
    description: "Aplikasi untuk monitoring dan pengelolaan ekosistem mangrove di wilayah Kedatim dengan fitur tracking dan reporting.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Environmental Tech", "Monitoring System"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "desa-cisontrol",
    title: "Desa Cisontrol",
    description: "Sistem informasi desa untuk pengelolaan administrasi dan layanan masyarakat desa Cisontrol.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Laravel", "Government System", "Public Service"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "newyear-countdown",
    title: "New Year Countdown",
    description: "Aplikasi countdown interaktif untuk perayaan tahun baru dengan animasi dan efek visual yang menarik.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["JavaScript", "CSS Animations", "Interactive UI"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "sushi-webapp",
    title: "Sushi Web App",
    description: "Aplikasi web untuk restoran sushi dengan fitur menu interaktif, pemesanan online, dan sistem manajemen pesanan.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Food Service", "E-commerce"],
    category: "web",
    status: "Completed",
    year: "2024"
  },
  {
    id: "story-app",
    title: "StoryApp",
    description: "Aplikasi Android untuk berbagi cerita dengan fitur upload gambar, lokasi, dan timeline interaktif.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["Kotlin", "Android", "Social Media", "Location Services"],
    category: "mobile",
    status: "Completed",
    year: "2023"
  },
  {
    id: "laundry-app-dirtless",
    title: "Laundry App - Dirtless",
    description: "Aplikasi manajemen laundry dengan fitur tracking pesanan, notifikasi status, dan sistem pembayaran terintegrasi.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "Business Management", "Payment Integration"],
    category: "mobile",
    status: "Completed",
    year: "2023"
  },
  {
    id: "smart-clinic-ui",
    title: "Smart Clinic UI",
    description: "Interface pengguna untuk sistem klinik pintar dengan desain modern dan user experience yang optimal untuk tenaga medis.",
    imageSrc: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Healthcare UI", "Medical System", "UX Design"],
    category: "web",
    status: "Completed",
    year: "2023"
  }
]

const allProjects = [...featuredProjects, ...recentProjects]

export default function ProjectsPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('projectsTitle')} description={t('projectsDescription')} />

          {/* Featured Projects Section */}
          <ContentBlock title={`🌟 ${t('featuredProjectsTitle')}`} className="mt-8">
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
          <ContentBlock title={`🚀 ${t('recentProjectsTitle')}`} className="mt-12">
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
                        <Badge 
                          variant={project.status === "In Development" ? "default" : "outline"} 
                          className={`text-xs ${
                            project.status === "In Development" 
                              ? "bg-blue-500 text-blue-50" 
                              : project.status === "Completed"
                              ? "bg-green-100 text-green-800 border-green-300"
                              : "bg-orange-100 text-orange-800 border-orange-300"
                          }`}
                        >
                          {project.status}
                        </Badge>
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
                          <Badge 
                            variant={project.status === "In Development" ? "default" : "outline"} 
                            className={`text-xs ${
                              project.status === "In Development" 
                                ? "bg-blue-500 text-blue-50" 
                                : project.status === "Completed"
                                ? "bg-green-100 text-green-800 border-green-300"
                                : "bg-orange-100 text-orange-800 border-orange-300"
                            }`}
                          >
                            {project.status}
                          </Badge>
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
                          <Badge 
                            variant={project.status === "In Development" ? "default" : "outline"} 
                            className={`text-xs ${
                              project.status === "In Development" 
                                ? "bg-blue-500 text-blue-50" 
                                : project.status === "Completed"
                                ? "bg-green-100 text-green-800 border-green-300"
                                : "bg-orange-100 text-orange-800 border-orange-300"
                            }`}
                          >
                            {project.status}
                          </Badge>
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
                          <Badge 
                            variant={project.status === "In Development" ? "default" : "outline"} 
                            className={`text-xs ${
                              project.status === "In Development" 
                                ? "bg-blue-500 text-blue-50" 
                                : project.status === "Completed"
                                ? "bg-green-100 text-green-800 border-green-300"
                                : "bg-orange-100 text-orange-800 border-orange-300"
                            }`}
                          >
                            {project.status}
                          </Badge>
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
          <ContentBlock title={`📊 ${t('projectStats')}`} className="mt-12">
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
                  {allProjects.filter(p => p.status === "In Development").length}
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

          <ContentBlock title={`🔍 ${t('language') === 'id' ? 'Proses Pengembangan' : 'Development Process'}`} className="mt-12">
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