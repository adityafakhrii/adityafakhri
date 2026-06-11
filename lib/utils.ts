import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Translatable<T> = { id: T; en: T } | T;

export function getLocalized<T>(data: Translatable<T> | undefined, lang: string): T {
  if (data === undefined || data === null) return "" as any;
  if (typeof data === "object" && data !== null && ("id" in data || "en" in data)) {
    return (data as any)[lang] !== undefined ? (data as any)[lang] : (data as any).id;
  }
  return data as T;
}

