import mongoose from "mongoose";
const { model, Schema } = mongoose;

const messageSchema = new Schema(
  {
    messageText: {
      type: String
    },
    roomId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Room"
    },
    senderId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    recId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const Message = model("Message", messageSchema);
export default Message;
