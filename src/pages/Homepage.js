import React, { useEffect } from "react";
import {
  Container,
  Box,
  Text,
  TabPanel,
  TabList,
  Tab,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Login from "../components/Authentication/Login";
import { createNavigate, useNavigate } from "react-router-dom";

import Signup from "../components/Authentication/Signup";
const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (!user) navigate("/chats");
  }, [navigate]);
  return (
    <Container maxWidth="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w={"100%"}
        m="40px 0 15px 0"
        borderRadius="10px"
        borderWidth="1px"
      >
        <Text
          fontSize="3xl"
          fontWeight="600"
          fontFamily="Work sans"
          color="black"
          align="center"
        >
          ZenithConvo
        </Text>
      </Box>
      <Box
        p={4}
        bg={"white"}
        w={"100%"}
        borderWidth="1px"
        borderRadius="10px"
        color="black"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em" backgroundColor="#EEF5FF" borderRadius="19px">
            <Tab width="50%">LogIn</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
