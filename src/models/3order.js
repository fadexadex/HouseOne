import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { Customer } from "./1customer.js";
import { shippingAddress } from "./2shippingAddress.js";

// orders
// -
// order_id int pk
// address_id int FK >- shipping_address.address_id
// email varchar FK >- customers.email
// order_date timestamp
// payment_status

export const Order = sequelize.define("Order", {
  orderId: {
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
  addressId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "shippingAddresses",
      key: "addressId",
    },
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

shippingAddress.hasOne(Order, {
  foreignKey: "addressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.belongsTo(shippingAddress, {
  foreignKey: "addressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Customer.hasOne(Order, {
  foreignKey: "email",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.belongsTo(Customer, {
  foreignKey: "email",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

try {
  await Order.sync();
} catch (error) {
  console.log(error.message);
  console.log("Unable to sync to database");
}
