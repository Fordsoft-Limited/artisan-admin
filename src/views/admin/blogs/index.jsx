import React, { useState, useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NewBlog from "./components/NewBlog";
import RecentBlog from "./components/RecentBlog";
import EntranceService from "./../../../services/EntranceService";
import ConversationService from "../../../services/ConversatonService";

import APP_CONSTANT from "utils/Constant";

export default function Artisan() {
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const fetchBlog = async () => {
    try {
      const { data } = await EntranceService.listBlogs(
        APP_CONSTANT.defaultPage,
        APP_CONSTANT.defaultSize
      ); // Call the function with page and limit
      setDataList(data["data"]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const sendSelectedDataForEdit = (item) => {
    setSelectedData(item);
  };
  const deleteBlog = async (userId) => {
    try {
      const prompt = window.confirm(
        "Are you sure to delete the selected record"
      );
      if (prompt) {
        const deleteResponse = await ConversationService.deleteBlog(userId);
        if (deleteResponse.data["message"] === APP_CONSTANT.messageSuccess) {
          fetchBlog();
        }
      }
    } catch (error) {
      console.error("Error fetching artisan:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [dataList]);

  return (
    <Box mt="100px">
      <NewBlog />
      <Box mt="20px">
        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
          {dataList.map((item) => (
            <RecentBlog
              data={item}
              key={item.id}
              onDeleteEvent={() => deleteBlog(item.id)}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
