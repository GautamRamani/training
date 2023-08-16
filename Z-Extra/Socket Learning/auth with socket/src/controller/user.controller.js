const UserModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { responseHandlers } = require('../middlewares/responseHandlers.js')
const { userRegisterValiadtion, userLoginValiadtion } = require("../validation/user.validation")

async function register(socket, data) {
    try {
        const payload = data;

        const { valid, error } = await userRegisterValiadtion(payload)

        if (!valid) return responseHandlers(socket, "Register", { data: error.details[0].message, success: false })

        const user = await UserModel.findOne({
            email: payload.email
        })

        if (!user) {

            const password = await bcrypt.hash(payload.password, 12)
            const register = await UserModel.create({
                username: payload.username,
                email: payload.email,
                password: password
            })

            //join the user to the room1
            await socket.join('room1')

            //emit a notification to all users in 'room1' execpt the newly register user
            await io.to('room1').emit('userJoined', payload.username)

            //Emit response to the newly Register user
            await responseHandlers(socket, "Register", { data: register, success: true })

        } else {
            return responseHandlers(socket, "Register", { data: 'This email already exist', success: false })
        }

    } catch (error) {
        console.log(error);
        return responseHandlers(socket, "Register", { message: error.message, success: false })
    }

}

async function login(socket, data) {

    try {
        const payload = data;

        const { valid, error } = await userLoginValiadtion(payload)

        if (!valid) return responseHandlers(socket, "Login", { data: error.details[0].message, success: false })

        const user = await UserModel.findOne({
            email: payload.email
        })

        if (!user) return responseHandlers(socket, "Login", { message: 'User not found', success: false });

        const isPasswordMatching = await bcrypt.compare(payload.password, user.password)

        if (isPasswordMatching) {

            const expiresIn = 24 * 24 * 60;
            const secret = process.env.JWT_SECRET
            const token = jwt.sign({ _id: user._id }, secret, {
                expiresIn: expiresIn
            })

            let tokenData = {}
            tokenData.token = token;
            tokenData.expiresIn = expiresIn;

            const updateUser = await UserModel.findByIdAndUpdate(
                { _id: user._id },
                {
                    $set: {
                        token: token
                    }
                },
                { new: true, upsert: true }
            )

            return responseHandlers(socket, "Login", { message: 'Login Successfully', userData: user, tokenData: tokenData, success: true });
        } else {
            return responseHandlers(socket, "Login", { message: 'Password does not match', success: false });
        }


    } catch (error) {
        console.log(error);
        return responseHandlers(socket, "Login", { message: error.message, success: false })
    }
}

module.exports = { register, login }