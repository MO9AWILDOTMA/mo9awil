'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme as baseTheme } from '#theme'

// You can extend the theme here if needed
const theme = extendTheme(baseTheme)

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}

    </ChakraProvider>
  )
}
