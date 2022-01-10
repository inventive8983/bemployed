import { Button } from '@chakra-ui/button'
import { Box, Flex, VStack } from '@chakra-ui/layout'
import React from 'react'
import {MdSettings} from 'react-icons/md'
import { FaBox, FaQuestion} from 'react-icons/fa'
import Logo from '../../assets/images/logo_white.svg'
import {chakra, Icon, Image, useColorModeValue} from '@chakra-ui/react'
import NavigationConfig from '../../configs/navigation'
import { Link } from 'react-router-dom'
import GhostButton from '../ui-components/GhostButton'

function Sidebar() {
    return (
        <Box pos="absolute" top="0px" left="0px" p={6} background={useColorModeValue("gray.100", "#080808")} height="100vh">
            <Flex height="100%" justifyContent="space-between" direction="column">
                <Box>
                    <Box _hover={{background: "#ffffff22"}} rounded={8} p={4} mt="-16px" mb="16px" cursor="pointer">
                        <Image objectFit="contain" height={12} mr={10} src={Logo}></Image>
                    </Box>
                    <VStack my={8}>
                        {NavigationConfig.map(item => !item.hidden && <GhostButton link={item.path} key={item.key} icon={item.icon}>{item.title}</GhostButton>)}
                    </VStack>
                </Box>
                <VStack>
                    <GhostButton link="/settings" icon={MdSettings}>Settings</GhostButton>
                </VStack>
            </Flex>
        </Box>
    )
}

export default Sidebar
