import { UserModel } from "../users/user.model";

export interface IAuth {
  /**
   *
   * @param req name, email, password, cellphone, role_id
   * @returns UserModel or number
   * @throws error
   *
   */
  register(
    req: Pick<
      UserModel,
      "name" | "email" | "password" | "cellphone" | "role_id"
    >
  ): Promise<UserModel | number>;
  login(email: string, password: string): Promise<UserModel | null>;
}
