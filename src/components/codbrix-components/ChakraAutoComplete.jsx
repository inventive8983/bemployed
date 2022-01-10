import React, { useState } from 'react'
import Autocomplete from "react-autocomplete";
import {Box, chakra, FormControl, FormLabel, FormErrorMessage, Input} from "@chakra-ui/react";

var AutoFill = chakra(Autocomplete)

const menuStyle = {
    borderRadius: '3px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2px 0',
    fontSize: '90%',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
  }


function ChakraAutoComplete({items,value,width, getItems = (item) => item.value,label, fieldAction, name,p=6,errors = {}, ...main_props}) {
    
    const [touched, setTouched] = useState(false)
    return (

        <FormControl isInvalid={errors[name] && touched} position={"relative"} zIndex={1000} width={"100%"} maxW={width}>
           {label &&  <FormLabel htmlFor='email'>{label}</FormLabel>}
             <AutoFill
              getItemValue={getItems}
              wrapperStyle ={
                {
                    display: 'inline-block',
                    width: "100%",
                    maxWidth: width
                }
              }
              items={items}
              renderInput = {(props) => <Input {...props} {...main_props}></Input>}
              renderMenu = {(items, value, style) => <Box mt={2} style={{...style, ...menuStyle}}>{items}</Box>}
              renderItem={(item, isHighlighted) => (
                <Box key={item.value}
                    bg={isHighlighted ? "gray.200" : "white"}
                    px={3}
                    py={2}
                    maxW={width}
                >
                  {item.value}
                </Box>
              )}
              value={value}
              onChange={e => {
                setTouched(true)
                  fieldAction(name, e.target.value)
                }}
              onSelect={val => {
                setTouched(true)
                  fieldAction(name, val)
            }}
            />
            {errors[name] && touched ? (
            <FormErrorMessage>{errors[name]}</FormErrorMessage>
           ) : null}
        </FormControl>
    )
}

export default ChakraAutoComplete
