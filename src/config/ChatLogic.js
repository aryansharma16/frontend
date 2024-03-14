
export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if ( // if the same sender 
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId    
  )
    return 33;
  else if (   
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};
// to get the name  of the selected chat sender

export const getSender = (loggedUser, users) => {
  // console.log("getsender", loggedUser, users);
  return users[0]?._id === loggedUser?._id ? users[1]?.name : users[0]?.name;
};

// to get the full detail of the selected chat sender
export const getSenderFull = (loggedUser, users) => {
  // console.log("getsender full details", loggedUser, users);
  return users[0]?._id === loggedUser?._id ? users[1] : users[0];
};

// is same sender logic

export const isSameSender = (messages, m, i, userId) => {
  return (
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||  // preveous and next next messages are from same user or not
      messages[i + 1].sender._id === undefined) &&   // or there is no next 
    messages[i].sender._id !== userId   // message is not from loggedin user 
  );
};

// last message logic
export const isLastMessage = (messages, i, userId) => {
  return (
    i === messages.length - 1 &&   // messages lenght check 
    messages[messages.length - 1].sender._id !== userId && // it should not the loggedin user 
    messages[messages.length - 1].sender._id    // there should some id 
  );
};



export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};