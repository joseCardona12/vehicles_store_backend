import { UserModel } from "../users/user.model";
import { userRepository as UserRepository } from "../users/user.repository";
import { IAuth } from "./auth.interface";

class AuthService implements IAuth {
  public async register(
    req: Pick<
      UserModel,
      "name" | "email" | "password" | "cellphone" | "role_id"
    >
  ): Promise<UserModel | number> {
    const { email } = req;
    try {
      const user = await UserRepository.findUserByEmail(email);
      if (!user) {
        const createdUser = await UserRepository.createUser(req);
        return createdUser;
      }
      return 1;
    } catch (error: unknown) {
      throw error;
    }
  }
  public async login(
    email: string,
    password: string
  ): Promise<UserModel | null> {
    try {
      const foundUser = await UserRepository.login(email, password);
      return foundUser;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export const authService = new AuthService();
