const Joi = require('joi');
const mongoose=require('mongoose')

const Rental=new mongoose.model('Rental',new mongoose.Schema({
    customer: {
        type: mongoose.Types.ObjectId,
        ref: "Customer", required: true,
    },
    movie: {
        type: mongoose.Types.ObjectId,
        ref: "Movie", required: true,
    },
    }));

  const validatRental = (rental) => {
    const schema = {
      customerId: Joi.string().required(),
      movieId: Joi.string().required()
    }
    return Joi.validate(rental, schema)
  }

exports.Rental=Rental;
exports.validate=validatRental;