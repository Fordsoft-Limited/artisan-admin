import React from "react";
import Card from "components/card/Card";
import {
    Text, Stack, Flex, Icon, Link, Button, StackDivider, Box, VStack, Switch, FormControl, FormLabel, Input,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    Heading,
} from '@chakra-ui/react'
import { HSeparator } from "components/separator/Separator";
import { FaChevronRight } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import { NavLink, useHistory } from "react-router-dom";
import LocalStorageService from "services/LocalStorageService";

export default function Account() {
    const history = useHistory();
    const logout = () => {
        LocalStorageService.logout()
        history.push("/auth");
    }
    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const [show, setShow] = React.useState(false);

    const handleClick = () => setShow(!show);

   
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
               

                <Box display="flex" justifyContent="center">
                <Flex
                    maxW={{ base: "100%", md: "max-content" }}
                    w="100%"
                    mx={{ base: "auto", lg: "0px" }}
                    me="auto"
                    h="100%"
                    alignItems="start"
                    justifyContent="center"
                    mb={{ base: "30px", md: "60px" }}
                    px={{ base: "25px", md: "0px" }}
                    mt={{ base: "40px", md: "14vh" }}
                    flexDirection="column"
                >

                    <Flex
                        zIndex="2"
                        direction="column"
                        w={{ base: "100%", md: "420px" }}
                        maxW="100%"
                        background="transparent"
                        borderRadius="15px"
                        mx={{ base: "auto", lg: "unset" }}
                        me="auto"
                        mb={{ base: "20px", md: "auto" }}
                    >
                        <FormControl>
                            <FormLabel
                                display="flex"
                                ms="4px"
                                fontSize="sm"
                                fontWeight="500"
                                color={textColor}
                                mb="8px"
                            >
                                Old Password<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                variant="auth"
                                name="oldpassword"
                                fontSize="sm"
                                ms={{ base: "0px", md: "0px" }}
                                type={show ? "text" : "password"}
                                placeholder="Old Password"
                                mb="24px"
                                fontWeight="500"
                                size="lg"

                            />

                            <FormLabel
                                display="flex"
                                ms="4px"
                                fontSize="sm"
                                fontWeight="500"
                                color={textColor}
                                mb="8px"
                            >
                                New Password<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                variant="auth"
                                name="newpassword"
                                fontSize="sm"
                                ms={{ base: "0px", md: "0px" }}
                                type={show ? "text" : "password"}
                                placeholder="New Password"
                                mb="24px"
                                fontWeight="500"
                                size="lg"

                            />
                            <FormLabel
                                ms="4px"
                                fontSize="sm"
                                fontWeight="500"
                                color={textColor}
                                display="flex"
                            >
                                Confirm Password<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <InputGroup size="md">
                                <Input
                                    isRequired={true}
                                    name="confirmPassword"
                                    fontSize="sm"
                                    placeholder="Confirm Password"
                                    mb="24px"
                                    size="lg"
                                    type={show ? "text" : "password"}
                                    variant="auth"

                                />
                                <InputRightElement display="flex" alignItems="center" mt="4px">
                                    <Icon
                                        color={textColorSecondary}
                                        _hover={{ cursor: "pointer" }}
                                        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                                        onClick={handleClick}
                                    />
                                </InputRightElement>
                            </InputGroup>
                            <Flex
                                justifyContent="space-between"
                                align="center"
                                mb="24px"
                            ></Flex>
                            <Button
                                type="submit"
                                fontSize="sm"
                                variant="brand"
                                fontWeight="500"
                                w="100%"
                                h="50"
                                mb="24px"
                               
                            >
                                Reset Password
                            </Button>
                        </FormControl>
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="start"
                            maxW="100%"
                            mt="0px"
                        ></Flex>
                    </Flex>
                </Flex>
                </Box>
                
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
                <Button leftIcon={<FaPowerOff />} colorScheme='red' variant='outline' onClick={logout}>
                    Logout
                </Button>
            </Box>
        </Card>
    )
}