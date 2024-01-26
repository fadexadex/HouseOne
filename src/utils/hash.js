import bcrypt from "bcrypt";

// Hash a plain text password
export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 5);
};

// Verify if a plain text password matches a hashed password
export const passwordMatches = async (password, userpassword) => {
  return await bcrypt.compare(password, userpassword);
};
