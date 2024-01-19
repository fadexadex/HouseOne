import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const Address = sequelize.define("Address", {
  addressId: {
    type: DataTypes.STRING,
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
