const mongooose= require('mongoose');

const Joi= require('joi');

const phoneSchema= new mongooose.Schema({
    phone:{
        type:String,
        required: true,
        minlength:3,
        maxlength:255
    },
    type:{
        type:String,
        required:true,
        minlength:3,
        maxlength:255
    }
})

const bookSchema= new mongooose.Schema({
    fullName:{
        type:String,
        required:true,
        minlength:3,
        maxlength:255
    },
    phones:{
        type:[phoneSchema]
    },
    city:{
        type:String,
        required:true,
        minlength:3,
        maxlength:255
    }
});


const Book= mongooose.model('phoneBook',bookSchema);

function validate(phone){
    const schema= Joi.object({
        fullName: Joi.string().min(3).max(255).required(),
        phones: Joi.array().required(),
        city: Joi.string().min(3).max(255).required()
    })
    return schema.validate(phone)
}

module.exports={Book,validate};