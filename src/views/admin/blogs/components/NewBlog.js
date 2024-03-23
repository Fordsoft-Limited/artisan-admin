import React, {useState} from 'react';
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

import { Grid, GridItem } from "@chakra-ui/react";
import Editor from "./Editor";
import Action from "./Action";
import Categories from "./Categories";
export default function NewBlog() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
const handleClick = () => {
  setIsLoading(true);


  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
};
    return (
        <Box>
             <Button colorScheme='purple' variant='outline' fontSize='16px' onClick={onOpen}>NEW BLOG</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>NEW BLOG</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box>
                            <div className="row">
                                <div className="col-sm-12 col-md-8">
                                    <Editor />
                                </div>
                                <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
                                    <Action />
                                    <Categories />
                                </SimpleGrid>
                            </div>

                        </Box>
                    </ModalBody >

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={handleClick} isLoading={isLoading}>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}