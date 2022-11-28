const mongoose=require("mongoose")

const Product=new mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    datecreated:{
        type:Date,
        default:Date.now
    }
})

exports.Product=mongoose.model("Product",Product)
