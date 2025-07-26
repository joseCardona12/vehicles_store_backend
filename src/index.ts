import express, { Express } from "express";
import { UtilApplication } from "./utils/utilApplication";
import { router } from "./routes";

const app: Express = express();
app.use(express.json()); //Avaible the transfer data with json format
app.use("/api", router); //Middleware router

UtilApplication.initServer(app); //Init server with ORM sequilize
