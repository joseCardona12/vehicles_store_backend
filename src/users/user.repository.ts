import { UserModel } from "./user.model";

class UserRepository {
  public async findAll(): Promise<UserModel[]> {
    try {
      return await UserModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async findUserByEmail(email: string): Promise<UserModel | null> {
    try {
      return await UserModel.findOne({
        where: {
          email,
        },
      });
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async login(
    email: string,
    password: string
  ): Promise<UserModel | null> {
    try {
      return await UserModel.findOne({
        where: {
          email,
          password,
        },
      });
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async createUser(user: Partial<UserModel>): Promise<UserModel> {
    try {
      return await UserModel.create(user);
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

export const userRepository = new UserRepository();
