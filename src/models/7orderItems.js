import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { Item } from "./6item.js";
import { Order } from "./3order.js";

export const OrderItem = sequelize.define("OrderItem", {
  OrderItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  OrderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Orders",
      key: "OrderId",
    },
  },
  ItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Items",
      key: "ItemId",
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

Order.hasOne(OrderItem, {
  foreignKey: "OrderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

OrderItem.belongsTo(Order, {
  foreignKey: "OrderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Item.hasOne(OrderItem, {
  foreignKey: "ItemId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

OrderItem.belongsTo(Item, {
  foreignKey: "ItemId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

// try {
//   await Item.sync();
// } catch (error) {
//   console.log(error.message);
//   console.log("Unable to sync to database");
// }
