import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { Item } from "./6item.js";

// cart_items
// -
// cart_item_id int pk
// item_id int FK >- items.item_id
// quantity int
// special_requests varchar

export const cartItem = sequelize.define("cartItem", {
  cartItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  shoppingCartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "shoppingCarts",
      key: "shoppingCartId",
    },
  },
  itemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Items",
      key: "itemId",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  specialRequests: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Item.hasOne(cartItem, {
//   foreignKey: "itemId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

// cartItem.belongsTo(Item, {
//   foreignKey: "itemId",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

try {
  await cartItem.sync();
} catch (error) {
  console.log(error.message);
  console.log("Unable to sync to database");
}
