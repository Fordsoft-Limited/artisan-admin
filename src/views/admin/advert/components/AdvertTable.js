import {
  Flex,
  Table,
  Progress,
  Icon,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Box,
  Button,
  Select,
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
import EntranceService from '../../../../services/EntranceService';
import APP_CONSTANT from '../../../../utils/Constant'
import Menu from "components/menu/MainMenu";

// Assets
import { MdCheckCircle, MdCancel, MdOutlineError } from "react-icons/md";
export default function AdvertTable(props) {
  const { columnsData } = props;
  const [tableData, setTableData] = useState([]);
  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const fetchAdvertData = async () => {
    try {
      const response = await EntranceService.listAdvertisement(
        APP_CONSTANT.defaultPage,
        APP_CONSTANT.defaultSize
      ); // Call the function with page and limit
      setTableData(response.data["data"]);
    } catch (error) {
      console.error("Error fetching Advert:", error);
    }
  };


  useEffect(() => {
    fetchAdvertData();
  }, []);



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
  initialState.pageSize = 5;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="10px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Report Performance
        </Text>
        <Flex gap="10px">
          <Button colorScheme="purple" variant="outline" fontSize="16px">
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
                  if (cell.column.Header === "NAME") {
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
                  //  else if (cell.column.Header === "STATUS") {
                  //     data = (
                  //         <Flex align='center'>
                  //             <Icon
                  //                 w='24px'
                  //                 h='24px'
                  //                 me='5px'
                  //                 color={
                  //                     cell.value === "Approved"
                  //                         ? "green.500"
                  //                         : cell.value === "Disable"
                  //                             ? "red.500"
                  //                             : cell.value === "Error"
                  //                                 ? "orange.500"
                  //                                 : null
                  //                 }
                  //                 as={
                  //                     cell.value === "Approved"
                  //                         ? MdCheckCircle
                  //                         : cell.value === "Disable"
                  //                             ? MdCancel
                  //                             : cell.value === "Error"
                  //                                 ? MdOutlineError
                  //                                 : null
                  //                 }
                  //             />
                  //             <Text color={textColor} fontSize='sm' fontWeight='700'>
                  //                 {cell.value}
                  //             </Text>
                  //         </Flex>
                  //     );
                  // }
                  else if (cell.column.Header === "EMAIL") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "BUSINESSNAME") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  } else if (cell.column.Header === "CATEGORY") {
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
                      maxH="30px !important"
                      py="8px"
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
    </Card>
  );
}
