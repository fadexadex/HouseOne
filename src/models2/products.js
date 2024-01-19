import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  richDescription: DataTypes.STRING,
  image: DataTypes.STRING,
  images: DataTypes.JSON, // Assuming your database supports JSON type
  brand: DataTypes.STRING,
  price: DataTypes.FLOAT,
  category: DataTypes.STRING,
  countInStock: DataTypes.INTEGER,
  rating: DataTypes.FLOAT,
  isFeatured: DataTypes.BOOLEAN,
  dateCreated: DataTypes.DATE,
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
