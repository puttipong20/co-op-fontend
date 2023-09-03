import {
  Box,
  Button,
  Center,
  Divider,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <Box border={"1px"} minH={"100vh"} minW={"100%"}>
      <Link to={"/"}>
        <Text p={2} bg={"gray.200"}>
          หน้าหลัก
        </Text>
      </Link>
      <Divider />
      <Link to={"/request"}>
        <Text p={2}>กรอกแบบฟอร์มขอความอนุเคราะห์</Text>
      </Link>
      <Divider />
      <Link to={"/sendStudent"}>
        <Text p={2}>กรอกแบบฟอร์มส่งตัวนักศึกษา</Text>
      </Link>
      <Divider />
      <Link to={"/listSendStudent"}>
        <Text p={2}>รายการส่งตัวนักศึกษา</Text>
      </Link>
      <Divider />
      <Link to={"/listStatus"}>
        <Text p={2}>ดูสถานะ</Text>
      </Link>
      <Divider />
      <Center mt={2}>
        <Button bg={"red.200"}>ออกจากระบบ</Button>
      </Center>
    </Box>
  );
}

export default SideBar;
