import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden border border-border/60">
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <Skeleton className="h-6 w-2/3 rounded-md" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-4/5 rounded-md" />
        <div className="flex flex-wrap gap-1.5 pt-2">
          <Skeleton className="h-5 w-14 rounded-full" />
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export function BlogCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full border border-border/60">
      <Skeleton className="h-48 w-full rounded-none" />
      <CardContent className="p-4 space-y-3">
        <Skeleton className="h-5 w-20 rounded-full" />
        <Skeleton className="h-6 w-4/5 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-3/4 rounded-md" />
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Skeleton className="h-4 w-24 rounded-md" />
        <Skeleton className="h-4 w-16 rounded-md" />
      </CardFooter>
    </Card>
  )
}

export function GridSkeletonGrid({ count = 6, type = "project" }: { count?: number; type?: "project" | "blog" }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${type === "project" ? "lg:grid-cols-3" : ""} gap-6`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {type === "project" ? <ProjectCardSkeleton /> : <BlogCardSkeleton />}
        </div>
      ))}
    </div>
  )
}
