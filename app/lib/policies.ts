export type Locale = "fr" | "ar" | "en"
export type Localized = Record<Locale, string>

export type PolicySection = {
  heading: Localized
  body: Record<Locale, string[]>
}

export type PolicyDoc = {
  slug: "privacy" | "terms" | "cookies" | "refund" | "data-protection"
  title: Localized
  lastUpdated: Localized
  intro: Record<Locale, string[]>
  sections: PolicySection[]
}

const LAST_UPDATED: Localized = {
  fr: "Dernière mise à jour : 2 février 2026",
  ar: "آخر تحديث: 2 فبراير 2026",
  en: "Last updated: February 2, 2026",
}

export const POLICIES: PolicyDoc[] = [
  {
    slug: "privacy",
    title: {
      fr: "Politique de Confidentialité",
      ar: "سياسة الخصوصية",
      en: "Privacy Policy",
    },
    lastUpdated: LAST_UPDATED,
    intro: {
      fr: [
        "Cette Politique de Confidentialité décrit comment Mo9awil collecte, utilise et protège vos données lorsque vous visitez notre site ou nous contactez.",
        "Ce document est fourni à titre informatif et ne constitue pas un avis juridique.",
      ],
      ar: [
        "توضح سياسة الخصوصية هذه كيفية جمع مو9اول للبيانات واستخدامها وحمايتها عند زيارة موقعنا أو التواصل معنا.",
        "هذا المستند معلوماتي ولا يُعد استشارة قانونية.",
      ],
      en: [
        "This Privacy Policy explains how Mo9awil collects, uses, and protects your data when you visit our website or contact us.",
        "This document is informational and not legal advice.",
      ],
    },
    sections: [
      {
        heading: { fr: "Qui sommes-nous ?", ar: "من نحن؟", en: "Who are we?" },
        body: {
          fr: [
            "Mo9awil est le site web exploité par ACHRAF CONSEIL (SARL), société marocaine.",
            "Siège social : AV MED V IMM 202 APP N°03 HAY KARIMA, Salé, Maroc.",
            "Contact : contact@mo9awil.com",
          ],
          ar: [
            "مو9اول هو موقع الويب الذي تشغّله شركة ACHRAF CONSEIL (شركة ذات مسؤولية محدودة - SARL) بالمغرب.",
            "المقر الاجتماعي: AV MED V IMM 202 APP N°03 HAY KARIMA, Salé, Maroc.",
            "للتواصل: contact@mo9awil.com",
          ],
          en: [
            "Mo9awil is a website operated by ACHRAF CONSEIL (SARL), a Moroccan limited liability company.",
            "Registered office: AV MED V IMM 202 APP N°03 HAY KARIMA, Salé, Morocco.",
            "Contact: contact@mo9awil.com",
          ],
        },
      },
      {
        heading: { fr: "Données collectées", ar: "البيانات التي نجمعها", en: "Data we collect" },
        body: {
          fr: [
            "Données de contact (nom, email, téléphone) lorsque vous remplissez un formulaire de devis ou newsletter.",
            "Informations de projet (services souhaités, message) lorsque vous demandez un devis.",
            "Données techniques (langue, fuseau horaire) transmises avec le formulaire.",
          ],
          ar: [
            "بيانات التواصل (الاسم، البريد الإلكتروني، الهاتف) عند ملء نموذج عرض السعر أو النشرة.",
            "معلومات المشروع (الخدمات المطلوبة، الرسالة) عند طلب عرض السعر.",
            "بيانات تقنية (اللغة، المنطقة الزمنية) تُرسل مع النموذج.",
          ],
          en: [
            "Contact info (name, email, phone) when you submit a quote or newsletter form.",
            "Project information (requested services, message) when you request a quote.",
            "Technical data (language, timezone) submitted with the form.",
          ],
        },
      },
      {
        heading: { fr: "Utilisation des données", ar: "كيف نستخدم البيانات", en: "How we use data" },
        body: {
          fr: [
            "Répondre à vos demandes et préparer un devis.",
            "Améliorer nos services et l’expérience utilisateur.",
            "Envoyer la newsletter si vous y avez souscrit (désinscription possible).",
          ],
          ar: ["الرد على طلباتك وإعداد عرض سعر.", "تحسين خدماتنا وتجربة المستخدم.", "إرسال النشرة عند الاشتراك (مع إمكانية إلغاء الاشتراك)."],
          en: ["Respond to inquiries and prepare quotes.", "Improve our services and user experience.", "Send newsletters if you subscribed (opt-out available)."],
        },
      },
      {
        heading: { fr: "Partage et sous-traitants", ar: "المشاركة ومعالجو البيانات", en: "Sharing and subprocessors" },
        body: {
          fr: [
            "Nous pouvons utiliser des prestataires techniques (ex. Google Sheets, hébergement) pour traiter les formulaires et héberger le site.",
            "Nous ne vendons pas vos données personnelles.",
          ],
          ar: [
            "قد نستخدم مزودين تقنيين (مثل Google Sheets والاستضافة) لمعالجة النماذج واستضافة الموقع.",
            "لا نبيع بياناتك الشخصية.",
          ],
          en: [
            "We may use technical providers (e.g., Google Sheets, hosting) to process forms and host the website.",
            "We do not sell your personal data.",
          ],
        },
      },
      {
        heading: { fr: "Conservation", ar: "الاحتفاظ بالبيانات", en: "Retention" },
        body: {
          fr: ["Nous conservons les données aussi longtemps que nécessaire pour traiter votre demande et assurer le suivi.", "Vous pouvez demander la suppression."],
          ar: ["نحتفظ بالبيانات للمدة اللازمة لمعالجة طلبك والمتابعة.", "يمكنك طلب الحذف."],
          en: ["We retain data as long as needed to process your request and follow up.", "You can request deletion."],
        },
      },
      {
        heading: { fr: "Vos droits", ar: "حقوقك", en: "Your rights" },
        body: {
          fr: ["Vous pouvez demander l’accès, la rectification ou la suppression de vos données.", "Contact : contact@mo9awil.com"],
          ar: ["يمكنك طلب الوصول أو التصحيح أو الحذف.", "للتواصل: contact@mo9awil.com"],
          en: ["You can request access, correction, or deletion.", "Contact: contact@mo9awil.com"],
        },
      },
    ],
  },
  {
    slug: "terms",
    title: { fr: "Conditions d'Utilisation", ar: "شروط الاستخدام", en: "Terms of Service" },
    lastUpdated: LAST_UPDATED,
    intro: {
      fr: [
        "Ces Conditions régissent l’utilisation du site mo9awil.ma (le « Site »), exploité par ACHRAF CONSEIL (SARL) sous la marque Mo9awil, et, le cas échéant, la relation de prestation avec ses clients.",
        "En utilisant ce site, vous acceptez ces Conditions.",
      ],
      ar: [
        "تنظم هذه الشروط استخدام موقع mo9awil.ma («الموقع») الذي تشغّله شركة ACHRAF CONSEIL (SARL) تحت علامة Mo9awil، وعلاقة تقديم الخدمات عند الاقتضاء.",
        "باستخدامك للموقع فإنك توافق على هذه الشروط.",
      ],
      en: [
        "These Terms govern your use of mo9awil.ma (the “Website”), operated by ACHRAF CONSEIL (SARL) under the Mo9awil brand, and, where applicable, service engagements.",
        "By using this Website, you agree to these Terms.",
      ],
    },
    sections: [
      {
        heading: { fr: "Éditeur du site", ar: "مشغل الموقع", en: "Website operator" },
        body: {
          fr: [
            "Site : Mo9awil (mo9awil.ma)",
            "Société : ACHRAF CONSEIL — Société à Responsabilité Limitée (SARL)",
            "Siège social : AV MED V IMM 202 APP N°03 HAY KARIMA, Salé, Maroc",
            "Contact : contact@mo9awil.com",
          ],
          ar: [
            "الموقع: Mo9awil (mo9awil.ma)",
            "الشركة: ACHRAF CONSEIL — شركة ذات مسؤولية محدودة (SARL)",
            "المقر الاجتماعي: AV MED V IMM 202 APP N°03 HAY KARIMA, Salé, Maroc",
            "للتواصل: contact@mo9awil.com",
          ],
          en: [
            "Website: Mo9awil (mo9awil.ma)",
            "Company: ACHRAF CONSEIL — SARL (limited liability company)",
            "Registered office: AV MED V IMM 202 APP N°03 HAY KARIMA, Salé, Morocco",
            "Contact: contact@mo9awil.com",
          ],
        },
      },
      {
        heading: { fr: "Services", ar: "الخدمات", en: "Services" },
        body: {
          fr: [
            "Mo9awil fournit des services digitaux : développement web/app, branding/design, marketing digital et automatisation IA (via agents.mo9awil.ma).",
            "Le contenu du site est susceptible d’évoluer.",
          ],
          ar: [
            "توفر مو9اول خدمات رقمية: تطوير مواقع/تطبيقات، هوية بصرية، تسويق رقمي، وأتمتة IA (عبر agents.mo9awil.ma).",
            "قد يتغير محتوى الموقع بمرور الوقت.",
          ],
          en: [
            "Mo9awil provides digital services: web/app development, branding/design, digital marketing, and AI automation (via agents.mo9awil.ma).",
            "Website content may change over time.",
          ],
        },
      },
      {
        heading: { fr: "Devis et paiements", ar: "العروض والدفع", en: "Quotes and payments" },
        body: {
          fr: [
            "Tout devis est soumis à validation du périmètre (scope) et peut nécessiter un acompte pour démarrer.",
            "Les modalités exactes (prix, délais, livrables) sont définies par écrit avant le démarrage.",
          ],
          ar: [
            "أي عرض سعر يتطلب تحديد نطاق العمل وقد يتطلب دفعة مقدمة للبدء.",
            "يتم تحديد السعر والمدة والتسليمات كتابياً قبل الانطلاق.",
          ],
          en: [
            "Quotes depend on the agreed scope and may require a deposit to start.",
            "Exact terms (price, timeline, deliverables) are agreed in writing before work begins.",
          ],
        },
      },
      {
        heading: { fr: "Propriété intellectuelle", ar: "الملكية الفكرية", en: "Intellectual property" },
        body: {
          fr: [
            "Sauf accord contraire, le code/design livrés sont transférés au client après paiement des montants dus.",
            "Les outils, composants et bibliothèques tierces restent soumis à leurs licences.",
          ],
          ar: [
            "ما لم يتم الاتفاق خلاف ذلك، يتم نقل ملكية الكود/التصميم للعميل بعد سداد المستحقات.",
            "تظل الأدوات والمكونات والمكتبات التابعة لطرف ثالث خاضعة لتراخيصها.",
          ],
          en: [
            "Unless agreed otherwise, delivered code/design is transferred to the client after payment.",
            "Third-party tools and libraries remain subject to their licenses.",
          ],
        },
      },
      {
        heading: { fr: "Limitation de responsabilité", ar: "حدود المسؤولية", en: "Limitation of liability" },
        body: {
          fr: [
            "Mo9awil ne garantit pas des résultats financiers spécifiques (ex. ventes), car ils dépendent de facteurs externes.",
            "Dans la limite permise par la loi, la responsabilité est limitée aux montants payés pour la prestation concernée.",
          ],
          ar: [
            "لا تضمن مو9اول نتائج مالية محددة لأنها تعتمد على عوامل خارجية.",
            "ضمن ما يسمح به القانون، تقتصر المسؤولية على المبالغ المدفوعة للخدمة المعنية.",
          ],
          en: [
            "Mo9awil does not guarantee specific business results, which depend on external factors.",
            "To the extent permitted by law, liability is limited to amounts paid for the relevant service.",
          ],
        },
      },
    ],
  },
  {
    slug: "cookies",
    title: { fr: "Politique de Cookies", ar: "سياسة ملفات الارتباط", en: "Cookie Policy" },
    lastUpdated: LAST_UPDATED,
    intro: {
      fr: [
        "Cette Politique explique comment des cookies et technologies similaires peuvent être utilisés sur ce site.",
        "Vous pouvez gérer les cookies via les paramètres de votre navigateur.",
      ],
      ar: ["تشرح هذه السياسة كيفية استخدام ملفات الارتباط وتقنيات مشابهة على هذا الموقع.", "يمكنك إدارة ملفات الارتباط عبر إعدادات المتصفح."],
      en: ["This Policy explains how cookies and similar technologies may be used on this website.", "You can manage cookies via your browser settings."],
    },
    sections: [
      {
        heading: { fr: "Types de cookies", ar: "أنواع ملفات الارتباط", en: "Cookie types" },
        body: {
          fr: [
            "Essentiels : nécessaires au fonctionnement du site.",
            "Mesure & performance : pour comprendre l’usage (si activé).",
            "Marketing : par exemple Meta Pixel (si activé).",
          ],
          ar: ["أساسية: ضرورية لعمل الموقع.", "الأداء: لفهم الاستخدام (إن تم تفعيلها).", "تسويق: مثل Meta Pixel (إن تم تفعيله)."],
          en: ["Essential: required for the website to work.", "Analytics: to understand usage (if enabled).", "Marketing: e.g., Meta Pixel (if enabled)."],
        },
      },
      {
        heading: { fr: "Cookies tiers", ar: "ملفات طرف ثالث", en: "Third-party cookies" },
        body: {
          fr: ["Selon la configuration, des services tiers peuvent déposer des cookies (ex. analytics, chat)."],
          ar: ["حسب الإعدادات، قد تضع خدمات طرف ثالث ملفات ارتباط (مثل التحليلات أو الدردشة)."],
          en: ["Depending on configuration, third-party services may set cookies (e.g., analytics, chat)."],
        },
      },
    ],
  },
  {
    slug: "refund",
    title: { fr: "Politique de Remboursement & Annulation", ar: "سياسة الاسترجاع والإلغاء", en: "Refund & Cancellation Policy" },
    lastUpdated: LAST_UPDATED,
    intro: {
      fr: [
        "Les prestations digitales sont généralement personnalisées. Les remboursements dépendent de l’avancement du projet.",
        "Les conditions exactes peuvent être précisées dans un devis/contrat.",
      ],
      ar: ["الخدمات الرقمية غالباً مخصصة. يعتمد الاسترجاع على مرحلة المشروع.", "قد يتم تحديد الشروط بشكل أدق في عرض السعر/العقد."],
      en: ["Digital services are typically custom. Refunds depend on project progress.", "Exact terms may be defined in your quote/contract."],
    },
    sections: [
      {
        heading: { fr: "Annulation avant démarrage", ar: "الإلغاء قبل البدء", en: "Cancellation before start" },
        body: {
          fr: ["Si le travail n’a pas commencé, un remboursement peut être envisagé selon les frais engagés."],
          ar: ["إذا لم يبدأ العمل، قد يكون الاسترجاع ممكناً حسب التكاليف المتكبدة."],
          en: ["If work has not started, a refund may be considered depending on costs incurred."],
        },
      },
      {
        heading: { fr: "Après démarrage", ar: "بعد بدء العمل", en: "After work starts" },
        body: {
          fr: [
            "Une fois la production démarrée (design, développement, contenu), les montants facturés couvrent du temps de travail et peuvent ne pas être remboursables.",
            "Nous pouvons fournir les livrables réalisés à date selon les modalités convenues.",
          ],
          ar: [
            "بعد بدء الإنتاج (تصميم، تطوير، محتوى)، تغطي المبالغ وقت العمل وقد لا تكون قابلة للاسترجاع.",
            "يمكننا تسليم ما تم إنجازه حتى تاريخ الإيقاف حسب الاتفاق.",
          ],
          en: [
            "Once production starts (design, development, content), charges cover work time and may be non-refundable.",
            "We can deliver work completed up to the stop date as agreed.",
          ],
        },
      },
    ],
  },
  {
    slug: "data-protection",
    title: { fr: "Politique de Protection des Données", ar: "سياسة حماية البيانات", en: "Data Protection Policy" },
    lastUpdated: LAST_UPDATED,
    intro: {
      fr: [
        "Nous appliquons des mesures organisationnelles et techniques pour protéger vos données.",
        "Aucun système n’est 100% sécurisé : si un incident survient, nous prendrons des mesures raisonnables pour y répondre.",
      ],
      ar: ["نطبق إجراءات تقنية وتنظيمية لحماية بياناتك.", "لا يوجد نظام آمن 100%: عند حدوث حادث سنتخذ إجراءات معقولة للاستجابة."],
      en: ["We use organizational and technical measures to protect your data.", "No system is 100% secure; if an incident occurs, we’ll take reasonable steps to respond."],
    },
    sections: [
      {
        heading: { fr: "Mesures de sécurité", ar: "إجراءات الأمان", en: "Security measures" },
        body: {
          fr: ["Contrôle d’accès, séparation des environnements, et bonnes pratiques de développement.", "Limitation des accès aux comptes et données."],
          ar: ["التحكم في الوصول وفصل البيئات وأفضل ممارسات التطوير.", "تقييد الوصول للحسابات والبيانات."],
          en: ["Access control, environment separation, and secure development practices.", "Restricting access to accounts and data."],
        },
      },
      {
        heading: { fr: "Transferts", ar: "نقل البيانات", en: "Transfers" },
        body: {
          fr: ["Selon les outils utilisés, vos données peuvent être traitées par des prestataires internationaux (ex. hébergement)."],
          ar: ["حسب الأدوات المستخدمة، قد تتم معالجة البيانات لدى مزودين دوليين (مثل الاستضافة)."],
          en: ["Depending on tools used, data may be processed by international providers (e.g., hosting)."],
        },
      },
      {
        heading: { fr: "Contact", ar: "التواصل", en: "Contact" },
        body: {
          fr: ["Pour toute question sur la protection des données : contact@mo9awil.com"],
          ar: ["لأي استفسار حول حماية البيانات: contact@mo9awil.com"],
          en: ["For data protection questions: contact@mo9awil.com"],
        },
      },
    ],
  },
]

export function getPolicy(slug: string) {
  return POLICIES.find((p) => p.slug === slug)
}

export function getPolicyParams() {
  return POLICIES.map((p) => ({ slug: p.slug }))
}
