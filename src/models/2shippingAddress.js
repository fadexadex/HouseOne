import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { Customer } from "./1customer.js";

// shipping_address
// -
// address_id pk int
// email varchar FK >- customers.email
// street_address varchar
// city varchar
// state varchar
// zip_code int

export const shippingAddress = sequelize.define("shippingAddress", {
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    references: {
      model: "Customers",
      key: "email",
    },
  },
  streetAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zipCode: {
    type: DataTypes.INTEGER,
  },
});

Customer.hasOne(shippingAddress, {
  foreignKey: "email",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

shippingAddress.belongsTo(Customer, {
  foreignKey: "email",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

try {
  await shippingAddress.sync();
} catch (error) {
  console.log(error.message);
  console.log("Unable to sync to database");
}
