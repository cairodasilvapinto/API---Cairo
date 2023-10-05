import { DataSource } from "typeorm";

import "dotenv/config";

import "reflect-metadata";

const port_db = process.env.DB_PORT as unknown as number | undefined;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port_db,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // entities: [`../../**/entities/*.{ts,js}`],
    // migrations: [`../../**/migrations/*.{ts,js}`],

    entities: ["C:/Users/user/Desktop/API - Cairo/src/modules/users/entities/*.{ts,js}"],
    migrations: ["C:/Users/user/Desktop/API - Cairo/src/database/migrations/*.{ts,js}"],
});