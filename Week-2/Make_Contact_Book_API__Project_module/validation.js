const Joi = require("joi");

const contact = Joi.object({
    fullname:Joi.string().required().min(2).max(16),
    
    phones: Joi.array().items({
       phone: Joi.string().required().min(10).max(12),
       type: Joi.string().required(),
      }),

    city : Joi.string()
})

const add_contact = Joi.object({
    phone: Joi.string().required().min(10).max(12),
    type: Joi.string().required(),
});

const update_contact = Joi.object({
    phone: Joi.string().required().min(10).max(12),
    type: Joi.string().required(),
  });

  const edit_contact = Joi.object({
    fullname : Joi.string().min(2).max(16),
    city : Joi.string()
  })


  module.exports = { contact , update_contact , add_contact , edit_contact };