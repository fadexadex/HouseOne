import Joi from "joi";

export const createCustomerSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.number().integer().min(0).max(9999999999).required(),
  street: Joi.string().required(),
  apartment: Joi.string().required(),
  city: Joi.string().required(),
  zip: Joi.string().required(),
  country: Joi.string().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
