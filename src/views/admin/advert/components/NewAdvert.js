import React from "react";

import {
    Flex,
    Image,
    Input,
    Button,
    Modal,
    FormControl,
    Textarea,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Box,
    SimpleGrid,
    ModalCloseButton,
    useDisclosure,
    useColorModeValue,
} from "@chakra-ui/react";
export default function NewAdvert(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <Box>
             <Button colorScheme='purple' variant='outline' fontSize='16px' onClick={onOpen}>NEW BLOG</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>NEW BLOG</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box>
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                <Input placeholder='Basic usage' />
                                </div>
                                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
                                <Input placeholder='Basic usage' />
                                <Input placeholder='Basic usage' />
                                </SimpleGrid>
                            </div>

                        </Box>
                    </ModalBody >

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
}