import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Appbar from "../../components/Manager Components/Appbar";

function Mailsite({ children }) {
  return (
    <>
      <Container maxW={"full"} py={3} px={9}>
        <Box className="bg-white shadow-2xl rounded-md">
          <Appbar />
          <Box className="pb-32 pt-10">{children}</Box>
        </Box>
      </Container>
    </>
  );
}

export default Mailsite;
