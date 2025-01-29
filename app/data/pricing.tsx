export default {
  title: 'Nos tarifs',
  description: 'Explorez nos offres tarifaires',
  plans: [
    {
      id: 'domiciliation',
      title: 'Offre standard',
      description: 'Tous frais inclus. 0 frais cachés.',
      price: '3000 Dhs',
      features: [
        {
          title: 'Certificat négatif',
        },
        {
          title: 'Les statuts de votre société',
        },
        {
          title: 'L’enregistrement des statuts et contrat de bail',
        },
        {
          title: 'Inscription a la taxe profiessionnelle',
        },
        {
          title: 'Immatriculation de votre société au RC',
        },
        {
          title: "Publication de l'annonce légale",
        },
        {
          title: 'Publication au bulletin officiel',
        },
        {
          title: 'Obtention de l’Identifiant Fiscal',
        },
        {
          title: 'Affiliation à la CNSS',
        },
      ],
      action: {
        href: '/contact?pack=basic',
      },
    },
    {
      id: 'company-creation',
      title: 'Offre Domiciliation',
      description:
        'Tous frais inclus. 0 frais cachés. Inclus notamment la domiciliation',
      price: '3900 Dhs',
      isRecommended: true,
      features: [
        {
          title: 'Certificat négatif',
        },
        {
          title: 'Les statuts de votre société',
        },
        {
          title: 'L’enregistrement des statuts et contrat de bail',
        },
        {
          title: 'Inscription a la taxe profiessionnelle',
        },
        {
          title: 'Immatriculation de votre société au RC',
        },
        {
          title: "Publication de l'annonce légale",
        },
        {
          title: 'Publication au bulletin officiel',
        },
        {
          title: 'Obtention de l’Identifiant Fiscal',
        },
        {
          title: 'Affiliation à la CNSS',
        },
        {
          title: 'Domiciliation de votre société pendant 12 mois',
        },
        {
          title: 'Consultation Gratuite (1h)',
        },
      ],
      action: {
        href: '/contact?pack=standard',
      },
    },
    {
      id: 'full-service',
      title: 'Offre Premium',
      description:
        'Tous frais inclus. 0 frais cachés. Inclus également votre logo, votre carte de visite, et le cachet de votre société',
      price: '4900 Dhs',
      features: [
        {
          title: 'Certificat négatif',
        },
        {
          title: 'Les statuts de votre société',
        },
        {
          title: 'L’enregistrement des statuts et contrat de bail',
        },
        {
          title: 'Inscription a la taxe profiessionnelle',
        },
        {
          title: 'Immatriculation de votre société au RC',
        },
        {
          title: "Publication de l'annonce légale",
        },
        {
          title: 'Publication au bulletin officiel',
        },
        {
          title: 'Obtention de l’Identifiant Fiscal',
        },
        {
          title: 'Affiliation à la CNSS',
        },

        {
          title: 'Domiciliation de votre société pendant 12 mois',
        },
        {
          title: 'Consultation Gratuite illimité',
        },
        {
          title: 'Le cachet de votre société',
        },
        {
          title: 'Comptabilité gratuite de 6 mois',
        },
      ],
      action: {
        href: '/contact?pack=premium',
      },
    },
  ],
}
