import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main/index";
import Navbar from "./components/Navbar/index";
import { Box, Image } from "@chakra-ui/react";
import HomePage from "./assets/home-bg.jpeg";
import JellyFish from "./assets/jellyfish-diversity-species-17.adapt.1900.12.jpg";
import Footer from "./components/Footer";
import Manager from "./pages/Manager/index";
import Domains from "./components/Manager Components/Domains";
import Pricing from "./pages/Pricing";
import Service from "./components/Manager Components/Package Settings/Service";
import Transictions from "./components/Manager Components/Payment/Transictions";
import CreditCards from "./components/Manager Components/Payment/CreditCards";
import AddCard from "./components/Manager Components/Payment/AddCard";
import PaymentAddresses from "./components/Manager Components/Payment/PaymentAddresses";
import AddAddress from "./components/Manager Components/Payment/AddAddress";
import Information from "./components/Manager Components/Profile/Information";
import Logon from "./components/Manager Components/Profile/Logon";
import Personal from "./components/Manager Components/Profile/Personal";
import Sessions from "./components/Manager Components/Profile/Sessions";
import Logs from "./components/Manager Components/Profile/Logs";
import Confirmation from "./components/Manager Components/Domains/Confirmation";

const Router = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Box className="px-1 md:px-2 lg:px-6">
            <Box className="absolute top-0 -z-50 right-0 bg-[#02000E] mx-1 md:mx-2 lg:mx-6">
              <img
                src={HomePage}
                alt="Homa Page Hero"
                className="h-[400px] md:h-[550px] lg:h-[630px] xl:h-[900px] lg:w-[1920px]"
              />
            </Box>
            <Navbar Main />
            <Main />
            <Footer />
          </Box>
        }
      />
      <Route
        path="/manager/"
        element={
          <Box>
            <Box className="absolute top-0 right-0 -z-50 bg-[#03070A] w-full flex items-center justify-center brightness-0 md:brightness-75 h-[165px] overflow-hidden">
              <Image
                src={JellyFish}
                alt="Jelly Fish Bg"
                className=" w-full h-full"
              />
            </Box>
            <Navbar Manager />
            <Manager>
              {location.pathname === "/manager/mailsite" && <Domains />}
              {location.pathname === "/manager/mailsite/checkrecords" && (
                <Confirmation />
              )}
              {location.pathname === "/manager/pricing" && <Pricing />}
              {location.pathname === "/manager/service/info" && <Service />}
              {location.pathname === "/manager/payment/transactions" && (
                <Transictions />
              )}
              {location.pathname === "/manager/payment/cards" && (
                <CreditCards />
              )}
              {location.pathname === "/manager/payment/addcard" && <AddCard />}
              {location.pathname === "/manager/payment/addresses" && (
                <PaymentAddresses />
              )}
              {location.pathname === "/manager/payment/address" && (
                <AddAddress />
              )}
              {location.pathname === "/manager/information" && <Information />}
              {location.pathname === "/manager/information/logon" && <Logon />}
              {location.pathname === "/manager/information/personal" && (
                <Personal />
              )}
              {location.pathname === "/manager/information/logs" && <Logs />}
            </Manager>
            <Footer />
          </Box>
        }
      >
        <Route path="mailsite" element={""} />
        <Route path="mailsite/checkrecords" element={""} />
        <Route path="pricing" element={""} />
        <Route path="service/info" element={""} />
        <Route path="/manager/payment/transactions" element={""} />
        <Route path="/manager/payment/cards" element={""} />
        <Route path="/manager/payment/addcard" element={""} />
        <Route path="/manager/payment/addresses" element={""} />
        <Route path="/manager/payment/address" element={""} />
        <Route path="/manager/information" element={""} />
        <Route path="/manager/information/logon" element={""} />
        <Route path="/manager/information/personal" element={""} />
        <Route path="/manager/information/sessions" element={""} />
        <Route path="/manager/information/logs" element={""} />
      </Route>
      <Route path="/pricing?" element={<Pricing />} />
    </Routes>
  );
};

export default Router;
