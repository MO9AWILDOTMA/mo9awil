import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'

interface BackgroundGradientProps extends BoxProps {
  hideOverlay?: boolean
}

export const BackgroundGradient = ({ hideOverlay, ...props }: BackgroundGradientProps) => {
  const theme = useTheme()
  const colors = [
    theme.colors.primary?.[800] ?? '#01337d', // Fallback color if theme color is undefined
    theme.colors.secondary?.[500] ?? '#5b6af0',
    theme.colors.cyan?.[500] ?? '#00B5D8',
    theme.colors.teal?.[500] ?? '#319795',
  ]

  const fallbackBackground = `
    radial-gradient(at top left, ${colors[0]} 30%, transparent 80%),
    radial-gradient(at bottom, ${colors[1]} 0%, transparent 60%),
    radial-gradient(at bottom left, ${colors[2]} 0%, transparent 50%),
    radial-gradient(at top right, ${colors[3]}, transparent),
    radial-gradient(at bottom right, ${colors[0]} 0%, transparent 50%)
  `

  const bgColor = useColorModeValue('white', 'gray.900')
  const gradientOverlay = `linear-gradient(0deg, var(--chakra-colors-${bgColor.split('.')[0]}-${
    bgColor.split('.')[1] || '500'
  }) 60%, rgba(0, 0, 0, 0) 100%)`

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.3', '0.5')}
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      {!hideOverlay && (
        <Box
          backgroundImage={gradientOverlay}
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          zIndex="1"
        />
      )}
    </Box>
  )
}