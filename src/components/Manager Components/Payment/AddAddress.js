import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function AddAddress() {
  return (
    <Container maxW={"8xl"}>
      <Box className="w-full flex flex-col justify-center items-center">
        <Heading fontSize={"2xl"} color={"gray.700"}>
          Yeni Fatura Adresi
        </Heading>
        <Box
          maxW={"4xl"}
          className="w-full p-16 mt-16 bg-gray-100 shadow-2xl space-y-5"
        >
          <FormControl>
            <FormLabel color={"gray.500"}>
              İsim-Soyisim veya Firma Ünvanı
            </FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Vergi Dairesi</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Vergi No veya TC Kimlik No</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Adres</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Ülke Select Olacak</FormLabel>
            <Input
              type={"search"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>İl</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>İlçe</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Posta Kodu</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <div className="flex pt-10 justify-between">
            <Link to={"/manager/payment/addresses"}>
              <Button
                variant={"outline"}
                className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-700 hover:text-gray-50"
              >
                FATURA ADRESLERİM
              </Button>
            </Link>

            <Button className="bg-purple-700 text-gray-50 hover:shadow-xl hover:shadow-purple-700">
              FATURA ADRESİ OLUŞTUR
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default AddAddress;
