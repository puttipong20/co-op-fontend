import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Flex,
  FormLabel,
  Select,
  Stack,
  RadioGroup,
  Radio,
  Input,
  Text,
  Box,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { db } from "../services/config-db";

function EditRequest({ data,setIsEdit}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setValue, control, handleSubmit } = useForm();

  const submitData = (datas) => {
    console.log(datas);
    updateDoc(doc(db, "Students", data.id), datas);
    onClose();
    setIsEdit(isOpen)
  };
  useEffect(() => {
    if (data) {
      setValue("major", data.major);
      setValue("type", data.type);
      setValue("coopYear", data.coopYear);
      setValue("address", data.address);
      setValue("company", data.company);
      setValue("dateEnd", data.dateEnd);
      setValue("dateStart", data.dateStart);
      setValue("email", data.email);
      setValue("emailStudent", data.emailStudent);
      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("phone", data.phone);
      setValue("phoneStudent", data.phoneStudent);
      setValue("studentId", data.studentId);
      setValue("term", data.term);

    }
  }, [data]);
  return (
    <>
      <Button onClick={onOpen}>แก้ไข</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(submitData)}>
              <Controller
                name="major"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <FormControl mt={4} w={"50%"}>
                    <Flex alignItems={"center"}>
                      <FormLabel>สาขาวิชา</FormLabel>
                      <Select
                        value={value}
                        w={"50%"}
                        onChange={onChange}
                        placeholder="--- เลือกสาขา ---"
                      >
                        <option value={"CS"}>CS</option>
                        <option value={"IT"}>IT</option>
                      </Select>
                    </Flex>
                  </FormControl>
                )}
              />
              <Flex>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <FormControl mt={4}>
                      <Flex>
                        <FormLabel>ประเภทปฏิบัติงาน</FormLabel>
                        <RadioGroup onChange={onChange} value={value}>
                          <Stack spacing={5} direction="column">
                            <Radio colorScheme="green" value="ฝึกงาน">
                              ฝึกงาน
                            </Radio>
                            <Radio colorScheme="green" value="ฝึกสหกิจ">
                              ฝึกสหกิจ
                            </Radio>
                          </Stack>
                        </RadioGroup>
                      </Flex>
                    </FormControl>
                  )}
                />
                <Controller
                  name="coopYear"
                  control={control}
                  defaultValue={""}
                  render={({ field: { value, onChange } }) => (
                    <FormControl mt={4}>
                      <FormLabel minW={"90px"}>ปีการศึกษา</FormLabel>
                      <Input
                        value={value}
                        placeholder="ปีการศึกษา"
                        onChange={onChange}
                      />
                    </FormControl>
                  )}
                />
                <Controller
                  name="term"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <FormControl mt={4}>
                      <Flex>
                        <Select
                          value={value}
                          onChange={onChange}
                          placeholder="ภาคเรียนที่"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </Select>
                      </Flex>
                    </FormControl>
                  )}
                />
              </Flex>
              <Controller
                name="dateStart"
                control={control}
                rules={{ required: true }}
                render={({ field: { name, value, onChange } }) => (
                  <FormControl mt={4}>
                    <Flex alignItems={"center"}>
                      <FormLabel minW={"90px"}>วันที่เริ่ม</FormLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        placeholder="Select Date"
                        size="md"
                        type="date"
                      />
                    </Flex>
                  </FormControl>
                )}
              />
              <Controller
                name="dateEnd"
                control={control}
                rules={{ required: true }}
                render={({ field: { name, value, onChange } }) => (
                  <FormControl ml={4} mt={4}>
                    <Flex alignItems={"center"}>
                      <FormLabel minW={"90px"}>ถึงวันที่กลับ</FormLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        placeholder="Select Date"
                        size="md"
                        type="date"
                      />
                    </Flex>
                  </FormControl>
                )}
              />
              <Text fontWeight={"bold"}>ข้อมูลสถานประกอบการ*</Text>
              <Flex>
                <Box>
                  <Box>
                    <Controller
                      name="company"
                      control={control}
                      rules={{ required: true }}
                      defaultValue={""}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>ชื่อบริษัท</FormLabel>
                            <Input value={value} onChange={onChange} />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="phone"
                      control={control}
                      defaultValue={""}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>เบอร์โทร</FormLabel>
                            <Input value={value} onChange={onChange} />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="email"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>อีเมล</FormLabel>
                            <Input
                              type="email"
                              value={value}
                              onChange={onChange}
                            />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                </Box>
                <Box>
                  <Controller
                    name="address"
                    control={control}
                    defaultValue={""}
                    rules={{ required: true }}
                    render={({ field: { name, value, onChange } }) => (
                      <FormControl ml={4} mt={4}>
                        <Flex>
                          <FormLabel minW={"90px"}>ที่อยู่บริษัท</FormLabel>
                          <Textarea value={value} onChange={onChange} />
                        </Flex>
                      </FormControl>
                    )}
                  />
                </Box>
              </Flex>
              <Text fontWeight={"bold"}>ข้อมูลนักศึกษา 1.*</Text>
              <Flex>
                <Box>
                  <Box>
                    <Controller
                      name="firstName"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>ชื่อ</FormLabel>
                            <Input value={value} onChange={onChange} />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="studentId"
                      control={control}
                      defaultValue={""}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>รหัสนักศึกษา</FormLabel>
                            <Input value={value} onChange={onChange} />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="emailStudent"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>อีเมล</FormLabel>
                            <Input
                              type="email"
                              value={value}
                              onChange={onChange}
                            />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <Controller
                      name="lastName"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl ml={4} mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>นามสกุล</FormLabel>
                            <Input value={value} onChange={onChange} />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                  <Box>
                    <Controller
                      name="phoneStudent"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl ml={4} mt={4}>
                          <Flex alignItems={"center"}>
                            <FormLabel minW={"90px"}>เบอร์โทร</FormLabel>
                            <Input value={value} onChange={onChange} />
                          </Flex>
                        </FormControl>
                      )}
                    />
                  </Box>
                </Box>
              </Flex>
              <Center mt={5}>
                <Box>
                  <Flex>
                    <Text>ประวัติส่วนตัว / ไฟล์ DPF*</Text>
                    {/* <Controller
                      name="file"
                      control={control}
                      defaultValue={""}
                      rules={{ required: true }}
                      render={({ field: { name, value, onChange } }) => (
                        <FormControl ml={4} mt={4}>
                        </FormControl>
                      )}
                    /> */}
                      <Input
                        w={"100px"}
                        p={0}
                        m={0}
                        h={"fit-content"}
                        type="file"
                      />
                    <Text>Resume/CV/Transcript</Text>
                  </Flex>
                </Box>
              </Center>
              <Center my={3}>
                <Button
                  //   isLoading={isLoading}
                  type="submit"
                  mx={4}
                  colorScheme="green"
                >
                  บันทึก
                </Button>
                <Button type="reset" colorScheme="#fff" color={"#000"}>
                  รีเซ็ต
                </Button>
              </Center>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditRequest;
