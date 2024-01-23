import { DataTypes } from "sequelize";
import { sequelize } from "../config2/dbConfig";

export const category = sequelize.define("category", {
  categoryId: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {},
});
