// - **`GET /user/:id`**: Retrieve user details.
// - **`PUT /user/:id`**: Update user details.
// - **`DELETE /user/:id`**: Delete user account.

import { address } from "../models2/address";
import { customer } from "../models2/customer";

export const getUserDetails = async (req, res) => {
  try {
    const { customerId } = req.params;
    const user = await customer.findOne({ customerId });
    const address = await address.findOne({ addressId: user?.addressId });
    return res.status(201).json({
      customerId: user?.customerId,
      first_name: user?.first_name,
      last_name: user?.last_name,
      email: user?.email,
      phone: user?.phone,
      address: address,
      createdAt: user?.createdAt,
      isAdmin: user?.isAdmin,
    });
  } catch (error) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUserDetails = async (req, res) => {
  try {
    const { customerId } = req.params;
    const {
      first_name,
      last_name,
      email,
      phone,
      street,
      apartment,
      city,
      zip,
      country,
    } = req.body;
    const user = await customer.findOne({ customerId });
    const anAddress = await address.findOne({ addressId: address });

    anAddress.street = street;
    anAddress.apartment = apartment;
    anAddress.city = city;
    anAddress.zip = zip;
    anAddress.country = country;
    await anAddress.save();

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.phone = phone;
    user.addressId = address;
    await user.save();

    return res
      .status(200)
      .json({ message: "User details updated successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
