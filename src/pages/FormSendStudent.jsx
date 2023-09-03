import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Bred from "../components/Bred";
import { Controller, useForm } from "react-hook-form";

function Request() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitData = (data) => {
    console.log(data);
  };
  return (
    <Box minW={"100%"}>
      <Bred data={'กรอกฟอร์มข้อมูลหนังสือส่งตัวนักศึกษา'}/>
      <Divider my={2} />
      <Box my={4}>
        <Heading as={"h4"} size={"md"} textAlign={"center"}>
          กรอกฟอร์มข้อมูลหนังสือส่งตัวนักศึกษา
        </Heading>
      </Box>
      <Text color={"red"}>
        *ยังไม่มีใบตอบรับจากสถานประกอบการให้กรอกฟอร์มนี้*
      </Text>
      <Text>หลักสูตร : วิทยาศาสตร์ บัณฑิต</Text>
      <form onSubmit={handleSubmit(submitData)}>
        <Controller
          name="major"
          control={control}
          rules={{ required: true }}
          render={({ field: { name, onChange } }) => (
            <FormControl isInvalid={errors[name]} mt={4} w={"50%"}>
              <Flex alignItems={"center"}>
                <FormLabel>สาขาวิชา</FormLabel>
                <Select
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
            name="major"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, onChange } }) => (
              <FormControl isInvalid={errors[name]} mt={4}>
                <Flex>
                  <FormLabel>ประเภทปฏิบัติงาน</FormLabel>
                  <RadioGroup onChange={onChange}>
                    <Stack spacing={5} direction="column">
                      <Radio colorScheme="green" value="1">
                        ฝึกงาน
                      </Radio>
                      <Radio colorScheme="green" value="2">
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
            rules={{ required: true }}
            render={({ field: { name, value, onChange } }) => (
              <FormControl isInvalid={errors[name]} mt={4}>
                <Flex alignItems={"center"}>
                  <FormLabel minW={"90px"}>ปีการศึกษา</FormLabel>
                  <Input
                    value={value}
                    placeholder="ปีการศึกษา"
                    onChange={onChange}
                  />
                </Flex>
              </FormControl>
            )}
          />
          <Controller
            name="term"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, onChange } }) => (
              <FormControl ml={5} isInvalid={errors[name]} mt={4}>
                <Flex>
                  <Select onChange={onChange} placeholder="ภาคเรียนที่">
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Select>
                </Flex>
              </FormControl>
            )}
          />
        </Flex>
        <Flex>
          <Controller
            name="dateStart"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, value, onChange } }) => (
              <FormControl isInvalid={errors[name]} mt={4}>
                <Flex alignItems={"center"}>
                  <FormLabel minW={"90px"}>วันที่เริ่ม</FormLabel>
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                  />
                </Flex>
              </FormControl>
            )}
          />
          <Controller
            name="dataEnd"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, value, onChange } }) => (
              <FormControl isInvalid={errors[name]} ml={4} mt={4}>
                <Flex alignItems={"center"}>
                  <FormLabel minW={"90px"}>ถึงวันที่กลับ</FormLabel>
                  <Input
                    value={value}
                    onChange={onChange}
                    placeholder="Select Date and Time"
                    size="md"
                    type="date"
                  />
                </Flex>
              </FormControl>
            )}
          />
        </Flex>
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
                  <FormControl isInvalid={errors[name]} mt={4}>
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
                rules={{ required: true }}
                render={({ field: { name, value, onChange } }) => (
                  <FormControl isInvalid={errors[name]} mt={4}>
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
                  <FormControl isInvalid={errors[name]} mt={4}>
                    <Flex alignItems={"center"}>
                      <FormLabel minW={"90px"}>อีเมล</FormLabel>
                      <Input type="email" value={value} onChange={onChange} />
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
                <FormControl isInvalid={errors[name]} ml={4} mt={4}>
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
                  <FormControl isInvalid={errors[name]} mt={4}>
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
                rules={{ required: true }}
                render={({ field: { name, value, onChange } }) => (
                  <FormControl isInvalid={errors[name]} mt={4}>
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
                  <FormControl isInvalid={errors[name]} mt={4}>
                    <Flex alignItems={"center"}>
                      <FormLabel minW={"90px"}>อีเมล</FormLabel>
                      <Input type="email" value={value} onChange={onChange} />
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
                  <FormControl isInvalid={errors[name]} ml={4} mt={4}>
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
                  <FormControl isInvalid={errors[name]} ml={4} mt={4}>
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
              <Input w={"100px"} p={0} m={0} h={"fit-content"} type="file" />
              <Text>Resume/CV/Transcript</Text>
            </Flex>
          </Box>
        </Center>
        <Center my={3}>
          <Button type="submit" mx={4} colorScheme="green">
            บันทึก
          </Button>
          <Button type="reset" colorScheme="#fff" color={"#000"}>
            รีเซ็ต
          </Button>
        </Center>
      </form>
    </Box>
  );
}

export default Request;
