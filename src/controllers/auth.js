import { customer } from "../models2/customer";
import asyncHandler from "express-async-handler";

export const createCustomer = asyncHandler(async (req, res) => {
  const { error, value } = createProfileSchema.validate(payload);
  const { name, email, password, address, phone } = req.body;
});
