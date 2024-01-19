import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const OrderItem = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.STRING,
    references: {
      model: "Products",
      key: "id",
    },
  },
  quantity: DataTypes.INTEGER,
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
