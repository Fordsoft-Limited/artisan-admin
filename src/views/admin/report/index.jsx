import React from "react";
import ExportReport from "./components/ExportReport";
import { Box,SimpleGrid } from "@chakra-ui/react";
import ArtisanPerfomance from "./components/ArtisanPerformance";
import {artisanPerfomance} from "./variables/columnsData"
import tableDataComplex from "views/admin/report/variables/artisanDataPerform.json";
import WeeklyStats from "./components/WeeklyStats";
export default function Report() {
  return (
    <Box mt="100px">
      {/* <ExportReport/> */}

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <ExportReport />
        <WeeklyStats/>
      </SimpleGrid>
      <ArtisanPerfomance
          columnsData={artisanPerfomance}
          tableData={tableDataComplex}
        />
    </Box>
  );
}
