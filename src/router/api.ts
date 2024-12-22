import { Request, Response, Router } from "express";

const router: Router = Router();

let number = 0;

router.post("/increment", (req: Request, res: Response) => {
  number += 1;
  res.json({ number });
});

router.get("/", (req: Request, res: Response) => {
  res.send("Hello API World!");
});

export default router;
