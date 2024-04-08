"use client";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { SearchBar } from "@/components/fields/search-bar";
import { Toaster } from "@/components/ui/sonner";

export default function IndexPage() {
  return (
    <section className=" container mx-auto flex  h-[calc(100vh-24vh)] flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-cetner text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Find any npm packages for monorepo
          <br className="hidden sm:inline" />
        </h1>{" "}
        <code>pnpm add @vercel/analytics --filter web</code>
      </div>
      <SearchBar showDescription={true} onNav={false} />
    </section>
  );
}
