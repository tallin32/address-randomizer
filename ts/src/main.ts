import "reflect-metadata";
;import express from 'express';
import { RegisterRoutes } from "./routes";
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();

RegisterRoutes(app);
app.use(function(err: any, req: express.Request, res: express.Response, next: any) {
    res.status(500).json(err);
})
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.get("/version", (req: any, res: any) => {
    res.json({version: "0.1.1"});
})
app.listen(3000);