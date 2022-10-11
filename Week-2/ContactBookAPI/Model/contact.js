const Joi = require('joi')
const mongoose = require('mongoose')

const Contact = new mongoose.model('contact', new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255,
    },
    phones: [
        {
            type: String,
            required: true,
            min: 10,
            max: 10,
        }],
        // ,
        // {
        //     type: String,
        //     // required: true,
        //     min: 10,
        //     max: 10,
        // }],
    city: {
        type: String,
        required: true,
        min: 0,
        max: 255,
    }
}))

const validateContact = (contact) => {
    const schema = {
        fullName: Joi.string().min(3).max(50).required(),
        phones: Joi.string().min(10).required(),
        city: Joi.string().min(0).required()
    }
    return Joi.validate(contact, schema)
}

exports.Contact = Contact;
exports.validate = validateContact;