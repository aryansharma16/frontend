import React from "react";
import { Box, Flex, Spacer, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = ({handleButtonClick}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="fixed" zIndex='1' width='100%' bg="white" borderBottom="1px solid #cbc7c7" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)" marginBottom='120px'>
      <Flex alignItems="center" px={8} py={4}>
        <Box>
        <Button
      colorScheme="blue"
      variant="link"
      style={{
        fontSize: "20px", // Adjust font size
        fontWeight: "bold", // Make text bold
        textTransform: "uppercase", // Convert text to uppercase
        textDecoration: "none", // Remove underline
        border: "none", // Remove border
        padding: "5px 10px", // Adjust padding
        borderRadius: "10px", // Add border radius
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)", // Add box shadow
        cursor: "pointer", // Change cursor on hover
      }}
    >
      LearnBridge
    </Button>
        </Box>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          {/* Display buttons in non-mobile view */}
          <Button colorScheme="blue" variant="link" mx={4}>
            Home
          </Button>
          <Button colorScheme="blue" variant="link" mx={4}>
            About
          </Button>
          <Button colorScheme="blue" variant="link" mx={4}>
            Contact Us
          </Button>
          <Button colorScheme="blue" variant="link" mx={4} onClick={handleButtonClick}>
            Join Now
          </Button>
        </Box>
        {/* Hamburger menu for mobile view */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Menu"
          variant="ghost"
          display={{ base: "block", md: "none" }} // Display only in mobile view
          onClick={onToggle}
        />
      </Flex>
      {/* Mobile menu */}
      {isOpen && (
        <Box bg="white" py={4} px={8}>
          <Button colorScheme="blue" variant="link" display="block" my={2}>
            Home
          </Button>
          <Button colorScheme="blue" variant="link" display="block" my={2}>
            About
          </Button>
          <Button colorScheme="blue" variant="link" display="block" my={2}>
            Contact Us
          </Button>
          <Button colorScheme="blue" variant="link" display="block" my={2}>
            Join Now
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
