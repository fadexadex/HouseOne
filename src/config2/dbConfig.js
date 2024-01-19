import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("House-One-v2", "postgres", ****, {
  host: "localhost",
  dialect: "postgres",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
