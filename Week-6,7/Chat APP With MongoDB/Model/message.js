const mongoose=require("mongoose")
const msgSchema=new mongoose.Schema({
    msg:{
        type:String,
        required:true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

const Msg=mongoose.model("messages",msgSchema)
module.exports=Msg;