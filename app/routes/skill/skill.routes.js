import express from "express";

import { Skill } from "$app/controllers/index.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", jwt, Skill.CREATE);
router.get("/", Skill.ALL);
router.get("/:id", Skill.SINGLE);
router.delete("/:id", jwt, Skill.DELETE);
router.patch("/:id", jwt, Skill.UPDATE);

export default router;
