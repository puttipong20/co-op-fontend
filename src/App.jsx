import { Box, Center, Container, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";
import FormSendStudent from "./pages/FormSendStudent";
import ListSendStudent from "./pages/ListSendStudent";
import ListStatus from "./pages/ListStatus";
import Login from "./pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user,setUser] = useState("user@gmail.com")
  const navigate = useNavigate()
  //useEffect
  useEffect(() => {
    if(!isLogin){
      navigate('/login')
    }
  },[])
  return (
    <Container maxW={"container.lg"}>
      <Center>
        <Heading
          minW={"100%"}
          textAlign={"center"}
          bg={"green"}
          py={5}
          color={"#fff"}
        >
          ระบบสหกิจศึกษา
        </Heading>
      </Center>

      <Flex>
        {isLogin && (
          <Box>
            <SideBar setIsLogin={setIsLogin} />
          </Box>
        )}
        <Box ml={4} w={"100%"}>
          <Routes>
            {isLogin ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/request" element={<Request />} />
                <Route path="/sendStudent" element={<FormSendStudent />} />
                <Route path="/listSendStudent" element={<ListSendStudent />} />
                <Route path="/listStatus" element={<ListStatus />} />
              </>
            ) : (
              <Route path="/login" element={<Login isLogin={isLogin} setUser={setUser} setIsLogin={setIsLogin} />} />
            )}
          </Routes>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
