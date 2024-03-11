import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Image,
  Tr,
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
  ModalCloseButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import UploadArtisan from "./UploadArtisan";
export default function CheckTable(props) {
  const { columnsData } = props;
  const { tableData, setTableData } = useState([]);

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  const [checked, setChecked] = useState(false);

//  const [formData, setFormData] = useState({
//    name: "",
//    email: "",
//    phoneNumber: "",
//    businessName: "",
//    businessType: "",
//    street: "",
//    city: "",
//    postalCode: "",
//    serviceDescription: "",
//  });


//  const handleSubmit = async (e) => {
//    e.preventDefault();
//    console.log(formData);
//  };
  

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Artisan Table
        </Text>
        <Flex gap="10px">
          <Button
            colorScheme="purple"
            variant="outline"
            fontSize="16px"
            onClick={onOpen}
          >
            Add
          </Button>
          <Button colorScheme="green" variant="outline" fontSize="16px">
            Edit
          </Button>
          <Button colorScheme="red" variant="outline" fontSize="16px">
            Delete
          </Button>
        </Flex>
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "LOGO") {
                    data = (
                      <Flex align="center">
                        <Checkbox
                          id="remember-login"
                          colorScheme="brandScheme"
                          checked={checked}
                          me="10px"
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                        <Image
                          borderRadius="full"
                          boxSize="50px"
                          src={cell.value}
                          alt="Dan Abramov"
                        />
                      </Flex>
                    );
                  } else if (cell.column.Header === "NAME") {
                    data = (
                      <Flex align="center">
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "BUSINESSTYPE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "PHONE") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Artisan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UploadArtisan />
            <Box w="100%">
              <FormControl>
                <Flex gap="20px" mb="12px">
                  <Input
                    variant="outline"
                    name="name"
                    placeholder="Name"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, name: e.target.value })
                    // }
                  />
                  <Input
                    variant="outline"
                    name="email"
                    placeholder="Email"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, email: e.target.value })
                    // }
                  />
                </Flex>
                <Flex gap="20px" mb="12px">
                  <Input
                    variant="outline"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone number"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, phoneNumber: e.target.value })
                    // }
                  />
                  <Input
                    variant="outline"
                    type="tel"
                    name="businessType"
                    placeholder="Business Type"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, businessType: e.target.value })
                    // }
                  />
                </Flex>
                <Flex gap="20px" mb="12px">
                  <Input
                    variant="outline"
                    type="tel"
                    name="businessName"
                    placeholder="Business Name"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, businessName: e.target.value })
                    // }
                  />
                  <Input
                    variant="outline"
                    type="tel"
                    name="street"
                    placeholder="Street"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, street: e.target.value })
                    // }
                  />
                </Flex>
                <Flex gap="20px" mb="12px">
                  <Input
                    variant="outline"
                    type="tel"
                    name="city"
                    placeholder="City"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, city: e.target.value })
                    // }
                  />
                  <Input
                    variant="outline"
                    type="tel"
                    name="postalCode"
                    placeholder="Postal Code"
                    w="100%"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, postalCode: e.target.value })
                    // }
                  />
                </Flex>
                <Flex>
                  <Textarea
                    placeholder="Service Description"
                    name="serviceDescription"
                    // onChange={(e) =>
                    //   setFormData({ ...formData, serviceDescription: e.target.value })
                    // }
                  />
                </Flex>
              </FormControl>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Card>
  );
}
