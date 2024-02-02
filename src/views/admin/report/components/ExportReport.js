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
    Modal,
    
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Box,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import exportImage from "assets/img/export.svg"
export default function ExportReport(){
    return(
        <Card h="200px">
            <Box display="flex" gap={2} alignItems="center" justifyContent="space-between">
                <Flex direction="column" gap="10px">
                    <Text>Hey, Admin</Text>
                    <Text>Download Latest Report</Text>
                    <Button colorScheme="blue">Download</Button>
                </Flex>
                <Image src={exportImage} alt="Download" w="150px"/>
            </Box>
        </Card>
    );
}