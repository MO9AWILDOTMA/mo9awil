import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServiceDetailPage } from "@/components/services/ServiceDetailPage"
import { getServicePage, getServiceParams } from "@/lib/service-pages"

export function generateStaticParams() {
  return getServiceParams()
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServicePage(params.slug)
  if (!service) return { title: "Service" }
  return { title: service.hero.title.fr, description: service.hero.subtitle.fr }
}

export default function ServiceRoute({ params }: { params: { slug: string } }) {
  const service = getServicePage(params.slug)
  if (!service) notFound()
  return <ServiceDetailPage service={service} />
}

