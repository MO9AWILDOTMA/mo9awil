'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Votre Succès
                <Br /> au Maroc
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Services professionnels complets pour <Em>votre entreprise</Em>
                <Br /> Domiciliation, création d'entreprise et comptabilité{' '}
                <Br /> adaptés à vos besoins.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/contact">
                  Nous Contacter
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#features"
                  variant="outline"
                  rightIcon={<Icon as={FiArrowRight} />}
                >
                  Nos Services
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
              <Box
                overflow="hidden"
                height="100%"
                position="relative"
                bg="white"
                _dark={{
                  bg: 'gray.800',
                }}
                borderRadius="xl"
                boxShadow="xl"
                // gap={4}
              >
                <Box
                  position="absolute"
                  inset="0"
                  bgGradient="linear(to-b, transparent, blackAlpha.50)"
                  zIndex="1"
                  _dark={{
                    bgGradient: 'linear(to-b, transparent, whiteAlpha.100)',
                  }}
                />
                <Image
                  src="/static/images/business-vector.png"
                  width={650}
                  height={500}
                  alt="Modern office space representing our business services"
                  quality={100}
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Expertise Locale',
            icon: FiSmile,
            description:
              'Une équipe qui comprend parfaitement le marché marocain.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Service Complet',
            icon: FiSliders,
            description:
              'De la domiciliation à la comptabilité, tous vos besoins couverts.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Accompagnement',
            icon: FiGrid,
            description:
              'Support personnalisé tout au long de votre parcours entrepreneurial.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Conformité',
            icon: FiThumbsUp,
            description:
              'Respect total des réglementations marocaines en vigueur.',

            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
<Highlights id='about'>
  <HighlightsItem colSpan={[1, null, 2]} title="Pourquoi Choisir Mo9awil.ma ?">
    <VStack alignItems="flex-start" spacing="8">
      <Text color="muted" fontSize="xl">
        Faites confiance à <Em>les conseillers juridiques les plus fiables du Maroc</Em> pour répondre à vos besoins professionnels. Notre équipe expérimentée offre des conseils d'experts et un accompagnement personnalisé tout au long de votre parcours entrepreneurial.
      </Text>

      <Flex
        rounded="full"
        borderWidth="1px"
        flexDirection="row"
        alignItems="center"
        py="4"
        px="8"
        bg="primary.900"
        _dark={{ bg: 'gray.900' }}
      >
        <Text color="white" fontSize="lg" fontWeight="medium">
          Recommandé par des centaines d’entreprises à travers le Maroc
        </Text>
      </Flex>
    </VStack>
  </HighlightsItem>
  <HighlightsItem title="Accompagnement Professionnel">
    <Text color="muted" fontSize="lg">
      Nos experts juridiques offrent des conseils complets et un soutien pour assurer le succès de votre entreprise sur le marché marocain.
    </Text>
  </HighlightsItem>
  <HighlightsTestimonialItem
    name="Sara Benjelloun"
    description="Entrepreneure"
    avatar="/static/images/avatar.jpg"
    gradient={['blue.200', 'green.500']}
    sx={{
      '.chakra-card': {
        bg: 'white',
        _dark: {
          bg: 'gray.800',
          borderColor: 'whiteAlpha.100',
        },
        boxShadow: 'xl',
        borderRadius: 'xl',
        borderWidth: '1px',
        borderColor: 'gray.100',
      },
      '.chakra-card__body': {
        color: 'gray.700',
        _dark: {
          color: 'whiteAlpha.900',
        },
      },
      '.chakra-heading': {
        color: 'gray.900',
        _dark: {
          color: 'white',
        },
      },
      '.chakra-text span': {
        color: 'gray.600',
        _dark: {
          color: 'whiteAlpha.700',
        },
      },
    }}
  >
    "L'expertise juridique et l'attention personnalisée de Mo9awil.ma ont été inestimables pour la création de mon entreprise. Leur soutien continu a été crucial pour rester en conformité et gérer les questions administratives."
  </HighlightsTestimonialItem>
  <HighlightsItem colSpan={[1, null, 2]} title="Support Juridique Complet">
    <Text color="muted" fontSize="lg">
      De la consultation initiale au soutien continu, nous offrons l'expertise et les conseils juridiques dont vous avez besoin pour établir et maintenir votre entreprise au Maroc.
    </Text>
    <Wrap mt="8">
      {[
        'consultation juridique',
        'enregistrement d’entreprise',
        'domiciliation d’entreprise',
        'gestion des documents',
        'gestion de la conformité',
        'support administratif',
        'représentation juridique',
        'permis d’entreprise',
        'conformité réglementaire',
        'immatriculation fiscale',
        'correspondance officielle',
        'licences d’entreprise',
        'documentation légale',
        'services aux entreprises',
        'conseils professionnels',
      ].map((value) => (
        <Tag
          key={value}
          variant="subtle"
          colorScheme="blue"
          rounded="full"
          px="3"
        >
          {value}
        </Tag>
      ))}
    </Wrap>
  </HighlightsItem>
</Highlights>

  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
        Services Professionnels
          <Br /> pour Votre Entreprise
        </Heading>
      }
      description={
        <>
          Des solutions complètes pour votre réussite au Maroc.
          <Br />
          Une expertise locale pour un accompagnement sur mesure.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
 features={[
        {
          title: 'Domiciliation',
          icon: FiBox,
          description:
            'Adresse professionnelle prestigieuse à Casablanca, Rabat ou Tanger.',
          variant: 'inline',
        },
        {
          title: "Création d'Entreprise",
          icon: FiLock,
          description:
            'Accompagnement complet dans la création de votre société au Maroc.',
          variant: 'inline',
        },
        {
          title: 'Comptabilité',
          icon: FiSearch,
          description:
            'Gestion comptable professionnelle et conformité fiscale.',
          variant: 'inline',
        },
        {
          title: 'Conseil Juridique',
          icon: FiUserPlus,
          description:
            'Expertise en droit des affaires marocain et accompagnement légal.',
          variant: 'inline',
        },
        {
          title: 'Support Administratif',
          icon: FiFlag,
          description:
            'Gestion du courrier, secrétariat et services administratifs.',
          variant: 'inline',
        },
        {
          title: 'Développement',
          icon: FiTrendingUp,
          description:
            'Stratégies de croissance et développement commercial au Maroc.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
