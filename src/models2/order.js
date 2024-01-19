import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  customerId: {
    type: DataTypes.STRING,
    references: {
      model: "Customers",
      key: "id",
    },
  },
  shippingAddressId: {
    type: DataTypes.STRING,
    references: {
      model: "ShippingAddresses",
      key: "id",
    },
  },
  status: DataTypes.STRING,
  totalPrice: DataTypes.FLOAT,
  orderDate: DataTypes.DATE,
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
