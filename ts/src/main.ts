import "reflect-metadata";
;import express from 'express';
import { RegisterRoutes } from "./routes";
const app = express();

RegisterRoutes(app);
app.get("/version", (req: any, res: any) => {
    res.json({version: "0.1.1"});
})
app.listen(3000);