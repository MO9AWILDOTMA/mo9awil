export type Locale = "fr" | "ar" | "en"

export type LocalizedString = Record<Locale, string>

export type PortfolioCategory = "ecommerce" | "corporate" | "hospitality" | "professional"

export type PortfolioProject = {
  slug: string
  title: string
  url: string
  categories: PortfolioCategory[]
  coverImage: string
  shortDescription: LocalizedString
  techStack: string[]
  highlights: LocalizedString[]
  caseStudy: {
    background: LocalizedString
    challenge: LocalizedString
    solution: LocalizedString
    keyFeatures: LocalizedString[]
    technologies: string[]
    results?: LocalizedString[]
    testimonial?: LocalizedString
  }
  screenshots: Array<{ src: string; alt: LocalizedString }>
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "fiduciaireabdou",
    title: "FiduciaireAbdou",
    url: "https://www.fiduciaireabdou.ma/fr",
    categories: ["corporate", "professional"],
    coverImage: "/portfolio/fiduciaireabdou-cover.svg",
    shortDescription: {
      fr: "Site corporate bilingue (FR/AR) pour un cabinet comptable — design pro, SEO, prise de rendez‑vous.",
      ar: "موقع مؤسسي ثنائي اللغة (FR/AR) لمكتب محاسبة — تصميم احترافي، SEO، وحجز مواعيد.",
      en: "Bilingual (FR/AR) corporate site for an accounting firm — professional design, SEO, booking.",
    },
    techStack: ["Next.js", "React", "TailwindCSS", "Responsive Design"],
    highlights: [
      { fr: "Branding complet + design mobile‑first", ar: "هوية كاملة + تصميم متجاوب", en: "Full branding + mobile-first" },
      { fr: "Support multilingue FR/AR", ar: "دعم لغتين FR/AR", en: "FR/AR multilingual" },
      { fr: "Pages de politiques intégrées", ar: "صفحات سياسات مدمجة", en: "Policy pages included" },
    ],
    caseStudy: {
      background: {
        fr: "FiduciaireAbdou est un cabinet d’expertise comptable qui souhaitait moderniser son image et faciliter la prise de contact.",
        ar: "FiduciaireAbdou مكتب محاسبة أراد تحديث صورته وتسهيل التواصل مع العملاء.",
        en: "FiduciaireAbdou needed a modern presence and smoother client inquiries.",
      },
      challenge: {
        fr: "Créer une vitrine professionnelle, rassurante, et optimisée pour la recherche, avec une expérience bilingue FR/AR.",
        ar: "إنشاء واجهة احترافية موثوقة ومحسّنة للبحث، مع تجربة ثنائية اللغة FR/AR.",
        en: "Build a professional, SEO-friendly bilingual (FR/AR) experience.",
      },
      solution: {
        fr: "Conception d’une interface moderne, structuration claire des services, mise en avant de l’équipe et intégration d’un système de prise de rendez‑vous.",
        ar: "تصميم واجهة حديثة مع تنظيم واضح للخدمات، إبراز الفريق، وإضافة نظام حجز المواعيد.",
        en: "Modern UI, clear service structure, team section, and appointment booking flow.",
      },
      keyFeatures: [
        {
          fr: "Design moderne et professionnel",
          ar: "تصميم حديث واحترافي",
          en: "Modern professional design",
        },
        { fr: "Prise de rendez‑vous", ar: "حجز المواعيد", en: "Appointment booking" },
        { fr: "Vitrine équipe + témoignages", ar: "عرض الفريق + شهادات", en: "Team showcase + testimonials" },
        { fr: "Multilingue FR/AR", ar: "ثنائي اللغة FR/AR", en: "FR/AR multilingual" },
        { fr: "Pages de politiques (Privacy, Legal, Terms)", ar: "صفحات السياسات", en: "Policy pages" },
      ],
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      results: [
        {
          fr: "Architecture claire, contenu structuré, et expérience mobile‑first.",
          ar: "هيكلة واضحة ومحتوى منظم وتجربة موبايل أولاً.",
          en: "Clear information architecture and mobile-first UX.",
        },
      ],
    },
    screenshots: [
      {
        src: "/portfolio/fiduciaireabdou-cover.svg",
        alt: {
          fr: "Aperçu du site FiduciaireAbdou",
          ar: "لقطة من موقع FiduciaireAbdou",
          en: "FiduciaireAbdou website preview",
        },
      },
    ],
  },
  {
    slug: "ak-technology",
    title: "AK Technology",
    url: "https://ak-technology.vercel.app/",
    categories: ["ecommerce"],
    coverImage: "/portfolio/ak-technology-cover.svg",
    shortDescription: {
      fr: "Plateforme e‑commerce B2B — catalogue, demande de devis (Google Sheets), multilingue FR/EN, dark mode.",
      ar: "منصة تجارة إلكترونية B2B — كتالوج، طلب عروض (Google Sheets)، متعددة اللغات FR/EN، ووضع داكن.",
      en: "B2B e-commerce platform — catalog, quote requests (Google Sheets), FR/EN, dark mode.",
    },
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Google Sheets API"],
    highlights: [
      { fr: "Fonctionnalités e‑commerce + services intégrés", ar: "خصائص متجر + خدمات", en: "E-commerce + services" },
      { fr: "Demande de devis connectée à Google Sheets", ar: "طلب عروض مرتبط بـ Google Sheets", en: "Quotes to Google Sheets" },
      { fr: "Multilingue + dark mode", ar: "متعدد اللغات + وضع داكن", en: "Multilingual + dark mode" },
    ],
    caseStudy: {
      background: {
        fr: "AK Technology vend du matériel IT et mobilier de bureau avec des services (installation, maintenance, SAV).",
        ar: "AK Technology تبيع معدات IT وأثاث مكتبي مع خدمات (تركيب، صيانة، خدمة ما بعد البيع).",
        en: "AK Technology offers IT equipment and office furniture with services.",
      },
      challenge: {
        fr: "Construire une expérience e‑commerce claire, adaptée au B2B, avec un parcours de demande de devis efficace.",
        ar: "بناء تجربة متجر واضحة مناسبة لـ B2B مع مسار طلب عروض فعّال.",
        en: "Deliver a B2B-friendly shopping and quote-request experience.",
      },
      solution: {
        fr: "Catalogue structuré par catégories, pages services, intégration d’un système de demande de devis connecté à Google Sheets, et UX moderne.",
        ar: "كتالوج منظم حسب الفئات، صفحات خدمات، ربط نظام طلب عروض بـ Google Sheets، وتجربة مستخدم حديثة.",
        en: "Category-driven catalog, service pages, Google Sheets quote integration, modern UX.",
      },
      keyFeatures: [
        { fr: "Catalogue produits + catégories", ar: "كتالوج وفئات", en: "Catalog + categories" },
        { fr: "Demande de devis (Google Sheets)", ar: "طلب عروض (Google Sheets)", en: "Quote requests (Google Sheets)" },
        { fr: "Multilingue FR/EN", ar: "متعدد اللغات FR/EN", en: "FR/EN multilingual" },
        { fr: "Partenariats marques + FAQ", ar: "شركاء + FAQ", en: "Brand partners + FAQ" },
        { fr: "Dark mode + newsletter", ar: "وضع داكن + نشرة", en: "Dark mode + newsletter" },
      ],
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "Google Sheets API"],
    },
    screenshots: [
      {
        src: "/portfolio/ak-technology-cover.svg",
        alt: { fr: "Aperçu du site AK Technology", ar: "لقطة من موقع AK Technology", en: "AK Technology preview" },
      },
    ],
  },
  {
    slug: "snack-dada-sfia",
    title: "Snack Dada Sfia",
    url: "https://snack-dada-sfia.vercel.app/",
    categories: ["hospitality"],
    coverImage: "/portfolio/snack-dada-sfia-cover.svg",
    shortDescription: {
      fr: "Site restaurant à Rabat — menu, infos, localisation et ordering en ligne.",
      ar: "موقع مطعم في الرباط — قائمة، معلومات، موقع، وطلب عبر الإنترنت.",
      en: "Restaurant website in Rabat — menu, info, location, online ordering.",
    },
    techStack: ["React", "Modern UI/UX"],
    highlights: [
      { fr: "Design mobile‑first", ar: "تصميم موبايل أولاً", en: "Mobile-first design" },
      { fr: "Menu clair + ordering", ar: "قائمة واضحة + طلب", en: "Clear menu + ordering" },
      { fr: "Infos & localisation", ar: "معلومات وموقع", en: "Info + location" },
    ],
    caseStudy: {
      background: {
        fr: "Snack Dada Sfia souhaitait une présence moderne pour faciliter la découverte du menu et les commandes.",
        ar: "Snack Dada Sfia أراد حضوراً حديثاً لعرض القائمة وتسهيل الطلبات.",
        en: "Snack Dada Sfia needed a modern presence for menu discovery and orders.",
      },
      challenge: {
        fr: "Mettre en avant le menu et simplifier le parcours mobile, avec des informations essentielles accessibles rapidement.",
        ar: "إبراز القائمة وتبسيط تجربة الهاتف مع وصول سريع للمعلومات الأساسية.",
        en: "Highlight the menu and deliver a fast mobile-first flow.",
      },
      solution: {
        fr: "Interface moderne, sections menu, CTA ordering, et informations (contact, map) bien visibles.",
        ar: "واجهة حديثة مع أقسام القائمة وزر طلب ومعلومات (اتصال، خريطة) واضحة.",
        en: "Modern UI with menu sections, ordering CTA, and clear contact/location.",
      },
      keyFeatures: [
        { fr: "Menu structuré", ar: "قائمة منظمة", en: "Structured menu" },
        { fr: "Ordering en ligne", ar: "طلب عبر الإنترنت", en: "Online ordering" },
        { fr: "Localisation + contact", ar: "الموقع والاتصال", en: "Location + contact" },
        { fr: "Responsive", ar: "متجاوب", en: "Responsive" },
      ],
      technologies: ["React", "Responsive UI"],
    },
    screenshots: [
      {
        src: "/portfolio/snack-dada-sfia-cover.svg",
        alt: { fr: "Aperçu du site Snack Dada Sfia", ar: "لقطة من موقع Snack Dada Sfia", en: "Snack Dada Sfia preview" },
      },
    ],
  },
  {
    slug: "az-hotels",
    title: "AZ Hotels",
    url: "https://azhotels.vercel.app/select-hotel",
    categories: ["hospitality", "corporate"],
    coverImage: "/portfolio/az-hotels-cover.svg",
    shortDescription: {
      fr: "Plateforme de sélection d’hôtels — expérience premium, multi‑locations, promesse ‘best rates’.",
      ar: "منصة اختيار فنادق — تجربة مميزة، عدة مواقع، وضمان أفضل الأسعار.",
      en: "Hotel selection platform — premium UX, multi-location, best rates positioning.",
    },
    techStack: ["React", "Modern Frontend Framework"],
    highlights: [
      { fr: "UX premium orientée conversion", ar: "تجربة مميزة وتحويل", en: "Conversion-focused premium UX" },
      { fr: "Parcours sélection d’hôtel", ar: "مسار اختيار الفندق", en: "Hotel selection flow" },
      { fr: "Support & garanties", ar: "دعم وضمانات", en: "Support & guarantees" },
    ],
    caseStudy: {
      background: {
        fr: "AZ Hotels souhaitait une interface fluide pour guider l’utilisateur vers le bon hôtel et initier une réservation.",
        ar: "AZ Hotels أرادت واجهة سلسة لتوجيه المستخدم لاختيار الفندق وبدء الحجز.",
        en: "AZ Hotels needed a smooth selection flow to start bookings.",
      },
      challenge: {
        fr: "Créer un parcours simple, rapide et premium, avec une attention forte à l’UX mobile.",
        ar: "إنشاء مسار بسيط وسريع وتجربة راقية مع اهتمام كبير بالهاتف.",
        en: "Build a simple, fast, premium flow with strong mobile UX.",
      },
      solution: {
        fr: "Interface de sélection, mise en avant des bénéfices (support, best rates), et structure prête à évoluer.",
        ar: "واجهة اختيار مع إبراز الفوائد (دعم، أفضل الأسعار) وهيكلة قابلة للتطوير.",
        en: "Selection UI, value props (support, best rates), scalable structure.",
      },
      keyFeatures: [
        { fr: "Sélection d’hôtels", ar: "اختيار الفنادق", en: "Hotel selection" },
        { fr: "Multi‑locations", ar: "عدة مواقع", en: "Multi-location" },
        { fr: "Support 24/7 (positionnement)", ar: "دعم 24/7", en: "24/7 support positioning" },
        { fr: "Best rates guarantee (positionnement)", ar: "ضمان أفضل الأسعار", en: "Best rates guarantee positioning" },
      ],
      technologies: ["React", "Responsive UI"],
    },
    screenshots: [
      { src: "/portfolio/az-hotels-cover.svg", alt: { fr: "Aperçu du site AZ Hotels", ar: "لقطة من AZ Hotels", en: "AZ Hotels preview" } },
    ],
  },
  {
    slug: "metasuper",
    title: "MetaSuper",
    url: "https://metasuper.vercel.app/",
    categories: ["ecommerce"],
    coverImage: "/portfolio/metasuper-cover.svg",
    shortDescription: {
      fr: "E‑commerce orienté promotions — campagnes d’offres, mise en avant produits, UX conversion.",
      ar: "متجر إلكتروني للعروض — حملات، إبراز المنتجات، وتجربة تحويل.",
      en: "Promotion-driven e-commerce — campaigns, product highlights, conversion UX.",
    },
    techStack: ["React", "Vercel deployment"],
    highlights: [
      { fr: "Campagnes d’offres limitées", ar: "عروض محدودة", en: "Limited-time offers" },
      { fr: "Parcours conversion", ar: "مسار تحويل", en: "Conversion flow" },
      { fr: "Design moderne", ar: "تصميم حديث", en: "Modern design" },
    ],
    caseStudy: {
      background: {
        fr: "MetaSuper avait besoin d’un site e‑commerce simple pour mettre en avant des promotions et maximiser les conversions.",
        ar: "MetaSuper احتاجت لموقع متجر بسيط لإبراز العروض وزيادة التحويل.",
        en: "MetaSuper needed a simple e-commerce experience focused on promos and conversion.",
      },
      challenge: {
        fr: "Mettre l’offre au centre, clarifier les bénéfices, et guider l’utilisateur vers l’action.",
        ar: "وضع العرض في الواجهة، توضيح الفوائد، وتوجيه المستخدم للفعل.",
        en: "Keep the offer front-and-center and guide users to action.",
      },
      solution: {
        fr: "Design orienté campagne, sections produit claires, et CTA visibles pour booster l’engagement.",
        ar: "تصميم موجه للحملات مع أقسام واضحة وCTA بارزة لرفع التفاعل.",
        en: "Campaign-driven layout with clear product sections and strong CTAs.",
      },
      keyFeatures: [
        { fr: "Campagne -40% (exemple)", ar: "حملة خصم (مثال)", en: "Discount campaign (example)" },
        { fr: "Mise en avant produits", ar: "إبراز المنتجات", en: "Product highlights" },
        { fr: "UX e‑commerce moderne", ar: "تجربة متجر حديثة", en: "Modern e-commerce UX" },
      ],
      technologies: ["React", "Vercel"],
    },
    screenshots: [
      { src: "/portfolio/metasuper-cover.svg", alt: { fr: "Aperçu du site MetaSuper", ar: "لقطة من MetaSuper", en: "MetaSuper preview" } },
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug)
}

export function getAllProjectSlugs() {
  return PORTFOLIO_PROJECTS.map((p) => ({ slug: p.slug }))
}

