import React, { useState, useEffect } from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NewBlog from "./components/NewBlog";
import { blogData } from "./variables/BlogData";
import RecentBlog from "./components/RecentBlog";
import EntranceService from './../../../services/EntranceService';
import APP_CONSTANT from './../../../utils/Constant'
import ConversationService from "./../../../services/ConversatonService";
export default function Blogs() {
  const [dataList, setDataList] = useState([])
  const [selectedData, setSelectedData] = useState({});

  const fetchBlogs = async () => {
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
          fetchBlogs();
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
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
              onDeleteEvent={deleteBlog}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
