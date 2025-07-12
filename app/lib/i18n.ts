import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Translation resources
const resources = {
  en: {
    translation: {
      hero: {
        title: "Everything You Need to Start and Grow Your Business",
        subtitle: "Legal, Accounting, Branding, Marketing, and More – All in One Place.",
        cta: "Get Started for Free",
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
      quote: {
        title: "Need help getting started? Get a custom quote!",
        subtitle: "Tell us about your project and we'll provide a tailored solution",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          services: "Services Needed",
          message: "Message / Details",
          message_placeholder: "Tell us more about your project...",
          submit: "Get My Quote",
          submitting: "Submitting...",
        },
        success: {
          title: "Thank You!",
          message: "We'll contact you soon with your custom quote.",
        },
      },
      footer: {
        description: "Empowering entrepreneurs across Morocco with comprehensive business solutions.",
        rights: "All rights reserved.",
      },
    },
  },
  fr: {
    translation: {
      hero: {
        title: "Tout Ce Dont Vous Avez Besoin Pour Créer et Développer Votre Entreprise",
        subtitle: "Juridique, Comptabilité, Image de Marque, Marketing et Plus – Tout en Un Seul Endroit.",
        cta: "Commencer Gratuitement",
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
      quote: {
        title: "Besoin d'aide pour commencer ? Obtenez un devis personnalisé !",
        subtitle: "Parlez-nous de votre projet et nous fournirons une solution sur mesure",
        form: {
          name: "Nom Complet",
          email: "Adresse Email",
          phone: "Numéro de Téléphone",
          services: "Services Nécessaires",
          message: "Message / Détails",
          message_placeholder: "Parlez-nous de votre projet...",
          submit: "Obtenir Mon Devis",
          submitting: "Envoi en cours...",
        },
        success: {
          title: "Merci !",
          message: "Nous vous contacterons bientôt avec votre devis personnalisé.",
        },
      },
      footer: {
        description: "Autonomiser les entrepreneurs à travers le Maroc avec des solutions d'affaires complètes.",
        rights: "Tous droits réservés.",
      },
    },
  },
  ar: {
    translation: {
      hero: {
        title: "كل ما تحتاجه لبدء وتنمية عملك",
        subtitle: "القانونية، المحاسبة، العلامة التجارية، التسويق، والمزيد - كل شيء في مكان واحد.",
        cta: "ابدأ مجاناً",
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
      quote: {
        title: "تحتاج مساعدة للبدء؟ احصل على عرض أسعار مخصص!",
        subtitle: "أخبرنا عن مشروعك وسنقدم حلاً مخصصاً",
        form: {
          name: "الاسم الكامل",
          email: "عنوان البريد الإلكتروني",
          phone: "رقم الهاتف",
          services: "الخدمات المطلوبة",
          message: "رسالة / تفاصيل",
          message_placeholder: "أخبرنا المزيد عن مشروعك...",
          submit: "احصل على عرض السعر",
          submitting: "جاري الإرسال...",
        },
        success: {
          title: "شكراً لك!",
          message: "سنتواصل معك قريباً بعرض الأسعار المخصص.",
        },
      },
      footer: {
        description: "تمكين رجال الأعمال في جميع أنحاء المغرب بحلول أعمال شاملة.",
        rights: "جميع الحقوق محفوظة.",
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
