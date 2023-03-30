import express from "express";

import { Resume } from "$controllers";

const router = express.Router();

router.post("/", Resume.CREATE);
router.get("/", Resume.ALL);
router.get("/:id", Resume.SINGLE);
router.delete("/:id", Resume.DELETE);
router.patch("/:id", Resume.UPDATE);

export default router;
