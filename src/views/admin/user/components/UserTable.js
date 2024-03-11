import axios from "axios";

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
  Tr,
  Input,
  Button,
  Modal,
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
import React, { useMemo, useState, useEffect } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Upload from "./Upload";
import AdminService from "services/AdminService";
import APP_CONSTANT from "utils/Constant";
import ConversationService from "services/ConversatonService";

export default function Users(props) {
  const { columnsData } = props;
  const [tableData, setTableData] = useState([])
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);


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

  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState,
    },
    usePagination
  );

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const[errorMessage, setErrorMessage] = useState('')
  const[successMessage, setSuccessMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const sendInvitation = async(e)=>{
    e.preventDefault();
    try {
      const response = await AdminService.sendInvitationToUser(formData)
      if(response.data['message']===APP_CONSTANT.messageSuccess){
        setSuccessMessage(response.data['data'])
        await fetchUserData() // fetch the data again
        setFormData({name:'', email:'', phone:''}) // clear form field
      }else{
        setErrorMessage(response.data['data'])
      }
 
    } catch (error) {
      setErrorMessage(error?.response?.data['data']);
    }
  }

  const fetchUserData = async () => {
    try {
      const response = await AdminService.getPaginatedUsers(APP_CONSTANT.defaultPage, APP_CONSTANT.defaultSize); // Call the function with page and limit
      setTableData(response.data['data'])
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const deleteUser= async(userId)=>{
try{
  const prompt = window.confirm("Are you sure to delete the selected record")
  if(prompt){
    const deleteResponse = await ConversationService.deleteUser(userId)
    if(deleteResponse.data['message']===APP_CONSTANT.messageSuccess){
      fetchUserData()
    }
  }
}catch(error){
  console.error('Error fetching users:', error);
}
  }

  useEffect(() => {
    fetchUserData();
  }, []);
  
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
          Available Users
        </Text>
        <Flex gap="10px">
          <Button
            colorScheme="blue"
            variant="outline"
            fontSize="16px"
            onClick={onOpen}
          >
            Add
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
                  if (cell.column.Header === "NAME") {
                    data = (
                      <Flex align="center">
                        <Checkbox
                          defaultChecked={cell.value[1]}
                          colorScheme="brandScheme"
                          me="10px"
                        />
                        <Text color={textColor} fontSize="sm" fontWeight="700">
                          {cell.value}
                        </Text>
                      </Flex>
                    );
                  } else if (cell.column.Header === "EMAIL") {
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
                  else if (cell.column.Header === "STATUS") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value?'Active':'Inactive'}
                      </Text>
                    );
                  }
                  else{
                    data = (
                      <Flex gap="5px">
                    <Button colorScheme="red" variant="outline" fontSize="10px" onClick={() => deleteUser(cell.value)}>
                      Delete
                    </Button>
                      </Flex>
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
      <div className="pagination">
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          gap="10px"
        >
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </Button>
          <Button
            colorScheme="blue"
            variant="outline"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </Button>
          <Button colorScheme="blue" variant="outline">
            {">>"}
          </Button>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <Select
            w="200px"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Box>
        {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {"<<"}
                </button>{" "}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {"<"}
                </button>{" "}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {">"}
                </button>{" "}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {">>"}
                </button>{" "}
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <span>
                    | Go to page:{" "}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            gotoPage(page);
                        }}
                        style={{ width: "100px" }}
                    />
                </span>{" "}
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select> */}
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={sendInvitation}>
          <ModalHeader>Send New Invitation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box w="100%">
              <Flex gap="20px" mb="12px">
                <Input
                  value={formData.name}
                  variant="outline"
                  placeholder="Name"
                  name="name"
                  w="100%"
                  onChange={handleInputChange}
                />
                <Input
                  value={formData.email}
                  variant="outline"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  w="100%"
                  onChange={handleInputChange}
                />
              </Flex>
              <Flex gap="20px" mb="12px">
                <Input
                  value={formData.phone}
                  variant="outline"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  w="100%"
                  onChange={handleInputChange}
                />
              </Flex>
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
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" type="submit">Send Invite</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Card>
  );
}
