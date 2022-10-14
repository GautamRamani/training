const Joi = require('joi')
const mongoose = require('mongoose')

const phoneSchema=new mongoose.Schema({
    home:{
        type:String,
        required:true,
        minlegth:10,
        maxlength:10
    },
    office:{
        type:String,
        required:true,
        minlegth:10,
        maxlength:10
    }
})

const bookSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minlegth:3,
        maxlength:255
    },
    phones:{
        type:[phoneSchema]
    },
    city:{
        type:String,
        required:true,
        minlegth:3,
        maxlength:255
    }
});

const Book=mongoose.model('phoneBook',bookSchema)

const validate = (contact) => {
    const schema = {
        fullName:Joi.string().min(3).max(255).required(),
        phones:Joi.array().required(),
        city:Joi.string().min(3).max(255).required()
    }
    return Joi.validate(contact, schema)
}

module.exports={Book,validate}