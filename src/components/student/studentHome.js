import React, { useEffect, useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Box, Heading, Flex, Image, Text, Button } from "@chakra-ui/react";
import SideDrawer from "../ChatsComponents/SideDrawer";
import { useNavigate } from "react-router-dom";

const StudentHome = () => {
  const { user } = ChatState();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "/sign" route
    navigate("/chats");
  };
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="center" // Center content horizontally
        alignItems="center" // Center content vertically
        flexDirection="column" // Stack children vertically
        w="100%"
        h="91.5vh"
        p="10px"
        backgroundColor="#e8f4f9"
      >
        <Box maxW="800px">
          <Heading as="h1" size="xl" mb={4}>
            Welcome to Your Academic Hub
          </Heading>
          <Text fontSize="xl" mb={6}>
            Empowering students with seamless communication, immersive learning
            experiences, and collaborative tools.
          </Text>
          <Text fontSize="lg" mb={6}>
            Dive into a world of possibilities where you can connect with peers,
            engage in real-time discussions, attend virtual classes, and manage
            your assignments effortlessly.
          </Text>
          <Text fontSize="lg" mb={6}>
            Enhance your learning journey with integrated features including
            chat, video calls, and assignment tracking. Stay organized, stay
            connected, and stay ahead.
          </Text>
          <Button onClick={handleButtonClick} size="lg" colorScheme="green" mt="24px">
            Get Started
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default StudentHome;
