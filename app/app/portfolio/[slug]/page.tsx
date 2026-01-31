import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyPage } from "@/components/portfolio/CaseStudyPage"
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/portfolio"

export function generateStaticParams() {
  return getAllProjectSlugs()
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: "Case Study" }

  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription.fr,
  }
}

export default function PortfolioCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()
  return <CaseStudyPage project={project} />
}

