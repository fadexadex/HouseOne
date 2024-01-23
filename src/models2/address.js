import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

export const address = sequelize.define("address", {
  addressId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  street: DataTypes.STRING,
  apartment: DataTypes.STRING,
  city: DataTypes.STRING,
  zip: DataTypes.INTEGER,
  country: DataTypes.STRING,
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
