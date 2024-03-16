import React, { useState } from "react";
import { Image, Button, Box } from "@chakra-ui/react";
import "assets/css/blog.css";
export default function RecentArtisan({ imgUrl, businessName, date}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
