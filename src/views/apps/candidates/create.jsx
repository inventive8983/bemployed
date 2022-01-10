import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import JobForm from '../../../components/forms/JobForm'

function create() {
    return (
        <div>
               <Box px={8}>
            <Box py={10}>
                <Container maxW="6xl">
                    <Flex mb={8} direction="column" alignItems="left">
                        <Heading mb={3} size="xl">Create New Job</Heading>
                        <Text maxW="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque sapiente, eos, inventore.</Text>
                    </Flex>
                    <JobForm></JobForm>
                </Container>

            </Box>
            </Box>
        </div>
    )
}

export default create
