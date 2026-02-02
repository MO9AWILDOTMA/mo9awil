export type NicheKey = "restaurants" | "cliniques" | "ecommerce"

export type NicheFAQItem = {
  question: string
  answer: string
}

export type NicheConfig = {
  slug: NicheKey
  label: string
  title: string
  description: string
  h1: string
  subtitle: string
  whatsappMessage: string
  painPoints: string[]
  deliverables: string[]
  exampleSections: string[]
  faq: NicheFAQItem[]
}

export const NICHES: Record<NicheKey, NicheConfig> = {
  restaurants: {
    slug: "restaurants",
    label: "Restaurants",
    title: "Restaurants",
    description: "Landing page restaurant optimisée mobile avec menu, localisation et WhatsApp (commandes/réservations).",
    h1: "Plus de réservations et commandes sur WhatsApp",
    subtitle: "Une landing page mobile-first (menu + localisation) pour transformer vos visiteurs en clients.",
    whatsappMessage: "Salam, je veux une landing page pour mon restaurant (menu + WhatsApp + localisation).",
    painPoints: [
      "Le menu n’est pas accessible en 10 secondes sur mobile.",
      "Les clients ne trouvent pas l’adresse/Maps et quittent.",
      "Les demandes arrivent partout (DM, appels, messages) et se perdent.",
      "Pas d’avis/galerie visibles → moins de confiance.",
    ],
    deliverables: [
      "1 page pro (mobile-first) avec sections claires",
      "Boutons WhatsApp (commander / réserver) + message pré-rempli",
      "Menu structuré (catégories, best sellers, prix)",
      "Localisation + Google Maps + lien d’itinéraire",
      "Galerie photos optimisée (rapide)",
      "Avis/Google reviews (option selon dispo)",
      "SEO de base + performance (Core Web Vitals)",
    ],
    exampleSections: ["Menu", "Horaires", "Adresse/Maps", "Galerie", "Avis", "WhatsApp Commander / Réserver"],
    faq: [
      {
        question: "Vous gérez le contenu (menu, photos) ?",
        answer: "Oui. Vous pouvez fournir le contenu, ou on vous aide à le structurer (menu, textes, photos).",
      },
      {
        question: "C’est possible en FR/AR ?",
        answer: "Oui (option). On peut préparer une version FR/AR selon vos besoins.",
      },
      {
        question: "Hébergement et mise en ligne ?",
        answer: "On peut inclure l’hébergement ou vous guider selon votre stack. La mise en ligne est incluse.",
      },
    ],
  },
  cliniques: {
    slug: "cliniques",
    label: "Cliniques",
    title: "Cliniques & cabinets",
    description: "Page claire pour patients: services, horaires, localisation et prise de RDV via WhatsApp.",
    h1: "Une page claire pour vos patients (rdv, services, confiance)",
    subtitle: "Présentez vos services et facilitez la prise de rendez-vous sur WhatsApp (mobile-first).",
    whatsappMessage: "Salam, je veux une landing page pour ma clinique/cabinet (services + rdv WhatsApp).",
    painPoints: [
      "Les patients ne trouvent pas rapidement les services et horaires.",
      "Manque de confiance (médecins, spécialités, avis, photos).",
      "Trop de frictions pour prendre rendez-vous.",
      "Adresse et accès peu clairs sur mobile.",
    ],
    deliverables: [
      "1 page pro (mobile-first) orientée confiance",
      "Sections services + spécialités + médecins (si applicable)",
      "CTA WhatsApp “Prendre RDV” + message pré-rempli",
      "Horaires, adresse/Maps, infos pratiques (accès, parking)",
      "Avis/témoignages (option selon dispo)",
      "SEO de base + performance",
    ],
    exampleSections: ["Services", "Médecins/équipe", "Horaires", "Adresse/Maps", "Avis", "WhatsApp Prendre RDV"],
    faq: [
      {
        question: "Peut-on ajouter plusieurs médecins/spécialités ?",
        answer: "Oui. On structure la page pour rester claire (sections, ancres, cartes).",
      },
      {
        question: "Vous pouvez intégrer Google Maps et un itinéraire ?",
        answer: "Oui. Maps + lien direct d’itinéraire sont inclus.",
      },
      {
        question: "Est-ce que vous gérez le contenu ?",
        answer: "Vous pouvez fournir les textes/infos, ou on vous aide à les reformuler (FR).",
      },
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    label: "E-commerce",
    title: "E-commerce",
    description: "Vitrine rapide + parcours d’achat prêt à scaler (tracking, support WhatsApp, best sellers).",
    h1: "Une vitrine rapide + un parcours d’achat prêt à scaler",
    subtitle: "Mettez en avant vos best sellers, optimisez la conversion et suivez vos résultats.",
    whatsappMessage: "Salam, je veux un site e-commerce / landing de vente (produits + tracking + WhatsApp).",
    painPoints: [
      "Pages lentes → drop sur mobile.",
      "Produit/USP pas clair → faible conversion.",
      "Pas de tracking fiable (Meta/GA) → décisions à l’aveugle.",
      "Support dispersé → pertes de ventes.",
    ],
    deliverables: [
      "Landing de vente ou vitrine e-commerce (mobile-first)",
      "Sections best sellers + catégories + bénéfices",
      "CTA WhatsApp support/commande + message pré-rempli",
      "Tracking (Analytics/Meta Pixel) si applicable",
      "SEO de base + performance",
      "Base prête à évoluer (ajout produits/collections)",
    ],
    exampleSections: ["Best sellers", "Catégories", "Bénéfices/USP", "FAQ", "Support WhatsApp", "Tracking (option)"],
    faq: [
      {
        question: "Vous faites une landing ou un e-commerce complet ?",
        answer: "Les deux sont possibles. On recommande de commencer simple (landing) puis scaler selon les résultats.",
      },
      {
        question: "Paiement en ligne ?",
        answer: "Possible selon votre stack/prestataire. Sinon on démarre avec WhatsApp/commande puis on upgrade.",
      },
      {
        question: "Tracking (Meta/Analytics) ?",
        answer: "Oui, on peut intégrer les bases (selon accès).",
      },
    ],
  },
}

