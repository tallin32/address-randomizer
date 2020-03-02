import "reflect-metadata";
;import express from 'express';
import { container } from "tsyringe";
import { RegisterRoutes } from "./routes";
import { FakerService } from "./service/fakerService";

import swaggerUI = require("swagger-ui-express");
// tslint:disable-next-line
const swaggerDocument = require("./swagger.json");
const app = express();
container.register("ServiceBase", FakerService);

RegisterRoutes(app);
app.use((err: any, req: express.Request, res: express.Response, next: any) => {
    res.status(500).json(err);
})
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get("/version", (req: any, res: any) => {
    res.json({version: "0.1.1"});
})
app.listen(3000);