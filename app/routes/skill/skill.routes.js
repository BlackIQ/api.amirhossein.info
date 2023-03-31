import express from "express";

import { Skill } from "$controllers";
import { jwt } from "$middlewares";

const router = express.Router();

router.post("/", jwt, Skill.CREATE);
router.get("/", Skill.ALL);
router.get("/:id", Skill.SINGLE);
router.delete("/:id", jwt, Skill.DELETE);
router.patch("/:id", jwt, Skill.UPDATE);

export default router;
