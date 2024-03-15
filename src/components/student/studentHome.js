import React, { useEffect, useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../ChatsComponents/SideDrawer";


const StudentHome = () => {
  const { user } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        vfsdvfddfgb
      </Box>
    </div>
  );
};

export default StudentHome;
