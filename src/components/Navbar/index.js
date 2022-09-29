import React from "react";
import InternodLogo from "../../assets/internod-logo.png";
import MasterVisa from "../../assets/visa-mastercard-transparent.png";
import MailfeLogo from "../../assets/mailfe-white.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  Box,
  Flex,
  IconButton,
  HStack,
  useDisclosure,
  Link,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  Stack,
  DrawerContent,
  Divider,
  Center,
  DrawerFooter,
  Container,
  Image,
} from "@chakra-ui/react";
// import { SkipNavLink } from "@chakra-ui/skip-nav";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

function Index(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const btnRef = useRef();
  const NavLink = ({ children, href, responsive }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{ textDecoration: "none" }}
      href={`/${href}`}
      className={`font-semibold lg:text-[17px] md:text-base hover:border-b-2 hover:border-purple-400 ${
        responsive ? "hover:bg-gray-500/40 hover:border-none" : ""
      }`}
    >
      {children}
    </Link>
  );

  return (
    //background: rgb(6,0,38);
    // background: radial-gradient(circle, rgba(6,0,38,1) 65%, rgba(2,0,14,1) 100%);
    <>
      <Box
        className={`text-white  py-3 ${
          props.Main || props.Manager ? "bg-transparent  " : "bg-gray-700"
        }  `}
      >
        <Container maxW={"1400px"}>
          <Flex h={"20"} alignItems={"center"} justifyContent={"space-between"}>
            <Box
              className={isOpen ? "-translate-x-96 transition-all" : onClose}
            >
              <Link href="/">
                <img src={MailfeLogo} alt="Maillife Logo" className="h-12" />
              </Link>
            </Box>

            <HStack
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              className={`${isOpen && "hidden"} items-center`}
            >
              {location.pathname !== "/" && (
                <NavLink href={"/"}>Ana Sayfa</NavLink>
              )}
              <NavLink click href={"#"}>
                Özellikler
              </NavLink>
              <NavLink href={"pricing"}>Fiyatlandırma</NavLink>
              <NavLink href={"contact"}>İletişim</NavLink>
              <ButtonGroup
                display={"flex"}
                alignItems={"center"}
                className="lg:ml-16"
              >
                <Button
                  rounded={"full"}
                  variant="solid"
                  className="bg-blue-500 hover:bg-blue-500/30 p-6"
                >
                  Hesap Oluştur
                </Button>
                <Button
                  variant="outline"
                  rounded={"full"}
                  className="mt-1 hover:text-gray-900 border-sky-600  border-2 p-5"
                >
                  Giriş Yap
                </Button>
              </ButtonGroup>
            </HStack>

            <IconButton
              size={"md"}
              bg={"transparent"}
              _hover={{ bg: "transparent" }}
              icon={isOpen ? <XMarkIcon /> : <Bars3Icon />}
              display={{ md: "none" }}
              onClick={onOpen}
              className={isOpen ? "-translate-x-80 transition-all" : ""}
              ref={btnRef}
            />
          </Flex>
          <Drawer
            finalFocusRef={btnRef}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
          >
            <DrawerContent>
              <DrawerBody>
                <Box pb={4} pt={2}>
                  <Stack as={"nav"} spacing={4}>
                    {location.pathname !== "/" && (
                      <NavLink href={"/"} responsive>
                        Ana Sayfa
                      </NavLink>
                    )}
                    <NavLink href={"#"} responsive>
                      Özellikler
                    </NavLink>
                    <NavLink href={"/pricing"} responsive>
                      Fiyatlandırma
                    </NavLink>
                    <NavLink href={"/contact"} responsive>
                      İletişim
                    </NavLink>
                    <Center height={"8"}>
                      <Divider className="border-gray-600" />
                    </Center>
                    <ButtonGroup
                      display={"flex"}
                      alignItems={"center"}
                      flexDir={"column"}
                      className="justify-center space-y-5"
                    >
                      <Button
                        rounded={"full"}
                        variant="solid"
                        className="bg-blue-500 p-4 hover:bg-blue-500/70"
                      >
                        Hesap Oluştur
                      </Button>
                      <Button
                        variant="outline"
                        rounded={"full"}
                        className="hover:text-gray-900 border-sky-600 border-2 p-4 mr-2"
                      >
                        Giriş Yap
                      </Button>
                    </ButtonGroup>
                  </Stack>
                </Box>
              </DrawerBody>
              <DrawerFooter>
                <Box className="flex items-center space-x-16">
                  <Image src={InternodLogo} alt={"Internod Logo"} maxW={"24"} />
                  <Image src={MasterVisa} alt={"Master Visa"} maxW={"24"} />
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Container>
      </Box>
    </>
  );
}

export default Index;
