import React, { useState } from "react";
import { Image, Button, Box } from "@chakra-ui/react";
import "assets/css/blog.css";

export default function RecentBlog({ data, onDeleteEvent }) {
  const { title, id, description, mediaName } = data;

  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleDelete = () => {
    onDeleteEvent(id);
  };

  return (
    <Box className="recent-blog-posts">
      <div className="post-box">
        <div className="post-img">
          <Image src={mediaName} className="img-fluid" alt="" />
        </div>
        <span className="post-date">{title}</span>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>{" "}
        <a href="blog-single.html" className="readmore stretched-link mt-auto">
          <span>Read More</span>
          <i className="bi bi-arrow-right"></i>
        </a>
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
    </Box>
  );
}
