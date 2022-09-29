import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ComputerDesktopIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sessions() {
  const [sessionDevice, setSessionDevice] = useState("pc");
  const [ip, setIp] = useState("178.244.194.254");

  return (
    <Container maxW={"8xl"}>
      <Box className="w-full flex flex-col space-y-16 justify-center items-center">
        <Heading fontSize={"2xl"} color={"gray.700"}>
          Aktif Oturumlar
        </Heading>
        <Box maxW={"3xl"} className="w-full bg-gray-100 shadow-xl px-10 py-16">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-3 items-center">
                <div>
                  {sessionDevice === "pc" && (
                    <ComputerDesktopIcon className="h-7 w-7" />
                  )}
                  {sessionDevice === "mobile" && (
                    <PhoneIcon className="h-7 w-7" />
                  )}
                </div>
                <Text className="font-semibold">
                  {sessionDevice === "pc" ? "Windows 10" : "Mobile"}
                </Text>
              </div>
              <Button
                size={"sm"}
                className="bg-[#F33527] text-gray-50 font-semibold px-3 hover:shadow-xl"
              >
                BURADAN ÇIKIŞ YAP
              </Button>
            </div>
            <div className="mt-2 flex items-center space-x-8">
              <a
                href={`https://ipinfo.io/${ip}`}
                className="text-purple-600 underline"
              >
                {ip}
              </a>
              <UnorderedList className="flex items-center">
                <ListItem>Chrome</ListItem>
                <ListItem className="ml-8">
                  1 yıl önce yönetici olarak oturum açıldı.
                </ListItem>
              </UnorderedList>
            </div>
          </div>
          <Center h={10}>
            <Divider className="border-gray-500" />
          </Center>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-3 items-center">
                <div>
                  {sessionDevice === "pc" && (
                    <ComputerDesktopIcon className="h-7 w-7" />
                  )}
                  {sessionDevice === "mobile" && (
                    <PhoneIcon className="h-7 w-7" />
                  )}
                </div>
                <Text className="font-semibold">
                  {sessionDevice === "pc" ? "Windows 10" : "Mobile"}
                </Text>
              </div>
              <Button
                size={"sm"}
                className="bg-[#F33527] text-gray-50 font-semibold px-3 hover:shadow-xl"
              >
                BURADAN ÇIKIŞ YAP
              </Button>
            </div>
            <div className="mt-2 flex items-center space-x-8">
              <a
                href={`https://ipinfo.io/${ip}`}
                className="text-purple-600 underline"
              >
                {ip}
              </a>
              <UnorderedList className="flex items-center">
                <ListItem>Chrome</ListItem>
                <ListItem className="ml-8">
                  1 yıl önce yönetici olarak oturum açıldı.
                </ListItem>
              </UnorderedList>
            </div>
          </div>
          <Center h={10}>
            <Divider className="border-gray-500" />
          </Center>
          <div className="mt-8 ">
            <Link to={"/manager/information"}>
              <Button
                variant={"outline"}
                className="border-purple-700 text-purple-700"
              >
                HESABIM
              </Button>
            </Link>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Sessions;
