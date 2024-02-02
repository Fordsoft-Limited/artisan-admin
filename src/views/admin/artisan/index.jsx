import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import ArtisanTable from "./components/ArtisanTable";
import { artisanDataColumns } from "./variables/artisanData";
import tableDataArtisan from "./variables/tableDataArtisan.json"; 
export default function Artisan() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}
      >
        <ArtisanTable
          columnsData={artisanDataColumns}
          tableData={tableDataArtisan}
          
        />
      </SimpleGrid>
    </Box>
  );
}
