import { Box, Container, Flex, Heading, HStack, Text, useColorModeValue as mode,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    SimpleGrid,
    Wrap,
    VStack,
    Avatar,
    Badge,
    ButtonGroup
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiPaperPlane } from 'react-icons/bi';
import { FaEdit, FaUserFriends } from 'react-icons/fa';
import { HiLocationMarker, HiPhone } from 'react-icons/hi'
import { useLocation, useParams } from 'react-router-dom';
import { Card } from '../../../components/cards/Card';
import { DetailsCard } from '../../../components/cards/DetailsCard';
import { Property } from '../../../components/cards/Property';
import JobForm from '../../../components/forms/JobForm';
import GhostButton from '../../../components/ui-components/GhostButton';
import SettingsPanel from '../../../components/ui-components/settingsPanel';

const Candidate = () => {
    return <Flex width={"100%"} py={4} borderTopWidth={1} justifyContent={"space-between"} alignItems={"center"}>
    <Flex>
        <Avatar src='https://bit.ly/sage-adebayo' />
        <Box ml='3'>
            <Text fontWeight='bold'>
            Segun Adebayo
            
            </Text>
            <Text fontSize='sm'>UI Engineer</Text>
        </Box>
    </Flex>
    <Box>
        <Badge ml='1' colorScheme='green'>
            New
        </Badge>
    </Box>
</Flex>
}

function EditJob(props){

    const location = useLocation();
    const {id} = useParams();
    const [active, setActive] = useState(1);

    useEffect(() => {
        if(location.pathname.includes('/edit')) setActive(1);
        else if(location.pathname.includes('/delete')) setActive(2);
    }, [location])

    return <Flex width={"100%"}>
        <Box pr={3} width={"30%"}>
            <GhostButton link={`/jobs/view/${id}/edit`} p={6} active={active === 1}>
                <Box width={"100%"} overflowWrap={"break-word"}>
                    <Heading mb={2} textAlign={"left"} size="md">Edit Details</Heading>
                    <Box fontWeight={"500"} opacity={.7} textAlign={"left"} wordBreak={"break-word"}>
                        Edit the details of your vacancy also the additional information which was added while creating it.
                    </Box>
                </Box>
            </GhostButton>
            <GhostButton link={`/jobs/view/${id}/delete`} mt={4} p={6} active={active === 2}>
                <Box width={"100%"} overflowWrap={"break-word"}>
                    <Heading mb={2} textAlign={"left"} size="md">Delete</Heading>
                    <Box fontWeight={"500"} opacity={.7} textAlign={"left"} wordBreak={"break-word"}>
                        Hide the job from your dashboard if you find it inappropriate or useless.
                    </Box>
                </Box>
            </GhostButton>
        </Box>
        <Box pl={3} width={"70%"}>
            {active === 1 && <JobForm></JobForm>}
            {active === 2 &&  <SettingsPanel 
                                    title="Delete Account"
                                    description="Your account will be permanentally deleted and with any refund of your bought products or wallet amount."
                                    footer= {
                                        <>
                                        <i>This action is irreversible.</i>
                                        <Button colorScheme="red">Delete Account</Button>
                                        </>
                                    }
                                >
                                
            </SettingsPanel>} 
        </Box>
    </Flex>
}


function JobDetails() {
    const [edit, setEdit] = useState(false)
    return (
        <Box px={{base: 2, lg: 8}}>
        <Box py={10}>
            <Container maxW="6xl">
                <Flex direction="column" alignItems="left">
                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                        <Heading mb={1} size="xl">Marketing Expert</Heading>
                        <ButtonGroup>
                        <Button variant={"outline"} colorScheme={"purple"} leftIcon={<BiPaperPlane/>}>Send Candidate</Button>
                        <Button onClick={() => {setEdit(!edit)}} variant={"outline"} leftIcon={!edit ? <FaEdit/> : <FaUserFriends/>}>{!edit ? 'Edit' : 'View Candidates'}</Button>
                        </ButtonGroup>
                    </Flex>
                    <HStack fontSize="sm" fontWeight="medium" mb={6} mt="0">
                        <Box as={HiLocationMarker} fontSize="md" color="gray.400" />
                        <span>Sri Ganganagar</span>
                    </HStack>
                </Flex>
            
            {edit ? <EditJob /> : <Flex width={"100%"}>
                <Box pr={3} width={"66%"}>
                    <Heading mb={2} mt={6} color={"gray.500"} size="xs">CANDIDATES</Heading>
                    <VStack borderBottomWidth={1}>
                    <Candidate></Candidate>
                    <Candidate></Candidate>
                    <Candidate></Candidate>
                    <Candidate></Candidate>
                    </VStack>
                </Box>
                <Box pl={3} width={"33%"}>
                     <Card p={8} shadow={"none"} borderWidth={1}>
                        <Text maxW="xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla atque sapiente, eos, inventore.</Text>
                        <Heading mb={2} mt={6} color={"gray.500"} size="xs">ADDITIONAL INFORMATION</Heading>
                        <Property px={0} label="Name" value="Chakra UI" />
                        <Property px={0} label="Email" value="chakra-ui.sh@gmail.com" />
                        <Property px={0} label="Member since" value="February, 2021" />
                        <Property px={0} label="Subscription Plan" value="Starter Pro" />
                        <Flex direction="column" alignItems="left" mt={6}>
                            <Heading mb={2} color={"gray.500"} size="xs">POSTED BY</Heading>
                            <Heading mb={2} size="md">Deepak Consultancy</Heading>
                            <HStack fontSize="sm" fontWeight="medium" mb={1} mt="0">
                                <Box as={HiPhone} fontSize="md" color="gray.400" />
                                <span>+91 9783160154</span>
                            </HStack>
                            <HStack fontSize="sm" fontWeight="medium" mb={2} mt="0">
                                <Box as={HiLocationMarker} fontSize="md" color="gray.400" />
                                <span>63 L Block, Sri Ganganagar</span>
                            </HStack>
                        </Flex>
                     </Card>
                </Box>
            </Flex>}
            </Container>

        </Box>
        </Box>
    )
}

export default JobDetails
