import type { Metadata } from "next"

import { BlogIndexPage } from "@/components/blog/BlogIndexPage"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles sur le web, le marketing et l’automatisation IA par Mo9awil.",
}

export default function Blog() {
  return <BlogIndexPage />
}

