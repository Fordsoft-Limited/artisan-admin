import React, { useState } from "react";
import {
  Image,
  Button,
  Box,
} from "@chakra-ui/react";
import "assets/css/blog.css";
import APP_CONSTANT from "utils/Constant";
import ConversationService from "services/ConversatonService";
export default function RecentArtisan({ imgUrl, businessName, date, id, refreshArtisan, }) {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };


  const deleteUser = async () => {
    try {
      const prompt = window.confirm(
        "Are you sure you want to delete the selected record?"
      );
      if (prompt) {
        const deleteResponse = await ConversationService.deleteAdvertisement(
          id
        );
        if (deleteResponse.data["message"] === APP_CONSTANT.messageSuccess) {
         refreshArtisan(); // Refresh the data after successful deletion
        }
      }
    } catch (error) {
      console.error("Error deleting advertisement:", error);
    }
  };

  return (
    <Box className="recent-blog-posts">
      {/* <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px"> */}
      <div className="post-box">
        <div className="post-img">
          <Image src={imgUrl} className="img-fluid" alt="" />
        </div>
        <span className="post-date">{date}</span>
        <h3 className="post-title">{businessName}</h3>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt="10px"
        >
          <Button
            colorScheme="green"
            variant="outline"
            fontSize="16px"
            onClick={handleClick}
            isLoading={isLoading}
          >
            Edit
          </Button>
          <Button
            colorScheme="red"
            variant="outline"
            fontSize="16px"
            onClick={deleteUser}
            isLoading={isLoading}
          >
            Delete
          </Button>
        </Box>
      </div>
      {/* </SimpleGrid> */}
    </Box>
  );
}
