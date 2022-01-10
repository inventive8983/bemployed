import { Button, chakra, Icon, useColorModeValue as mode } from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

const ChakraLink = chakra(Link)

const GhostButton = ({p = 3,link,active,children,icon, ...props}) => <>
    <ChakraLink w="100%" to={`/app${link}`}>
        <Button whiteSpace={"pre-wrap"} height={"auto"} p={p} bg={active && "#88888822"} variant="ghost" w="100%" justifyContent="left" color={mode("black", "white")} _hover={{bg: "#88888822"}} {...props}>
            {icon && <Icon as={icon} mr={3} w="18px" h="18px" color="gray.400" ></Icon>} {children}
        </Button>
    </ChakraLink>
</>

export default GhostButton;
