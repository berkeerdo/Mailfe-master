import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import ExclamationCircle from "../../../assets/validate_failed.png";
import React from "react";

function Confirmation() {
  return (
    <Container maxW={"8xl"}>
      <Box className="flex flex-col items-center justify-center w-full space-y-16">
        <Heading fontSize={"2xl"} color={"gray.700"}>
          Alan Adı Doğrulaması
        </Heading>
        <Box
          maxW={"2xl"}
          className="px-10 py-16 bg-gray-100 shadow-2xl w-full "
        >
          <div className="w-full flex items-center justify-center">
            <Image
              src={ExclamationCircle}
              alt={"validate failed"}
              maxW={"56"}
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <Text maxW={"xl"} fontSize={"xl"} className="mt-10 text-center">
              Premium e-posta hizmetinizi aktifleştirmek için,{" "}
              <span className="font-bold">efkan.net</span> alan adınızın NS veya
              MX adreslerini aşağıdaki iki yöntemden dilediğinizi tercih ederek
              güncellemeniz yeterli.
            </Text>
          </div>
          <div>
            <div className="flex items-center space-x-6 mt-10">
              <div className="px-3 py-1 rounded-full bg-[#F44336] text-gray-50 text-lg">
                1
              </div>
              <Heading fontSize={"xl"}>
                NS Adresleri Yönlendirerek Doğrulama
              </Heading>
            </div>
            <div className="mt-4 space-y-3">
              <Box
                maxW={"sm"}
                className="flex items-center justify-between w-full"
              >
                <Text>Birincil NS</Text>
                <Text>ns1.mailfe.com</Text>
              </Box>
              <Box
                maxW={"sm"}
                className="flex items-center justify-between w-full"
              >
                <Text>İkincil NS</Text>
                <Text>ns2.mailfe.com</Text>
              </Box>
            </div>
            <div className="flex items-center space-x-6 mt-10">
              <div className="px-3 py-1 rounded-full bg-[#F44336] text-gray-50 text-lg">
                2
              </div>
              <Heading fontSize={"xl"}>MX Kayıtları İle Doğrulama</Heading>
            </div>
            <div className="mt-4 space-y-3">
              <Box
                maxW={"md"}
                className="flex items-center justify-between w-full"
              >
                <Text>MX Kayıt Adı / Değeri (Öncelik)</Text>
                <Text>@ mx01.mailfe.com (1)</Text>
              </Box>
              <Box
                maxW={"md"}
                className="flex items-center justify-between w-full"
              >
                <Text>MX Kayıt Adı / Değeri (Öncelik)</Text>
                <Text>@ mx01b.mailfe.com (1000)</Text>
              </Box>
              <Box
                maxW={"md"}
                className="flex items-center justify-between w-full"
              >
                <Text>CNAME Kaydı / Değeri</Text>
                <Text>mail mail01.mailfe.com</Text>
              </Box>
              <Box
                maxW={"md"}
                className="flex items-center justify-between w-full"
              >
                <Text>TXT Kaydı / Değeri</Text>
                <Text textAlign={"end"}>@ v=spf1 a mx a:mail01.mailfe.com mx:efkan.net</Text>
              </Box>
              <Box
                maxW={"md"}
                className="flex items-center justify-between w-full"
              >
                <Text>TXT Kaydı / Değeri</Text>
                <Text>_dmarc v=DMARC1; p=none</Text>
              </Box>
            </div>
            <div className="w-full flex flex-col space-y-4 mt-10">
              <Button colorScheme={"green"} >TEKRAR KONTROL ET</Button>
              <Button variant={"outline"} colorScheme="cyan">
                NS VE MX KAYITLARINI NASIL DEĞİŞTİRİRİM
              </Button>
              <Button colorScheme={"cyan"} variant={"outline"}>BAŞKA BİR ALAN ADINI SORGULA</Button>
            </div>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Confirmation;
