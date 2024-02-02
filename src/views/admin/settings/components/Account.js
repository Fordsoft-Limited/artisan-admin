import React from "react";
import Card from "components/card/Card";
import { Text, Stack, Flex, Icon, Link, Button, StackDivider, Box, VStack, Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { HSeparator } from "components/separator/Separator";
import { FaChevronRight } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
export default function Account() {
    return (
        <Card w="100%" mt="100px" >
            <Box mb="20px">
                <Text fontSize="24px" fontWeight="bold" >Account</Text>
                <HSeparator mb='20px' />
                <VStack
                    spacing={4}
                    align='stretch'
                >
                    <Box h='50px' display="flex" justifyContent="space-between" alignItems="center" pr='3' pl='3' cursor="pointer">
                        <Text fontSize="18px" color='grey' >Change Password</Text>
                        <Text fontSize="18px" ><FaChevronRight /></Text>
                    </Box>
                    {/* <HSeparator mb='10px' /> */}
                    {/* <Box h='50px' bg='tomato' display="flex" justifyContent="space-between">
                        2
                    </Box>
                    <Box h='50px' bg='pink.100' display="flex" justifyContent="space-between">
                        3
                    </Box> */}
                </VStack>
            </Box>

            <Box>
                <Text fontSize="24px" fontWeight="bold" >Notifications</Text>
                <HSeparator mb='20px' />
                <VStack
                    spacing={4}
                    align='stretch'
                >
                    <Box cursor="pointer">
                        <FormControl h='50px' display="flex" justifyContent="space-between" alignItems="center" pr='3' pl='3'>
                            <FormLabel htmlFor='notify-alerts' mb='0'>
                                Notifications
                            </FormLabel>
                            <Switch id='notify-alerts' />
                        </FormControl>
                    </Box>

                    {/* <Box h='50px' bg='tomato' display="flex" justifyContent="space-between">
                        2
                    </Box> */}
                    {/* <Box h='50px' bg='pink.100' display="flex" justifyContent="space-between">
                        3
                    </Box> */}
                </VStack>
            </Box>

            <Box display='flex' justifyContent='center'>
                <Button leftIcon={<FaPowerOff />} colorScheme='red' variant='outline'>
                    Logout
                </Button>
            </Box>
        </Card>
    )
}