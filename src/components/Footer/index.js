import { Flex, Container, Image, SimpleGrid } from "@chakra-ui/react";
import InternodLogo from "../../assets/internod-logo.png";
import MasterVisa from "../../assets/visa-mastercard-transparent.png";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Container maxW={"8xl"} p={10}>
        <Flex
          justify={"space-around"}
          align={"center"}
          className="font-semibold text-gray-600 text-sm "
        >
          <Image
            maxW={"36"}
            src={InternodLogo}
            alt="internod logo"
            className="hidden lg:inline-flex"
          />
          <SimpleGrid
            columns={{ base: 2, lg: 6 }}
            className="space-x-6"
            textAlign={"center"}
          >
            <Link className="hover:text-gray-600/70 ml-6 lg:ml-0" to={"/"}>
              ANA SAYFA
            </Link>
            <Link className="hover:text-gray-600/70 text-left" to={"/pricing"}>
              FİYATLANDIRMA
            </Link>
            <Link className="hover:text-gray-600/70 mt-1 lg:mt-0" to={"/about"}>
              MAİLFE TEKNOLOJİSİ
            </Link>
            <Link
              className="hover:text-gray-600/70 mt-1 lg:mt-0 "
              to={"/contract/terms"}
            >
              KULLANIM ŞARTLARI
            </Link>
            <Link
              className="hover:text-gray-600/70 mt-1 lg:mt-0"
              to={"/support"}
            >
              DESTEK
            </Link>
            <Link
              className="hover:text-gray-600/70 mt-1 lg:mt-0 text-left"
              to={"/contact"}
            >
              İLETİŞİM
            </Link>
          </SimpleGrid>
          <Image
            maxW={"36"}
            src={MasterVisa}
            alt="Master Visa"
            className="hidden lg:inline-flex"
          />
        </Flex>
      </Container>
    </>
  );
}

export default Footer;
