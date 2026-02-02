import i18n from "i18next"
import { initReactI18next } from "react-i18next"

export const LANG_STORAGE_KEY = "mo9awil_language"

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        services: "Services",
        offers: "Offres",
        restaurants: "Restaurants",
        clinics: "Cliniques",
        ecommerce: "E-commerce",
        portfolio: "Portfolio",
        blog: "Blog",
        about: "À Propos",
        pricing: "Mission et Prix",
        contact: "Contact",
        ai_automation: "Automatisation IA",
        get_quote: "Demander un devis",
        whatsapp: "Parler sur WhatsApp",
      },
      hero: {
        badge_primary: "Agence digitale à Rabat",
        badge_secondary: "5+ projets live",
        main_title: "Transformez votre",
        highlight: "présence digitale",
        location: "au Maroc",
        description: "Sites rapides, design moderne, SEO et automatisation — orienté résultats.",
        cta_primary: "Parler sur WhatsApp",
        cta_secondary: "Voir des exemples",
        stats: {
          businesses: "Projets livrés",
          success: "Multilingue",
          support: "Support",
        },
      },
      partners: {
        title: "Ils nous font confiance",
        subtitle: "Des marques et projets qui ont choisi Mo9awil",
      },
      services: {
        title: "Nos Services",
        subtitle: "4 piliers pour construire, lancer et scaler votre présence digitale.",
        items: {
          web_app_development: {
            title: "Création de Sites Web & Apps",
            description: "Next.js, React, TypeScript — rapide, responsive et SEO-friendly.",
          },
          branding_design: {
            title: "Image de Marque et Design",
            description: "Logo, identité visuelle, UI/UX et supports marketing.",
          },
          digital_marketing: {
            title: "Marketing Digital",
            description: "SEO, Ads, réseaux sociaux, email — orienté ROI.",
          },
          ai_automation: {
            title: "IA & Automatisation",
            description: "Automatisez vos opérations via des agents IA (agents.mo9awil.ma).",
          },
        },
        cta: {
          learn_more: "Découvrir",
        },
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Des projets réels, déployés et accessibles en ligne.",
        view_all: "Voir tout le portfolio",
        view_live: "Voir le site",
        view_case: "Voir l'étude de cas",
        filters: {
          all: "Tous",
          ecommerce: "E-commerce",
          corporate: "Sites Corporate",
          hospitality: "Restauration & Hôtellerie",
          professional: "Services Professionnels",
        },
      },
      ai_section: {
        title: "Automatisez Votre Entreprise avec des Agents IA",
        description:
          "Des automatisations intelligentes pour gagner du temps, réduire les erreurs et augmenter la performance.",
        use_cases: {
          ecommerce: "E-commerce (support, commandes, devis)",
          restaurant: "Restaurant (réservations, menu, commandes)",
          ops: "Ops & back-office (CRM, reporting, support)",
          content: "Marketing (contenu, SEO, campagnes)",
        },
        cta: "Découvrir les solutions IA",
      },
      why_choose: {
        badge: "Pourquoi Mo9awil",
        title: "Une équipe tech & créative, orientée résultats",
        subtitle: "Un stack moderne, une expertise locale, et des livrables de qualité.",
        items: {
          proven_track_record: {
            title: "Projets live (5+)",
            description: "E-commerce, corporate, hospitality, F&B — expérience multi-industrie.",
          },
          modern_stack: {
            title: "Stack moderne",
            description: "Next.js, React, TypeScript, Tailwind — performance et évolutivité.",
          },
          bilingual: {
            title: "Multilingue",
            description: "FR/AR/EN — contenu et UX adaptés au marché marocain.",
          },
          ai_first: {
            title: "Approche IA-first",
            description: "Automatisation et agents IA via agents.mo9awil.ma (lien externe).",
          },
        },
      },
      how_it_works: {
        badge: "Process",
        title: "Un process simple en 4 étapes",
        subtitle: "De l'idée au lancement, avec visibilité et accompagnement.",
        steps: {
          select_services: {
            title: "Découverte",
            description: "On clarifie vos objectifs, votre audience et vos priorités.",
          },
          fill_form: {
            title: "Brief & devis",
            description: "Vous partagez vos besoins, on propose une solution et un plan.",
          },
          we_handle: {
            title: "Design & développement",
            description: "UX/UI, dev, contenu et intégrations — itérations rapides.",
          },
          you_grow: {
            title: "Lancement & optimisation",
            description: "Mise en ligne, SEO, suivi et améliorations continues.",
          },
        },
      },
      pricing: {
        badge: "Mission & Prix",
        title: "Des packs clairs, un devis sur-mesure",
        description:
          "Choisissez un pack pour démarrer, puis ajustez selon votre scope (design, marketing, IA, etc.).",
        popular: "Le plus populaire",
        get_started: "Demander un devis",
        debutant: {
          title: "Débutant",
          description: "Pour lancer rapidement une présence en ligne.",
          features: [
            "Site vitrine responsive",
            "UI/UX moderne",
            "SEO de base",
            "Formulaire de contact",
          ],
        },
        professionnel: {
          title: "Professionnel",
          description: "Pour une marque solide et une acquisition prête.",
          features: [
            "Tout dans Débutant",
            "Pages/sections avancées",
            "Optimisation performance",
            "Analytics & tracking",
            "Support prioritaire",
          ],
        },
        entreprise: {
          title: "Entreprise",
          description: "Pour des besoins complexes et scalables.",
          features: [
            "Tout dans Professionnel",
            "E-commerce / app web / PWA",
            "Intégrations (CRM, paiement, booking)",
            "Automatisations IA (lien externe)",
            "Accompagnement dédié",
          ],
        },
      },
      cta: {
        title: "Prêt à transformer votre présence digitale ?",
        description: "Parlez-nous de votre projet et recevez une proposition claire et rapide.",
        button: "Parler sur WhatsApp",
      },
      quote: {
        title: "Demande de devis",
        subtitle: "Répondez en 1 minute — on vous recontacte rapidement.",
        estimate: "Estimation délai",
        days: "jours",
        book_call: "Réserver un appel",
        form: {
          name: "Nom complet",
          email: "Adresse email",
          phone: "Téléphone",
          package: "Choisir un pack",
          services: "Services",
          message: "Message / détails",
          message_placeholder: "Décrivez votre projet, vos liens, vos inspirations…",
          submit: "Envoyer",
          submitting: "Envoi…",
        },
        success: {
          title: "Merci !",
          message: "Nous vous contacterons bientôt avec un devis personnalisé.",
        },
        error: {
          title: "Erreur",
          message: "Impossible d'envoyer votre demande pour le moment.",
        },
      },
      footer: {
        description:
          "Agence digitale à Rabat — web/app, design, marketing et automatisation IA (via agents.mo9awil.ma).",
        quick_links: "Liens rapides",
        contact: "Contact",
        location: "Rabat, Maroc",
        agents_link: "Agents IA & Automatisation",
        newsletter_title: "Newsletter",
        newsletter_description: "Recevez des conseils pratiques (web, marketing, IA) — 1 email / mois max.",
        newsletter_placeholder: "Votre email",
        newsletter_button: "S'inscrire",
        newsletter_hint: "Vous pouvez vous désinscrire à tout moment.",
        newsletter_success: "Inscription confirmée",
        newsletter_error: "Échec de l'inscription",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        cookies: "Politique de Cookies",
        refund: "Politique de Remboursement",
        data_protection: "Protection des Données",
        rights: "Tous droits réservés.",
      },
      pages: {
        about: {
          title: "À Propos",
        },
        contact: {
          title: "Contact",
        },
      },
    },
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        services: "الخدمات",
        offers: "العروض",
        restaurants: "مطاعم",
        clinics: "عيادات",
        ecommerce: "تجارة إلكترونية",
        portfolio: "أعمالنا",
        blog: "مدونة",
        about: "حولنا",
        pricing: "المهمة والأسعار",
        contact: "اتصل بنا",
        ai_automation: "أتمتة بالذكاء الاصطناعي",
        get_quote: "اطلب عرض سعر",
        whatsapp: "واتساب",
      },
      hero: {
        badge_primary: "وكالة رقمية في الرباط",
        badge_secondary: "أكثر من 5 مشاريع مباشرة",
        main_title: "طوّر",
        highlight: "حضورك الرقمي",
        location: "في المغرب",
        description:
          "تطوير مواقع وتطبيقات، هوية بصرية، تسويق رقمي، وأتمتة بالذكاء الاصطناعي. شريك محلي لتسريع نموّك.",
        cta_primary: "ابدأ مشروعك",
        cta_secondary: "شاهد أعمالنا",
        stats: {
          businesses: "مشاريع",
          success: "متعدد اللغات",
          support: "الدعم",
        },
      },
      partners: {
        title: "يثق بنا عملاؤنا",
        subtitle: "علامات ومشاريع اختارت مو9اول",
      },
      services: {
        title: "خدماتنا",
        subtitle: "أربع ركائز لبناء حضورك الرقمي وإطلاقه وتطويره.",
        items: {
          web_app_development: {
            title: "تطوير مواقع وتطبيقات",
            description: "Next.js و React و TypeScript — سريع ومتجاوب ومحسّن لمحركات البحث.",
          },
          branding_design: {
            title: "الهوية البصرية والتصميم",
            description: "شعار وهوية بصرية وتجربة مستخدم وتصاميم تسويقية.",
          },
          digital_marketing: {
            title: "التسويق الرقمي",
            description: "SEO وإعلانات وشبكات اجتماعية وبريد — موجّه للنتائج.",
          },
          ai_automation: {
            title: "الذكاء الاصطناعي والأتمتة",
            description: "أتمتة عملياتك عبر وكلاء ذكاء اصطناعي (agents.mo9awil.ma).",
          },
        },
        cta: {
          learn_more: "اكتشف",
        },
      },
      portfolio: {
        title: "أعمالنا",
        subtitle: "مشاريع حقيقية ومباشرة على الإنترنت.",
        view_all: "عرض كل الأعمال",
        view_live: "عرض الموقع",
        view_case: "دراسة الحالة",
        filters: {
          all: "الكل",
          ecommerce: "متاجر إلكترونية",
          corporate: "مواقع شركات",
          hospitality: "مطاعم وفنادق",
          professional: "خدمات مهنية",
        },
      },
      ai_section: {
        title: "أتمت عملك بواسطة وكلاء الذكاء الاصطناعي",
        description: "أتمتة ذكية لتوفير الوقت وتقليل الأخطاء ورفع الأداء.",
        use_cases: {
          ecommerce: "التجارة الإلكترونية (دعم، طلبات، عروض)",
          restaurant: "المطاعم (حجوزات، قائمة، طلبات)",
          ops: "العمليات (CRM، تقارير، دعم)",
          content: "التسويق (محتوى، SEO، حملات)",
        },
        cta: "اكتشف حلول الذكاء الاصطناعي",
      },
      why_choose: {
        badge: "لماذا مو9اول",
        title: "فريق تقني وإبداعي يركز على النتائج",
        subtitle: "تقنيات حديثة وخبرة محلية وتسليم عالي الجودة.",
        items: {
          proven_track_record: {
            title: "مشاريع مباشرة (5+)",
            description: "تجارة إلكترونية وشركات وضيافة — خبرة متعددة المجالات.",
          },
          modern_stack: {
            title: "تقنيات حديثة",
            description: "Next.js و React و TypeScript و Tailwind — أداء وقابلية للتوسع.",
          },
          bilingual: {
            title: "متعدد اللغات",
            description: "FR/AR/EN — محتوى وتجربة مناسبة للسوق المغربي.",
          },
          ai_first: {
            title: "منهج IA-first",
            description: "أتمتة ووكلاء ذكاء اصطناعي عبر agents.mo9awil.ma (رابط خارجي).",
          },
        },
      },
      how_it_works: {
        badge: "الطريقة",
        title: "أربع خطوات بسيطة",
        subtitle: "من الفكرة إلى الإطلاق مع وضوح ومتابعة.",
        steps: {
          select_services: {
            title: "اكتشاف",
            description: "نحدد الأهداف والجمهور والأولويات.",
          },
          fill_form: {
            title: "ملخص وعرض",
            description: "تشارك متطلباتك ونقترح الحل والخطة.",
          },
          we_handle: {
            title: "تصميم وتطوير",
            description: "UX/UI وتطوير وتكاملات — تكرارات سريعة.",
          },
          you_grow: {
            title: "إطلاق وتحسين",
            description: "نشر، SEO، متابعة وتحسين مستمر.",
          },
        },
      },
      pricing: {
        badge: "المهمة والأسعار",
        title: "باقات واضحة + عرض مخصص",
        description: "اختر باقة للانطلاق ثم نعدل حسب نطاق مشروعك (تصميم، تسويق، IA...).",
        popular: "الأكثر طلباً",
        get_started: "اطلب عرض سعر",
        debutant: {
          title: "مبتدئ",
          description: "لإطلاق حضورك بسرعة.",
          features: ["موقع تعريفي متجاوب", "تصميم حديث", "SEO أساسي", "نموذج تواصل"],
        },
        professionnel: {
          title: "محترف",
          description: "لهوية قوية واكتساب جاهز.",
          features: ["كل شيء في مبتدئ", "صفحات متقدمة", "تحسين الأداء", "تحليلات وتتبع", "دعم أولوية"],
        },
        entreprise: {
          title: "شركة",
          description: "لاحتياجات معقدة قابلة للتوسع.",
          features: [
            "كل شيء في محترف",
            "متجر إلكتروني / تطبيق ويب / PWA",
            "تكاملات (CRM، دفع، حجز)",
            "أتمتة IA (رابط خارجي)",
            "متابعة مخصصة",
          ],
        },
      },
      cta: {
        title: "جاهز لتطوير حضورك الرقمي؟",
        description: "أخبرنا عن مشروعك وسنقترح حلاً واضحاً وبسرعة.",
        button: "اطلب عرض سعر",
      },
      quote: {
        title: "طلب عرض سعر",
        subtitle: "دقيقة واحدة — وسنتواصل معك بسرعة.",
        estimate: "تقدير المدة",
        days: "يوماً",
        book_call: "احجز مكالمة",
        form: {
          name: "الاسم الكامل",
          email: "البريد الإلكتروني",
          phone: "الهاتف",
          package: "اختر باقة",
          services: "الخدمات",
          message: "رسالة / تفاصيل",
          message_placeholder: "اشرح مشروعك وروابطك وأمثلتك…",
          submit: "إرسال",
          submitting: "جارٍ الإرسال…",
        },
        success: {
          title: "شكراً لك!",
          message: "سنتواصل معك قريباً بعرض سعر مخصص.",
        },
        error: {
          title: "خطأ",
          message: "تعذر إرسال الطلب حالياً.",
        },
      },
      footer: {
        description: "وكالة رقمية في الرباط — تطوير، تصميم، تسويق، وأتمتة IA (via agents.mo9awil.ma).",
        quick_links: "روابط سريعة",
        contact: "اتصل بنا",
        location: "الرباط، المغرب",
        agents_link: "وكلاء IA والأتمتة",
        newsletter_title: "النشرة",
        newsletter_description: "نصائح عملية (ويب، تسويق، IA) — بريد واحد شهرياً كحد أقصى.",
        newsletter_placeholder: "بريدك الإلكتروني",
        newsletter_button: "تسجيل",
        newsletter_hint: "يمكنك إلغاء الاشتراك في أي وقت.",
        newsletter_success: "تم التسجيل بنجاح",
        newsletter_error: "فشل التسجيل",
        privacy: "سياسة الخصوصية",
        terms: "شروط الاستخدام",
        cookies: "سياسة ملفات الارتباط",
        refund: "سياسة الاسترجاع",
        data_protection: "حماية البيانات",
        rights: "جميع الحقوق محفوظة.",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        offers: "Offers",
        restaurants: "Restaurants",
        clinics: "Clinics",
        ecommerce: "E-commerce",
        portfolio: "Portfolio",
        blog: "Blog",
        about: "About",
        pricing: "Pricing",
        contact: "Contact",
        ai_automation: "AI Automation",
        get_quote: "Get a Quote",
        whatsapp: "WhatsApp",
      },
      hero: {
        badge_primary: "Digital agency in Rabat",
        badge_secondary: "5+ live projects",
        main_title: "Transform your",
        highlight: "Digital Presence",
        location: "in Morocco",
        description:
          "Web & app development, branding, digital marketing and AI automation. A local partner to accelerate your growth.",
        cta_primary: "Start your project",
        cta_secondary: "See our work",
        stats: {
          businesses: "Projects",
          success: "Multilingual",
          support: "Support",
        },
      },
      partners: {
        title: "Trusted by clients",
        subtitle: "Brands and projects that chose Mo9awil",
      },
      services: {
        title: "Services",
        subtitle: "4 pillars to build and scale your digital presence.",
        items: {
          web_app_development: {
            title: "Websites & Apps",
            description: "Next.js, React, TypeScript — fast, responsive and SEO-friendly.",
          },
          branding_design: {
            title: "Branding & Design",
            description: "Logo, brand identity, UI/UX and marketing assets.",
          },
          digital_marketing: {
            title: "Digital Marketing",
            description: "SEO, Ads, social media, email — ROI driven.",
          },
          ai_automation: {
            title: "AI & Automation",
            description: "Automate operations with AI agents (agents.mo9awil.ma).",
          },
        },
        cta: {
          learn_more: "Learn more",
        },
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Real, live projects you can visit online.",
        view_all: "View portfolio",
        view_live: "View live",
        view_case: "View case study",
        filters: {
          all: "All",
          ecommerce: "E-commerce",
          corporate: "Corporate Websites",
          hospitality: "Restaurant & Hospitality",
          professional: "Professional Services",
        },
      },
      ai_section: {
        title: "Automate your business with AI agents",
        description: "Smart automation to save time, reduce errors, and increase performance.",
        use_cases: {
          ecommerce: "E-commerce (support, orders, quotes)",
          restaurant: "Restaurant (bookings, menu, orders)",
          ops: "Ops (CRM, reporting, support)",
          content: "Marketing (content, SEO, campaigns)",
        },
        cta: "Explore AI solutions",
      },
      why_choose: {
        badge: "Why Mo9awil",
        title: "A tech + creative team, focused on results",
        subtitle: "Modern stack, local expertise, high-quality delivery.",
        items: {
          proven_track_record: {
            title: "Live projects (5+)",
            description: "E-commerce, corporate, hospitality and F&B — multi-industry experience.",
          },
          modern_stack: {
            title: "Modern stack",
            description: "Next.js, React, TypeScript, Tailwind — performance and scalability.",
          },
          bilingual: {
            title: "Multilingual",
            description: "FR/AR/EN — content and UX adapted to the Moroccan market.",
          },
          ai_first: {
            title: "AI-first approach",
            description: "Automation and AI agents via agents.mo9awil.ma (external link).",
          },
        },
      },
      how_it_works: {
        badge: "Process",
        title: "A simple 4-step process",
        subtitle: "From idea to launch, with visibility and support.",
        steps: {
          select_services: { title: "Discovery", description: "We align on goals, audience and priorities." },
          fill_form: { title: "Brief & quote", description: "We propose a solution and a clear plan." },
          we_handle: { title: "Design & build", description: "UX/UI, dev, content and integrations." },
          you_grow: { title: "Launch & optimize", description: "Go live, SEO, tracking and iterations." },
        },
      },
      pricing: {
        badge: "Mission & Pricing",
        title: "Clear packages, custom quote",
        description: "Pick a package to start, then adjust depending on scope (design, marketing, AI...).",
        popular: "Most popular",
        get_started: "Get a quote",
        debutant: {
          title: "Starter",
          description: "Launch quickly.",
          features: ["Responsive website", "Modern UI/UX", "Basic SEO", "Contact form"],
        },
        professionnel: {
          title: "Professional",
          description: "Brand-ready & growth-ready.",
          features: ["Everything in Starter", "Advanced sections", "Performance optimization", "Analytics", "Priority support"],
        },
        entreprise: {
          title: "Enterprise",
          description: "Complex and scalable.",
          features: [
            "Everything in Professional",
            "E-commerce / web app / PWA",
            "Integrations (CRM, payments, booking)",
            "AI automation (external link)",
            "Dedicated support",
          ],
        },
      },
      cta: {
        title: "Ready to transform your digital presence?",
        description: "Tell us about your project and get a clear proposal quickly.",
        button: "Get a quote",
      },
      quote: {
        title: "Project inquiry",
        subtitle: "1 minute — we’ll get back to you quickly.",
        estimate: "Estimated timeline",
        days: "days",
        book_call: "Book a call",
        form: {
          name: "Full name",
          email: "Email",
          phone: "Phone",
          package: "Choose a package",
          services: "Services",
          message: "Message / details",
          message_placeholder: "Describe your project, links, inspirations…",
          submit: "Send",
          submitting: "Sending…",
        },
        success: { title: "Thanks!", message: "We’ll get back to you with a tailored quote." },
        error: { title: "Error", message: "Could not submit your request." },
      },
      footer: {
        description: "Digital agency in Rabat — web/app, design, marketing and AI automation (via agents.mo9awil.ma).",
        quick_links: "Quick links",
        contact: "Contact",
        location: "Rabat, Morocco",
        agents_link: "AI Agents & Automation",
        newsletter_title: "Newsletter",
        newsletter_description: "Practical tips (web, marketing, AI) — max 1 email/month.",
        newsletter_placeholder: "Your email",
        newsletter_button: "Subscribe",
        newsletter_hint: "Unsubscribe anytime.",
        newsletter_success: "Subscribed",
        newsletter_error: "Subscription failed",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        refund: "Refund Policy",
        data_protection: "Data Protection",
        rights: "All rights reserved.",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
})

export default i18n
