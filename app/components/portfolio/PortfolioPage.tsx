"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { PortfolioCategory, PortfolioProject } from "@/lib/portfolio"
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio"

type Filter = "all" | PortfolioCategory

function pickLocalized(project: PortfolioProject, lang: string) {
  const locale = lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
  return {
    description: project.shortDescription[locale],
    highlights: project.highlights.map((h) => h[locale]),
  }
}

function categoryLabelKey(category: PortfolioCategory) {
  const map: Record<PortfolioCategory, string> = {
    ecommerce: "portfolio.filters.ecommerce",
    corporate: "portfolio.filters.corporate",
    hospitality: "portfolio.filters.hospitality",
    professional: "portfolio.filters.professional",
  }
  return map[category]
}

export function PortfolioPage() {
  const { t, i18n } = useTranslation()
  const [filter, setFilter] = useState<Filter>("all")

  const filtered = useMemo(() => {
    if (filter === "all") return PORTFOLIO_PROJECTS
    return PORTFOLIO_PROJECTS.filter((p) => p.categories.includes(filter))
  }, [filter])

  const filters: Array<{ id: Filter; label: string }> = [
    { id: "all", label: t("portfolio.filters.all") },
    { id: "ecommerce", label: t("portfolio.filters.ecommerce") },
    { id: "corporate", label: t("portfolio.filters.corporate") },
    { id: "hospitality", label: t("portfolio.filters.hospitality") },
    { id: "professional", label: t("portfolio.filters.professional") },
  ]

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
              {t("portfolio.title")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t("portfolio.title")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("portfolio.subtitle")}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  filter === f.id
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white/70 dark:bg-white/10 dark:text-white border-gray-200/70 dark:border-white/10 hover:bg-white"
                }`}
                aria-pressed={filter === f.id}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => {
              const localized = pickLocalized(project, i18n.language)
              return (
                <motion.article
                  key={project.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border bg-card shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[16/10] bg-muted">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((c) => (
                        <Badge key={c} variant="secondary">
                          {t(categoryLabelKey(c))}
                        </Badge>
                      ))}
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{localized.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {localized.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="text-xs rounded-full border px-3 py-1 text-muted-foreground bg-background/50"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <Button asChild variant="outline" className="justify-between">
                        <a href={project.url} target="_blank" rel="noreferrer">
                          {t("portfolio.view_live")} <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button asChild className="justify-between bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                        <Link href={`/portfolio/${project.slug}`}>
                          {t("portfolio.view_case")} <span aria-hidden>→</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

