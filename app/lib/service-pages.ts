export type Locale = "fr" | "ar" | "en"
export type Localized = Record<Locale, string>

export type ServiceSlug = "web-app-development" | "branding-design" | "digital-marketing"
export type ServiceId = "web_app_development" | "branding_design" | "digital_marketing"

export type ServicePageData = {
  slug: ServiceSlug
  id: ServiceId
  hero: {
    title: Localized
    subtitle: Localized
  }
  sections: Array<{
    heading: Localized
    bullets: Record<Locale, string[]>
  }>
  technologies: string[]
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: "web-app-development",
    id: "web_app_development",
    hero: {
      title: {
        fr: "Création de Sites Web & Apps",
        ar: "تطوير مواقع وتطبيقات",
        en: "Websites & Apps",
      },
      subtitle: {
        fr: "Des expériences rapides, modernes et évolutives — du site vitrine à la plateforme e‑commerce.",
        ar: "تجارب سريعة وحديثة وقابلة للتوسع — من موقع تعريفي إلى منصة تجارة إلكترونية.",
        en: "Fast, modern, scalable experiences — from landing pages to e-commerce platforms.",
      },
    },
    sections: [
      {
        heading: { fr: "Ce que nous livrons", ar: "ماذا نقدم", en: "What we deliver" },
        bullets: {
          fr: [
            "Sites vitrine et corporate (multi-pages)",
            "E-commerce (catalogue, panier, paiement)",
            "Applications web & dashboards (CRM, back-office)",
            "PWA (Progressive Web Apps) et performance mobile-first",
            "UI/UX design + responsive sur tous appareils",
          ],
          ar: [
            "مواقع تعريفية ومواقع شركات",
            "تجارة إلكترونية (كتالوج، سلة، دفع)",
            "تطبيقات ويب ولوحات تحكم",
            "PWA وأداء موبايل أولاً",
            "تصميم UI/UX + توافق مع جميع الأجهزة",
          ],
          en: [
            "Corporate and marketing websites",
            "E-commerce (catalog, cart, payments)",
            "Web apps & dashboards",
            "PWA and mobile-first performance",
            "UI/UX + responsive across devices",
          ],
        },
      },
      {
        heading: { fr: "Approche", ar: "المنهج", en: "Approach" },
        bullets: {
          fr: [
            "Ateliers de cadrage (objectifs, cibles, contenu)",
            "Design system + composants réutilisables",
            "Développement Next.js/React + TypeScript",
            "SEO on-page + bonnes pratiques performance",
          ],
          ar: ["جلسات تحديد النطاق", "نظام تصميم ومكونات", "تطوير Next.js/React + TypeScript", "SEO وأداء"],
          en: ["Scoping workshops", "Design system", "Next.js/React + TypeScript", "SEO + performance best practices"],
        },
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
  {
    slug: "branding-design",
    id: "branding_design",
    hero: {
      title: { fr: "Image de Marque et Design", ar: "الهوية البصرية والتصميم", en: "Branding & Design" },
      subtitle: {
        fr: "Une identité claire, cohérente et mémorable — pour gagner en confiance et en conversion.",
        ar: "هوية واضحة ومتناسقة ومميزة — لبناء الثقة وتحسين التحويل.",
        en: "A clear, consistent, memorable identity — built for trust and conversion.",
      },
    },
    sections: [
      {
        heading: { fr: "Branding", ar: "العلامة التجارية", en: "Branding" },
        bullets: {
          fr: ["Logo & variations", "Palette couleurs + typographies", "Guidelines / charte graphique", "Templates (decks, docs, posts)"],
          ar: ["شعار وتفرعات", "ألوان وخطوط", "دليل هوية", "قوالب للعرض والمستندات"],
          en: ["Logo + variations", "Colors + typography", "Brand guidelines", "Templates (decks, docs, social)"],
        },
      },
      {
        heading: { fr: "Design produit & marketing", ar: "تصميم المنتج والتسويق", en: "Product & marketing design" },
        bullets: {
          fr: ["UI/UX (wireframes → maquettes)", "Assets réseaux sociaux", "Supports print (si besoin)", "Cohérence cross‑canal"],
          ar: ["UI/UX", "تصاميم للشبكات الاجتماعية", "مطبوعات عند الحاجة", "تناسق عبر القنوات"],
          en: ["UI/UX (wireframes → UI)", "Social media assets", "Print collateral (if needed)", "Cross-channel consistency"],
        },
      },
    ],
    technologies: ["Figma", "Design Systems", "UI/UX", "Brand Guidelines"],
  },
  {
    slug: "digital-marketing",
    id: "digital_marketing",
    hero: {
      title: { fr: "Marketing Digital", ar: "التسويق الرقمي", en: "Digital Marketing" },
      subtitle: {
        fr: "Acquisition, contenu et croissance — avec un focus ROI et une exécution structurée.",
        ar: "اكتساب ومحتوى ونمو — مع تركيز على العائد والتنفيذ المنظم.",
        en: "Acquisition, content and growth — ROI-focused with structured execution.",
      },
    },
    sections: [
      {
        heading: { fr: "Ce que nous faisons", ar: "ماذا نفعل", en: "What we do" },
        bullets: {
          fr: [
            "Gestion des Réseaux Sociaux (stratégie, contenus, calendrier)",
            "SEO (audit, optimisation on-page, contenu)",
            "Campagnes Google Ads & Facebook Ads",
            "Email marketing (newsletters, automation)",
            "Coordination influence (si pertinent)",
          ],
          ar: ["إدارة الشبكات الاجتماعية", "SEO", "إعلانات Google/Facebook", "تسويق بالبريد", "تنسيق مؤثرين عند الحاجة"],
          en: ["Social media management", "SEO", "Google/Facebook Ads", "Email marketing", "Influencer coordination (optional)"],
        },
      },
      {
        heading: { fr: "Mesure & itération", ar: "القياس والتحسين", en: "Measurement & iteration" },
        bullets: {
          fr: ["Tracking & analytics", "Reporting simple", "Optimisations continues (créa, ciblage, landing pages)"],
          ar: ["تتبع وتحليلات", "تقارير", "تحسين مستمر"],
          en: ["Tracking & analytics", "Simple reporting", "Continuous optimization"],
        },
      },
    ],
    technologies: ["GA4", "SEO", "Ads", "Content Strategy"],
  },
]

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}

export function getServiceParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }))
}

