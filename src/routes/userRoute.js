import express from "express";
import { getUserDetails } from "../controllers/user";
const userRoute = express.Router();

userRoute.get("/get-user-profile", getUserDetails);
userRoute.put("/update-user-profile", getUserDetails);

export default userRoute;
