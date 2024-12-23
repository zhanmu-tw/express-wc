import { Request, Response, Router } from "express";

const router: Router = Router();

router.get("/", (_req: Request, res: Response): void => {
  const date = new Date();
  res.render("index", { text: date });
});

export default router;
