const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    }
});

const UserModel = new mongoose.model("User", registerSchema)

module.exports = UserModel;