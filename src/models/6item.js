import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { cartItem } from "./8cartItem.js";

export const Item = sequelize.define("Item", {
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// try {
//   await Item.sync();
// } catch (error) {
//   console.log(error.message);
//   console.log("Unable to sync to database");
// }
