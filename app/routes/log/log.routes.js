import express from "express";

import services from "$services/index.js";

const router = express.Router();
const log = services.log();

router.get("/", log.readAll);

export default router;
