import express from "express";

import services from "$services/index.js";

const router = express.Router();
const view = services.view();

router.get("/", view.readAll);

export default router;
