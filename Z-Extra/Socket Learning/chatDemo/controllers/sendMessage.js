import responseHandler from "../middleware/responseHandler.js";
import verifyToken from "../middleware/token.js";
import Message from "../models/message.js";
import { getSockets } from "../utils/socketStore.js";
import mongoose from "mongoose";
import Room from "../models/room.js";

const sendMessage = async (data, token, socket) => {
  try {
    const { error, user } = verifyToken(token);
    if (error) return responseHandler(socket, "error", { message: error, success: false });
    const { _id } = user;
    const { recId, messageText } = data;

    if (!messageText.trim()) return responseHandler(socket, "error", { message: "Please add a message to send", success: false });
    if (!mongoose.isValidObjectId(recId)) return responseHandler(socket, "error", { message: "Please provide valid receiver", success: false });
    const room = await Room.findOne({ userIds: { $all: [mongoose.Types.ObjectId(_id), mongoose.Types.ObjectId(recId)] } });
    if (!room) return responseHandler(socket, "error", { message: "Can not find a room for the given users", success: false });
    const message = new Message({ messageText, recId, senderId: _id, roomId: room._id });
    await message.save();
    responseHandler(socket, "sendMessage", { data: message, success: true });

    getSockets(_id).forEach(_ => {
      if (socket.id !== _.id) responseHandler(_, "sendMessage", { data: message, success: true });
    });
    getSockets(recId).forEach(_ => responseHandler(_, "sendMessage", { data: message, success: true }));
  } catch (error) {
    responseHandler(socket, "error", { message: error.message, success: false });
  }
};

export default sendMessage;
