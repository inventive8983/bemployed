import React from 'react'
import { Box, Divider,Heading, Stack, Text } from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Card } from '../cards/Card'

function SettingsPanel({title, description, children, footer}) {
    const footerColor = useColorModeValue("gray.100", "gray.700")
    return (
        <Card p={0}>
            <Heading size="md" px={8} pt={8} mb={2}>{title}</Heading>
            <Text px={8}>{description}</Text>
            <Box p={children && 8}>
                {children}
            </Box>
            <Divider mt={4}></Divider>
            {footer && <Stack bg={footerColor}  direction={{base:"column", sm: "row"}} spacing={4} px={8} py={4} alignItems={{md:"center"}} justifyContent={{md: "space-between"}}>
                {footer}
            </Stack>}
        </Card>
    )
}

export default SettingsPanel
