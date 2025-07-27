import { RoleModel } from "./role.model";

export interface IRole {
  /**
   *
   * @returns a Promise that resolve a roleModel array.
   * @throws Error if exists some problem with Roles.
   */
  findAll(): Promise<RoleModel[]>;
}
