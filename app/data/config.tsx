import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaLinkedin } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Mo9awil.ma - Services aux Entreprises au Maroc',
    description:
      'Votre partenaire de confiance pour la domiciliation d’entreprise, la création de sociétés et les services de gestion au Maroc',
  } as NextSeoProps,
  termsUrl: '/conditions',
  privacyUrl: '/confidentialite',
  header: {
    links: [
      {
        id: 'features',
        label: 'Services',
      },
      {
        id: 'pricing',
        label: 'Tarif',
      },
      {
        id: 'benefits',
        label: 'Avantages',
      },
      {
        id: 'about',
        label: 'À propos',
      },
      {
        label: 'Commencer',
        href: '/contact',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: <>© 2024 mo9awil.ma. Tous droits réservés.</>,
    links: [
      {
        href: 'mailto:contact@votresociete.ma',
        label: 'Contact',
      },
      {
        href: 'https://linkedin.com/company/votresociete',
        label: <FaLinkedin size="14" />,
      },
    ],
  },
  signup: {
    title: 'Lancez Votre Entreprise au Maroc',
    features: [
      {
        icon: FiCheck,
        title: 'Adresse Professionnelle',
        description: 'Adresse prestigieuse à Casablanca, Rabat, ou Tanger.',
      },
      {
        icon: FiCheck,
        title: 'Conformité Totale',
        description:
          'Support complet pour la conformité légale et réglementaire marocaine.',
      },
      {
        icon: FiCheck,
        title: 'Support Expert',
        description:
          'Équipe dédiée de professionnels en gestion et comptabilité.',
      },
      {
        icon: FiCheck,
        title: 'Solution Complète',
        description: 'Services intégrés pour votre entreprise au Maroc.',
      },
    ],
  },
}

export default siteConfig
