import verifyToken from "../middleware/token.js";
import mongoose from "mongoose";
import Room from "../models/room.js";
import Message from "../models/message.js";
import responseHandler from "../middleware/responseHandler.js";

const chatHistory = async (data, token, socket) => {
  try {
    const { error, user } = verifyToken(token);
    if (error) return responseHandler(socket, "error", { message: error, success: false });
    const { _id } = user;
    const { recId, skip, limit } = data;
    if (!mongoose.isValidObjectId(recId)) return responseHandler(socket, "error", { message: "Please provide valid receiver", success: false });
    let room = await Room.findOne({ $and: [{ userIds: { $in: [mongoose.Types.ObjectId(_id)] } }, { userIds: { $in: [mongoose.Types.ObjectId(recId)] } }] });
    if (!room) {
      room = new Room({ userIds: [_id, recId] });
      await room.save();
    }
    console.log("=======room", room)

    const messages = await Message.find({ roomId: mongoose.Types.ObjectId(room._id) }).skip(parseInt(skip) || 0).limit(parseInt(limit) || 20);

    console.log("===========messages", messages)
    responseHandler(socket, "chatHistory", { data: messages, success: true });
  } catch (error) {
    console.log(error);
    responseHandler(socket, "error", { message: error.message, success: false });
  }
};

export default chatHistory;
