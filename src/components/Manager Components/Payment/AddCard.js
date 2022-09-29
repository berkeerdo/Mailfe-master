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

function AddCard() {
  return (
    <Container maxW={"8xl"}>
      <div className="w-full flex flex-col space-y-16 items-center justify-center">
        <Box className="">
          <Heading fontSize={"3xl"} color={"gray.700"}>
            Yeni Kredi Kartı
          </Heading>
        </Box>
        <Box className="bg-gray-100 shadow-2xl px-10 py-14 space-y-12">
          <FormControl>
            <FormLabel color={"gray.500"}>Kart Üzerindeki İsim</FormLabel>
            <Input
              type={"text"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Kart Numarası</FormLabel>
            <Input
              type={"number"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Son Kullanma Tarihi</FormLabel>
            <Input
              type={"date"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>CVC</FormLabel>
            <Input
              type={"number"}
              max={3}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <div className="flex pt-10 space-x-10">
            <Link to={"/manager/payment/cards"}>
              <Button
                variant={"outline"}
                className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-700 hover:text-gray-50"
              >
                KREDİ KARTLARIM
              </Button>
            </Link>

            <Button className="bg-purple-700 text-gray-50 hover:shadow-xl hover:shadow-purple-700">
              KREDİ KARTI EKLE
            </Button>
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default AddCard;
