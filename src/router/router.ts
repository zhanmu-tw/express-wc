import { Router } from "express";
import apiRouter from "./api";
import webRouter from "./web";

const router: Router = Router();

router.use("/api", apiRouter);

router.use("/", webRouter);

export default router;
