import {
  Box,
  Button,
  Container,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function Logs() {
  return (
    <Container maxW={"8xl"}>
      <Box className="w-full flex flex-col justify-center items-center space-y-16">
        <Heading fontSize={"2xl"} color={"gray.700"}>
          İşlem Günlüğü
        </Heading>
        <Box maxW={"6xl"} className="bg-gray-100 shadow-2xl w-full px-10 py-14">
          <TableContainer>
            <Table variant="simple" colorScheme="blackAlpha">
              <Thead>
                <Tr>
                  <Th>Log ID</Th>
                  <Th>İşlem Tarihi</Th>
                  <Th>İşlem Saati</Th>
                  <Th>Ip Adresi</Th>
                  <Th>Açıklama</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>5588</Td>
                  <Td>19 Ekim 2020</Td>
                  <Td>11:07:39</Td>
                  <Td>
                    <a
                      className="text-purple-700"
                      href="https://ipinfo.io/185.22.186.82"
                    >
                      185.22.186.82
                    </a>
                  </Td>
                  <Td>[Log.DomainServiceInformation.GetDomainNameServers]</Td>
                </Tr>
                <Tr>
                  <Td>5588</Td>
                  <Td>19 Ekim 2020</Td>
                  <Td>11:07:39</Td>
                  <Td>
                    <a
                      className="text-purple-700"
                      href="https://ipinfo.io/185.22.186.82"
                    >
                      185.22.186.82
                    </a>
                  </Td>
                  <Td>[Log.DomainServiceInformation.GetDomainNameServers]</Td>
                </Tr>
                <Tr>
                  <Td>5588</Td>
                  <Td>19 Ekim 2020</Td>
                  <Td>11:07:39</Td>
                  <Td>
                    <a
                      className="text-purple-700"
                      href="https://ipinfo.io/185.22.186.82"
                    >
                      185.22.186.82
                    </a>
                  </Td>
                  <Td>[Log.DomainServiceInformation.GetDomainNameServers]</Td>
                </Tr>
                <Tr>
                  <Td>5588</Td>
                  <Td>19 Ekim 2020</Td>
                  <Td>11:07:39</Td>
                  <Td>
                    <a
                      className="text-purple-700"
                      href="https://ipinfo.io/185.22.186.82"
                    >
                      185.22.186.82
                    </a>
                  </Td>
                  <Td>[Log.DomainServiceInformation.GetDomainNameServers]</Td>
                </Tr>
              </Tbody>
            </Table>
            <div className="flex items-center justify-end w-full mt-5 space-x-3">
              <Button rounded={"full"} className="bg-purple-700 text-gray-50">
                1
              </Button>
              <Button rounded={"full"}>2</Button>
            </div>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}

export default Logs;
