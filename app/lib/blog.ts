export type Locale = "fr" | "ar" | "en"
export type Localized = Record<Locale, string>

export type BlogPost = {
  slug: string
  dateISO: string
  title: Localized
  excerpt: Localized
  content: Record<Locale, string[]>
  tags: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "performance-web-lighthouse",
    dateISO: "2026-01-31",
    title: {
      fr: "Performance Web: comment viser un Lighthouse > 90",
      ar: "أداء الويب: كيف تصل إلى Lighthouse أكبر من 90",
      en: "Web performance: how to target Lighthouse > 90",
    },
    excerpt: {
      fr: "Les bases (images, JS, fonts, cache) et une checklist simple pour accélérer votre site.",
      ar: "الأساسيات (الصور، JS، الخطوط، الكاش) وقائمة بسيطة لتسريع موقعك.",
      en: "Basics (images, JS, fonts, caching) and a simple speed checklist.",
    },
    content: {
      fr: [
        "La performance n’est pas un ‘nice-to-have’ : elle impacte le SEO, la conversion et l’expérience mobile.",
        "Checklist rapide : images optimisées, JS réduit, composants réutilisables, cache, et suivi via analytics.",
        "Chez Mo9awil, on vise une expérience rapide et stable, avec une structure scalable (Next.js + Tailwind).",
      ],
      ar: [
        "الأداء ليس رفاهية: يؤثر على SEO والتحويل وتجربة الهاتف.",
        "قائمة سريعة: تحسين الصور، تقليل JS، مكونات قابلة لإعادة الاستخدام، كاش، وتتبع عبر التحليلات.",
        "في مو9اول نركز على تجربة سريعة ومستقرة ببنية قابلة للتوسع.",
      ],
      en: [
        "Performance is not optional: it impacts SEO, conversion, and mobile UX.",
        "Quick checklist: optimize images, reduce JS, reuse components, caching, and analytics.",
        "At Mo9awil, we build fast, stable, scalable experiences (Next.js + Tailwind).",
      ],
    },
    tags: ["Performance", "SEO", "Next.js"],
  },
  {
    slug: "seo-local-maroc",
    dateISO: "2026-01-31",
    title: {
      fr: "SEO au Maroc: 5 actions simples qui comptent",
      ar: "SEO في المغرب: 5 خطوات بسيطة مهمة",
      en: "SEO in Morocco: 5 simple actions that matter",
    },
    excerpt: {
      fr: "Structure, contenu, vitesse, schéma et pages locales: l’essentiel pour être trouvé.",
      ar: "الهيكلة، المحتوى، السرعة، البيانات المنظمة، والصفحات المحلية: الأهم للظهور.",
      en: "Structure, content, speed, schema, and local pages: the essentials.",
    },
    content: {
      fr: [
        "Un bon SEO commence par une architecture claire (pages, titres, maillage interne).",
        "Ajoutez des pages locales, optimisez vos métadonnées, et surveillez vos performances.",
      ],
      ar: ["SEO جيد يبدأ بهيكل واضح (صفحات، عناوين، روابط داخلية).", "أضف صفحات محلية، حسّن الميتاداتا، وراقب الأداء."],
      en: ["Good SEO starts with a clear architecture (pages, headings, internal links).", "Add local pages, optimize metadata, and monitor performance."],
    },
    tags: ["SEO", "Local"],
  },
  {
    slug: "automatisation-ia-premiers-cas",
    dateISO: "2026-01-31",
    title: {
      fr: "Automatisation IA: par où commencer ?",
      ar: "أتمتة الذكاء الاصطناعي: من أين تبدأ؟",
      en: "AI automation: where to start?",
    },
    excerpt: {
      fr: "Support client, devis, reporting, contenu: choisissez un cas simple et mesurez l’impact.",
      ar: "الدعم، عروض الأسعار، التقارير، المحتوى: اختر حالة بسيطة وقِس الأثر.",
      en: "Support, quotes, reporting, content: pick a simple use case and measure impact.",
    },
    content: {
      fr: [
        "Le meilleur premier cas d’usage IA est celui qui fait gagner du temps chaque semaine.",
        "Commencez petit, automatisez, mesurez, puis élargissez. Pour des solutions spécialisées: agents.mo9awil.ma.",
      ],
      ar: ["أفضل حالة أولى هي ما يوفر وقتاً أسبوعياً.", "ابدأ صغيراً، قم بالأتمتة، قِس، ثم توسع. للحلول المتخصصة: agents.mo9awil.ma."],
      en: ["The best first AI use case is the one that saves time every week.", "Start small, automate, measure, then expand. See: agents.mo9awil.ma."],
    },
    tags: ["AI", "Automation"],
  },
]

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug)
}

export function getAllPostSlugs() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

