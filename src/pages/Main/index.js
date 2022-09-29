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
import MailConfirm from "../../assets/mail_confirm.png";
import WizardImport from "../../assets/import_wizard.gif";
import DomainManager from "../../assets/domain_manager1.png";
import DnsManager from "../../assets/dns_manage.png";
import EmailSignature from "../../assets/email_signature.gif";
import GooglePlay from "../../assets/button_googleplay.png";
import IosLogo from "../../assets/ios.png";
import Tlds from "../../assets/tlds.png";
import LaptopBasics from "../../assets/laptop-basics.png";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import {
  ArrowsRightLeftIcon,
  ArrowUturnLeftIcon,
  BellAlertIcon,
  BellIcon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  DocumentPlusIcon,
  EnvelopeIcon,
  ForwardIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
  HandThumbUpIcon,
  ListBulletIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  UserCircleIcon,
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
            className={
              status === "Geliştiriliyor"
                ? "bg-red-500 text-gray-800 py-2 shadow-lg font-bold"
                : "bg-green-600 text-gray-800 py-2 shadow-lg font-bold"
            }
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

const ConsoleItem = ({
  title,
  titleHeader,
  text,
  icon,
  buttonText,
  imageSrc,
  imageAlt,
  subText,
  backWard,
}) => {
  return (
    <Box>
      <Flex
        align={"center"}
        justify={"center"}
        className={`flex-col ${
          backWard ? "lg:flex-row-reverse" : "lg:flex-row"
        } space-y-8`}
      >
        <Box maxW={"lg"}>
          <Flex flexDirection={"column"}>
            <Box
              className={`flex ${
                backWard ? "lg:items-start items-start" : "lg:items-end"
              } flex-col `}
            >
              <div
                className={`flex mb-2 ${
                  backWard ? "flex-row-reverse" : "flex-row"
                } items-center text-red-500 font-semibold`}
              >
                <Text>{titleHeader}</Text>
                {icon}
              </div>
              <Heading>{title}</Heading>
            </Box>
            <div className={backWard ? "lg:text-left" : "lg:text-end"}>
              {text}
              {subText && <Text className="text-gray-500 mt-7">{subText}</Text>}
            </div>
          </Flex>
          {buttonText && (
            <Box className="flex items-end justify-end mt-7">
              <Button variant="solid" colorScheme={"blue"} size="md">
                {buttonText}
              </Button>
            </Box>
          )}
        </Box>
        <Image
          maxW={"md"}
          src={imageSrc}
          alt={imageAlt}
          className="shadow-2xl mx-8"
        />
      </Flex>
    </Box>
  );
};

const MobileAppItem = ({ title, icon, text }) => {
  return (
    <Flex flexDir={"column"} className="space-y-6 ml-10">
      <div className="flex items-center space-x-4">
        {icon}
        <Heading className="text-lg">{title}</Heading>
      </div>
      <Text maxW={"md"} className="text-gray-500">
        {text}
      </Text>
    </Flex>
  );
};

const QuestionItem = ({ title, text }) => {
  return (
    <ListItem className="flex items-center">
      <ListIcon as={ChevronRightIcon} color={"green.500"} w={"8"} h={"8"} />
      <Box className="flex flex-col space-y-1 ">
        <Heading className="text-lg">{title}</Heading>
        <Text className="text-gray-600">{text}</Text>
      </Box>
    </ListItem>
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

        {/* Özellikler */}

        <Box className="shadow-2xl">
          <Box className="bg-gradient-to-b from-gray-200 to-zinc-300">
            <Container maxW={"6xl"} className="py-24">
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
          </Box>

          {/* Email 2.0  */}

          <Container maxW={"8xl"}>
            <Box className="py-24">
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

          {/* Yönetici Konsolu */}

          <Box className="bg-gray-100 w-full">
            <Container maxW={"8xl"} className="py-24">
              <Flex flexDirection={"column"} className="space-y-16">
                <Flex
                  align={"center"}
                  justify={"center"}
                  flexDirection={"column"}
                >
                  <Text className="text-lg font-bold">
                    Yönetici Konsolu ile
                  </Text>
                  <Heading className="capitalize">
                    Her şey kontrolünüz altında!
                  </Heading>
                </Flex>
                <ConsoleItem
                  titleHeader={"Yönetici Onaylı İleti Gönderimi"}
                  icon={<UserCircleIcon className="w-6 h-6 ml-3" />}
                  title={"E-posta Trafiğini Kontrol Edin!"}
                  text={
                    <Text className="text-gray-500">
                      Hesaplarınızdan gönderilen tüm iletilerin veya sadece
                      şirket dışına gönderilen iletilerin, yönetici onayından
                      sonra alıcılara teslim edilmesini{" "}
                      <span className="font-bold text-black">
                        "Giden İleti Onayı"
                      </span>{" "}
                      sayesinde artık kolayca gerçekleştirebilirsiniz.
                    </Text>
                  }
                  subText={
                    "Özellikle gizliliğin üst düzeyde tutulduğu kurum ve kuruluşlar için tasarlanan bu güvenlik yöntemi, tüm paketlerde standart olarak sunulmaktadır."
                  }
                  buttonText={"DETAYLI BİLGİ"}
                  imageSrc={MailConfirm}
                  imageAlt={"Mail Confirm"}
                />
                <Center h={8}>
                  <Divider className="border-gray-400/40" />
                </Center>
                <ConsoleItem
                  backWard
                  titleHeader={"E-Posta Taşıma"}
                  icon={<ArrowUturnLeftIcon className="w-6 h-6 mr-3" />}
                  title={"30 Saniyede Taşının!"}
                  text={
                    <Text className="text-gray-500">
                      içe ileti aktarma sihirbazı Gmail, Outlook veya diğer
                      servis sağlayıcılarındaki e-posta hesaplarınızda bulunan
                      mailleri kesinti olmaksızın Mailfe'ye aktarmanızı sağlar.
                      10 bin iletiyi dahi Mailfe'ye aktarmak sadece 30
                      saniyenizi alır!
                    </Text>
                  }
                  imageSrc={WizardImport}
                  imageAlt={"Mail Import Wizard"}
                />
                <Center h={8}>
                  <Divider className="border-gray-400/40" />
                </Center>
                <ConsoleItem
                  titleHeader={"Alan Adları ve E-Posta"}
                  icon={<GlobeAsiaAustraliaIcon className="w-6 h-6 ml-3" />}
                  title={"Zaman Kazanın!"}
                  text={
                    <Text className="text-gray-500">
                      Müşteri paneli, alan adı yönetimi, mail sitesi yönetimi,
                      e-posta hesap yönetimi... Diğer e-posta servislerinde 4
                      ayrı sayfada yapabileceğiniz bu karmaşık işlemleri,
                      Mailfe'de tek sayfada, basitçe yapabilirsiniz.
                    </Text>
                  }
                  imageSrc={DomainManager}
                  imageAlt={"Domain Manager"}
                />
                <Center h={8}>
                  <Divider className="border-gray-400/40" />
                </Center>
                <ConsoleItem
                  backWard
                  titleHeader={"Alan Adları"}
                  icon={<GlobeEuropeAfricaIcon className="w-6 h-6 mr-3" />}
                  title={"Kolayca Yönetin!"}
                  text={
                    <Text className="text-gray-500">
                      Gelişmiş DNS yönetim aracı ile alan adlarınızın NS, A, MX,
                      CNAME, TXT ve diğer DNS kayıtlarını, ekstra herhangi bir
                      servis ücreti ödemeksizin kolayca yönetebilirsiniz.
                    </Text>
                  }
                  imageSrc={DnsManager}
                  imageAlt={"Dns Manager"}
                />
                <Center h={8}>
                  <Divider className="border-gray-400/40" />
                </Center>
                <ConsoleItem
                  titleHeader={"Webmail/App"}
                  icon={<EnvelopeIcon className="h-6 w-6 ml-3" />}
                  title={"İmzanız Hazır!"}
                  text={
                    <Text className="text-gray-500">
                      E-posta hesabınızı oluşturdunuz, sırada imzanızı
                      hazırlamak var. Endişelenmeyin! İmza şablonlarımızdan
                      dilediğinizi seçerek bu işlemi kolayca yapabilirsiniz.
                    </Text>
                  }
                  imageSrc={EmailSignature}
                  imageAlt={"Email Signature"}
                />
              </Flex>
            </Container>
          </Box>

          {/* Mobile App */}

          <Box className="bg-gradient-to-br from-[#2C2C2C] to-gray-700 text-gray-100 py-24">
            <Container maxW={"8xl"}>
              <Flex flexDirection={"column"} className="space-y-20">
                <Flex
                  flexDirection={"column"}
                  align={"center"}
                  justify={"center"}
                  className="space-y-2"
                >
                  <Heading className="text-3xl lg:text-4xl">
                    Metroda E-posta Okumak Mı?
                  </Heading>
                  <Text className="text-[15px] lg:text-base text-gray-300/80">
                    Mailfe mobil uygulamasını çevrimdışı da kullanabilirsiniz.
                  </Text>
                </Flex>
                <Container maxW={"8xl"}>
                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacingY={24}
                    spacingX={{ base: "0", lg: "48" }}
                  >
                    <MobileAppItem
                      title={"Türkiye'de İlk ve Tek"}
                      icon={
                        <HandThumbUpIcon className="w-8 h-8 text-purple-600" />
                      }
                      text={
                        "Mailfe, yerli e-posta servis sağlayıcıları arasında, mobil uygulama sunan tek e-posta servisidir."
                      }
                    />
                    <MobileAppItem
                      title={"Yeni İleti Bildirimleri"}
                      icon={<BellIcon className="w-8 h-8 text-purple-600" />}
                      text={
                        "Yeni iletilerden anında haberdar olur ve hızlı yanıtlama özelliği ile e-postayı, açmadan, ana ekran üzerinden yanıtlayabilirsiniz."
                      }
                    />
                    <MobileAppItem
                      title={"Hesaplar Arası Kolay Geçiş"}
                      icon={
                        <ArrowsRightLeftIcon className="h-8 w-8 text-blue-400" />
                      }
                      text={
                        "Hesabınızda bulunan tüm e-posta kullanıcılarını uygulama içerisinde yönetebilir ve istediğiniz hesaba hemen bağlanabilirsiniz."
                      }
                    />
                    <MobileAppItem
                      title={"Sade ve Kullanışlı Arayüz"}
                      icon={
                        <DevicePhoneMobileIcon className="h-8 w-8 text-blue-400" />
                      }
                      text={
                        "Alışkanlıklarınızdan vazgeçmeden, E-mail 2.0 yeniliklerini deneyimleyebileceğiniz, yabancı dil destekli, kullanıcı dostu arayüz Mailfe mobil uygulamasında."
                      }
                    />
                    <MobileAppItem
                      title={"Hızlı Navigasyon"}
                      icon={<ForwardIcon className="h-8 w-8 text-green-600" />}
                      text={
                        "Favori klasörlerle iletilerinize hızlı erişim sağlayabilir, kaydırma butonlarıyla iletiler üzerinde kolayca işlem yapabilirsiniz."
                      }
                    />
                    <MobileAppItem
                      title={"Kişisel ve Ortak Kişi Listesi"}
                      icon={<UserIcon className="h-8 w-8 text-green-600" />}
                      text={
                        "Kendi listenizde veya işletmenizde ki diğer kullanıcıların adres listesinde görüntülenecek kişileri siz belirlersiniz."
                      }
                    />
                  </SimpleGrid>
                  <Flex
                    justify={"end"}
                    align={"end"}
                    mt={"16"}
                    className="space-x-6"
                  >
                    <Image
                      src={GooglePlay}
                      alt={"Get it on Google Play"}
                      maxW={"44"}
                      className="cursor-pointer"
                    />
                    <Image
                      className="cursor-pointer"
                      src={IosLogo}
                      alt={"Get it on Apple Store"}
                      maxW={"28"}
                    />
                  </Flex>
                </Container>
              </Flex>
            </Container>
          </Box>

          {/* Bottom Section */}

          <Box className="py-24 bg-white">
            <Container maxW={"2xl"}>
              <Flex
                flexDir={"column"}
                align={"center"}
                justify={"center"}
                className="space-y-4 font-semibold"
              >
                <Heading className="text-xl md:text-2xl text-gray-600">
                  ALAN ADINIZ YOK MU? SORUN DEĞİL!
                </Heading>
                <Text className="text-sm md:text-base text-center text-gray-500">
                  Farklı kayıt firmalarında ki alan adınızı transfer
                  edebileceğiniz gibi, seçtiğiniz alan adını Mailfe Yönetici
                  Konsolu üzerinden satın alabilirsiniz.
                </Text>
              </Flex>
              <Image src={Tlds} alt="Domain tags" className="mt-10" />
            </Container>
            <Center h={"20"}>
              <Divider />
            </Center>
            <Container maxW={"5xl"}>
              <Flex
                align={"center"}
                justify={"center"}
                className="flex-col space-y-4 lg:flex-row"
              >
                <Flex flexDir={"column"} className="space-y-2">
                  <Heading className="text-2xl">
                    IŞIK HIZINDA!
                    <br />
                    Tüm Platformlar <br />
                    Tüm Cihazlar
                  </Heading>
                  <Text
                    className="text-sm text-gray-500 font-semibold "
                    maxW={"72"}
                  >
                    WEB'DEN, MASAÜSTÜNDEN, MOBİL CİHAZLARDAN{" "}
                    <span className="text-red-500">
                      EN HIZLI E-MAIL İSTEMCİSİ!
                    </span>
                  </Text>

                  <Text
                    maxW={"xl"}
                    className="text-gray-500 font-semibold pt-5"
                  >
                    E-posta gönderme/alma işlemlerinizi ister Mailfe mobil
                    uygulamasından, ister Mailfe Webmail arayüzünden, isterseniz
                    de Outlook-Thunderbird benzeri istemcilerden yapabilirsiniz.
                  </Text>
                </Flex>
                <Image
                  src={LaptopBasics}
                  alt={"Laptop Basics"}
                  className="pt-10"
                />
              </Flex>
            </Container>
          </Box>
          <Box className="py-16 bg-teal-500 text-gray-200">
            <Flex flexDir={"column"} align={"center"} justify={"center"}>
              <Heading>30 Gün Ücretsiz Deneyin!</Heading>
              <Text className="mt-2 text-lg">
                İsterseniz, Başlangıç Paketini{" "}
                <span className="font-bold">Ömür Boyu Ücretsiz</span> Kullanın
              </Text>
              <Button
                variant={"solid"}
                colorScheme={"yellow"}
                rounded={"full"}
                p={"6"}
                className={"mt-6"}
              >
                HEMEN BAŞLAYIN
              </Button>
              <Text className="text-sm mt-1">Kredi Kartı Gerektirmez</Text>
            </Flex>
          </Box>
          <Box className="py-48 bg-white">
            <Flex justify={"center"} align={"center"}>
              <Heading className="text-3xl">
                Mailfe ile İlgili Sıkça Sorulanlar
              </Heading>
            </Flex>
            <Container maxW={"8xl"} pt={"16"}>
              <List spacing={"14"}>
                <QuestionItem
                  title={"Kurumsal e-posta servisi nedir?"}
                  text={
                    "E-posta hesaplarınızı kendi alan adınız altında kullanabildiğiniz, yönetebildiğiniz e-posta gönderme/alma hizmetidir. Bu sayede dilediğiniz alan adında açtığınız hesaplardan e-posta gönderme ve alma işlemleri yapabilirsiniz."
                  }
                />
                <QuestionItem
                  title={"Neden sizi tercih etmeliyim?"}
                  text={
                    "Mailfe'yi öncelikli olarak yerli rakiplerinden ayrın en önemli özellik, ithal ettiği teknolojileri pazarlaması değil, kendi ürettiği teknolojileri kullanmasından gelir. Ayrıca aynı fiyatlara diğer servis sağlayıcılar GB düzeyinde disk alanı hizmeti sunarken, Mailfe TB düzeyinde alan sunar. Bunun dışında bir çok profesyonel e-posta sağlacısının ücretli olarak sunduğu hizmetler(Whois gizleme, alan adı yönlendirme, alan adı park etme) Mailfe'de sadece ilk yıl değil ömür boyu ücretsizdir."
                  }
                />
                <QuestionItem
                  title={"E-Mail 2.0 servisleri aktif mi?"}
                  text={
                    "E-mail 2.0 çatısı altında sunduğumuz servislerin bir bölümü tamamlanmış ve yayında olan, bir kısmı ise halen geliştirilmekte olan servislerdir. Geliştirilme durumunu hakkında bilgiye, ilgili özelliği tıklayarak ulaşabilirsiniz."
                  }
                />
                <QuestionItem
                  title={
                    "Şifre, parola ve kart bilgilerim sisteminizde saklanıyor mu?"
                  }
                  text={
                    "Mailfe'de şifre ve parolalarınız, geri çevrilemeyecek şekilde kriptolanarak saklanır ve hiç kimse bilgilerinizi görüntüleyemez, geri alamaz. Güvenilir olduğunu iddia eden şirketlerden aldığınız hizmetlerde, şifrelerinizi görüntüleyebiliyor olmanızın, erişim izni olan herkesin görebileceği anlama geldiğini lütfen unutmayın."
                  }
                />
                <QuestionItem
                  title={
                    "E-posta hesap açma limitim yetersiz kalırsa arttırabilir miyim?"
                  }
                  text={
                    "Hesap açma limitlerinizi dilediğiniz zaman arttırabileceğiniz gibi, paket yükseltme işlemi yaparak tüm limitlerinizi(disk ve diğer limitler) arttırabilirsiniz."
                  }
                />
                <QuestionItem
                  title={
                    "Alan adımı sizden, web hosting hizmetimi başka bir firmadan alabilir miyim?"
                  }
                  text={
                    "Alan adınızı veya e-posta hizmetinizi Mailfe'den, web hosting hizmetinizi farklı bir firmadan almanız mümkündür. Tek yapmanız gereken Ücretsiz DNS Yöneticisinden, sitenizin Host(A) kaydına sahip IP değerini web hosting hizmeti aldığınız yere yönlendirmek. Üstelik NS adreslerinizi Mailfe'ye yönlendirerek ücretsiz DNS barındırma hizmetinden faydalanabilirsiniz."
                  }
                />
              </List>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Main;
