import express, { Express } from "express";
import router from "./router/router";
import path from "path";

const app: Express = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
