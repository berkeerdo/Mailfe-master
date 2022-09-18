import React from "react";
import PriceProp from "../../assets/prop_price.svg";
import PropAlias from "../../assets/prop_alias.svg";
import PropAntivirus from "../../assets/prop_antivirus.svg";
import PropConsole from "../../assets/prop_console.svg";
import PropContact from "../../assets/prop_contact.svg";
import PropCorp from "../../assets/prop_corp.svg";
import PropDomain from "../../assets/prop_domain.svg";
import PropPlatform from "../../assets/prop_platforms.svg";
import PropSSL from "../../assets/prop_ssltls.svg";
import Iphone from "../../assets/iphone.png";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  DocumentPlusIcon,
  ListBulletIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        align={"center"}
        justify={"center"}
        flexDirection={"column"}
        className="space-y-3"
      >
        <Flex
          w={20}
          h={20}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={700} fontSize="lg">
          {title}
        </Text>
        <Text color={"gray.500"}>{text}</Text>
      </Flex>
    </Stack>
  );
};

const AccordionItm = ({ title, text, icon, status }) => {
  return (
    <AccordionItem className="border-none">
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight={600} fontSize={"lg"}>
            <div className="flex items-center">
              {icon}
              {title}
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text maxW={"lg"}>{text}</Text>
        <Box className="flex justify-end">
          <Tooltip
            hasArrow
            label={
              status === "Geliştiriliyor"
                ? "Bu servisin geliştirilmesi devam ediyor."
                : "Bu servis tüm paketlerde kullanılabilir durumda."
            }
          >
            <span
              className={
                status === "Geliştiriliyor" ? "text-red-600" : "text-green-600"
              }
            >
              {status}
            </span>
          </Tooltip>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

function Main() {
  return (
    <>
      <Box className="max-w-full shadow-2xl">
        <Box className="z-50 bg-transparent">
          <Stack
            as={Box}
            textAlign={"end"}
            spacing={{ base: 8, md: 14 }}
            py={{ md: "8", lg: "16" }}
            className="xl:py-40 xl:px-52"
            px={{ base: 6, md: 12, lg: "42" }}
            textColor={"gray.100"}
            mb={12}
          >
            <Heading
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              lineHeight={"110%"}
            >
              MAXIMUM <br /> MAIL <br /> DENEYİMİ
            </Heading>
            <Text
              fontWeight={500}
              fontSize={{ base: "sm", sm: "md", md: "xl" }}
            >
              Maximum kota <br />
              Maximum hız <br />
              Benzersiz servisler Sadece <br />
              Mailfe'de!
            </Text>
          </Stack>
        </Box>
        <Box className="bg-gradient-to-b from-gray-200 to-zinc-300 shadow-2xl">
          <Container maxW={"6xl"} className="pt-24">
            <div className="flex flex-col items-center justify-center font-bold text-3xl text-gray-700">
              <p className="text-base uppercase">
                Profesyonel E-posta Hakkında
              </p>
              <p className="">Tüm Bildiklerinizi Unutun!</p>
            </div>
            <Box py={14}>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={14}>
                <Feature
                  icon={<Image src={PriceProp} w={20} h={20} />}
                  title={"Neredeyse Sonsuz Alan"}
                  text={
                    "Benzer e-posta servislerine Gigabyte bazlı ödeyeceğiniz fiyatlara, Mailfe'de yüksek kapasiteli Terabyte cinsinden fiyatlara ödeme yaparsınız."
                  }
                />
                <Feature
                  icon={<Image src={PropSSL} w={20} h={20} />}
                  title={"Güvenli İletişim"}
                  text={
                    "İleti gönderme ve alma işlemlerinizi SSL/TLS güvenlik iletişim protokolleri üzerinden yapabilirsiniz."
                  }
                />
                <Feature
                  icon={<Image src={PropDomain} w={20} h={20} />}
                  title={"Alan Adı Servisleri"}
                  text={
                    "DNS kayıt yönetimi, whois gizleme ve alan adı park etme gibi ek ücret ödediğiniz hizmetler Mailfe'de ilk ve her yıl ücretsizdir."
                  }
                />
                <Feature
                  icon={<Image src={PropCorp} w={20} h={20} />}
                  title={"@isletmeniz.com Alan Adı"}
                  text={
                    "Hesaplarınızı kendi alan adınızda ve istediğiniz isimde(ali@alisletmeniz.com gibi açabilir, ücretsiz grup hesapları, yönlendirme ve takma adlar oluşturabilirsiniz."
                  }
                />
                <Stack>
                  <Flex
                    align={"center"}
                    justify={"center"}
                    flexDirection={"column"}
                    className="space-y-2"
                  >
                    <Flex
                      w={20}
                      h={20}
                      align={"center"}
                      justify={"center"}
                      color={"white"}
                      rounded={"full"}
                      mb={1}
                    >
                      <Image src={PropConsole} w={20} h={20} />
                    </Flex>
                    <Text fontWeight={700} fontSize={"lg"}>
                      Tek Noktadan Yönetim
                    </Text>
                    <Text color={"gray.500"}>
                      Alan adlarınızı, e-posta hesaplarınızı, ödemelerinizi ve
                      diğer tüm işlemlerinizi tek bir noktadan,
                      <Link href="#" className="text-red-400">
                        {" "}
                        Mailfe yönetici konsolundan
                      </Link>{" "}
                      kolayca gerçekleştirebilirsiniz.
                    </Text>
                  </Flex>
                </Stack>
                <Feature
                  icon={<Image src={PropPlatform} h={20} w={20} />}
                  title={"Tüm Platformlardan Erişim"}
                  text={
                    "E-postalarınıza ister webmailden, ister mobil uygulamadan, isterseniz Outlook/Thunderbird benzeri istemcilerden senkronize olarak erişebilirsiniz."
                  }
                />
                <Feature
                  icon={<Image src={PropAlias} h={20} w={20} />}
                  title={"Takma Adlar ve Yönlendirme"}
                  text={
                    "Geçici olarak kullanacağınız veya farklı bir servisten hizmet aldığınız durumlarda, ücretsiz takma ad ve yönlendirme servisleri ile anonim kalabilirsiniz."
                  }
                />
                <Feature
                  icon={<Image src={PropAntivirus} h={20} w={20} />}
                  title={"Anti-spam / Anti-virüs"}
                  text={
                    "Üstün güvenlik duvarı, anti-spam ve anti-virüs servisleri, sizi istenmeyen iletilerden %100'e yakın korumak için özel olarak tasarlandı."
                  }
                />
                <Feature
                  icon={<Image src={PropContact} h={20} w={20} />}
                  title={"Kişisel ve Ortak Adres Defteri"}
                  text={
                    "Uygulama ile entegre çalışan adres defteri ile arkadaşlarınızı veya şirket çalışanlarını listenize ekleyebilir ve diğer hesaplarla paylaşabilirsiniz."
                  }
                />
              </SimpleGrid>
            </Box>
          </Container>
          <Center h={"16"}>
            <Divider className="border-gray-800/20" />
          </Center>
          <Container maxW={"8xl"}>
            <Box className="pb-20">
              <Flex
                h={"full"}
                align={"center"}
                justify={"space-around"}
                className="flex-col space-y-10 md:flex-row"
              >
                <Image src={Iphone} />
                <Flex
                  justify={"center"}
                  flexDir={"column"}
                  className="space-y-6"
                >
                  <Box maxW={"xl"}>
                    <Heading className="text-gray-700">
                      E-Mail 2.0 Çok Yakında!
                    </Heading>
                    <Text>
                      Yapay zeka ve insan etkileşimine dayalı, ilklerle dolu
                      yeni nesil e-posta platformuyla tanışın!
                    </Text>
                  </Box>
                  <Box maxW={"2xl"} className="font-semibold">
                    <Accordion allowToggle className="w-full">
                      <AccordionItm
                        title={"Giden E-posta Onayı"}
                        status={"AKTİF SERVİS"}
                        icon={
                          <ShieldCheckIcon className="w-8 h-8 text-green-600 mr-2" />
                        }
                        text={
                          "Kullanıcılarınızın giden e-posta trafiğini kontrol ederek, sadece sizin onayladığınız iletilerin alıcılara teslim edilmesini sağlayın, hesaplarınızı tam kontrol altına alın."
                        }
                      />
                      <AccordionItm
                        title={`Sanal Asistan "FE"`}
                        icon={
                          <UserIcon className="h-8 w-8 mr-2 text-purple-800" />
                        }
                        text={
                          "Sanal asistan, e-postalarınızı sizin yerinize düzenler, temizler, raporlar ve size zaman kazanındırır."
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"Performans Raporları"}
                        icon={
                          <ListBulletIcon className="w-8 h-8 mr-2 text-red-600" />
                        }
                        text={
                          "Kullanıcı bazında ortalama yanıtlama süreleri, ileti yönlendirme oranları, iletilerin yanıtlanma sayıları, ortalama e-posta yazma süresi gibi istatistiksel raporları alarak, şirket çalışanlarının performans ölçümlemesini yapın."
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"Mailfe WebDisk"}
                        icon={
                          <ServerStackIcon className="w-8 h-8 mr-2 text-green-600" />
                        }
                        text={
                          <p>
                            Geniş depolama alanınızı maillerinizde, WEBDAV
                            protokolüyle kişisel bilgisayarınızda disk olarak
                            kullanın. Üstelik{" "}
                            <span className="font-bold">
                              disk.alanadiniz.com
                            </span>{" "}
                            altında dosyalarınızı web erişimine açarak
                            içeriklerinizi herkesle paylaşın.
                          </p>
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"İleti İçi Mesajlaşma"}
                        icon={
                          <ChatBubbleBottomCenterTextIcon className="h-8 w-8 mr-2 text-blue-500" />
                        }
                        text={
                          "İleti detay ekranında, alıcılar(TO, BCC) ile konu üzerinden canlı görüşme başlatın ve yanıtlama sürelerini kısaltın."
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"Önizlemeli Push Bildirimler"}
                        icon={
                          <BellAlertIcon className="w-8 h-8 mr-2 text-purple-800" />
                        }
                        text={
                          " Mobil cihazınızın bildirim alanında, uygulamaya geçmeden yeni e-postalarınızın tasarımsal ön izlemesini görün."
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"Offline SMS Bildirimleri"}
                        icon={
                          <ChatBubbleLeftEllipsisIcon className="h-8 w-8 mr-2 text-blue-500" />
                        }
                        text={
                          "  Internet erişiminizin olmadığı durumlar, önemli e-postalarınızın bildirimlerini SMS ile cep telefonunuza alın, anında haberdar olun."
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"Hesap İzinlerini Özelleştirme"}
                        icon={
                          <Cog6ToothIcon className="h-8 w-8 mr-2 text-green-600" />
                        }
                        text={
                          "Bir e-posta hesabında bulunan klasörleri kimlerin görüntüleyebileceğini, kimlerin bu hesaptan ileti gönderebileceğini ayrı ayrı seçerek, hesabın kullanımını farklı kişi veya gruplara paylaştırın."
                        }
                        status={"Geliştiriliyor"}
                      />
                      <AccordionItm
                        title={"Zengin E-posta Ekleri"}
                        icon={
                          <DocumentPlusIcon className="h-8 w-8 mr-2 text-pink-700" />
                        }
                        text={
                          " E-posta eki olarak fotoğraf, doküman gibi standart eklerin dışında formlar, anketler veya ön seçimli sorular gönderin, etkileşimlerinizi arttırın."
                        }
                        status={"Geliştiriliyor"}
                      />
                    </Accordion>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Main;
