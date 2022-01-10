import { Box, Button, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { Card } from './Card'
import { CardContent } from './CardContent'
import { CardHeader } from './CardHeader'
import { Property } from './Property'

export const DetailsCard = (props: any) => (
    <Card {...props}>
      <CardHeader
        title={props.title}
      />
      <CardContent>
        {props.children}
       
      </CardContent>
    </Card>
)
