import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

export const customer = sequelize.define("customer", {
  customerId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  passwordHash: DataTypes.STRING,
  addressId: {
    type: DataTypes.UUID,
    references: {
      model: "addresses",
      key: "addressId",
    },
  },
  phone: DataTypes.DECIMAL,
  isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
  refreshToken: DataTypes.STRING,
});

// // Synchronize the models with the database
// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("Database and tables synced");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing the database:", error);
//   });
