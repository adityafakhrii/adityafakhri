"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="space-y-4 max-w-md w-full">
        <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="relative flex items-center justify-center bg-background border-4 border-muted rounded-3xl w-24 h-24 transform rotate-12 shadow-lg">
            <Search className="w-12 h-12 text-primary/50" />
            <div className="absolute -bottom-4 -right-2 bg-destructive/10 text-destructive text-xs font-bold px-2 py-1 rounded-md transform -rotate-12">
              404
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight mt-8">Oops! Halaman Hilang</h1>
        
        <p className="text-muted-foreground text-lg">
          Sepertinya halaman yang Anda cari tidak dapat ditemukan, telah dipindahkan, atau tidak pernah ada.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-6">
          <Button asChild variant="default" className="w-full sm:w-auto">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full sm:w-auto">
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </button>
          </Button>
        </div>
      </div>
    </div>
  )
}
