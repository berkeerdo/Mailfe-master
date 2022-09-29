import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Personal() {
  return (
    <Container maxW={"8xl"}>
      <Box className="flex flex-col items-center justify-center space-y-16 w-full">
        <Heading fontSize={"2xl"} color={"gray.700"}>
          Müşteri Bilgilerim
        </Heading>
        <Box
          maxW={"2xl"}
          className="w-full bg-gray-100 shadow-2xl px-10 py-14 space-y-8"
        >
          <FormControl>
            <FormLabel color={"gray.500"}>İsim</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Soyisim</FormLabel>
            <Input
              type={"number"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Doğum Tarihi</FormLabel>
            <Input
              type={"date"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Cinsiyet</FormLabel>
            <Select borderColor={"gray.700"} className="hover:border-gray-400">
              <option value="male">Erkek</option>
              <option value="female">Kadın</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Zaman Diliminizi Seçiniz</FormLabel>
            <Select borderColor={"gray.700"} className="hover:border-gray-400">
              <option value="1">GMT</option>
              <option value="2">GMT</option>
            </Select>
          </FormControl>
          <div className="flex pt-10 w-full justify-between">
            <Link to={"/manager/information"}>
              <Button
                variant={"outline"}
                className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-700 hover:text-gray-50"
              >
                HESABIM
              </Button>
            </Link>

            <Button className="bg-purple-700 text-gray-50 hover:shadow-xl hover:shadow-purple-700">
              BİLGİLERİ GÜNCELLE
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Personal;
