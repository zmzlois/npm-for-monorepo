import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Page() {
    return (
        <div className="flex justify-center flex-col gap-4 items-center h-[calc(100vh-20vh)]">
        <h1 className={cn("font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-br from-foreground/70 from-10% via-foreground  to-foreground/90 ", fontSans.variable)}>404</h1>
        <h2 className="font-bold text-2xl"> We searched far and wide...and found nothing 😢</h2>
        <p className="text-sm text-center">You can see the source code at <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">here</a> <br />If you have any suggestions on how to improve this project you can most possibly find me <a href={siteConfig.links.twitter} className="underline underline-offset-4">on twitter</a>.</p>
        </div>
    )
}