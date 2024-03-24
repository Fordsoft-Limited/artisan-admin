import React, { useState } from "react";
import { useParams,useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import DefaultAuth from "layouts/auth/Default";

// Assets
import illustration from "assets/img/auth/auth.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import EntranceService from "services/EntranceService";
import APP_CONSTANT from "utils/Constant";

function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [show, setShow] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  const handleClick = () => setShow(!show);
  const { invitationCode } = useParams();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      setErrorMessage("Password not match with confirm password")
      return;
    }
    try {
      setIsLoading(true);
      const response = await EntranceService.activateAccount({ password:formData.password, invitationCode });
      if (response.data["statusCode"] === APP_CONSTANT.successCode) {
        history.push("/auth/");
      } else {
        setErrorMessage(response.data["data"]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error?.response?.data["data"]);
      setErrorMessage(error?.response?.data["data"]);
    }
  };
  return (
    <form>
      <DefaultAuth image={illustration}>
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
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
             Complete account setup
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Enter your New Password and confirm password!
            </Text>
            {errorMessage && (
              <Text
                mb="36px"
                ms="4px"
                color={"red.500"}
                fontWeight="400"
                fontSize="md"
              >
                {errorMessage}
              </Text>
            )}
          </Box>
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
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmpassword: e.target.value,
                    })
                  }
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
                onClick={handleSubmit}
                isLoading={isLoading}
              >
                Proceed
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
      </DefaultAuth>
    </form>
  );
}

export default ResetPassword;