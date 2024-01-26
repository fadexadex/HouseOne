import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const orderItem = sequelize.define("orderItem", {
  orderId: {
    type: DataTypes.STRING,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  productId: {
    type: DataTypes.STRING,
    references: {
      model: "products",
      key: "productId",
    },
  },
  quantity: DataTypes.INTEGER,
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
