import { Button } from '@chakra-ui/button'
import { Box, Flex, Text} from '@chakra-ui/layout'
import { Menu, MenuButton, MenuList, ButtonGroup, MenuItem, InputGroup, InputLeftElement, Input,Center, Spinner, useColorModeValue as mode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { BiSortAZ } from 'react-icons/bi';
import { FaChevronDown, FaFilter, FaSearch, FaSort, FaSortAlphaDown } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router'

import { JobCard } from '../../../components/cards/JobCard.tsx';
import useWindowWidth from '../../../scripts/width';

const categories = ["Open", "Closed"]


function Jobs(props) {

    const width = useWindowWidth()
    const history = useHistory()
    const location = useLocation()
    const [active, setActive] = useState()

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        setActive(location.pathname.split('/')[3])
    }, [location])

    return (

 <Box>
        <Flex  mx={4} borderBottomWidth={1} justifyContent="space-between" alignItems="end">
            {width > (props.breakpoint || 992) ? 
                 <ButtonGroup mb={"-1px"} spacing={0}>
                    {categories.map(category => <Button variant="ghost" onClick={() => history.push('/app/jobs/' + category.toLowerCase().replace(/ /g, "-"))} boxSizing="border-box" borderBottom={active === category.toLowerCase().replace(/ /g, "-") && "red 2px solid"} py={7} rounded={0}>{category}</Button>)}
                </ButtonGroup> :
                <Menu>
                    <MenuButton textTransform="uppercase" as={Button} py={7} px={4} variant="ghost" rightIcon={<FaChevronDown />}>
                        {active && active.replace(/-/g, " ")}
                    </MenuButton>
                    <MenuList>
                        {categories.map(category => <MenuItem onClick={() => history.push('/app/jobs/' + category.toLowerCase().replace(/ /g, "-"))}>{category}</MenuItem>)}
                    </MenuList>
                </Menu>
            }
            <ButtonGroup spacing={1} mb={1}>
                <Button>
                    <FaSortAlphaDown />
                </Button>
                {width > 992 && <InputGroup maxW="300px">
                    <InputLeftElement pointerEvents="none">
                        <FaSearch></FaSearch>
                    </InputLeftElement>
                    <Input borderWidth={0} bg={mode("gray.100", "gray.700") } p={1} placeholder="Search"></Input>
                </InputGroup>}
            </ButtonGroup>
        </Flex>
        {loading && <Center height="2xl">
                <Spinner></Spinner>
            </Center>}
            {!loading &&  <Box><JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard> </Box>}
    </Box>
    )
}

export default Jobs
