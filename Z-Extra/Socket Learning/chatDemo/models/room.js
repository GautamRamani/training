import mongoose from "mongoose";

const { model, Schema } = mongoose;

const roomSchema = new Schema(
  {
    userIds: [{ type: Schema.Types.ObjectId, ref: "user", required: true }]
  },
  {
    timestamps: true
  }
);

const Room = model("Room", roomSchema);
export default Room;
