import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function SkillsPage() {
  return (
    <div className="container max-w-5xl py-8 px-4 md:px-8">
      <PageHeader title="Keahlian" description="Hard skills dan soft skills yang saya kuasai" />

      <div className="mt-8 space-y-12">
        <ContentBlock title="💻 Hard Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">Frontend Development</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=React"
                        alt="React"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">React</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Next.js"
                        alt="Next.js"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=TS"
                        alt="TypeScript"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">TypeScript</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Vue"
                        alt="Vue.js"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Vue.js</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=TW"
                        alt="Tailwind CSS"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Tailwind CSS</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=HTML/CSS"
                        alt="HTML/CSS"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">HTML/CSS</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">Backend Development</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Node"
                        alt="Node.js"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Express"
                        alt="Express"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Express</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Prisma"
                        alt="Prisma"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Prisma</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=PHP"
                        alt="PHP"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">PHP/Laravel</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=REST"
                        alt="RESTful APIs"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">RESTful APIs</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=GraphQL"
                        alt="GraphQL"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">GraphQL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">Mobile Development</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=RN"
                        alt="React Native"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">React Native</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Flutter"
                        alt="Flutter"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Flutter</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Android"
                        alt="Android"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Android</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=iOS"
                        alt="iOS"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">iOS</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=UI/UX"
                        alt="Mobile UI/UX"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Mobile UI/UX</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">Database & Cloud</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=PostgreSQL"
                        alt="PostgreSQL"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=MongoDB"
                        alt="MongoDB"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Firebase"
                        alt="Firebase"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Firebase</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=AWS"
                        alt="AWS"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">AWS</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Vercel"
                        alt="Vercel"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Vercel</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Netlify"
                        alt="Netlify"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Netlify</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">UI/UX Design</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Figma"
                        alt="Figma"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Figma</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=XD"
                        alt="Adobe XD"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Adobe XD</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=RD"
                        alt="Responsive Design"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Responsive Design</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=WF"
                        alt="Wireframing"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Wireframing</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=Proto"
                        alt="Prototyping"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Prototyping</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-4">AI & Machine Learning</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=OpenAI"
                        alt="OpenAI API"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">OpenAI API</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=TF.js"
                        alt="TensorFlow.js"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">TensorFlow.js</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=ML"
                        alt="ML Models"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">ML Models</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=CV"
                        alt="Computer Vision"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">Computer Vision</span>
                  </div>
                  <div className="flex flex-col items-center p-3 border rounded-lg">
                    <div className="h-12 w-12 relative mb-2">
                      <Image
                        src="/placeholder.svg?height=48&width=48&text=NLP"
                        alt="NLP"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">NLP</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>

        <ContentBlock title="🔧 Tools & Technologies">
          <div className="flex flex-wrap gap-2">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Docker",
              "Webpack",
              "Vite",
              "Jest",
              "Cypress",
              "CI/CD",
              "Jenkins",
              "GitHub Actions",
              "Jira",
              "Notion",
              "Slack",
              "Postman",
              "npm/yarn",
              "Babel",
              "ESLint",
              "Prettier",
              "Redux",
              "Zustand",
              "React Query",
              "Storybook",
              "Framer Motion",
              "GSAP",
              "Three.js",
              "D3.js",
              "Chart.js",
            ].map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="🤝 Soft Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Communication & Leadership</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2">🎤</span>
                    <div>
                      <p className="font-medium">Public Speaking</p>
                      <p className="text-sm text-muted-foreground">
                        Presentasi teknis, webinar, dan workshop untuk berbagai audiens
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">👨‍🏫</span>
                    <div>
                      <p className="font-medium">Mentoring</p>
                      <p className="text-sm text-muted-foreground">
                        Membimbing developer junior dan berbagi pengetahuan teknis
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">👥</span>
                    <div>
                      <p className="font-medium">Team Leadership</p>
                      <p className="text-sm text-muted-foreground">
                        Mengelola tim developer dengan metodologi Agile/Scrum
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📝</span>
                    <div>
                      <p className="font-medium">Technical Writing</p>
                      <p className="text-sm text-muted-foreground">Dokumentasi, artikel teknis, dan tutorial</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-medium mb-4">Problem Solving & Adaptability</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="mr-2">🧩</span>
                    <div>
                      <p className="font-medium">Problem Solving</p>
                      <p className="text-sm text-muted-foreground">
                        Analisis masalah kompleks dan pengembangan solusi efektif
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🔄</span>
                    <div>
                      <p className="font-medium">Adaptability</p>
                      <p className="text-sm text-muted-foreground">
                        Cepat beradaptasi dengan teknologi dan kebutuhan baru
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">⏱️</span>
                    <div>
                      <p className="font-medium">Time Management</p>
                      <p className="text-sm text-muted-foreground">Prioritas tugas dan manajemen waktu yang efektif</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🔍</span>
                    <div>
                      <p className="font-medium">Attention to Detail</p>
                      <p className="text-sm text-muted-foreground">Fokus pada kualitas dan detail dalam pengembangan</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>

        <ContentBlock title="🌐 Languages">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">Bahasa Indonesia</h3>
              <p className="text-sm text-muted-foreground">Native</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">English</h3>
              <p className="text-sm text-muted-foreground">Professional Proficiency</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-medium">日本語 (Japanese)</h3>
              <p className="text-sm text-muted-foreground">Basic</p>
            </div>
          </div>
        </ContentBlock>
      </div>
    </div>
  )
}
