import { Sequelize } from "sequelize-typescript";
import {
  db_host,
  db_name,
  db_password,
  db_port,
  db_user,
} from "../utils/constants/loadEnv";
import { RoleModel } from "../roles/role.model";
import { UserModel } from "../users/user.model";
import { BrandModel } from "../brands/brand.model";
import { CarModel } from "../cars/car.model";
import { ImageModel } from "../images/image.model";

export const sequelize: Sequelize = new Sequelize({
  dialect: "mysql",
  host: db_host,
  username: db_user,
  password: db_password,
  database: db_name,
  port: parseInt(db_port),
  models: [RoleModel, UserModel, BrandModel, CarModel, ImageModel],
});
