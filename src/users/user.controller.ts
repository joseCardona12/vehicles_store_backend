import { UtilApplication } from "../utils/utilApplication";
import { UserModel } from "./user.model";
import { userService as UserService } from "./user.service";
import { Request, Response } from "express";

export class UserController {
  public static async getAllUsers(_: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.findAll();
      res.status(200).json({
        message: "Success to get Users",
        status: 200,
        data: users,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: error,
        status: 500,
        data: [],
      });
    }
  }
}
