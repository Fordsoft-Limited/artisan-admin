import React from 'react';
import { Box, SimpleGrid } from "@chakra-ui/react";
import UserTable from './components/UserTable'

import { userDataColumns } from './variables/userData'; 
import userDataArtisan from "./variables/userDataArtisan.json"; 


export default function User(){
    return(
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid
          mb="20px"
          columns={{ sm: 1, md: 1 }}
          spacing={{ base: "20px", xl: "20px" }}
        >
          <UserTable
            columnsData={userDataColumns}
            tableData={userDataArtisan}
          />
        </SimpleGrid>
      </Box>
    );
}