import {
  Box,
  Button,
  Divider,
  Flex,
  Stack,
  HStack, IconButton,
  StackDivider,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { IoIosSend } from 'react-icons/io'
import { HiLocationMarker, HiPencilAlt, HiTrash } from 'react-icons/hi'

interface DescriptionProps {
  title: string
  children: React.ReactNode
  location: string
}

export const Description = (props: DescriptionProps) => {
  const { title, children, location } = props
  return (
    <Box position="relative">
      <Link to={`/app/jobs/view/1234`}>
        <Button variant="link" fontWeight="bold" maxW="xl">
          {title}
        </Button>
      </Link>
      <HStack fontSize="sm" fontWeight="medium" color={mode('gray.500', 'white')} mt="1">
        <Box as={HiLocationMarker} fontSize="md" color="gray.400" />
        <span>{location}</span>
      </HStack>
      <Box mt="3" maxW="xl" color={mode('gray.600', 'gray.200')}>
        {children}
      </Box>
      <HStack
        position={{ sm: 'absolute' }}
        top={{ sm: '0' }}
        insetEnd={{ sm: '0' }}
        mt={{ base: '4', sm: '0' }}
      >
        <Button leftIcon={<IoIosSend/>} fontSize="sm" px={3} py={2} height="auto" rounded="full" colorScheme="purple">Send a Candidate</Button>
        <IconButton aria-label="Edit" icon={<HiPencilAlt />} rounded="full" size="sm" />
        <IconButton aria-label="Delete" icon={<HiTrash />} rounded="full" size="sm" />
      </HStack>
    </Box>
  )
}

export const JobCard = () => {
  return (
      <Box mx="auto">
        <Box
          borderTopWidth={1}
          bg={mode('white', 'gray.700')}
          mx="auto"
          overflow="hidden"
        >
          <Stack spacing="6" py="5" px="8" divider={<StackDivider />}>
            <Description
              title="UX Strategist &amp; Sales Funnel Designer"
              location="Los Angeles, United States"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at
              reprehenderit maxime aut beatae ad.
            </Description>
          </Stack>
        </Box>
      </Box>
  )
}
