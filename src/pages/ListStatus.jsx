import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import Bred from "../components/Bred";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";

function ListStatus() {
  const { control } = useForm();
  return (
    <Box>
      <Bred data={'ข้อมูลขอฝึกงานและขอปฏิบัติสหกิจศึกษา'}/>
      <Divider my={2} />
      <Box>
        <Center>
          <Heading as={"h4"} size={"md"}>
            ข้อมูลขอฝึกงานและขอปฏิบัติสหกิจศึกษา
          </Heading>
        </Center>
        <Text>ชื่อผู้ใช้งาน: ผศ.ดร.สายัณห์ อุ่นนันกาศ</Text>
        <form>
          <Controller
            name="search"
            control={control}
            defaultValue={""}
            render={({ field: { value, onChange } }) => (
              <FormControl mt={5}>
                <Flex alignItems={"center"}>
                  <Box maxH={"fit-content"} borderRadius={"16px"}>
                    <InputGroup>
                      <InputLeftElement>
                        <AiOutlineSearch />
                      </InputLeftElement>
                      <Input
                        value={value}
                        onChange={onChange}
                        placeholder="ค้นหาชื่อ"
                        borderRadius={"16px"}
                      />
                    </InputGroup>
                  </Box>
                </Flex>
              </FormControl>
            )}
          />
        </form>
        <Box overflowX={"scroll"} mt={5} borderTopRadius={"20px"}>
          <Table>
            <Thead bg={"green"}>
              <Tr>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  ลำดับ
                </Th>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  ประเภทการปฏิบัติงาน
                </Th>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  ประเภทหนังสือ
                </Th>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  ชื่อสถานประกอบการ
                </Th>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  รายชื่อนักศึกษา
                </Th>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  สถานะ
                </Th>
                <Th textAlign={"center"} color={"#fff"} border={'1px'}>
                  ดูข้อมูล
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td textAlign={"center"}>1</Td>
                <Td textAlign={"center"}>ฝึกงาน</Td>
                <Td textAlign={"center"}>หนังสือขอคงวามอนุเคราะห์</Td>
                <Td textAlign={"center"}>xxxxxxxxx</Td>
                <Td textAlign={"center"}>xxxxxxxxx</Td>
                <Td textAlign={"center"}>กำลังจัดส่ง</Td>
                <Td textAlign={"center"}>
                  <Button colorScheme="yellow">ดูข้อมูล</Button>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign={"center"}>1</Td>
                <Td textAlign={"center"}>ฝึกงาน</Td>
                <Td textAlign={"center"}>หนังสือขอคงวามอนุเคราะห์</Td>
                <Td textAlign={"center"}>xxxxxxxxx</Td>
                <Td textAlign={"center"}>xxxxxxxxx</Td>
                <Td textAlign={"center"}>กำลังจัดส่ง</Td>
                <Td textAlign={"center"}>
                  <Button colorScheme="yellow">ดูข้อมูล</Button>
                </Td>
              </Tr>
              <Tr>
                <Td textAlign={"center"}>1</Td>
                <Td textAlign={"center"}>ฝึกงาน</Td>
                <Td textAlign={"center"}>หนังสือขอคงวามอนุเคราะห์</Td>
                <Td textAlign={"center"}>xxxxxxxxx</Td>
                <Td textAlign={"center"}>xxxxxxxxx</Td>
                <Td textAlign={"center"}>กำลังจัดส่ง</Td>
                <Td textAlign={"center"}>
                  <Button colorScheme="yellow">ดูข้อมูล</Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Box>
    </Box>
  );
}

export default ListStatus;
