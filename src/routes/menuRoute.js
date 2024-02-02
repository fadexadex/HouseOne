import express from "express";
import { getMenu, getMenuById } from "../controllers/menu";
const menuRoute = express.Router();

menuRoute.get("/menu", getMenu);
menuRoute.get("/menu", getMenuById);
