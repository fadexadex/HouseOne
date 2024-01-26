import express from "express";
const authRoute = express.Router();

import { createCustomer, logCustomer } from "../controllers/auth.js";

authRoute.post("/create-account", createCustomer);
authRoute.post("/login", logCustomer);

export default authRoute;
