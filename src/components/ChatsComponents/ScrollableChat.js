import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../../config/ChatLogic";
import { ChatState } from "../../Context/ChatProvider";
import { Tooltip, Avatar } from "@chakra-ui/react";
// import { Avatar } from "@chakra-ui/avatar";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {console.log("MMMM,", m, "III", i)}
            {(isSameSender(messages, m, i, user._id) ||
              isLastMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {console.log(m, " mmmmmm")}
                  <Avatar
                    mt="7px"
                    mr={1}
                    size="sm"
                    cursor="pointer"
                    name={m.sender.name}
                    src={m.sender.pic}
                  />
                </div>
              </Tooltip>
            )}
            <span
              className={m.sender._id === user._id ? "recieveChat" : "senderChat"}
              style={{
                backgroundColor: `${
                  m.sender._id === user._id ? "#B9F5D0" : "#BEE3F8"
                }`,
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                borderRadius: "20px",
                padding: "5px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
