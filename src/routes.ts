import { Router } from "express";
import { authRouter } from "./auth/route";
import { roleRouter } from "./roles/role.router";

export const router: Router = Router();
router.use("/auth", authRouter);
router.use("/roles", roleRouter);
