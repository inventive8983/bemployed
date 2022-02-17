import { chakra } from '@chakra-ui/react'

export const SocialButton = chakra('a', {
  baseStyle: {
    rounded: 'full',
    w: '8',
    h: '8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    bgGradient: 'linear(45deg, primary.500, secondary.500)',
    color: 'white',
    transition: 'all 0.2s',
    _hover: {
      bgGradient: 'linear(135deg, primary.500, secondary.500)',
    },
  },
})
