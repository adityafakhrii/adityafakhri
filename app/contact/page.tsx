"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { TranslatedContent } from "@/components/translated-content"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus minimal 2 karakter.",
  }),
  email: z.string().email({
    message: "Email tidak valid.",
  }),
  subject: z.string().min(5, {
    message: "Subjek harus minimal 5 karakter.",
  }),
  message: z.string().min(10, {
    message: "Pesan harus minimal 10 karakter.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      form.reset()

      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.",
      })
    }, 1500)
  }

  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-5xl py-8 px-4 md:px-8">
          <PageHeader title={t('contactTitle')} description={t('contactDescription')} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="md:col-span-2">
              <ContentBlock>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('language') === 'id' ? 'Nama Anda' : 'Your Name'} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('email')}</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('subject')}</FormLabel>
                          <FormControl>
                            <Input placeholder={t('language') === 'id' ? 'Subjek pesan Anda' : 'Your message subject'} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('message')}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={t('language') === 'id' ? 'Tulis pesan Anda di sini...' : 'Write your message here...'} className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        <>{t('language') === 'id' ? 'Mengirim...' : 'Sending...'}</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {t('sendMessage')}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </ContentBlock>
            </div>

            <div className="space-y-6">
              <ContentBlock>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">{t('email')}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <a href="mailto:aditya@example.com" className="hover:underline">
                          adityafakhri03@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">WhatsApp</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <a href="http://wa.me/62895808860080" className="hover:underline">
                          +62 895 8088 60080
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">
                        {t('language') === 'id' ? 'Lokasi' : 'Location'}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </ContentBlock>

              <ContentBlock title={`⏱️ ${t('workingHours')}`}>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('language') === 'id' ? 'Senin - Jumat' : 'Monday - Friday'}</span>
                    <span>17:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('language') === 'id' ? 'Sabtu - Minggu' : 'Saturday - Sunday'}</span>
                    <span>08:00 - 20:00</span>
                  </div>
                </div>
              </ContentBlock>

              <ContentBlock title={`💬 ${t('response')}`}>
                <p className="text-sm">
                  {t('language') === 'id' 
                    ? "Saya biasanya merespons pesan dalam waktu 1 jam. Untuk pertanyaan mendesak, silakan hubungi melalui telepon."
                    : "I usually respond to messages within 1 hour. For urgent questions, please contact by phone."
                  }
                </p>
              </ContentBlock>
            </div>
          </div>
        </div>
      )}
    />
  )
}