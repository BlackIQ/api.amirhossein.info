import express from "express";

import { Skill } from "$controllers";

const router = express.Router();

router.post("/", Skill.CREATE);
router.get("/", Skill.ALL);
router.get("/:id", Skill.SINGLE);
router.delete("/:id", Skill.DELETE);
router.patch("/:id", Skill.UPDATE);

export default router;
