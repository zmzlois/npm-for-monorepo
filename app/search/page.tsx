"use client"

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import { toast } from "sonner"
import name from "all-the-package-names"
import { Button } from "@/components/ui/button"
const fetchData = async (search?: string) => {
    const url = `https://www.npmjs.com/search?q=${search}&page=0&perPage=20`

 const result = await fetch(`http`)

}
export default function Page() {
    const searchParams = useSearchParams()

    const search = searchParams.get("result") as undefined | string
    const pageNumber = searchParams.get("page")

    let page = 0

    if (!pageNumber) page = 0
    else page = parseInt(pageNumber)
    const result = Object.values(name).filter((name) => name.includes(search)).slice(page, page+20)

    function copy() {
        const text = document.getElementById("input")!.innerText

        if (!text) {
            console.log("We can't copy empty text")
            toast.error("We can't copy empty text")
            return
        }
        navigator.clipboard.writeText(text!)
        console.log("Copied to clipboard")
        toast.success("Copied to clipboard")
    }

    useEffect(() => {

        const code = document.getElementById("code")

        if (!code) {
            console.log("We can't find code")
            return
        }
        
        code.addEventListener("click", copy)

        return () => {
            document.removeEventListener("click", copy)
        }
    
    })

   
    // const { isPending, error, data, isFetching } = useQuery({queryKey: ["search", search], queryFn: () => fetchData(search)})

    // if (isPending) {
    //     return <div>Loading...</div>
    // }

    // if (error) {
    //     toast.error("An error occurred, please try again later")
    // }
    

    return (
    
        <div className="flex container mx-auto flex-col items-start px-20 py-5">
            {
            result.map((item, index) =>
             <div key={index} className="flex w-full content-center items-center justify-between border-b py-8 ">
               <a href={`https://www.npmjs.com/package/${item}`} className="transition-transform hover:underline hover:underline-offset-4 duration-200"> 
               {item}
                </a>
                <code id="code" onClick={() => copy} className="flex gap-4 text-center content-center items-center text-sm">
                    <span id="input">pnpm add {item} --filter web</span>
                <Button onClick={copy} className="ml-2" variant={"outline"}>Copy</Button>
                </code>
            </div>)}
            
            </div>
      
    )
}