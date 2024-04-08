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
                </a>.{"  "} Copyright <a href="https://npmjs.com" className="underline underline-offset-4 decoration-muted-foreground" target="_blank" rel="noopener noreferrer">npm©</a> 
            </p>
            
        </footer>
    );
}