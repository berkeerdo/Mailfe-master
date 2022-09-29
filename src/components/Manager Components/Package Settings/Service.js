import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Starter from "../../../assets/mail.starter-mono.svg";
import React from "react";
import { Link } from "react-router-dom";

function Service() {
  return (
    <Container maxW={"8xl"}>
      <Box pt={10} pb={"20"}>
        <Heading color={"gray.600"} fontSize={"2xl"} textAlign={"center"}>
          Paket Detayları
        </Heading>
      </Box>
      <Box className="flex flex-col items-center justify-center w-full">
        <Box maxW={"2xl"} className="bg-gray-100 shadow-2xl py-10 w-full">
          <div className="flex flex-col justify-center items-center space-y-10 py">
            <Image src={Starter} alt="starter pack" maxW={"40"} />
            <Heading fontSize={"2xl"} fontWeight={600} color="gray.600">
              BAŞLANGIÇ PAKET
            </Heading>
          </div>
          <div className="flex flex-col space-y-8 items-start justify-start p-10">
            <div>
              <Text fontSize={"md"} fontWeight={500} color="gray.600">
                PAKET HAKLARI
              </Text>
              <Text className="text-gray-500 mt-1">
                1 e-posta hesabı, hesap başına maksimum 1 GB kota
              </Text>
            </div>
            <div>
              <Text fontSize={"md"} fontWeight={500} color="gray.600">
                PAKET BİTİŞ TARİHİ
              </Text>
              <Text className="text-gray-500 mt-1">Süresiz</Text>
            </div>
            <div>
              <Text fontSize={"md"} fontWeight={500} color="gray.600">
                AYLIK ÖDEME TUTARI
              </Text>
              <Text className="text-gray-500 mt-1">0,00 $ + KDV</Text>
            </div>
            <div className="w-full">
              <Text fontSize={"md"} fontWeight={500} color="gray.600">
                PAKET İÇERİĞİ
              </Text>
              <Box
                maxW={"xs"}
                className="flex items-center justify-between w-full"
              >
                <Text className="text-gray-500 mt-1">Başlangıç Paket</Text>
                <Text className="text-gray-500 mt-1">0,00 $ / Ay</Text>
              </Box>
            </div>
          </div>
        </Box>
        <Box
          maxW={"2xl"}
          className="pt-20 w-full px-5 flex items-center justify-center"
        >
          <div className="flex flex-col space-y-7 items-start w-full justify-start">
            <Text className="font-bold">DİĞER İŞLEMLER</Text>
            <div className="flex justify-between w-full max-w-sm">
              <Link to={"/manager/pricing"}>
                <Text className="text-blue-500 font-semibold">
                  PAKETİ YÜKSELT
                </Text>
              </Link>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Service;
