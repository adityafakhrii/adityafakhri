"use client"

import { useState, useCallback, useEffect } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RamadhanGalleryProps {
  images: string[]
}

export function RamadhanGallery({ images }: RamadhanGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handlePrevious = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev as number) - 1))
    setZoomLevel(1)
  }, [selectedIndex, images.length])

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev as number) + 1))
    setZoomLevel(1)
  }, [selectedIndex, images.length])

  const handleClose = useCallback(() => {
    setSelectedIndex(null)
    setZoomLevel(1)
  }, [])

  const handleZoomIn = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setZoomLevel(prev => Math.min(prev + 0.5, 3))
  }, [])

  const handleZoomOut = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
    setZoomLevel(prev => Math.max(prev - 0.5, 1))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      
      if (e.key === "ArrowLeft") handlePrevious()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") handleClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, handlePrevious, handleNext, handleClose])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedIndex])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="relative aspect-video rounded-lg overflow-hidden border bg-muted/30 group cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image 
              src={src} 
              alt={`Dokumentasi RamadhanJS ${index + 1}`} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors opacity-0 group-hover:opacity-100">
              <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                Lihat
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {mounted && selectedIndex !== null && createPortal(
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 z-50 flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
            >
              <ZoomOut className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3}
            >
              <ZoomIn className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={handleClose}
            >
              <X className="h-8 w-8" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full h-12 w-12 z-50 hidden md:flex"
            onClick={(e) => {
              e.stopPropagation()
              handlePrevious()
            }}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 rounded-full h-12 w-12 z-50 hidden md:flex"
            onClick={(e) => {
              e.stopPropagation()
              handleNext()
            }}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="relative w-full h-full transition-transform duration-200 ease-out"
              style={{ 
                transform: `scale(${zoomLevel})`,
                cursor: zoomLevel > 1 ? 'grab' : 'default'
              }}
            >
              <Image
                src={images[selectedIndex]}
                alt={`Dokumentasi Full ${selectedIndex + 1}`}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Footer Info */}
          <div className="absolute bottom-4 left-0 right-0 text-center text-white/80 z-50 pointer-events-none">
            <span className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm text-sm">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
