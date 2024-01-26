import dotenv from "dotenv";

dotenv.config();

import jwt from "jsonwebtoken";

//generate access token
export function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

//verify access token
export async function verifyToken(generatedToken) {
  return jwt.verify(generatedToken, process.env.JWT_SECRET);
}
