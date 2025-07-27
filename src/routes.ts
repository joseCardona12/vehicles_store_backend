import { Router } from "express";
import { authRouter } from "./auth/route";
import { roleRouter } from "./roles/role.router";
import { userRouter } from "./users/user.router";

export const router: Router = Router();
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/roles", roleRouter);
