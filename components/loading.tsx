"use client"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
const array = 20
export function LoadingState() {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/not-found")
        }, 5000)
    })
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
