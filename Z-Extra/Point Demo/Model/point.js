const mongoose = require("mongoose")

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    leval: {
        type: Number,
        required: true
    },
    point: {
        type: String,
        default: 0
    }
},
    { versionKey: false, timestamps: true }
)

exports.User = mongoose.model("point", User)