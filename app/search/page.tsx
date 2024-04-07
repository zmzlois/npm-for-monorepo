"use client"
import { useEffect, useState } from "react";
import queryResult from "@/lib/query-npm";
import { useSearchParams } from "next/navigation";
import { usePkgStore } from "@/lib/zustand-store";
import { ClickToCopy } from "@/components/click-to-copy";

export default function Page() {

    const [isOpen, setIsOpen] = useState(false);
    const searchParams = useSearchParams();
 
    const search = searchParams.get("result") ?? "" ;
   
     const page = searchParams.get("page") ?? 0;
 
     const pageNumber = parseInt(page as string);
 
     const [result, setResult] = useState<string[]>([]);

     const args = usePkgStore((state: any) => {
        return {
          name: state.packageManager,
          command: state.command,
          flag: state.flag,
          arg: state.arg,
        };
      
     })
 
     useEffect(() => {
         queryResult(search, pageNumber)
             .then((res) => setResult(res))
             .catch((error) => console.log(error));
        
     }, [])
    return (
     
        <ul className="container mx-auto flex flex-col items-start px-20 py-5">
           {result.length > 0 && result.map((item, index) => (
            <li
              key={index}
              className="flex w-full content-center items-center justify-between border-b py-8 "
            >
              <a
                href={`https://www.npmjs.com/package/${item}`}
                className=" transition-all duration-300 hover:underline hover:underline-offset-4"
              >
                {item}
              </a>
             <ClickToCopy props={{packageName: args.name, command: args.command, item: item, flag: args.flag, arg: args.arg}} />
            </li>
          ))}
        </ul>
    
    );
  }

