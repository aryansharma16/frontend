import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Heading, Flex, Image, Text, Button } from "@chakra-ui/react";
import WelComeNavbar from "../components/Navbars/WelcomeNavBar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../components/ComponentsStore/ImageSlider";
import ladngGif from "../animations/ladingpage2.gif";
const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the "/sign" route
    navigate("/sign");
  };

  return (
    <div className="Home" style={{ width: "100%" }}>
      <WelComeNavbar handleButtonClick={handleButtonClick} />
      <section className="homePageSection2">
        <div className="homeHerosectionWrapper">
          <div className="textWrapper">
            <h2 className="mainheading1">Welcome to</h2>
            <h3 className="mainheading2">Our Learning Hub</h3>
            <div className="headlineRunning">
              <marquee behavior="scroll" direction="left">
                We provide you the best of all worlds. You can interact, learn,
                and compete here through real-time chats, video calls, and
                assignments.
              </marquee>
            </div>
            <p className="description">
              Join our platform to experience a seamless integration of learning
              and collaboration tools. Whether you're a student looking to
              enhance your skills or a professional seeking continuous learning,
              our hub has everything you need.
            </p>
            <div className="button_groupMain">
            <button className="button-64" role="button">
                <span className="text">Start Your Journey Now</span>
              </button>
              <button className="button-616" onClick={handleButtonClick}>
                <span className="text">Sign Up Now</span>
              </button>
            
            </div>
          </div>
          <div className="gifWrapper">
            <img
              className="landingPageGif"
              src={ladngGif}
              alt="Not Loading Gif"
            />
          </div>
        </div>
      </section>

      <Box
        display="flex"
        justifyContent="center" // Center content horizontally
        alignItems="center" // Center content vertically
        flexDirection="column" // Stack children vertically
        w="100%"
        p="10px"
        backgroundColor="#f4fdff"
        paddingBottom="100px"
      >
        <Box maxW="900px">
          <Box className="ImageSliderWelcome">
            <ImageSlider />
          </Box>

          <Heading className="headingHome2">
            Welcome to Your Academic Hub
          </Heading>
          <Text className="text2" fontSize="17px" mb={4}>
            Empowering students with seamless communication, immersive learning
            experiences, and collaborative tools.
          </Text>
          <Text className="text2" fontSize="17px" mb={4}>
            Dive into a world of possibilities where you can connect with peers,
            engage in real-time discussions, attend virtual classes, and manage
            your assignments effortlessly.
          </Text>
          <Text className="text2" fontSize="17px" mb={4}>
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
