import { UserModel } from "../users/user.model";

export interface IAuth {
  register(
    req: Pick<
      UserModel,
      "name" | "email" | "password" | "cellphone" | "role_id"
    >
  ): Promise<UserModel | number>;
  login(email: string, password: string): Promise<UserModel | null>;
}
