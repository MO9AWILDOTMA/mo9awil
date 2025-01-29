'use client'

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Stack,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { saveToSheet } from 'utils/save-sheet'
import { IResponse, sendEmail } from 'utils/send-email'

import React from 'react'
import { useCallback, useEffect, useState } from 'react'

import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { PageTransition } from '#components/motion/page-transition'
import { Section } from '#components/section'
import siteConfig from '#data/config'

export type MyFormData = {
  name: string
  email: string
  message: string
  phone: string
  pack: string
}

const ContactForm: NextPage = () => {
  const { register, handleSubmit, setValue, reset } = useForm<MyFormData>()
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<IResponse | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const router = useRouter()

  // Handle modal closure with different actions based on response status
  const handleModalClose = useCallback(() => {
    onClose() // Close the modal first

    if (response?.status === 'success') {
      // Show a toast notification
      toast({
        title: 'Merci pour votre message!',
        description: 'Nous vous contacterons bientôt.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

      // Optional: Redirect to a thank you page
      router.push('/')
    } else if (response?.status === 'failed') {
      // Show error toast
      toast({
        title: 'Une erreur est survenue',
        description: 'Veuillez réessayer plus tard.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })

      // Optional: Reset specific fields or keep the form data
      // reset() // Uncomment if you want to reset on error
    }

    // Clear the response state
    setResponse(null)
  }, [response, onClose, toast, router])

  const onSubmit: SubmitHandler<MyFormData> = async (data) => {
    setLoading(true)
    setResponse(null)

    try {
      // Exécuter à la fois saveToSheet et sendEmail en parallèle
      const [sheetResponse, emailResponse] = await Promise.all([
        saveToSheet(data),
        sendEmail(data),
      ])

      // Vérifier si les deux opérations ont réussi
      console.log(sheetResponse.status)

      if (
        sheetResponse.status === 'success' ||
        emailResponse.status === 'success'
      ) {
        console.log('1')
        setResponse({
          message: 'Les deux opérations ont été effectuées avec succès !',
          status: 'success',
        })
        reset() // Réinitialiser le formulaire si les deux opérations réussissent
      } else if (
        sheetResponse.status === 'success' ||
        sheetResponse.status === '0'
      ) {
        setResponse({
          message:
            "Les données ont été enregistrées, mais l'envoi de l'email a échoué. " +
            (emailResponse.message || ''),
          status: 'partial',
        })
      } else if (emailResponse.status === ('success' as string)) {
        setResponse({
          message:
            "Email envoyé avec succès, mais l'enregistrement des données a échoué. " +
            (sheetResponse.message || ''),
          status: 'partial',
        })
      } else {
        setResponse({
          message:
            'Les deux opérations ont échoué. ' +
            (sheetResponse.message || '') +
            (emailResponse.message || ''),
          status: 'failed',
        })
      }

      onOpen() // Ouvrir le modal pour afficher la réponse
    } catch (err) {
      // Gérer les erreurs inattendues
      console.error("Erreur lors de l'envoi ou de l'enregistrement:", err)

      // Vérifier si l'erreur provient d'une des deux fonctions (saveToSheet ou sendEmail)
      if (err instanceof Error) {
        // Handle network-related errors like "Failed to fetch"
        if (err.message.includes('Failed to fetch')) {
          setResponse({
            message:
              'Une erreur de réseau est survenue. Veuillez vérifier votre connexion internet.',
            status: 'failed',
          })
        } else {
          setResponse({
            message: `Une erreur inattendue est survenue: ${err.message}`,
            status: 'failed',
          })
        }
      } else {
        setResponse({
          message: 'Une erreur inconnue est survenue.',
          status: 'failed',
        })
      }

      onOpen()
    } finally {
      setLoading(false) // Assurer que le chargement est toujours désactivé
    }
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const pack = urlParams.get('pack')
    if (pack) {
      setValue('pack', pack)
    }
  }, [setValue])

  // Modal with enhanced closure handling
  const ResponseModal = () => (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {response?.status === 'success' ? 'Succès!' : 'Erreur'}
        </ModalHeader>
        <ModalBody>
          <Alert
            status={response?.status === 'success' ? 'success' : 'error'}
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
            borderRadius="md"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1}>
              {response?.status === 'success'
                ? 'Message Envoyé!'
                : "Échec de l'envoi"}
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              {response?.message}
            </AlertDescription>
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleModalClose}>
            {response?.status === 'success' ? 'Continuer' : 'Fermer'}
          </Button>
          {response?.status === 'failed' && (
            <Button
              variant="ghost"
              onClick={() => {
                handleModalClose()
                // Scroll to top of form
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Réessayer
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )

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
                onSubmit={handleSubmit(onSubmit)}
                spacing={6}
                align="stretch"
              >
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                  Contactez-Nous
                </Text>
                <FormControl isRequired>
                  <FormLabel>Nom Complet</FormLabel>
                  <Input
                    {...register('name', { required: true })}
                    type="text"
                    placeholder="Entrez votre nom complet"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...register('email', { required: true })}
                    type="email"
                    placeholder="Entrez votre email"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Numéro de Téléphone</FormLabel>
                  <Input
                    {...register('phone', { required: true })}
                    type="tel"
                    placeholder="Entrez votre numéro de téléphone"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Choisir un Pack</FormLabel>
                  <Select
                    {...register('pack', { required: true })}
                    placeholder="Sélectionnez un pack"
                  >
                    <option value="basic">Pack Basique</option>
                    <option value="standard">Pack Standard</option>
                    <option value="premium">Pack Premium</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Input
                    {...register('message', { required: false })}
                    type="text"
                    placeholder="Laissez-nous un message, nous sommes là pour vous répondre rapidement !"
                  />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="primary"
                  size="lg"
                  width="100%"
                  disabled={loading}
                >
                  {loading ? <Spinner size="sm" color="white" mr="2" /> : null}
                  {loading ? 'Envoi en cours...' : 'Soumettre'}
                </Button>
              </VStack>
            </Box>
          </Center>
        </Stack>
      </PageTransition>
      <ResponseModal />
    </Section>
  )
}

export default ContactForm
