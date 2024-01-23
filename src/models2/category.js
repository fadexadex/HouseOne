import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig.js";

export const category = sequelize.define("category", {
  categoryId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  icon: DataTypes.STRING,
  color: DataTypes.STRING,
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
