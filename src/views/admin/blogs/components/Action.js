import React, { useState } from "react";
import Card from "components/card/Card";
import {
  Text,
  Stack,
  Flex,
  Icon,
  Link,
  Button,
  StackDivider,
  Box,
} from "@chakra-ui/react";
import { CiFlag1 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { FcReading } from "react-icons/fc";
import { FaSave } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
export default function Action() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card mb="50px">
      <Box mb="10px">
        <Text fontWeight="bold" fontSize="md">
          Action
        </Text>
      </Box>

      <Box mb="30px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            <Text mt={1} mr={1}>
              {" "}
              <CiFlag1 />
            </Text>
            <Text mr={3} fontWeight="bold">
              Status:{" "}
            </Text>
            <Text fontWeight="light">Draft</Text>
          </Box>
          <Link>Edit</Link>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            <Text mt={1} mr={1}>
              {" "}
              <FaEye />
            </Text>
            <Text mr={3} fontWeight="bold">
              Visibility:{" "}
            </Text>
            <Text fontWeight="light" color="green">
              Public
            </Text>
          </Box>
          <Link>Edit</Link>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            <Text mt={1} mr={1}>
              {" "}
              <CiCalendar />
            </Text>
            <Text mr={3} fontWeight="bold">
              Schedule:{" "}
            </Text>
            <Text fontWeight="light">Now</Text>
          </Box>
          <Link>Edit</Link>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex">
            <Text mt={1} mr={1}>
              {" "}
              <FcReading />
            </Text>
            <Text mr={3} fontWeight="bold">
              Readability:{" "}
            </Text>
            <Text fontWeight="light" color="orange">
              OK
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mb={{ base: "10px", md: "80px" }}
      >
        <Button
          leftIcon={<FaSave />}
          colorScheme="blue"
          variant="outline"
          onClick={handleClick}
          isLoading={isLoading}
        >
          Save as Draft
        </Button>
        <Button
          leftIcon={<MdOutlinePublishedWithChanges />}
          colorScheme="blue"
          variant="solid"
          onClick={handleClick}
          isLoading={isLoading}
        >
          Publish
        </Button>
      </Box>
    </Card>
  );
}
