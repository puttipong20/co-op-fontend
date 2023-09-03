import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";
import FormSendStudent from "./pages/FormSendStudent";
import ListSendStudent from "./pages/ListSendStudent";
import ListStatus from "./pages/ListStatus";

function App() {
  return (
    <Container maxW={"container.lg"}>
      <Center>
        <Heading minW={'100%'} textAlign={'center'} bg={'green'} py={5} color={'#fff'}>ระบบสหกิจศึกษา</Heading>
      </Center>

      <Flex>
        <Box>
          <SideBar />
        </Box>
        <Box ml={4} w={'100%'} >
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/request" element={<Request />}/>
            <Route path="/sendStudent" element={<FormSendStudent />}/>
            <Route path="/listSendStudent" element={<ListSendStudent />}/>
            <Route path="/listStatus" element={<ListStatus />}/>
          </Routes>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
