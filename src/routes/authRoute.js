import express from "express";
import passport from "passport";
const authRoute = express.Router();

import {
  createCustomer,
  handleFailedLogin,
  handleSuccessfulLogin,
  logCustomer,
} from "../controllers/auth.js";
import { passportAuthCustomer } from "../middlewares/auth.js";

authRoute.post("/create-account", createCustomer);

authRoute.post("/login", logCustomer);

authRoute.post(
  "/passport-login",
  passport.authenticate("local", {
    successRedirect: "/login-success",
    failureRedirect: "/login-failure",
  })
);

export default authRoute;
