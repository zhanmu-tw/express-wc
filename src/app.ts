import express, { Express } from "express";
import path from "path";
import apiRouter from "./routers/api";
import webRouter from "./routers/web";

const app: Express = express();

app.use(express.json());

app.use("/js", express.static(path.join(__dirname, "js")));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "../views"));

app.use("/api", apiRouter);

app.use("/", webRouter);

export default app;
