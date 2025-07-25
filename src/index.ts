import express, { Express } from "express";
import { port } from "./utils/constants/loadEnv";

console.log("port", port);
const app: Express = express();
app.listen(port, () => {
  console.log("Hello");
});
