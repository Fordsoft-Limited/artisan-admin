import React, { useState,useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NewArtisan from "./components/NewArtisan";
import RecentArtisan from "./components/RecentArtisan";
import EntranceService from "./../../../services/EntranceService";
import ConversationService from "../../../services/ConversatonService";

import APP_CONSTANT from "utils/Constant";

export default function Advert() {
  const[dataList, setDataList] = useState([])
  const[selectedData, setSelectedData] = useState({})

  const fetchData = async () => {
    try {
      const{data} = await EntranceService.listPaginatedArtisan(
        APP_CONSTANT.defaultPage,
        APP_CONSTANT.defaultSize
      ); // Call the function with page and limit
      setDataList(data["data"]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
const sendSelectedDataForEdit=(item)=>{
  setSelectedData(item)
}
  const deleteArtisan = async (userId) => {
    try {
      const prompt = window.confirm(
        "Are you sure to delete the selected record"
      );
      if (prompt) {
        const deleteResponse = await ConversationService.deleteArtisan(userId);
        if (deleteResponse.data["message"] === APP_CONSTANT.messageSuccess) {
          fetchData();
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dataList]);

  return (
    <Box mt="100px">
      <NewArtisan />
      <Box mt="20px">
        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
          {dataList.map((item) => (
            <RecentArtisan
             data={item}
              key={item.id}
              onDeleteEvent={()=>deleteArtisan(item.id)}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
