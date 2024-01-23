//Unecessary but still helps show the relationships between the tables
import { sequelize } from "../config2/dbConfig";
import { customer } from "./customer.js";
import { address } from "./address.js";
import { order } from "./order.js";
import { shippingAddress } from "./shippingaddress.js";
import { product } from "./products.js";
import { orderItem } from "./orderItem.js";

customer.belongsTo(address, {
  foreignKey: "addressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

address.hasOne(customer, {
  foreignKey: "addressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

order.belongsTo(customer, {
  foreignKey: "customerId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

customer.hasOne(order, {
  foreignKey: "customerId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

order.belongsTo(shippingAddress, {
  foreignKey: "shippingAddressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

shippingAddress.hasOne(order, {
  foreignKey: "shippingAddressId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

customer.hasOne(shippingAddress, {
  foreignKey: "customerId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

shippingAddress.belongsTo(customer, {
  foreignKey: "customerId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

product.hasOne(orderItem, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

orderItem.belongsTo(product, {
  foreignKey: "productId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database and tables synced");
  })
  .catch((error) => {
    console.error("Error synchronizing the database:", error);
  });
