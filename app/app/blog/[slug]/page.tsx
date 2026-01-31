import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogPostPage } from "@/components/blog/BlogPostPage"
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog"

export function generateStaticParams() {
  return getAllPostSlugs()
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: "Blog" }
  return { title: post.title.fr, description: post.excerpt.fr }
}

export default function BlogPostRoute({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()
  return <BlogPostPage post={post} />
}

