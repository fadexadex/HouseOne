import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoute from "./src/routes/authRoute.js";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import { customer } from "./src/models2/customer.js";
import {
  handleFailedLogin,
  handleSuccessfulLogin,
  passportLogCustomer,
} from "./src/controllers/auth.js";

dotenv.config();

const app = express();
const api = process.env.API_URL;
const PORT = process.env.PORT || 7000;
app.use(bodyParser.json());

app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(`${api}/auth`, authRoute);
app.get("/login-success", handleSuccessfulLogin);
app.get("/login-failure", handleFailedLogin);

passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    passportLogCustomer
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser(async (Auser, cb) => {
  try {
    const email = Auser.email;
    const user = await customer.findOne({ where: { email } });
    cb(null, user);
  } catch (err) {
    cb(err);
  }
});

app.listen(7000, () => {
  console.log(api);
  console.log(`Server running http://localhost:${PORT}`);
});
