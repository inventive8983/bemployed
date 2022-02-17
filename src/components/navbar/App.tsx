import {
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import Logo from '../../Logo'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'

export const NavBar = () => {
  return (
    <Box minH="480px">
      <Box as="header">
        <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
          <Flex as="nav" justify="space-between">
            <HStack spacing="8">
              <Box as="a" href="#" rel="home">
                <VisuallyHidden>EcomLine App</VisuallyHidden>
                <Logo/>
              </Box>
            </HStack>
            <Flex align="center">
              <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
              <NavLink.Desktop>Home</NavLink.Desktop>
              <NavLink.Desktop>About Us</NavLink.Desktop>
                <NavLink.Desktop>Blog </NavLink.Desktop>
              <NavLink.Desktop>Pricing</NavLink.Desktop>
              <NavLink.Desktop>Login </NavLink.Desktop>
                <Button leftIcon={<FaTelegramPlane/>} variant={"solid"} bg="primary.500" rounded="md">
                  Try for Free Now
                </Button>
              </HStack>
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
