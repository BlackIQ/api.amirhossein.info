import express from "express";

import { Experience } from "$app/controllers/index.js";

import { jwt } from "$app/middlewares/index.js";

const router = express.Router();

router.post("/", jwt, Experience.CREATE);
router.get("/", Experience.ALL);
router.get("/:id", Experience.SINGLE);
router.delete("/:id", jwt, Experience.DELETE);
router.patch("/:id", jwt, Experience.UPDATE);

export default router;
