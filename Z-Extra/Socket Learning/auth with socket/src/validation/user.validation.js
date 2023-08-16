const Joi = require('joi');

const userRegisterValiadtion = async (payload) => {
    const schema = Joi.object().keys({
        username: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    const result = schema.validate(payload);

    const { value, error } = result;
    // console.log("error==========>", error);
    const valid = error == null;

    return { valid, error };
}

const userLoginValiadtion = async (payload) => {
    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    const result = schema.validate(payload);

    const { value, error } = result;
    // console.log("error==========>", error);
    const valid = error == null;

    return { valid, error };
}

module.exports = { userRegisterValiadtion, userLoginValiadtion }