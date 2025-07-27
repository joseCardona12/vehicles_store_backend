import { Response, Request } from "express";
import { UtilApplication } from "../utils/utilApplication";
import { authService as AuthService } from "./auth.service";
import { UserModel } from "../users/user.model";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../utils/constants/loadEnv";

export class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    const paramsVerifyExist = UtilApplication.verifyExistParams(
      email,
      password
    );
    if (!paramsVerifyExist) {
      res.status(400).json({
        message: "Error, is required all params",
        status: 400,
      });
      return;
    }
    try {
      const response = await AuthService.login(email, password);
      if (!response) {
        res.status(404).json({
          message: "User not found. Try again!",
          status: 404,
        });
        return;
      }
      const generatedToken = AuthController.generateToken({
        email,
        password,
      });
      if (!generatedToken) {
        res.status(400).json({
          message: "Error to generate token",
          status: 400,
        });
        return;
      }
      res.status(200).json({
        message: "success logged",
        status: 200,
        data: {
          user: response,
          token: generatedToken,
        },
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: error,
        status: 500,
      });
    }
  }

  public static async register(req: Request, res: Response): Promise<void> {
    const { name, email, password, cellphone, role_id = 2 } = req.body;
    const paramsVerifyExist = UtilApplication.verifyExistParams(
      name,
      email,
      password,
      cellphone
    );
    if (!paramsVerifyExist) {
      res.status(400).json({
        message: "Error, is required all params",
        status: 400,
      });
      return;
    }
    try {
      const response = await AuthService.register({
        name,
        email,
        password,
        cellphone,
        role_id,
      });
      if (response == 1) {
        res.status(400).json({
          message: "User exists. Try again!",
          status: 400,
        });
        return;
      }
      const generatedToken = AuthController.generateToken({
        name,
        email,
        password,
        cellphone,
        role_id,
      });

      if (!generatedToken) {
        res.status(400).json({
          message: "Error to generate token",
          status: 400,
        });
        return;
      }
      res.status(201).json({
        message: "Success to create user",
        status: 201,
        data: {
          user: response,
          token: generatedToken,
        },
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: error,
        status: 500,
      });
    }
  }

  public static generateToken(user: Partial<UserModel>): string {
    return jwt.sign(user, jwt_secret, { expiresIn: "1h" });
  }
}
