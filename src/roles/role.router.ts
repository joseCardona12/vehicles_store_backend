import { Router } from "express";
import { RoleController } from "./role.controller";

export const roleRouter: Router = Router();
roleRouter.get("/", RoleController.getAllRoles);
