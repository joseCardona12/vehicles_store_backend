import { Sequelize } from "sequelize-typescript";
import {
  db_host,
  db_name,
  db_password,
  db_port,
  db_user,
} from "../utils/constants/loadEnv";

export const sequelize: Sequelize = new Sequelize({
  dialect: "mysql",
  host: db_host,
  username: db_user,
  password: db_password,
  database: db_name,
  port: parseInt(db_port),
  models: [],
});
