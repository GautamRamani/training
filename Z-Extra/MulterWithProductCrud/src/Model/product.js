const mongoose = require("mongoose")
const Joi = require("joi")

const Product = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 5
    }
})

exports.Product = mongoose.model("Product", Product)

function validateProduct(product) {
    const schema = {
        productName: Joi.string().min(3).max(30).required(),
        description: Joi.string().min(5).max(100).required(),
        image: Joi.string(),
        price: Joi.number().required(),
        countInStock: Joi.number().required(),
        rating: Joi.number().integer().min(1).max(5).required(),
    };
    return Joi.validate(product, schema)
}

function validateUpdateProductImage(product) {
    const schema = {
        productId: Joi.string().required(),
        image: Joi.string()
    };
    return Joi.validate(product, schema)
}
exports.validate = { validateProduct, validateUpdateProductImage };