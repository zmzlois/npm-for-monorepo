import { siteConfig } from "@/config/site";

export const SiteFooter = () => {
    return (
        <footer className="bg-gray-800 text-white/80 text-sm text-center p-4">
            <p>
                Made by{" "}
                <a
                    href={siteConfig.links.twitter}
                    className="underline underline-offset-4 decoration-muted-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @zmzlois
                </a>.{"  "} Built on a Sunday powered by <a href="https://ui.shad.cn"className="underline underline-offset-4 decoration-muted-foreground" target="_blank" rel="noopener noreferrer">Shadcn</a>.{" "} Copyright <a href="https://npmjs.com" className="underline underline-offset-4 decoration-muted-foreground" target="_blank" rel="noopener noreferrer">npm©</a> 
            </p>
            
        </footer>
    );
}