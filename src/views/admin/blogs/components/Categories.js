import React from "react";
import Card from "components/card/Card";
import { IoIosAdd } from "react-icons/io";
import { Box, Text, Stack, Flex, Icon, StackDivider  , Button, Checkbox, CheckboxGroup, InputGroup, InputRightAddon, Input } from '@chakra-ui/react'
export default function Categories() {
    return (
        <Card mb="20px"> 
            <Box mb="10px">
                <Text fontWeight="bold" fontSize="md">Categories</Text>
            </Box>
            <Stack divider={<StackDivider />} spacing='2'></Stack>
            <Box mb="10px">
                <CheckboxGroup colorScheme='blue' defaultValue={['naruto', 'kakashi']}>
                    <Stack spacing={[1, 5]} direction={['column']}>
                        <Checkbox value='uncategorized'>Uncategorized</Checkbox>
                        <Checkbox value='design'>Design</Checkbox>
                        <Checkbox value='development'>Development</Checkbox>
                        <Checkbox value='writing'>Writing</Checkbox>
                        <Checkbox value='books'>Books</Checkbox>
                    </Stack>
                </CheckboxGroup>

            </Box>
            <Stack divider={<StackDivider />} spacing='2'></Stack>
            <Box mb="10px">
                <InputGroup size='sm'>
                    <Input placeholder='Add Category' />
                    <InputRightAddon>
                        <IoIosAdd/>
                    </InputRightAddon>
                </InputGroup>
            </Box>
        </Card>

       
    );
}
