import { configDotenv } from "dotenv";

configDotenv();
export const { PORT: port = "3002" } = process.env;
