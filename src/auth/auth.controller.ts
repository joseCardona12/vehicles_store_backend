import { Response, Request } from "express";

export class AuthController {
  public static async login(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body;
    console.log("email", email);
    console.log("password", password);
  }

  public static async register(req: Request, res: Response): Promise<void> {
    res.send("register");
  }
}
