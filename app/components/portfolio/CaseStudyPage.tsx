"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { PortfolioCategory, PortfolioProject } from "@/lib/portfolio"

function categoryLabelKey(category: PortfolioCategory) {
  const map: Record<PortfolioCategory, string> = {
    ecommerce: "portfolio.filters.ecommerce",
    corporate: "portfolio.filters.corporate",
    hospitality: "portfolio.filters.hospitality",
    professional: "portfolio.filters.professional",
  }
  return map[category]
}

function pickLocale(lang: string) {
  return lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
}

export function CaseStudyPage({ project }: { project: PortfolioProject }) {
  const { t, i18n } = useTranslation()
  const locale = pickLocale(i18n.language)

  const screenshots = project.screenshots.length ? project.screenshots : [{ src: project.coverImage, alt: { fr: project.title, ar: project.title, en: project.title } }]

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/portfolio" className="text-sm text-blue-700 dark:text-blue-200 hover:underline">
              ← {t("portfolio.title")}
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.categories.map((c) => (
                  <Badge key={c} variant="secondary">
                    {t(categoryLabelKey(c))}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">{project.shortDescription[locale]}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="justify-between">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {t("portfolio.view_live")} <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <Link href="/contact">{t("nav.contact")}</Link>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.highlights.map((h, i) => (
                  <span key={i} className="text-xs rounded-full border px-3 py-1 text-muted-foreground bg-background/50">
                    {h[locale]}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border bg-muted shadow-sm">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-10">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 grid gap-8">
              <article className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {locale === "fr" ? "Contexte" : locale === "ar" ? "الخلفية" : "Background"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.background[locale]}</p>
              </article>

              <article className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {locale === "fr" ? "Challenge" : locale === "ar" ? "التحدي" : "Challenge"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.challenge[locale]}</p>
              </article>

              <article className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {locale === "fr" ? "Solution" : locale === "ar" ? "الحل" : "Solution"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">{project.caseStudy.solution[locale]}</p>
              </article>

              <article className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {locale === "fr" ? "Fonctionnalités clés" : locale === "ar" ? "الميزات الأساسية" : "Key features"}
                </h2>
                <ul className="grid gap-2 text-gray-700 dark:text-gray-200">
                  {project.caseStudy.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden>✅</span>
                      <span>{f[locale]}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {locale === "fr" ? "Technologies" : locale === "ar" ? "التقنيات" : "Technologies"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.caseStudy.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>

              {project.caseStudy.results?.length ? (
                <article className="rounded-2xl border bg-card p-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {locale === "fr" ? "Résultats" : locale === "ar" ? "النتائج" : "Results"}
                  </h2>
                  <ul className="grid gap-2 text-gray-700 dark:text-gray-200">
                    {project.caseStudy.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span aria-hidden>📈</span>
                        <span>{r[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ) : null}
            </div>

            <aside className="grid gap-6">
              <article className="rounded-2xl border bg-card p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {locale === "fr" ? "Tech stack" : locale === "ar" ? "التقنيات" : "Tech stack"}
                </h3>
                <ul className="grid gap-2 text-sm text-gray-700 dark:text-gray-200">
                  {project.techStack.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-2xl border bg-card p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {locale === "fr" ? "Liens" : locale === "ar" ? "روابط" : "Links"}
                </h3>
                <div className="grid gap-3">
                  <Button asChild variant="outline" className="justify-between">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {t("portfolio.view_live")} <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="justify-between bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Link href="/contact">{t("cta.button")} →</Link>
                  </Button>
                </div>
              </article>
            </aside>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === "fr" ? "Captures" : locale === "ar" ? "لقطات" : "Screenshots"}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((s, i) => (
                <div key={i} className="relative aspect-[16/10] rounded-2xl overflow-hidden border bg-muted">
                  <Image
                    src={s.src}
                    alt={s.alt[locale]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

