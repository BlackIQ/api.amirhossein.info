import express from "express";
import cors from "cors";

import routes from "$routes/index.js";
import middlewares from "$middlewares/index.js";

const app = express();

app.set("json spaces", 2);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(middlewares.log());

app.use("/v1", routes);

export default app;
