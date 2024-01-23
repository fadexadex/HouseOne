import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

export const customer = sequelize.define("customer", {
  customerId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  passwordHash: DataTypes.STRING,
  addressId: {
    type: DataTypes.UUID,
    references: {
      model: "addresses",
      key: "addressId",
    },
  },
  phone: DataTypes.STRING,
  isAdmin: DataTypes.BOOLEAN,
  refreshToken: DataTypes.STRING,
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
