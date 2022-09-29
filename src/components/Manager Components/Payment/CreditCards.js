import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import SecureCC from "../../../assets/secure_cc.png";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

function CreditCards() {
  return (
    <Container maxW={"8xl"}>
      <Box className="w-full">
        <div className="relative flex flex-col items-center">
          <Heading fontSize={"3xl"} textAlign={"center"}>
            Kredi Kartlarım
          </Heading>
          <Text
            fontSize={"xl"}
            color={"gray.500"}
            textAlign={"center"}
            className="mt-1"
          >
            Hizmet ve otomatik yenilemelerinizde kredi kartı
          </Text>
          <Link to={"/manager/payment/addcard"}>
            <Button
              className="bg-PinkButton-500 mt-4 text-gray-50 hover:shadow-lg hover:shadow-PinkButton-500 xl:absolute xl:right-40 xl:top-2 xl:mt-0"
              p={6}
              rounded={"full"}
              leftIcon={<PlusCircleIcon className="w-6 h-6" />}
            >
              YENİ KREDİ KARTI
            </Button>
          </Link>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <Box maxW={"5xl"} className="bg-gray-100 shadow-xl w-full p-20">
            <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row items-center justify-center md:space-x-6">
              <Heading
                textAlign={"center"}
                fontSize={{ base: "xl", md: "2xl" }}
                color={"gray.500"}
              >
                BURADAN BAŞLAYIN
              </Heading>
              <Link to={"/manager/payment/addcard"}>
                <Button
                  className="bg-PinkButton-500 text-gray-50 hover:shadow-lg hover:shadow-PinkButton-500"
                  p={4}
                  rounded={"full"}
                  leftIcon={<PlusCircleIcon className="w-6 h-6" />}
                >
                  KART OLUŞTUR
                </Button>
              </Link>
            </div>
          </Box>
        </div>
      </Box>
      <Box
        mt={"20"}
        className="flex w-full items-center justify-center space-x-5"
      >
        <Image src={SecureCC} alt="SecureCC" maxW={"36"} />
        <div>
          <Heading fontSize={"2xl"} fontWeight={500} mb={1}>
            KARTINIZ MASTERPASS İLE %100 GÜVENDE!
          </Heading>
          <Text maxW={"xl"} fontSize={"md"} color={"gray.500"}>
            Güvenliğinizi önemsiyoruz. Öyle ki kredi kartı bilgilerinizi şirket
            çalışanlarımız dahil hiç bir kişi göremeyecek şekilde şifrelenerek
            Mastercard sunucularında depolanır. Böylece kartınızın 3. şahısların
            eline geçmesi kesin olarak önlenmiş olur.
          </Text>
        </div>
      </Box>
    </Container>
  );
}

export default CreditCards;
