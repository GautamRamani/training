const mongoose=require("mongoose")

const Category=new mongoose.Schema({
    color:{
        type:String,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    icon:{
        type:String,
        required:true
    },
})

exports.Category=mongoose.model("Category",Category)
