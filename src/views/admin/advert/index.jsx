import React from "react";

import { Box, Input } from "@chakra-ui/react";
import Card from "components/card/Card";

export default function Advert() {
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center" w="600px" alignContent="center">
      <Card >
        <Input placeholder="Basic usage" />
      </Card>
    </Box>
  );
}
