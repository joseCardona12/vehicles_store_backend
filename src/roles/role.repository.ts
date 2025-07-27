import { RoleModel } from "./role.model";

class RoleRepository {
  public async findAll(): Promise<RoleModel[]> {
    try {
      return await RoleModel.findAll();
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

export const roleRepository = new RoleRepository();
