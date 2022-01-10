import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const Card = ({p=6, ...props}: BoxProps) => (
  <Box
    bg={useColorModeValue('white', 'gray.700')}
    rounded={{ md: 'lg' }}
    borderWidth={1}
    p ={p}
    overflow="hidden"
    {...props}
  />
)
