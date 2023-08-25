import { User } from "../models/user.js";
import Jwt from "jsonwebtoken";
import responseHandler from "../middleware/responseHandler.js";

const login = async (data, socket) => {
  try {

    const { email, password } = data;

    //invalid data error
    
    if (!email.trim() || !password) return responseHandler(socket, "error", { message: "Please provide all the details", success: false });

    //find user
    const user = await User.findOne({ email: email.trim().toLowerCase() , password : password}).select("-password");
    if (!user) return responseHandler(socket, "error", { message: "invalid credential", success: false });
    const token = Jwt.sign({ _id: user._id }, process.env.TOKEN_KEY);
    // data: { token: token, user data: user } };
    return responseHandler(socket, "login", { success: true, data: { user, token } });
  } catch (error) {
    console.log("====login error====", error)
  }
};

export default login;
