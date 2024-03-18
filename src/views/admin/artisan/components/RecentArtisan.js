import React, { useState } from "react";
import { Image, Button, Box } from "@chakra-ui/react";
import "assets/css/blog.css";
export default function RecentArtisan({data, onDeleteEvent}) {
  const { businessType, id, serviceDescription, businessName, logo}=data
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  const handleDelete =()=>{
    onDeleteEvent(id)
  }
  return (
    <Box className="recent-blog-posts">
      {/* <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px"> */}
      <div className="post-box">
        <div className="post-img">
          <Image src={logo} className="img-fluid" alt="" />
        </div>
        <span className="post-date">
          {businessName}/{businessType}
        </span>
        <div dangerouslySetInnerHTML={{ __html: serviceDescription }}></div>{" "}
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
            onClick={handleDelete}
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
