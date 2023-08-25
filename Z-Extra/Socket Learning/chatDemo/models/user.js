import Joi from "joi";
import mongoose  from "mongoose";
const { model, Schema } = mongoose;

const user = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255
    },
    phone: {
      type: Number,
      required: true
    },

    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255
    }
  },
  { timestamp:true}
);

export const User = model("User", user);

export function validateUser(user) {
  const schema = {
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required(),
    phone: Joi.number().required(),
    password: Joi.string().min(5).max(255).required()
  };
  return Joi.validate(user, schema);
}
