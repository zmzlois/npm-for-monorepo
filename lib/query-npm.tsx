"use server"
import { useSearchParams } from "next/navigation";
import name from "all-the-package-names";
export default async function queryResult(search: string, pageNumber?: number) {

    let result: string[] = []

    let page = 0;

    console.log("search", search);
    if (pageNumber) page = pageNumber;

    result = search
      ? await Object.values(name)
          .filter((name) => name.includes(search) && name.length < 40)
          .slice(page, page + 20)
      : await Object.values(name).slice(page, page + 20);
  
   
    return result
}