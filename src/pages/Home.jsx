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
import React, { useEffect, useState } from "react";
import Bred from "../components/Bred";
import { Controller, useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../services/config-db";
import EditRequest from "../components/editRequest";

function Home() {
  const { control } = useForm();
  const [isEdit,setIsEdit] = useState(false)
  // const [allData1,setAllData1] = useState()
  // const [data1, setData1] = useState();
  // const [data2, setData2] = useState();
  // const [data3, setData3] = useState();
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    getDate();
  }, []);
  useEffect(() => {
    getDate()
  },[isEdit])
  // useEffect(() => {
  //   combind();
  // }, [data3]);
  const getDate = async () => {
    getDocs(collection(db,"Students")).then((docs) => {
      const data = []
      docs.forEach((item) => {
        data.push({...item.data(),id: item.id})
      })
      setAllData(data)
    })
  };
  const onDelete = (id) => {
    console.log(id)
    deleteDoc(doc(db, "Students", id));
    getDate()
  }
  // const combind = () => {
  //   if (data1 && data2 && data3) {
  //     console.log("combind");
  //     let allList = [];
  //     let list = {};
  //     data1.forEach((item, index) => {
  //       list = {
  //         s_firstName: data1[index].firstName,
  //         s_lastName: data1[index].lastName,
  //         c_name: data2[index].c_name,
  //         d_type: data3[index].d_type,
  //       };
  //       allList.push(list);
  //     });
  //     setAllData(allList);
  //   }
  // };
  return (
    <Box minW={"100%"}>
      <Bred />
      <Divider my={2} />
      <Box my={4}>
        <Center>
          <Heading as={"h4"} size={"md"}>
            รายการข้อมูลขอความอนุเคราะห์ผึกงานและสหกิจ
          </Heading>
        </Center>
        <Text>ชื่อผู้ใช้งาน : ผศ.ดร.สายัณห์ อุ่นนันกาศ</Text>
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
                          placeholder="ค้นหาชื่อ นศ."
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
                {allData &&
                  allData.map((item, index) => (
                    <Tr key={index}>
                      <Td textAlign={"center"}>{item.type}</Td>
                      <Td textAlign={"center"}>{item.company}</Td>
                      <Td textAlign={"center"}>
                        {item.firstName} {item.lastName}
                      </Td>
                      <Td textAlign={"center"}>
                        <Flex>
                          <EditRequest data={item} setIsEdit={setIsEdit}/>
                          <Button onClick={() => onDelete(item.id)} colorScheme="red">ลบ</Button>
                        </Flex>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
