import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Divider,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  Avatar,
} from "@chakra-ui/react";
import {
  UserIcon as UserOutline,
  UsersIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  ExclamationTriangleIcon,
  GlobeAmericasIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Domains() {
  const [confirmed, setConfirmed] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <Container maxW={"8xl"}>
      <div className="w-full relative">
        <Box className="flex flex-col space-y-3 w-full items-center justify-center">
          <Heading className="text-2xl ">Alan Adlarım</Heading>
          <Text className="text-lg font-semibold text-gray-500">
            E-posta hesaplarınızı, alan adlarınızı ve DNS kayıtlarınızı yönetin
          </Text>
          <Button
            size={"lg"}
            rounded={"full"}
            leftIcon={<PlusCircleIcon className="h-5 w-5 text-gray-100" />}
            className="text-gray-100 bg-PinkButton-500 hover:bg-PinkButton-800 xl:absolute xl:top-0 xl:right-52"
          >
            ALAN ADI EKLE
          </Button>
        </Box>
      </div>
      <Container maxW={"5xl"}>
        <Box className="bg-gray-100 py-6 px-8 my-16 rounded-md shadow-xl">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem border={"none"}>
              <Box className="flex items-center">
                <AccordionButton className="p-5 hover:bg-gray-100">
                  <Box
                    flex="1"
                    textAlign="left"
                    className="flex items-center space-x-2"
                  >
                    <GlobeAmericasIcon className="w-7 h-7 text-gray-400" />
                    <p className="text-xl font-bold">efkan.net</p>
                    {!confirmed && (
                      <Tooltip
                        className="bg-white p-5 text-gray-900 shadow-2xl"
                        label="E-posta hesaplarınızın çalışması için gerekli olan NS ve MX kontrolü başarısız olarak sonuçlandı. Alan adınızın NS veya MX bilgilerini nasıl değiştireceğinizi öğrenmek için tıklayın."
                      >
                        <Link to={"/manager/mailsite/checkrecords"}>
                          <div className="flex items-center text-xs space-x-2 ml-6 text-red-600 rounded-full p-2 border-2 border-red-600 animate-pulse">
                            <ExclamationTriangleIcon className="h-4 w-4" />
                            <p className="font-semibold">DOĞRULANAMADI</p>
                          </div>
                        </Link>
                      </Tooltip>
                    )}
                  </Box>
                </AccordionButton>
                <div className="flex items-center space-x-3">
                  <Menu gutter={5} matchWidth placement="bottom-end">
                    {({ isOpen }) => (
                      <>
                        <MenuButton className="hover:shadow-xl rounded-full hover:shadow-cyan-400/50">
                          <Button
                            rounded={"full"}
                            leftIcon={<Cog6ToothIcon className="h-4 w-4" />}
                            className="px-6 bg-MailCyan-500 text-gray-100"
                          >
                            ALAN ADI
                            {!isOpen ? (
                              <ChevronDownIcon className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronUpIcon className="h-4 w-4 ml-1" />
                            )}
                          </Button>
                        </MenuButton>
                        <MenuList
                          minW={"64"}
                          p={2}
                          className="text-sm font-medium"
                        >
                          <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                            <Link className="px-4">
                              Alan Adını Şimdi Doğrula
                            </Link>
                          </MenuItem>
                          <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                            <Link className="px-4">Transfer Et</Link>
                          </MenuItem>
                          <MenuDivider />
                          <MenuItem className="hover:bg-purple-600 hover:text-gray-100 text-red-600 rounded-sm">
                            <Link className="px-4">Alan Adını Buradan Sil</Link>
                          </MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </div>
              </Box>
              <AccordionPanel pb={4}>
                <Box className="bg-white py-5 px-4 rounded-md border pb-4">
                  <div className="flex items-center px-2 justify-between">
                    <div className="text-PinkButton-500 font-semibold flex items-center space-x-2">
                      <UserOutline className="h-6 w-7" />
                      <p>E-POSTA HESAPLARI</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        size={"sm"}
                        rounded={"full"}
                        leftIcon={<UsersIcon className="w-5 h-5" />}
                        className="p-5 bg-PinkButton-500 text-gray-100 hover:shadow-lg hover:shadow-PinkButton-500/70"
                      >
                        YENİ GRUP
                      </Button>
                      <Button
                        size={"sm"}
                        rounded={"full"}
                        leftIcon={<UserOutline className="w-5 h-5" />}
                        className="p-5 bg-PinkButton-500 text-gray-100 hover:shadow-lg hover:shadow-PinkButton-500/70"
                      >
                        YENİ HESAP
                      </Button>
                    </div>
                  </div>
                  <Center h={4} mt={2}>
                    <Divider className="border-gray-600/40" />
                  </Center>
                  <div className="flex items-center justify-between font-semibold">
                    <div className="flex items-center space-x-5">
                      <Avatar name="Efkan Atalay" />
                      <p>Efkan ATALAY</p>
                    </div>
                    <p>bilgi@efkan.net</p>
                    <Menu gutter={5} matchWidth placement="bottom-end">
                      {({ isOpen }) => (
                        <>
                          <MenuButton className="hover:shadow-xl rounded-full hover:shadow-cyan-400/50">
                            <Button
                              rounded={"full"}
                              className="px-6 bg-MailCyan-500 text-gray-100"
                            >
                              HESAP
                              {!isOpen ? (
                                <ChevronDownIcon className="h-4 w-4 ml-1" />
                              ) : (
                                <ChevronUpIcon className="h-4 w-4 ml-1" />
                              )}
                            </Button>
                          </MenuButton>
                          <MenuList
                            minW={"56"}
                            p={2}
                            className="text-sm font-medium"
                          >
                            <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm font-bold">
                              <Link className="px-4 ">Webmail Oturumu Aç</Link>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                              <Link className="px-4">Hesabı Düzenle</Link>
                            </MenuItem>
                            <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                              <Link className="px-4">Kullanım Bilgileri</Link>
                            </MenuItem>
                            <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                              <Link className="px-4">İçe İleti Aktarma</Link>
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem className="hover:bg-purple-600 hover:text-gray-100 text-red-600 rounded-sm">
                              <Link className="px-4">Hesabı Sil</Link>
                            </MenuItem>
                          </MenuList>
                        </>
                      )}
                    </Menu>
                  </div>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <Center h={5}>
              <Divider className="border-gray-500/50" />
            </Center>

            <AccordionItem border={"none"}>
              <Box className="flex items-center">
                <AccordionButton className="p-5 hover:bg-gray-100">
                  <Box
                    flex="1"
                    textAlign="left"
                    className="flex items-center space-x-2"
                  >
                    <GlobeAmericasIcon className="w-7 h-7 text-gray-400" />
                    <p className="text-xl font-bold">efkan.net</p>
                    {!confirmed && (
                      <Tooltip
                        className="bg-white p-5 text-gray-900 shadow-2xl"
                        label="E-posta hesaplarınızın çalışması için gerekli olan NS ve MX kontrolü başarısız olarak sonuçlandı. Alan adınızın NS veya MX bilgilerini nasıl değiştireceğinizi öğrenmek için tıklayın."
                      >
                        <Link to={"#"}>
                          <div className="flex items-center text-xs space-x-2 ml-6 text-red-600 rounded-full p-2 border-2 border-red-600 animate-pulse">
                            <ExclamationTriangleIcon className="h-4 w-4" />
                            <p className="font-semibold">DOĞRULANAMADI</p>
                          </div>
                        </Link>
                      </Tooltip>
                    )}
                  </Box>
                </AccordionButton>
                <div className="flex items-center space-x-3">
                  <Menu gutter={5} matchWidth placement="bottom-end">
                    {({ isOpen }) => (
                      <>
                        <MenuButton className="hover:shadow-xl rounded-full hover:shadow-cyan-400/50">
                          <Button
                            rounded={"full"}
                            leftIcon={<Cog6ToothIcon className="h-4 w-4" />}
                            className="px-6 bg-MailCyan-500 text-gray-100"
                          >
                            ALAN ADI
                            {!isOpen ? (
                              <ChevronDownIcon className="h-4 w-4 ml-1" />
                            ) : (
                              <ChevronUpIcon className="h-4 w-4 ml-1" />
                            )}
                          </Button>
                        </MenuButton>
                        <MenuList
                          minW={"64"}
                          p={2}
                          className="text-sm font-medium"
                        >
                          <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                            <Link className="px-4">
                              Alan Adını Şimdi Doğrula
                            </Link>
                          </MenuItem>
                          <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                            <Link className="px-4">Transfer Et</Link>
                          </MenuItem>
                          <MenuDivider />
                          <MenuItem className="hover:bg-purple-600 hover:text-gray-100 text-red-600 rounded-sm">
                            <Link className="px-4">Alan Adını Buradan Sil</Link>
                          </MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </div>
              </Box>
              <AccordionPanel pb={4}>
                {isEmpty ? (
                  <Box className="py-10">
                    <div className="flex items-center justify-center space-x-5 py-10">
                      <p className="text-3xl font-medium text-gray-500">
                        BURADAN BAŞLAYIN
                      </p>
                      <Menu gutter={5} matchWidth placement="bottom-end">
                        {({ isOpen }) => (
                          <>
                            <MenuButton className="hover:shadow-xl rounded-full hover:shadow-PinkButton-500/50">
                              <Button
                                rounded={"full"}
                                className="px-6 bg-PinkButton-500 text-gray-100"
                              >
                                E-Posta Hesabı Oluşturma
                                {!isOpen ? (
                                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                                ) : (
                                  <ChevronUpIcon className="h-4 w-4 ml-1" />
                                )}
                              </Button>
                            </MenuButton>
                            <MenuList
                              minW={"64"}
                              p={2}
                              className="text-sm font-medium"
                            >
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                                <Link className="px-4 flex items-center w-full justify-around">
                                  <UsersIcon className="h-5 w-5 mr-2" />
                                  Yeni Email Grubu
                                </Link>
                              </MenuItem>
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                                <Link className="px-4 flex items-center justify-around w-full">
                                  <UserOutline className="h-5 w-5" />
                                  Yeni Mail Hesabı
                                </Link>
                              </MenuItem>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    </div>
                  </Box>
                ) : (
                  <Box className="bg-white py-5 px-4 rounded-md border pb-4">
                    <div className="flex items-center px-2 justify-between">
                      <div className="text-PinkButton-500 font-semibold flex items-center space-x-2">
                        <UserOutline className="h-6 w-7" />
                        <p>E-POSTA HESAPLARI</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button
                          size={"sm"}
                          rounded={"full"}
                          leftIcon={<UsersIcon className="w-5 h-5" />}
                          className="p-5 bg-PinkButton-500 text-gray-100 hover:shadow-lg hover:shadow-PinkButton-500/70"
                        >
                          YENİ GRUP
                        </Button>
                        <Button
                          size={"sm"}
                          rounded={"full"}
                          leftIcon={<UserOutline className="w-5 h-5" />}
                          className="p-5 bg-PinkButton-500 text-gray-100 hover:shadow-lg hover:shadow-PinkButton-500/70"
                        >
                          YENİ HESAP
                        </Button>
                      </div>
                    </div>
                    <Center h={4} mt={2}>
                      <Divider className="border-gray-600/40" />
                    </Center>
                    <div className="flex items-center justify-between font-semibold">
                      <div className="flex items-center space-x-5">
                        <Avatar name="Efkan Atalay" />
                        <p>Efkan ATALAY</p>
                      </div>
                      <p>bilgi@efkan.net</p>
                      <Menu gutter={5} matchWidth placement="bottom-end">
                        {({ isOpen }) => (
                          <>
                            <MenuButton className="hover:shadow-xl rounded-full hover:shadow-cyan-400/50">
                              <Button
                                rounded={"full"}
                                className="px-6 bg-MailCyan-500 text-gray-100"
                              >
                                HESAP
                                {!isOpen ? (
                                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                                ) : (
                                  <ChevronUpIcon className="h-4 w-4 ml-1" />
                                )}
                              </Button>
                            </MenuButton>
                            <MenuList
                              minW={"56"}
                              p={2}
                              className="text-sm font-medium"
                            >
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm font-bold">
                                <Link className="px-4 ">
                                  Webmail Oturumu Aç
                                </Link>
                              </MenuItem>
                              <MenuDivider />
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                                <Link className="px-4">Hesabı Düzenle</Link>
                              </MenuItem>
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                                <Link className="px-4">Kullanım Bilgileri</Link>
                              </MenuItem>
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 rounded-sm">
                                <Link className="px-4">İçe İleti Aktarma</Link>
                              </MenuItem>
                              <MenuDivider />
                              <MenuItem className="hover:bg-purple-600 hover:text-gray-100 text-red-600 rounded-sm">
                                <Link className="px-4">Hesabı Sil</Link>
                              </MenuItem>
                            </MenuList>
                          </>
                        )}
                      </Menu>
                    </div>
                  </Box>
                )}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </Container>
  );
}

export default Domains;
