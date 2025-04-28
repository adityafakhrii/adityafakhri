"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ContentBlockProps {
  title?: string
  children: React.ReactNode
  collapsible?: boolean
  defaultOpen?: boolean
  className?: string
}

export function ContentBlock({
  title,
  children,
  collapsible = false,
  defaultOpen = true,
  className,
}: ContentBlockProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className={cn("rounded-lg border p-6", className)}>
      {title && (
      <div
        className={cn(
        "flex items-center justify-center mb-4 font-medium text-lg",
        collapsible && "cursor-pointer"
        )}
        onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
      >
        {collapsible && (
        <div className="mr-2">
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </div>
        )}
        <h2>{title}</h2>
      </div>
      )}
      {(!collapsible || isOpen) && <div className="space-y-4">{children}</div>}
    </div>
  )
}
