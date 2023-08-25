import encryptData from "../utils/encryption.js";

const responseHandler = (socket, en, data) => {
  const response = { en, ...data }
  console.log("===========response===========", response)
  socket.emit("res", encryptData(response));
  socket.emit("resJSON", response);
};
export default responseHandler;
