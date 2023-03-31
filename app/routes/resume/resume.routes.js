import express from "express";

import { Resume } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, Resume.CREATE);
router.get("/", Resume.ALL);
router.get("/:id", Resume.SINGLE);
router.delete("/:id", jwt, Resume.DELETE);
router.patch("/:id", jwt, Resume.UPDATE);

export default router;
