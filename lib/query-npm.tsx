"use server";
import { useSearchParams } from "next/navigation";
import name from "all-the-package-names";
export default async function queryResult(search: string, pageNumber?: number) {
  let result: string[] = [];

  let page = 0;

  const query = search.replaceAll("%20", " ");

  if (pageNumber) page = pageNumber;

  result = search
    ? await Object.values(name).filter(
        (name) => name.includes(query) && name.length < 40,
      )
    : await Object.values(name);

  return result;
}
