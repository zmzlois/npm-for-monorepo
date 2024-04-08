
import { Skeleton } from "@/components/ui/skeleton"

const array = 20
export function LoadingState() {
  
  return (
    <>
   {Array.from({ length: array }).map((_, index) => (
    <div key={index} className="flex w-full content-center items-center justify-between border-b py-8 container mx-auto">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    ))}
    </>
  )
}
