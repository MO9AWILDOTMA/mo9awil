"use client"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Translation resources
const resources = {
  en: {
    translation: {
      nav: {
        services: "Services",
        about: "About",
        how_it_works: "How It Works",
        mission: "Mission & Pricing",
        partners: "Partners",
        contact: "Contact",
      },
      hero: {
        main_title: "Launch Your",
        highlight: "Dream Business",
        location: "in Morocco",
        description:
          "From legal setup to digital marketing, we provide everything you need to start, grow, and scale your business. Join thousands of successful entrepreneurs who chose Mo9awil.",
        cta_primary: "Start Your Journey",
        cta_secondary: "Book Consultation",
        stats: {
          businesses: "Businesses Launched",
          success: "Success Rate",
          support: "Support",
        },
      },
      partners: {
        title: "Trusted by Leading Companies",
        subtitle: "Join hundreds of successful businesses that chose Mo9awil",
      },
      services: {
        title: "Our Services",
        items: {
          company_creation: {
            title: "Company Creation",
            description: "Complete business registration and legal setup",
          },
          accounting: {
            title: "Accounting & Bookkeeping",
            description: "Professional financial management and reporting",
          },
          invoicing: {
            title: "Invoice Generation",
            description: "Automated invoicing and payment tracking",
          },
          legal_assistance: {
            title: "Legal Assistance",
            description: "Expert legal guidance for your business",
          },
          legal_consultation: {
            title: "Free Legal Consultation",
            description: "Complimentary legal advice and support",
          },
          website_creation: {
            title: "Website Creation",
            description: "Professional websites that convert visitors",
          },
          social_media: {
            title: "Social Media Management",
            description: "Strategic social media presence and engagement",
          },
          digital_marketing: {
            title: "Digital Marketing",
            description: "Comprehensive online marketing strategies",
          },
          branding: {
            title: "Branding & Identity Design",
            description: "Complete brand identity and visual design",
          },
        },
      },
      why_choose: {
        title: "Why Choose Mo9awil?",
        items: {
          transparent_pricing: {
            title: "Transparent Pricing",
            description: "No hidden fees, clear pricing structure",
          },
          local_experts: {
            title: "Local Legal & Tax Experts",
            description: "Deep knowledge of Moroccan business law",
          },
          all_in_one: {
            title: "All-in-One Dashboard",
            description: "Manage everything from one platform",
          },
          easy_to_use: {
            title: "Easy to Use",
            description: "Intuitive interface designed for entrepreneurs",
          },
        },
      },
      how_it_works: {
        title: "How It Works",
        steps: {
          select_services: {
            title: "Select Your Services",
            description: "Choose what you need for your business",
          },
          fill_form: {
            title: "Fill in the Form",
            description: "Provide your business details and requirements",
          },
          we_handle: {
            title: "Our Team Handles Everything",
            description: "We take care of all the complex processes",
          },
          you_grow: {
            title: "You Grow Your Business",
            description: "Focus on what matters most - growing your business",
          },
        },
      },
      mission: {
        badge: "Our Mission",
        title: "We Help Entrepreneurs Succeed",
        description:
          "Our main goal is to empower entrepreneurs with affordable, comprehensive business solutions. We believe every dream deserves a chance to become reality, and we're here to make that journey as smooth and affordable as possible.",
      },
      pricing: {
        popular: "Most Popular",
        get_started: "Get Started",
        contact_us: "Contact Us",
        starter: {
          title: "Starter",
          description: "Perfect for new entrepreneurs",
          features: {
            feature1: "Company Registration",
            feature2: "Basic Legal Setup",
            feature3: "Tax Registration",
            feature4: "Email Support",
          },
        },
        professional: {
          title: "Professional",
          description: "Complete business solution",
          features: {
            feature1: "Everything in Starter",
            feature2: "Professional Website",
            feature3: "Accounting Setup",
            feature4: "Marketing Consultation",
            feature5: "Priority Support",
            feature6: "Monthly Reports",
          },
        },
        enterprise: {
          title: "Enterprise",
          description: "Tailored for growing businesses",
          features: {
            feature1: "Everything in Professional",
            feature2: "Custom Solutions",
            feature3: "Dedicated Account Manager",
            feature4: "Advanced Analytics",
            feature5: "24/7 Phone Support",
          },
        },
      },
      quote: {
        title: "Need help getting started? Get a custom quote!",
        subtitle: "Tell us about your project and we'll provide a tailored solution",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          package: "Choose Package",
          services: "Additional Services",
          message: "Message / Details",
          message_placeholder: "Tell us more about your project...",
          submit: "Get My Quote",
          submitting: "Submitting...",
        },
        success: {
          title: "Thank You!",
          message: "We'll contact you soon with your custom quote.",
          close: "Close",
        },
      },
      footer: {
        description: "Empowering entrepreneurs across Morocco with comprehensive business solutions.",
        quick_links: "Quick Links",
        contact: "Contact Info",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        rights: "All rights reserved.",
      },
    },
  },
  fr: {
    translation: {
      nav: {
        services: "Services",
        about: "À Propos",
        how_it_works: "Comment Ça Marche",
        mission: "Mission et Prix",
        partners: "Partenaires",
        contact: "Contact",
      },
      hero: {
        main_title: "Lancez Votre",
        highlight: "Entreprise de Rêve",
        location: "au Maroc",
        description:
          "De la configuration juridique au marketing numérique, nous fournissons tout ce dont vous avez besoin pour démarrer, développer et faire évoluer votre entreprise. Rejoignez des milliers d'entrepreneurs qui ont choisi Mo9awil.",
        cta_primary: "Commencez Votre Parcours",
        cta_secondary: "Réserver une Consultation",
        stats: {
          businesses: "Entreprises Lancées",
          success: "Taux de Réussite",
          support: "Support",
        },
      },
      partners: {
        title: "Approuvé par les Entreprises Leaders",
        subtitle: "Rejoignez des centaines d'entreprises qui ont choisi Mo9awil",
      },
      services: {
        title: "Nos Services",
        items: {
          company_creation: {
            title: "Création d'Entreprise",
            description: "Enregistrement complet et configuration juridique",
          },
          accounting: {
            title: "Comptabilité et Tenue de Livres",
            description: "Gestion financière et reporting professionnels",
          },
          invoicing: {
            title: "Génération de Factures",
            description: "Facturation automatisée et suivi des paiements",
          },
          legal_assistance: {
            title: "Assistance Juridique",
            description: "Conseils juridiques experts pour votre entreprise",
          },
          legal_consultation: {
            title: "Consultation Juridique Gratuite",
            description: "Conseils juridiques gratuits et support",
          },
          website_creation: {
            title: "Création de Sites Web",
            description: "Sites web professionnels qui convertissent",
          },
          social_media: {
            title: "Gestion des Réseaux Sociaux",
            description: "Présence stratégique et engagement sur les réseaux",
          },
          digital_marketing: {
            title: "Marketing Digital",
            description: "Stratégies de marketing en ligne complètes",
          },
          branding: {
            title: "Image de Marque et Design",
            description: "Identité de marque complète et design visuel",
          },
        },
      },
      why_choose: {
        title: "Pourquoi Choisir Mo9awil ?",
        items: {
          transparent_pricing: {
            title: "Prix Transparents",
            description: "Pas de frais cachés, structure tarifaire claire",
          },
          local_experts: {
            title: "Experts Locaux Juridiques et Fiscaux",
            description: "Connaissance approfondie du droit des affaires marocain",
          },
          all_in_one: {
            title: "Tableau de Bord Tout-en-Un",
            description: "Gérez tout depuis une seule plateforme",
          },
          easy_to_use: {
            title: "Facile à Utiliser",
            description: "Interface intuitive conçue pour les entrepreneurs",
          },
        },
      },
      how_it_works: {
        title: "Comment Ça Marche",
        steps: {
          select_services: {
            title: "Sélectionnez Vos Services",
            description: "Choisissez ce dont vous avez besoin pour votre entreprise",
          },
          fill_form: {
            title: "Remplissez le Formulaire",
            description: "Fournissez les détails et exigences de votre entreprise",
          },
          we_handle: {
            title: "Notre Équipe S'Occupe de Tout",
            description: "Nous prenons en charge tous les processus complexes",
          },
          you_grow: {
            title: "Vous Développez Votre Entreprise",
            description: "Concentrez-vous sur l'essentiel - développer votre entreprise",
          },
        },
      },
      mission: {
        badge: "Notre Mission",
        title: "Nous Aidons les Entrepreneurs à Réussir",
        description:
          "Notre objectif principal est d'autonomiser les entrepreneurs avec des solutions d'affaires abordables et complètes. Nous croyons que chaque rêve mérite une chance de devenir réalité, et nous sommes là pour rendre ce voyage aussi fluide et abordable que possible.",
      },
      pricing: {
        popular: "Le Plus Populaire",
        get_started: "Commencer",
        contact_us: "Nous Contacter",
        starter: {
          title: "Débutant",
          description: "Parfait pour les nouveaux entrepreneurs",
          features: {
            feature1: "Enregistrement d'Entreprise",
            feature2: "Configuration Juridique de Base",
            feature3: "Enregistrement Fiscal",
            feature4: "Support par Email",
          },
        },
        professional: {
          title: "Professionnel",
          description: "Solution d'affaires complète",
          features: {
            feature1: "Tout dans Débutant",
            feature2: "Site Web Professionnel",
            feature3: "Configuration Comptable",
            feature4: "Consultation Marketing",
            feature5: "Support Prioritaire",
            feature6: "Rapports Mensuels",
          },
        },
        enterprise: {
          title: "Entreprise",
          description: "Adapté aux entreprises en croissance",
          features: {
            feature1: "Tout dans Professionnel",
            feature2: "Solutions Personnalisées",
            feature3: "Gestionnaire de Compte Dédié",
            feature4: "Analyses Avancées",
            feature5: "Support Téléphonique 24/7",
          },
        },
      },
      quote: {
        title: "Besoin d'aide pour commencer ? Obtenez un devis personnalisé !",
        subtitle: "Parlez-nous de votre projet et nous fournirons une solution sur mesure",
        form: {
          name: "Nom Complet",
          email: "Adresse Email",
          phone: "Numéro de Téléphone",
          package: "Choisir un Forfait",
          services: "Services Additionnels",
          message: "Message / Détails",
          message_placeholder: "Parlez-nous de votre projet...",
          submit: "Obtenir Mon Devis",
          submitting: "Envoi en cours...",
        },
        success: {
          title: "Merci !",
          message: "Nous vous contacterons bientôt avec votre devis personnalisé.",
          close: "Fermer",
        },
      },
      footer: {
        description: "Autonomiser les entrepreneurs à travers le Maroc avec des solutions d'affaires complètes.",
        quick_links: "Liens Rapides",
        contact: "Informations de Contact",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation",
        rights: "Tous droits réservés.",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        services: "الخدمات",
        about: "حولنا",
        how_it_works: "كيف يعمل",
        mission: "المهمة والأسعار",
        partners: "الشركاء",
        contact: "اتصل بنا",
      },
      hero: {
        main_title: "أطلق",
        highlight: "عملك المثالي",
        location: "في المغرب",
        description:
          "من الإعداد القانوني إلى التسويق الرقمي، نوفر كل ما تحتاجه لبدء وتنمية وتوسيع عملك. انضم إلى آلاف رجال الأعمال الناجحين الذين اختاروا مقاول.",
        cta_primary: "ابدأ رحلتك",
        cta_secondary: "احجز استشارة",
        stats: {
          businesses: "الأعمال المطلقة",
          success: "معدل النجاح",
          support: "الدعم",
        },
      },
      partners: {
        title: "موثوق من قبل الشركات الرائدة",
        subtitle: "انضم إلى مئات الشركات الناجحة التي اختارت مقاول",
      },
      services: {
        title: "خدماتنا",
        items: {
          company_creation: {
            title: "إنشاء الشركات",
            description: "تسجيل الأعمال الكامل والإعداد القانوني",
          },
          accounting: {
            title: "المحاسبة ومسك الدفاتر",
            description: "إدارة مالية مهنية وإعداد التقارير",
          },
          invoicing: {
            title: "إنشاء الفواتير",
            description: "فوترة آلية وتتبع المدفوعات",
          },
          legal_assistance: {
            title: "المساعدة القانونية",
            description: "إرشاد قانوني خبير لعملك",
          },
          legal_consultation: {
            title: "استشارة قانونية مجانية",
            description: "مشورة قانونية مجانية ودعم",
          },
          website_creation: {
            title: "إنشاء المواقع الإلكترونية",
            description: "مواقع ويب احترافية تحول الزوار",
          },
          social_media: {
            title: "إدارة وسائل التواصل الاجتماعي",
            description: "حضور استراتيجي ومشاركة على وسائل التواصل",
          },
          digital_marketing: {
            title: "التسويق الرقمي",
            description: "استراتيجيات تسويق شاملة عبر الإنترنت",
          },
          branding: {
            title: "العلامة التجارية وتصميم الهوية",
            description: "هوية علامة تجارية كاملة وتصميم بصري",
          },
        },
      },
      why_choose: {
        title: "لماذا تختار مقاول؟",
        items: {
          transparent_pricing: {
            title: "أسعار شفافة",
            description: "لا توجد رسوم مخفية، هيكل تسعير واضح",
          },
          local_experts: {
            title: "خبراء قانونيون وضريبيون محليون",
            description: "معرفة عميقة بقانون الأعمال المغربي",
          },
          all_in_one: {
            title: "لوحة تحكم شاملة",
            description: "إدارة كل شيء من منصة واحدة",
          },
          easy_to_use: {
            title: "سهل الاستخدام",
            description: "واجهة بديهية مصممة لرجال الأعمال",
          },
        },
      },
      how_it_works: {
        title: "كيف يعمل",
        steps: {
          select_services: {
            title: "اختر خدماتك",
            description: "اختر ما تحتاجه لعملك",
          },
          fill_form: {
            title: "املأ النموذج",
            description: "قدم تفاصيل عملك ومتطلباتك",
          },
          we_handle: {
            title: "فريقنا يتولى كل شيء",
            description: "نحن نتولى جميع العمليات المعقدة",
          },
          you_grow: {
            title: "أنت تنمي عملك",
            description: "ركز على الأهم - تنمية عملك",
          },
        },
      },
      mission: {
        badge: "مهمتنا",
        title: "نساعد رجال الأعمال على النجاح",
        description:
          "هدفنا الرئيسي هو تمكين رجال الأعمال بحلول أعمال شاملة وبأسعار معقولة. نؤمن أن كل حلم يستحق فرصة ليصبح حقيقة، ونحن هنا لجعل هذه الرحلة سلسة وبأسعار معقولة قدر الإمكان.",
      },
      pricing: {
        popular: "الأكثر شعبية",
        get_started: "ابدأ",
        contact_us: "اتصل بنا",
        starter: {
          title: "المبتدئ",
          description: "مثالي لرجال الأعمال الجدد",
          features: {
            feature1: "تسجيل الشركة",
            feature2: "الإعداد القانوني الأساسي",
            feature3: "التسجيل الضريبي",
            feature4: "دعم البريد الإلكتروني",
          },
        },
        professional: {
          title: "المحترف",
          description: "حل أعمال شامل",
          features: {
            feature1: "كل شيء في المبتدئ",
            feature2: "موقع ويب احترافي",
            feature3: "إعداد المحاسبة",
            feature4: "استشارة التسويق",
            feature5: "دعم أولوية",
            feature6: "تقارير شهرية",
          },
        },
        enterprise: {
          title: "المؤسسة",
          description: "مصمم للشركات النامية",
          features: {
            feature1: "كل شيء في المحترف",
            feature2: "حلول مخصصة",
            feature3: "مدير حساب مخصص",
            feature4: "تحليلات متقدمة",
            feature5: "دعم هاتفي 24/7",
          },
        },
      },
      quote: {
        title: "تحتاج مساعدة للبدء؟ احصل على عرض أسعار مخصص!",
        subtitle: "أخبرنا عن مشروعك وسنقدم حلاً مخصصاً",
        form: {
          name: "الاسم الكامل",
          email: "عنوان البريد الإلكتروني",
          phone: "رقم الهاتف",
          package: "اختر الباقة",
          services: "خدمات إضافية",
          message: "رسالة / تفاصيل",
          message_placeholder: "أخبرنا المزيد عن مشروعك...",
          submit: "احصل على عرض السعر",
          submitting: "جاري الإرسال...",
        },
        success: {
          title: "شكراً لك!",
          message: "سنتواصل معك قريباً بعرض الأسعار المخصص.",
          close: "إغلاق",
        },
      },
      footer: {
        description: "تمكين رجال الأعمال في جميع أنحاء المغرب بحلول أعمال شاملة.",
        quick_links: "روابط سريعة",
        contact: "معلومات الاتصال",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        rights: "جميع الحقوق محفوظة.",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
