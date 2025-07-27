import { Express } from "express";
import { port } from "./constants/loadEnv";
import { sequelize } from "../config/db";
import { IFormatResponse } from "../interfaces/formatResponse";

export class UtilApplication {
  public static async initServer(app: Express): Promise<void> {
    await sequelize.authenticate();
    console.log("Trying with the database");
    await sequelize.sync();
    console.log("Synchronizing with the database");
    app.listen(port, () => {
      console.log(`Server running on the port: ${port}`);
    });
  }

  public static verifyExistParams(...values: (string | number)[]): boolean {
    return values.every((value) => value);
  }
}
