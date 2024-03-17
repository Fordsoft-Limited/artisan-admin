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
  const [errors, setErrors] = useState({});

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
    description: "",
  });

  const handleFileChange = (file) => {
    setFormData({ ...formData, file: file });
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({ ...prevErrors, [file]: "" }));
  };

  const handleContentChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear the error message when the user starts typing again
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Perform validation for each field
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Validation for the "Email" field
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
      valid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone must contain only digits";
      valid = false;
    }

    // Perform city for each field
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      valid = false;
    }

    // Perform street for each field
    if (!formData.street.trim()) {
      newErrors.street = "Street is required";
      valid = false;
    }
    // Perform Business type for each field
    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
      valid = false;
    }

    // Perform Business type for each field
    if (!formData.businessName.trim()) {
      newErrors.businessName = "Business Name is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const refreshArtisan = () => {};
  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        if (!formData) {
          setErrorMessage("Form field must be empty");
          return;
        }
        setIsLoading(true);
        const response =
          await ConversationService.addAdvertisementWithAttachment(formData);
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
            description: "",
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
      }
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
                    errors={errors}
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
