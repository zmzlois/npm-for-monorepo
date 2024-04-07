import Link from "next/link"

import { siteConfig } from "@/config/site"
import {  buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { SearchBar } from "./search-bar"
import { AddArgument } from "./add-argument"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center sm:justify-between ">
        <MainNav items={siteConfig.mainNav} />
       <SearchBar />
      
        <div className="flex-1 items-center justify-end space-x-4 flex">
           <AddArgument />
           
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="size-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
