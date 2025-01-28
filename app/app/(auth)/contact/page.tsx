'use client'

import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'

import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { PageTransition } from '#components/motion/page-transition'
import { Section } from '#components/section'
import siteConfig from '#data/config'

const ContactForm: NextPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
  }

  return (
    <Section height="100vh" innerWidth="container.xl">
      <BackgroundGradient
        zIndex="-1"
        width={{ base: 'full', lg: '50%' }}
        left="auto"
        right="0"
        borderLeftWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
        }}
      />
      <PageTransition height="100%" display="flex" alignItems="center">
        <Stack
          width="100%"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          spacing="20"
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box pe="20">
            <NextLink href="/">
              <Box
                as={siteConfig.logo}
                width="160px"
                ms="4"
                mb={{ base: 0, lg: 16 }}
              />
            </NextLink>
            <Features
              display={{ base: 'none', lg: 'flex' }}
              columns={1}
              iconSize={4}
              flex="1"
              py="0"
              ps="0"
              maxW={{ base: '100%', xl: '80%' }}
              features={siteConfig.signup.features.map((feature) => ({
                iconPosition: 'left',
                variant: 'left-icon',
                ...feature,
              }))}
            />
          </Box>
          <Center height="100%" flex="1">
            <Box width="container.sm" pt="8" px="8">
<VStack
  as="form"
  onSubmit={handleSubmit}
  spacing={6}
  align="stretch"
>
  <Text fontSize="2xl" fontWeight="bold" mb={4}>
    Contactez-Nous
  </Text>
  <FormControl isRequired>
    <FormLabel>Nom Complet</FormLabel>
    <Input type="text" placeholder="Entrez votre nom complet" />
  </FormControl>
  <FormControl isRequired>
    <FormLabel>Email</FormLabel>
    <Input type="email" placeholder="Entrez votre email" />
  </FormControl>
  <FormControl isRequired>
    <FormLabel>Numéro de Téléphone</FormLabel>
    <Input type="tel" placeholder="Entrez votre numéro de téléphone" />
  </FormControl>
  <FormControl isRequired>
    <FormLabel>Choisir un Pack</FormLabel>
    <Select placeholder="Sélectionnez un pack">
      <option value="basic">Pack Basique</option>
      <option value="standard">Pack Standard</option>
      <option value="premium">Pack Premium</option>
    </Select>
  </FormControl>
  <Button
    type="submit"
    colorScheme="primary"
    size="lg"
    width="100%"
  >
    Soumettre
  </Button>
</VStack>

            </Box>
          </Center>
        </Stack>
      </PageTransition>
    </Section>
  )
}

export default ContactForm
