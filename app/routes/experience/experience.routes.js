import express from "express";

import { Experience } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, Experience.CREATE);
router.get("/", Experience.ALL);
router.get("/:id", Experience.SINGLE);
router.delete("/:id", jwt, Experience.DELETE);
router.patch("/:id", jwt, Experience.UPDATE);

export default router;
