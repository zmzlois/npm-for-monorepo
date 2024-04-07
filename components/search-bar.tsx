"use client"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "@/lib/form-schema"
import type { NextResponse } from "next/server"
import { cn } from "@/lib/utils"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { usePathname, useRouter } from "next/navigation"
import { toast} from "sonner"


export const SearchBar = ({showDescription, onNav}: {showDescription: boolean, onNav: boolean}) => {

    const router = useRouter()
    const pathname = usePathname()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          content: "",
        },
      })
     
    
      async function onSubmit(values: z.infer<typeof formSchema>) {
      
        const content = form.getValues("content")?.replaceAll(" ", "\%20")

        router.push(`/search?result=${content}&page=0`)
       
       
       
      }
    return (
       
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex w-full space-x-8 sm:w-1/2", !onNav && "px-10")}>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="w-full">
            
              <FormControl>
                <Input placeholder="package name..." {...field} />
              </FormControl>
             {showDescription && <FormDescription>
                Palms are sore with monorepos ? 
              </FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
       
    )
}