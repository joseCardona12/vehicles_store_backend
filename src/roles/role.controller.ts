import { Request, Response } from "express";
import { roleService as RoleService } from "./role.service";

export class RoleController {
  public static async getAllRoles(_: Request, res: Response): Promise<void> {
    try {
      const roles = await RoleService.findAll();
      res.status(200).json({
        message: "Success to get roles",
        status: 200,
        data: roles,
      });
    } catch (error: unknown) {
      res.status(500).json({
        message: "Error with roles",
        status: 500,
        data: [],
      });
    }
  }
}
