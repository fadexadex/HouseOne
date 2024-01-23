import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  "House-One",
  "postgres",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
