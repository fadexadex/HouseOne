import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { shoppingCart } from "./5shoppingCart.js";

export const Customer = sequelize.define("Customer", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});

// Set up one-to-one association
// Customer.hasOne(shoppingCart, {
//   foreignKey: "email",
// onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// shoppingCart.belongsTo(Customer, {
//   foreignKey: "email",
//onDelete: "CASCADE",
// onUpdate: "CASCADE",
// });

// try {
//   await Customer.sync();
// } catch (error) {
//   console.log(error.message);
//   console.log("Unable to sync to database");
// }
