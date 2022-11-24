const mongoose=require("mongoose")
const BaseJoi=require("joi")
const ImageExtension = require('joi-image-extension')
const Joi = BaseJoi.extend(ImageExtension)

const Product=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    description:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true,
        minlength:3,
        maxlength:30
    },
    price:{
        type:Number,
        required:true
    },
    countInStock:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true,
        minlength:1,
        maxlength:5
    },
    numReviews:{
        type:Number,
        required:true
    },
    dateCreated:{
        type:Date,
        default:Date.now
    }
})

Product.virtual("id").get(function (){
    return this._id.toHexString();
})

Product.set("toJSON",{
    virtuals:true
})

exports.Product=mongoose.model("Product",Product)

function validateProduct(product){
    const schema={
        productName:Joi.string().min(3).max(30).required(),
        description:Joi.string().min(5).max(100).required(),
        image:Joi.string(),
        brand:Joi.string().min(3).max(30).required(),
        price:Joi.number().required(),
        countInStock:Joi.number().required(),
        rating:Joi.number().integer().min(1).max(5).required(),
        numReviews:Joi.number().required(),
    };
    return Joi.validate(product,schema)
}
exports.validate=validateProduct;

