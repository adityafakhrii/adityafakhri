import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
      <div className="relative flex items-center justify-center w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute w-16 h-16 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
        <Loader2 className="w-6 h-6 text-primary animate-pulse" />
      </div>
      <h2 className="text-xl font-medium text-foreground tracking-tight">Memuat Halaman...</h2>
      <p className="text-sm text-muted-foreground max-w-sm text-center">
        Mohon tunggu sebentar selagi kami menyiapkan konten untuk Anda.
      </p>
    </div>
  )
}
