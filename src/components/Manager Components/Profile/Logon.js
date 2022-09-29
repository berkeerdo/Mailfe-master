import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Text,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Logon() {
  const [isEmailConfirmed, setIsEmaillConfirmed] = useState(false);
  const [isNumberConfirmed, setIsNumberlConfirmed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  return (
    <Container maxW={"8xl"}>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="space-y-4 flex flex-col items-center justify-center">
          <Heading fontSize={"2xl"}>Şifre/Giriş Güvenliği</Heading>
          <Text fontSize={"lg"} color={"gray.500"}>
            Oturum açmak için kullanabileceğiniz bilgileri güncelleyin
          </Text>
        </div>
        <Box
          maxW={"2xl"}
          className="bg-gray-100 shadow-2xl w-full p-16 mt-16 space-y-5"
        >
          <FormControl>
            <div className="flex items-center justify-between mb-2">
              <FormLabel color={"gray.500"}>Cep Telefonu Numarası</FormLabel>
              {!isNumberConfirmed ? (
                <div className="text-xs font-semibold py-1 px-2 rounded-md bg-[#F44336] text-gray-100">
                  DOĞRULANMADI
                </div>
              ) : (
                ""
              )}
            </div>
            <Input
              type={"number"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
            <p className="text-xs text-red-500 underline cursor-pointer mt-1">
              Şimdi Doğrula
            </p>
          </FormControl>
          <FormControl>
            <div className="flex items-center justify-between mb-2">
              <FormLabel color={"gray.500"}>E-Posta Adresi</FormLabel>
              {!isEmailConfirmed ? (
                <div className="text-xs font-semibold py-1 px-2 rounded-md bg-[#F44336] text-gray-100">
                  DOĞRULANMADI
                </div>
              ) : (
                ""
              )}
            </div>

            <Input
              type={"email"}
              isRequired
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
            <p className="text-xs text-red-500 underline cursor-pointer mt-1">
              Şimdi Doğrula
            </p>
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Eski Şifre</FormLabel>
            <Input
              type={"password"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
            <p className="text-xs text-red-500 underline cursor-pointer mt-1">
              Şifremi Hatırlamıyorum
            </p>
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Yeni Şifre</FormLabel>
            <Input
              type={"password"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>
          <FormControl>
            <FormLabel color={"gray.500"}>Tekrar Yeni Şifre</FormLabel>
            <Input
              type={"password"}
              borderColor={"gray.700"}
              className="hover:border-gray-400"
            />
          </FormControl>

          <div className="flex items-center pt-10 justify-between">
            <Link to={"/manager/information"}>
              <Button
                size={{ base: "sm", md: "md" }}
                variant={"outline"}
                className="border-purple-700 text-purple-700 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-700 hover:text-gray-50"
              >
                HESABIM
              </Button>
            </Link>

            <Button
              size={{ base: "sm", md: "md" }}
              className="bg-purple-700 text-gray-50 hover:shadow-xl hover:shadow-purple-700"
            >
              BİLGİLERİ GÜNCELLE
            </Button>
          </div>
        </Box>
      </div>
    </Container>
  );
}

export default Logon;
