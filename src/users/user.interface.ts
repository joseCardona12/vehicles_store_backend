import { UserModel } from "./user.model";

export interface IUser {
  /**
   * @returns promise type array UserModel
   * @throws Error if exists some error with userModel
   */
  findAll(): Promise<UserModel[]>;
}
