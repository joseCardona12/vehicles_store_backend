import { RoleModel } from "../roles/role.model";
import { IUser } from "./user.interface";
import { UserModel } from "./user.model";
import { userRepository as UserRepository } from "./user.repository";

class UserService implements IUser {
  public async findAll(): Promise<UserModel[]> {
    try {
      const users = await UserModel.findAll({
        include: [
          {
            model: RoleModel,
            attributes: ["name"],
          },
        ],
        attributes: { exclude: ["password"] },
      });
      return users;
    } catch (error: unknown) {
      throw error;
    }
  }
}

export const userService = new UserService();
