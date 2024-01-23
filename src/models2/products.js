import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const product = sequelize.define("product", {
  productId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  description: DataTypes.STRING,
  richDescription: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  images: DataTypes.STRING,
  brand: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  price: DataTypes.DECIMAL(10, 2),
  category: {
    type: DataTypes.STRING,
    references: {
      model: "category",
      key: "categoryId",
    },
  },
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
