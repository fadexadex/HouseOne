import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

export const order = sequelize.define("order", {
  orderId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    type: DataTypes.STRING,
    primaryKey: true,
  },
  customerId: {
    type: DataTypes.UUID,
    references: {
      model: "customers",
      key: "customerId",
    },
  },
  shippingAddressId: {
    type: DataTypes.UUID,
    references: {
      model: "shippingAddresses",
      key: "shippingAddressId",
    },
  },
  status: DataTypes.STRING,
  totalPrice: { type: DataTypes.DECIMAL(10, 2) },
  orderDate: { type: DataTypes.DATE },
});

// Synchronize the models with the database
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database and tables synced");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });
