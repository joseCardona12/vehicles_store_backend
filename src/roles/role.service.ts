import { IRole } from "./role.interface";
import { RoleModel } from "./role.model";
import { roleRepository as RoleRepository } from "./role.repository";

class RoleService implements IRole {
  public async findAll(): Promise<RoleModel[]> {
    try {
      return await RoleRepository.findAll();
    } catch (error: unknown) {
      throw error;
    }
  }
}

export const roleService: IRole = new RoleService();
