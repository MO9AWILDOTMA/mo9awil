import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PolicyPage } from "@/components/policies/PolicyPage"
import { getPolicy, getPolicyParams } from "@/lib/policies"

export function generateStaticParams() {
  return getPolicyParams()
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const policy = getPolicy(params.slug)
  if (!policy) return { title: "Policy" }
  return { title: policy.title.fr, description: policy.intro.fr[0] }
}

export default function PolicyRoute({ params }: { params: { slug: string } }) {
  const policy = getPolicy(params.slug)
  if (!policy) notFound()
  return <PolicyPage policy={policy} />
}

