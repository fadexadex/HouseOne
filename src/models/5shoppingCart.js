import { BelongsTo, DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { cartItem } from "./8cartItem.js";
import { Customer } from "./1customer.js";

export const shoppingCart = sequelize.define("shoppingCart", {
  shoppingCartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Customers",
      key: "email",
    },
  },
});

// shoppingCart.hasMany(cartItem, {
//   foreignKey: "shoppingCartId",
//  onDelete: "CASCADE",
// onUpdate: "CASCADE",
// });

// cartItem.hasOne(shoppingCart, {
//   foreignKey: "shoppingCartId",
//  onDelete: "CASCADE",
// onUpdate: "CASCADE",
// });

// try {
//   await shoppingCart.sync();
// } catch (error) {
//   console.log(error.message);
//   console.log("Unable to sync to database");
// }
