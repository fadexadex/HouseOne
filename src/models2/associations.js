import { sequelize } from "../config2/dbConfig";
import { customer } from "./customer";
import { address } from "./address";
import { order } from "./order";
import { shippingAddress } from "./shippingaddress";
import { product } from "./products";
import { orderItem } from "./orderItem";

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
