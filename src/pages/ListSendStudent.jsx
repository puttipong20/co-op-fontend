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
  
  function ListSendStudent() {
    const { control } = useForm();
  
    return (
      <Box minW={"100%"}>
        <Bred data={'รายการข้อมูลหนังสือส่งตัวนักศึกษา'}/>
        <Divider my={2} />
        <Box my={4}>
          <Center>
            <Heading as={"h4"} size={"md"}>
            รายการข้อมูลหนังสือส่งตัวนักศึกษา
            </Heading>
          </Center>
          <Text>ชื่อผู้ใช้งาน: ผศ.ดร.สายัณห์ อุ่นนันกาศ </Text>
          <Box mt={4}>
            <form>
              <Controller
                name="search"
                defaultValue={""}
                control={control}
                render={({ field: { value, onChange } }) => (
                  <FormControl>
                    <Flex alignItems={"center"}>
                      <Box maxH={"fit-content"} borderRadius={"16px"}>
                      <InputGroup>
                        <InputLeftElement>
                          <AiOutlineSearch />
                        </InputLeftElement>
                        <Input
                          value={value}
                          onChange={onChange}
                          placeholder="ค้นหา"
                          borderRadius={"16px"}
                        />
                      </InputGroup>
                      </Box>
                    </Flex>
                  </FormControl>
                )}
              />
            </form>
  
            <Box mt={5}>
              <Table>
                <Thead bg={"green"}>
                  <Tr>
                    <Th color={"#fff"} textAlign={"center"}>
                      ประเภทปฏิบัติงาน
                    </Th>
                    <Th color={"#fff"} textAlign={"center"}>
                      ชื่อสถานประกอบการ
                    </Th>
                    <Th color={"#fff"} textAlign={"center"}>
                      รายชื่อนักศึกษา
                    </Th>
                    <Th color={"#fff"} textAlign={"center"}>
                      จักการ
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td textAlign={"center"}>ผึกงาน</Td>
                    <Td textAlign={"center"}>xxxxx</Td>
                    <Td textAlign={"center"}>xxxxx</Td>
                    <Td textAlign={"center"}>
                      <Button mx={2} colorScheme="yellow">
                        แก้ไข
                      </Button>
                      <Button colorScheme="red">ลบ</Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default ListSendStudent;
  