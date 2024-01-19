import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
import { Customer } from "./1customer.js";
import { Order } from "./3order.js";

// payment_history
// -
// payment_id int pk
// email varchar FK >- customers.email
// order_id int FK >- orders.order_id
// amount decimal
// date timestamp

export const paymentHistory = sequelize.define("paymentHistory", {
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    references: {
      model: "Customers",
      key: "email",
    },
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Orders",
      key: "orderId",
    },
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  paymentDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Customer.hasOne(paymentHistory, {
  foreignKey: "email",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

paymentHistory.belongsTo(Customer, {
  foreignKey: "email",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Order.hasOne(paymentHistory, {
  foreignKey: "orderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

paymentHistory.belongsTo(Order, {
  foreignKey: "orderId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

try {
  await paymentHistory.sync();
} catch (error) {
  console.log(error.message);
  console.log("Unable to sync to database");
}
