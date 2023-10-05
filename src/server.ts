import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerUI from "swagger-ui-express";

import { AppDataSource } from "../data-source";

import "./shared/container";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

    app.use(router);

    // eslint-disable-next-line no-console
    app.listen(process.env.APP_PORT, () => console.log("Server is Running !"));
});
