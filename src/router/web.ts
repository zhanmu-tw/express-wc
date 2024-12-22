import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs/promises";

const router: Router = Router();
const publicDir: string = path.resolve(__dirname, "public");
const componentsDir: string = path.resolve(__dirname, "../components");

router.get(
  "/components/*",
  async (req: Request, res: Response): Promise<void> => {
    const componentFilePath = path.join(componentsDir, req.params[0]);
    try {
      await fs.access(componentFilePath);
      res.sendFile(componentFilePath);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error accessing component file: ${error.message}`);
      } else {
        console.error("Error accessing component file: Unknown error");
      }
      res.status(404).send("Component file not found.");
    }
  }
);

router.get("*", async (req: Request, res: Response): Promise<void> => {
  const requestedPath =
    req.path === "/" ? "/index.html" : req.path + "/index.html";
  const filePath = path.join(publicDir, requestedPath);

  try {
    await fs.access(filePath);
    res.sendFile(filePath);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error accessing file: ${error.message}`);
    } else {
      console.error("Error accessing file: Unknown error");
    }
    res.status(404).send("index.html not found.");
  }
});

export default router;
