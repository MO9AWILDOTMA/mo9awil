"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { BLOG_POSTS } from "@/lib/blog"

function pickLocale(lang: string) {
  return lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
}

export function BlogIndexPage() {
  const { t, i18n } = useTranslation()
  const locale = pickLocale(i18n.language)

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            {t("nav.blog")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t("nav.blog")}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            {locale === "fr"
              ? "Articles courts sur le web, le marketing et l’automatisation."
              : locale === "ar"
                ? "مقالات قصيرة عن الويب والتسويق والأتمتة."
                : "Short posts about web, marketing and automation."}
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="rounded-2xl border bg-card p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title[locale]}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{post.excerpt[locale]}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs rounded-full border px-3 py-1 text-muted-foreground bg-background/50">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

