import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/db-config";
import router from "./routes/route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// Database connection.
dbConnection()
  .then(() => {
    console.log("Successfully connected.");
  })
  .catch((err) => console.error(err));

app.use("/api", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
