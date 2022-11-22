const mongoose=require("mongoose")
const Joi=require('joi')

const User=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 50
    },
    email:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 50,
        unique: true
    },
    passwordHash:{
        type:String,
        required:true,
        minlength: 5,
        maxlength: 250
    },
    phone:{
        type:Number,
        required:true,
        minlength: 10,
        maxlength: 10
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    street:{
        type:String,
        minlength: 5,
        maxlength: 255
    },
    apartment:{
        type:String,
        minlength: 5,
        maxlength: 255
    },
    zip:{
        type:String,
        minlength: 5,
        maxlength: 50
    },
    city:{
        type:String,
        minlength: 5,
        maxlength: 255
    },
    country:{
        type:String,
        minlength: 5,
        maxlength: 50
    }
})

User.virtual('id').get(function(){
    return this._id.toHexString();
})

User.set('toJSON',{
    virtuals:true,
})

exports.User=mongoose.model('User',User)

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required().email(),
        passwordHash: Joi.string().min(5).max(50).required(),
        phone: Joi.number().min(10).required(),
        street:Joi.string().min(5).max(255).required(),
        apartment:Joi.string().min(5).max(255).required(),
        zip:Joi.string().min(5).max(50).required(),
        city:Joi.string().min(5).max(50).required(),
        country:Joi.string().min(5).max(50).required(),
    };
    return Joi.validate(user, schema);
}
exports.validate = validateUser;