import express from "express";
import cors from "cors";

import { log, ip } from "$middlewares";
import router from "$routes";

const app = express();

app.set("json spaces", 2);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.use("/api", log, router);
app.use("*", (req, res) =>
  res.status(404).send({ url: req.originalUrl, message: "Page not found" })
);

export default app;
