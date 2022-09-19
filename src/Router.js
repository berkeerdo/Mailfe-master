import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/index";
import Navbar from "./components/Navbar/index";
import { Box } from "@chakra-ui/react";
import HomePage from "./assets/home-bg.jpeg";

const Router = () => (
  <Routes>
    <Route
      path="/"
      element={
        <Box className="px-1 md:px-2 lg:px-6">
          <Navbar Main />
          <Main />
          <Box className="absolute top-0 -z-50 right-0 bg-[#02000E] mx-1 md:mx-2 lg:mx-6">
            <img
              src={HomePage}
              alt="Homa Page Hero"
              className="h-[400px] md:h-[550px] lg:h-[630px] xl:h-[900px] lg:w-[1920px]"
            />
          </Box>
        </Box>
      }
    />
  </Routes>
);

export default Router;
