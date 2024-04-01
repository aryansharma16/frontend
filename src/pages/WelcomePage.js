import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Heading, Flex, Image, Text, Button } from "@chakra-ui/react";
import WelComeNavbar from "../components/Navbars/WelcomeNavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ComponentsStore/ImageSlider";
const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "/sign" route
    navigate("/sign");
  };

  return (
    <div style={{ width: "100%" }}>
      <WelComeNavbar handleButtonClick={handleButtonClick} />
      <Box
        display="flex"
        justifyContent="center" // Center content horizontally
        alignItems="center" // Center content vertically
        flexDirection="column" // Stack children vertically
        w="100%"
        p="10px"
        backgroundColor="#e8f4f9"
        paddingBottom="100px"
      >
        <Box maxW="800px">
          <Box className="ImageSliderWelcome">
            <ImageSlider />
          </Box>

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
          <Button
            size="lg"
            colorScheme="green"
            mt="24px"
            onClick={handleButtonClick}
          >
            Get Started
          </Button>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default WelcomePage;
