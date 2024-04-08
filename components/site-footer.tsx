import { siteConfig } from "@/config/site";

export const SiteFooter = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-sm text-white/80">
      <p>
        Made by{" "}
        <a
          href={siteConfig.links.twitter}
          className="underline decoration-muted-foreground underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          @zmzlois
        </a>
        .{"  "} Built on a Sunday powered by{" "}
        <a
          href="https://ui.shad.cn"
          className="underline decoration-muted-foreground underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shadcn
        </a>
        . Copyright{" "}
        <a
          href="https://npmjs.com"
          className="underline decoration-muted-foreground underline-offset-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          npm©
        </a>
      </p>
    </footer>
  );
};
