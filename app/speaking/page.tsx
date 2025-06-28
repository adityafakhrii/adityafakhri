"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, ExternalLink, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TranslatedContent } from "@/components/translated-content"

export default function SpeakingPage() {
  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('speakingTitle')} description={t('speakingDescription')} />

          <div className="mt-8 space-y-8">
            <ContentBlock title={`🎙️ ${t('upcomingEvents')}`}>
              <p className="text-lg mb-4">
                {t('language') === 'id' 
                  ? "Hey! Ini nih jadwal event-event yang bakal saya isi sebagai speaker dalam waktu dekat."
                  : "Hey! Here are the upcoming events where I'll be speaking in the near future."
                }
              </p>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src="https://i.ibb.co/YBYKVTHB/qwords.jpg"
                          alt="Qwords Digital Sprint"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge>Workshop</Badge>
                          <Badge variant="outline">Personal Branding</Badge>
                          <Badge variant="outline">Career Development</Badge>
                        </div>
                        <h3 className="font-medium text-xl">
                          {t('language') === 'id' 
                            ? "Belajar Bikin Website 10 Hari, Langsung Siap Terima Project!"
                            : "Learn to Build Websites in 10 Days, Ready to Accept Projects!"
                          }
                        </h3>
                        <h4 className="text-lg text-muted-foreground">Qwords Digital Sprint</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            25 Juli 2025
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            19.00-21.00 WIB
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Zoom Meeting
                          </div>
                        </div>
                        <div className="mt-4 text-sm">
                          {t('language') === 'id' 
                            ? "Sesi khusus membahas tentang pengembangan karir sebagai developer, meliputi:"
                            : "Special session discussing career development as a developer, including:"
                          }
                          <ul className="list-disc list-inside mt-1">
                            <li>
                              {t('language') === 'id' 
                                ? "Membangun personal branding dan portofolio yang menarik"
                                : "Building personal branding and attractive portfolio"
                              }
                            </li>
                            <li>
                              {t('language') === 'id' 
                                ? "Teknik pitching efektif untuk HRD dan klien"
                                : "Effective pitching techniques for HR and clients"
                              }
                            </li>
                            <li>
                              {t('language') === 'id' 
                                ? "Membangun mindset kolaboratif dalam tim development"
                                : "Building collaborative mindset in development teams"
                              }
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://s.id/qdswebdev" target="_blank">
                              {t('language') === 'id' ? "Daftar Sekarang" : "Register Now"}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {t('language') === 'id' 
                            ? "Diselenggarakan oleh: Qwords Cloud Web Hosting Indonesia"
                            : "Organized by: Qwords Cloud Web Hosting Indonesia"
                          }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>

            <ContentBlock title={`🎯 ${t('pastEvents')}`}>
              <p className="text-lg mb-6">
                {t('language') === 'id' 
                  ? "Saya aktif berbagi pengetahuan dan pengalaman melalui berbagai acara teknologi, webinar, dan konferensi. Berikut adalah beberapa acara di mana saya menjadi pembicara."
                  : "I actively share knowledge and experience through various technology events, webinars, and conferences. Here are some events where I was a speaker."
                }
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://i.ibb.co/0RPc0Tfc/upilaravel.jpg"
                      alt="Workshop Laravel 12"
                      fill
                      className="object-cover object-bottom"
                    />
                    </div>
                    <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Workshop</Badge>
                      <Badge variant="outline">Laravel 12</Badge>
                      <Badge variant="outline">Web Development</Badge>
                    </div>
                    <h3 className="font-medium text-xl">
                      {t('language') === 'id' 
                        ? "Membuat Aplikasi Web Sederhana dengan Laravel 12"
                        : "Building Simple Web Applications with Laravel 12"
                      }
                    </h3>
                    <h4 className="text-lg text-muted-foreground">
                      {t('language') === 'id' 
                        ? "Pelatihan Laravel 12 untuk Pemula + Studi Kasus"
                        : "Laravel 12 Training for Beginners + Case Study"
                      }
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      04 Juni 2025
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Universitas Pendidikan Indonesia, Bandung
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      {t('language') === 'id' 
                        ? "Pelatihan intensif untuk pemula yang ingin mempelajari dasar-dasar Laravel 12. Peserta akan mempraktikkan pembuatan aplikasi web sederhana melalui studi kasus nyata, mulai dari instalasi hingga deployment."
                        : "Intensive training for beginners who want to learn the basics of Laravel 12. Participants will practice building simple web applications through real case studies, from installation to deployment."
                      }
                    </div>
                    <div className="mt-4">
                      <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {t('language') === 'id' 
                        ? "Diselenggarakan oleh: Himpunan Mahasiswa Ilmu Komputer UPI"
                        : "Organized by: Computer Science Student Association UPI"
                      }
                    </div>
                    </div>
                  </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://i.ibb.co/Y7WdG29h/instagram-KF.png"
                      alt="Kelas Fullstack Tailwind"
                      fill
                      className="object-cover"
                    />
                    </div>
                    <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Workshop</Badge>
                      <Badge variant="outline">Fullstack</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                    </div>
                    <h3 className="font-medium text-xl">
                      {t('language') === 'id' 
                        ? "Styling Website Dengan Tailwind dari Nol"
                        : "Styling Websites With Tailwind from Scratch"
                      }
                    </h3>
                    <h4 className="text-lg text-muted-foreground">Kelas Fullstack Live Class</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Jumat, 16 Mei 2025
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Zoom Meeting
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      {t('language') === 'id'
                        ? "Workshop interaktif membahas dasar-dasar penggunaan Tailwind CSS untuk styling website modern. Peserta akan belajar mulai dari instalasi, konsep utility-first, hingga praktik membangun tampilan responsif secara langsung."
                        : "Interactive workshop covering the basics of using Tailwind CSS for modern website styling. Participants will learn from installation, utility-first concepts, to hands-on practice building responsive layouts."
                      }
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://pay.codepolitan.com/?slug=program-fullstack-web-development-lifetime&coupon=ADITYAFAKHRI" target="_blank">
                          {t('language') === 'id' ? "Join Kelas Fullstack" : "Join Fullstack Class"}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://www.codepolitan.com/course/intro/tailwind-dasar-desain-web-kilat-jaman-sekarang/" target="_blank">
                          {t('language') === 'id' ? "Tonton Rekaman" : "Watch Recording"}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="https://docs.google.com/presentation/d/1nGqXbBuwlhv9QoQYRzyEyz4wBaRWhOcxdYu-Kfr4p1k/edit?usp=sharing" target="_blank">
                          {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {t('language') === 'id'
                        ? "Diselenggarakan oleh: CODEPOLITAN"
                        : "Organized by: CODEPOLITAN"
                      }
                    </div>
                    </div>
                  </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-auto">
                    <Image
                      src="https://i.ibb.co/JWTgsxfB/chayon.jpg"
                      alt="Chayon Masterclass"
                      fill
                      className="object-cover object-top"
                    />
                    </div>
                    <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge>Masterclass</Badge>
                      <Badge variant="outline">Roadmap</Badge>
                      <Badge variant="outline">Career</Badge>
                    </div>
                    <h3 className="font-medium text-xl">
                      {t('language') === 'id'
                        ? "Roadmap Menjadi Programmer Profesional: Dari Nol Sampai Pro"
                        : "Professional Programmer Roadmap: From Zero to Pro"
                      }
                    </h3>
                    <h4 className="text-lg text-muted-foreground">Chayon Masterclass</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      03 Mei 2025
                      </div>
                      <div className="hidden sm:block">•</div>
                      <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      Zoom Meeting
                      </div>
                    </div>
                    <div className="mt-4 text-sm">
                      {t('language') === 'id'
                        ? "Sesi masterclass membahas langkah-langkah praktis dan roadmap lengkap untuk menjadi programmer profesional, mulai dari dasar hingga siap kerja di industri. Cocok untuk pemula maupun yang ingin memperkuat fondasi karier di bidang teknologi."
                        : "Masterclass session discussing practical steps and complete roadmap to become a professional programmer, from basics to industry-ready. Suitable for beginners and those looking to strengthen their career foundation in technology."
                      }
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                      <Link href="https://youtu.be/7TAWMT56fxA?si=6nbY-4FbdskktfcV" target="_blank">
                        {t('language') === 'id' ? "Tonton Rekaman" : "Watch Recording"}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                      <Link href="https://docs.google.com/presentation/d/1tbQUYvYjsHN5Sl7NyPcjjBTnY4NZjYat3yasWCuw29o/edit?usp=sharing" target="_blank">
                        {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                      </Button>
                    </div>
                    <div className="mt-4 text-sm text-muted-foreground">
                      {t('language') === 'id'
                        ? "Diselenggarakan oleh: Chayon Online Course"
                        : "Organized by: Chayon Online Course"
                      }
                    </div>
                    </div>
                  </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src="https://i.ibb.co/Q7nbmP8b/aico.jpg"
                          alt="AI Driven Webcraft"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge>Webinar</Badge>
                          <Badge variant="outline">AI</Badge>
                          <Badge variant="outline">Web Development</Badge>
                        </div>
                        <h3 className="font-medium text-xl">
                          {t('language') === 'id'
                            ? "AI Driven Webcraft: Mengubah Ide Menjadi Website"
                            : "AI Driven Webcraft: Transform Your Ideas into Websites"
                          }
                        </h3>
                        <h4 className="text-lg text-muted-foreground">
                          {t('language') === 'id'
                            ? "AI Webcrafting: Dari Ide ke Website dalam Hitungan Menit"
                            : "AI Webcrafting: From Ideas to Websites in Minutes"
                          }
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            25 April 2025
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            19.00-20.00 WIB
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Zoom Meeting
                          </div>
                        </div>
                        <p className="mt-4 text-sm">
                          {t('language') === 'id'
                            ? "Demo langsung penggunaan AI untuk membangun website dengan tools seperti v0.dev dan Bolt. Mengenalkan AI-driven development untuk developer pemula dan praktisi industri kreatif."
                            : "Live demo of using AI to build websites with tools like v0.dev and Bolt. Introducing AI-driven development for beginner developers and creative industry practitioners."
                          }
                        </p>
                        <div className="mt-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="https://drive.google.com/file/d/1-aftW3xwVdJX0ZXjFJyc1ajnWAfsMOL5/view?usp=sharing" target="_blank">
                                {t('language') === 'id' ? "Tonton Rekaman" : "Watch Recording"}
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link href="https://docs.google.com/presentation/d/1lQkzTt7UvrDlQ86SdeCHz7kPOEFEGSDgPAxLT78BqC4/edit?usp=sharing" target="_blank">
                                {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {t('language') === 'id'
                            ? "Diselenggarakan oleh: AICO Community"
                            : "Organized by: AICO Community"
                          }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src="https://i.ibb.co/6cQzb5Kh/bsb.png"
                          alt="More Than Just Code"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge>Webinar</Badge>
                          <Badge variant="outline">Personal Branding</Badge>
                          <Badge variant="outline">Career Development</Badge>
                        </div>
                        <h3 className="font-medium text-xl">
                          {t('language') === 'id'
                            ? "Lebih dari Sekadar Kode: Membangun Personal Brand yang Kuat sebagai Developer"
                            : "More Than Just Code: Build a Powerful Personal Brand as a Developer"
                          }
                        </h3>
                        <h4 className="text-lg text-muted-foreground">
                          {t('language') === 'id'
                            ? "Membangun Personal Brand yang Kuat sebagai Developer"
                            : "Building a Strong Personal Brand as a Developer"
                          }
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            20 Maret 2025
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            15.00-16.00 WIB
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Zoom Meeting
                          </div>
                        </div>
                        <p className="mt-4 text-sm">
                          {t('language') === 'id'
                            ? "Sesi ini fokus pada personal branding developer. Membahas cara membangun reputasi melalui komunikasi efektif, berbagi pengetahuan, dan aktif di komunitas teknologi."
                            : "This session focuses on developer personal branding. Discussing ways to build reputation through effective communication, knowledge sharing, and active participation in tech communities."
                          }
                        </p>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://docs.google.com/presentation/d/1Om-ZNp9IzvwMjB4Zn8-wQPB2e2AJwQiNElNrudJXoYc/edit?usp=sharing" target="_blank">
                              {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {t('language') === 'id'
                            ? "Diselenggarakan oleh: GDG Bandung, GDG On Campus & Binary Nusantara"
                            : "Organized by: GDG Bandung, GDG On Campus & Binary Nusantara"
                          }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src="https://i.ibb.co/rGqXvKp2/partiums.jpg"
                          alt="Seminar Nasional Technology Ethics"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge>Seminar</Badge>
                          <Badge variant="outline">Technology Ethics</Badge>
                          <Badge variant="outline">Digital Literacy</Badge>
                        </div>
                        <h3 className="font-medium text-xl">
                          {t('language') === 'id'
                            ? "Seminar Nasional: Etika Teknologi dan Dampak Sosial"
                            : "National Seminar: Technology Ethics and Social Impact"
                          }
                        </h3>
                        <h4 className="text-lg text-muted-foreground">
                          {t('language') === 'id'
                            ? "Literasi dan Etika di Era Teknologi"
                            : "Literacy and Ethics in the Technology Era"
                          }
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            05 Oktober 2024
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Universitas Muhammadiyah Surakarta
                          </div>
                        </div>
                        <div className="mt-4 text-sm">
                          {t('language') === 'id'
                            ? "Seminar nasional membahas etika teknologi dan dampaknya terhadap masyarakat, mencakup:"
                            : "National seminar discussing technology ethics and its impact on society, covering:"
                          }
                          <ul className="list-disc list-inside mt-1">
                            <li>
                              {t('language') === 'id'
                                ? "Etika penggunaan teknologi di ranah publik"
                                : "Ethics of technology use in public domain"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Dampak sosial dari digitalisasi dan kecerdasan buatan"
                                : "Social impact of digitalization and artificial intelligence"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Peran developer dalam membentuk ekosistem digital yang sehat"
                                : "Developer's role in shaping a healthy digital ecosystem"
                              }
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href="https://drive.google.com/drive/folders/1SA8gdYKN51MhnAiS4Jw2b7KMaErUXPVQ" target="_blank">
                                {t('language') === 'id' ? "Lihat Dokumentasi" : "View Documentation"}
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link href="https://docs.google.com/presentation/d/1nGqXbBuwlhv9QoQYRzyEyz4wBaRWhOcxdYu-Kfr4p1k/edit?usp=sharing" target="_blank">
                                {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                                <ExternalLink className="ml-2 h-3 w-3" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {t('language') === 'id'
                            ? "Diselenggarakan oleh: HIMATIF Universitas Muhammadiyah Surakarta"
                            : "Organized by: HIMATIF Universitas Muhammadiyah Surakarta"
                          }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src="https://i.ibb.co/WWh3SdLz/gdgoc.jpg"
                          alt="GDGOC Info Session"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge>Info Session</Badge>
                          <Badge variant="outline">Community</Badge>
                          <Badge variant="outline">Career Development</Badge>
                        </div>
                        <h3 className="font-medium text-xl">
                          {t('language') === 'id'
                            ? "Memberdayakan Masa Depan Teknologimu: Temukan Google Developer on Campus Widyatama!"
                            : "Empowering Your Tech Future: Discover Google Developer on Campus Widyatama!"
                          }
                        </h3>
                        <h4 className="text-lg text-muted-foreground">GDGOC Info Session</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            24 November 2024
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            19.00-21.00 WIB
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Google Meet
                          </div>
                        </div>
                        <div className="mt-4 text-sm">
                          {t('language') === 'id'
                            ? "Sebagai Former Lead GDSC '23, membagikan pengalaman seputar:"
                            : "As a Former GDSC Lead '23, sharing experiences about:"
                          }
                          <ul className="list-disc list-inside mt-1">
                            <li>
                              {t('language') === 'id'
                                ? "Kepemimpinan dan kontribusi dalam komunitas teknologi"
                                : "Leadership and contribution in tech communities"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Insight membangun karir teknologi lewat ekosistem Google Developer"
                                : "Insights on building tech career through Google Developer ecosystem"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Tips berkontribusi aktif di komunitas teknologi"
                                : "Tips for active contribution in tech communities"
                              }
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://docs.google.com/presentation/d/14cD8JzY5NyWRxGwIjLzPlVmn1ZJyNRpt0KpUfOKSJbU/edit?usp=sharing" target="_blank">
                              {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {t('language') === 'id'
                            ? "Diselenggarakan oleh: GDGoC – Universitas Widyatama"
                            : "Organized by: GDGoC – Universitas Widyatama"
                          }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src="https://i.ibb.co/hxSftwcg/gamelab.jpg"
                          alt="GLOW#240 Softskill Event"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex flex-wrap gap-2 mb-2">
                          <Badge>Webinar</Badge>
                          <Badge variant="outline">Softskill</Badge>
                          <Badge variant="outline">Career Development</Badge>
                          <Badge variant="outline">AI</Badge>
                        </div>
                        <h3 className="font-medium text-xl">
                          {t('language') === 'id'
                            ? "GLOW#240 – Softskill untuk Raih Karier Software Engineer di Era AI"
                            : "GLOW#240 – Softskills to Achieve Software Engineer Career in AI Era"
                          }
                        </h3>
                        <h4 className="text-lg text-muted-foreground">
                          {t('language') === 'id'
                            ? "Pengembangan Softskill untuk Software Engineer Modern"
                            : "Softskill Development for Modern Software Engineers"
                          }
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            14 Juni 2024
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            15.30-16.30 WIB
                          </div>
                          <div className="hidden sm:block">•</div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            Online - Gamelab Platform
                          </div>
                        </div>
                        <div className="mt-4 text-sm">
                          {t('language') === 'id'
                            ? "Sesi khusus membahas pengembangan softskill untuk software engineer:"
                            : "Special session discussing softskill development for software engineers:"
                          }
                          <ul className="list-disc list-inside mt-1">
                            <li>
                              {t('language') === 'id'
                                ? "Pentingnya softskill untuk menunjang karier di bidang pemrograman"
                                : "The importance of softskills for career support in programming"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Keterampilan komunikasi, problem solving, dan teamwork"
                                : "Communication skills, problem solving, and teamwork"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Tantangan menjadi software engineer di era AI"
                                : "Challenges of being a software engineer in the AI era"
                              }
                            </li>
                            <li>
                              {t('language') === 'id'
                                ? "Tips praktis untuk mengembangkan diri sebagai developer modern"
                                : "Practical tips for self-development as a modern developer"
                              }
                            </li>
                          </ul>
                        </div>
                        <div className="mt-4">
                          <Button variant="outline" size="sm" asChild>
                            <Link href="https://docs.google.com/presentation/d/1SYh7nEgnVJApEeqOf3yB68rOlgR24qvOk2b1tjLGm3o/edit?usp=sharing" target="_blank">
                              {t('language') === 'id' ? "Lihat Materi" : "View Materials"}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                        <div className="mt-4 text-sm text-muted-foreground">
                          {t('language') === 'id'
                            ? "Diselenggarakan oleh: GAMELAB Indonesia"
                            : "Organized by: GAMELAB Indonesia"
                          }
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ContentBlock>

            <ContentBlock title={`📝 ${t('topicsISpeak')}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' 
                      ? "Fullstack Web Development dengan AI"
                      : "Fullstack Web Development with AI"
                    }
                  </h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Laravel Framework & Ecosystem</li>
                    <li>React.js & Next.js Development</li>
                    <li>Tailwind CSS & Bootstrap</li>
                    <li>
                      {t('language') === 'id' 
                        ? "Praktik Terbaik Fullstack Development"
                        : "Fullstack Development Best Practices"
                      }
                    </li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' 
                      ? "AI untuk Developer"
                      : "AI for Developers"
                    }
                  </h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>
                      {t('language') === 'id' 
                        ? "Tools AI untuk Development"
                        : "AI Tools for Development"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Etika dalam Pengembangan AI"
                        : "Ethics in AI Development"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Praktik Terbaik Integrasi AI"
                        : "AI Integration Best Practices"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Prompt Engineering untuk Developer"
                        : "Prompt Engineering for Developers"
                      }
                    </li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Android Development</h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>Kotlin Android Development</li>
                    <li>Android Architecture Patterns</li>
                    <li>Kotlin Coroutines & Flow</li>
                    <li>Android App Performance</li>
                  </ul>
                </div>
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">
                    {t('language') === 'id' 
                      ? "Softskill untuk Developer"
                      : "Softskill for Developer"
                    }
                  </h3>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>
                      {t('language') === 'id' 
                        ? "Pengembangan & Perencanaan Karir"
                        : "Career Development & Planning"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Personal Branding untuk Developer"
                        : "Personal Branding for Developers"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Komunikasi Teknis"
                        : "Technical Communication"
                      }
                    </li>
                    <li>
                      {t('language') === 'id' 
                        ? "Manajemen Waktu & Proyek"
                        : "Time & Project Management"
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock>
              <div className="text-center">
                <h3 className="text-xl font-medium mb-4">
                  {t('language') === 'id' 
                    ? "Tertarik untuk mengundang saya berbicara di acara Anda?"
                    : "Interested in inviting me to speak at your event?"
                  }
                </h3>
                <p className="mb-6">
                  {t('language') === 'id' 
                    ? "Saya tersedia untuk konferensi, workshop, webinar, dan meetups tentang topik-topik yang berkaitan dengan pengembangan web, integrasi AI, dan pengembangan karier teknologi. Silakan hubungi saya untuk mendiskusikan peluang kolaborasi dan bagaimana saya dapat membantu acara Anda."
                    : "I'm available for conferences, workshops, webinars, and meetups on topics related to web development, AI integration, and technology career development. Please contact me to discuss collaboration opportunities and how I can help your event."
                  }
                </p>
                <Button asChild>
                  <Link href="/contact">{t('contactMe')}</Link>
                </Button>
              </div>
            </ContentBlock>
          </div>
        </div>
      )}
    />
  )
}