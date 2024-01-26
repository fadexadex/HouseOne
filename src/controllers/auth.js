import { customer } from "../models2/customer.js";
import { address } from "../models2/address.js";
import asyncHandler from "express-async-handler";
import { generateToken } from "../utils/jwt.js";
import { createCustomerSchema } from "../validation/schemaValidation.js";
import { hashPassword } from "../utils/hash.js";
import { loginSchema } from "../validation/schemaValidation.js";

//create a new customer
export const createCustomer = asyncHandler(async (req, res) => {
  const { error, value } = createCustomerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: "Invalid Request" });
  }

  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    street,
    apartment,
    city,
    zip,
    country,
  } = value;

  try {
    const customerExists = await customer.findOne({ where: { email } });
    if (customerExists) {
      return res
        .status(409)
        .json({ error: "A customer with the given email exists already" });
    }

    const homeAddress = await address.create({
      street,
      apartment,
      city,
      zip,
      country,
    });
    const addressId = homeAddress.addressId;

    const passwordHash = await hashPassword(password);
    const newCustomer = await customer.create({
      first_name,
      last_name,
      email,
      passwordHash,
      addressId,
      phone,
    });
    if (!newCustomer) {
      return res.status(500).json({ error: "Something went wrong" });
    }

    const details = {
      customerId: newCustomer?.customerId,
      first_name: newCustomer?.first_name,
      last_name: newCustomer?.last_name,
      email: newCustomer?.email,
      phone: newCustomer?.phone,
      addressId: newCustomer?.addressId,
      updatedAt: newCustomer?.updatedAt,
      createdAt: newCustomer?.createdAt,
      isAdmin: newCustomer?.isAdmin,
    };

    const token = generateToken(details);
    res.cookie("token", token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: true });
    return res.status(201).json({
      message: "Account created Successfully",
      customer: details,
      token: token,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
});

export const logCustomer = asyncHandler(async (req, res) => {
  const { error, value } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: "Invalid Request" });
  }
  const { email, password } = value;
  try {
    const customerExists = await customer.findOne({ where: { email } });
    if (!customerExists) {
      return res.status(401).json({ error: "Invalid Credentials" });
    }
    console.log(customerExists);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
