import {
  Box,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  StackProps,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheck } from 'react-icons/fi'

import React from 'react'

import {
  ButtonLink,
  ButtonLinkProps,
} from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Section, SectionProps, SectionTitle } from '#components/section'

export interface PricingPlan {
  id: string
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
  features: Array<PricingFeatureProps | null>
  action: ButtonLinkProps & { label?: string }
  isRecommended?: boolean
}

export interface PricingProps extends SectionProps {
  description: React.ReactNode
  plans: Array<PricingPlan>
}

export const Pricing: React.FC<PricingProps> = (props) => {
  const { children, plans, title, description, ...rest } = props

  return (
    <Section id="pricing" pos="relative" {...rest}>
      <BackgroundGradient height="100%" />
      <Box zIndex="2" pos="relative">
        <SectionTitle title={title} description={description}></SectionTitle>

        <SimpleGrid columns={[1, null, 3]} spacing={4}>
          {plans?.map((plan) => (
            <PricingBox
              key={plan.id}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              sx={
                plan.isRecommended
                  ? {
                      borderColor: 'primary.500',
                      _dark: {
                        borderColor: 'primary.500',
                        bg: 'blackAlpha.300',
                      },
                    }
                  : {}
              }
            >
              <PricingFeatures>
                {plan.features.map((feature, i) =>
                  feature ? (
                    <PricingFeature key={i} {...feature} />
                  ) : (
                    <br key={i} />
                  ),
                )}
              </PricingFeatures>
              <ButtonLink
                colorScheme="white"
                rounded={'lg'}
                textColor={'#8952E0'}
                py={5}
                _hover={{ bg: 'gray.300', color: 'purple.800' }}
                transition="background 0.9s ease-in-out"
                {...plan.action}
              >
                {plan.action.label || 'Choisissez un plan'}
              </ButtonLink>
            </PricingBox>
          ))}
        </SimpleGrid>

        {children}
      </Box>
    </Section>
  )
}

const PricingFeatures: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <VStack
      align="stretch"
      justifyContent="stretch"
      spacing="4"
      mb="8"
      flex="1"
    >
      {children}
    </VStack>
  )
}

export interface PricingFeatureProps {
  title: React.ReactNode
  iconColor?: string
}

const PricingFeature: React.FC<PricingFeatureProps> = (props) => {
  const { title, iconColor = 'primary.500' } = props
  return (
    <HStack>
      <Icon as={FiCheck} color={iconColor} />
      <Text flex="1" fontSize="sm">
        {title}
      </Text>
    </HStack>
  )
}

export interface PricingBoxProps extends Omit<StackProps, 'title'> {
  title: React.ReactNode
  description: React.ReactNode
  price: React.ReactNode
}

const PricingBox: React.FC<PricingBoxProps> = (props) => {
  const { title, description, price, children, ...rest } = props
  return (
    <VStack
      zIndex="2"
      bg="whiteAlpha.600"
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="stretch"
      border="1px solid"
      borderColor="gray.400"
      _dark={{
        bg: 'blackAlpha.300',
        borderColor: 'gray.800',
      }}
      _hover={{
        transform: 'scale(1.04)',
        transition: 'transform 0.4s ease-in-out', // Adding slow transition
      }}
      transition="transform 0.5s ease-in-out"
      {...rest}
    >
      <Heading as="h3" size="md" fontWeight="bold" fontSize="lg" mb="2">
        {title}
      </Heading>
      <Box color="muted" h={1} pb={20} fontSize={'13'}>
        {description}
      </Box>
      <Box fontSize="2xl" py="4">
        <Box fontWeight="bold" color={'#8952E0'}>
          {price}{' '}
          <Box fontSize={'10px'} display={'inline'} verticalAlign="super">
            HT
          </Box>
        </Box>
      </Box>
      <VStack align="stretch" justifyContent="stretch" spacing="4" flex="1">
        {children}
      </VStack>
    </VStack>
  )
}
