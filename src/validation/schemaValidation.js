import Joi from "joi";

export const createCustomerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  address: Joi.string().required(),
  phone: Joi.number().integer().min(0).max(9999999999).required(),
});
