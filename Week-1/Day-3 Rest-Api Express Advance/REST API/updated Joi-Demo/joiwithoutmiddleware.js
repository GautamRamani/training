const Joi = require('joi');
const schema = Joi.object()
  .keys({
    name: Joi.string()
      .min(3)
      .max(40)
      .required(),
    age: Joi.number()
      .integer()
      .min(16)
  })
const data = {
  name: 'Srajan',
  age: 15    //17
};

const result = schema.validate(data);
console.log(result);