import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import NewArtisan from "./components/NewArtisan";
import { ArtisanData } from "./variables/ArtisanData";
import RecentArtisan from "./components/RecentArtisan";
export default function Advert() {
  return (
    <Box mt="100px">
      <NewArtisan />
      <Box mt="20px">
        <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
          {ArtisanData.map((item, index) => (
            <RecentArtisan
              businessName={item.businessName}
              imgUrl={item.imgUrl}
              date={item.date}
              key={item.businessName + index}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
