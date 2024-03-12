import React, {useState} from 'react';
import {
    Flex,
    Text,
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
} from "@chakra-ui/react";
import APP_CONSTANT from "utils/Constant";

import Editor from "./Editor";
import ConversationService from 'services/ConversatonService';

export default function NewBlog() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const[errorMessage, setErrorMessage] = useState('')
  const[successMessage, setSuccessMessage] = useState('')
    const [formData, setFormData] = useState({
        title: "",
        file: null,
        content: "", // Add content field
      });
    
      const handleContentChange = (field, value) => {
        console.log("We received a file::::", field)
        setFormData({ ...formData, [field]: value });
      };
    
      const handleFileChange = (file) => {
        console.log("Selected file:", file);
        setFormData({ ...formData, file: file });
      };
    const refreshBlog=()=>{

    }
      const handleSubmit =async () => {
        try {
            if (!formData.title.trim() || !formData.content.trim()) {
                setErrorMessage("Title/content should not be empty")
                return;
              }
            setIsLoading(true)
          const response = await ConversationService.addBlogWithAttachment(formData)
          if(response.data['message']===APP_CONSTANT.messageSuccess){
            setSuccessMessage(response.data['data'])
            await refreshBlog() // fetch the data again
            setFormData({title:'', content:'', file:null}) // clear form field
          }else{
            setErrorMessage(response.data['data'])
          }
          setIsLoading(false)
     
        } catch (error) {
            setIsLoading(false)
          setErrorMessage(error?.response?.data['data']);
        }
      };
      return (
        <Box>
          <Button colorScheme='purple' variant='outline' fontSize='16px' onClick={onOpen}>NEW BLOG</Button>
          <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>New blog post</ModalHeader>
              <ModalCloseButton />
              <ModalBody >
              <Flex>
             {errorMessage && (
  <Text
    mb='36px'
    ms='4px'
    color={'red.500'}
    fontWeight='400'
    fontSize='md'
    w="100%"
  >
    {errorMessage}
  </Text>
)}
             </Flex>

             <Flex>
             {successMessage && (
  <Text
    mb='36px'
    ms='4px'
    color={'green.400'}
    fontWeight='400'
    fontSize='md'
    w="100%"
  >
    {successMessage}
  </Text>
)}
             </Flex>
                <Box>
                  <div className="row">
                    <div className="col-sm-12 col-md-8">
                      <Editor onContentChange={handleContentChange} formData={formData} onFileChange={handleFileChange}/>
                    </div>
                  </div>
                </Box>
              </ModalBody>
              <ModalFooter>
                <Button variant='ghost' onClick={handleSubmit} isLoading={isLoading}>Post blog</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      );
}