import React from "react";
import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export default function ForgetPassword(){
    return(
        <Box display="flex" justifyContent="center">
        <Box  >
        <Input placeholder='Email' />
        <Button colorScheme='blue'>Send</Button>

        </Box>
        
        </ Box>
    )
}
