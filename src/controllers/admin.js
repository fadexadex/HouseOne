import { customer } from "../models2/customer.js";
import { email } from "../validation/schemaValidation.js";

//Make user admin
const makeUserAdmin = async (req, res) => {
  const { error, value } = email.validate(req.body);

  if (error) {
    return res.status(400).json({ error: "Invalid Request" });
  }

  const { email } = req.body;

  try {
    const findUser = await customer.findOne({ email });
    if (!findUser) {
      res.status(404).json({ message: "User not found" });
    }

    findUser.isAdmin = true;
    await findUser.save();
    res.status(200).json({ message: "User is now an admin" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logAdmin = async (req, res) => {};
