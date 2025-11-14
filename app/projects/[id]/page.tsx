"use client"

import React from "react"
import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft, Calendar, User, Clock, Target, Lightbulb, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TranslatedContent } from "@/components/translated-content"
import projects from "@/data/projects"

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <TranslatedContent
      renderContent={({ t }) => {
        const resolvedParams = React.use(params)
        const project = projects[resolvedParams.id as keyof typeof projects]

        if (!project) {
          return (
            <main className="container max-w-5xl mx-auto px-4 md:px-8 py-10">
              <h1 className="text-2xl md:text-3xl font-bold">Project tidak ditemukan</h1>
              <p className="text-muted-foreground mt-2">ID: {resolvedParams.id}</p>
              <Link href="/projects" className="inline-flex mt-6 items-center text-sm underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke daftar proyek
              </Link>
            </main>
          )
        }

        return (
          <div className="container max-w-5xl py-8 px-4 md:px-8">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t('backToProjects')}
                </Link>
              </Button>
              
              <div className="flex gap-2">
                {project.prevProject && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projects/${project.prevProject}`}>
                      ← {t('language') === 'id' ? 'Prev' : 'Prev'}
                    </Link>
                  </Button>
                )}
                {project.nextProject && (
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/projects/${project.nextProject}`}>
                      {t('language') === 'id' ? 'Next' : 'Next'} →
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            {/* Project Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">{project.category}</Badge>
                <Badge variant="outline">{project.status}</Badge>
                <Badge variant="outline">{project.year}</Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {project.role}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.year}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {project.duration}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] md:aspect-[16/9] w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={project.imageSrc || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Overview */}
                <ContentBlock>
                  <h2 className="text-2xl font-bold mb-4">{t('overview')}</h2>
                  <p className="text-lg mb-4">{project.fullDescription}</p>
                  <p className="text-muted-foreground">{project.description}</p>
                </ContentBlock>

                {/* Goals */}
                <ContentBlock>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Target className="mr-2 h-5 w-5" />
                    {t('projectGoals')}
                  </h2>
                  <ul className="space-y-2">
                    {project.goals.map((goal, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </ContentBlock>

                {/* Key Features */}
                <ContentBlock>
                  <h2 className="text-2xl font-bold mb-4">{t('keyFeatures')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-3 border rounded-lg">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </ContentBlock>

                {/* Challenges & Solutions */}
                <ContentBlock>
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" />
                    {t('challengesSolutions')}
                  </h2>
                  <div className="space-y-6">
                    {'challenges' in project && project.challenges?.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="mb-3">
                          <h3 className="font-medium text-red-600 mb-2">{t('language') === 'id' ? 'Tantangan:' : 'Challenge:'}</h3>
                          <p className="text-sm">{item.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-green-600 mb-2">{t('language') === 'id' ? 'Solusi:' : 'Solution:'}</h3>
                          <p className="text-sm">{item.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentBlock>

                {/* Outcomes */}
                <ContentBlock>
                  <h2 className="text-2xl font-bold mb-4">{t('projectOutcomes')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {'outcomes' in project && project.outcomes?.map((outcome, index) => (
                      <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ContentBlock>

            {/* Technologies */}
            <ContentBlock>
              <h2 className="text-2xl font-bold mb-4">{t('technologiesUsed')}</h2>
              <div className="space-y-4">
                {(() => {
                  const techEntries: [string, readonly string[]][] = Object.entries(
                    project.technologies as Record<string, readonly string[]>
                  ) as [string, readonly string[]][]
                  return techEntries.map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="font-medium mb-2">{category}:</h3>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  ))
                })()}
              </div>
            </ContentBlock>

                {/* Gallery */}
                {project.gallery && (
                  <ContentBlock>
                    <h2 className="text-2xl font-bold mb-4">{t('projectGallery')}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.gallery.map((image, index) => (
                        <div key={index} className="rounded-lg overflow-hidden border">
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} screenshot ${index + 1}`}
                            width={500}
                            height={300}
                            className="object-cover w-full h-48"
                          />
                        </div>
                      ))}
                    </div>
                  </ContentBlock>
                )}

                {/* Testimonial */}
                {'testimonial' in project && project.testimonial && (
                  <ContentBlock>
                    <h2 className="text-2xl font-bold mb-4">{t('clientTestimonial')}</h2>
                    <div className="bg-muted p-6 rounded-lg">
                      <blockquote className="text-lg italic mb-4">&ldquo;{project.testimonial.quote}&rdquo;</blockquote>
                      <div className="text-sm text-muted-foreground">
                        — {project.testimonial.author}, {project.testimonial.position}
                      </div>
                    </div>
                  </ContentBlock>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <ContentBlock>
                  <h3 className="font-bold mb-4">{t('projectInfo')}</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">{t('client')}</h4>
                      <p className="text-sm">{project.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">{t('duration')}</h4>
                      <p className="text-sm">{project.duration}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">{t('year')}</h4>
                      <p className="text-sm">{project.year}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">{t('role')}</h4>
                      <p className="text-sm">{project.role}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground">{t('status')}</h4>
                      <Badge variant={project.status === "Production" ? "default" : "outline"}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </ContentBlock>

                {/* Project Links */}
                <ContentBlock>
                  <h3 className="font-bold mb-4">{t('links')}</h3>
                  <div className="space-y-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {t('language') === 'id' ? 'Lihat Live' : 'View Live'}
                        </Link>
                      </Button>
                    )}
                    
                    {project.repoUrl && project.repoUrl !== "#" && (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {t('sourceCode')}
                        </Link>
                      </Button>
                    )}
                  </div>
                </ContentBlock>

                {/* Tags */}
                <ContentBlock>
                  <h3 className="font-bold mb-4">{t('tags')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </ContentBlock>

                {/* Contact CTA */}
                <ContentBlock>
                  <h3 className="font-bold mb-4">{t('interestedInSimilarWork')}</h3>
                  <p className="text-sm mb-4">
                    {t('language') === 'id' 
                      ? "Jika Anda tertarik dengan proyek serupa atau ingin berdiskusi tentang kebutuhan development Anda, jangan ragu untuk menghubungi saya."
                      : "If you're interested in similar projects or want to discuss your development needs, don't hesitate to contact me."
                    }
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">{t('getInTouch')}</Link>
                  </Button>
                </ContentBlock>
              </div>
            </div>

            {/* Navigation Footer */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t">
              <div>
                {project.prevProject && (
                  <Button variant="outline" asChild>
                    <Link href={`/projects/${project.prevProject}`}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      {t('previousProject')}
                    </Link>
                  </Button>
                )}
              </div>
              
              <Button variant="outline" asChild>
                <Link href="/projects">
                  {t('allProjects')}
                </Link>
              </Button>
              
              <div>
                {project.nextProject && (
                  <Button variant="outline" asChild>
                    <Link href={`/projects/${project.nextProject}`}>
                      {t('nextProject')}
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}