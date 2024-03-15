import React, { useState } from "react";
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
import ConversationService from "../../../../services/ConversatonService";
import APP_CONSTANT from "../../../../utils/Constant";

import Editor from "./Editor";

export default function NewArtisan() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    websiteLink: "",
    businessName: "",
    street: "",
    city: "",
    postalCode: "",
    file: null,
    content: "",
  });

  const handleFileChange = (file) => {
    setFormData({ ...formData, file: file });
  };

  const handleContentChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const refreshArtisan = () => {};
  const handleSubmit = async () => {
    console.log(formData);
    try {
      if (!formData) {
        setErrorMessage("Form field must be empty");
        return;
      }
      setIsLoading(true);
      const response = await ConversationService.addAdvertisementWithAttachment(
        formData
      );
      if (response.data["message"] === APP_CONSTANT.messageSuccess) {
        setSuccessMessage(response.data["data"]);
        await refreshArtisan();
       // fetch the data again
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          websiteLink: "",
          category: "",
          content: "",
          street: "",
          city: "",
          file: null,
          postalCode: "",
        }); // clear form field
      } else {
        setErrorMessage(response.data["data"]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error?.response?.data["data"]);
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        websiteLink: "",
        category: "",
        content: "",
        street: "",
        city: "",
        file: null,
        postalCode: "",
      });
    }
  };

  return (
    <Box>
      <Button
        colorScheme="purple"
        variant="outline"
        fontSize="16px"
        onClick={onOpen}
      >
        NEW Advert
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Advertisement post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              {errorMessage && (
                <Text
                  mb="36px"
                  ms="4px"
                  color={"red.500"}
                  fontWeight="400"
                  fontSize="md"
                  w="100%"
                >
                  {errorMessage}
                </Text>
              )}
            </Flex>

            <Flex>
              {successMessage && (
                <Text
                  mb="36px"
                  ms="4px"
                  color={"green.400"}
                  fontWeight="400"
                  fontSize="md"
                  w="100%"
                >
                  {successMessage}
                </Text>
              )}
            </Flex>
            <Box>
              <div className="row">
                <div className="col-sm-12 col-md-8">
                  <Editor
                    onContentChange={handleContentChange}
                    formData={formData}
                    onFileChange={handleFileChange}
                  />
                </div>
              </div>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="ghost"
              isLoading={isLoading}
              onClick={handleSubmit}
            >
              Post Advert
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
