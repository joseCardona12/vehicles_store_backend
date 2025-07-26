import express, { Express } from "express";
import { UtilApplication } from "./utils/utilApplication";

const app: Express = express();

UtilApplication.initServer(app);
