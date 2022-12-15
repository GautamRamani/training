const mongoose = require("mongoose")

const levalSchema = new mongoose.Schema({
    lvl: {
        type: Number,
        required: true
    },
    point: {
        type: Number,
        required: true
    }
})

const levals = new mongoose.Schema({
    leval: {
        type: [levalSchema]
    }
},
    { versionKey: false, timestamps: true }
)

exports.levals = mongoose.model("leval", levals)