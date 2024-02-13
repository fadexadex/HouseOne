import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

// Define the admin model
export const admin = sequelize.define("admin", {
  adminId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: DataTypes.DECIMAL,
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: true, // Admins are always admins
  },
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
