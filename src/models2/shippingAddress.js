import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const ShippingAddress = sequelize.define("ShippingAddress", {
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
  shippingAddress1: DataTypes.STRING,
  shippingAddress2: DataTypes.STRING,
  city: DataTypes.STRING,
  zip: DataTypes.STRING,
  country: DataTypes.STRING,
  phone: DataTypes.STRING,
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
