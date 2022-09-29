import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import Starter from "../../assets/mail.starter-mono.svg";
import Sme from "../../assets/mail.sme-mono.svg";
import Personal from "../../assets/mail.personal-mono.svg";
import Corporate from "../../assets/mail.corporate-mono.svg";
import { ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={"gray.200"}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

function Pricing() {
  const [paymentMethod, setPaymentMethod] = useState("month");
  const [current, setCurrent] = useState("starter");

  return (
    <Container maxW={"8xl"}>
      <Box pt={6} pb={16}>
        <VStack spacing={2} textAlign="center" mb={10}>
          <Heading as="h1" fontSize="4xl">
            Yükseltmek istediğiniz yeni paketi seçin.
          </Heading>
          <div className="flex items-center space-x-3 my-5">
            <Button
              rounded={"full"}
              size="sm"
              onClick={() => setPaymentMethod("month")}
              className={`${
                paymentMethod === "month" &&
                "bg-PinkButton-500 shadow-lg shadow-PinkButton-500 text-gray-100"
              } p-5`}
            >
              AYLIK ÖDEME
            </Button>
            <Button
              rounded={"full"}
              size="sm"
              onClick={() => setPaymentMethod("year")}
              className={`${
                paymentMethod === "year" &&
                "bg-PinkButton-500 shadow-lg shadow-PinkButton-500 text-gray-100"
              } p-5`}
            >
              YILLIK ÖDEME
            </Button>
          </div>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 4 }}
          textAlign="center"
          justify="center"
          spacing={{ base: 5, xl: 0 }}
          py={10}
        >
          {/* Starter */}

          <PriceWrapper>
            <Box>
              <Box py={4} minW={"xs"}>
                <VStack justifyContent={"center"} spacing={"5"} pb={4}>
                  <Text fontWeight="500" fontSize="md" color={"green.500"}>
                    BAŞLANGIÇ
                  </Text>
                  <Image src={Starter} alt="Starter" maxW={"32"} />
                </VStack>
                <VStack justifyContent={"center"} spacing={1}>
                  <Text fontWeight={600} color="gray.500" fontSize={"lg"}>
                    ÖMÜR BOYU
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="4xl" fontWeight="700">
                      ÜCRETSİZ
                    </Text>
                  </HStack>
                </VStack>
                <div className="mt-5">
                  {current === "starter" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={"32px"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button
                      px={10}
                      size="sm"
                      rounded={"full"}
                      className="bg-MailCyan-500 hover:shadow-xl hover:shadow-MailCyan-500/60 text-gray-50"
                    >
                      SATIN AL
                    </Button>
                  )}
                </div>
              </Box>
              <VStack
                bg={"gray.50"}
                py={4}
                borderBottomRadius={"xl"}
                w={"full"}
              >
                <List
                  spacing={3}
                  textAlign="center"
                  fontSize={"md"}
                  className="w-full"
                >
                  <ListItem fontWeight={600}>1 E-posta Hesabı</ListItem>
                  <Divider />
                  <ListItem fontWeight={600}>1 GB Kota</ListItem>
                  <Divider />
                  <ListItem>E-mail 2.0 Servisleri</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>Mobil Uygulama/Webmail</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>
                    @alanadiniz Uzantılı E-posta
                  </ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>Anti-spam/Anti-virüs</ListItem>
                  <Divider />
                  <ListItem
                    color={"red.500"}
                    className="flex items-center justify-center"
                  >
                    <XMarkIcon className="h-6 w-6 " />
                  </ListItem>
                  <Divider />
                  <ListItem
                    color={"red.500"}
                    className="flex items-center justify-center"
                  >
                    <XMarkIcon className="h-6 w-6 " />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Tooltip
                      className=""
                      label={
                        "Yönetici Konsolu // Kişisel-Ortak Adres Defteri // POP3/IMAP/SMTP // Takma Adlar // Yönlendirme // Akıllı Güvenlik Duvarı"
                      }
                    >
                      <p className="font-semibold text-red-400">
                        Standart Özellikler
                      </p>
                    </Tooltip>
                  </ListItem>
                </List>
                <Box w="80%" pt={4}>
                  {current === "starter" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={10}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button colorScheme="cyan" px={10} className="text-gray-50">
                      SATIN AL
                    </Button>
                  )}
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>

          {/* Personal */}

          <PriceWrapper>
            <Box>
              <Box py={4} minW={"xs"}>
                <VStack justifyContent={"center"} spacing={"5"} pb={4}>
                  <Text fontWeight="500" fontSize="md" color={"green.500"}>
                    KİŞİSEL
                  </Text>
                  <Image src={Personal} alt="Personal " maxW={"32"} />
                </VStack>
                <VStack justifyContent={"center"} spacing={1}>
                  <Text
                    fontWeight={600}
                    color="gray.500"
                    fontSize={"lg"}
                    className="line-through"
                  >
                    {paymentMethod === "month" ? "5,00 $" : "60,00 $"}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      $
                    </Text>
                    <Text fontSize="4xl" fontWeight="900">
                      {paymentMethod === "month" ? "2,95" : "35,40"}
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      {paymentMethod === "month" ? "/ay" : "/yıl"}
                    </Text>
                  </HStack>
                </VStack>
                <div className="mt-5">
                  {current === "personal" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={"10"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button
                      px={10}
                      size="sm"
                      rounded={"full"}
                      className="bg-MailCyan-500 hover:shadow-xl hover:shadow-MailCyan-500/60 text-gray-50"
                    >
                      SATIN AL
                    </Button>
                  )}
                </div>
              </Box>
              <VStack
                bg={"gray.50"}
                py={4}
                borderBottomRadius={"xl"}
                w={"full"}
              >
                <List
                  spacing={3}
                  textAlign="center"
                  fontSize={"md"}
                  className="w-full"
                >
                  <ListItem fontWeight={600}>2 E-posta Hesabı</ListItem>
                  <Divider />
                  <ListItem fontWeight={600}>50 GB/Hesap Kota</ListItem>
                  <Divider />
                  <ListItem>E-mail 2.0 Servisleri</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>Mobil Uygulama/Webmail</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>
                    @alanadiniz Uzantılı E-posta
                  </ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>Anti-spam/Anti-virüs</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>7/24 Destek</ListItem>
                  <Divider />
                  <ListItem color={"red.400"} w={"full"}>
                    <Tooltip
                      className=""
                      label={
                        "DNS Yönetimi // Takma Alan Adları // Alan Adı Yönlendirme // Whois Gizleme"
                      }
                    >
                      <p className="font-semibold text-red-400">
                        Ücretsiz Alan Adı Servisleri
                      </p>
                    </Tooltip>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Tooltip
                      className=""
                      label={
                        "Yönetici Konsolu // Kişisel-Ortak Adres Defteri // POP3/IMAP/SMTP // Takma Adlar // Yönlendirme // Akıllı Güvenlik Duvarı"
                      }
                    >
                      <p className="font-semibold text-red-400">
                        Standart Özellikler
                      </p>
                    </Tooltip>
                  </ListItem>
                </List>
                <Box w="80%" pt={4}>
                  {current === "personal" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={"10"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button colorScheme="cyan" px={10} className="text-gray-50">
                      SATIN AL
                    </Button>
                  )}
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>

          {/* Kobi */}

          <PriceWrapper>
            <Box className="bg-[#479C4B] " borderRadius={"xl"}>
              <Box py={4} minW={"xs"}>
                <VStack justifyContent={"center"} spacing={"5"} pb={4}>
                  <Text fontWeight="500" fontSize="md" color={"whiteAlpha.900"}>
                    KOBİ
                  </Text>
                  <Image src={Sme} alt="SME" maxW={"32"} />
                </VStack>
                <VStack justifyContent={"center"} spacing={1}>
                  <Text
                    fontWeight={600}
                    color="gray.200"
                    fontSize={"lg"}
                    className="line-through"
                  >
                    {paymentMethod === "month" ? "27,95 $" : "335,40 $"}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600" color={"gray.200"}>
                      $
                    </Text>
                    <Text fontSize="4xl" fontWeight="900" color={"gray.50"}>
                      {paymentMethod === "month" ? "13,95" : "167,40"}
                    </Text>
                    <Text fontSize="3xl" color="gray.200">
                      {paymentMethod === "month" ? "/ay" : "/yıl"}
                    </Text>
                  </HStack>
                </VStack>
                <div className="mt-5">
                  {current === "sme" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={"32px"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button
                      px={10}
                      size="sm"
                      rounded={"full"}
                      className="bg-MailCyan-500 hover:shadow-xl hover:shadow-MailCyan-500/60 text-gray-50"
                    >
                      SATIN AL
                    </Button>
                  )}
                </div>
              </Box>
              <Divider />
              <VStack py={4} borderBottomRadius={"xl"} w={"full"}>
                <List
                  spacing={3}
                  textAlign="center"
                  fontSize={"md"}
                  className="w-full"
                >
                  <ListItem fontWeight={600}>10 E-posta Hesabı</ListItem>
                  <Divider />
                  <ListItem fontWeight={600}>100 GB/Hesap Kota</ListItem>
                  <Divider />
                  <ListItem>E-mail 2.0 Servisleri</ListItem>
                  <Divider />
                  <ListItem color={"gray.50"}>Mobil Uygulama/Webmail</ListItem>
                  <Divider />
                  <ListItem color={"gray.50"}>
                    @alanadiniz Uzantılı E-posta
                  </ListItem>
                  <Divider />
                  <ListItem color={"gray.50"}>Anti-spam/Anti-virüs</ListItem>
                  <Divider />
                  <ListItem color={"gray.50"}>7/24 Destek</ListItem>
                  <Divider />
                  <ListItem color={"red.400"} w={"full"}>
                    <Tooltip
                      className=""
                      label={
                        "DNS Yönetimi // Takma Alan Adları // Alan Adı Yönlendirme // Whois Gizleme"
                      }
                    >
                      <p className="font-semibold text-gray-50 underline">
                        Ücretsiz Alan Adı Servisleri
                      </p>
                    </Tooltip>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Tooltip
                      className=""
                      label={
                        "Yönetici Konsolu // Kişisel-Ortak Adres Defteri // POP3/IMAP/SMTP // Takma Adlar // Yönlendirme // Akıllı Güvenlik Duvarı"
                      }
                    >
                      <p className="font-semibold text-gray-50 underline">
                        Standart Özellikler
                      </p>
                    </Tooltip>
                  </ListItem>
                </List>
                <Box w="80%" pt={4}>
                  {current === "sme" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.50"
                      minH={"10"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button colorScheme="cyan" px={10} className="text-gray-50">
                      SATIN AL
                    </Button>
                  )}
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>

          {/* Corpo */}

          <PriceWrapper>
            <Box>
              <Box py={4} minW={"xs"}>
                <VStack justifyContent={"center"} spacing={"5"} pb={4}>
                  <Text fontWeight="500" fontSize="md" color={"green.500"}>
                    KURUMSAL
                  </Text>
                  <Image src={Corporate} alt="Corpo" maxW={"32"} />
                </VStack>
                <VStack justifyContent={"center"} spacing={1}>
                  <Text
                    fontWeight={600}
                    color="gray.500"
                    fontSize={"lg"}
                    className="line-through"
                  >
                    {paymentMethod === "month" ? "139,95 $" : "1679,40 $"}
                  </Text>
                  <HStack justifyContent="center">
                    <Text fontSize="3xl" fontWeight="600">
                      $
                    </Text>
                    <Text fontSize="4xl" fontWeight="900">
                      {paymentMethod === "month" ? "69,95" : "839,40"}
                    </Text>
                    <Text fontSize="3xl" color="gray.500">
                      {paymentMethod === "month" ? "/ay" : "/yıl"}
                    </Text>
                  </HStack>
                </VStack>
                <div className="mt-5">
                  {current === "corpo" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={"32px"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button
                      px={10}
                      size="sm"
                      rounded={"full"}
                      className="bg-MailCyan-500 hover:shadow-xl hover:shadow-MailCyan-500/60 text-gray-50"
                    >
                      SATIN AL
                    </Button>
                  )}
                </div>
              </Box>
              <VStack
                bg={"gray.50"}
                py={4}
                borderBottomRadius={"xl"}
                w={"full"}
              >
                <List
                  spacing={3}
                  textAlign="center"
                  fontSize={"md"}
                  className="w-full"
                >
                  <ListItem fontWeight={600}>50 E-posta Hesabı</ListItem>
                  <Divider />
                  <ListItem fontWeight={600}>200 GB/Hesap Kota</ListItem>
                  <Divider />
                  <ListItem>E-mail 2.0 Servisleri</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>Mobil Uygulama/Webmail</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>
                    @alanadiniz Uzantılı E-posta
                  </ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>Anti-spam/Anti-virüs</ListItem>
                  <Divider />
                  <ListItem color={"gray.500"}>7/24 Destek</ListItem>
                  <Divider />
                  <ListItem color={"red.400"} w={"full"}>
                    <Tooltip
                      className=""
                      label={
                        "DNS Yönetimi // Takma Alan Adları // Alan Adı Yönlendirme // Whois Gizleme"
                      }
                    >
                      <p className="font-semibold text-red-400">
                        Ücretsiz Alan Adı Servisleri
                      </p>
                    </Tooltip>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Tooltip
                      className=""
                      label={
                        "Yönetici Konsolu // Kişisel-Ortak Adres Defteri // POP3/IMAP/SMTP // Takma Adlar // Yönlendirme // Akıllı Güvenlik Duvarı"
                      }
                    >
                      <p className="font-semibold text-red-400">
                        Standart Özellikler
                      </p>
                    </Tooltip>
                  </ListItem>
                </List>
                <Box w="80%" pt={4}>
                  {current === "corpo" ? (
                    <Text
                      fontSize={"lg"}
                      fontWeight={"600"}
                      color="gray.500"
                      minH={"10"}
                    >
                      Geçerli Paket
                    </Text>
                  ) : (
                    <Button colorScheme="cyan" px={10} className="text-gray-50">
                      SATIN AL
                    </Button>
                  )}
                </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        </SimpleGrid>
      </Box>
      <Box pb={10}>
        <Heading
          fontSize={"3xl"}
          className="text-center w-full"
          color={"gray.700"}
        >
          Fiyatlandırma Hakkında Sıkça Sorulanlar
        </Heading>
        <SimpleGrid columns={{ base: 1, lg: 2 }} pt={16} spacing={"24"}>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Seçtiğim paketi daha sonra değiştirebilir miyim?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                Paketinizi dilediğiniz zaman üst paketlere geçirebilir veya
                hizmet iptali yaparak alt paketlere dönüştürebilirsiniz.
              </Text>
            </div>
          </div>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Yükseltme yaptıktan sonra paketimin bitiş tarihi değişir mi?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                Paket yükseltmelerinde iki paket arasındaki farkın ödemesini
                yaparsınız. Dolayısıyla paketiniz ve limitleriniz güncellenir,
                bitiş tarihiniz değişmez.
              </Text>
            </div>
          </div>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Bir hesapta istediğim kadar alan adı barındırabilir miyim?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                E-posta hizmeti almasanız dahi, dilediğiniz kadar alan adı satın
                alabilir ve yönetici konsolundan yönetebilirsiniz.
              </Text>
            </div>
          </div>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Alan adımı size transfer edebilir miyim?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                Evet, alan adınızı Mailfe'ye kolayca transfer edebilir, e-posta
                paketlerinizde kullanabilirsiniz.
              </Text>
            </div>
          </div>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Paket ödemelerimi aylık yapabilir miyim?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                Premium(ücretli) paketlerin abonelik ücretlerini dilerseniz
                aylık ödemelerle dilerseniz de senelik ödemelerle
                gerçekleştirebilirsiniz. Ayrıca Masterpass'e tanımlayacağınız
                kredi kartlarınızla ödemelerinizi otomatik olarak yaparak
                hizmetinizi yenileyebilirsiniz.
              </Text>
            </div>
          </div>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Paket aboneliğimi dilediğim zaman iptal edebilir miyim?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                Mailfe hizmetlerinden memnun kalacağınıza inanıyoruz. Yine de
                memnun kalmazsanız, aboneliğinizi dilediğiniz zaman koşulsuz
                şartsız iptal edebilirsiniz.
              </Text>
            </div>
          </div>
          <div className="flex space-x-3">
            <ChevronRightIcon className="h-8 w-8 mt-1" />
            <div>
              <Heading fontSize={"lg"} color={"gray.700"}>
                Fiyatlarınız benzer e-posta servislerine göre neden daha
                ekonomik?
              </Heading>
              <Text fontSize={"md"} color={"gray.500"} maxW={"xl"}>
                Mailfe'yi benzer e-posta servislerlerinden ayıran en önemli
                özellik; lisanslama, destek, arge gibi yüksek maliyet
                unsurlarını, teknoloji ithalatıyla değil kendi ürettiği
                çözümlerle gerçekleştirerek kullanıcılarla buluşturmasıdır.
                Bulut teknolojisinin gücü ve fiziksel lokasyondan bağımsız
                ölçeklenebilir alt yapısı, ürün maliyetlerinin düşmesini,
                fiyatların rakiplerine oranla daha düşük olmasını sağlamıştır.
              </Text>
            </div>
          </div>
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default Pricing;
