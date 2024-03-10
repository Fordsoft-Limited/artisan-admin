import React from "react";

import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Card from "components/card/Card";
import NewAdvert from "./components/NewAdvert";
import RecentAdvert from "./components/RecentAdvert";
import AdvertTable from "./components/AdvertTable";
import { advertDataColumns } from "./variables/advertData";
import {recentData} from "./variables/RecentAdvertData";
import tableDataAdvert from "./variables/tableDataAdvert.json";
export default function Advert() {
  return (
    <Box mt="100px">
      <NewAdvert/>
      <Box mt="20px">
        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
          {recentData.map((item, index) => (
            <RecentAdvert
              
              imgUrl={item.imgUrl}
              
              key={item.id + index}
            />
          ))}
        </SimpleGrid>
      </Box>

      <AdvertTable
        columnsData={advertDataColumns}
        tableData={tableDataAdvert}
      />
    </Box>
  );
}
