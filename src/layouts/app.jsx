import { Box, Center, Flex } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { Route, Switch, useLocation, withRouter } from 'react-router'
import {
    Stat,
    StatLabel,
    StatNumber,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    useColorMode,
    Button,
  } from "@chakra-ui/react"
import Sidebar from '../components/layout-components/sidebar'
import AppViews from '../views/apps'
import PageHeader from '../components/layout-components/pageHeader'
import NavigationConfig from '../configs/navigation'
import { FaUser } from 'react-icons/fa'
import useWindowWidth from '../scripts/width'
import { Link } from 'react-router-dom'


function AppLayout() {

    const [title, setTitle] = useState("Jobs")
    const [cta, setCTA] = useState({})

    const location = useLocation()

    useEffect(() => {
        const currentPage = NavigationConfig.filter(page => location.pathname.includes(page.path))
        if(currentPage.length){
            setTitle(currentPage[0].title);
            if(currentPage[0].cta){
                setCTA(currentPage[0].cta)
            }
            else{
                setCTA({})
            }
            document.title = currentPage[0].title + " | Bemployed Admin - ";
        } 
        else setTitle("Not Found")
    }, [location])

    const width = useWindowWidth()
    const { colorMode, toggleColorMode } = useColorMode()

    useEffect(() => {
    }, [colorMode])

    return (
        <>
        <Flex>
            {width > 992 && <Box height="100vh" minWidth="280px" width="280px" pos="fixed">
                    <Sidebar/>
            </Box>}
            <Box pl={["0px","0px","0px","280px"]} width="100%">
                <PageHeader title={title} extras={<Flex alignItems="center">
                    {/* {width > 992 && <>
                        <Stat px={8} py={2} borderLeftWidth={1}>
                            <StatLabel>My Earnings</StatLabel>
                            <StatNumber>Rs.15,300.00</StatNumber>
                        </Stat>
                        <Stat px={8} py={2} borderLeftWidth={1}>
                            <StatLabel>Shipping Wallet</StatLabel>
                            <StatNumber>Rs.4,380.00</StatNumber>
                        </Stat>
                    </>} */}
                    {cta.caption && <Link to={`${cta.route}`}>
                        <Button leftIcon={cta.icon} colorScheme="purple" mr={4}>
                            {cta.caption}
                        </Button>
                    </Link>}
                    <Menu>
                        <MenuButton width="56px"  m={0} mr={4} p={1} rounded="50%" _hover={{background: "#88888811"}}>
                            <Center cursor="pointer">
                                <Center p={3} bgGradient={"linear-gradient(-45deg, rgba(33,23,212,1) 0%, rgba(126,147,228,1) 100%)"} color="white" rounded="50%">
                                    <FaUser></FaUser>
                                </Center>
                            </Center>
                        </MenuButton>
                        <MenuList mr={4}>
                            <MenuGroup title="Profile">
                                <MenuItem>My Account</MenuItem>
                                <MenuItem>Payments </MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup title="Help">
                                <MenuItem>Docs</MenuItem>
                                <MenuItem>FAQ</MenuItem>
                            </MenuGroup>
                            <MenuDivider />
                            <MenuGroup>
                                <MenuItem onClick={toggleColorMode}>Toggle Color Mode</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    
                </Flex>} />
                <Box>
                    <Switch>
                        <Route path="" component={AppViews} />
                    </Switch>
                </Box>
            </Box>
        </Flex>
        </>
    )
}

export default withRouter(AppLayout)
