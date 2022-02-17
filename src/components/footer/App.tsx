import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import * as React from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'
import Logo from '../../Logo'
import { SocialButton } from './SocialButton'
import {links, socialLinks } from './_data'

export const Footer = () => (
  <>
  <Box bg="#0d0d0d" as="footer" py="64px">
    <Box maxW="7xl" px="8" mx="auto">
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        justify="space-between"
        pb="8"
        align="flex-start"
        id="top"
      >
        <Box paddingEnd="12" mb={{ base: '10', lg: 0 }}>
          <Heading>EcomLines</Heading>
          <HStack spacing="4" mt="8" as="ul">
            {socialLinks.map((link, idx) => (
              <SocialButton key={idx} href={link.href}>
                <Box srOnly>{link.label}</Box>
                {link.icon}
              </SocialButton>
            ))}
          </HStack>
        </Box>
        <SimpleGrid
          w="full"
          maxW={{ base: 'unset', lg: '2xl' }}
          columns={{ base: 1, lg: 3 }}
          spacing={{ base: '8', md: '4' }}
          fontSize="sm"
        >
          {links.map((group, idx) => (
            <Box key={idx}>
              <Text fontWeight="bold" mb="4">
                {group.title}
              </Text>
              <Stack as="ul" listStyleType="none">
                {group.links.map((link, idx) => (
                  <Box as="li" key={idx}>
                    <Box as="a" href={link.href} _hover={{ textDecor: 'underline' }}>
                      {link.label}
                      {link.badge && (
                        <Box as="span" marginStart="2">
                          {link.badge}
                        </Box>
                      )}
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
   
    </Box>
  </Box>
     <Flex
     justify="center"
     fontSize="sm"
     py={4}
   >
    <Box>&copy; 2022 Ecom Lines. All rights reserved.</Box>
   </Flex>
   </>
)
