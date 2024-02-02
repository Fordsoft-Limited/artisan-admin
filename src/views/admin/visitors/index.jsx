import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import VistorsTable from "./components/VistorsTable";
import { columnsDataColumns } from "./variables/columnsData";
import tabledataColumns from "./variables/tabledataColumns.json";

export default function Visitors() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <VistorsTable columnsData={columnsDataColumns}
          tableData={tabledataColumns}/>
      </SimpleGrid>
    </Box>
  );
}
