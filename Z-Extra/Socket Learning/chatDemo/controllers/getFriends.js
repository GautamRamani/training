import responseHandler from "../middleware/responseHandler.js";
import verifyToken from "../middleware/token.js";
import { User } from "../models/user.js";

const getFriends = async (data, token, socket) => {
  try {
    const { error, user } = verifyToken(token);
    if (error) return responseHandler(socket, "error", { message: error, success: false });
    const { _id } = user;
    const users = await User.find({ _id: { $nin: [_id] } }).select("-password");
    responseHandler(socket, "getFriends", { data: users, message: "Authorization Success", success: true });
  } catch (error) {
    console.log(error);
    responseHandler(socket, "error", { message: error.message, success: false });
  }
};

export default getFriends;
