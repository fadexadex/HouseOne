// **Retrieve Menu Items:**

// - **`GET /menu`**: Retrieve a list of all menu items.
// - **`GET /menu/:id`**: Retrieve details of a specific menu item by ID.
import { product } from "../models2/products";

export const getMenu = async (req, res) => {
  try {
    const products = await product.find();
    return res.status(201).json(products);
  } catch (error) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMenuById = async (req, res) => {
  try {
    const { productId } = req.params.id;
    const product = await product.findOne({ productId });
    return res.status(201).json(product);
  } catch (error) {
    console.error(err.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
