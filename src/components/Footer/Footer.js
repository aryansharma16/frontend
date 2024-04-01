import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box position="sticky" bg="white" borderTop="1px solid #cbc7c7" boxShadow="0px -4px 4px rgba(0, 0, 0, 0.1)">
      <Flex alignItems="center" justifyContent="center" px={8} py={4}>
        <Box>
          {/* Add footer content here */}
          <Button colorScheme="blue" variant="link" mr={4}>
            Privacy Policy
          </Button>
          <Button colorScheme="blue" variant="link" mr={4}>
            Terms of Service
          </Button>
          <Button colorScheme="blue" variant="link">
            Contact Us
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
