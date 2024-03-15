import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Toast,
  Tooltip,
  useColorMode,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  BellIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModal from "../PopUps/ProfileModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "../Loaders/ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";
import ToggleSwitch from "../Theme/ToggleSwitch";
import { getSender } from "../../config/ChatLogic";
import { environment } from "../../enviroment";

const SideDrawer = () => {
  const {
    user,
    setSelectedChat,
    selectedChat,
    chats,
    setChats,
    notification,
    setNotification,
  } = ChatState();
  const navigate = useNavigate();
  const toast = useToast();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  //  logout User
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  // Hnadle Search uSer
  const handleSearch = async () => {
    console.log("In Handle Search");
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`${environment.baseURL}/api/user?search=${search}`, config);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      console.log(error);
      toast({
        title: "Failed to Load The Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bootom-left",
      });
      return;
    }
  };

  // Access or create the chat if already not started with user yet
  const accessChat = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",

          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`${environment.baseURL}/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setLoadingChat(false);
      setSelectedChat(data);
      onClose();
    } catch (error) {
      console.log(error);

      toast({
        title: "Failed to fetch the chat",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bootom-right",
      });
      return;
    }
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="3px"
      >
        <Tooltip label="Search Users To Chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
          ZenithConvo
        </Text>
        <div>
          <Menu>

            <MenuButton p={1}>
            {/* <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              /> */}
              <BellIcon fontSize="2xl" m={1} />
              <span className="NotificationBadge">{notification.length}</span>
            </MenuButton>
            <MenuList pl={2}>
              {!notification.length && "No new Meesagesa"}
              {notification.map((notif) => (
                <MenuItem
                  key={notif._id}
                  onClick={() => {
                    setSelectedChat(notif.chat);
                    setNotification(notification.filter((n) => n !== notif));
                  }}
                >
                  {notif.chat.isGroupChat
                    ? `New Message in ${notif.chat.chatName}`
                    : `New Message From ${getSender(user, notif.chat.users)}`}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                // bg='red.500'
                // src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user} handleLogout={logoutHandler}>
                <MenuItem>My ProFile</MenuItem>
              </ProfileModal>

              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search User</DrawerHeader>
          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((item) => (
                <UserListItem
                  key={item._id}
                  user={item}
                  handleFunction={() => accessChat(item?._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
