import { DataType } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const Customer = sequelize.define("Customer", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  passwordHash: DataTypes.STRING,
  addressId: {
    type: DataTypes.STRING,
    references: {
      model: "Addresses",
      key: "addressId",
    },
  },
  phone: DataTypes.STRING,
  isAdmin: DataTypes.BOOLEAN,
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
