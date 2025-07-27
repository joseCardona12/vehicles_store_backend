import { Router } from "express";
import { UserController } from "./user.controller";

export const userRouter: Router = Router();
userRouter.get("/", UserController.getAllUsers);
