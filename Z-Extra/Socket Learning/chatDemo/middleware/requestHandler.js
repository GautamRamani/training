import authorization from "../controllers/authorization.js";
import chatHistory from "../controllers/chatHistory.js";
import getFriends from "../controllers/getFriends.js";
import login from "../controllers/login.js";
import sendMessage from "../controllers/sendMessage.js";
import signup from "../controllers/signup.js";
import decryptData from "../utils/decryption.js";
import encryptData from "../utils/encryption.js";
import responseHandler from "./responseHandler.js";

const requestHandler = (body, socket, io) => {
  try {

    body = typeof body === "string" ? decryptData(body) : body;
    console.log("==========data==========", body);
    if (body.req) {

      console.log(typeof body.req, JSON.parse(body.req))
      if (typeof body.req === "string") body = JSON.parse(body.req)
      else body = body.req
    }
    console.log("==========data==========final===========", body);
    const { en, data, token } = body;
    switch (en) {
      case "login":
        login(data, socket);
        break;
      case "signup":
        signup(data, socket);
        break;
      case "auth":
        authorization(data, token, socket);
        break;
      case "getFriends":
        getFriends(data, token, socket);
        break;
      case "chatHistory":
        chatHistory(data, token, socket);
        break;
      case "sendMessage":
        sendMessage(data, token, socket);
        break;
      case "encrypt":
        socket.emit("res", encryptData(data));
        break;
      case "decrypt":
        socket.emit("res", decryptData(data));
        break;
      case "test":
        responseHandler(socket, 'test', { message: "Test successful" })
        break;
      default:
        responseHandler(socket, "unrecognized", {})
        break;
    }
  } catch (error) {
    responseHandler(socket, "unrecognized", { en: "serverError" })
  }
};

export default requestHandler;
