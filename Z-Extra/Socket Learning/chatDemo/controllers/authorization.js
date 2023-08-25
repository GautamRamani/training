import responseHandler from "../middleware/responseHandler.js";
import verifyToken from "../middleware/token.js";
import { User } from "../models/user.js";
import { addSocket } from "../utils/socketStore.js";

const authorization = async (data, token, socket) => {
  try {
    const {
      error,
      user: { _id }
    } = verifyToken(token);
    if (error) return responseHandler(socket, "error", { message: error, success: false });
    addSocket(_id, socket);
    const user = await User.findById(_id).select('-password');
    responseHandler(socket, "auth", { data: user, message: "Authorization Success", success: true });
  } catch (error) {
    responseHandler(socket, "error", { message: error.message, success: false });
  }
};

export default authorization;
