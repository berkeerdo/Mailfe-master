import { Box, Button, Container, Heading, Text } from "@chakra-ui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function PaymentAddresses() {
  return (
    <Container maxW={"8xl"}>
      <Box className="w-full flex flex-col justify-center items-center">
        <div className="flex items-center justify-center flex-col space-y-3">
          <Heading fontSize={"3xl"} color={"gray.700"}>
            Fatura Adreslerim
          </Heading>
          <Text fontSize={"xl"} color={"gray.500"}>
            Faturalandırmalar için adres bilgilerinizi yönetin
          </Text>
        </div>
        <Box
          maxW={"3xl"}
          p={"20"}
          mt={10}
          className="bg-gray-100 shadow-2xl w-full"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-x-4 lg:space-y-0">
            <Heading fontSize={{ base: "xl", lg: "2xl" }} color={"gray.500"}>
              BURADAN BAŞLAYIN
            </Heading>
            <Link to={"/manager/payment/address"}>
              <Button
                rounded={"full"}
                px={6}
                className="bg-PinkButton-500 text-gray-50 hover:shadow-xl hover:shadow-PinkButton-500"
                leftIcon={<UserIcon className="h-6 w-6" />}
              >
                ADRES OLUŞTUR
              </Button>
            </Link>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default PaymentAddresses;
