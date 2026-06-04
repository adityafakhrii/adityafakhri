"use client"

import { PageHeader } from "@/components/page-header"
import { ContentBlock } from "@/components/content-block"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Send, Star, Linkedin, Instagram, Twitter, CheckCircle2, MapPin, Briefcase, Sparkles, BookOpen } from "lucide-react"
import { useState, useMemo } from "react"
import { useToast } from "@/hooks/use-toast"
import { TranslatedContent } from "@/components/translated-content"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"

const getFormSchema = (t: any) => z.object({
  name: z.string().min(2, {
    message: t('k_69ce0f50'),
  }),
  email: z.string().email({
    message: t('k_e267e2be'),
  }),
  city: z.string().min(2, {
    message: t('language') === 'id' ? "Nama kota/kabupaten minimal 2 karakter." : "City/Regency must be at least 2 characters.",
  }),
  occupation: z.string().min(1, {
    message: t('language') === 'id' ? "Pilih pekerjaan Anda." : "Select your occupation.",
  }),
  customOccupation: z.string().optional(),
  topic: z.string().min(1, {
    message: t('language') === 'id' ? "Pilih topik event." : "Select event topic.",
  }),
  customTopic: z.string().optional(),
  ratingContent: z.number().min(1, {
    message: t('language') === 'id' ? "Berikan rating kualitas materi." : "Please rate the material quality.",
  }).max(5),
  ratingDelivery: z.number().min(1, {
    message: t('language') === 'id' ? "Berikan rating penyampaian." : "Please rate the delivery.",
  }).max(5),
  ratingOverall: z.number().min(1, {
    message: t('language') === 'id' ? "Berikan rating keseluruhan." : "Please provide an overall rating.",
  }).max(5),
  impression: z.string().optional(),
}).refine(data => {
  if (data.occupation === "Lainnya" && (!data.customOccupation || data.customOccupation.trim().length < 2)) {
    return false;
  }
  return true;
}, {
  message: t('language') === 'id' ? "Tuliskan pekerjaan kustom Anda." : "Please enter your custom occupation.",
  path: ["customOccupation"]
}).refine(data => {
  if (data.topic === "Lainnya" && (!data.customTopic || data.customTopic.trim().length < 2)) {
    return false;
  }
  return true;
}, {
  message: t('language') === 'id' ? "Tuliskan nama/topik event kustom Anda." : "Please enter custom event name/topic.",
  path: ["customTopic"]
});

interface StarRatingProps {
  value: number
  onChange: (val: number) => void
  label: string
}

function StarRating({ value, onChange, label }: StarRatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null)
  
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hoverValue !== null ? hoverValue : value)
          return (
            <button
              key={star}
              type="button"
              className="focus:outline-none transition-transform active:scale-95 duration-100 p-0.5"
              onClick={() => onChange(star)}
              onMouseEnter={() => setHoverValue(star)}
              onMouseLeave={() => setHoverValue(null)}
              aria-label={`Rate ${star} out of 5`}
            >
              <Star
                className={`h-7 w-7 transition-all duration-200 ${
                  isFilled
                    ? "text-yellow-400 fill-yellow-400 filter drop-shadow-[0_0_4px_rgba(250,204,21,0.5)] scale-110"
                    : "text-muted-foreground/40 hover:text-yellow-300"
                }`}
              />
            </button>
          )
        })}
        {value > 0 && (
          <span className="ml-2 text-xs font-semibold px-2 py-0.5 bg-muted rounded-full text-muted-foreground animate-fade-in">
            {value} / 5
          </span>
        )}
      </div>
    </div>
  )
}

export function FeedbackContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const { t } = useLanguage()

  const schema = useMemo(() => getFormSchema(t), [t])

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      city: "",
      occupation: "",
      customOccupation: "",
      topic: "",
      customTopic: "",
      ratingContent: 0,
      ratingDelivery: 0,
      ratingOverall: 0,
      impression: "",
    },
  })

  const selectedOccupation = form.watch("occupation")
  const selectedTopic = form.watch("topic")

  async function onSubmit(values: z.infer<typeof schema>) {
    setIsSubmitting(true)
    try {
      const payload = {
        ...values,
        occupation: values.occupation === "Lainnya" ? values.customOccupation : values.occupation,
        topic: values.topic === "Lainnya" ? values.customTopic : values.topic,
      }

      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData?.error || "Failed to submit feedback")
      }

      form.reset()
      setIsSuccess(true)
      toast({
        title: t("feedbackSuccessTitle"),
        description: t("feedbackSuccessDesc"),
      })
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: t("language") === 'id' ? "Gagal mengirim feedback" : "Failed to submit feedback",
        description: err.message || (t("language") === 'id' ? "Terjadi kesalahan koneksi" : "A connection error occurred"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <TranslatedContent
      renderContent={({ t }) => (
        <div className="container max-w-2xl py-8 px-4 md:px-6">
          <PageHeader title={t("feedbackTitle")} description={t("feedbackDescription")} />

          {!isSuccess ? (
            <div className="mt-8 space-y-6 animate-fade-in">
              <ContentBlock>
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6 flex gap-3 items-start">
                  <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t("feedbackCallout")}
                  </p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <h3 className="font-semibold text-lg border-b pb-2 mb-4 text-foreground/80">
                      {t("feedbackSubheading")}
                    </h3>

                    {/* Nama & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("name")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("feedbackNamePlaceholder")} {...field} />
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
                            <FormLabel>{t("email")}</FormLabel>
                            <FormControl>
                              <Input placeholder={t("feedbackEmailPlaceholder")} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Domisili & Pekerjaan */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("feedbackCityLabel")}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-9" placeholder={t("feedbackCityPlaceholder")} {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("feedbackOccupationLabel")}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder={t("feedbackOccupationPlaceholder")} />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Mahasiswa/Pelajar">{t("language") === 'id' ? "Mahasiswa / Pelajar" : "Student"}</SelectItem>
                                <SelectItem value="Developer/Programmer">Developer / Programmer</SelectItem>
                                <SelectItem value="Guru/Dosen">{t("language") === 'id' ? "Guru / Dosen" : "Teacher / Lecturer"}</SelectItem>
                                <SelectItem value="Karyawan Swasta">{t("language") === 'id' ? "Karyawan Swasta" : "Private Employee"}</SelectItem>
                                <SelectItem value="Wirausaha">{t("language") === 'id' ? "Wirausaha" : "Entrepreneur"}</SelectItem>
                                <SelectItem value="Lainnya">{t("language") === 'id' ? "Lainnya" : "Other"}</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Custom Pekerjaan */}
                    {selectedOccupation === "Lainnya" && (
                      <FormField
                        control={form.control}
                        name="customOccupation"
                        render={({ field }) => (
                          <FormItem className="animate-slide-down">
                            <FormLabel>{t("feedbackCustomOccupationLabel")}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-9" placeholder={t("feedbackCustomOccupationPlaceholder")} {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    {/* Topik Sesi */}
                    <FormField
                      control={form.control}
                      name="topic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("feedbackTopicLabel")}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t("feedbackTopicPlaceholder")} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Fullstack Web Development dengan AI">Fullstack Web Development dengan AI</SelectItem>
                              <SelectItem value="AI untuk Developer">AI untuk Developer</SelectItem>
                              <SelectItem value="Prompt Engineering untuk Developer">Prompt Engineering untuk Developer</SelectItem>
                              <SelectItem value="Personal Branding untuk Developer">Personal Branding untuk Developer</SelectItem>
                              <SelectItem value="Mentoring Pemrograman">Mentoring Pemrograman</SelectItem>
                              <SelectItem value="Lainnya">{t("language") === 'id' ? "Lainnya (Masukkan manual)" : "Other (Manual entry)"}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Custom Topik */}
                    {selectedTopic === "Lainnya" && (
                      <FormField
                        control={form.control}
                        name="customTopic"
                        render={({ field }) => (
                          <FormItem className="animate-slide-down">
                            <FormLabel>{t("feedbackCustomTopicLabel")}</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <BookOpen className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                <Input className="pl-9" placeholder={t("feedbackCustomTopicPlaceholder")} {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <div className="border-t pt-5 mt-4 space-y-4">
                      <h4 className="font-semibold text-sm text-foreground/70 uppercase tracking-wider mb-2">Evaluasi Sesi</h4>

                      {/* Ratings */}
                      <FormField
                        control={form.control}
                        name="ratingContent"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <StarRating
                                value={field.value}
                                onChange={field.onChange}
                                label={t("feedbackContentRating")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ratingDelivery"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <StarRating
                                value={field.value}
                                onChange={field.onChange}
                                label={t("feedbackDeliveryRating")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ratingOverall"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <StarRating
                                value={field.value}
                                onChange={field.onChange}
                                label={t("feedbackOverallRating")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Kesan & Pesan */}
                    <FormField
                      control={form.control}
                      name="impression"
                      render={({ field }) => (
                        <FormItem className="border-t pt-4">
                          <FormLabel>{t("feedbackImpressionLabel")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("feedbackImpressionPlaceholder")}
                              className="min-h-24 resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden group">
                      <span className="flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>{t("k_7b0fee4d")}</>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            {t("feedbackSubmitBtn")}
                          </>
                        )}
                      </span>
                    </Button>
                  </form>
                </Form>
              </ContentBlock>
            </div>
          ) : (
            // Success Card with CTA
            <div className="mt-8 animate-fade-in">
              <ContentBlock>
                <div className="text-center py-8 px-4 flex flex-col items-center">
                  <div className="h-16 w-16 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4 animate-bounce">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  
                  <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">
                    {t("feedbackSuccessTitle")}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm max-w-md mb-8 leading-relaxed">
                    {t("feedbackSuccessDesc")}
                  </p>

                  <div className="w-full border-t pt-6 max-w-sm">
                    <p className="text-sm font-semibold text-foreground/80 mb-4 uppercase tracking-wider">
                      {t("language") === 'id' ? "Mari Terhubung!" : "Let's Connect!"}
                    </p>

                    <div className="flex flex-col gap-3">
                      <Button variant="outline" className="w-full justify-start hover:border-primary/50 group" asChild>
                        <Link href="https://www.linkedin.com/in/adityafakhrii" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-3 h-5 w-5 text-sky-700 group-hover:scale-110 transition-transform" />
                          <span className="flex-1 text-left">{t("feedbackConnectLinkedIn")}</span>
                        </Link>
                      </Button>

                      <Button variant="outline" className="w-full justify-start hover:border-primary/50 group" asChild>
                        <Link href="https://instagram.com/adityafakhrii" target="_blank" rel="noopener noreferrer">
                          <Instagram className="mr-3 h-5 w-5 text-pink-600 group-hover:scale-110 transition-transform" />
                          <span className="flex-1 text-left">{t("feedbackFollowInstagram")}</span>
                        </Link>
                      </Button>

                      <Button variant="outline" className="w-full justify-start hover:border-primary/50 group" asChild>
                        <Link href="https://x.com/adityafakhrii" target="_blank" rel="noopener noreferrer">
                          <Twitter className="mr-3 h-5 w-5 text-foreground group-hover:scale-110 transition-transform" />
                          <span className="flex-1 text-left">{t("feedbackFollowTwitter")}</span>
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <Button variant="ghost" onClick={() => setIsSuccess(false)} className="mt-8 text-xs text-muted-foreground">
                    {t("language") === 'id' ? "Kirim tanggapan lain" : "Submit another response"}
                  </Button>
                </div>
              </ContentBlock>
            </div>
          )}
        </div>
      )}
    />
  )
}
