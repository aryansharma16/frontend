// to get the name  of the selected chat sender

export const getSender = (loggedUser, users) => {
  console.log("getsender", loggedUser, users);
  return users[0]?._id === loggedUser?._id ? users[1]?.name : users[0]?.name;
};

// to get the full detail of the selected chat sender
export const getSenderFull = (loggedUser, users) => {
  console.log("getsender full details", loggedUser, users);
  return users[0]?._id === loggedUser?._id ? users[1] : users[0];
};
