import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const api = process.env.API_URL;
const PORT = process.env.PORT || 7000;

app.listen(7000, () => {
  console.log(api);
  console.log(`Server running http://localhost:${PORT}`);
});
