import { Box, Flex, FlexProps, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

interface Props extends FlexProps {
  label: string
  value: string
}

export const Property = (props: Props) => {
  const { label, value, ...flexProps } = props
  return (
    <Flex
      as="dl"
      direction={'column'}
      px="6"
      py="4"
      {...flexProps}
    >
      <Box as="dt" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  )
}
