import express from "express";

import { Experience } from "$controllers";

const router = express.Router();

router.post("/", Experience.CREATE);
router.get("/", Experience.ALL);
router.get("/:id", Experience.SINGLE);
router.delete("/:id", Experience.DELETE);
router.patch("/:id", Experience.UPDATE);

export default router;
