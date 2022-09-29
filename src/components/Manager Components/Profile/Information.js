import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Dashboard1 from "../../../assets/dashboard1.png";
import Dashboard2 from "../../../assets/dashboard2.png";
import React from "react";
import { Link } from "react-router-dom";

function Information() {
  return (
    <Container maxW={"8xl"}>
      <div className="flex flex-col space-y-16 xl:flex-row xl:space-y-0 items-center justify-around w-full">
        <Box maxW={"xl"} className="w-full p-10 bg-gray-100 shadow-2xl">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Heading fontSize={"2xl"} color={"gray.700"}>
              Paket Yönetimi
            </Heading>
            <Text color={"gray.500"}>
              Paket aboneliğinizi ve ödeme planlarınızı yönetin.
            </Text>
          </div>
          <div className="w-full flex items-center justify-center mt-16">
            <Image src={Dashboard1} alt="Dashboard 1" maxW={"64"} h={"64"} />
          </div>
          <SimpleGrid className="mt-16" columns={{ base: 2 }} spacing={8}>
            <Link
              to={"/manager/service/info"}
              className="hover:bg-gray-400/20 px-3 rounded"
            >
              <Text fontWeight={600}>HESAP LİMİTLERİ</Text>
              <Text color={"gray.500"}>1 Limit / 0 Kullanılabilir</Text>
            </Link>
            <Link
              to={"/manager/pricing"}
              className="flex items-center justify-between hover:bg-gray-400/20 px-3 rounded"
            >
              <div>
                <Text fontWeight={600}>AKTİF PAKET</Text>
                <Text color={"gray.500"}>Başlangıç</Text>
              </div>
              <Button
                colorScheme={"cyan"}
                className="z-50"
                rounded={"full"}
                size={"sm"}
                color={"gray.50"}
              >
                Yükselt
              </Button>
            </Link>
            <div className="hover:bg-gray-400/20 px-3 rounded">
              <Text fontWeight={600}>PAKET BİTİŞİ</Text>
              <Text color={"gray.500"}>Süresiz</Text>
            </div>
          </SimpleGrid>
        </Box>
        <Box maxW={"xl"} className="w-full p-10 bg-gray-100 shadow-2xl">
          <div className="flex flex-col items-center justify-center space-y-2">
            <Heading fontSize={"2xl"} color={"gray.700"}>
              Hesap Yönetimi
            </Heading>
            <Text color={"gray.500"}>
              Oturum açma bilgilerinizi değiştirin, üyelik bilgilerinizi
              yönetin.
            </Text>
          </div>
          <div className="w-full flex items-center justify-center mt-16">
            <Image src={Dashboard2} alt="Dashboard 2" maxW={"64"} h={"64"} />
          </div>
          <SimpleGrid className="mt-16" columns={{ base: 2 }} spacing={8}>
            <Link
              to={"/manager/information/logon"}
              className="hover:bg-gray-400/20 px-3 rounded"
            >
              <Text fontWeight={600}>YÖNETİCİ E-POSTA ADRESİ</Text>
              <Text color={"gray.500"}>taylanezer@gmail.com</Text>
            </Link>
            <Link
              to={"/manager/information/sessions"}
              className="hover:bg-gray-400/20 px-3 rounded"
            >
              <Text fontWeight={600}>AKTİF OTURUMLAR</Text>
              <Text color={"gray.500"}>4 Oturum ve 4 IP</Text>
            </Link>
            <Link
              to={"/manager/information/logon"}
              className="hover:bg-gray-400/20 px-3 rounded"
            >
              <Text fontWeight={600}>SON ŞİFRE DEĞİŞİKLİĞİ</Text>
              <Text color={"gray.500"}>Henüz Yapılmadı</Text>
            </Link>
            <Link
              to={"/manager/information/logs"}
              className="hover:bg-gray-400/20 px-3 rounded"
            >
              <Text fontWeight={600}>SON GİRİŞ TARİHİ</Text>
              <Text color={"gray.500"}>Henüz Yapılmadı</Text>
            </Link>
          </SimpleGrid>
        </Box>
      </div>

      {/* Extras */}

      <div className="flex flex-col space-y-16 xl:flex-row xl:space-y-0 justify-between w-full mt-16">
        <div className="flex flex-col space-y-6 w-full px-16">
          <Text className="font-semibold">PAKET İŞLEMLERİ</Text>
          <Link to={"/manager/pricing"}>
            <Text className="text-MailCyan-500 font-semibold">
              PAKETİ YÜKSELT
            </Text>
          </Link>
          <Link to={"/manager/service/info"}>
            <Text className="text-MailCyan-500 font-semibold">
              PAKETİ DETAYLARI
            </Text>
          </Link>
        </div>
        <div className="flex flex-col space-y-6 w-full px-16">
          <Text className="font-semibold">HESPA İŞLEMLERİ</Text>
          <Link to={"/manager/mailbox/import"}>
            <Text className="text-MailCyan-500 font-semibold">
              İÇE İLETİ AKTARMA SİHİRBAZI
            </Text>
          </Link>
          <Link to={"/manager/information/personal"}>
            <Text className="text-MailCyan-500 font-semibold">
              İLETİŞİM BİLGİLERİNİ GÜNCELLE
            </Text>
          </Link>
          <Link to={"/manager/information/logon"}>
            <Text className="text-MailCyan-500 font-semibold">
              OTURUM AÇMA BİLGİLERİNİ DEĞİŞTİR
            </Text>
          </Link>
          <Link to={"/manager/information/sessions"}>
            <Text className="text-MailCyan-500 font-semibold">
              AKTİF OTURUMLARI YÖNET
            </Text>
          </Link>
          <Link to={"/manager/information/logs"}>
            <Text className="text-MailCyan-500 font-semibold">
              İŞLEM KAYITLARINI GÖRÜNTÜLE
            </Text>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Information;
