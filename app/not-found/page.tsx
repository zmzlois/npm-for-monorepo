import { siteConfig } from "@/config/site";
import { fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <div className="flex h-[calc(100vh-20vh)] flex-col items-center justify-center gap-4">
      <h1
        className={cn(
          "bg-gradient-to-br from-foreground/70 from-10% via-foreground to-foreground/90 bg-clip-text text-8xl font-bold  text-transparent ",
          fontSans.variable,
        )}
      >
        404
      </h1>
      <h2 className="text-2xl font-bold">
        {" "}
        We searched far and wide...and found nothing 😢 or you can try to change
        your searched package
      </h2>
      <p className="text-center text-sm">
        You can see the source code at{" "}
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          here
        </a>{" "}
        <br />
        If you have any suggestions on how to improve this project you can most
        possibly find me{" "}
        <a
          href={siteConfig.links.twitter}
          className="underline underline-offset-4"
        >
          on twitter
        </a>
        .
      </p>
    </div>
  );
}
