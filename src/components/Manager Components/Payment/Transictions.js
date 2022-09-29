import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  ArrowPathRoundedSquareIcon,
  CreditCardIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { useState } from "react";

function Transictions() {
  const [payments, setPayments] = useState("paid");
  const [paidOnes, setPaidOnes] = useState([]);
  const [futereOnes, setFutereOnes] = useState([]);

  return (
    <Container maxW={"8xl"}>
      <Box className="flex flex-col items-center justify-center w-full space-y-10">
        <div>
          <Heading fontSize={"3xl"} textAlign={"center"}>
            Ödeme Hareketlerim
          </Heading>
          <Text fontSize={"xl"} mt={3} color={"gray.500"}>
            Faturalarınızı ve ödemelerinizi görüntüleyin
          </Text>
        </div>
        <Box py={10} px={10} className="bg-gray-100 rounded-md shadow-2xl">
          <div className="flex items-center space-x-4">
            <Button
              rounded={"full"}
              onClick={() => setPayments("paid")}
              className={`${
                payments === "paid"
                  ? "bg-PinkButton-500 text-gray-50 shadow-lg shadow-PinkButton-500"
                  : "text-gray-800 bg-transparent"
              }  py-7`}
              leftIcon={<ArrowPathRoundedSquareIcon className="h-6 w-6" />}
            >
              GERÇEKLEŞEN ÖDEMELER
            </Button>
            <Button
              rounded={"full"}
              onClick={() => setPayments("future")}
              className={`${
                payments === "future"
                  ? "bg-PinkButton-500 text-gray-50 shadow-lg shadow-PinkButton-500"
                  : "text-gray-800 bg-transparent"
              }  py-7`}
              leftIcon={<CreditCardIcon className="h-8 w-8" />}
            >
              GELECEK ÖDEMELER
            </Button>
          </div>
          <div className="pt-10">
            <TableContainer>
              <Table variant="simple">
                <TableCaption>
                  <div className="flex items-center space-x-2">
                    <ExclamationCircleIcon className="h-6 w-6" />
                    <Text>
                      USD ödemeleri KDV hariç, TL ödemeleri KDV Dahil olarak
                      gösterilmektedir.
                    </Text>
                  </div>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Fatura No</Th>
                    <Th>Ödeme Tarihi</Th>
                    <Th>USD/TL</Th>
                    <Th>Ürünler</Th>
                    <Th>Fatura</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    {/* <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td> */}
                  </Tr>
                  <Tr>
                    {/* <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td> */}
                  </Tr>
                  <Tr>
                    {/* <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td> */}
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    {/* <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th> */}
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default Transictions;
