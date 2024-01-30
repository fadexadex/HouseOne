import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

export const shippingAddress = sequelize.define("shippingAddress", {
  shippingAddressId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  customerId: {
    type: DataTypes.UUID,
    references: {
      model: "customers",
      key: "customerId",
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
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database and tables synced");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing the database:", error);
//   });
