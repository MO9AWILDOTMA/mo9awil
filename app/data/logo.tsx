import { HTMLChakraProps, chakra, useColorModeValue } from '@chakra-ui/react'

import Image from 'next/image'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const logoSrc = useColorModeValue(
    '/static/images/logo_text_black.png',
    '/static/images/logo_text_white.png',
  )

  const logoScale = useColorModeValue(
    'scale(0.9)', // Smaller scale for black logo
    'scale(0.7)', // Smaller scale for white logo
  )

  return (
    <chakra.div
      position="relative"
      width={['170px', '180px', '270px']} // Even smaller widths
      height={['65px', '70px', '90px']} // Even smaller heights
      marginTop={['2px', '0px', '-8px']} // Positive margin for mobile
      marginLeft="1px" // Remove left margin
      {...props}
    >
      <Image
        src={logoSrc}
        alt="Création Logo"
        fill
        style={{
          objectFit: 'contain',
          objectPosition: 'left center',
          transform: logoScale,
        }}
        priority
        quality={100}
      />
    </chakra.div>
  )
}