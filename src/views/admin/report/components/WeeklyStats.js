import React from "react";

import {
    Flex,
    Table,
    Checkbox,
    Tbody,
    Td,
    Text,
    Select,
    Th,
    Thead,
    Image,
    Tr,
    Input,
    Button,
    Box,

} from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import Card from "components/card/Card";
export default function WeeklyStats() {
    return (
        <Card>
            <Flex w="100%" justifyContent='space-between' mb="20px">
                <Text fontSize="24px"  fontWeight="bold">
                    Weekly Stats
                </Text>
                <Box>
                    <Select w="100px">
                        <option value='option1' selected>January 2024</option>
                        <option value='option2'>Febuary 2024</option>
                        <option value='option3'>March 2024</option>
                        <option value='option3'>April 2024</option>
                    </Select>
                </Box>
            </Flex>

            <Box mb="20px">
                <Flex gap="10px" justifyContent="space-between">
                    <Box display="flex" gap="10px">
                        <Box display="flex" justifyContent="center" alignItems="center" background="pink.100" borderRadius='50%' w="40px" h="40px" mt="5px">
                            <Text color="white" fontSize="24px" fontWeight="bold"><CiShoppingCart /></Text>
                        </Box>
                        <Flex flexDirection="column" gap="5px">
                            <Text fontSize="md"  fontWeight="bold">Top Sales</Text>
                            <Text fontSize="sm" color="gray" fontWeight="light">Asiyanbola Ahmad</Text>
                        </Flex>
                    </Box>

                    <Box background="grey"  mr="30px" w="40px" h="30px" display="flex" alignItems="center" justifyContent="center" borderRadius='5px'>
                        <Text color="white" fontSize="sm">+63%</Text>
                    </Box>
                </Flex>
            </Box>
            <Box mb="20px">
                <Flex gap="10px" justifyContent="space-between">
                    <Box display="flex" gap="10px">
                        <Box display="flex" justifyContent="center" alignItems="center" background="yellow.100"  borderRadius='50%' w="40px" h="40px" mt="5px">
                            <Text color="white"fontSize="24px" fontWeight="bold"><CiStar /></Text>
                        </Box>
                        <Flex flexDirection="column" gap="5px">
                            <Text fontSize="md"  fontWeight="bold">Best Seller</Text>
                            <Text fontSize="sm" color="gray" fontWeight="light">Zik Ahmad</Text>
                        </Flex>
                    </Box>

                    <Box background="grey"  mr="30px" w="40px" h="30px" display="flex" alignItems="center" justifyContent="center" borderRadius='5px'>
                        <Text color="white" fontSize="sm">+63%</Text>
                    </Box>
                </Flex>
            </Box>
            <Box mb="20px">

                <Flex gap="10px" justifyContent="space-between">
                    <Box display="flex" gap="10px">
                        <Box display="flex" justifyContent="center" alignItems="center" background="green.100"  borderRadius='50%' w="40px" h="40px" mt="5px">
                            <Text color="white" fontSize="24px" fontWeight="bold"><MdOutlineMessage /></Text>
                        </Box>
                        <Flex flexDirection="column" gap="5px">
                            <Text fontSize="md"  fontWeight="bold">Most Commented</Text>
                            <Text fontSize="sm" color="gray" fontWeight="light">MaterialPro Admin</Text>
                        </Flex>
                    </Box>

                    <Box background="grey"  mr="30px" w="40px" h="30px" display="flex" alignItems="center" justifyContent="center" borderRadius='5px'> 
                        <Text color="white" fontSize="sm" >+63%</Text>
                    </Box>
                </Flex>
            </Box>

        </Card>
    )
}