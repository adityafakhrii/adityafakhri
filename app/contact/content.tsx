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
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react"
import { useState, useMemo, useRef } from "react"
import { useToast } from "@/hooks/use-toast"
import { TranslatedContent } from "@/components/translated-content"
import { useLanguage } from "@/contexts/language-context"

const getFormSchema = (t: any) => z.object({
  name: z.string().min(2, {
    message: t('formNameMin'),
  }),
  email: z.string().email({
    message: t('formEmailInvalid'),
  }),
  subject: z.string().min(5, {
    message: t('formSubjectMin'),
  }),
  message: z.string().min(10, {
    message: t('formMessageMin'),
  }),
})

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const schema = useMemo(() => getFormSchema(t), [t])

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof schema>) {
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, _hp: honeypotRef.current?.value || '' }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send message')
      }

      form.reset()
      toast({
        title: t('contactSuccessTitle'),
        description: t('contactSuccessDesc'),
      })
    } catch (err: any) {
      toast({
        title: t('contactFailTitle'),
        description: t('contactFailDesc'),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const honeypotRef = useRef<HTMLInputElement>(null)

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
                              <Input placeholder={t('k_614cffa5')} {...field} />
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
                            <Input placeholder={t('k_e87ce76f')} {...field} />
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
                            <Textarea placeholder={t('k_546a35b5')} className="min-h-32" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Honeypot anti-spam — hidden from real users, bots fill it */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
                      <label htmlFor="_hp_contact">Leave this empty</label>
                      <input id="_hp_contact" name="_hp" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                      {isSubmitting ? (
                        <>{t('k_7b0fee4d')}</>
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
                  <a href="mailto:adityafakhri03@gmail.com" className="flex items-start group p-3 -mx-3 rounded-lg hover:bg-muted transition-colors">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-medium flex items-center text-foreground">
                        {t('email')}
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        adityafakhri03@gmail.com
                      </p>
                    </div>
                  </a>

                  <a href="https://wa.me/62895808860080" target="_blank" rel="noopener noreferrer" className="flex items-start group p-3 -mx-3 rounded-lg hover:bg-muted transition-colors">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-medium flex items-center text-foreground">
                        WhatsApp
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        +62 895 8088 60080
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start p-3 -mx-3">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">
                        {t('k_ce5bf551')}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">Bandung, Indonesia</p>
                    </div>
                  </div>
                </div>
              </ContentBlock>

              <ContentBlock title={t('workingHours')}>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{t('k_ddf01606')}</span>
                    <span>17:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('k_1f16117d')}</span>
                    <span>08:00 - 20:00</span>
                  </div>
                </div>
              </ContentBlock>

              <ContentBlock title={t('response')}>
                <p className="text-sm">
                  {t('k_74b9464b')
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