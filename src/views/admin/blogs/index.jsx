import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NewBlog from "./components/NewBlog";
import { blogData } from "./variables/BlogData";
import RecentBlog from "./components/RecentBlog";
export default function Blogs() {
  return (
    <Box mt="100px">
      <NewBlog />
      <Box mt="20px">
        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
          {blogData.map((item, index) => (
            <RecentBlog
              title={item.title}
              imgUrl={item.imgUrl}
              date={item.date}
              key={item.title + index}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
