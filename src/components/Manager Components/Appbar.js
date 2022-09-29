import {
  Box,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  CreditCardIcon,
  GlobeAmericasIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  ArrowRightOnRectangleIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Appbar() {
  const location = useLocation();

  return (
    <Container maxW={"8xl"} p={10}>
      <Flex justify={"center"} align={"center"} className="space-x-2">
        <SimpleGrid columns={{ base: 2, md: 4 }} spacingX={4} spacingY={4}>
          <Link to={"/manager/mailsite"}>
            <Box
              py={6}
              px={6}
              className={`${
                location.pathname === "/manager/mailsite" ||
                location.pathname === "/manager/mailsite/checkrecords"
                  ? "bg-cyan-400 shadow-xl text-gray-100 hover:bg-cyan-400/60"
                  : ""
              } flex flex-col items-center justify-center rounded-md hover:bg-cyan-400 hover:text-gray-600`}
            >
              <GlobeAmericasIcon className="w-10 h-10" />
              <Text className="font-semibold text-center text-sm">
                ALAN ADLARIM
              </Text>
            </Box>
          </Link>
          <Menu gutter={5} matchWidth placement="bottom-end">
            {({ isOpen }) => (
              <>
                <MenuButton className="hover:bg-cyan-400 hover:text-gray-600 rounded-md">
                  <Box
                    py={6}
                    px={4}
                    className={`${
                      location.pathname === "/manager/service/info?" ||
                      location.pathname === "/manager/pricing" ||
                      location.pathname === "/manager/service/info"
                        ? "bg-cyan-400 shadow-xl text-gray-100 hover:bg-cyan-400/60 rounded-md"
                        : ""
                    } flex flex-col items-center justify-center`}
                  >
                    <CloudIcon className="w-10 h-10 " />
                    <div className="flex items-center ml-1">
                      <Text className="font-semibold text-sm">
                        PAKET İŞLEMLERİ
                      </Text>
                      {!isOpen ? (
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronUpIcon className="h-4 w-4 ml-1" />
                      )}
                    </div>
                  </Box>
                </MenuButton>
                <MenuList minW={0} p={2} className="text-sm font-medium">
                  <Link to={"/manager/pricing"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Paketi Yükselt
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/service/info"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Paket Detayları
                    </MenuItem>
                  </Link>
                </MenuList>
              </>
            )}
          </Menu>
          <Menu gutter={5} matchWidth>
            {({ isOpen }) => (
              <>
                <MenuButton className="hover:bg-cyan-400 hover:text-gray-600 rounded-md">
                  <Box
                    py={6}
                    px={4}
                    className={`${
                      location.pathname === "/manager/payment/transactions" ||
                      location.pathname === "/manager/payment/cards" ||
                      location.pathname === "/manager/payment/addresses" ||
                      location.pathname === "/manager/payment/addcard" ||
                      location.pathname === "/manager/payment/address"
                        ? "bg-cyan-400 shadow-xl text-gray-100 hover:bg-cyan-400/60 rounded-md"
                        : ""
                    } flex flex-col items-center justify-center`}
                  >
                    <CreditCardIcon className="w-10 h-10 " />
                    <div className="flex items-center ml-1">
                      <Text className="font-semibold text-sm">
                        ÖDEME MERKEZİ
                      </Text>
                      {!isOpen ? (
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronUpIcon className="h-4 w-4 ml-1" />
                      )}
                    </div>
                  </Box>
                </MenuButton>
                <MenuList p={2} className="text-sm font-medium">
                  <Link to={"/manager/payment/transactions"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm ">
                      Ödeme Hareketlerim
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/payment/cards"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Kredi Kartlarım
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/payment/addresses"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Fatura Adreslerim
                    </MenuItem>
                  </Link>
                </MenuList>
              </>
            )}
          </Menu>
          <Menu gutter={5} matchWidth>
            {({ isOpen }) => (
              <>
                <MenuButton className="hover:bg-cyan-400 hover:text-gray-600 rounded-md">
                  <Box
                    py={6}
                    px={4}
                    className={`${
                      location.pathname === "/manager/information" ||
                      location.pathname === "/manager/information/logon" ||
                      location.pathname === "/manager/information/personal" ||
                      location.pathname === "/manager/information/sessions" ||
                      location.pathname === "/manager/information/logs"
                        ? "bg-cyan-400 shadow-xl text-gray-100 hover:bg-cyan-400/60 rounded-md"
                        : ""
                    } flex flex-col items-center justify-center `}
                  >
                    <UserCircleIcon className="w-10 h-10 " />
                    <div className="flex items-center ml-1">
                      <Text className="font-semibold text-sm">HESABIM</Text>
                      {!isOpen ? (
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      ) : (
                        <ChevronUpIcon className="h-4 w-4 ml-1" />
                      )}
                    </div>
                  </Box>
                </MenuButton>
                <MenuList p={2} minW={"64"} className="text-sm font-medium">
                  <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                    <Link className="flex items-center space-x-5">
                      <div className="flex flex-col space-y-1 font-semibold">
                        <Text className="text-sm font-bold">
                          WEBMAIL OTURUMU AÇ
                        </Text>
                        <Text className="text-sm font-sans">
                          bilgi@efkan.net
                        </Text>
                      </div>
                      <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    </Link>
                  </MenuItem>
                  <MenuDivider />
                  <Link to={"/manager/information"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Hesap Özeti
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/information/logon"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Şifre/Giriş Güvenliği
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/information/personal"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Müşteri Bilgilerim
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/information/sessions"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      Aktif Oturumlar
                    </MenuItem>
                  </Link>
                  <Link to={"/manager/information/logs"}>
                    <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                      İşlem Günlüğü
                    </MenuItem>
                  </Link>
                  <MenuDivider />
                  <MenuItem className="hover:bg-red-500 hover:text-gray-100 rounded-sm">
                    <Link>Oturumu Kapat</Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </SimpleGrid>
      </Flex>
    </Container>
  );
}

export default Appbar;
