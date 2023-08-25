import responseHandler from "../middleware/responseHandler.js";
import { User, validateUser } from "../models/user.js";
import Jwt from "jsonwebtoken";

const signup = async (data, socket) => {
  try {
    console.log("====data=========", data)
    const { error } = validateUser(data);
    //invalid data error
    if (error) return responseHandler(socket, "error", { message: error, success: false });
    const already = await User.findOne({ email: data.email.trim().toLowerCase() })
    if (already) return responseHandler(socket, "error", { message: "You are registered user. Please login in", success: false });
    data.email = data.email.trim().toLowerCase();
    //new user creat
    const user = await new User(data).save();
    const token = Jwt.sign({ _id: user._id }, process.env.TOKEN_KEY);

    responseHandler(socket, "signup", { success: true, data: { user, token } });
  } catch (error) {
    console.log(error);
  }
};

export default signup;
